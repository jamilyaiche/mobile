import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger-simple'
import AsyncStorage from '@react-native-community/async-storage'
import AuthReducer from './Reducers/AuthReducer'
const enhancer = applyMiddleware(logger)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: []
}

const rootReducer = combineReducers({
  AuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = createStore(persistedReducer, enhancer)

export const persistor = persistStore(Store)

export default Store
