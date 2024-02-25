import { useForm } from "react-hook-form";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  margin-bottom: 2.5rem;
  text-align: center;
  color: ${(props) => props.theme.action};
`;
const StyledInput = styled.input`
  font-size: 1.5rem;
  margin-bottom: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border: 0;
  border-radius: 2rem;
  transition: all 0.3s;
  color: ${(props) => props.theme.hero};

  &::placeholder {
    color: ${(props) => props.theme.subtle};
  }
  &:focus-visible {
    outline: 0;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
`;
const StyledP = styled.p`
  font-size: 1.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.error};
  color: ${(props) => props.theme.error};
  background-color: ${(props) => props.theme.backgroundError};
`;
function Root() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = function (data) {
    console.log(data);
    navigate("/app");
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>What will your username be?</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="greenUmbrella123"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 4,
                message: "Username should be atleast 4 characters",
              },
              maxLength: {
                value: 13,
                message: "Username shouldn't exceed 13 characters",
              },
            })}
          />
        </form>
        {errors.username && (
          <StyledP role="alert">{errors.username.message}</StyledP>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
