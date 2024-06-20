import { View, Text, StyleSheet, Image, Button, Linking, Pressable } from 'react-native';
import perfil from '../assets/perfil.jpg';
import reactimg from '../assets/react-svgrepo-com.svg';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function HomeScreen() {
  function linkLinkedin() {
    Linking.openURL('https://www.linkedin.com/in/alancosta02/');
  }
  function linkGithub() {
    Linking.openURL('https://github.com/DevAlanCosta');
  }
  function linkPortfolio() {
    Linking.openURL('https://portfiolio-tau.vercel.app/');
  }

  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Image source={perfil} style={styles.perfil} />
        <Text style={styles.texto}>Alan Costa</Text>

        <Button title="Linkedin" onPress={linkLinkedin} />
        <Button title="Github" onPress={linkGithub} />
        <Button title="Portfólio WEB" onPress={linkPortfolio} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  perfil: {
    resizeMode: 'cover',
    height: 180,
    width: 180,
    borderRadius: 1000,
    marginBottom: 10,
  },

  botao: {
    borderRadius: 10,
    marginTop: 30,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default HomeScreen;
