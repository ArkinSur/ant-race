import { useState } from 'react';
import { fetchAnts } from '../../services/api';
import { Button, ButtonText, Container } from './styles';
import { type Ant } from './types';

export default function MainPage() {
  const [loadingAnts, setLoadingAnts] = useState(false);
  const [ants, setAnts] = useState<Ant[]>([]);

  const getAnts = async () => {
    try {
      setLoadingAnts(true);
      const response = await fetchAnts();
      const newAnts = response.ants.map(ant => {
        const newAnt = { ...ant };
        newAnt.likelihood = 'Not yet calculated';

        return newAnt;
      });
      setAnts(newAnts);
      setLoadingAnts(false);
    } catch (error) {
      console.error(error);
      setLoadingAnts(false);
    }
  };

  return (
    <Container>
      <Button
        onPress={() => {
          getAnts();
        }}
        activeOpacity={0.6}
      >
        <ButtonText>Get Ants</ButtonText>
      </Button>
    </Container>
  );
}
