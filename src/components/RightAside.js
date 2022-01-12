import Card from "./Card";
import React, { useEffect, useState } from "react";
const RightAside = () => {
  const [data, setData] = useState([]);
  const [day, setDay] = useState([]);
  useEffect(() => {
    const fetchDay = async () => {
      const res = await fetch(
        "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=16&appid=048c43a2f7e00f37c3b4044df2ec3128"
      );

      setDay(await res.json());
    };
    fetchDay();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=048c43a2f7e00f37c3b4044df2ec3128"
      );
      setData(await res.json());
    };
    fetchData();
  }, []);

  console.log(data);
  console.log(day);
  //    let temp = (data.main.temp - 273.15).toFixed(2);
  //    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
  //    let temp_max = (data.main.temp_max - 273.15).toFixed(2);
  return (
    <>
      <div className="flex-col p-3 justify-center items-center text-white">
        <h2 className="text-5xl font-semibold border-b-2 w-auto ">
          Forcast Hourly Shown Below
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 mt-14 gap-2">
          {data.list.map((val, idx) => (
            <div key={idx}>
              <Card value={val} />
            </div>
          ))}
        </div>

        <div>
          {day.list.map((data, idx) => (
            <div>
              <span>{data.temp.min}</span>
              <span>{data.temp.max}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightAside;
