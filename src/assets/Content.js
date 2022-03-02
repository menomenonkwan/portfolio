// featured images
import calahan from '../assets/images/calahan.jpg';
import drunkInTheGarage from '../assets/images/ditg.jpg';
import roktoy from '../assets/images/roktoy.jpg';

// project images
import bakeryShop from '../assets/images/bakery.jpg';
import glasses from '../assets/images/glasses.jpg';
import musician from '../assets/images/musician.jpg';
import rentals from './images/rentals.jpg';
import clothing from './images/clothing.jpg';
import cow from './images/cow.jpg';
import mymoney from './images/mymoney.jpg';
import nytimes from './images/nytimes.jpg';
import recipekeeper from './images/recipekeeper.jpg';
import recipies from './images/recipies.jpg';
import reviews from './images/reviews.jpg';
import weather from './images/weather.jpg';
import yoga from './images/yoga.jpg';
import portfolioTemp from './images/portfolioTemp.jpg';
// import photostudio from './images/photostudio.jpg';
// import restaurant from './images/restaurant.jpg';
// import travel from './images/travel.jpg';
// import clocks from './images/clocks.jpg';

// icons
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiJquery, SiReact, SiFirebase, SiWordpress, SiWix, SiVisualstudiocode, SiGraphql, SiNextdotjs, SiGatsby, SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiTypescript, SiGimp, SiInkscape, SiBootstrap, SiFramer, SiStyledcomponents, SiMaterialui } from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';
import { MdApi } from 'react-icons/md';

const featuredProjects = [
  {
    id: 1,
    name: 'Calahan Band Website',
    url: 'http://calahanmusic.com/',
    image: calahan,
    code: null,
    description: 'This site was built for the band "Calahan" using JQuery for mobile menu animations and page transitions. I also learned how to use CSS animations to create a more visually pleasing user experience, and Photoshop for logo creation, image optimization, and a nifty banner.',
    tools: [
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JQuery', icon: <SiJquery />}, 
      { name: 'Photoshop', icon: <SiAdobephotoshop />}, 
    ]
  },
  {
    id: 2,
    name: 'DrunkInTheGarage Band Website',
    url: 'https://drunkinthegarage.netlify.app/',
    code: 'https://github.com/menomenonkwan/drunk-in-the-garage',
    image: drunkInTheGarage,
    description: 'Official site for the band "Drunk In The Garage" (now defunct, so I moved the code to netlify for your viewing pleasure). Built using GatsbyJS, and learned how to use their many plugins for responsive images, styled-components, GraphQl, and with SanityIO for backend CMS. I also used a hefty dose of Gimp to edit, optimize images, and create the logo.',
    tools: [
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
      { name: 'GatsbyJS', icon: <SiGatsby />}, 
      { name: 'Graphql', icon: <SiGraphql />}, 
      { name: 'Gimp', icon: <SiGimp />}, 
    ]
  },
  {
    id: 3,
    name: 'Roktoy Band Website',
    url: 'https://www.roktoy.com/',
    code: null,
    image: roktoy,
    description: 'This website was my crash course into the Wix exosystem and array of plugins. Along with using Gimp for image optimization, I tried my hand at Inkscape to recreate the band\'s logo as an svg, and designed the site around the band\'s predefined color scheme and image (as well as use of custom CSS for minor adjustments).',
    tools: [
      { name: 'Wix', icon: <SiWix />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'Gimp', icon: <SiGimp />}, 
      { name: 'Inkscape', icon: <SiInkscape />}, 
    ]
  },
];

