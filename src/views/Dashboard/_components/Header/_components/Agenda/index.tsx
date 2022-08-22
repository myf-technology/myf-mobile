import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../../../components';
import styles from './styles';

interface agendaProps {
  nextEvent?: string;
}

export const Agenda = ({ nextEvent }: agendaProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.agenda}>Agenda</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Text color="yellow" typography="caption">
          {nextEvent}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
