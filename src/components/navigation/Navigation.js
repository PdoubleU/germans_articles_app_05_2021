import styled from 'styled-components';
import StyledLink from './Link';
import { UsersContext } from '../../providers/UserAuthProvider';
import { useContext } from 'react';
import StyledButton from '../reusables/Button';

const Navbar = ({ className }) => {
  const cxt = useContext(UsersContext);

  return (
    <nav className={className}>
      <StyledLink href="/" />
      {!cxt.loading && cxt.isLogged ? (
        <StyledButton
          handleClick={cxt.logOut}
          description="Log out"
          props="xs"
        />
      ) : null}
    </nav>
  );
};

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  height: auto;
  width: 100vw;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default StyledNavbar;