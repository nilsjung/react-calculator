import React from 'react';

class Field extends React.Component {
    render() {
        const style = {
            border: '1px grey solid',
        };

        const className = this.props.className || 'col';
        return (
            <span className={className} style={style}>{this.props.value}</span>
        );
    }
}

/**
 * Display Component
 *
 */
class Display extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Field className="col-10" value={this.props.acc} />
                    <Field className="col-2" value={this.props.operation} /></div>
                <div className='row justify-content-end'>
                    <Field value={this.props.input} />
                </div>
            </div>
        );
    }
}

export default Display;