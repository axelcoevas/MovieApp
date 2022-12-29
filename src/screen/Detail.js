import { useRoute } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { URL_IMAGE } from "../api/api";
import { colors } from "../utils/colors";

const Detail = (props) => {
    const route = useRoute();
    const detail = route.params.detail;
    const imgURI = `${URL_IMAGE}${detail.poster_path}`;
    console.log(imgURI);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text>{detail.original_title}</Text>
                <Image
                    source={{ uri: `${URL_IMAGE}${detail.poster_path}` }}
                    style={{ height: 300, height: 300 }}
                />
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
});

export default Detail;
