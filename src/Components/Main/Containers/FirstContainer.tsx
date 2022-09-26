import { useState, useEffect } from "react";
import allContents from "./contentList";
import images from './images';

type Content1Props = {
    datetime: string;
    date: string;
    title: string;
    img: string;
    alt: string;
}

export function FirstContainer() {
    const [contents, setContents] = useState<Content1Props[]>([])

    useEffect(() => {
        setContents(allContents.content1)
    }, [])

    return(
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
                        {contents.map((item, i) =>
                            <li className="pb-4" key={i}>
                                <article className="md:flex">
                                    <img className="md:h-2/6 md:w-5/12 mt-2 md:mr-4 sm:mb-6 md:mb-0" src={item.img} alt={item.alt} />
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
    )
}