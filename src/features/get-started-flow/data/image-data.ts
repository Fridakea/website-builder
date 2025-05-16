import { EType } from "./enum";
import cafe from "@/assets/images/image-options/cafe.webp";
import closeUpOfChef from "@/assets/images/image-options/close-up-of-chef.webp";
import coffeeAndShadows from "@/assets/images/image-options/coffee-and-shadows.webp";
import coffeeShop from "@/assets/images/image-options/coffee-shop.webp";
import coffeeWithBlurredBackground from "@/assets/images/image-options/coffee-with-blurred-background.webp";
import menu from "@/assets/images/image-options/menu.webp";
import noodleDish from "@/assets/images/image-options/noodle-dish.jpg";
import pizzaOven from "@/assets/images/image-options/pizzaoven.webp";
import wineBarrels from "@/assets/images/image-options/wine-barrels.webp";
import coffeeTeaAndCacao from "@/assets/images/image-options/coffee-tea-and-cacao.webp";
import freshBakedBread from "@/assets/images/image-options/fresh-baked-bread.webp";
import pasteries from "@/assets/images/image-options/pasteries.webp";
import shelvesOfBread from "@/assets/images/image-options/shelves-of-bread.webp";
import fancyDinner from "@/assets/images/image-options/fancy-dinner.webp";
import restaurantSign from "@/assets/images/image-options/restaurant-sign.webp";
import burger from "@/assets/images/image-options/burger.webp";
import burgerDinnerMenu from "@/assets/images/image-options/burger-dinner-menu.webp";
import burgerOnBlackBackground from "@/assets/images/image-options/burger-on-black-background.webp";
import italianPizza from "@/assets/images/image-options/italian-pizza.webp";
import pizzaSlices from "@/assets/images/image-options/pizza-slices.webp";

export type ImageItem = {
  src: string;
  alt: string;
};

type ImageOption = {
  data: ImageItem;
  isHero: boolean;
  types: EType[];
};

export const imageOptions: ImageOption[] = [
  {
    data: {
      src: cafe,
      alt: "Spisested indendørs",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE, EType.PIZZARIA],
  },
  {
    data: {
      src: closeUpOfChef,
      alt: "Kok som laver mad på panden",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE, EType.PIZZARIA],
  },
  {
    data: {
      src: coffeeAndShadows,
      alt: "Kaffekop med skygger fra træer",
    },
    isHero: false,
    types: [EType.RESTAURANT, EType.CAFE],
  },
  {
    data: {
      src: coffeeShop,
      alt: "Kaffe og croissant i café",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE],
  },
  {
    data: {
      src: coffeeWithBlurredBackground,
      alt: "Kaffe med slørret baggrund",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE],
  },
  {
    data: {
      src: menu,
      alt: "Menukort",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE, EType.PIZZARIA],
  },
  {
    data: {
      src: noodleDish,
      alt: "Noodle-ret",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE],
  },
  {
    data: {
      src: pizzaOven,
      alt: "Pizza i pizzaovn",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE, EType.PIZZARIA],
  },
  {
    data: {
      src: wineBarrels,
      alt: "Vintønder",
    },
    isHero: true,
    types: [EType.RESTAURANT, EType.CAFE, EType.PIZZARIA],
  },
  {
    data: {
      src: coffeeTeaAndCacao,
      alt: "Kaffe, te og kakao",
    },
    isHero: false,
    types: [EType.CAFE],
  },
  {
    data: {
      src: freshBakedBread,
      alt: "Frisk baget brød",
    },
    isHero: true,
    types: [EType.CAFE],
  },
  {
    data: {
      src: pasteries,
      alt: "Wienerbrød",
    },
    isHero: true,
    types: [EType.CAFE],
  },
  {
    data: {
      src: shelvesOfBread,
      alt: "Hylder med brød",
    },
    isHero: true,
    types: [EType.CAFE],
  },
  {
    data: {
      src: fancyDinner,
      alt: "Fin ret",
    },
    isHero: false,
    types: [EType.RESTAURANT],
  },
  {
    data: {
      src: restaurantSign,
      alt: "Restaurant skilt",
    },
    isHero: true,
    types: [EType.RESTAURANT],
  },
  {
    data: {
      src: burger,
      alt: "Burger",
    },
    isHero: false,
    types: [EType.CAFE, EType.RESTAURANT],
  },
  {
    data: {
      src: burgerDinnerMenu,
      alt: "Burger Diner menu",
    },
    isHero: false,
    types: [EType.CAFE],
  },
  {
    data: {
      src: burgerOnBlackBackground,
      alt: "Burger på sort baggrund",
    },
    isHero: true,
    types: [EType.CAFE, EType.RESTAURANT],
  },
  {
    data: {
      src: italianPizza,
      alt: "Italiensk pizza",
    },
    isHero: false,
    types: [EType.PIZZARIA, EType.CAFE, EType.RESTAURANT],
  },
  {
    data: {
      src: pizzaSlices,
      alt: "Pizza stykker i pizzabakke",
    },
    isHero: false,
    types: [EType.PIZZARIA, EType.CAFE],
  },
];
