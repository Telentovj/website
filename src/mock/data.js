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
  name: 'John Vijay Balasupramaniam',
  subtitle: "Data Analysis and Coding Enthusiast",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am passionate about analytics and anything that has to do with data. Just like any data enthusiastic, i enjoy analyzing and discovering hidden insights within a datasets. More importantly, I believe that my strength lies with the presentation and application of these findings.',
  paragraphTwo: 'I also dabble with software engineering. My most extensive project thus far is an app called recipeMine that was uses flutter and Firebase.',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'RecipeMine',
    info: 'App created for NUS orbital program for highest level of achievement(Artemis)',
    info2: 'A cross-platform mobile recipe app built with Flutter and Firebase where users are able to search for and display recipes based on ingredients they already have at home.',
    // url: '',
    repo: 'https://github.com/Telentovj/RecipeMine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'KrisWonderer',
    info: 'App created for the Singapore Airlines AppChallenge 2020 ',
    info2: 'An app created with Flutter and Firebase thats allows travellers to explore the airport they are stranded at due to delays.',
    // url: '',
    repo: 'https://github.com/Telentovj/KrisWonderer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Predicting energy consumption using advanced neural networks',
    info: '',
    info2: '',
    // url: '',
    repo: 'https://medium.com/@kahhe_lee/maximize-trading-profits-predicting-energy-consumption-with-advance-neural-networks-deep-aec940d615f2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
