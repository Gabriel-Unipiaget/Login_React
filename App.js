import styles from './css/style';
import { SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const background = require('./img/background.jpg');
const logo = require('./img/logo.png');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.imageBackground} resizeMode='cover'>

        <View style={styles.containerHeader}>
          <View style={styles.containerLogo}>
            <Image source={logo} style={styles.imageLogo} />
          </View>
        </View>

        <View style={styles.containerMain}>
          <Text style={styles.textTitle}>Login</Text>

          <View style={styles.containerForm}>
            <View style={styles.containerInputs}>
              <Text>Email</Text>
              <TextInput style={styles.input} placeholder='email@gmail.com' />
            </View>

            <View style={styles.containerInputs}>
              <Text>Senha</Text>
              <TextInput style={styles.input} placeholder='* * * * * * * *' />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text>Ainda não tem acesso? Clique Aqui</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}