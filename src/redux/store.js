import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@reducers';
import fetchGet from '@middlewares/get';
import fetchPost from '@middlewares/post';
import fetchDelete from '@middlewares/delete';


const enhancer = applyMiddleware(fetchGet, fetchPost, fetchDelete);

export default createStore(reducers, composeWithDevTools(enhancer));