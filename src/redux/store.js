import { createStore } from 'redux'
import reducer from './Reducer'

export const initStore = (state) => {
    return createStore(reducer, state)
}
