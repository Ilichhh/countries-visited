import { Container } from '@/src/components/layout/Container';
import { getUserSession } from '@/src/lib/getUserSession';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/');
  }

  return <Container>Profile page</Container>;
}
