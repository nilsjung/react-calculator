import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.style = props.style;
    }

    render() {
        return (
            <button
                onClick={this.onClick}
                type='button'
                style={this.style}
                value={this.props.value}
                className="col btn btn-outline-secondary"
            >{this.props.value}</button>
        );
    }
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};


export default Button;
