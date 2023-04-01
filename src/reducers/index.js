import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity';
import adminReporting from './adminReports';
import news from './news';
import clubMembers from './clubMembers';


export default combineReducers({
  auth,activity,adminReporting,news,clubMembers
});