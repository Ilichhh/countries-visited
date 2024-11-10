'use client';

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { Stack, Input } from '@chakra-ui/react';
import { Field } from '@/src/components/ui/field';
import { Button } from '@/src/components/ui/button';

import { RegisterFormValues } from '@/src/types/forms';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();

  const t = useTranslations();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4">
        <Field
          label={t('loginPage.emailInput')}
          invalid={!!errors.email}
          errorText={errors.email?.message}
        >
          <Input {...register('email', { required: t('loginPage.errors.emptyEmail') })} />
        </Field>
        <Field
          label={t('loginPage.passwordInput')}
          invalid={!!errors.newPassword}
          errorText={errors.newPassword?.message}
        >
          <Input {...register('newPassword', { required: t('loginPage.errors.emptyPassword') })} />
        </Field>
        <Button type="submit">Login</Button>
      </Stack>
    </form>
  );
};
