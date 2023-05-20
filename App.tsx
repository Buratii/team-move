import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/routes/App.routes';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import AppProvider from '@hooks/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
