'use client';

import { Button } from '@/src/components/ui/button';
import { DialogCloseTrigger, DialogRoot, DialogTrigger } from '@/src/components/ui/dialog';
import { DialogBody, DialogContent, DialogHeader, DialogTitle } from '@/src/components/ui/dialog';
import { CountrySelector } from '@/src/components/shared/CountrySelector';

export const AddTripModal = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button size="sm">Add country</Button>
      </DialogTrigger>
      <DialogContent maxW="md">
        <DialogHeader>
          <DialogTitle>Add country</DialogTitle>
        </DialogHeader>
        <DialogBody pb="6">
          <CountrySelector></CountrySelector>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
