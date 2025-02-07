// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = []; // Inisialisasi array untuk menyimpan pesanan


// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0); // Menghitung total harga
  const newOrder = {
    id: generateUniqueId(), // Menghasilkan ID unik
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status awal pesanan
  };
  orders.push(newOrder); // Menambahkan pesanan ke array
  return newOrder; // Mengembalikan pesanan yang baru ditambahkan
}


// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId); // Mencari pesanan berdasarkan ID
  if (order) {
    order.status = status; // Mengupdate status pesanan
    return order; // Mengembalikan pesanan yang telah diupdate
  }
  return null; // Jika pesanan tidak ditemukan
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Memfilter pesanan yang berstatus Selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Menghitung total pendapatan
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const initialLength = orders.length; // Menyimpan panjang awal array
  orders = orders.filter(order => order.id !== id); // Menghapus pesanan berdasarkan ID
  return orders.length < initialLength; // Mengembalikan true jika pesanan dihapus
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
