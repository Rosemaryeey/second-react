import React from "react";
import {  useState } from "react";
import{Link} from "react-router-dom"

function novel() {
  const [query, setQuery] = useState();
  const [novel, setNovel] = useState([]);
  // const [search, setSearch] = useState([]);
  // const [loading, setLoading] = useState([]);

  const api = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

  const fetchNovel = async () => {
    const response = await fetch(api);
    const data = await response.json();

    console.log(data.items);

    setNovel(data.items);
  };

  const handlechange = (e) => {
    setQuery(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    fetchNovel();
  };

  return (
    <div className="bg-slate-700 min-h-[90vh] h-fit py-10 flex flex-col items-center justify-around">
      <form onSubmit={handlesubmit} className=" gap-2 flex justify-center">
        <div className=" bg-white  border-2 border-white rounded-2xl h-12 w-[35vw] flex items-center justify-between ">
          <input
            onChange={handlechange}
            className=" h-10  w-[30vw] border-[1px] bg-none border-gray-500 pl-3  border-none rounded-md py-3 px-5 outline-none"
            type="text"
            placeholder="Search Books.... "
            value={query}
          />
          <button
            type="submit"
            className=" h-11 border-none bg-gray-500 text-white px-7 rounded-2xl hover:bg-gray-700"
          >
            search
          </button>
        </div>
      </form>

      <section className="flex justify-around flex-wrap space-y-10 mt-10">
        {novel.map((item, index) => (
          <Link>
            <figure
              className="w-[30vw] rounded-3xl   h-[70vh]   grid gap-3 shadow-2xl content-start p-10 overflow-hidden"
              key={index}
            >
              <p className=" font-bold uppercase text-slate-50 text-2xl">
                {item.volumeInfo.title}
              </p>
              <p>"{item.volumeInfo.subtitle}"</p>
              <button>
                <img
                  className=" hover:w-[20vw]"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt="mageLink"
                />
              </button>
              <h2>Author: {item.volumeInfo.authors}</h2>

              <p>{item.volumeInfo.publisher}</p>
            </figure>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default novel;
