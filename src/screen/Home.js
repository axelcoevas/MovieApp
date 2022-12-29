import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import api, { TOP_RATE } from "../api/api";
import CarouselPoster from "../components/CarouselPoster";
import { colors } from "../utils/colors";

const Home = () => {
    const [topRate, setTopRate] = useState([]);

    const getTopRate = async () => {
        const res = await api.get(TOP_RATE);
        setTopRate(res.results);
        console.log(res);
    };

    useEffect(() => {
        getTopRate();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <CarouselPoster topRate={topRate} />
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

export default Home;
