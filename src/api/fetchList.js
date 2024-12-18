const API_URL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";
const mock = [
  {
    name: "Bluetooth",
    category: "Electronic",
    value: "$150",
    quantity: 5,
    price: "$30",
  },
  {
    name: "Edifier M43560",
    category: "Electronic",
    value: "$0",
    quantity: 0,
    price: "$0",
  },
  {
    name: "Sony 4k ultra 55 inch TV",
    category: "Electronic",
    value: "$1190",
    quantity: 17,
    price: "$70",
  },
  {
    name: "Samsumg 55 inch TV",
    category: "Electronic",
    value: "$600",
    quantity: 50,
    price: "$12",
  },
  {
    name: "samsumg S34 Ultra",
    category: "phone",
    value: "$0",
    quantity: 0,
    price: "$0",
  },
];

async function fetchList() {
  try {
    const data = await fetch(API_URL);
    // if rate limit exceeded, return mock data
    let res = mock;
    if (data.ok) res = await data.json();
    return res;
  } catch (e) {
    console.warn(e);
    throw new Error(e);
  }
}

export default fetchList;
