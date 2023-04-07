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

import devProfileLogo from '../../assets/logo.png';

export const SignUp: React.FunctionComponent = () => {
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

            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Registrar" />
          </Content>
        </Container>
      </ScrollView>

      <BackToSignInButton>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para o Login</BackToSignInTitle>
      </BackToSignInButton>
    </KeyboardAvoidingView>
  );
};
