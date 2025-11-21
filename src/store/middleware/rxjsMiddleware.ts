import { Middleware, Dispatch, AnyAction } from '@reduxjs/toolkit'
import { Subject, interval, of } from 'rxjs'
import { filter, map, delay, switchMap, take } from 'rxjs/operators'
import { increment } from '../slices/counterSlice'
import { fetchUsersSuccess } from '../slices/userSlice'

/**
 * RxJS MIDDLEWARE FOR REDUX
 * 
 * WHERE IT'S USED:
 * - Registered in store.ts via: getDefaultMiddleware().concat(rxjsMiddleware)
 * - Intercepts ALL actions dispatched to Redux store
 * - Sits between action dispatch and reducer execution
 * 
 * WHY IT'S NEEDED:
 * - Handles complex async operations (delays, retries, cancellations)
 * - Provides reactive programming patterns for side effects
 * - Keeps components clean by moving async logic to middleware
 * - Enables powerful RxJS operators (switchMap, debounce, throttle, etc.)
 * - Better than Redux Thunk for complex async flows
 * 
 * HOW IT'S STORED IN REDUX:
 * 1. Import in store.ts: import { rxjsMiddleware } from './middleware/rxjsMiddleware'
 * 2. Add to middleware array in configureStore():
 *    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rxjsMiddleware)
 * 3. Redux automatically calls this middleware for every action
 */

// Create a subject to handle actions - this is the RxJS stream that all Redux actions flow through
const action$ = new Subject<{ type: string; payload?: unknown }>()

// RxJS Epic: Handle async increment with delay
action$
  .pipe(
    filter(action => action.type === 'counter/asyncIncrement'),
    switchMap(() => 
      interval(1000).pipe(
        take(1),
        map(() => increment())
      )
    )
  )
  .subscribe(action => {
    // This will be dispatched back to the store
    if (rxjsMiddleware.dispatch) {
      rxjsMiddleware.dispatch(action)
    }
  })

// RxJS Epic: Handle fetching users (simulated)
action$
  .pipe(
    filter(action => action.type === 'user/fetchUsers'),
    switchMap(() => 
      of([
        { id: '1', name: 'John Doe', email: 'john@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
      ]).pipe(
        delay(1500), // Simulate API delay
        map(users => fetchUsersSuccess(users))
      )
    )
  )
  .subscribe(action => {
    if (rxjsMiddleware.dispatch) {
      rxjsMiddleware.dispatch(action)
    }
  })

/**
 * MIDDLEWARE FUNCTION
 * 
 * This is the actual middleware that Redux calls for every action.
 * 
 * HOW IT WORKS:
 * 1. Redux calls this function: rxjsMiddleware(store)(next)(action)
 * 2. We save store.dispatch so RxJS epics can dispatch new actions
 * 3. We push the action to action$ stream for RxJS processing
 * 4. We call next(action) to continue the normal Redux flow
 * 
 * FLOW DIAGRAM:
 * Component dispatches action
 *        ↓
 * rxjsMiddleware intercepts it
 *        ↓
 * Action pushed to action$ stream → RxJS epics process it
 *        ↓
 * next(action) called → Reducer updates state
 *        ↓
 * Component re-renders with new state
 * 
 * REGISTRATION IN STORE:
 * In store.ts, add this to configureStore:
 * middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rxjsMiddleware)
 */
export const rxjsMiddleware: Middleware & { dispatch?: Dispatch<AnyAction> } = store => next => action => {
  // Store the dispatch function for use in observables
  // This allows RxJS epics to dispatch new actions back to Redux
  rxjsMiddleware.dispatch = store.dispatch
  
  // Push action to the subject for RxJS processing
  // All epics listening to action$ will receive this action
  action$.next(action as { type: string; payload?: unknown })
  
  // Continue with normal Redux flow
  // This ensures the action still reaches the reducers
  return next(action)
}
