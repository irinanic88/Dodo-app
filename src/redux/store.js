import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import get from './middlewares/get';
import post from './middlewares/post';


const enhancer = applyMiddleware(get, post);

export default createStore(reducers, composeWithDevTools(enhancer));