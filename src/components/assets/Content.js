import React from 'react';
import BGSiteOne from './images/calahan.png';
import BGSiteTwo from './images/travel.png';
import BGSiteThree from './images/projects.png';
import ImgOne from './images/weather.png';
import ImgTwo from './images/trivia.png';
import ImgThree from './images/restaurant.png';
import ImgFour from './images/yoga.png';
import ImgFive from './images/planner.png';
import ImgSix from './images/matching.png';
import ImgSeven from './images/memory.png';
import ImgEight from './images/cow.png';
import ImgNine from './images/clocks.png';
import ImgTen from './images/scorecard.png';
import { FaArrowCircleDown } from 'react-icons/fa';

const projectLinks = [
 {
  id: 1,
  name: 'calahanmusic.com',
  url: 'http://calahanmusic.com/',
  image: BGSiteOne,
  description: 'Official website for the band, Calahan',
},
{
  id: 2,
  name: 'React Travel App',
  url: 'https://menomenonkwan.github.io/travel-co/',
  image: BGSiteTwo,
  description: 'A sample website, built with React',
},
{
  id: 3,
  name: 'Smaller Projects',
  url: '/portfolio',
  image: BGSiteThree,
  description: 'A collection of miscellaneous projects I\'ve built or have worked on',
 },
];

const Bio = () => {
  return (
    <React.Fragment><p>Hey there! I'm <strong>Brannon Lee</strong>, and I am a Los Angeles based web developer, specializing in <strong>JavaScript, CSS, and HTML</strong>. I like to design, build, and tinker with websites. I also have extensive professional experience in working with teams and meeting customer needs. Don't believe me? Take a look at my resum&eacute; below <FaArrowCircleDown /></p>
    <p>I'm also currently working on increasing my front-end developmental knowledge with <strong>React</strong>.</p>
    </React.Fragment>
  )
}

const portfolioProjects = [
  { 
    id: 1, 
    name: 'Weather App', 
    description: 'Built using the openweathermap.org API, along with a nifty JS clock', 
    src: ImgOne, 
    link: 'https://menomenonkwan.github.io/weather-app/' 
  },
  { 
    id: 2, 
    name: 'Trivia App', 
    description: 'Guess away... Built with JavaScript, using the Open Trivia Database API, and async/await. Enjoy!', 
    src: ImgTwo, 
    link: 'https://menomenonkwan.github.io/trivia-game/' 
  },
  { 
    id: 3,
    name: 'Restaurant website', 
    description: 'Restaurant website, built around webpack and js modules. Yummers', 
    src: ImgThree, 
    link: 'https://menomenonkwan.github.io/restaurant/' 
  },
  { 
    id: 4, 
    name: 'Yoga App', 
    description: 'Built with React. This is a timer for your yoga sessions. Breath', 
    src: ImgFour, 
    link: 'https://menomenonkwan.github.io/yoga-timer/' 
},
  { 
    id: 5, 
    name: 'Personal Planner', 
    description: 'Using vanilla JavaScript, webpack, and modules. For those who forget things.', 
    src: ImgFive, 
    link: 'https://menomenonkwan.github.io/lists/#' 
},
  { 
    id: 6, 
    name: 'Matching Game', 
    description: 'JavaScript card matching game. Using css animations and async/await... Have fun.', 
    src: ImgSix, 
    link: 'https://codepen.io/menomenonkwan/full/BaKrZJm' 
},
  { 
    id: 7, 
    name: 'Memory - Game', 
    description: 'Built with React. It\'s amazing how many things look a like', 
    src: ImgSeven, 
    link: 'https://menomenonkwan.github.io/memory-game/' 
},
  { 
    id: 8, 
    name: 'CSS Animations', 
    description: 'Just hanging around... Made with the magic of CSS animations', 
    src: ImgEight, 
    link: 'https://menomenonkwan.github.io/floating-cow/' },
  { 
    id: 9, 
    name: 'World Clocks', 
    description: 'Keeping track of time around the world. Using JS and SASS', 
    src: ImgNine, 
    link: 'https://menomenonkwan.github.io/world-clocks/' 
  },
  { 
    id: 10, 
    name: 'Score Card', 
    description: 'For board and card gamers alike... more cowbell', 
    src: ImgTen, 
    link: 'https://brannonlee-scorecard.netlify.app/' 
  },
];

export { projectLinks, Bio, portfolioProjects }

