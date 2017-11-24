import {StackNavigator, NavigationActions} from 'react-navigation';
import splashView from '../layouts/splashView';

export const AppNavigator = StackNavigator({
    splash: {screen: splashView, navigationOptions: {header:null}},
});

export const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('splash'));
