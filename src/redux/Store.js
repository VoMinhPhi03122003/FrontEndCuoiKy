import {reducers} from './Reducer'
import {configureStore} from '@reduxjs/toolkit'

const savedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

export const store = configureStore({reducer: reducers, preloadedState: savedState})
store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())))