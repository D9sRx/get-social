import { AppButton } from '@/components/ui/Appbutton';
import { Text } from '@/components/ui/Form';
import { secureSave } from '@/utils/storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';


export default function Page() {

    const router = useRouter();

    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        if(!email || !password){
            alert('Please fill all fields');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert('Please enter a valid email');
            return;
        } 
        

        // api request
        fetch('/api/sign-in',{
            method: "POST",
            body: JSON.stringify({email, password}),
        }).then(async (response) => {

            if(response.ok){
                const data = await response.json();
                await secureSave('token', data.token);
                router.push("/dashboard/(index)")
                console.log(data);
                setPassword('');
                setEmail('');
            }
            alert("You signed in successfully!");
        });
 
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
            <AppButton onPress={handleSignUp}>登录</AppButton>
        </View>

    )
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
    signUpButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 8,
        width: 100,
        padding: 7,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
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