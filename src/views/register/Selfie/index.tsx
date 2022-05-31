import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

import { ConfirmationModal } from '../../../components/ConfirmationModal';
import { PUBLIC } from '../../../navigation/Public/constants';
import { registerUploadImages } from '../../../services/register-service';
import { registerSelfie } from '../../../store/reducers/user/actions';
import { userRootState } from '../../../store/reducers/user/types';
import { Store } from '../../../store/types';
import { CameraControls } from '../_components/CameraControls';
import { CameraOverlay } from '../_components/CameraOverlay';
import { Heading } from '../_components/Heading';
import { PermissionDenied } from '../_components/PermissionDenied';

export const Selfie = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const { uuid } = useSelector(({ user }: { user: userRootState }) => user);
  const { uuid: companyUuid, document } = useSelector(
    ({ company }: Store) => company
  );

  // send selfie to backend
  const [selfie, setSelfie] = useState('');

  const camRef: any = useRef(null);

  const onCancel = () => {
    setShowModal(false);
    camRef.current.resumePreview();
  };

  const onConfirm = async () => {
    setLoading(true);
    const res = await registerUploadImages({
      image: `data:image/png;base64, ${selfie}`,
      type: 'SELFIE',
      cnpj: !!document,
      uuid: document ? companyUuid : uuid,
    });

    if (res?.data) {
      setShowModal(false);
      navigate(PUBLIC.RESIDENCE_PROOF as never);

      dispatch(registerSelfie({ selfie }));
      return;
    }

    console.warn({ res });
    Alert.alert(
      'Image não enviada.',
      'sua foto não pode ser salva. \n Tente novamente.',
      [
        {
          onPress: async () => await camRef?.current?.resumePreview(),
          text: 'Tentar novamente',
        },
      ]
    );
  };

  const getCameraPermissionAsync = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const switchCamera = () => {
    const { back, front } = Camera.Constants.Type;

    setType(type === back ? front : back);
  };

  useEffect(() => {
    getCameraPermissionAsync();
  }, []);

  const takePicture = async () => {
    const options = { quality: 0.5, base64: true, skipProcessing: true };

    const data = await camRef?.current?.takePictureAsync(options);

    setSelfie(data.base64);
    await camRef?.current?.pausePreview();
    setShowModal(true);
  };

  if (hasPermission === null) {
    // render a loading
    return null;
  }

  if (hasPermission === false) {
    Alert.alert(
      'Permissão necessária.',
      'Para continuarmos,precisamos da sua permissão para usar a camera. Não se preocupe, é tudo confidencial.'
    );
    return <PermissionDenied />;
  }

  return (
    <View style={styles.selfie}>
      <StatusBar style="light" translucent />

      {isFocused && (
        <Camera
          testID="camera-component"
          ref={camRef}
          style={[styles.camera]}
          type={type}
        />
      )}

      <CameraOverlay mode="selfie" testID="camera-overlay" />

      <View style={styles.outterContainer}>
        <Heading
          label="Centralize sua face ao circulo, pressione o botão ao centro"
          testID="selfie-view-heading"
        />
        <CameraControls
          testID="camera-controls"
          {...{ switchCamera, takePicture }}
        />
      </View>

      <ConfirmationModal
        testID="confirmation-modal"
        showModal={showModal}
        onCancel={onCancel}
        onConfirm={onConfirm}
        loading={loading}
      />
    </View>
  );
};
