import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Container, ErrorMessageText } from './styles';
import { Input } from '../Input';

interface InputControlProps extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined;
}

export const InputControl: React.FunctionComponent<InputControlProps> = ({
  control,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <Controller
        control={control}
        // rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <ErrorMessageText>{error}</ErrorMessageText>}
    </Container>
  );
};
