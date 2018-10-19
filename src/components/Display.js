import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
    render() {
        const style = {
            border: '1px grey solid',
        };

        const className = this.props.className || 'col';
        return (
            <span className={className} style={style}>{this.props.value || '--- nothing to show ---'}</span>
        );
    }
}

Field.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
};

/**
 * Display Component
 *
 */
class Display extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Field className="col-10" value={this.props.number} />
                    <Field className="col-2" value={this.props.operation} /></div>
                <div className='row justify-content-end'>
                    <Field value={this.props.acc} />
                </div>
            </div>
        );
    }
}

Display.propTypes = {
    number: PropTypes.string.isRequired,
    operation: PropTypes.string,
    acc: PropTypes.string,
};

export default Display;