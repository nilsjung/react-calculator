import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Digit extends Button {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
    }
}

class DigitField extends React.Component {
    handleDigitField = (value) => () => {
        return this.props.onClick(value);
    }

    render() {
        let digits = [];

        for (let num of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            const number = num.toString();
            digits.push(<Digit key={num} value={number} onClick={this.handleDigitField(number)} />);
        }

        return (
            <div className="d-flex flex-row">
                {digits}
            </div>
        );
    }
}

DigitField.propTypes = {
    onClick: PropTypes.func.isRequired,
};


export default DigitField;