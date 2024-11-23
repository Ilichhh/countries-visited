'use client';

import { useForm } from 'react-hook-form';

import { Stack, Input, Fieldset } from '@chakra-ui/react';
import { Field } from '@/src/components/ui/field';
import { Button } from '@/src/components/ui/button';

import { SettingsFormValues } from '@/src/types/forms';

export const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SettingsFormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <Fieldset.Root onSubmit={onSubmit} size="lg" w="md">
      <Stack gap="4">
        <Fieldset.Legend>Change username</Fieldset.Legend>
        <Fieldset.HelperText>Be careful.</Fieldset.HelperText>

        <Fieldset.Content>
          <Field
            label="Username"
            helperText="Your username"
            invalid={!!errors.currentCountry}
            errorText={errors.currentCountry?.message}
          >
            <Input {...register('currentCountry')} />
          </Field>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">
          Change username
        </Button>
      </Stack>
    </Fieldset.Root>
  );
};
