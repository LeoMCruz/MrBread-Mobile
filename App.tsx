import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/auth';
import PublicStackRoutes from './src/routes/publicStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PublicStackRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
