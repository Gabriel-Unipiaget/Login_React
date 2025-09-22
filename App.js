import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SingUp from './screens/SingUp';

const MyStack = createNativeStackNavigator({
  screens: {
    Login: Login,
    SingUp: SingUp,
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}