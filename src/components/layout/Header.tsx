import Link from 'next/link';
// лучше типизировать
interface HeaderProps {
  lng: string;
}

export default function Header({ lng }: HeaderProps) {
  return (
    <header>
      <nav>
        <Link href={`/${lng}`}>Home</Link>
        <Link href={`/${lng}/countries`}>Countries</Link>
      </nav>
    </header>
  );
}
