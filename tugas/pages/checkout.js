import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const router = useRouter();
  const { cart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState({});

  // Hitung subtotal
  const subtotal = cart.reduce((total, item) => {
    const itemQuantity = quantity[item.id] || 1;
    return total + item.price * itemQuantity;
  }, 0);

  const shipping = 10000; // Ongkir tetap
  const total = subtotal + shipping;

  // Fungsi untuk memperbarui kuantitas per produk
  const handleQuantityChange = (id, type) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + (type === 'increment' ? 1 : -1)),
    }));
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Keranjang Belanja</h2>
      
      {cart.length === 0 ? (
        <p>Keranjang Anda kosong.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <h4>{item.description}</h4>
            <p>Harga: Rp {item.price.toLocaleString('id-ID')}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
              <span>{quantity[item.id] || 1}</span>
              <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
            </div>
            <p>Total: Rp {(item.price * (quantity[item.id] || 1)).toLocaleString('id-ID')}</p>
            <button
              onClick={() => handleRemoveItem(item.id)}
              style={{ padding: '8px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
            >
              Hapus Item
            </button>
          </div>
        ))
      )}

      <h3>Subtotal: Rp {subtotal.toLocaleString('id-ID')}</h3>
      <h3>Ongkir: Rp {shipping.toLocaleString('id-ID')}</h3>
      <h3>Total: Rp {total.toLocaleString('id-ID')}</h3>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          Kembali
        </button>
        <button
          style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => alert('Pembelian berhasil!')}
        >
          Beli
        </button>
      </div>
    </div>
  );
}
