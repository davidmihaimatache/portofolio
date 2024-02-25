import styled from "styled-components";

/* eslint-disable react/prop-types */
const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  color: #1f2937;
  padding-bottom: 3rem;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 1rem;
  font-size: 36px;
  font-weight: bold;
  color: #1f2937;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
const InfoContainer = styled.div`
  width: 110px;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const InfoSubtext = styled.p``;
const InfoImageContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 1rem;
  border: 3px solid #3882f6;
`;
function Information() {
  return (
    <StyledArticle>
      <Title>Some random information</Title>
      <Container>
        <InfoContainer>
          <InfoImageContainer></InfoImageContainer>
          <InfoSubtext>
            this is some subtext under an illustration or image
          </InfoSubtext>
        </InfoContainer>

        <InfoContainer>
          <InfoImageContainer></InfoImageContainer>
          <InfoSubtext>
            this is some subtext under an illustration or image
          </InfoSubtext>
        </InfoContainer>

        <InfoContainer>
          <InfoImageContainer></InfoImageContainer>
          <InfoSubtext>
            this is some subtext under an illustration or image
          </InfoSubtext>
        </InfoContainer>

        <InfoContainer>
          <InfoImageContainer></InfoImageContainer>
          <InfoSubtext>
            this is some subtext under an illustration or image
          </InfoSubtext>
        </InfoContainer>
      </Container>
    </StyledArticle>
  );
}

export default Information;
