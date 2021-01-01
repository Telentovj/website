import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'John.VJ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'John Vijay',
  subtitle: 'Data Analysis and Coding Enthusiast',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'face.jpg',
  paragraphOne:
    'I am passionate about analytics and anything that has to do with data. Just like any data enthusiast, i enjoy analyzing and discovering hidden insights within a datasets. More importantly, I believe that my strength lies with the presentation and application of these findings.',
  paragraphTwo:
    'I also dabble with software engineering. My most extensive project thus far is an app called recipeMine that was uses flutter and Firebase.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1RjeRbye4iRa07YoFH3SMKVJgfEzci970/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RecipeMiner LiftOff Poster.png',
    title: 'RecipeMine',
    info: 'App created for NUS orbital program for highest level of achievement(Artemis)',
    info2:
      'A cross-platform mobile recipe app built with Flutter and Firebase where users are able to search for and display recipes based on ingredients they already have at home.',
    // url: '',
    repo: 'https://github.com/Telentovj/RecipeMine', // if no repo, the button will not show up
    cert: '',
  },
  {
    id: nanoid(),
    img: 'Poster final-1.png',
    title: 'KrisWonderer',
    info: 'App created for the Singapore Airlines AppChallenge 2020 ',
    info2:
      'An app created with Flutter and Firebase thats allows travellers to explore the airport they are stranded at due to delays.',
    // url: '',
    repo: 'https://github.com/Telentovj/KrisWonderer', // if no repo, the button will not show up
    cert: '',
  },
  {
    id: nanoid(),
    img: 'cameron-venti-8RBASNzrrXA-unsplash.jpg',
    title: 'Predicting energy consumption using advanced neural networks',
    info:
      'Developing an online deep learning algorithm for a T+18 hour energy forecast and maximize profits from wind energy farm operators in France.',
    info2:
      'With no prior experience on neural networks, beating 480 plus international participants in the competition with our neural network model through extensive research over a month. Competition was sponsored by SGINNOVATE',
    // url: '',
    repo:
      'https://medium.com/@kahhe_lee/maximize-trading-profits-predicting-energy-consumption-with-advance-neural-networks-deep-aec940d615f2', // if no repo, the button will not show up
    cert: 'https://drive.google.com /file/d/1fIpjYIlmu-w0paFbMzEij0eibkuRHBLt/view?usp=sharing',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I look forward to working with you!',
  btn: '',
  email: 'johnvijaybalasupramaniam@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/john-vj/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Telentovj ',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
