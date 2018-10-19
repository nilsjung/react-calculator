import React, { Component } from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from './redux/actions';

import Display from './components/Display';
import DigitField from './components/Digit';
import OperationField from './components/Operation';

class App extends Component {
    render() {
        const {addDigit, addOperation} = this.props;

        return (
            <div className="App container">
                <Display acc='acc' operation={this.props.operation} number={this.props.number}></Display>
                <div className='row'>
                    <span className='col-8'>
                        <DigitField onClick={addDigit}/>
                    </span>
                    <span className='col-4'>
                        <OperationField onClick={addOperation}/>
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        number : state.number,
        acc: state.acc,
        operation: state.operation
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addOperation: actions.addOperation,
        addDigit: actions.addDigit,
    }, dispatch);
}

App.propTypes = {
    operation: PropTypes.string,
    number: PropTypes.string.isRequired,
    acc: PropTypes.string,
    addDigit: PropTypes.func.isRequired,
    addOperation: PropTypes.func.addOperation
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
