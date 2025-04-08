import { Text } from '@/components/ui/Form';
import { useRouter } from 'expo-router';
import { Image, Button, Pressable, StyleSheet, View } from 'react-native';

export default function Page() {
    const router = useRouter();
    return (
        <View style={styles.container}>

            <Image source={require("@/assets/images/logo.png")} style={styles.logo} />

            <Text style={styles.title}>Time to get social!</Text>

            <Pressable style={styles.signInButton} onPress={() => router.push("/sign-in")}>
                <Text style={styles.buttonText}>登录</Text>
            </Pressable>

            <Pressable style={styles.signUpButton} onPress={() => router.push("/sign-up")}>
                <Text style={styles.buttonText}>注册</Text>
            </Pressable>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1D2F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    logo: {
        width: 240,
        height: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    signInButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 8,
        width: 100,
        padding: 7,
    },
    signUpButton: {
        backgroundColor: 'gray',
        borderRadius: 8,
        width: 100,
        padding: 7,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        
        textAlign: 'center',
    }
});