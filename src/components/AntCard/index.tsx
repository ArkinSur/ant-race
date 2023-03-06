import { Text, View } from 'react-native';
import { type Ant } from '../../pages/MainPage/types';

interface Props {
  ant: Ant;
}

export default function AntCard({ ant }: Props) {
  return (
    <View key={ant.name} style={{ paddingHorizontal: 20, marginVertical: 8 }}>
      <Text>Name: {ant.name}</Text>
      <Text>Color: {ant.color}</Text>
      <Text>Weight: {ant.weight}</Text>
      <Text>Length: {ant.length}</Text>
      <Text>Likelihood: {ant.likelihood}</Text>
      {!!ant?.chance && <Text>Chance: {(ant.chance * 100).toFixed(0)}%</Text>}
    </View>
  );
}
