import {createStore, applyMiddleware} from 'redux'

import {logger} from '../middleware'
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers'

export default function cs(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware)(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module
      .hot
      .accept('../reducers', () => {
        const nextReducer = require('../reducers')
        store.replaceReducer(nextReducer)
      })
  }

  return store
}
