'use client';

import { useForm } from 'react-hook-form';

import { Stack, Input, Fieldset, Textarea } from '@chakra-ui/react';
import { Field } from '@/src/components/ui/field';
import { Button } from '@/src/components/ui/button';

import { SettingsFormValues } from '@/src/types/forms';

export const PublicProfileForm = () => {
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
        <Fieldset.Legend>Public profile</Fieldset.Legend>
        <Fieldset.Content>
          <Field
            label="Name"
            helperText="Your public name. May not be unique."
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
          <Field label="Bio" helperText="Write something about yoursef">
            <Textarea {...register('bio')} />
          </Field>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">
          Update profile
        </Button>
      </Stack>
    </Fieldset.Root>
  );
};
