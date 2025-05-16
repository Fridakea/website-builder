import { EType } from "./enum";
import cafe from "@assets/images/image-options/cafe.webp";
import closeUpOfChef from "@assets/images/image-options/close-up-of-chef.webp";
import coffeeAndShadows from "@assets/images/image-options/coffee-and-shadows.webp";
import coffeeShop from "@assets/images/image-options/coffee-shop.webp";
import coffeeWithBlurredBackground from "@assets/images/image-options/coffee-with-blurred-background.webp";
import menu from "@assets/images/image-options/menu.webp";
import noodleDish from "@assets/images/image-options/noodle-dish.webp";
import pizzaOven from "@assets/images/image-options/pizzaoven.webp";
import wineBarrels from "@assets/images/image-options/wine-barrel.webp";

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
    isHero: true,
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
      src: "@assets/images/image-options/coffee-tea-and-cocao.webp",
      alt: "Kaffe, te og kakao",
    },
    isHero: false,
    types: [EType.CAFE],
  },
  {
    data: {
      src: "@assets/images/image-options/fresh-baked-bread.webp",
      alt: "Frisk baget brød",
    },
    isHero: true,
    types: [EType.CAFE],
  },
  {
    data: {
      src: "@assets/images/image-options/pasteries.webp",
      alt: "Wienerbrød",
    },
    isHero: true,
    types: [EType.CAFE],
  },
  {
    data: {
      src: "@assets/images/image-options/shelves-of-bread.webp",
      alt: "Hylder med brød",
    },
    isHero: true,
    types: [EType.CAFE],
  },
];
