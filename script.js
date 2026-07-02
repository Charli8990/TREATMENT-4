// Menampilkan pesan saat halaman selesai dimuat
window.onload = function () {
    alert("Selamat datang di Website Sederhana!");
};

// Mengubah teks saat judul diklik
const judul = document.querySelector("h1");

judul.addEventListener("click", function () {
    judul.textContent = "Selamat Belajar Git & GitHub 🚀";
    judul.style.color = "#dc2626";
});

// Menampilkan pesan saat paragraf diklik
const paragraf = document.querySelector("p");

paragraf.addEventListener("click", function () {
    alert("Terima kasih telah mengunjungi website ini!");
});