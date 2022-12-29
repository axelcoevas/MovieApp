import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

const Favourites = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ color: "white" }}>Favourites</Text>
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
});

export default Favourites;
