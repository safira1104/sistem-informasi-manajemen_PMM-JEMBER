import { Review } from "@/types"; // Import interface Review

const API_BASE_URL = 'http://localhost:8000/api'; // Ganti dengan URL backend Laravel Anda

export async function fetchReviews(): Promise<Review[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`);
    if (!response.ok) {
      // Tangani error HTTP (misal 404, 500)
      const errorText = await response.text();
      throw new Error(`Gagal mengambil review: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    // Anda mungkin perlu memvalidasi atau memformat data di sini jika struktur dari backend berbeda
    return data;
  } catch (error) {
    console.error("Kesalahan saat memanggil API review:", error);
    throw error; // Lempar ulang error agar bisa ditangkap di komponen
  }
}

// Contoh fungsi untuk menambahkan review (jika ada form)
export async function addReview(newReview: Omit<Review, 'id' | 'icon'>): Promise<Review> {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gagal menambahkan review: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    return data; // Mengembalikan review yang sudah disimpan
  } catch (error) {
    console.error("Kesalahan saat menambahkan review:", error);
    throw error;
  }
}