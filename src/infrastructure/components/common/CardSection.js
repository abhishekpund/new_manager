import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, customStyle }) => {
  return (
    <View style={[styles.containerStyle, customStyle]}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };