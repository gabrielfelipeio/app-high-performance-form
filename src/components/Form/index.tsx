import React from 'react';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert } from 'react-native';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const schema = yup.object({
  name: yup.string().required("Enter your name."),
  email: yup.string().email("Invalid e-mail").required("Enter the e-mail."),
  password: yup.string().min(8, "The password must contain at least 8 digits.").required("Enter the password."),
  passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "Confirmation password does not match.").required("Confirm password again.")
});


export function Form() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    Alert.alert("Successfully registered.")
    console.log(data);
  }

  return (
    <Container>
      <ControlledInput
        name='name'
        control={control}
        icon="user"
        placeholder="Name"
        error={errors.name}
      />
      <ControlledInput
        name='email'
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        error={errors.email}
      />
      <ControlledInput
        name='password'
        control={control}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        error={errors.password}
      />
      <ControlledInput
        name='passwordConfirm'
        control={control}
        icon="lock"
        placeholder="Password confirm"
        secureTextEntry
        error={errors.passwordConfirm}
      />

      <Button
        title="Register"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}