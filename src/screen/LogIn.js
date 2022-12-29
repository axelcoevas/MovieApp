import { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/Header";
import { colors } from "../utils/colors";

const LogIn = () => {
    const [passwordSecured, usePasswordSecured] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Header title='Log In' hasBackButton={true} />
                <View style={styles.formContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.disclaimer}>
                            Log in with one of the following options
                        </Text>
                    </View>
                    <View style={styles.platfBtnContainer}>
                        <View style={styles.platfButton}>
                            <Image
                                source={require("../../assets/profile/apple_icon.png")}
                                style={styles.buttonIcon}
                            />
                        </View>
                        <View style={styles.platfButton}>
                            <Image
                                source={require("../../assets/profile/google_icon.png")}
                                style={styles.buttonIcon}
                            />
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Enter your email'
                                placeholderTextColor={colors.gray}
                                keyboardType='email-address'
                                style={styles.textInput}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Enter your password'
                                placeholderTextColor={colors.gray}
                                secureTextEntry={passwordSecured}
                                style={styles.textInput}
                            ></TextInput>
                            <TouchableOpacity
                                onPress={() =>
                                    usePasswordSecured(!passwordSecured)
                                }
                            >
                                {passwordSecured ? (
                                    <Image
                                        source={require("../../assets/profile/eye_slashed_icon.png")}
                                    />
                                ) : (
                                    <Icon
                                        name='eye-outline'
                                        size={19}
                                        color={colors.gray}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", bottom: -160 }}>
                        <Text style={styles.disclaimerSignUp}>
                            Don't have an account?{" "}
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.disclaimerSignUpLink}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
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
    formContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    textContainer: {
        width: 330,
    },
    disclaimer: {
        color: colors.gray,
        marginTop: 25,
        marginBottom: 30,
    },
    platfBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 330,
        marginBottom: 20,
    },
    platfButton: {
        width: 158,
        height: 57,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonIcon: {
        color: colors.white,
    },
    formGroup: {
        marginVertical: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.white,
        lineHeight: 50,
    },
    inputContainer: {
        width: 330,
        height: 47,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        justifyContent: "center",
        borderRadius: 11,
        paddingLeft: 11,
        paddingRight: 11,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        color: colors.white,
    },
    loginButton: {
        width: 330,
        height: 47,
        backgroundColor: colors.orange,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11,
        marginTop: 40,
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.white,
    },
    disclaimerSignUp: {
        fontSize: 18,
        color: colors.gray,
    },
    disclaimerSignUpLink: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.white,
    },
});

export default LogIn;
