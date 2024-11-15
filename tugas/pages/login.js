import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && userData.email === email && userData.password === password) {
      // Jika login berhasil, arahkan ke halaman utama (home)
      router.push('/');
    } else {
      // Menampilkan error jika login gagal
      setError('Failed: Incorrect email or password');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(/img/login.jpg)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundColor: '#FFA500', 
    }}>
      <div style={{
        backgroundColor: '#FF8C00',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '300px',
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Username..."
            style={{
              padding: '12px',
              marginBottom: '15px',
              borderRadius: '20px',
              border: 'none',
              outline: 'none',
              backgroundColor: '#f3f3f3',
              fontSize: '16px',
              textAlign: 'center'
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password..."
            style={{
              padding: '12px',
              marginBottom: '15px',
              borderRadius: '20px',
              border: 'none',
              outline: 'none',
              backgroundColor: '#f3f3f3',
              fontSize: '16px',
              textAlign: 'center'
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span style={{ color: 'black', marginBottom: '10px', fontSize: '14px' }}>
            Create Account?
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/register">
              <button type="button" style={{
                padding: '10px 20px',
                borderRadius: '20px',
                backgroundColor: '#fff',
                color: 'black',
                border: '1px solid black',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Sign Up
              </button>
            </Link>
            <button type="submit" style={{
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor: '#fff',
              color: 'black',
              border: '1px solid black',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Log In
            </button>
          </div>
        </form>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
