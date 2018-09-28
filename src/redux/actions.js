export const ADD = 'add';
export const DIV = 'devide';
export const MULT = 'multiplicate';
export const SUB = 'subtract';
export const DIGIT = 'digit';

export const add = () => ({
    type: ADD
});

export const sub = () => ({
    type: SUB
});
export const div = () => ({
    type: DIV
});

export const mult = () => ({
    type: MULT
});

export const addDigit = (digit) => ({
    type: DIGIT,
    payload: digit
});