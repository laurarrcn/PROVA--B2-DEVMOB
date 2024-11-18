import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import InfosPage from './pages/InfosPage'; // Importação da nova tela de informações do grupo

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="InfoPage" component={InfosPage} options={{ title: 'Detalhes do Grupo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
