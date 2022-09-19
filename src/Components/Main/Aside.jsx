const asideList = [
    {datetime: '2021-26-12', date: 'Desember 26', title: 'Langkah Membuat Dashboard Responsive'},
    {datetime: '2021-08-13', date: 'Agustus 13', title: 'Belajar pola design dari mencoba aplikasi'},
    {datetime: '2021-27-07', date: 'Juli 27', title: 'Cara cepat belajar design landing page'},
    {datetime: '2021-04-13', date: 'April 13', title: 'Eksplorasi design presentasi dengan Figma'},
    {datetime: '2021-16-03', date: 'Maret 16', title: 'Mengenai benar dan salah pada UI Design'},
    {datetime: '2021-26-12', date: 'Maret 15', title: 'Tentang Creativity Block pada UI Designer'},
    {datetime: '2021-03-01', date: 'Maret 01', title: 'Memilih foto yang cocok untuk desain website'},
    {datetime: '2021-28-02', date: 'Februari 28', title: 'Membuat Desain header yang proporsional'},
    {datetime: '2021-28-02', date: 'Februari 28', title: 'Sebaiknya Belajar UI Design mulai dari mana?'},
    {datetime: '2021-23-02', date: 'Februari 23', title: 'Sebaiknya Belajar UI Design mulai dari mana?'},
    {datetime: '2021-21-02', date: 'Februari 21', title: 'Beberapa Pertanyaan tentang terjun di industri UI/UX'},
    {datetime: '2021-18-02', date: 'Februari 18', title: 'Dari Website Programmer Menjadi UI Designer'},
]
export function Aside() {
    return(
        <aside className="md:w-9/12">
        <h2 className="mb-8 font-bold text-primary-base-lowest">ARSIP 2021</h2>
        <ul className="divide-y">
            {asideList.map((item, i) => 
                <li className="p-4">
                    <span><time className="my-3 text-xs font-bold text-primary-base-lowest" dateTime={item.datetime}>{item.date}</time></span>
                    <h3 className="font-bold text-sm text-primary-base-low">{item.title}</h3>
                </li>
            )}  
        </ul>     
      </aside> 
    )
}