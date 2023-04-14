import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import placeDataReducer from './reducers/placeDataReducer'
import tokenReducer from './reducers/tokenReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    placeData: placeDataReducer,
    token: tokenReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch