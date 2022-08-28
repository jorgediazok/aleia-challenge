import { MainContainer } from './Main.styles';
import Card from '../Card/Card';

type DataProps = {
  data: Array<Record<string, string>>;
};
const Main = ({ data }: DataProps) => {
  return (
    <MainContainer>
      {data?.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </MainContainer>
  );
};

export default Main;
