import React from 'react';
import Button from './Button';

class Digit extends Button {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
    }
}

class DigitField extends React.Component {
    handleDigitField = (value) => () => {
        return this.props.onClick(value)
    }

    render() {
        let digits = [];

        for (let num of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            digits.push(<Digit key={num} value={num.toString()} onClick={this.handleDigitField(num)} />);
        }

        return (
            <div className="d-flex flex-row">
                {digits}
            </div>
        );
    }
}

export default DigitField;