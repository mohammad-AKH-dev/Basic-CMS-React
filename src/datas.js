let xAxisData = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 99_000 },
  { name: "Mar", sale: 12_090 },
  { name: "Apr", sale: 99_000 },
  { name: "May", sale: 54_000 },
  { name: "Jun", sale: 85_000 },
  { name: "Jul", sale: 34_000 },
  { name: "Agu", sale: 18_598 },
  { name: "Sep", sale: 0 },
  { name: "Oct", sale: 73_078 },
  { name: "Nov", sale: 12_900 },
  { name: "Dec", sale: 97_000 },
];

const newMembers = [
  {
    id: 1,
    username: "Mohammad Amin",
    title: "Web Developer",
    img: "images/amin.jpg",
  },
  { id: 2, username: "Qadir Yolme", title: "Hacker", img: "images/qadir.jpg" },
  {
    id: 3,
    username: "Sasan Moqadas",
    title: "CEO Enginier",
    img: "images/sasan.jpg",
  },
  { id: 4, username: "Zahra Aqayi", title: "Weblog", img: "images/zahra.jpg" },
];

const transActions = [
  {
    id: 1,
    customer: "Sasan Moqadas",
    date: "12 Jun 2022",
    amount: "$123",
    status: "Approved",
    img: "images/sasan.jpg",
  },
  {
    id: 2,
    customer: "Amin Saeedi",
    date: "23 Jul 2022",
    amount: "$300",
    status: "Declined",
    img: "images/amin.jpg",
  },
  {
    id: 3,
    customer: "Mohammad Qolami",
    date: "28 Jun 2022",
    amount: "$225",
    status: "Pending",
    img: "images/mmd.jpg",
  },
  {
    id: 4,
    customer: "Qadir Yolme",
    date: "1 Feb 2022",
    amount: "$473",
    status: "Approved",
    img: "images/qadir.jpg",
  },
];

const userRows = [
  {
    id: 1,
    username: "Qadir Yolme",
    avatar: "images/qadir.jpg",
    status: "active",
    transAction: "$129.52",
    email: "Qadir@gmail.com",
  },
  {
    id: 2,
    username: "Amin Saeedi",
    avatar: "images/amin.jpg",
    status: "non-active",
    transAction: "$110",
    email: "Amin@gmail.com",
  },
  {
    id: 3,
    username: "Sasan Moqadas",
    avatar: "images/sasan.jpg",
    status: "active",
    transAction: "$98",
    email: "Sasan@gmail.com",
  },
  {
    id: 4,
    username: "Zahra Aqayi",
    avatar: "images/zahra.jpg",
    status: "active",
    transAction: "$0",
    email: "zahra@gmail.com",
  },
  {
    id: 5,
    username: "Hamze Mohammadi",
    avatar: "images/hamze.jpg",
    status: "active",
    transAction: "$55.98",
    email: "Hamze@gmail.com",
  },
];

const products = [
  {
    id: 1,
    title: "Asus",
    avatar: "/images/asus.jpeg",
    price: "$890",
    Active: "Yes",
    Stock: "Yes",
    Sales: [
      { name: "Jan", sales: 2000 },
      { name: "Feb", sales: 4000 },
      { name: "Mar", sales: 10000 },
    ],
  },
  {
    id: 2,
    title: "Acer",
    avatar: "/images/acer.jpg",
    price: "$400",
    Active: "No",
    Stock: "No",
    Sales: [
      { name: "Jan", sales: 900 },
      { name: "Feb", sales: 2200 },
      { name: "Mar", sales: 3890 },
    ],
  },
  {
    id: 3,
    title: "HP",
    avatar: "/images/hp.jpg",
    price: "$600",
    Active: "Pending",
    Stock: "No",
    Sales: [
      { name: "Jan", sales: 1500 },
      { name: "Feb", sales: 3000 },
      { name: "Mar", sales: 4500 },
    ],
  },
  {
    id: 4,
    title: "Dell",
    avatar: "/images/dell.jpg",
    price: "$550",
    Active: "Yes",
    Stock: "Yes",
    Sales: [
      { name: "Jan", sales: 1800 },
      { name: "Feb", sales: 3200 },
      { name: "Mar", sales: 4500 },
    ],
  },
];


export {
  xAxisData,
  newMembers,
  transActions,
  userRows,
  products,
};
