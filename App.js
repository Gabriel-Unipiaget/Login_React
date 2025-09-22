import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SingUp from './screens/SingUp';

const MyStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      options: {
        title: '',
        headerStyle: {
          backgroundColor: '#000',
        },
      },
    },
    SingUp: {
      screen: SingUp,
      options: {
        title: '',
        headerBackTitle: 'Login',
        headerStyle: {
          backgroundColor: '#000',
        },
      },
    },
  },
},
);

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}