import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";

const Splash = () => {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate("BottomTab");
    }, 1000);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo.png")}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        height: 222,
        width: 222,
    },
});

export default Splash;
