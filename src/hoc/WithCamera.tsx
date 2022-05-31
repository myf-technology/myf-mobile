// import { Camera } from 'expo-camera';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';

// import { IWithCameraProps } from './types';

// import { Text } from '../components/Text';

// // do this later
// export const WithCamera = ({ children }: IWithCameraProps) => {
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const getCameraPermissionAsync = async () => {
//     const { status } = await Camera.requestCameraPermissionsAsync();
//     setHasPermission(status === 'granted');
//   };
//   useEffect(() => {
//     getCameraPermissionAsync();
//   }, []);
//   if (hasPermission === null) {
//     // render a loading
//     return <View />;
//   }
//   if (hasPermission === false) {
//     // go back to the previous screen.
//     return <Text>Acesso negado !</Text>;
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar style="light" />
//       {children}
//     </View>
//   );

//   if (hasPermission === 'granted') {
//     return children;
//   }
// };
