import { ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';

import { InputGroup } from '@/src/components/ui/input-group';
import { Input } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const t = useTranslations();

  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input placeholder={t('app.search')} value={value} onChange={onChange} />
    </InputGroup>
  );
};
