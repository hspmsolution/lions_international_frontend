import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity';
import adminReporting from './adminReports';


export default combineReducers({
  auth,activity,adminReporting
});