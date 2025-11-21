import { Middleware } from '@reduxjs/toolkit'
import { Subject, interval, of } from 'rxjs'
import { filter, map, delay, switchMap, take } from 'rxjs/operators'
import { increment } from '../slices/counterSlice'
import { fetchUsersSuccess } from '../slices/userSlice'

// Create a subject to handle actions
const action$ = new Subject<{ type: string; payload?: any }>()

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

// Middleware function
export const rxjsMiddleware: Middleware & { dispatch?: any } = store => next => action => {
  // Store the dispatch function for use in observables
  rxjsMiddleware.dispatch = store.dispatch
  
  // Push action to the subject for RxJS processing
  action$.next(action as { type: string; payload?: any })
  
  // Continue with normal Redux flow
  return next(action)
}
