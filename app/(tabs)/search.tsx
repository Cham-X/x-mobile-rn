import { Feather } from '@expo/vector-icons';
import React from 'react';
import {  ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TRENDING_TOPIC = [
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
    {topic:'hello',tweets:'lorem'},
]

const Search = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='px-4 py-3 border-b border-gray-100'>
                <View className='flex-row items-center bg-gray-100 rounded-full px-4 py-3'>
                    <Feather name='search' size={20} color='#657786' />
                    <TextInput
                        placeholder='Search Twitter'
                        className='flex-1 ml-3 text-base'
                        placeholderTextColor='#657786'
                    />
                </View>
            </View>

            <ScrollView className='flex-1'>
                <View className='p-4'>
                    <Text className='text-xl font-bold text-gray-900 mb-4'>Trending for you</Text>
                {TRENDING_TOPIC.map((item,index) => (
                    <TouchableOpacity key={index} className='py-3 border-b border-gray-100'>
                        <Text className='font-bold text-gray-900 text-lg'>{ item.topic}</Text>
                        <Text className='text-gray-500 text-sm'>{ item.tweets} Tweets</Text>
                    </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Search;
