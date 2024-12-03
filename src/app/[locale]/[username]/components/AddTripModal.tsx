'use client';

import { useState } from 'react';
import { useCountryStore } from '@/src/lib/store/useCountryStore';

import { Button } from '@/src/components/ui/button';
import { DialogCloseTrigger, DialogRoot, DialogTrigger } from '@/src/components/ui/dialog';
import { DialogBody, DialogContent, DialogHeader, DialogTitle } from '@/src/components/ui/dialog';
import { CountrySelector } from '@/src/components/shared/CountrySelector';
import { TripAddForm } from './TripAddForm';
import { Flex, IconButton } from '@chakra-ui/react';
import { LuChevronLeft } from 'react-icons/lu';

export const AddTripModal = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isOpen, setIsOpen] = useState(false);

  const { data: selectedCountry } = useCountryStore();

  const handleClose = () => {
    setIsOpen(false);
    setStep(1);
  };

  return (
    <DialogRoot onOpenChange={() => setIsOpen(!isOpen)} open={isOpen} lazyMount>
      <DialogTrigger asChild>
        <Button size="sm">Add country</Button>
      </DialogTrigger>
      <DialogContent maxW="md">
        <DialogHeader>
          <DialogTitle>
            {' '}
            {step === 1 ? (
              'Add country'
            ) : (
              <Flex gap="3" alignItems="center">
                <IconButton variant="ghost" size="sm" onClick={() => setStep(1)}>
                  <LuChevronLeft />
                </IconButton>
                <img
                  src={selectedCountry?.flags.svg}
                  alt={selectedCountry?.flags.alt}
                  height="20px"
                  width="30px"
                ></img>
                {selectedCountry?.name.common}
              </Flex>
            )}
          </DialogTitle>
        </DialogHeader>
        <DialogBody pb="6">
          {step === 1 ? (
            <CountrySelector setStep={setStep}></CountrySelector>
          ) : (
            <TripAddForm onClose={handleClose}></TripAddForm>
          )}
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
