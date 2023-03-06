import { useCallback, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import AntCard from '../../components/AntCard';
import { fetchAnts } from '../../services/api';
import {
  Button,
  ButtonText,
  CardsContainer,
  Container,
  LoadingContainer,
} from './styles';
import { type Ant } from './types';

export default function MainPage() {
  const [loadingAnts, setLoadingAnts] = useState(false);
  const [ants, setAnts] = useState<Ant[]>([]);

  const getAnts = useCallback(async () => {
    try {
      setLoadingAnts(true);
      const response = await fetchAnts();
      const newAnts = response.data.ants.map(ant => {
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
  }, []);

  return (
    <>
      <SafeAreaView />
      <Container>
        {loadingAnts ? (
          <LoadingContainer>
            <ActivityIndicator size="large" color="blue" />
          </LoadingContainer>
        ) : (
          <CardsContainer>
            {ants.map(ant => {
              return <AntCard key={ant.name} ant={ant} />;
            })}
          </CardsContainer>
        )}
        <Button
          onPress={() => {
            getAnts();
          }}
          activeOpacity={0.6}
        >
          <ButtonText>Get Ants</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // startRace();
          }}
          style={{ marginTop: 14 }}
          activeOpacity={0.6}
        >
          <ButtonText>Start Race</ButtonText>
        </Button>
      </Container>
    </>
  );
}
