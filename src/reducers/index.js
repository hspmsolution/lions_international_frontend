import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity'


export default combineReducers({
  auth,activity
});