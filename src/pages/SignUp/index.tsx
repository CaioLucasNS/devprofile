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
import { Input } from '../../components/Form/Input';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button } from '../../components/Form/Button';

import { useNavigation } from '@react-navigation/native';

import devProfileLogo from '../../assets/logo.png';
import { FieldValues, useForm } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  completeName: string;
  email: string;
  password: string;
}

export const SignUp: React.FunctionComponent = () => {
  const { control, handleSubmit } = useForm<FieldValues>();
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
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Senha"
              secureTextEntry
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
