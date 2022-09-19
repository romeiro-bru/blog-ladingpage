import {Aside} from './Aside';
import images from './images';
import allArticles from './articleLists';

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
                {allArticles.articles1.map((item, i) => 
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
            {allArticles.articles2.map((item, i) => 
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
        {allArticles.articles3.map((item, i) => 
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
        {allArticles.articles4.map((item, i) => 
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