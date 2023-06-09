import React from 'react';
import {
  Container,
  Content,
  CreateAccountButton,
  CreateAccountTitle,
  DevProfileLogo,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Icon,
  Title,
} from './styles';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from '../../components/Form/Button';
import { InputControl } from '../../components/Form/InputControl';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import devProfileLogo from '../../assets/logo.png';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  email: string;
  password: string;
}

const signInSchema = yup
  .object({
    email: yup.string().email('Email inválido.').required('Informe o email.'),
    password: yup.string().required('Informe a senha.'),
  })
  .required();

export const SignIn: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(signInSchema),
  });

  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
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
              <Title>Faça seu login</Title>
            </View>

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

            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>

      <CreateAccountButton onPress={() => navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccountButton>
    </KeyboardAvoidingView>
  );
};
