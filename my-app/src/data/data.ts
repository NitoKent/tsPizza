import { IProducts, Isupplemets } from "../models";

export const supplements:Isupplemets[] = [
    {
       id:1,
       title:"Cheese",
       price: 1.2,
       image: "https://opttorg-horeca.ru/assets/images/catalog/cheese/rossijskij.jpg",

    },
    {
        id:2,
        title:"Salami",
        price: 3,
        image: "https://media.istockphoto.com/id/869538716/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BB%D0%B5%D1%82%D0%BD%D1%8F%D1%8F-%D0%BA%D0%BE%D0%BB%D0%B1%D0%B0%D1%81%D0%B0-%D1%81%D0%B0%D0%BB%D1%8F%D0%BC%D0%B8-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg?s=612x612&w=0&k=20&c=3EOM7rch9pDxo4YGoNu4g1a4MmVh8U9AngXeVvoBaO8=",
 
     },
     {
        id:3,
        title:"Tomate",
        price: 2.1,
        image: "https://eimg.pravda.com/images/doc/7/6/7651ad2-tomato.jpg",
 
     },
];

export const products: IProducts[] = [
  {
    id: 1,
    title: "Маргарита",
    price: 109.95,
    description:
      "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    category: "men's clothing",
    image: "https://st4.depositphotos.com/6478260/27949/i/450/depositphotos_279490908-stock-photo-pizza-margarita-with-cheese-top.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Диабло",
    price: 22.3,
    description:
      "Моцарелла, сыры чеддер и гауда, фирменный соус песто",
    category: "men's clothing",
    image:
      "https://st4.depositphotos.com/6478260/27949/i/450/depositphotos_279490908-stock-photo-pizza-margarita-with-cheese-top.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Сливочный ципленок",
    price: 55.99,
    description:
      "Моцарелла, сыры бри и грюйер, фирменный сливочно-чесночный соус",
    category: "men's clothing",
    image: "https://st4.depositphotos.com/6478260/27949/i/450/depositphotos_279490908-stock-photo-pizza-margarita-with-cheese-top.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Четыре сыра",
    price: 55.99,
    description:
      "Моцарелла, сыры голубой и эмменталь, фирменный соус карбонара",
    category: "men's clothing",
    image: "https://st4.depositphotos.com/6478260/27949/i/450/depositphotos_279490908-stock-photo-pizza-margarita-with-cheese-top.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 5,
    title: "Сливочный ципленок",
    price: 55.99,
    description:
      "Моцарелла, сыры чеддер и фета, фирменный томатно-базиликовый соус.",
    category: "men's clothing",
    image: "https://st4.depositphotos.com/6478260/27949/i/450/depositphotos_279490908-stock-photo-pizza-margarita-with-cheese-top.jpg",
    rating: { rate: 4.7, count: 500 },
  },
];
