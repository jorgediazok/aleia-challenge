import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    align-items: flex-start;
    margin-left: 25px;
    padding: 0;
    margin-bottom: 30px;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0a0a0a;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    flex-wrap: wrap;
  }
`;

export const HeaderCta = styled.button`
  border: 1.5px solid #0a0a0a;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
`;
