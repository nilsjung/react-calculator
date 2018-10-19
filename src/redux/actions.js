export const ADD_OPERATION = 'addOperation';
export const DIGIT = 'digit';
export const CALCULATE = 'calculate';
export const RESET = 'reset';

export const addOperation = (operation) => ({
    type: ADD_OPERATION,
    payload: operation
});

export const addDigit = (digit) => ({
    type: DIGIT,
    payload: digit
});

export const calculate = () => ({
    type: CALCULATE
});

export const reset = () => ({
    type: RESET
});