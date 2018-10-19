import React from 'react';

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

export default Operations;