import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Container } from './styles';
import { Input } from '../Input';

interface InputControlProps extends TextInputProps {
  control: Control;
  name: string;
}

export const InputControl: React.FunctionComponent<InputControlProps> = ({
  control,
  name,
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
    </Container>
  );
};
