import { AppButton } from '@/components/ui/Appbutton';
import { Text } from '@/components/ui/Form';
import { useRouter } from 'expo-router';
import { Image, Button, Pressable, StyleSheet, View } from 'react-native';

export default function Page() {
    const router = useRouter();
    return (
        <View style={styles.container}>

            <Image source={require("@/assets/images/logo.png")} style={styles.logo} />

            <Text style={styles.title}>Time to get social!</Text>

            <AppButton onPress={() => router.push("/sign-in")}>登录</AppButton>
            <AppButton style={styles.signUpButton} onPress={() => router.push("/sign-up")}>注册</AppButton>

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
    signUpButton: {
        backgroundColor: 'gray',
    },
});