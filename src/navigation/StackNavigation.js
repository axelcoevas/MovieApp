import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import LogIn from "../screen/LogIn";
import SignUp from "../screen/SignUp";
import Splash from "../screen/Splash";
import Detail from "../screen/Detail";
import { colors } from "../utils/colors";
import BottomTab from "./BottomTab";

const stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: colors.primary,
                    },
                }}
                initialRouteName='Home'
            >
                <stack.Screen name='Home' component={Home} />
                <stack.Screen name='Splash' component={Splash} />
                <stack.Screen name='BottomTab' component={BottomTab} />
                <stack.Screen name='SignUp' component={SignUp} />
                <stack.Screen name='LogIn' component={LogIn} />
                <stack.Screen name='Details' component={Detail} />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
