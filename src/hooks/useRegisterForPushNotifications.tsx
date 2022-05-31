import {
  AndroidImportance,
  getDevicePushTokenAsync,
  getExpoPushTokenAsync,
  getPermissionsAsync,
  NativeDevicePushToken,
  requestPermissionsAsync,
  setNotificationChannelAsync,
  setNotificationHandler,
} from 'expo-notifications';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { registerUserPushNotificationToken } from '../store/reducers/user/actions';
import { registerUserPushNotificationTokenPayload } from '../store/reducers/user/types';

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/**
 * Execute this function as a hook, the execution itself will ask for notifications permission,
 * get user push notification token and carry it out to our user reducer.
 * @returns Object containing exponentToken and devicePushToken or null if not found.
 */
export default () => {
  const registerForPushNotificationsAsync = useCallback(async () => {
    const { status: existingStatus } = await getPermissionsAsync();

    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    const devicePushToken =
      (await getDevicePushTokenAsync()) as NativeDevicePushToken;

    const exponentToken = (
      await getExpoPushTokenAsync({
        experienceId: '@valepay/valepay',
        devicePushToken,
      })
    ).data;

    if (Platform.OS === 'android') {
      setNotificationChannelAsync('default', {
        name: 'default',
        importance: AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return {
      exponentToken,
      devicePushToken,
    };
  }, []);

  const dispatch = useDispatch();
  const [pushNotificationTokens, setPushNotificationTokens] =
    useState<null | registerUserPushNotificationTokenPayload>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await registerForPushNotificationsAsync();

        if (res) {
          const { exponentToken, devicePushToken } = res;

          exponentToken &&
            devicePushToken &&
            dispatch(
              registerUserPushNotificationToken({
                exponentToken,
                devicePushToken,
              })
            );

          setPushNotificationTokens({ exponentToken, devicePushToken });
        }
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [registerForPushNotificationsAsync, dispatch]);

  return pushNotificationTokens;
};
