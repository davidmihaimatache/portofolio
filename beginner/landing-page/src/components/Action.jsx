import styled from "styled-components";

/* eslint-disable react/prop-types */
const Container = styled.div``;
const ActionContent = styled.div`
  margin: 7rem 14rem 7rem 14rem;
  padding: 5rem 10rem 5rem 10rem;
  background-color: #3882f6;
  border-radius: 1rem;
  color: #f9faf8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const Subtitle = styled.p``;
const SignUpButton = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 2px solid #f9faf8;
  color: #f9faf8;
  background-color: #3882f6;
  border-radius: 0.5rem;
  display: inline-block;
`;
function Action() {
  return (
    <Container>
      <ActionContent>
        <div>
          <Title>Call To action! It&apos;s time!</Title>
          <Subtitle>
            Sign up for our product by clicking that button right over there!
          </Subtitle>
        </div>
        <SignUpButton>Sign up</SignUpButton>
      </ActionContent>
      ;
    </Container>
  );
}

export default Action;
