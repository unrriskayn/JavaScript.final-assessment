function factorial(n) {
    // Basis kasus: jika n adalah 0 atau 1, maka hasilnya adalah 1
    if (n === 0 || n === 1) {
    return 1;
    } else {
    // Rekursi: n! = n * (n-1)!
    return n * factorial(n - 1);
    }
}

// Jangan hapus kode di bawah ini!
export default factorial;
