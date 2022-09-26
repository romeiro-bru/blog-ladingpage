import { FirstContainer } from './Containers/FirstContainer';
import { SecondContainer } from './Containers/SecondContainer';
import { ThirdContainer } from './Containers/ThirdContainer';
import { FourthContainer } from './Containers/FouthContainer/FourthContainer';
const banner  = require('../../assets/images/learnbanner.png');

export function Main() {
    return (
        <main>
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <figure>
                <img className="w-full" src={banner} alt="banner about figma" />
            </figure>
            <FourthContainer />
        </main>
    )
}