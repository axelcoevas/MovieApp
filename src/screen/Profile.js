import { useNavigation } from "@react-navigation/native";
import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Header from "../components/Header";
import { colors } from "../utils/colors";

const Profile = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Header title='Profile' hasBackButton={false} />
                <View>
                    <View>
                        <View style={styles.header}>
                            <Image
                                source={require("../../assets/profile/profile_avatar.jpg")}
                                style={styles.avatar}
                            />
                            <View style={styles.divider} />
                            <View>
                                <Text
                                    style={{
                                        ...styles.textHeader,
                                        color: colors.gray,
                                    }}
                                >
                                    Joined
                                </Text>
                                <Text
                                    style={{
                                        ...styles.textHeader,
                                        color: colors.white,
                                    }}
                                >
                                    2 mont ago
                                </Text>
                            </View>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: colors.white,
                                }}
                            >
                                Eric Uriel Trejo T.
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    lineHeight: 17,
                                    color: colors.gray,
                                }}
                            >
                                @erictoman
                            </Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.navigate("SignUp")}
                            >
                                <View style={styles.btnContainer}>
                                    <Image
                                        source={require("../../assets/profile/profile_info_icon.png")}
                                    />
                                    <View style={styles.btnTextContainer}>
                                        <Text style={styles.btnText}>
                                            Sign up
                                        </Text>
                                    </View>
                                    <Image
                                        source={require("../../assets/profile/profile_arrow_icon.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.navigate("LogIn")}
                            >
                                <View style={styles.btnContainer}>
                                    <Image
                                        source={require("../../assets/profile/profile_settings_icon.png")}
                                    />
                                    <View style={styles.btnTextContainer}>
                                        <Text style={styles.btnText}>
                                            Log in
                                        </Text>
                                    </View>
                                    <Image
                                        source={require("../../assets/profile/profile_arrow_icon.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <View style={styles.btnContainer}>
                                    <Image
                                        source={require("../../assets/profile/profile_policy_icon.png")}
                                    />
                                    <View style={styles.btnTextContainer}>
                                        <Text style={styles.btnText}>
                                            Policy
                                        </Text>
                                    </View>
                                    <Image
                                        source={require("../../assets/profile/profile_arrow_icon.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    ...styles.btn,
                                    width: 150,
                                }}
                            >
                                <View style={styles.btnContainer}>
                                    <Image
                                        source={require("../../assets/profile/sign_out_icon.png")}
                                    />
                                    <Text style={styles.btnText}>Sign Out</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    body: {
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    divider: {
        width: 1,
        height: 83,
        backgroundColor: colors.gray,
    },
    textHeader: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 19,
    },
    nameContainer: {
        alignItems: "flex-start",
        paddingLeft: 35,
        paddingTop: 20,
    },
    buttonsContainer: {
        marginTop: 20,
        height: 380,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    btn: {
        width: 325,
        height: 47,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 29,
        justifyContent: "center",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    btnTextContainer: {
        width: 150,
    },
    btnText: {
        fontSize: 19,
        color: colors.white,
        fontWeight: "500",
    },
});

export default Profile;
