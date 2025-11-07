import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const { isLoaded, isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(tabs)'} />
  }

  if (!isLoaded) {
    return null
  }

  // if (!isSignedIn) {
  //   return <Redirect href={'/(auth)'} />
  // }

  return <Stack screenOptions={{ headerShown: false }} />
}
