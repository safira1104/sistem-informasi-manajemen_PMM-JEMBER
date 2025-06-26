// frontend/types/index.d.ts atau frontend/types/review.d.ts
// Pastikan file ini di-include di tsconfig.json Anda

interface Review {
  id?: number; // Opsional, karena mungkin belum ada saat membuat baru
  name: string;
  platform: string;
  text: string;
  time: string;
  // Jika ikon disalurkan sebagai string dari backend, bukan JSX.Element langsung
  // Misalnya, backend hanya mengirim "google", "facebook", lalu frontend yang me-mapnya
  // platform_icon_name?: string; // Jika Anda ingin membedakan string platform dan icon
  icon: JSX.Element; // Ini adalah JSX.Element yang sudah di-map di frontend
  // rating?: number; // Jika Anda ingin rating dinamis
}

// Jika Anda memiliki tipe lain, tambahkan di sini
// interface User { ... }