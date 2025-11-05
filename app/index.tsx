import {  useClerk } from '@clerk/clerk-expo';
import {  Button, Text, View } from 'react-native';

const HomeScreen = () => {
    const { signOut } = useClerk();

    return (
        <View>
            <Text>index</Text>

            <Button onPress={()=>signOut()} title='Sign out'></Button>
        </View>
    );
}


export default HomeScreen;
