import { NextRequest, NextResponse } from 'next/server';
import { uploadPhotoToS3 } from '@/src/utils/s3';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  const photos = await prisma.photo.findMany();

  return NextResponse.json(photos);
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const tripId = formData.get('tripId');
    const userId = formData.get('userId');
    const description = formData.get('description');
    const file = formData.get('file') as File;

    if (!file || !tripId || !userId) {
      return NextResponse.json({ error: 'Файл обязателен' }, { status: 400 });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

    const photoUrl = await uploadPhotoToS3(fileName, fileBuffer, file.type);

    const photo = await prisma.photo.create({
      data: {
        url: photoUrl,
        description: description?.toString(),
        tripId: parseInt(tripId.toString()),
        userId: parseInt(userId.toString()),
      },
    });

    return NextResponse.json(photo);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка при загрузке фотографии' }, { status: 500 });
  }
}
