import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProp {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({title, previews}: GuidedAffirmationsGalleryProp) => {
  return (
    <View className='my-5'>
      <View className='mb-2'>
        <Text className='text-white font-bold '>{title}</Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <Link href={`/affirmations/${item.id}`} asChild>
                <Pressable>
                  <View className='h-36 w-32 rounded-md mr-5'>
                    <Image
                      source={item.image}
                      resizeMode='cover'
                      className='w-full h-full'
                    />
                  </View>
                </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  )
}

export default GuidedAffirmationsGallery