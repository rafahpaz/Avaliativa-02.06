import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, } from 'react-native';
import { Link } from "expo-router";

const Images = () => {
  return (
    <View style={styles.posicao}>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/img1.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/img2.jpg')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/img3.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/img4.jpg')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/img5.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/img8.jpg')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/img6.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/img7.jpg')} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-sphare.png')} style={styles.logoImage} />
      <TouchableOpacity href='cadastro' style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374140',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  logoImage: {
    width: 600,
    height:500,
    marginTop: -190,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#FFFFFF',
  },
  logo2: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputView: {
    width: '40%',
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '40%',
    backgroundColor: '#DC3522',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginVertical: -20,
  },
  loginText: {
    color: 'white',
  },
  acessoTexto: {
    color: '#03001C',
    marginTop: 60,
    marginBottom: -10,
  },
  flex: {
    flex: 1,
    gap: 10,
  },
  imageHome: {
    justifyContent: "center",
    alignContent: "center",
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  posicao: {
    flex: 1,
  },
});
