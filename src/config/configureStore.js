import ReduxThunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from 'redux'

import rootReducer from '../Redux/Reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(ReduxThunk)
    ),
)