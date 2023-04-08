import React from 'react';
import {
  BackToSignInButton,
  BackToSignInTitle,
  Container,
  Content,
  DevProfileLogo,
  Icon,
  Title,
} from './styles';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import { InputControl } from '../../components/Form/InputControl';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import devProfileLogo from '../../assets/logo.png';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  completeName: string;
  email: string;
  password: string;
}

const signUpSchema = yup
  .object({
    completeName: yup.string().required('Insira seu nome completo.'),
    email: yup.string().email('Email inválido.').required('Informe o email.'),
    password: yup.string().required('Informe a senha.'),
  })
  .required();

export const SignUp: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(signUpSchema),
  });
  const { goBack } = useNavigation<ScreenNavigationProp>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      completeName: form.completeName,
      email: form.email,
      password: form.password,
    };

    console.log('data: ', data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <DevProfileLogo source={devProfileLogo} />
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <InputControl
              autoCapitalize="words"
              autoCorrect={false}
              control={control}
              name="completeName"
              placeholder="Nome completo"
              error={errors.completeName && errors.completeName?.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              error={errors.email && errors.email?.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Senha"
              secureTextEntry
              error={errors.password && errors.password?.message}
            />

            <Button title="Registrar" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>

      <BackToSignInButton onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para o Login</BackToSignInTitle>
      </BackToSignInButton>
    </KeyboardAvoidingView>
  );
};
