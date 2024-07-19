import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@components/Header';
import ProfileImage from '@components/ProfileImage';
import Input from '@components/Input';
import {colors} from '@/styles';
import Animated from 'react-native-reanimated';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function ProfileScreen() {
  const [userData, setUserData] = useState({
    name: 'Becky Anderson',
    phone: '0706544487',
    email: 'beckyanderson@gmail.com',
    address: 'plot 234, adeola odeku ',
    state: 'Anambra',
    lga: 'ibeju-lekki',
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Header />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Animated.View
          style={{
            paddingBottom: 20,
            paddingTop: 28,
            alignItems: 'center',
          }}
          sharedTransitionTag="tag">
          <ProfileImage size={140} />
        </Animated.View>
        <View
          style={{
            paddingHorizontal: 16,
            gap: 19,
            paddingBottom: 40,
          }}>
          <Input
            label="Contact Name"
            placeholder="Enter your name"
            value={userData.name}
            onChangeText={text => setUserData({...userData, name: text})}
            autoComplete="name"
          />
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            value={userData.phone}
            onChangeText={text => setUserData({...userData, phone: text})}
            autoComplete="tel"
            inputMode="tel"
          />
          <Input
            label="Email"
            placeholder="Enter your email address"
            value={userData.email}
            onChangeText={text => setUserData({...userData, email: text})}
            autoComplete="email"
            inputMode="email"
          />
          <Input
            label="Address"
            placeholder="Enter your address"
            value={userData.address}
            onChangeText={text => setUserData({...userData, address: text})}
          />
          <Input
            label="State"
            placeholder="Enter your state"
            value={userData.state}
            onChangeText={text => setUserData({...userData, state: text})}
          />
          <Input
            label="L.G.A"
            placeholder="Enter your L.G.A"
            value={userData.lga}
            onChangeText={text => setUserData({...userData, lga: text})}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
