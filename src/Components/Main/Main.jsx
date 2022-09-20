import banner from '../../assets/images/learnbanner.png'

import { FirstContainer } from './Containers/FirstContainer';
import { SecondContainer } from './Containers/SecondContainer';
import { ThirdContainer } from './Containers/ThirdContainer';
import { FourthContainer } from './Containers/FouthContainer/FourthContainer';

export function Main() {
    return (
        <main>
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <img className="w-full" src={banner} alt="banner about figma" />
            <FourthContainer />
        </main>
    )
}