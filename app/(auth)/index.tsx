import { AppButton } from '@/components/ui/Appbutton';
import { Text } from '@/components/ui/Form';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

export default function Page() {
    const router = useRouter();

    const { isLoggedIn, isLoading } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/dashboard/(dashboard)");
        }
    }, [isLoggedIn]);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );

    }

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