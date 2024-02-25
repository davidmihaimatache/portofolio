/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 464px;
  background-color: #1f2937;
  padding-left: 10rem;
  padding-right: 10rem;
`;

const Upper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding-top: 1rem;
  height: 50px;
`;
const HeaderLogo = styled.h2`
  font-size: 24px;
  color: #f9faf8;
`;
const LinkContainer = styled.div``;
const Link = styled.a`
  font-size: 18px;
  color: #e5e7eb;
  padding-left: 1rem;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
`;
const BottomLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
`;
const HeroText = styled.h1`
  font-size: 48px;
  font-weight: extra-bold;
  color: #f9faf8;
  margin-bottom: 0.5rem;
`;
const HeroSecondaryText = styled.p`
  font-size: 18px;
  color: #e5e7eb;
`;
const SignUpButton = styled.button`
  background-color: #3882f6;
  border: 0;
  outline: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.3rem;
  &:focus-visible {
    outline: 0;
  }
`;

const Placeholder = styled.div`
  background-color: gray;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Header() {
  return (
    <StyledHeader>
      <Upper>
        <HeaderLogo>David M.</HeaderLogo>
        <LinkContainer>
          <Link>header link</Link>
          <Link>header link</Link>
          <Link>header link</Link>
        </LinkContainer>
      </Upper>

      <Bottom>
        <BottomLeft>
          <HeroText>This Website is awesome</HeroText>
          <HeroSecondaryText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nulla
            quibusdam assumenda deserunt ipsa veritatis consectetur maxime,
            alias, officiis, rem cum beatae corporis minus. Adipisci facere id
            rem quod reiciendis?
          </HeroSecondaryText>
          <SignUpButton>Sign Up</SignUpButton>
        </BottomLeft>
        <Placeholder>this is a placeholder of an image</Placeholder>
      </Bottom>
    </StyledHeader>
  );
}

export default Header;
