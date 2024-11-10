'use client';

import { Button } from '@/src/components/ui/button';
import { HStack, Separator, Stack, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { DialogCloseTrigger, DialogRoot, DialogTrigger } from '../ui/dialog';
import { DialogBody, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

interface AuthModalWithButtonProps {
  mode: 'login' | 'register';
}

export const AuthModalWithButton = ({ mode }: AuthModalWithButtonProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        {mode === 'login' ? (
          <Button size="xs" variant="surface">
            Login
          </Button>
        ) : (
          <Button size="xs">Register</Button>
        )}
      </DialogTrigger>
      <DialogContent maxW="sm">
        <DialogHeader>
          <DialogTitle>{mode === 'login' ? 'Login' : 'Create Account'}</DialogTitle>
        </DialogHeader>
        <DialogBody pb="4">
          <Stack gap="4">
            {mode === 'login' ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
            <HStack>
              <Separator />
              <Text flexShrink="0">Or</Text>
              <Separator />
            </HStack>
            <Button
              variant="surface"
              onClick={() =>
                signIn('google', {
                  callbackUrl: `/`,
                  redirect: true,
                })
              }
            >
              Continue with Google
            </Button>
            <Button
              variant="surface"
              onClick={() =>
                signIn('github', {
                  callbackUrl: `/`,
                  redirect: true,
                })
              }
            >
              Continue with Github
            </Button>

            {mode === 'login' ? (
              <p>Don’t have an Account yet? Create now</p>
            ) : (
              <p>Already have an Account? Login now</p>
            )}
          </Stack>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
