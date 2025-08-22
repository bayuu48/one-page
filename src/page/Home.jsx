import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div>
      <div className="kolom" data-aos="fade-right">
        <div className="judul" data-aos="fade-down">BAYU LANGIT</div>
        <div className="kotak besar" data-aos="zoom-in">
          <div className="image-box" data-aos="fade-up">
            <img src="/kecil.jpg.JPG" alt="gambar 1" />
          </div>
          <div className="desc" data-aos="fade-up" data-aos-delay="200">
            Ya, Perkenalkan Nama Saya Satrio Langit Bayu Pradana.<br />
            Saya Pelajar Dari Sekolah SMKN 8 Malang,<br />
            Dan Saya Membuat Ini DI Kelas XI Dan Semoga Saya Bisa Membuat Lebih Dari Ini Kedepan nya.
          </div>
        </div>
      </div>

      {/* Kolom Tengah */}
      <div className="kolom tengah" data-aos="fade-up">
        <div className="judul-vertikal" data-aos="fade-left">SATRIO PRADANA</div>
        <div className="kotak sedang" data-aos="zoom-in">
          <div className="image-box" data-aos="fade-up">
           <img src="/lego.jpeg" alt="gambar 2" />
          </div>
          <div className="desc" data-aos="fade-up" data-aos-delay="200">
            HOBI Saya Mungkin Cuma Fotografis, Lihat Windah, Main Game (Mobile Lagend, dan Roblox), Desain Tipis - Tipis (Kalau mood)
          </div>
        </div>
      </div>

      <div className="kolom" data-aos="fade-left">
        <div className="kotak kecil" data-aos="zoom-in">
          <div className="image-box" data-aos="fade-up">
<img src="/child.jpg" alt="gambar 3" />
          </div>
          <div className="desc kanan" data-aos="fade-up" data-aos-delay="200">
            ~Sifat Saya? Baik Suka Membantu, Ceria, Sedikit Introvert Sama Orang Baru~<br />
            ~Pencapaian Saya? Saya Pernah Juara Tournament Mobile Legend Tingkat Kabupaten~<br />
            ~Makanan Favorit Nasgor, Bubur Ayam~<br />
            ~Warna Favorit Biru Tua
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;