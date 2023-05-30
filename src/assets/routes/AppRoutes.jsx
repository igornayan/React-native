import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Page1 from '../Page01';
import Page2 from '../Page02';
import Page3 from '../Page03';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}} initialRouteName='Page03'>
            <Screen
                name="Page01"
                component={Page1}
            />
            <Screen
                name= "Page02"
                component={Page2}
            />
            <Screen
                name="Page03"
                component={Page3}
            />
        </Navigator>
    );
}