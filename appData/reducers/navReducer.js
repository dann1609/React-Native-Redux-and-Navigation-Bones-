import {initialState,AppNavigator} from '../config/appNavigator'

export const navReducer = (state = initialState, action) => {
    //console.log('navReducer state: '+JSON.stringify(state));
    //console.log('navReducer action: '+JSON.stringify(action));

    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    if(state.routes[state.routes.length-1].routeName!=action.routeName){
        return nextState || state;
    }else{
        return state;
    }
};