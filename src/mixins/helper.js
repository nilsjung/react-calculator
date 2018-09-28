
/**
 * handleDigitConcat
 * A function that concatinates two numbers. if the exising (trailing) number is a zero, remove this trailing zero
 *
 * @param {*} aNum the existing number in the input field
 * @param {*} nNum  the number that should be added to the input field
 * @return {String} the concat of the two input numbers. If the existing number is a zero
 */
export function handleDigitConcat(aNum, nNum) {
    const actualNumber = aNum.toString();
    const newNumber = nNum.toString();

    if (actualNumber === '0') {
        return newNumber;
    } else {
        return actualNumber + newNumber;
    }

}