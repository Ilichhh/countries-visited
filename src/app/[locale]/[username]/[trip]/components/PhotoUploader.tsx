'use client';

import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { uploadPhoto } from '@/src/services/restPhotosApi';

export const PhotoUploader = ({ tripId, userId }: { tripId: number; userId: number }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tripId', tripId.toString());
    formData.append('userId', userId.toString());

    const data = await uploadPhoto(formData);

    console.log('Фото загружено:', data);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <Button onClick={handleUpload} disabled={!file} size="xs">
        Upload
      </Button>
    </div>
  );
};
