import React from 'react';
import BGSiteOne from './images/calahan.png';
import BGSiteTwo from './images/travel.png';
import BGSiteThree from './images/projects.png';
import WeatherImg from './images/weather.png';
import RestaurantImg from './images/restaurant.png';
import TriviaImg from './images/trivia.png';
import YogaImg from './images/yoga.png';
import PlannerImg from './images/planner.png';
import RecipeImg from './images/recipe.png';
import MemoryImg from './images/memory.png';
import CSSImg from './images/cow.png';
import ClocksImg from './images/clocks.png';
import BlogImg from './images/reviews.png';
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
    <p>I'm currently working to improve my front-end knowledge with <strong>React</strong> and <strong>TypeScript</strong>, while strenthening my back-end knowledge with <strong>NodeJs</strong> and <strong>ExpressJs</strong>.</p>
    </React.Fragment>
  )
}

const BioExtended = () => {
  return (
    <React.Fragment>
      <p>I'm an artist at heart, having spent years studying film and moving to Los Angeles to pursue a career in music. Although I still consider myself the coolest guitarist in Hollywood, I decided to move my creative focus to web development and design, and think it's one of the best choices I've ever made.</p>
    </React.Fragment>
  )
}

const portfolioProjects = [
  { 
    id: 1, 
    name: 'Weather App', 
    description: 'Built using the openweathermap.org API, along with a nifty JS clock', 
    src: WeatherImg, 
    link: 'https://menomenonkwan.github.io/weather-app/' 
  },

  { 
    id: 2,
    name: 'Restaurant website', 
    description: 'Restaurant website, built around webpack and js modules. Yummers', 
    src: RestaurantImg, 
    link: 'https://menomenonkwan.github.io/restaurant/' 
  },
  { 
    id: 3, 
    name: 'Yoga App', 
    description: 'Built with React Hooks and Firebase. This is a timer for your yoga sessions. Breath', 
    src: YogaImg, 
    link: 'https://brannonlee-yoga-app.netlify.app/' 
  },
  { 
  id: 4, 
  name: 'Food Blog', 
  description: 'Blog of tasty food nonsense, built with GatsbyJS', 
  src: BlogImg, 
  link: 'https://restaurantreviewsmain.gatsbyjs.io/' 
  },
  { 
    id: 5, 
    name: 'Recipe App', 
    description: 'The hungry helper. Using ReactJS, find something tasty', 
    src: RecipeImg, 
    link: 'https://menomenonkwan.github.io/recipe-roulette/' 
  },
  { 
    id: 6, 
    name: 'Memory - Game', 
    description: 'Built with React. It\'s amazing how many things look a like', 
    src: MemoryImg, 
    link: 'https://menomenonkwan.github.io/memory-game/' 
  },
  { 
    id: 7, 
    name: 'CSS Animations', 
    description: 'Just hanging around... Made with the magic of CSS animations', 
    src: CSSImg, 
    link: 'https://menomenonkwan.github.io/floating-cow/' 
  },
  { 
    id: 8, 
    name: 'World Clocks', 
    description: 'Keeping track of time around the world. Using JS and SASS', 
    src: ClocksImg, 
    link: 'https://menomenonkwan.github.io/world-clocks/' 
  },
  { 
    id: 9, 
    name: 'Trivia App', 
    description: 'Guess away... Built with JavaScript, using the Open Trivia Database API, and async/await. Enjoy!', 
    src: TriviaImg, 
    link: 'https://menomenonkwan.github.io/trivia-game/' 
  },
  { 
    id: 10, 
    name: 'Personal Planner', 
    description: 'Using vanilla JavaScript, webpack, and modules. For those who forget things.', 
    src: PlannerImg, 
    link: 'https://menomenonkwan.github.io/lists/#' 
  },
];

export { projectLinks, Bio, BioExtended, portfolioProjects }

