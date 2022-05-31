import React, { useState } from 'react';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container } from './styles';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function Form() {

  const { control, handleSubmit } = useForm<FormData>();

  function handleUserRegister(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <ControlledInput
        name='name'
        control={control}
        icon="user"
        placeholder="Name"
      />
      <ControlledInput
        name='email'
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
      />
      <ControlledInput
        name='password'
        control={control}
        icon="lock"
        placeholder="Password"
        secureTextEntry
      />
      <ControlledInput
        name='passwordConfirm'
        control={control}
        icon="lock"
        placeholder="Password confirm"
        secureTextEntry
      />

      <Button
        title="Register"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}