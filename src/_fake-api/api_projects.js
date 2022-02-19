import NintendoClone from "../_fake-api/images/apiImages/nintendoclone.avif";
import LilChef from "../_fake-api/images/apiImages/lilchef.avif";
import ShopUI from "../_fake-api/images/apiImages/shopui.avif";
import TrelloClone from "../_fake-api/images/apiImages/trello-clone-react.avif";
import StopwatchWeb from "../_fake-api/images/apiImages/stopwatch.avif";
import MorseWeb from "../_fake-api/images/apiImages/morse.avif";
import CodegenWeb from "../_fake-api/images/apiImages/codegen.avif";
import VoucherWeb from "../_fake-api/images/apiImages/voucherweb.avif";
import CalcWeb from "../_fake-api/images/apiImages/calc.avif";
import NgPortfolio from "../_fake-api/images/apiImages/angularportfolio.avif";
import CovidWeb from "../_fake-api/images/apiImages/covidweb.avif";
import DocWeb from "../_fake-api/images/apiImages/docweb.avif";
import LandingPage from "../_fake-api/images/apiImages/landingpage.avif";
import YTUAC from "../_fake-api/images/apiImages/ytuac.avif";
import MembershipCRUD from "../_fake-api/images/apiImages/membershipcrud.avif";
import TCGMarketplace from "../_fake-api/images/apiImages/tcgmarketplace.avif";

