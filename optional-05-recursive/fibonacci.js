function fibonacci(n) {
    // Basis kasus: jika n adalah 0, kembalikan array dengan elemen 0
    if (n === 0) {
    return [0];
    }
    
  // Jika n adalah 1, kembalikan array dengan elemen 0 dan 1
    if (n === 1) {
    return [0, 1];
    }

  // Rekursi: mendapatkan deret Fibonacci hingga n-1
    const fib = fibonacci(n - 1);
    
  // Menambahkan elemen Fibonacci berikutnya
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    
    return fib;
}


// Jangan hapus kode di bawah ini!
export default fibonacci;
