import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../../components';

interface notifyProps {
  notify?: string;
}

export const HiddenNotify = ({ notify }: notifyProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}>Notify</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Text color="yellow">{notify}</Text>
      </TouchableOpacity>
    </View>
  );
};
