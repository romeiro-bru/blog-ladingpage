import allContents from "./contentList";
import { Aside } from './Aside';

export function FourthContainer() {
    return(
        <section className="md:flex px-4 sm:p-14 bg-base">
        <div className="md:mr-10">
            <h2 className="mb-8 font-bold text-primary-base-lowest">ARTIKEL LAINNYA</h2>
            <ul>
                {allContents.content4.map((item, i) =>
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
    )
}