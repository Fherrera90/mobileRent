import * as React from "react";
import { FC, useState, useEffect } from 'react';
import { Button, View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image, Alert, Linking } from "react-native";
import { WebView } from "react-native-webview";
import Env from './config/environment';



const env = Env();
/*export default class App extends React.Component {
  const [dataSource, setDataSource] = useState(0);
  render() {
    return (
      <WebView source={{uri: 'http://192.168.1.89:3001/' }} style={{ marginTop: 20 }} />
    );
  }
}*/
interface AppInterface {
  ipConnect: String
}
const App: FC<AppInterface> = ({
}) => {
  useEffect(() => {
    //setValue("")
  }, []);
  //const {control, handleSumit} = useForm();
  const [ipConnect, setIpConnect] = useState("192.168.1.117:3001");
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const onView = () => {
    //if (ipConnect != '') {
    setMostrarFormulario(false)
    //}
  };
  const formView = () => {

    return (
      <View style={styles.container} >
        <Image
          source={require('./assets/adaptive-icon.png')}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.inputView} >
          <TextInput
            onChangeText={(varText) => setIpConnect(varText)}
            placeholder={'Ingrese su IPv4'}
            //secureTextEntry={true}
            style={styles.TextInput}
          />
        </View>
        <TouchableOpacity style={styles.goBtn}
          onPress={() => onView()}>
          <Text> Redireccionar </Text>
        </TouchableOpacity>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    inputView: {
      backgroundColor: "#F5D223",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,

      alignItems: "center",
    },
    top: {
      flex: 0.3,
      backgroundColor: "grey",
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    middle: {
      flex: 0.3,
      backgroundColor: "beige",
      borderWidth: 5,
      marginTop: 20
    },
    bottom: {
      flex: 0.3,
      backgroundColor: "pink",
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    center: {
      position: "absolute",
      width: 250,
      height: 300,
      left: (Dimensions.get('window').width / 2) - 130,
      top: (Dimensions.get('window').height / 2) - 150,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    goBtn:
    {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "orange",
    }
  });
  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;

  const webViewPago = () => {
    return (

      <WebView source={{
        uri: `http://192.168.1.89:3001/payment_confirmation/U2FsdGVkX19PCrIMR1umDpVu8tuMrfPSjJYA2oGiNBiGPR*VV+raqeyUUg2MFylZ538vrOkSkXLmad3ILnqQ2oygqtg*9V0UfO3y4*emLq7Ks7sdSPzABajL8E+D+i49*HQ*a1d4d1oQzbElL4VHVn5So*n8*RmF+0cuVY0WEPUuGrbaFpDlbsBaRY13O4xMRru4+snORhhzm0XtpapznAsBLFtA5HZ7YsJUlTApqngdtD5CGz2KMELIqMe9xxWtdOJ5WJrXTgTDt*xPNmCeUNahULehcyKn9*ZIMPQhFZEKCKD6s+6z*bv5LYnKD*XCKhVT9fKSfMwCZWv8yiG+66lg*gc7Ak*X1wmzc1XR0rr9xExTm5Xn2k1Pm*y4i6Ysn7kKNOJHzBBwd0IVHOyNTZRwZCOcbCFFHAHwZOutrFgNiKquRcfymvy8Dv5hDBP+fIHEsE6IL7H1o8RioxDSFA==`
      }}
        style={{ marginTop: 50 }}
        scrollEnabled={false}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
    )
  }

  const webView = () => {
try {
        return (
  
          <WebView source={{
            uri: `http://${ipConnect}/login`

          }}
            style={{ marginTop: 50 }}
            scrollEnabled={false}
            //renderError={() =>
            //  webViewPago()
           // }
            injectedJavaScript={INJECTED_JAVASCRIPT}
          />
        )
} catch (error) {
  return (

    <WebView source={{
      //uri: `http://${ipConnect}/login`
      uri: `http://${ipConnect}/payment_confirmation/U2FsdGVkX19PCrIMR1umDpVu8tuMrfPSjJYA2oGiNBiGPR*VV+raqeyUUg2MFylZ538vrOkSkXLmad3ILnqQ2oygqtg*9V0UfO3y4*emLq7Ks7sdSPzABajL8E+D+i49*HQ*a1d4d1oQzbElL4VHVn5So*n8*RmF+0cuVY0WEPUuGrbaFpDlbsBaRY13O4xMRru4+snORhhzm0XtpapznAsBLFtA5HZ7YsJUlTApqngdtD5CGz2KMELIqMe9xxWtdOJ5WJrXTgTDt*xPNmCeUNahULehcyKn9*ZIMPQhFZEKCKD6s+6z*bv5LYnKD*XCKhVT9fKSfMwCZWv8yiG+66lg*gc7Ak*X1wmzc1XR0rr9xExTm5Xn2k1Pm*y4i6Ysn7kKNOJHzBBwd0IVHOyNTZRwZCOcbCFFHAHwZOutrFgNiKquRcfymvy8Dv5hDBP+fIHEsE6IL7H1o8RioxDSFA==`
    }}
      style={{ marginTop: 50 }}
      scrollEnabled={false}
      injectedJavaScript={INJECTED_JAVASCRIPT}
    />
  )
}
  }


  return (

    <>
      {mostrarFormulario ? formView() : webView()}
    </>
  );
}
export default App;