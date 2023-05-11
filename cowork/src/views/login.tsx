import { useState } from "react";

import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import { TextField } from "../components";
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../utils";
import { useLocalStorage } from "../hooks";
import { useAuth } from "../hooks/use-auth";

const LoginView = styled.div`
  height: 90vh;
  margin: 32px;
  width: 40%;
  border-right: 1px black solid;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
export const Login = () => {
  const { setItem } = useLocalStorage();
  const { loginAuth } = useAuth();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  const [login1] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      setItem(AUTH_TOKEN, login.token);
      loginAuth({
        email: formState.email,
        name: "Anna",
        authToken: login.token,
      });
      navigate("/home");
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      setItem(AUTH_TOKEN, signup.token);
      navigate("/");
    },
  });

  return (
    <LoginView>
      <h1>Cowork</h1>
      <Container>
        <h2>Login</h2>
        <SecondaryButton
          Icon={GoogleIcon}
          label="Continue with google"
          onClick={() => alert("🚧 Work in Progress 🚧")}
        />
        <h5>or</h5>
      </Container>
      <Container>
        {!formState.login && (
          <TextField
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            placeholder="Your name"
          />
        )}
        <TextField
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          placeholder="Your email address"
        />
        <TextField
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Password"
        />

        <SecondaryButton
          onClick={formState.login ? login1 : signup}
          label="Continue"
        />

        <PrimaryButton
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
          label="need to create an account?"
        />
      </Container>
    </LoginView>
  );
};
