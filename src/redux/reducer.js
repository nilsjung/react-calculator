import * as operation from './actions';

import {handleDigitConcat} from '../mixins/helper';

const initialState = {
    acc: null,
    op: null,
    number: 0,
};

export default function (state = initialState, action) {
    let type = action.type;

    if (type === operation.DIGIT) {
        let newNumber = handleDigitConcat(state.number, action.payload);
        return {...state, number: newNumber};
    }

    return state;
}