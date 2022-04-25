import {combineReducers} from 'redux';
import RegisterReducer from '../screens/Register/redux/reducer';
import HomeReducer from '../screens/Home/redux/reducer';
import LoginReducer from '../screens/Login/redux/reducer';

export const allReducers = combineReducers({
  register: RegisterReducer,
  home: HomeReducer,
  login: LoginReducer,
});
