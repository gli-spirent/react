/**
 * Created by jim on 2017/6/11.
 */
import { createStore } from 'redux';
import reducer from './Reducer';

const First = 0;
const Second = 10;
const Third = 30;


const initValues = {
    First,
    Second,
    Third,
};

const Store = createStore(reducer, initValues);

export default Store;