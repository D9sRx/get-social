import { Text } from '@/components/ui/Form';
import { StyleSheet, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }


});