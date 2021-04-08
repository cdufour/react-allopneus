import counterReducer from './counter';
import loginReducer from './login';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
});

export default reducers;