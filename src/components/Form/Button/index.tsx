import React from 'react';
import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
