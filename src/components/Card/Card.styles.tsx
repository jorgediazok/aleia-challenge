import styled from 'styled-components';

export const ImageCard = styled.article`
  position: relative;
  width: 411px;
  height: 293px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  p {
    color: white;
    position: absolute;
    padding: 15px 15px;

    &.price {
      font-family: 'Poppins', sans-serif;
      bottom: 0;
      left: 0;
      font-size: 22px;
      font-weight: 700;
    }

    &.address {
      bottom: 0;
      font-family: 'Poppins', sans-serif;
      right: 0;
      font-weight: 500;
      font-size: 20px;
    }
  }

  .like {
    position: absolute;
    color: white;
    font-size: 2rem;
    top: 15px;
    right: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 311px;
    height: 293px;

    img {
      filter: none;
    }
  }
`;
