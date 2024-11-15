import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save user data to local storage
    const userData = {
      fullName,
      email,
      password,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful! You can now log in.');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(/img/sign.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }}>
      <div style={{
        backgroundColor: '#FF8C00',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        width: '300px',
      }}>
        <h2 style={{ color: 'black', marginBottom: '20px' }}>Sign Up Account</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Name *"
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Account *"
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
            placeholder="Password *"
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
          <input
            type="password"
            placeholder="Confirm Password *"
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <button type="submit" style={{
            padding: '10px 20px',
            borderRadius: '20px',
            backgroundColor: '#fff',
            color: 'black',
            border: '1px solid black',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px',
          }}>
            Sign Up
          </button>
        </form>
        <Link href="/login">
          <span style={{ marginTop: '10px', display: 'block', color: '#007bff', cursor: 'pointer' }}>
            Already have an account? Log in
          </span>
        </Link>
      </div>
    </div>
  );
}