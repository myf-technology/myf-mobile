import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

import { ConfirmationModal } from '../../../components/ConfirmationModal';
import { PUBLIC } from '../../../navigation/Public/constants';
import { registerUploadImages } from '../../../services/register-service';
import {
  registerDocumentBackImage,
  registerDocumentFrontImage,
} from '../../../store/reducers/user/actions';
import { userRootState } from '../../../store/reducers/user/types';
import { Store } from '../../../store/types';
import { CameraControls } from '../_components/CameraControls';
import { CameraOverlay } from '../_components/CameraOverlay';
import { Heading } from '../_components/Heading';
import { PermissionDenied } from '../_components/PermissionDenied';

export const Document = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [backDocument, setBackDocument] = useState(false);
  const [documentBackImage, setBackImage] = useState('');
  const [documentFrontImage, setFrontImage] = useState('');
  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(false);
  const { uuid } = useSelector(({ user }: { user: userRootState }) => user);
  const { uuid: companyUuid, document } = useSelector(
    ({ company }: Store) => company
  );

  const camRef: any = useRef(null);

  const onCancel = () => {
    setShowModal(false);
    camRef.current.resumePreview();
  };

  const onConfirm = async () => {
    setLoading(true);
    const res = await registerUploadImages({
      image: `data:image/png;base64, ${picture}`,
      cnpj: !!document,
      type: backDocument ? 'DOCUMENT_BACK' : 'DOCUMENT_FRONT',
      uuid: document ? companyUuid : uuid,
    });

    if (res?.data) {
      setShowModal(false);
      navigate(PUBLIC.AKNOWLEDGEMENT as never);
      backDocument ? setBackImage(picture) : setFrontImage(picture);
      return;
    }

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
    if (!backDocument) {
      camRef.current.resumePreview();
      setBackDocument(true);
      dispatch(registerDocumentFrontImage({ documentFrontImage }));
      dispatch(registerDocumentBackImage({ documentBackImage }));
      setShowModal(false);
      return;
    }
  };

  const requestPermissionAsync = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    requestPermissionAsync();
  }, []);

  const takePicture = async () => {
    const options = { quality: 0.5, base64: true, skipProcessing: true };
    const data = await camRef?.current?.takePictureAsync(options);
    const source = data.base64;
    setShowModal(true);
    setPicture(source);

    await camRef?.current?.pausePreview();
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    Alert.alert(
      'Permissão necessária.',
      'Para continuarmos,precisamos da sua permissão para usar a camera. Não se preocupe, é tudo confidencial.'
    );
    return <PermissionDenied />;
  }

  const switchCamera = () => {
    setType(
      type === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    );
  };

  return (
    <View style={styles.selfie}>
      <StatusBar style="light" translucent />
      <Camera
        testID="camera-component"
        ref={camRef}
        style={[styles.camera]}
        type={type}
      />
      <CameraOverlay mode="document" />

      <Heading
        align="center"
        label={
          backDocument
            ? 'Verso'
            : 'Faça uma foto da área frontal do seu documento'
        }
      />

      <CameraControls {...{ takePicture, switchCamera }} />

      <ConfirmationModal
        showModal={showModal}
        onCancel={onCancel}
        onConfirm={onConfirm}
        loading={loading}
      />
    </View>
  );
};
