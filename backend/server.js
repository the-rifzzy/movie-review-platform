const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const movies = [
  {
    id: 1,
    title: 'Squid Game',
    year: 2021,
    director: 'Hwang Dong-hyuk',
    hero: 'Lee Jung-jae',
    heroine: 'HoYeon Jung',
    shortStory: 'Contestants play deadly games for huge money.',
    image: '/images/squid_game.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    hero: 'Leonardo DiCaprio',
    heroine: 'Elliot Page',
    shortStory: 'A thief enters dreams to steal secrets.',
    image: '/images/inception.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 3,
    title: 'Oppenheimer',
    year: 2023,
    director: 'Christopher Nolan',
    hero: 'Cillian Murphy',
    heroine: 'Emily Blunt',
    shortStory: 'The story of J. Robert Oppenheimer and the atomic bomb.',
    image: '/images/oppenheimer.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 4,
    title: 'Parasite',
    year: 2019,
    director: 'Bong Joon-ho',
    hero: 'Song Kang-ho',
    heroine: 'Cho Yeo-jeong',
    shortStory: 'A poor family infiltrates a rich family\'s home.',
    image: '/images/parasite.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 5,
    title: 'The Glory',
    year: 2022,
    director: 'Kim Eun-sook',
    hero: 'Song Hye-kyo',
    heroine: 'Lee Do-hyun',
    shortStory: 'A teacher seeks revenge for bullying.',
    image: '/images/the_glory.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 6,
    title: 'Money Heist',
    year: 2017,
    director: 'Álex Pina',
    hero: 'Úrsula Corberó',
    heroine: 'Álvaro Morte',
    shortStory: 'A criminal mastermind plans the biggest heist.',
    image: '/images/money_heist.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 7,
    title: 'True Beauty',
    year: 2020,
    director: 'Kim Sang-hyeob',
    hero: 'Cha Eun-woo',
    heroine: 'Moon Ga-young',
    shortStory: 'A high school girl transforms with makeup.',
    image: '/images/true_beauty.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 8,
    title: 'Alice in Borderland',
    year: 2020,
    director: 'Shinsuke Sato',
    hero: 'Kento Yamazaki',
    heroine: 'Tao Tsuchiya',
    shortStory: 'Players fight for survival in a dangerous game world.',
    image: '/images/alice_in_borderland.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 9,
    title: 'Engeyum Kadhal',
    year: 2011,
    director: 'Prabhu Deva',
    hero: 'Jayam Ravi',
    heroine: 'Hansika Motwani',
    shortStory: 'A love story across different cities.',
    image: '/images/engeyum_kadhal.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 10,
    title: 'Padayappa',
    year: 1999,
    director: 'K. S. Ravikumar',
    hero: 'Rajinikanth',
    heroine: 'Soundarya',
    shortStory: 'A man seeks revenge and restores his honor.',
    image: '/images/padayappa.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 11,
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    hero: 'Matthew McConaughey',
    heroine: 'Anne Hathaway',
    shortStory: 'Explorers travel through a wormhole to save humanity.',
    image: '/images/interstellar.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 12,
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    hero: 'Christian Bale',
    heroine: 'Maggie Gyllenhaal',
    shortStory: 'Batman faces the Joker in Gotham City.',
    image: '/images/dark_knight.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 13,
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    hero: 'Chadwick Boseman',
    heroine: 'Lupita Nyong\'o',
    shortStory: 'T\'Challa returns home to Wakanda to be king.',
    image: '/images/black_panther.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 14,
    title: 'Avatar 2',
    year: 2022,
    director: 'James Cameron',
    hero: 'Sam Worthington',
    heroine: 'Zoe Saldana',
    shortStory: 'Jake Sully fights to protect Pandora.',
    image: '/images/avatar2.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 15,
    title: 'Avengers: Endgame',
    year: 2019,
    director: 'Anthony & Joe Russo',
    hero: 'Robert Downey Jr.',
    heroine: 'Scarlett Johansson',
    shortStory: 'Heroes unite to defeat Thanos.',
    image: '/images/avengers_endgame.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 16,
    title: 'Dangal',
    year: 2016,
    director: 'Nitesh Tiwari',
    hero: 'Aamir Khan',
    heroine: 'Fatima Sana Shaikh',
    shortStory: 'A father trains his daughters to become wrestling champions.',
    image: '/images/dangal.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 17,
    title: 'RRR',
    year: 2022,
    director: 'S.S. Rajamouli',
    hero: 'N.T. Rama Rao Jr.',
    heroine: 'Alia Bhatt',
    shortStory: 'Revolutionary heroes fight against British rule.',
    image: '/images/rrr.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 18,
    title: 'Titanic',
    year: 1997,
    director: 'James Cameron',
    hero: 'Leonardo DiCaprio',
    heroine: 'Kate Winslet',
    shortStory: 'A tragic love story aboard the Titanic.',
    image: '/images/titanic.jpg',
    rating: 5,
    reviews: []  
  },
  {
    id: 19,
    title: 'Your Name',
    year: 2016,
    director: 'Makoto Shinkai',
    hero: 'Taki',
    heroine: 'Mitsuha',
    shortStory: 'Two strangers swap bodies and try to meet.',
    image: '/images/your_name.jpg',
    rating: 4,
    reviews: []  
  },
  {
    id: 20,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    director: 'Jon Watts',
    hero: 'Tom Holland',
    heroine: 'Zendaya',
    shortStory: 'Spider-Man faces multiverse villains.',
    image: '/images/spiderman_nwh.jpg',
    rating: 5,
    reviews: []  
  }
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
