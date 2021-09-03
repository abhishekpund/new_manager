import React from "react";
import {Text,View,Modal,StyleSheet} from "react-native";
import {CardSection} from "./CardSection";
import {Button} from "./Button";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => console.log("Closed!!!")}
        >
            <View style={styles.viewStyle}>
                <CardSection customStyle={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 18,
        textAlign: "center",
        flex: 1,
        lineHeight: 40
    },
    viewStyle: {
        backgroundColor: "rgba(0, 0 , 0, 0.75)",
        flex: 1,
        justifyContent: "center"
    },
});

export { Confirm };