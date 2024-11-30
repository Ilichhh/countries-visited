'use client';

import { useForm } from 'react-hook-form';
import { useCurrentUserStats, useUpdateUserProfile } from '@/src/hooks/useCurrentUser';

import { Stack, Input, Fieldset } from '@chakra-ui/react';
import { Field } from '@/src/components/ui/field';
import { Button } from '@/src/components/ui/button';
import { SettingsFormValues } from '@/src/types/forms';

export const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SettingsFormValues>();

  const { data: userData } = useCurrentUserStats();
  const updateUserProfile = useUpdateUserProfile(setError);

  const onSubmit = handleSubmit(async (data) => {
    if (!userData) {
      return;
    }
    await updateUserProfile.mutate({ id: userData.id.toString(), data });
  });

  return (
    <form onSubmit={onSubmit}>
      <Fieldset.Root size="lg" w="md">
        <Stack gap="4">
          <Fieldset.Legend>Change username</Fieldset.Legend>
          <Fieldset.HelperText>Be careful.</Fieldset.HelperText>

          <Fieldset.Content>
            <Field
              label="Username"
              helperText="Your username"
              invalid={!!errors.username}
              errorText={errors.username?.message}
            >
              <Input
                defaultValue={userData?.username}
                {...register('username', {
                  required: 'Username is required',
                  pattern: {
                    value: /^(?=.*[a-zA-Z])[a-zA-Z0-9-]{3,}$/,
                    message:
                      'Username must be at least 3 characters, contain letters, and be a valid slug',
                  },
                })}
              />
            </Field>
          </Fieldset.Content>
          <Button type="submit" alignSelf="flex-start" loading={isSubmitting}>
            Change username
          </Button>
        </Stack>
      </Fieldset.Root>
    </form>
  );
};