const portfolioProjects = [
  {
    id: 1,
    name: 'Bakery Shop',
    image: bakeryShop,
    description: 'A sweet tasting responsive bakery shop website that I built using SASS in a React App. The fully functional cart is made with the useContext hook to eliminate prop drilling. I made sure to heavily invoke the use of re-usable components as a way to continually debloat my coding.',
    url: 'https://menomenonkwan.github.io/bakery-shop/',
    code: 'https://github.com/menomenonkwan/bakery-shop',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'SASS', icon: <SiSass />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />},
    ]
  },
  {
    id: 2,
    name: 'Glasses Store',
    image: glasses,
    description: 'This demo website was built in React with the Bootstrap library to streamline design and layout. I wanted to implement some of it\'s popular features such as accordions, carousels, and modals in a responsive design. Easy Peasy',
    url: 'https://menomenonkwan.github.io/glasses-store-website/',
    code: 'https://github.com/menomenonkwan/glasses-store-website',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'Bootstrap5', icon: <SiBootstrap />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />},
    ]
  },
  {
    id: 3,
    name: 'Studio Musician',
    image: musician,
    description: 'This responsive UI Design was made in an attempt to learn the Materialize CSS library and how to implement some of it\'s cool features such as input handling, parallax, tabs, and responsive image handling.',
    url: 'https://menomenonkwan.github.io/studio-musician/',
    code: 'https://github.com/menomenonkwan/studio-musician',
    tools: [
      { name: 'MaterializeCSS', icon: <DiMaterializecss />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
    ]
  },
  {
    id: 4,
    name: 'Rental App',
    image: rentals,
    description: 'With a focus on UI Design, this is a simple rental app built with Bootstrap and SASS. The animations are made with the GSAP animiation library, in my first attempt to explore it\'s capabilities.',
    url: 'https://menomenonkwan.github.io/airbnb-rentals/',
    code: 'https://github.com/menomenonkwan/airbnb-rentals',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'Bootstrap5', icon: <SiBootstrap />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />},
    ]
  },
  {
    id: 5,
    name: 'Finance Tracker',
    image: mymoney,
    description: 'I learned how to incorporate Firebase authorization and data in a React app while keeping data secure and viewable by only it\'s associated user. I made use of React\'s useContext hook to handle user accessiblity and implement a light/dark mode option.',
    url: 'https://mymoneyexpenses.web.app/login',
    code: 'https://github.com/menomenonkwan/my-money',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
      { name: 'Firebase', icon: <SiFirebase />}, 
    ]
  },
  {
    id: 6,
    name: 'Clothing Store',
    image: clothing,
    description: 'Built with React (with products from the FakeStore API). React Hooks are used to handle a fully functioning shopping cart. I also tested the waters with Styled Components and used Framer Motion to animated component mounting & unmounting.',
    url: 'https://menomenonkwan.github.io/the-clothing-store/',
    code: 'https://github.com/menomenonkwan/the-clothing-store',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
      { name: 'StyledComponents', icon: <SiStyledcomponents />}, 
      { name: 'FramerMotion', icon: <SiFramer />}, 
      { name: 'API', icon: <MdApi />}, 
    ]
  },
  {
    id: 7,
    name: 'Floating Cow',
    image: cow,
    description: 'Using only CSS animations, run in a continuous loop, this is a floating cow made of several svg files. This was made in an attempt to better understand CSS keyframes and timing in syncing multiple moving parts. Plus, it\'s kind of relaxing to watch.',
    url: 'https://menomenonkwan.github.io/floating-cow/',
    code: 'https://github.com/menomenonkwan/floating-cow',
    tools: [
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
    ]
  },
  {
    id: 8,
    name: 'News App',
    image: nytimes,
    description: 'A React News app, with the use of the NYTimes API, was built with the intention of learning the ins-and-outs of the Material UI library. I also made use of the Framer Motion library for some nifty component animations.',
    url: 'https://menomenonkwan.github.io/react-news-app/',
    code: 'https://github.com/menomenonkwan/react-news-app',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />},    
      { name: 'JavaScript', icon: <SiJavascript />},    
      { name: 'FramerMotion', icon: <SiFramer />}, 
      { name: 'Materialui', icon: <SiMaterialui />}, 
      { name: 'API', icon: <MdApi />}, 
    ]
  },
  {
    id: 9,
    name: 'Recipe Keeper',
    image: recipekeeper,
    description: 'I learned how to work with Firebase and enforce some Firebase rules, as well as authorization and image uploads, I made CRUD actions accessible only by authorized users. I also made use of the custom hooks to handle user access and implement a light/dark mode.',
    url: 'https://the-recipe-keeper.web.app/',
    code: 'https://github.com/menomenonkwan/the-recipe-keeper',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
      { name: 'Firebase', icon: <SiFirebase />}, 
    ]
  },
  {
    id: 10,
    name: 'Food Blog',
    image: reviews,
    description: 'Built to help further my understanding of GatsbyJS and it\'s many plugins, such as responsive images. This was also an introduction to GraphQL and it\'s query capabilities. I made use of Framer Motion and Material UI to animate and style components.',
    url: 'https://restaurantreviewsmain.gatsbyjs.io/',
    code: 'https://github.com/menomenonkwan/restaurant-reviews',
    tools: [
      { name: 'GatsbyJS', icon: <SiGatsby />}, 
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
      { name: 'Graphql', icon: <SiGraphql />}, 
      { name: 'FramerMotion', icon: <SiFramer />}, 
      { name: 'Materialui', icon: <SiMaterialui />}, 
    ]
  },
  {
    id: 11,
    name: 'Weather App',
    image: weather,
    description: 'Dynamically populated information with Vanilla JavaScript and use of the openweather API.I also learned how to make calculations in JS in transferring Celcius into Fahrenheit. There\'s also a spiffy JavaScript built and operated clock that makes use of built in JS timing functions. Lot\'s and lot\'s of calculations in this one.',
    url: 'https://menomenonkwan.github.io/weather-app/',
    code: 'https://github.com/menomenonkwan/weather-app',
    tools: [
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
      { name: 'API', icon: <MdApi />}, 
    ]
  },
  {
    id: 12,
    name: 'Recipe Finder',
    image: recipies,
    description: 'This was a fun project. I used the edamam API to populate user searched recipies. There was a mixture of Material UI, Styled Components, and Framer Motion to style and animate different components throughouth the app.' ,
    url: 'https://menomenonkwan.github.io/recipe-roulette/',
    code: 'https://github.com/menomenonkwan/recipe-roulette',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />},      
      { name: 'JavaScript', icon: <SiJavascript />},  
      { name: 'FramerMotion', icon: <SiFramer />}, 
      { name: 'Materialui', icon: <SiMaterialui />}, 
      { name: 'API', icon: <MdApi />}, 
      { name: 'StyledComponents', icon: <SiStyledcomponents />}, 
    ]
  },
  {
    id: 13,
    name: 'Yoga Timer App',
    image: yoga,
    description: 'This was a tough one that incorporated timers within timers, but learned how to better deal with timing in JavaScript as well as how to incorporate a lot of different npm packages such as "react-select", "react-countdown-circle-timer", and "react-drag-listview". I also made use of Firebase for saving programs and sound effects.',
    url: 'https://brannonlee-yoga-app.netlify.app/',
    code: 'https://github.com/menomenonkwan/yoga-app',
    tools: [
      { name: 'React', icon: <SiReact />}, 
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'Firebase', icon: <SiFirebase />}, 
      { name: 'FramerMotion', icon: <SiFramer />}, 
    ]
  },
  {
    id: 14,
    name: 'Portfolio Layout',
    image: portfolioTemp,
    description: 'Primarily working on design skills and CSS with this one. A simple portfolio template with a JavaScript controlled menu.',
    url: 'https://codepen.io/menomenonkwan/full/KKqMOZY',
    code: 'https://codepen.io/menomenonkwan/pen/KKqMOZY',
    tools: [
      { name: 'HTML5', icon: <SiHtml5 />}, 
      { name: 'CSS3', icon: <SiCss3 />}, 
      { name: 'JavaScript', icon: <SiJavascript />}, 
    ]
  },
  // {
  //   id: 15,
  //   name: 'Travel Company',
  //   image: travel,
  //   description: 'This was one of my early React projects, that introduced me to React Hooks and in animating component mounting and unmounting with Framer Motion. I also learned how to use a video as a landing page background and how to handle discrepency of page and video loading times.',
  //   url: 'https://menomenonkwan.github.io/travel-co/',
  //   code: 'https://github.com/menomenonkwan/travel-co',
  //   tools: [
  //     { name: 'React', icon: <SiReact />}, 
  //     { name: 'HTML5', icon: <SiHtml5 />}, 
  //     { name: 'CSS3', icon: <SiCss3 />}, 
  //     { name: 'FramerMotion', icon: <SiFramer />}, 
  //   ]
  // },
    // {
  //   id: 16,
  //   name: 'Restaurant Website',
  //   image: restaurant,
  //   description: 'This project was created with use of Webpack, and built entirely by JavaScript. All the HTML was created using JavaScript.',
  //   url: 'https://menomenonkwan.github.io/restaurant/',
  //   code: 'https://github.com/menomenonkwan/restaurant',
  //   tools: [
  //     { name: 'HTML5', icon: <SiHtml5 />}, 
  //     { name: 'CSS3', icon: <SiCss3 />}, 
  //     { name: 'JavaScript', icon: <SiJavascript />}, 
  //     { name: 'Webpack', icon: <SiWebpack />}, 
  //   ]
  // },
    // { 
  //   id: 17,
  //   name: 'Photo Studio',
  //   image: photostudio,
  //   description: 'A simple photo studio app, styled with styled-components and populated using the picsum API. I learned to build and utilize custom hooks to handle window resizing for a responsive design as well as image handling in reused components.',
  //   url: 'https://menomenonkwan.github.io/photography-ecommerce/',
  //   code: 'https://github.com/menomenonkwan/photography-ecommerce',
  //   tools: [
  //     { name: 'React', icon: <SiReact />}, 
  //     { name: 'HTML5', icon: <SiHtml5 />}, 
  //     { name: 'CSS3', icon: <SiCss3 />}, 
  //     { name: 'JavaScript', icon: <SiJavascript />}, 
  //     { name: 'StyledComponents', icon: <SiStyledcomponents />}, 
  //     { name: 'API', icon: <MdApi />}, 
  //   ]
  // },
    // {
  //   id: 18,
  //   name: 'World Clocks',
  //   image: clocks,
  //   description: 'A JavaScript heavy simple app that uses Vanilla JavaScript time & timing functions to find worldwide local times and move the hands of the JavaScript built clock. Unsurprisingly, dealing with time and JS was kind of a headache, but with a little patience... Voila!',
  //   url: 'https://menomenonkwan.github.io/world-clocks/',
  //   code: 'https://github.com/menomenonkwan/world-clocks',
  //   tools: [
  //     { name: 'HTML5', icon: <SiHtml5 />}, 
  //     { name: 'CSS3', icon: <SiCss3 />}, 
  //     { name: 'JavaScript', icon: <SiJavascript />}, 
  //   ]
  // },
];

