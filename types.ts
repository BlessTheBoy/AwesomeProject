import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type SettingsStackParams = {
  Settings: undefined;
  'Edit Profile': undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Orders: undefined;
  'Settings Home': NavigatorScreenParams<SettingsStackParams>;
};

export type RootStackParams = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  'Manage Address': undefined;
};

export type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SettingsStackParams, 'Edit Profile'>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, 'Settings Home'>,
    NativeStackScreenProps<RootStackParams>
  >
>;

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SettingsStackParams, 'Edit Profile'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, 'Settings Home'>,
    NativeStackNavigationProp<RootStackParams>
  >
>;
