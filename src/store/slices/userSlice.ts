import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  name: string
  email: string
}

interface UserState {
  currentUser: User | null
  users: User[]
  loading: boolean
}

const initialState: UserState = {
  currentUser: null,
  users: [],
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    // Action that will trigger RxJS middleware for async operations
    fetchUsers: (state) => {
      state.loading = true
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      state.loading = false
    },
  },
})

export const { 
  setCurrentUser, 
  addUser, 
  removeUser, 
  setLoading,
  fetchUsers,
  fetchUsersSuccess 
} = userSlice.actions

export default userSlice.reducer
