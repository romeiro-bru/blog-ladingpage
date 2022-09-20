import images from './images';

const articles1 = [
    {datetime: "2022-03-27", date: "Maret 27, 2022", title:"Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun ke industri", img: images.img30, alt: "man wearing headset and looking at laptop"},
    {datetime: "2022-02-15", date: "Februari 15, 2022", title: "Proses membuant layout dan komposisi pada UI Design", img: images.img24 , alt: "hands holding magic cube"},
    {datetime: "2022-08-11", date: "Augustus 11, 2022", title: "Apakah menggunakan Grid akan membatasi kreatifitas UI Designer?", img: images.img12, alt: "man looking at a screen"}
]
const articles2 = [
    {datetime: "2022-01-24", date: "Januari 24, 2022", title: "Membuat Kontrak project design dengan klien", img: images.img23, alt: "men shaking hands", paragraph: "Kontrak project adalah pekerjaan tertulis untuk menjamin pekerja dan pemberi kerja berada di posisi aman dan tidak saling mercurangi."},
    {datetime: "2021-12-22", date: "Desember 22, 2021", title: "Berlatih UX Writing dengan Prisip Dasar Microcopy", img: images.img15, alt: "hands typing on keyboard", paragraph: "Clear, Concise, Consistent dan FUnctional, prinsip dasar microcopy sebagai panduan menulis UX Writing."},
    {datetime: "2021-02-24", date: "Februari 24, 2021", title: "Cara memakai inspirasi dari referensi", img: images.img4, alt: "hand holding a light bulb", paragraph: "Cari tahu apa yang membuat nya bagus, ambil lalu terapkan pada design mu."},
    {datetime: "2021-12-21", date: "Desember 21, 2021", title: "Kadang sebuah UX perlu dibikin susah", img: images.img14, alt: "city name plates", paragraph: "UX enggak melulu tentang membuat alur yang serba mudah dan cepat. Ada beberapa bagian dari sebuah produk yang musti dibikin susah."}
]
const articles3 = [
    {datetime: '2022-03-20', date: 'Maret 20, 2022' , title: 'Referensi Design 02: Halaman detail artikel pada blog', img: images.img28, alt: 'man reading newspaper', paragraph: 'Beberapa referensi halaman artikel yang bisa kamu terapkan untuk design blog pada project atau blog pribadimu.'},
    {datetime: '2022-03-19', date: 'Maret 19, 2022', title: 'Referensi Design 01: Bold Number pada design landing page', img: images.img27, alt: 'hand holding spray can', paragraph: 'Beberapa leyout favorit saya untuk menampilkan angka pencapaian atau statisk pada design landing page'},
    {datetime: '2011-10-04', date: 'April 10, 2022', title: 'Bingung saat eksplorasi design? mungkin kurang fokus',img: images.img31, alt:'bearded man thinking', paragraph: 'Jika kamu pernah bingung saat membuat eksplorasi design, saya harap artikel ini bisa membantu mu.'},
    {datetime: '2022-03-25', date: 'Maret 25, 2022', title: 'Kapan menggunakan Switch atau Single Checkbox?',img: images.img29, alt:'man reflecting on checkboxes', paragraph: 'Kemiripan konsep Switch dan Single Checkbox sering membuat bingung designer? untuk menentukan kapan menggunakan nya.'},
    {datetime: '2022-03-11', date: 'Maret 11, 2022', title: 'Pertimbangkan branding sebelum menambahkan faktor delightful',img: images.img26, alt:'men smiling and looking at a screen', paragraph: 'Menambahkan faktor delightful tidak hanya sekedar menambahkan sesuatu yang menyenan gkan tapi juga harus selaras dengan branding.'},
    {datetime: '2022-01-23', date: 'Januari 23, 2022', title: 'Proses design dalam pembuatan data visual',img: images.img22, alt: 'hand holding a pen', paragraph: 'Ada tahapan sebelum ke pemilihan grafik, seperti mengetahui siapa yang akan membaca data.'}
]
const articles4 = [
    {datetime: '2022-01-20', date: 'Januari 20, 2022', title: 'Membuat Kumpulan referensi UI Design sebagai alat bantu saat membuat design?', img: images.img21, alt:'men discussing ideas', paragraph: 'Cara saya mengumpulkan dan menggunakan referensi sebagai alat bantu saat membuat UI design.'},
    {datetime: '2022-02-26', date: 'Februari 26, 2022', title: 'Beberapa pertanyaan saat memulai project design dengan klien',img: images.img25, alt: 'man showing information from a book', paragraph: 'Cari tahu bisnisnya, Cari tahu apa yang ditawarkan kepada customer, cari tahu kebutuhan project nya.'},
    {datetime: '2022-08-01',date: 'Januari 08, 2022', title: 'Pembuatan UI Design harus selalu pakai riset?',img: images.img19, alt: 'woman removing sticky note', paragraph: 'Apakah mengubah bentuk tombol dari kotak menjadi rounded juga harus menggunakan riset? Terlalu memakan waktu enggak sih?'},
    {datetime: '2022-01-05', date: 'Januari 05, 2022', title: 'UI Designer sebaiknya memahami bisnis klien', img: images.img18,alt: 'man analyzing charts on tablet', paragraph: 'Memahami bisnis dan mengerti kebutuhan klien adalah pondasi awal untuk membuat design yan baik.'},
    {datetime: '2022-02-01', date: 'Januari 02, 2022', title: 'Handover File Design Website ke Developer',img: images.img17, alt: 'group of people looking at notebook', paragraph: 'UI/UX tidak hanya tentang memudahkan user atau pengguna tapi juga memudahkan rekan kerja seperti developer.'},
]

const allArticles = {
    articles1: articles1,
    articles2: articles2,
    articles3: articles3,
    articles4: articles4    
}

export default allArticles