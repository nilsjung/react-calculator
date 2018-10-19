import * as operation from './actions';

import {handleDigitConcat} from '../mixins/helper';

const initialState = {
    acc: null,
    operation: null,
    number: '0',
};

export default function (state = initialState, action) {
    let type = action.type;

    if (type === operation.DIGIT) {
        let newNumber = handleDigitConcat(state.number, action.payload);
        return {...state, number: newNumber};
    } else if (type === operation.ADD_OPERATION) {
        let clickedOperation = action.payload;
        return {...state, operation: clickedOperation};
    }

    return state;
}