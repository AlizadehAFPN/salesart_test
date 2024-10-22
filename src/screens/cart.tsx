import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Define the navigation prop type
type CardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'cart'>;

interface Props {
  navigation: CardScreenNavigationProp;
}

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const { items, totalPrice, discount } = useSelector((state: RootState) => state.cart);
  console.log(items, totalPrice, discount);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('order')}>
        Cart Screen
      </Text>
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

export default CartScreen;
