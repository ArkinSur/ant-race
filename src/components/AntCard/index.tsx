import { CardText, Container } from './styles';
import { type Props } from './types';

export default function AntCard({ ant }: Props) {
  const { name, color, weight, length, likelihood } = ant;
  return (
    <Container key={name}>
      <CardText>Name: {name}</CardText>
      <CardText>Color: {color}</CardText>
      <CardText>Weight: {weight}</CardText>
      <CardText>Length: {length}</CardText>
      <CardText>Likelihood: {likelihood}</CardText>
      {!!ant?.chance && (
        <CardText>Chance: {(ant.chance * 100).toFixed(1)}%</CardText>
      )}
    </Container>
  );
}
