import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface CustomButtonprops {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({
    onPress, 
    title, 
    textStyles = "", 
    containerStyles = ""
}: CustomButtonprops) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg text-center ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton