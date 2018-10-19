export const ADD_OPERATION = 'addOperation';
export const DIGIT = 'digit';

export const addOperation = (operation) => ({
    type: ADD_OPERATION,
    payload: operation
});

export const addDigit = (digit) => ({
    type: DIGIT,
    payload: digit
});