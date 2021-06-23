 import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  import SecureKeystore from 'react-native-secure-keystore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

 constructor(props) {
    super(props);
    this.state = { isAvailable: false, ready: false };
  }
   async componentDidMount() {
//      try {
//        const isAvailable = await SecureKeystore.isAvailable();
//        this.setState({ isAvailable, ready: true });
//      } catch (ex) {
//        console.log('Error = ', ex);
//      }
    }
  render() {
     const data ="{\"options\":{\"productData\":{\"Earrings\":{\"items\":[\"0079-500x500\",\"0097-500x500\",\"00118-500x500sdfghjk\"],\"type\":\"ear\"},\"Sets\":{\"items\":[\"DSC_0206S\",\"DSC_0204S\"],\"type\":\"set\"}}}\n" +
 "}";
      console.log(this.state.data);

         return (
               <View style={{ flex: 1, padding: 0, }}>
                <MirrarSDK
            data={data}
            uuid='562e2c77-8e8d-41b1-96bc-4b431b2c3a16'
             />
           </View>
         );
       }
     }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });