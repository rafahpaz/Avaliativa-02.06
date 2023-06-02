import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logoImage} />
      <Text style={styles.logo}>Google massa</Text>
      <Text style={styles.logo2}>sla oq por aqui</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="grey"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity href='telaA' style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity href='telaA' style={styles.loginBtn}>
        <Text style={styles.loginText}>Esqueci a senha</Text>
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
  logo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#FFFFFF',
    marginBottom: -5,
  },
  logo2: {
    fontSize: 10.5,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  inputView: {
    width: '40%',
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
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
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  acessoTexto: {
    color: '#03001C',
    marginTop: 60,
    marginBottom: -10,
  },
  logoImage: {
    width: 310,
    height:100,
  }
});
