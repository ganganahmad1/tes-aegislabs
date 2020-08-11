import axios from 'axios';
import AsyncStorage from 'asyncstorage'

const url = 'https://api.mindtrexacademy.com'

export const login = (data, navigation) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_PENDING'
        })

        return axios.post(`${url}/directory/auth/signin`, data)
            .then((response) => {
                let payload = response.data;
                AsyncStorage.setItem('token', response.access_token)
                navigation.navigate('Home')
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'GETUSER_PENDING'
        })

        return axios.get(`${url}/directory/profile/me`, {header: {"Authorization": "bearer " + token}})
            .then((response) => {
                console.log(response)
                let dataUser = response.data;
                dispatch({
                    type: 'GETUSER_SUCCESS',
                    dataUser
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}