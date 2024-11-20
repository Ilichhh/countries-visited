import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import { getUserSession } from '@/src/lib/getUserSession';

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  endpoint: 'https://storage.yandexcloud.net',
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string,
  },
});

export const uploadPhotoToS3 = async (key: string, file: Buffer, contentType: string) => {
  // const session = await getUserSession();

  // if (!session) {
  //   return { failure: 'Not authenticated' };
  // }

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  });

  await s3.send(command);
  return `https://${process.env.AWS_BUCKET_NAME}.storage.yandexcloud.net/${key}`;
};
