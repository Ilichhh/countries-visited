'use client';

import { useForm } from 'react-hook-form';

import { Stack, Fieldset } from '@chakra-ui/react';
import { Button } from '@/src/components/ui/button';

import { SettingsFormValues } from '@/src/types/forms';

export const AccountDeletion = () => {
  const { handleSubmit, reset } = useForm<SettingsFormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <Fieldset.Root onSubmit={onSubmit} size="lg" maxW="md">
      <Stack gap="4">
        <Fieldset.Legend color="fg.error">Delete account</Fieldset.Legend>
        <Fieldset.HelperText>
          Once you delete your account, there is no going back. Please be certain.
        </Fieldset.HelperText>
        <Button type="submit" bg="fg.error" alignSelf="flex-start">
          Delete account
        </Button>
      </Stack>
    </Fieldset.Root>
  );
};
