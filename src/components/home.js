import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';

const Home = props => {
    return (
        <View style={StyleSheet.container}>
            <Text>Helo Detail </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center'
    }
})

const mapStateToProps = s => {
    return {
        dataUser: s.UsersReducer.data
    }
}

export default connect(mapStateToProps, null)(Home);