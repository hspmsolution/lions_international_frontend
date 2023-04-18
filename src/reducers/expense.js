import {  STATEMENT} from '../constants/actionTypes';

const expenseReducer = (state ={ statement:[]} , action) => {
  switch (action.type) {
    case STATEMENT:
         return {...state,statement:action.payload}
    default:
      return state;
  }
};

export default expenseReducer;
