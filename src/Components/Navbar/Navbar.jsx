import logo from '../../assets/icons/logo.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
import dribbble from '../../assets/icons/dribbble.png';
import medium from '../../assets/icons/medium.png';

const icons = [
    {img: twitter, link: "https://twitter.com/", alt: "twitter"},
    {img: instagram, link: "https://www.instagram.com/", alt: "instagram" },
    {img: dribbble, link: "https://www.dribbble.com/", alt: "dribbble" },
    {img: medium, link: "https://www.medium.com/", alt: "medium" }
]

export function Navbar() {
    return (
      <nav class="py-9 px-6 flex justify-between bg-surface">
           <ul class="flex flex-wrap">
      <li><img class="w-9" src={logo} alt="logo" /></li>
      <li class="mx-3 my-2 text-xs font-bold text-surface-low hover:base">LEARN</li>
      <li class="mx-3 my-2 text-xs font-bold text-surface-low hover:base">BLOG</li>
      <li class="mx-3 my-2 text-xs font-bold text-surface-low hover:base">BOOKMARKS</li>
      <li class="mx-3 my-2 text-xs font-bold text-surface-low hover:base">UI KIT</li>
      <li class="mx-3 my-2 text-xs font-bold text-surface-low hover:base">LAIN NYA</li>
    </ul>

    <ul class="flex flex-wrap">
        {icons.map((item, i) => 
            <li>
                <a href={item.link}>
                    <img class="w-5 m-2" src={item.img} alt={item.alt} />
                </a>
            </li>
        )}
    </ul>         
      </nav>
    );
  }