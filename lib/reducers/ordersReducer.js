import { Map } from 'immutable'

import {
  ORDER_PLACED,
  ORDER_FILLED,
  ORDER_CANCELLED
} from '../constants'

const initialState = Map()

export default (state = initialState, action) => {
  switch (action.type) {

  case ORDER_PLACED: {
    const order = action.payload
    return state.set(order.id, order)
  }

  case ORDER_FILLED: {
    const order = action.payload
    // @todo: Check if partially filled as well
    return state.delete(order.id)
  }

  case ORDER_CANCELLED: {
    const id = action.payload.id
    return state.delete(id)
  }

  default: {
    return state
  }
  }
}