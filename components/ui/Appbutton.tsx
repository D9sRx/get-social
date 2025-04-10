import { Image, Button, Pressable, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Text } from '@/components/ui/Form';
import { useRouter } from 'expo-router';
import React from 'react';


export function AppButton({
    children, 
    onPress,
    style,
}:{
    children: React.ReactNode,
    onPress: () => void,
    style?: StyleProp<ViewStyle>;
}) {
    const router = useRouter();
    return(
        <Pressable style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#4A90E2',
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
