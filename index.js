const express = require('express');
const path = require('path');

const app = express();

// Menyediakan file statis (CSS, JS, Gambar) dari folder 'public'
// Karena index.js berada di root, path ke public langsung path.join(__dirname, 'public')
app.use(express.static(path.join(__dirname, 'public')));

// Route utama untuk menampilkan halaman portofolio / Atlas Landing Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server secara lokal (Opsional)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}

// Wajib diexport agar bisa dibaca oleh Vercel
module.exports = app;
