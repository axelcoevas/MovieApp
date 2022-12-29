import { Dimensions, FlatList, View } from "react-native";
import MoviePoster from "../screen/MoviePoster";

const { width: screenWidth } = Dimensions.get("window");

const CarouselPoster = ({ topRate }) => {
    return (
        <View style={{ height: 210, marginBottom: 5 }}>
            <FlatList
                data={topRate}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: screenWidth,
                        }}
                    >
                        <MoviePoster movie={item} />
                    </View>
                )}
                horizontal={true}
            />
        </View>
    );
};

export default CarouselPoster;
