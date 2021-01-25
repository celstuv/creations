import React from 'react';
import { FaInstagramSquare, FaFacebook, FaLinkedin } from 'react-icons/fa'


export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/Blog',
    text: 'Blog',
  },
  {
    id: 3,
    url: '/about',
    text: 'About me',
  },
  {
    id: 4,
    url: '/contact',
    text: 'Contact',
  },
];
export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    text: 'Facebook',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.instagram.com',
    text: 'Instagram',
    icon: <FaInstagramSquare />,
  },
];

export const ListeProduits = [
  {
    id: 1,
    name: 'Snoods',
    description: 'Boutonner ou enfiler',
    imageSrc: '../images/snood.jpg',
    imageAlt: 'image_snood',
  },
  {
    id: 2,
    name: 'Mitaines',
    description: 'Avec ou sans pouce',
    imageSrc: '../images/mitaine.jpg',
    imageAlt: 'image_mitaine',
  },
  {
    id: 3,
    name: 'Plaids',
    description: 'A partir d\'1 mètre',
    imageSrc: '../images/plaid.jpg',
    imageAlt: 'image_snood',
  },
];

export const SavoirImge = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2019/11/20/11/15/knitting-4639828__340.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2015/07/31/15/02/knit-869221__340.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2017/08/01/16/44/mannequin-2566559_960_720.jpg',
  },
];

export const Technique = [
  {
    id: 1,
    url: 'https://t4.ftcdn.net/jpg/02/74/46/23/240_F_274462333_gVLui1QvrjWz5DIq25KBk10Wi9neJlsp.jpg',
  },
  {
    id: 2,
    url: 'https://t4.ftcdn.net/jpg/01/30/38/33/240_F_130383347_cQqKPoWBELBGrGEAC7ESxTKDwgRUcLk4.jpg',
  },
  {
    id: 3,
    url: 'https://t3.ftcdn.net/jpg/01/08/39/54/240_F_108395468_d4nPVVpOXfFC1flpgJYDQDf1xS4jWSYz.jpg',
  },
  {
    id: 4,
    url: 'https://t4.ftcdn.net/jpg/01/89/68/37/240_F_189683740_S884hB0v7v96dl9U2gzSiCt59zpfc7Vv.jpg',
  },
  {
    id: 5,
    url: 'https://t3.ftcdn.net/jpg/00/66/99/06/240_F_66990651_uFzVJB9IMz9rVL5B9R4QSg5t19O1eCjO.jpg',
  },
  {
    id: 6,
    url: 'https://as1.ftcdn.net/jpg/02/23/04/14/500_F_223041476_GIg4B5iQtXD8FgZHHCpCcuDYaQ8rMzHT.jpg',
  },
  {
    id: 7,
    url: 'https://t3.ftcdn.net/jpg/01/28/01/34/240_F_128013416_uXNAb9E7u7ijqmlmnSFMbBwcFbmCjlGT.jpg',
  },
  {
    id: 8,
    url: 'https://t3.ftcdn.net/jpg/01/77/37/44/240_F_177374442_mwLlrjsTUtudbflI1RilAIBmpDYJx8pa.jpg',
  },
  {
    id: 9,
    url: 'https://t3.ftcdn.net/jpg/02/37/34/62/240_F_237346252_PZkIKiAOJHQWvb7401LEX3EfLFNxTVTi.jpg',
  },
];

export const BackgroundImage = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1590069833002-35d9e7376cd9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTQzfHx3b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
]

export const Commentaires = [
  {
    id: 1,
    titre: 'Snood',
    date: '25/12/2020',
    outils: 'https://cdn.pixabay.com/photo/2017/01/31/16/35/crochet-2025327__340.png',
    commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/135201875_2919409881658096_7712631295005220050_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=uWUQcpXW5iEAX83p8q7&_nc_ht=scontent-cdt1-1.xx&oh=f8407dd8fe0e0d1848939e0a82292017&oe=60364A92',
  },
  {
    id: 2,
    titre: 'Doudou',
    date: '30/11/2019',
    outils: 'https://cdn.pixabay.com/photo/2017/01/31/16/35/crochet-2025327__340.png',
    commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/80462251_2585790921686662_4883681980840935424_o.jpg?_nc_cat=108&ccb=2&_nc_sid=a26aad&_nc_ohc=UeV2kIa8LVwAX_Yr62E&_nc_ht=scontent-cdg2-1.xx&oh=7d5cbb9c1c3eedfb8a4d24d5333aab85&oe=60327A57',
  },
  {
    id: 3,
    titre: 'Anti-Stress',
    date: '17/11/2019',
    outils: 'https://cdn.pixabay.com/photo/2017/01/31/16/35/crochet-2025327__340.png',
    commentaire : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-0/p526x296/79714215_2564798893785865_3569419213716062208_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=Q51j4otQhhAAX88SFAX&_nc_ht=scontent-cdt1-1.xx&tp=6&oh=58229e6d622c8948b5f84a06fa700848&oe=6033BD0E',
  },
  {
    id: 4,
    titre: 'Plaid',
    date: '4/12/2018',
    outils: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/yarn-309401__340.png',
    commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-0/p526x296/45241736_2264094323856325_3487973693047439360_n.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=MO3_n0l2GJcAX-3P5J6&_nc_ht=scontent-cdt1-1.xx&tp=6&oh=b0c8f1950b90bab0963bdcce15ddf80f&oe=6034DF54',
  },
  {
    id: 5,
    titre: 'Snood',
    date: '10/12/2018',
    outils: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/yarn-309401__340.png',
    commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-0/s600x600/48360671_2286833844915706_4111511624831991808_n.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=csRA2YFEc70AX8ur0NT&_nc_ht=scontent-cdg2-1.xx&tp=7&oh=c977a8cc8c661c58a3bf5028c1a15908&oe=60327C67',
  },
  {
    id: 6,
    titre: 'Couverture',
    date: '24/12/2018',
    outils: 'https://cdn.pixabay.com/photo/2017/01/31/16/35/crochet-2025327__340.png',
    commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    illustration: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-0/s600x600/49133117_2296168300648927_6866247272745664512_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=yIJVpfuFwTgAX-Kh259&_nc_ht=scontent-cdt1-1.xx&tp=7&oh=c5a6b6611a055e05acfd2d69159e0528&oe=603614F5',
  },
];

export const Fournisseurs = [
  {
    id: 1,
    name: 'Bergère de France',
    image: 'https://lh3.googleusercontent.com/proxy/avhxnBtzvKNb8ZZr7wVnxE1MpLYWDjDuGUXqt1_qhOu_fexVM-Z7W1W0RhM2iF1yl3Q9vszUcK_IGKV5J7IEvfHN8BoQh_SD47HV_ljPztLWi1_MikFzi-daLqF-4Rfqu7v5uSmRK7mkW3FwPA',
  },
  {
    id: 2,
    name: 'Zeeman',
    image: 'https://www.lesalleesgestina.fr/wp-content/uploads/logo-zeeman.png',
  },
  {
    id: 3,
    name: 'Yarn Paradise',
    image: 'https://pbs.twimg.com/profile_images/1350186249/yarn1_400x400.jpg',
  },
  {
    id: 4,
    name: 'Phildar',
    image: 'https://www.phildar-recrute.com/wp-content/uploads/logohpphildar2.png',
  },
];
