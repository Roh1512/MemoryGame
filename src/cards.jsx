const cards = [
  {
    id: "1",
    name: "Ace of Clubs",
    url: "/cardImages/ace-of-clubs.svg",
  },
  {
    id: "2",
    name: "Ace of Diamonds",
    url: "/cardImages/ace-of-diamond.svg",
  },
  {
    id: "3",
    name: "Ace of Hearts",
    url: "/cardImages/ace-of-hearts.svg",
  },
  {
    id: "4",
    name: "Ace of Spades",
    url: "/cardImages/ace-of-spades.svg",
  },
  {
    id: "5",
    name: "Jack of Clubs",
    url: "/cardImages/jack-of-clubs.svg",
  },
  {
    id: "6",
    name: "Jack of Diamonds",
    url: "/cardImages/jack-of-diamond.svg",
  },
  {
    id: "7",
    name: "Jack of Hearts",
    url: "/cardImages/jack-of-hearts.svg",
  },
  {
    id: "8",
    name: "Jack of Spades",
    url: "/cardImages/jack-of-spades.svg",
  },
  {
    id: "9",
    name: "Joker",
    url: "/cardImages/joker.svg",
  },
  {
    id: "10",
    name: "King of Spades",
    url: "/cardImages/king-of-spades.svg",
  },
  {
    id: "11",
    name: "King of Diamonds",
    url: "/cardImages/king-of-diamond.svg",
  },
  {
    id: "12",
    name: "Queen of clubs",
    url: "/cardImages/queen-of-clubs.svg",
  },
  {
    id: "13",
    name: "Queen of Diamonds",
    url: "/cardImages/queen-of-diamond.svg",
  },
  {
    id: "14",
    name: "Queen of Hearts",
    url: "/cardImages/queen-of-hearts.svg",
  },
  {
    id: "15",
    name: "Queen of Spades",
    url: "/cardImages/queen-of-spades.svg",
  },
];
export function getRandomDistinctItems(array, count) {
  if (count > array.length) {
    console.error("Count exceeds the length of the array");
    return [];
  }

  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Return the first 'count' distinct elements from the shuffled array
  return [...new Set(shuffledArray.slice(0, count))];
}
export default cards;