export const projects = [
  {
    id: 1,
    categories: ["html", "css"],
    title: "Educational Document",
    // imageURL: "https://i.imgur.com/0VQtZTN.png",
    imageURL: DocWeb,
    imageAlt: "Educational Document Design",
    shortDesc:
      "I tried to duplicate an education website that features Javascript documentations. This project is to showcase my responsive layout designing knowledge for documentations, online libraries and news articles.",
    sourceURL: "https://codepen.io/takao21/full/BaowJgV",
  },
  {
    id: 2,
    categories: ["html", "css"],
    title: "Landing Page",
    // imageURL: "https://i.imgur.com/pVsCOx6.png",
    imageURL: LandingPage,
    imageAlt: "Landing Page Design",
    shortDesc:
      "This project was one of my Freecodecamp's Certification Projects. It is a responsive product selling page, featuring an email reception, the provided services, products for sale and an advertising video.",
    sourceURL: "https://codepen.io/takao21/full/BaowJbx",
  },
  {
    id: 3,
    categories: ["html", "css"],
    title: "Anime Club Webpage",
    // imageURL: "https://i.imgur.com/JgHNw5R.png",
    imageURL: YTUAC,
    imageAlt: "Anime Club Webpage Design",
    shortDesc:
      "Being the former president of YTU Anime Club, I wanted to contribute something to the club when I retired. So, I made this web project soon after I've learnt AnimeJS framework. You can see the awesome text animation sequence at the start of this webpage.",
    sourceURL: "https://takao21.github.io/ytuanimeclub-webpage/",
  },
  {
    id: 4,
    categories: ["js"],
    title: "Samsung Stopwatch Imitation",
    // imageURL: "https://i.imgur.com/SJNtLXp.png",
    imageURL: StopwatchWeb,
    imageAlt: "Samsung Stopwatch Imitation",
    shortDesc:
      "This is one of my Javascript showcase projects. I took the Samsung Stopwatch as reference and tried to remake it using Javascript. This is a smart-visual responsive stopwatch.",
    sourceURL: "https://codepen.io/takao21/full/oNjzOeO",
  },
  {
    id: 5,
    categories: ["js"],
    title: "Morse Code Translator",
    // imageURL: "https://i.imgur.com/RF2BSNz.png",
    imageURL: MorseWeb,
    imageAlt: "Morse Code Translator Screenshot",
    shortDesc:
      "Morse Code is an emergency communication language, introduced as a radio signal language in Titanic. It uses two types of signals to write basic words in critical situations. You can use this app to translate between Morse Code and English. This project mainly proves my Javascript skills and HTML Form Interaction concepts.",
    sourceURL: "https://codepen.io/takao21/full/ExVjpra",
  },
  {
    id: 6,
    categories: ["js"],
    title: "HTML Generator",
    // imageURL: "https://i.imgur.com/qywbq6T.png",
    imageURL: CodegenWeb,
    imageAlt: "HTML Generator Screenshot",
    shortDesc:
      "This is an old project I made when I was a total beginner and didn't know about component-based web programming yet. My friend was writing repetitve HTML codes in his project so I helped him by making a webpage that generates ready-made HTML nests from simple user inputs.",
    sourceURL: "https://takao21.github.io/code-generator-test/",
  },
  {
    id: 7,
    categories: ["js"],
    title: "P.O.S Voucher App",
    // imageURL: "https://i.imgur.com/fE0qF4o.png",
    imageURL: VoucherWeb,
    imageAlt: "Voucher App Screenshot",
    shortDesc:
      "This is one of my proudest projects in my early developer journey. My father asked me about the voucher printing apps going around in the local shops. So instead of buying those softwares, I wanted to try making one myself since I'm a proud programmer. Thus, using my knowledge, I created this Voucher Printing Webapp for my dad's shop. It's not an amazing project since runs in a browser but it will show my dedication and passion in programming. I felt good being able to help my dad using the technologies I've learnt.",
    sourceURL: "https://takao21.github.io/voucher-app/",
  },
  {
    id: 8,
    categories: ["bootstrap"],
    title: "Covid-19 Knowledge (Design)",
    // imageURL: "https://i.imgur.com/aPhSVib.png",
    imageURL: CovidWeb,
    imageAlt: "Covid19 Webpage Screenshot",
    shortDesc:
      "Right when the COVID-19 outbreak started, I was practicing Bootstrap 4. So I had the idea of training my Bootstrap Layout skills by creating a webpage design around that topic.",
    sourceURL: "https://takao21.github.io/Bootstrap-corona/",
  },
  {
    id: 9,
    categories: ["angular"],
    title: "Simple Angular Calculator",
    // imageURL: "https://i.imgur.com/cG5zej4.png",
    imageURL: CalcWeb,
    imageAlt: "Simple Angular Calculator",
    shortDesc:
      "I did this project while learning Angular framework. It's a simple calculator designed around Angular's data binding properties.",
    sourceURL: "https://takao21.github.io/Bootstrap-corona/",
  },
  {
    id: 10,
    categories: ["angular"],
    title: "Angular Portfolio",
    // imageURL: "https://i.imgur.com/Ag7Q9MX.png",
    imageURL: NgPortfolio,
    imageAlt: "Angular Portfolio Screenshot",
    shortDesc:
      "This is an old portfolio I made before using Angular. The portfolio you're reading now is made using React. :)",
    sourceURL: "https://takao21.github.io/takao-portfolio/",
  },
  {
    id: 11,
    categories: ["html", "css"],
    title: "Member List CRUD",
    // imageURL: "https://i.imgur.com/Smg5T77.png",
    imageURL: MembershipCRUD,
    imageAlt: "Member List CRUD Screenshot",
    shortDesc:
      "When I asked to join the school project with seniors, they asked me to show I've learnt so far by duplicating a simple member list CRUD webpage to show my HTML, CSS and JS knowledge. This project is very simple so I just linked to my Git repo.",
    sourceURL: "https://github.com/Takao21/membership-project",
  },
  {
    id: 12,
    categories: ["react"],
    title: "Nintendo Clone",
    // imageURL: "https://i.imgur.com/TJwF6AJ.png",
    imageURL: NintendoClone,
    imageAlt: "Nintendo Clone with React",
    shortDesc:
      "I made a front-end clone of nintendo.com as a practice project for ReactJS. It took me about 4 weeks with about 80 hours of work.",
    sourceURL: "http://nintendo-clone.herokuapp.com/",
  },

  {
    id: 13,
    categories: ["react"],
    title: "Little Chef Restaurant",
    // imageURL: "https://i.imgur.com/cNDkHjc.png",
    imageURL: LilChef,
    imageAlt: "Little Chef Restaurant",
    shortDesc:
      "I built this small website over a span of 2 weeks as a practice project after studying React with seniors.  I tried to create a soft bright theme to represent clouds and heaven. The clouds banner animation on the homepage was inspired by a Youtube tutorial I've watched before.",
    sourceURL:
      "https://www.linkedin.com/feed/update/urn:li:activity:6718480584575975424/",
  },
  {
    id: 14,
    categories: ["react"],
    title: "Pokemon Marketplace",
    // imageURL: "https://i.imgur.com/CfE7QD3.png",
    imageURL: TCGMarketplace,
    imageAlt: "Pokemon Marketplace",
    shortDesc:
      "This practice project uses a free Pokemon Card Market API to display pokemon cards that are on sale and do client-side CRUD on them with an Add To Cart mechanism.",
    sourceURL: "https://tcg-marketplace.herokuapp.com/",
  },
  {
    id: 15,
    categories: ["react"],
    title: "Trello Clone",
    // imageURL: "https://i.imgur.com/AEvNPBb.png",
    imageURL: TrelloClone,
    imageAlt: "Trello Clone with React",
    shortDesc:
      "This was a training project assigned by the seniors to practice React. Here, I've remade the UI of a Trello.com board using React framework. This uses a free server so it may unexpectedly break or slow down.",
    sourceURL: "https://trello-clone-react.000webhostapp.com/",
  },
];
