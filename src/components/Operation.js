import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class OperationField extends Button {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
    }
}

class Operations extends React.Component {
    handleOperation = (operator) => () => {
        this.props.onClick(operator);
    }

    handleEquationField = () => () => {
        this.props.onEquationClick();
    }

    render() {
        let operations = [];

        for (let op of ['-', '+', '/', '*']) {
            operations.push(<OperationField key={op} onClick={this.handleOperation(op)} value={op}/>)
        }

        return (
            <div>
                {operations}
                <OperationField onClick={this.handleEquationField()} value='=' />
            </div>
        );
    }
}

Operations.propTypes = {
    onClick: PropTypes.func.isRequired,
    onEquationClick: PropTypes.func
};


export default Operations;