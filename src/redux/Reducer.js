import { combineReducers } from 'redux'
import Producreducer from './Producreducer'

export const reducer = combineReducers({
    Product: Producreducer
})
