import { Text } from '@/components/ui/Form';
import { StyleSheet, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1D2F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }


});