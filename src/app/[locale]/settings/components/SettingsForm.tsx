'use client';

import { useForm } from 'react-hook-form';

import { Stack, Input } from '@chakra-ui/react';
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
    <form onSubmit={onSubmit}>
      <Stack gap="4">
        <Field
          label="Display name"
          invalid={!!errors.fullName}
          errorText={errors.fullName?.message}
        >
          <Input {...register('fullName', { required: 'Enter name' })} />
        </Field>
        <Field
          label="I am from"
          invalid={!!errors.countryOfResidence}
          errorText={errors.countryOfResidence?.message}
        >
          <Input {...register('countryOfResidence')} />
        </Field>
        <Field
          label="Now I live in"
          invalid={!!errors.currentCountry}
          errorText={errors.currentCountry?.message}
        >
          <Input {...register('currentCountry')} />
        </Field>
        <Button type="submit">Save</Button>
      </Stack>
    </form>
  );
};
