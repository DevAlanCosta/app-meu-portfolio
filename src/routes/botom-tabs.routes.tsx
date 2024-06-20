import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SkillScreen from '../screens/SkillScreen';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Habilidades"
        component={SkillScreen}
        options={{
          tabBarIcon: ({ size, color }) => <Entypo name="image" size={24} color="black" />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabRoutes;
