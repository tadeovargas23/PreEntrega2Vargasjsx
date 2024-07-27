const items = [
  {
    id: 1,
    name: 'Heladera Drean',
    price: 1200,
    image: '/images/drean.jpg',
    category: 'heladeras',
  },
  {
    id: 2,
    name: 'Heladera Samsung',
    price: 1400,
    image: '/images/samsung.png',
    category: 'heladeras',
  },
  {
    id: 3,
    name: 'Lavarropas Whirlpool',
    price: 800,
    image: '/images/whirlpool.png',
    category: 'lavarropas',
  },
  {
    id: 4,
    name: 'Lavarropas Bosch',
    price: 950,
    image: '/images/bosch.png',
    category: 'lavarropas',
  },
  {
    id: 5,
    name: 'Microondas Panasonic',
    price: 300,
    image: '/images/panasonic.png',
    category: 'microondas',
  },
  {
    id: 6,
    name: 'Microondas BGH',
    price: 350,
    image: '/images/bgh.jpg',
    category: 'microondas',
  },
];

export const fetchAllItems = () => {
  return Promise.resolve(items);
};

export const fetchItemsByCategory = (category) => {
  return Promise.resolve(items.filter(item => item.category === category));
};

export const fetchItemById = (id) => {
  return Promise.resolve(items.find(item => item.id === id));
};
