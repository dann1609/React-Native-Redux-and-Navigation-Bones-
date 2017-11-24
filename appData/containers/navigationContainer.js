import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AppNavigator} from '../config/appNavigator'
import { addNavigationHelpers } from 'react-navigation';

class NavigationView extends React.Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(NavigationView);