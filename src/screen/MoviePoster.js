import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Image, StyleSheet, Text } from "react-native";
import { URL_IMAGE } from "../api/api";
import { colors } from "../utils/colors";

const MoviePoster = ({ movie }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => navigation.navigate("Details", { detail: movie })}
        >
            <View>
                <Image
                    source={{
                        uri: `${URL_IMAGE}${movie.backdrop_path}`,
                    }}
                    style={styles.img}
                    resizeMode='contain'
                />
                <View style={styles.containerInfo}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text style={styles.title}>
                                {movie.original_title}
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <Image
                                    source={require("../../assets/home/icon_star.png")}
                                />
                                <Text style={styles.rate}>4.5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.contentImg}>
                                <Image
                                    style={styles.iconPlay}
                                    source={require("../../assets/home/icon_play.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    img: {
        borderRadius: 30,
        height: 204,
        width: 340,
    },
    containerInfo: {
        position: "absolute",
        bottom: 20,
        left: 20,
        width: 310,
        height: 60,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.white,
    },
    rate: {
        fontSize: 12,
        fontWeight: "400",
        color: colors.white,
    },
    contentImg: {
        width: 37,
        height: 37,
        borderRadius: 40,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    iconPlay: {
        width: 22,
        height: 22,
        resizeMode: "cover",
    },
});

export default MoviePoster;
