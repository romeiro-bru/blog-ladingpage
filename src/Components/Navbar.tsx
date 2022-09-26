import React from 'react';
const logo = require('../assets/icons/logo.png');
const twitter = require('../assets/icons/twitter.png');
const instagram = require('../assets/icons/instagram.png');
const dribbble = require('../assets/icons/dribbble.png');
const medium = require('../assets/icons/medium.png');

const icons = [
    {img: twitter, link: "https://twitter.com/", alt: "twitter"},
    {img: instagram, link: "https://www.instagram.com/", alt: "instagram" },
    {img: dribbble, link: "https://www.dribbble.com/", alt: "dribbble" },
    {img: medium, link: "https://www.medium.com/", alt: "medium" }
]

const pages = [
    {name: 'LEARN'}, {name: 'BLOG'}, {name: 'BOOKMARKS'}, {name: 'UI KIT'}, {name: 'LAIN NYA'}
]

export function Navbar() {
    return (
      <nav className="py-9 px-6 flex justify-between bg-surface">
        <ul className="flex flex-wrap">
            <li><img className="w-9" src={logo} alt="logo" /></li>
            {pages.map((item, i) => 
                <li key={i} className='mx-3 my-2 text-xs font-bold text-surface-low hover:base'>{item.name}</li>
            )}    
        </ul>

        <ul className="flex flex-wrap">
            {icons.map((item, i) => 
                <li key={i}>
                    <a href={item.link}>
                        <img className="w-5 m-2" src={item.img} alt={item.alt} />
                    </a>
                </li>
            )}
        </ul>         
      </nav>
    );
  }