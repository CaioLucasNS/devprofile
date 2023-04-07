import React from 'react';
import { Container, Content, DevProfileLogo, Title } from './styles';
import { Input } from '../../components/Form/Input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';

import devProfileLogo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <DevProfileLogo source={devProfileLogo} />
          <Title>Faça seu login</Title>

          <Input placeholder="Email" />
          <Input placeholder="Senha" />

          <Button title="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};
