import { View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const SigninScreen = (props) => {
  const width = Dimensions.get('window').width;
  const [securePass, setSecurePass] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const login = () => {
    console.log(email, password);
    if(email === 'admin' && password === 'admin'){
        props.setLoggedIn(true);
    }
  }
  return (
    <View style={{height: '100%', backgroundColor: '#FFF', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
      <View>
        <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>Login</Text>
        <Text style={{color: 'rgba(0,0,0,0.5)', fontSize: 23, fontWeight: 600}}>Please Login to continue</Text>
        <View style={{borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, width: width-100, padding: 10, borderRadius: 20, marginTop: 15}}>
            <View style={{flexDirection: 'row'}}>
                <Entypo name='mail' color={'#fc9803'} size={25}/>
                <Text style={{fontSize: 17, marginLeft: 5, color: '#fc9803'}}>Email</Text>
            </View>
            <TextInput placeholder="Enter your Email address" style={{fontSize: 17}} placeholderTextColor={'#e3b064'} onChangeText={(val)=> setEmail(val)}/>
        </View>
        <View style={{borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, width: width-100, padding: 10, borderRadius: 20, marginTop: 15}}>
            <View style={{flexDirection: 'row'}}>
                <Entypo name='lock' color={'#fc9803'} size={25}/>
                <Text style={{fontSize: 17, marginLeft: 5, color: '#fc9803'}}>Password</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput placeholder="Enter your Password" style={{fontSize: 17, width: width*0.62, borderColor: '#e3b064'}} secureTextEntry={securePass} placeholderTextColor={'#e3b064'} onChangeText={(val)=> setPassword(val)}/>
                <Entypo name={securePass ? 'eye-with-line': 'eye'} color={'#fc9803'} size={25} onPress={()=> setSecurePass(!securePass)}/>
            </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={login} style={{padding: 15, backgroundColor: '#fc9803', borderRadius: 30, flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
                <Text style={{color: '#FFFF', fontSize: 21, fontWeight: 700, marginRight: 7}}>Login</Text>
                <Entypo name='arrow-right' color={'#FFF'} size={20} />
            </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <Text style={{fontSize: 17, color: 'rgba(0,0,0,0.6)'}}>Don't have an account ? </Text>
        <Text style={{color: '#fc9803', fontWeight: 800, fontSize: 17}}>Sign up</Text>
      </View>
    </View>
  )
}

export default SigninScreen