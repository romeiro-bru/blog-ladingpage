import {Aside} from './Aside';
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
    {datetime: '', date: '', title: '', alt: '', paragraph: ''}
]

export function Main() {
    return(
    <main className="bg-base">
        <section className="p-4 sm:px-14 pb-20 bg-surface">
        <img className="mb-12 border-y-2 border-primary w-fit py-8 m-auto" src={images.blog} alt="the blog" />     

      <div className="md:flex">
        <article className="md:w-6/12">
            <figure>
                <img className="md:w-10/12" src={images.img20} alt="work bag" />
                <figcaption className="my-3 text-xs text-surface-low">
                    <time dateTime="2022-01-11">Januari 11, 2022</time>
                </figcaption>
            </figure>
            <div className="w-11/12">
                <h1 className="my-3 text-surface-high font-bold text-3xl">Eksplorasi design untuk melamar pekerjaan UI Designer</h1>
                <p className="text-surface-low">Belum pernah mengerjakan project tapi sering melakukan eksplorasi design, bisa kah melamar pekerjaan sebagai designer?</p>
            </div>
        </article>

            <ul className=" md:w-6/12 divide-y divide-primary">
                {articles1.map((item, i) => 
                    <li className="pb-4" key={i}>
                        <article className="md:flex">
                            <img className="md:h-2/6 md:w-5/12 mt-2 md:mr-4 sm:mb-6 md:mb-0"  src={item.img} alt={item.alt} />
                            <div>
                                <time className="my-3 text-xs text-surface-low">{item.date}</time>
                                <h2 className="font-bold text-xl w-full text-surface-high">{item.title}</h2>
                            </div>
                        </article>
                    </li>
                )}                              
            </ul>
        </div>
        </section>

        <section className="p-4 sm:p-14 bg-base">
        <h2 className="font-bold text-primary-base-lowest">PILIHAN EDITOR</h2>
        <ul className="mt-7 md:flex flex-wrap md:divide-x">
            {articles2.map((item, i) => 
                <li key={i} className="md:w-1/4 px-6 md:pr-6"> 
                <article>
                    <figure>
                        <img className="w-11/12" src={item.img} alt={item.alt} />
                        <figcaption className="my-3 text-xs font-bold text-primary-base-low">
                        <time dateTime={item.datetime}>{item.date}</time>
                        </figcaption>
                    </figure>
                    <h3 className="mb-4 font-bold text-xl text-primary">{item.title}</h3>
                    <p className="mb-5 font-bold text-sm text-primary-base-low">{item.paragraph}</p>
                </article>
                </li>
            )}     
            </ul> 
        </section>

    <section className="px-4 sm:p-14 bg-neutral">
      <h2 className="font-bold text-primary-neutral-lowest">ARTIKEL TERBARU</h2>
      <ul className="md:grid grid-cols-3 mt-7">          
        {articles3.map((item, i) => 
            <li key={i} className="mb-8 w-11/12">
            <article>
                <figure>
                <img src={item.img} alt={item.alt} />
                <figcaption className="my-3 text-xs font-bold text-primary-neutral-low">
                    <time dateTime={item.datetime}>{item.date}</time>
                </figcaption>
                </figure>
                <h3 className="mb-5 text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-sm font-bold text-primary-neutral-low">{item.paragraph}</p>
            </article>
            </li>
         )}
        </ul>
    </section>
    <section>
      <img className="w-full" src={images.banner} alt="banner about figma" />
    </section>

    <section className="md:flex px-4 sm:p-14 bg-neutral">
      <div className="md:mr-10">
      <h2 className="mb-8 font-bold text-primary-base-lowest">ARTIKEL LAINNYA</h2>
      <ul>
        {articles4.map((item, i) => 
        <li key={i}>
          <article className="mb-8 md:flex">
            <div>
              <time className="my-3 text-xs font-bold text-primary-base-lowest" dateTime={item.datetime}>{item.date}</time>
              <h3 className="mb-3 text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-sm font-bold text-primary-base-low">{item.paragraph}</p>
            </div>
            <img className="md:ml-8 md:w-5/12 mt-8" src={item.img} alt={item.alt} />          
          </article>
        </li>        
        )}      
      </ul>
    </div>
    <Aside />
  </section>
    </main>
    )
}