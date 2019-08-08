import {READY_LOAD} from './actions'

const initState = {
  readyLoad: true
};

const setReadyLoad = (state, action) => {
  return {
    ...state,
    readyLoad: action.obj
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case READY_LOAD: 
      return setReadyLoad(state, action)

    default:
      return state;
  }
};
