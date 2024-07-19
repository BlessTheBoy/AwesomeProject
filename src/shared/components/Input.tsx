import {View, Text, TextInput, TextInputProps, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import {fontFamilies} from '../constants/fonts';
import {colors} from '@/styles';
import Animated, {useSharedValue} from 'react-native-reanimated';

interface InputProps extends TextInputProps {
  label?: string;
}

export default function Input({
  style,
  label,
  onFocus,
  onBlur,
  value,
  ...props
}: InputProps) {
  const inputRef = useRef<TextInput>(null);
  const fontSize = useSharedValue(value ? 13 : 16);
  const top = useSharedValue(value ? '0%' : '50%');
  const borderWidth = useSharedValue(0.5);
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        position: 'relative',
        height: 56,
      }}>
      <TextInput
        ref={inputRef}
        style={[
          {
            height: 56,
            fontSize: 16,
            lineHeight: 16,
            fontFamily: fontFamilies.Inter.medium,
            borderRadius: 8,
            paddingHorizontal: 12,
            borderWidth: focused ? 1 : 0.5,
            borderColor: '#0B0B0B',
            color: colors.grey[900],
          },
          style,
        ]}
        value={value}
        onFocus={e => {
          top.value = '0%';
          fontSize.value = 13;
          borderWidth.value = 1;
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={e => {
          if (!value) {
            top.value = '50%';
            fontSize.value = 16;
          }
          borderWidth.value = 0.5;
          setFocused(false);
          onBlur?.(e);
        }}
        {...props}
        placeholderTextColor={focused ? colors.grey[400] : colors.white}
      />
      {label && (
        <Animated.Text
          style={{
            fontSize,
            fontFamily: fontFamilies.Inter.medium,
            lineHeight: 20,
            letterSpacing: 0.0048,
            color: '#475467',
            position: 'absolute',
            // @ts-ignore
            top,
            left: 12,
            paddingHorizontal: 4,
            backgroundColor: colors.white,
            transform: [{translateY: -10}],
          }}
          onPress={() => inputRef.current?.focus()}>
          {label}
        </Animated.Text>
      )}
    </View>
  );
}
