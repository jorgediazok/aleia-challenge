import { HeaderWrapper, HeaderTitle, HeaderCta } from './Header.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>We are an award winning interior design Agency</HeaderTitle>
      <HeaderCta>
        View all Properties <AiOutlineArrowRight size={20} />
      </HeaderCta>
    </HeaderWrapper>
  );
};

export default Header;
