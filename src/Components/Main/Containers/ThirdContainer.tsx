import React from 'react';
import allContents from "./contentList";

export function ThirdContainer() {
    return(
        <section className="px-4 sm:p-14 bg-neutral">
        <h2 className="font-bold text-primary-neutral-lowest">ARTIKEL TERBARU</h2>
        <ul className="md:grid grid-cols-3 mt-7">
            {allContents.content3.map((item, i) =>
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
    )
}