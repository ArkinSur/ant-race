import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import AntCard from '../../components/AntCard';
import { fetchAnts } from '../../services/api';
import {
  Button,
  ButtonText,
  CardsContainer,
  Container,
  LoadingContainer,
  RaceText,
  RaceTextContainer,
  Title,
} from './styles';
import { type Ant } from './types';

export default function MainPage() {
  const [loadingAnts, setLoadingAnts] = useState(false);
  const [ants, setAnts] = useState<Ant[]>([]);
  const [raceState, setRaceState] = useState('Not yet run');

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

  function generateAntWinLikelihoodCalculator() {
    const delay = 2000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    return callback => {
      setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }

  const startRace = useCallback(() => {
    setRaceState('In progress');
    const newAntsStatus: Ant[] = ants.map(ant => {
      const newAnt = { ...ant };
      newAnt.likelihood = 'In progress';
      newAnt.chance = 0;
      return newAnt;
    });
    setAnts(newAntsStatus);

    ants.forEach((ant, index) => {
      const calculator = generateAntWinLikelihoodCalculator();

      calculator((chance: number) => {
        const newAnts = [...newAntsStatus];
        newAnts[index].likelihood = 'Calculated';
        newAnts[index].chance = chance;
        newAnts.sort((a, b) => b.chance - a.chance);
        setAnts(newAnts);
      });
    });
  }, [ants]);

  useEffect(() => {
    if (ants.length && ants.every(ant => ant.likelihood === 'Calculated')) {
      setRaceState('All calculated');
    }
  }, [ants]);

  return (
    <>
      <SafeAreaView />
      <Container>
        <Title>Ant Race</Title>

        <Button
          onPress={() => {
            getAnts();
          }}
          activeOpacity={0.6}
        >
          <ButtonText>Get Ants</ButtonText>
        </Button>

        {loadingAnts ? (
          <LoadingContainer>
            <ActivityIndicator size="large" color="#4f2d13" />
          </LoadingContainer>
        ) : (
          <CardsContainer>
            {ants.map(ant => {
              return <AntCard key={ant.name} ant={ant} />;
            })}
          </CardsContainer>
        )}
        {!!ants.length && (
          <>
            <RaceTextContainer>
              <RaceText>Race: {raceState}</RaceText>
              {raceState === 'In progress' && (
                <ActivityIndicator
                  style={{ marginLeft: 12 }}
                  size="small"
                  color="#4f2d13"
                />
              )}
            </RaceTextContainer>
            <Button
              onPress={() => {
                startRace();
              }}
              activeOpacity={0.6}
            >
              <ButtonText>Start Race</ButtonText>
            </Button>
          </>
        )}
      </Container>
    </>
  );
}
