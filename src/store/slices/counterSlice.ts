import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  history: number[]
}

const initialState: CounterState = {
  value: 0,
  history: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.history.push(state.value)
      state.value += 1
    },
    decrement: (state) => {
      state.history.push(state.value)
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.history.push(state.value)
      state.value += action.payload
    },
    reset: (state) => {
      state.history.push(state.value)
      state.value = 0
    },
    // Action that will trigger RxJS middleware
    asyncIncrement: (state) => {
      // This will be handled by RxJS middleware
      state.history.push(state.value)
    },
  },
})

export const { increment, decrement, incrementByAmount, reset, asyncIncrement } = counterSlice.actions
export default counterSlice.reducer
