import { React, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { login } from '../publics/redux/actions/users';
import { connect } from 'react-redux';

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        const formData = {
            email,
            password
        }

        if (email !== '' && password !== '') {
            props.login(formData, props.navigation)
            setPassword('')
            setEmail('')
        } else {
            alert("Please fill data correctly!")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder= "email"
                keyboardType= "email-address"
                onChangeText={(val) => setEmail(val)}
                value={email}
            /> 
            <TextInput
                placeholder= "Password"
                secureTextEntry= {true}
                onChangeText={(val) => setPassword(val)}
                value={password}
            /> 
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: "red" }}
                onPress={() => submit()}
            >
                <Text style={{ color: "#fff" }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = s => {
    return {
        dataUser: s.UsersReducer.data
    }
}

const mapDispatchToProps = d => {
    return {
        login: (data, navigation) => {
            d(login(data, navigation));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);