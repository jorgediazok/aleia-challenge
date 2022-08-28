import { ImageCard } from './Card.styles';
import { AiOutlineHeart } from 'react-icons/ai';

type CardProps = {
  card: Record<string, string>;
};

const Card = ({ card }: CardProps) => {
  return (
    <>
      <ImageCard>
        <img
          src={require(`../../assets/images/${card.imageName}`)}
          alt='card'
        />
        <AiOutlineHeart className='like' />
        <p className='price'>$ {card.price}</p>
        <p className='address'>{card.address}</p>
      </ImageCard>
    </>
  );
};

export default Card;
