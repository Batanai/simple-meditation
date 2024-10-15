import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

interface AppGradientProps {
    children: any;
    colors: string[];
}

const AppGradient = ({children, colors}: AppGradientProps) => {
  return (
    <LinearGradient colors={colors} className='flex-1'>
      <SafeAreaView className='flex-1 px-5 py-3'>
        {children}
      </SafeAreaView>
    </LinearGradient>
  )
}

export default AppGradient