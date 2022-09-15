import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../constants';
import { IStore } from '../../store/types';
import { Button } from '../Button';
import { Text } from '../Text';
import { dialogController } from './store/slice';
import { styles } from './styles';

export const Dialog = () => {
  const selector = useSelector((state: IStore) => state);
  const dispatch = useDispatch();

  const onDialogPress = () => {
    dispatch(dialogController({ visible: false, message: null }));
  };

  return (
    selector.dialog.controls.visible && (
      <View
        style={[
          styles.dialogContainer,
          {
            backgroundColor:
              selector.createBalance.controls.status === 'fulfilled'
                ? Colors.green
                : selector.createBalance.controls.status
                ? Colors.red
                : Colors.black,
          },
        ]}>
        <Text typography="footnote">{selector.dialog.controls.message}</Text>
        <Button
          // TODO : modify button theme to add different themes.
          style={styles.dialogButtonContainer}
          onPress={onDialogPress}
          suffixIcon={() => (
            <Icon
              name="close-circle-outline"
              height={18}
              width={18}
              fill={Colors.white}
            />
          )}
        />
      </View>
    )
  );
};
