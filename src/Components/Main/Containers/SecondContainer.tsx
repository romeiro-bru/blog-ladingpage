import { useState, useEffect  } from "react";
import { ContentProps } from "./contentList";
import allContents from "./contentList";

export function SecondContainer() {
    const [contents, setContents] = useState<ContentProps[]>([])

    useEffect(() => {
        setContents(allContents.content2)
    }, [])

    return(
        <section className="p-4 sm:p-14 bg-base">
        <h2 className="font-bold text-primary-base-lowest">PILIHAN EDITOR</h2>
        <ul className="mt-7 md:flex flex-wrap md:divide-x">
            {contents.map((item, i) =>
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
    )
}