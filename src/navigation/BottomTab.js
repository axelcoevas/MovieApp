import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Favourites from "../screen/Favourites";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Search from "../screen/Search";

const TabBottom = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <TabBottom.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 65,
                    width: 310,
                    borderRadius: 59,
                    backgroundColor: "rgba(196, 196, 196, 0.1)",
                    opacity: 0.8,
                    position: "absolute",
                    marginBottom: 10,
                    left: 35,
                    right: 35,
                },
                headerShown: false,
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#F8F8FF",
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}
            initialRouteName='Home'
        >
            <TabBottom.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabelStyle: {
                        marginBottom: 5,
                    },
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View>
                                <Image
                                    source={
                                        focused
                                            ? require("../../assets/bottomTab/home_icon_active.png")
                                            : require("../../assets/bottomTab/home_icon.png")
                                    }
                                />
                                {focused && <Text style={styles.point}>.</Text>}
                            </View>
                        );
                    },
                }}
            />

            <TabBottom.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarLabelStyle: {
                        marginBottom: 5,
                    },
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View>
                                <Icon
                                    name={focused ? "search" : "search-outline"}
                                    color={color}
                                    size={25}
                                />
                                {focused && <Text style={styles.point}>.</Text>}
                            </View>
                        );
                    },
                }}
            />

            <TabBottom.Screen
                name='Favourites'
                component={Favourites}
                options={{
                    tabBarLabelStyle: {
                        marginBottom: 5,
                    },
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View>
                                <Icon
                                    name={
                                        focused
                                            ? "bookmark"
                                            : "bookmark-outline"
                                    }
                                    color={color}
                                    size={25}
                                />
                                {focused && <Text style={styles.point}>.</Text>}
                            </View>
                        );
                    },
                }}
            />

            <TabBottom.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabelStyle: {
                        marginBottom: 5,
                    },
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View>
                                <Icon
                                    name={
                                        focused
                                            ? "person-sharp"
                                            : "person-outline"
                                    }
                                    color={color}
                                    size={25}
                                />
                                {focused && <Text style={styles.point}>.</Text>}
                            </View>
                        );
                    },
                }}
            />
        </TabBottom.Navigator>
    );
};

const styles = StyleSheet.create({
    point: {
        fontSize: 25,
        color: "white",
        position: "absolute",
        top: 4,
        left: 10,
    },
});

export default BottomTab;
