import { View,StyleSheet } from "react-native";
import { Text } from "@/components/ui/Form";


export default function Page(){
    return(
        <View style={styles.container}>
            <Text>Feed</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
    },
});