import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

export const googleLogin = async () => {
  try {
    GoogleSignin.configure({
      webClientId: '127100120369-d8jh7h8pn7fmf6nsjj26bus608vou34b.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['email', 'profile']
    })
    await GoogleSignin.hasPlayServices()
    const { idToken, user } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    const signInResult = await auth().signInWithCredential(googleCredential)

    const userInfo = {
      displayName: user.name,
      email: user.email,
      photoURL: user.photo
    }

    return { user: signInResult.user, userInfo }
  } catch (error) {
    console.log(error)
  }
}
