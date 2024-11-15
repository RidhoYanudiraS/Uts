import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <input type="text" placeholder="Search..." style={{ width: '70%' }} />
        <Link href="/login">
          <button>Login</button>
        </Link>
      </header>
    </div>
  );
}
