import * as operation from './actions';

import {handleDigitConcat} from '../mixins/helper';

const initialState = {
    acc: null,
    operation: null,
    number: '0',
};


/**
 * addDigitHandler
 * action handler for digit input.
 *
 * action: ADD_DIGIT
 *
 * @param {Object} state the current state
 * @param {string} payload the digit input
 */
const addDigitHandler = (state, payload) => {
    let newNumber = handleDigitConcat(state.number, payload);
    return { ...state, number: newNumber };
};

/**
 *  addOperationHandler
 *  action handler for adding a operation.
 *
 * action: ADD_OPERATION
 *
 * @param {Object} state the current state
 * @param {string} payload the inserted operation
 */
const addOperationHandler = (state, payload) => {
    let clickedOperation = payload;
    return { ...state, operation: clickedOperation, acc: state.number, number: '0'};
};


const calculateResult = (state) => {
    const pendingOperation = state.operation;
    const number = Number(state.number);
    const acc = Number(state.acc);

    let result;
    if (pendingOperation === '+') {
        result = number + acc;
    } else if (pendingOperation === '-') {
        result = acc - number;
    } else if (pendingOperation === '*') {
        result = acc * number;
    }
    return {...state, acc: result, number: '0'};
};

const resetHandler = (state) => {
    console.log('resetHanlder')
    return initialState;
};

/**
 * the default main reducer.
 * @param {Object} state the current state
 * @param {Object} action the executed action
 */
export default function (state = initialState, action) {
    let {type, payload} = action;

    if (type === operation.DIGIT) {
        return addDigitHandler(state, payload);
    } else if (type === operation.ADD_OPERATION) {
        return addOperationHandler(state, payload);
    } else if (type === operation.CALCULATE) {
        return calculateResult(state);
    } else if (type === operation.RESET) {
        console.log('reset')
        return resetHandler(state);
    }

    return state;
}

