import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Monitors over $500",
    url: "/search/monitors?sort_by=r&min_price=500",
    color: "bg-blue-500",
  },
  {
    id: 2,
    term: "iPhone Pro Max",
    url: "/search/iphone pro max",
    color: "bg-red-500",
  },
  {
    id: 3,
    term: "Macbook Pro",
    url: "/search/macbook",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    term: "Airpods Pro",
    url: "/search/airpods",
    color: "bg-green-500",
  },
  {
    id: 5,
    term: "Tablets under $300",
    url: "/search/tablets?sort_by=r&max_price=300",
    color: "bg-purple-500",
  },
];

export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get started by typing an item to search on Google Shopping or clicking any Product listed below.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
        {
          // map through the SEARCHES array
          SEARCHES.map((search) => (
            <Link
            prefetch={false}
              key={search.id}
              href={search.url}
              className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
            >
              {search.term}
            </Link>
          ))
        }
      </div>
    </div>
  );
}
