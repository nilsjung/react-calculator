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

    render() {
        let operations = [];

        for (let op of ['-', '+', '/', '*']) {
            operations.push(<OperationField key={op} onClick={this.handleOperation(op)} value={op}/>)
        }

        return (
            <div>
                {operations}
            </div>
        );
    }
}

Operations.propTypes = {
    onClick: PropTypes.func.isRequired
};


export default Operations;