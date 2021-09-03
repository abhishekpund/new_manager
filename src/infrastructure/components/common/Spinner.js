import React from "react";
import {View,StyleSheet,ActivityIndicator} from "react-native";

const Spinner = () => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size="large" 
                color="#000000"                                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        position:"absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems:"center",
        justifyContent:"center",
    },
});

export { Spinner };