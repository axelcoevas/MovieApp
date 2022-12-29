import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import MoviePoster from "../screen/MoviePoster";
import { colors } from "../utils/colors";

const TopBar = createMaterialTopTabNavigator();

const HomeTopBar = () => {
    return (
        <TopBar.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 65,
                    width: 310,
                    borderRadius: 59,
                    backgroundColor: colors.white,
                    opacity: 0.8,
                },
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#F8F8FF",
            }}
            initialRouteName='MoviePoster'
        >
            <TopBar.Screen name='MoviePoster' component={MoviePoster} />
        </TopBar.Navigator>
    );
};

const styles = StyleSheet.create({});

export default HomeTopBar;
