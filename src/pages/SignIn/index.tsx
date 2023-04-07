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

import { useNavigation } from '@react-navigation/native';

import devProfileLogo from '../../assets/logo.png';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const SignIn: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

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

      <CreateAccountButton onPress={() => navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccountButton>
    </KeyboardAvoidingView>
  );
};
