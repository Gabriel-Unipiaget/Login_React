import styles from '../css/style.js';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native';

const background = require('../img/background.jpg');

export default function SingUp() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'default'} />
      <ImageBackground source={background} style={styles.imageBackground} resizeMode='cover'>

        <View style={styles.containerHeader}>
          <Text style={styles.textTitleWhite}>Sing Up</Text>
        </View>

        <View style={styles.containerMainSing}>

          <View style={styles.containerFormSing}>
            <View style={styles.containerInputs}>
              <Text>Nome</Text>
              <TextInput style={styles.input} placeholder='Gabriel' />
            </View>

            <View style={styles.containerInputs}>
              <Text>Sobrenome</Text>
              <TextInput style={styles.input} placeholder='Silva' />
            </View>

            <View style={styles.containerInputs}>
              <Text>Email</Text>
              <TextInput style={styles.input} placeholder='email@gmail.com' />
            </View>

            <View style={styles.containerInputs}>
              <Text>Senha</Text>
              <TextInput style={styles.input} placeholder='* * * * * * * *' />
            </View>

            <View style={styles.containerInputs}>
              <Text>Confirme sua Senha</Text>
              <TextInput style={styles.input} placeholder='* * * * * * * *' />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Sing Up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Já tem acesso? Clique Aqui</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}