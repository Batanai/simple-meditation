import { View, Text } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';

interface GuidedAffirmationsGalleryProp {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({title, previews}: GuidedAffirmationsGalleryProp) => {
  return (
    <View className='my-5'>
      <Text>GuidedAffirmationsGallery</Text>
    </View>
  )
}

export default GuidedAffirmationsGallery