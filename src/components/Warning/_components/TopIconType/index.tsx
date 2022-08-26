import { View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Colors } from '../../../../constants';

import styles from '../../styles';
import { topIconTypeProps } from '../../types';

export const TopIconType = ({ topIconType }: topIconTypeProps) => (
  <>
    {topIconType ? (
      <View style={styles.topIcon}>
        {topIconType ? (
          <Icon
            width={30}
            height={30}
            fill={Colors.yellow}
            name={topIconType}
          />
        ) : null}
      </View>
    ) : null}
  </>
);
