import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";

const Header = ({ title, hasBackButton }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {hasBackButton && (
                <TouchableOpacity
                    hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                    onPress={() => navigation.goBack()}
                    style={styles.headerArrow}
                >
                    <Image
                        source={require("../../assets/header/left_arrow_icon.png")}
                    />
                </TouchableOpacity>
            )}
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginLeft: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        color: colors.white,
        fontSize: 25,
        fontWeight: "700",
    },
    headerArrow: {
        marginRight: 5,
    },
});

export default Header;
