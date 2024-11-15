import Link from 'next/link'; // Tambahkan ini di bagian atas file
import { useCart } from '../context/CartContext';

export default function Home() {
  const { cart, addToCart } = useCart();
  const productItems = [
    { id: 1, src: '/img/1.png', description: 'Sepatu Wanita', price: 250000 },
    { id: 2, src: '/img/2.png', description: 'Sepatu Hitam Polos', price: 300000 },
    { id: 3, src: '/img/5.png', description: 'Sepatu Olahraga Pria', price: 400000 },
    { id: 4, src: '/img/7.png', description: 'Sepatu Putih Polos', price: 350000 },
    { id: 5, src: '/img/4.png', description: 'Sepatu Olahraga Wanita', price: 450000 },
    
    // Produk lainnya
  ];

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#6666', padding: '10px 20px' }}>
        <h1 style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>RD SHOP</h1>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/checkout">
            <button style={{ padding: '8px 16px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '4px', marginRight: '10px', cursor: 'pointer' }}>
              Keranjang ({cart.length})
            </button>
          </Link>
          <Link href="/login">
            <button style={{ padding: '8px 16px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Masuk
            </button>
          </Link>
        </div>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', marginTop: '20px' }}>
        {productItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', height: '300px' }}>
            <img src={item.src} alt={item.description} style={{ width: '180px', height: 'auto', objectFit: 'cover', marginBottom: '10px' }} />
            <div style={{ fontSize: '14px', color: '#333', textAlign: 'center', marginBottom: '5px' }}>{item.description}</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '10px' }}>Rp {item.price.toLocaleString('id-ID')}</div>
            <button onClick={() => addToCart(item)} style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
