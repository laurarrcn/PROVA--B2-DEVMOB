import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { supabase } from '../supabase'; // Certifique-se de que sua instância do supabase está correta

export default function RegisterPage({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    // Verificar se todos os campos estão preenchidos
    if (!nome || !email || !senha || !confirmaSenha) {
      setMessage('Por favor, preencha todos os campos');
      return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmaSenha) {
      setMessage('As senhas não coincidem');
      return;
    }

    try {
      // Criar o usuário com email e senha usando supabase.auth.signUp
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: senha,
      });

      if (error) {
        console.log("Erro ao criar conta:", error.message);
        setMessage('Erro ao criar conta: ' + error.message);
        return;
      }

      // Se o usuário for criado, você pode navegar para a página de login sem a necessidade de confirmação de email
      setMessage('Conta criada com sucesso! Agora você pode fazer login.');
      console.log("Conta criada:", user);

      // Navegar para a página de login
      navigation.navigate('LoginPage');
    } catch (err) {
      console.log("Erro inesperado:", err);
      setMessage('Erro inesperado: ' + err.message);
    }
  };

  return (
    <ImageBackground style={styles.innerContainer} blurRadius={2}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../IMAGENS/pnguvv1.png')} />
        </View>

        <Text style={styles.p1}>Cadastre-se!</Text>

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <View style={styles.container2}>
          <Text style={styles.p3}>Nome Completo</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        </View>

        <View style={styles.container2}>
          <Text style={styles.p3}>E-mail</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        </View>

        <View style={styles.container2}>
          <Text style={styles.p3}>Senha</Text>
          <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry={true} />
        </View>

        <View style={styles.container2}>
          <Text style={styles.p3}>Confirme a Senha</Text>
          <TextInput style={styles.input} value={confirmaSenha} onChangeText={setConfirmaSenha} secureTextEntry={true} />
        </View>

        <View style={styles.container3}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.cancelar}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
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
    height: 590,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F5DC46'
  },
  p1: {
    color: '#03045e',
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  message: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  container2: {
    width: '70%',
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
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    width: '70%',
    backgroundColor: 'white',
  },
  container3: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  cancelar: {
    textAlign: 'center',
    color: '#03045e',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#03045e',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
