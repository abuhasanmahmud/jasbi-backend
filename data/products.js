const products = [
  {
    name: "American Garden Mushroom Whole Can 425g",
    weight: "425g",
    img: "https://i.ibb.co/wcjpQpH/13.jpg",
    price: "175",
    off: "20",
    brand: "Wilson",
    category: "Meat and Seafoods",
    stock: "12",
    numOfReviews: "23",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Arm & Hammer Tropical Paradise",

    weight: "125g",
    img: "https://i.ibb.co/mvJgCLX/14.jpg",
    price: "200",
    stock: "12",
    brand: "Wilson",
    category: "Meat and Seafoods",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Aloe Vera Leaf each",

    img: "https://i.ibb.co/bQ4YyJ1/15.jpg",
    weight: "325g",
    price: "250",
    off: "10",
    stock: "12",
    brand: "Wilson",
    category: "Meat and Seafoods",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "12",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Avocado Juice Fruit Vegetable",

    weight: "625g",
    img: "https://i.ibb.co/4KRpwss/16.jpg",
    price: "300",
    stock: "12",
    brand: "Wilson",
    category: "Meat and Seafoods",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Alshifa Natural Honey 250gm",
    weight: "55g",
    img: "https://i.ibb.co/C1tBmQk/17.jpg",
    price: "500",
    off: "30",
    stock: "12",
    brand: "Wilson",
    category: "Meat and Seafoods",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "120",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Testy Carrot for Vegetables",

    weight: "725g",
    img: "https://i.ibb.co/s5h9Qz4/18.jpg",
    price: "700",
    off: "10",
    stock: "12",
    brand: "Wilson",
    category: "Meat and Seafoods",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Mini Pumpkin Box each",

    weight: "255g",
    img: "https://i.ibb.co/DYV73Sm/19.jpg",
    price: "800",
    stock: "12",
    brand: "Wilson",
    category: "Meat and Seafoods",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Tide Detergent, Fresh Scent 100oz",

    weight: "2325g",
    img: "https://i.ibb.co/54Rxqhr/20.jpg",
    price: "900",
    stock: "12",
    brand: "Wilson",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Shefa'a Natural Honey 250g",

    weight: "1125g",
    img: "https://i.ibb.co/r2NmmC8/21.jpg",
    price: "100",
    off: "50",
    stock: "12",
    brand: "Wilson",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "100",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Cerelac Wheat Apple Cornflakes 400gm",

    weight: "125g",
    img: "https://i.ibb.co/7V0pPtw/22.jpg",
    price: "450",
    stock: "12",
    brand: "Wilson",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Dabur Honey 250g",

    weight: "125g",
    img: "https://i.ibb.co/SXJX9W0/23.jpg",
    price: "175",
    off: "20",
    brand: "Levono",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    stock: "12",
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Fresh Wild King Salmon Steak 1lb",

    weight: "425g",
    img: "https://i.ibb.co/MCsxDBT/24.jpg",
    price: "200",
    stock: "12",
    brand: "Levono",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Green Leaf Lettuce 500g",

    weight: "425g",
    img: "https://i.ibb.co/cLVLc5V/25.jpg",
    price: "250",
    off: "10",
    stock: "12",
    brand: "Levono",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Beef Chuck Steak 1lb",

    weight: "925g",
    img: "https://i.ibb.co/p0ng5sc/26.jpg",
    price: "300",
    stock: "12",
    brand: "Levono",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Ahold Acorn Squash 1piecep<",

    weight: "425g",
    img: "https://i.ibb.co/yN99wRr/1.jpg",
    price: "500",
    off: "30",
    stock: "12",
    brand: "Levono",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "CP Chicken Patty 500g",

    weight: "545g",
    img: "https://i.ibb.co/FKKSksg/2.jpg",
    price: "700",
    off: "10",
    stock: "12",
    brand: "Levono",
    category: "Bakery and Biscuits",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Denim Black After Shave 100ml",

    weight: "425g",
    img: "https://i.ibb.co/9cZ8SL0/3.jpg",
    price: "800",
    stock: "12",
    brand: "Levono",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Mandarin Clementine 22lb",

    weight: "425g",
    img: "https://i.ibb.co/6vjkVDM/14.jpg",
    price: "900",
    stock: "12",
    brand: "Levono",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Calabaza Squash Package each",

    weight: "425g",
    img: "https://i.ibb.co/wM5SP72/4.jpg",
    price: "100",
    off: "50",
    stock: "12",
    brand: "Levono",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Testy Carrot for Vegetablesh",

    weight: "425g",
    img: "https://i.ibb.co/GVqGN95/5.jpg",
    price: "450",
    stock: "12",
    brand: "Levono",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Mini Pumpkin Box each",

    weight: "425g",
    img: "https://i.ibb.co/8dJYtfM/6.jpg",
    price: "175",
    off: "20",
    brand: "PatPat",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    stock: "12",
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Tide Detergent, Fresh Scent 100oz",

    weight: "425g",
    img: "https://i.ibb.co/0jJtLrx/7.jpg",
    price: "200",
    stock: "12",
    brand: "PatPat",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Tide Detergent, Fresh Scent 100oz",

    weight: "125g",
    img: "https://i.ibb.co/vsr2F1B/8.jpg",
    price: "250",
    off: "10",
    stock: "12",
    brand: "PatPat",
    category: "Dairy and Eggs",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "hefa'a Natural Honey 250g",

    weight: "225g",
    img: "https://i.ibb.co/7rMXygM/9.jpg",
    price: "300",
    stock: "12",
    brand: "PatPat",
    category: "Drinks and Juices",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Cerelac Wheat Apple Cornflakes 400gm",

    weight: "825g",
    img: "https://i.ibb.co/097r3HP/10.jpg",
    price: "500",
    off: "30",
    stock: "12",
    brand: "PatPat",
    category: "Drinks and Juices",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: "Dabur Honey 250g",

    weight: "325g",
    img: "https://i.ibb.co/Jx8h6rB/11.jpg",
    price: "700",
    off: "10",
    stock: "12",
    brand: "PatPat",
    category: "Drinks and Juices",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
  {
    name: " Fresh Wild King Salmon Steak 1lb",

    weight: "425g",
    img: "https://i.ibb.co/fv4nLbh/12.jpg",
    price: "800",
    stock: "12",
    brand: "PatPat",
    category: "Drinks and Juices",
    size: ["XL", "L", "M", "S", "XS"],
    numOfReviews: "123",
    description:
      "Proactively provide access to cross-platform outsourcing whereas market positioning process improvements. Completely iterate accurate process improvements rather than value-added manufactured products. Conveniently whiteboard rather than multidisciplinary alignments. Progressively initiate interactive architectures rather than plug-and-play imperatives. Competently create user friendly imperatives and high standards in strategic theme areas. Rapidiously drive sustainable systems via focused human capital.",
  },
];

export default products;
