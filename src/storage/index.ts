import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey: string, value: any) => {
  const jsonValue = JSON.stringify(value);

  try {
    await AsyncStorage.setItem(storageKey, jsonValue);
    return null;
  } catch (e) {
    console.warn(e);
  }
};

export const getData = async (storageKey: string) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    if (value !== null) {
      const jsonValue = JSON.parse(value);

      return jsonValue;
    }
  } catch (e) {
    console.warn(e);
  }
};
