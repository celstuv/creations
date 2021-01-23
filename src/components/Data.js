import React from 'react';
import Images from './Images';
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
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com',
    icon: <FaInstagramSquare />,
  },
];

export const ListeProduits = [
  {
    id: 1,
    name: 'Snoods',
    description: 'Boutonner ou enfiler, différents motifs',
    prix: 35,
    imageSrc: '../images/snood.jpg',
    imageAlt: 'image_snood',
  },
  {
    id: 2,
    name: 'Mitaines',
    description: 'Avec ou sans pouce',
    prix: 20,
    imageSrc: '../images/mitaine.jpg',
    imageAlt: 'image_mitaine',
  },
  {
    id: 3,
    name: 'Plaids',
    description: 'A partir d\'1 mètre',
    prix: 70,
    imageSrc: '../images/plaid.jpg',
    imageAlt: 'image_snood',
  },
];

export const BackgroundImage = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2015/04/20/13/45/wool-731515_960_720.jpg',
  },
]
