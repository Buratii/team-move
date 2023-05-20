import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@pages/Home';
import theme from '@styles/theme';
import Header from '@components/Header';
import Schedule from '@pages/Schedule';
import TaskDetails from '@pages/TaskDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header title="Tarefas" />,
        statusBarColor: theme.colors.dark_secondary,
        headerStyle: {
          backgroundColor: theme.colors.dark_secondary,
        },
        contentStyle: {
          paddingHorizontal: 20,
          backgroundColor: theme.colors.dark_bg,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
    </Stack.Navigator>
  );
}
