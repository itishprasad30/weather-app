import React, { useEffect, useState } from "react";

const LeftAside = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=London&appid=048c43a2f7e00f37c3b4044df2ec3128"
      );
      setData(await res.json());
    };
    fetchData();
  }, []);
  let temp = 12;
  let temp_max = 2312;
  let temp_min = 23;

  //   let temp = (data.main.temp - 273.15).toFixed(2);
  //   let temp_min = (data.main.temp_min - 273.15).toFixed(2);
  //   let temp_max = (data.main.temp_max - 273.15).toFixed(2);
  console.log(data);
  return (
    <div>
      <div className="flex-col">
        <div className="flex">
          <input
            type="text"
            placeholder="search heare.."
            className="w-full h-14 p-2 mt-10 ml-10  rounded-lg"
          />
          <button className="bg-gray-400 text-white mt-10  ml-10 rounded-md p-3">
            Search
          </button>
        </div>

        {/* image */}
        <div className="flex flex-col justify-start items-center h-full">
          <img
            src="https://www.metaweather.com/static/img/weather/sn.svg"
            alt=""
            width="150px"
            height="150px"
          />
          <p className="mt-10">
            <span className="font-extrabold text-7xl text-gray-100">
              {temp}°C
            </span>
          </p>
          <p className="font-bold mt-10  text-gray-50 text-3xl">
            {data?.weather[0].main}
          </p>
          <p className="font-semibold mt-10  text-gray-50 text-2xl">
            Description: {data?.weather[0].description}
          </p>
          <p className="font-bold mt-10  text-gray-50 text-2xl">Today</p>
          <p className="font-semibold text-4xl text-white mt-10">
            {temp_min}°C | {temp_max}°C
          </p>

          <div className="flex justify-center items-center">
            <p className="mt-12 text-2xl text-gray-400"> 📌{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
