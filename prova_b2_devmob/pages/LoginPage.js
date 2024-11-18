import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { supabase } from '../supabase';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      setMessage('Por favor, preencha todos os campos');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
      });

      if (error) {
        setMessage('E-mail ou senha incorretos');
      } else {
        setMessage('Login bem-sucedido');
        navigation.navigate('MainPage'); // Navega para a página principal após login
      }
    } catch (err) {
      console.log("Erro inesperado:", err);
      setMessage('Erro inesperado: ' + err.message);
    }
  };

  return (
    <ImageBackground style={styles.innerContainer} blurRadius={2}>
      <View style={styles.container}>
        <Text style={styles.p1}>InovaWeek 2025</Text>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../IMAGENS/pnguvv1.png')} />
        </View>

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <View style={styles.container2}>
          <Text style={styles.p3}>E-mail</Text>
        </View>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.container2}>
          <Text style={styles.p3}>Senha</Text>
        </View>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <View style={styles.container3}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPage')}>
            <Text style={styles.esqueceu}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={styles.esqueceu}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3B4475'
  },
  container: {
    width: 280, 
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F5DC46'
  },
  p1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#03045e',
    width: '100%',
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    height: 150,
    width: 300,
    resizeMode: 'contain',
  },
  container2: {
    width: '70%',
    marginTop: 5,
    marginBottom: 1,
  },
  p3: {
    color: '#03045e',
    fontSize: 12,
  },
  input: {
    height: 40,
    color: 'black',
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    width: '70%',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#03045e',
    paddingVertical: 8,
    paddingHorizontal: 45,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container3: {
    width: '70%',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10,
    marginBottom: 20,
  },
  esqueceu: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 3,
    textDecorationLine: 'underline',
    color: '#03045e',
  },
  message: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
