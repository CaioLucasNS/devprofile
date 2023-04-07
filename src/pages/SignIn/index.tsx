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
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import devProfileLogo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
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

            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Entrar" />

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>

      <CreateAccountButton>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccountButton>
    </KeyboardAvoidingView>
  );
};
