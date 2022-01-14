import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducer} from './reducer'
const saga=createSagaMiddleware()
const middleware=[thunk,saga,logger]
export const store = createStore(reducer,compose(applyMiddleware(...middleware),window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f))
