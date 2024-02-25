/* eslint-disable react/prop-types */

import styled from "styled-components";

const QuoteContainer = styled.article`
  background: #e5e7eb;
  display: flex;
  flex-direction: column;
  padding-left: 25rem;
  padding-right: 25rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: center;
`;
const QuoteContent = styled.h1`
  font-size: 36px;
  font-weight: 300;
  font-style: italic;
  color: #1f2937;
`;
const QuoteAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;
  align-self: flex-end;
`;
function Quote() {
  return (
    <QuoteContainer>
      <QuoteContent>
        This is an inspiring quote, or a testimonial from a customer. Maybe
        it&apos;s just filling up space, or maybe people will actually read it.
        Who knows? All I know is that it looks nice.
      </QuoteContent>
      <QuoteAuthor>-Thor, God of Thunder</QuoteAuthor>
    </QuoteContainer>
  );
}

export default Quote;
