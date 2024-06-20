import { View, Text, StyleSheet, Image, Button, Linking, Pressable } from 'react-native';
import perfil from '../assets/perfil.jpg';
import javaimg from '../assets/icons8-javascript-48.png';
import reactimg from '../assets/icons8-react-48.png';
import typeimg from '../assets/icons8-typescript-48.png';
import htmlimg from '../assets/icons8-html-5-48.png';
import csslimg from '../assets/icons8-css-48.png';

function SkillScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={perfil} style={styles.perfil} />
      </View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Minhas Habilidades</Text>

      <View style={styles.habilidades}>
        <Image source={javaimg} />
        <Image source={reactimg} />
        <Image source={typeimg} />
        <Image source={htmlimg} />
        <Image source={csslimg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  perfil: {
    resizeMode: 'cover',
    height: 180,
    width: 180,
    borderRadius: 1000,
    marginBottom: 20,
  },
  habilidades: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default SkillScreen;