const BioPartOne = () => {
  return (
    <>
      <p>Hey there! I'm <strong>Brannon Lee</strong>, and I am a Los Angeles based front-end web developer, specializing in <strong>JavaScript, CSS, and HTML</strong>. I like to design, build, and tinker with websites. I also have extensive professional experience in client satisfaction, working on tight deadlines, and getting the job done. Take a peek at my resum&eacute; below...</p>
    </>
  )
}

const BioPartTwo = () => {
  return (
    <>
      <p>I'm an artist at heart, having spent years studying film and moving to Los Angeles to pursue a career in music. Along the way, I decided to pivot my creative focus to web development and design, and think it's one of the best choices I've ever made.</p>
    </>
  )
}

const BioPartThree = () => {
  return (
    <>
      <p>While building and maintaining websites for several local artists, I've expanded my working front-end knowledge with <strong>React</strong>, and am exploring the <strong>NextJS</strong> framework while strengthing my skills in <strong>TypeScript</strong> and <strong>Adobe Illustrator</strong>.</p>
    </>
  )
}

const skillSet = [
  {
    id: 1,
    icon: <SiHtml5 style={{color:'rgb(228, 77, 38)'}} />,
    name: 'HTML5'
  },
  {
    id: 2,
    icon: <SiCss3 style={{color:'rgb(38, 77, 228)'}} />,
    name: 'CSS3'
  },
  {
    id: 3,
    icon: <SiJavascript style={{color:'rgb(255, 214, 0)', background: 'black'}} />,
    name: 'JavaScript'
  },
  {
    id: 4,
    icon: <SiSass style={{color:'#cc6699'}} />,
    name: 'Sass'
  },
  {
    id: 5,
    icon: <SiJquery style={{color:'rgb(8, 104, 172)'}} />,
    name: 'JQuery'
  },
  {
    id: 6,
    icon: <SiReact style={{color:'rgb(97, 218, 251)'}} />,
    name: 'React'
  },
  {
    id: 7,
    icon: <SiFirebase style={{color:'rgb(255, 196, 0)'}} />,
    name: 'Firebase'
  },
  {
    id: 8,
    icon: <SiWordpress style={{color:'#21759b'}} />,
    name: 'Wordpress'
  },
  {
    id: 9,
    icon: <SiWix style={{color:'black'}} />,
    name: 'Wix'
  },
  {
    id: 10,
    icon: <SiVisualstudiocode style={{color:'#1685d0'}} />,
    name: 'VSCode'
  },
  {
    id: 16,
    icon: <SiFigma style={{color:'black'}} />,
    name: 'Figma'
  },
  {
    id: 18,
    icon: <SiGimp style={{color:'slategray'}} />,
    name: 'Gimp'
  },
  {
    id: 19,
    icon: <SiBootstrap style={{color:'#7711f7'}} />,
    name: 'Bootstrap'
  },
];

const studySet = [
  {
    id: 11,
    icon: <SiGraphql style={{color:'#e535ab'}} />,
    name: 'GraphQL'
  },
  {
    id: 12,
    icon: <SiNextdotjs style={{color:'black'}} />,
    name: 'NextJS'
  },
  {
    id: 13,
    icon: <SiGatsby style={{color:'#663399'}} />,
    name: 'GatsbyJS'
  },
  {
    id: 14,
    icon: <SiAdobephotoshop style={{color:'#001e36', borderRadius: '25%', background: '#30a8ff'}} />,
    name: 'Photoshop'
  },
  {
    id: 15,
    icon: <SiAdobeillustrator style={{color:'#330000', borderRadius: '25%',background: '#ff9a00'}} />,
    name: 'Illustrator'
  },
  {
    id: 17,
    icon: <SiTypescript style={{color:'#007acc'}} />,
    name: 'TypeScript'
  }, 
]

export { BioPartOne, BioPartTwo, BioPartThree, skillSet, studySet, featuredProjects, portfolioProjects }

