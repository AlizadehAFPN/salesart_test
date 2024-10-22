import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Define the navigation prop type
type OrderScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'order'>;

interface Props {
  navigation: OrderScreenNavigationProp;
}

const OrderScreen: React.FC<Props> = ({ navigation }) => {
  const { address, errors, paymentMethod } = useSelector((state: RootState) => state.order);
  console.log(address, errors, paymentMethod);

  return (
    <View style={styles.container}>
    <Text style={styles.text} onPress={() => navigation.navigate('cart')}>Order Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue', // Example style, change as needed
  },
});

export default OrderScreen;
