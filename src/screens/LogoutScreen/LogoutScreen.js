import { firebase } from '../../firebase/config'

export default function SignOut({navigation}) {
    firebase.auth().signOut().then(() => {
        alert("You are logged out, see you again!")
      navigation.navigate('Login', {user: null})
  }).catch((error) => {
      alert(error)
  });
  return (
      null
  )
}