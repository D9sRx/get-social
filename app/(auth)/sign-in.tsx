import { AppButton } from '@/components/ui/Appbutton';
import { Text } from '@/components/ui/Form';
import { useState } from 'react';
import { TextInput,Pressable,StyleSheet, View } from 'react-native';

export default function Page() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        if(!email || !password){
            alert('Please fill all fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert('Please enter a valid email');
            return;
        } 

        if(password.length < 8){
            alert('Password must be at least 6 characters long');
            return;
        }
    }




    return (
        <View style={styles.container}>
            <View style={styles.form}>
                
            
                <Text style={styles.title}>Sign in</Text>
                <View style={styles.field}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setPassword}    
                        autoCapitalize='none'
                        secureTextEntry
                    />
                </View>

            </View>
            <AppButton onPress={handleSignIn}>登录</AppButton>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1D2F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 12,
    },
    field: {
        width: '100%',

    },
    form: {
        gap: 24,
        width: '80%',
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
    }

});