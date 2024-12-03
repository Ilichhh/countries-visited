import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useCountryStore } from '@/src/lib/store/useCountryStore';
import { useUpdateUserStats } from '@/src/hooks/useUpdateUserStats';

import DatePicker from 'react-datepicker';
import { Button } from '@/src/components/ui/button';
import { Field } from '@/src/components/ui/field';
import { DialogFooter, Fieldset, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import { DialogActionTrigger } from '@/src/components/ui/dialog';
import { Checkbox } from '@/src/components/ui/checkbox';
import { Tooltip } from '@/src/components/ui/tooltip';
import { LuInfo } from 'react-icons/lu';

import 'react-datepicker/dist/react-datepicker.css';

import { TripData } from '@/src/types/trip';

interface TripAddFormProps {
  onClose: () => void;
}

export const TripAddForm = ({ onClose }: TripAddFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TripData>();

  const { data: session } = useSession();
  const { data: country } = useCountryStore();
  const updateUserStats = useUpdateUserStats();
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [withDates, setWithDates] = useState(true);

  const onSubmit = handleSubmit(async (data) => {
    if (!session || !country) return;
    try {
      await updateUserStats.mutateAsync({
        userId: session.user.id,
        country,
        startDate: withDates ? startDate : undefined,
        endDate: withDates ? endDate : undefined,
        description: data.description,
      });
      onClose();
    } catch (error) {
      console.error('Error adding trip:', error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Fieldset.Root p="0">
        <Stack gap="4">
          <Fieldset.Content>
            <Flex gap="4">
              <Field label="Start date">
                <DatePicker
                  disabled={!withDates}
                  customInput=<Input></Input>
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => setStartDate(date || new Date())}
                />
              </Field>
              <Field label="End date">
                <DatePicker
                  disabled={!withDates}
                  customInput=<Input></Input>
                  dateFormat="dd/MM/yyyy"
                  selected={endDate}
                  onChange={(date) => setEndDate(date || new Date())}
                />
              </Field>
            </Flex>
            <Field flexDirection="row" alignItems="center">
              <Checkbox
                cursor="pointer"
                checked={withDates}
                onCheckedChange={() => setWithDates(!withDates)}
              >
                Add trip with dates{' '}
              </Checkbox>
              <Tooltip
                content="Adding trip dates will provide a clear visualization of your travel history on a timeline.
                However, if you don’t want to share this information and just want to mark a visited country, 
                you can add these details later."
                openDelay={100}
                closeDelay={100}
              >
                <LuInfo cursor="pointer"></LuInfo>
              </Tooltip>
            </Field>

            <Field label="Description" helperText="Write something about your trip">
              <Textarea {...register('description')} />
            </Field>
          </Fieldset.Content>
          <DialogFooter p="0">
            <DialogActionTrigger asChild>
              <Button variant="outline" disabled={isSubmitting}>
                Cancel
              </Button>
            </DialogActionTrigger>
            <Button type="submit" loading={isSubmitting}>
              Add trip
            </Button>
          </DialogFooter>
        </Stack>
      </Fieldset.Root>
    </form>
  );
};
