import { Text } from '@/components/ui/Form';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';

export default function Page() {
    const router = useRouter();
    return (
            <View style={styles.container}>
                <Text style={styles.title}>Time to get social!</Text>
                <Button title="Sign in" onPress={()=> router.push("/sign-in")} />
                <Button title="Sign up" onPress={()=> router.push("/sign-up")} />
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});