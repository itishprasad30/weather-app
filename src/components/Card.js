const Card = ({ value }) => {
  let temp_min = (value.main.temp_min - 273.15).toFixed(2);
  let temp_max = (value.main.temp_max - 273.15).toFixed(2);
  //   dt_txt: "2022-01-12 15:00:00";

  let time = value.dt_txt.split(" ");
  let timeFormart = time[1];

  return (
    <div className="bg-slate-800 rounded-lg ">
      <div className="flex-col">
        <p>{timeFormart}</p>
        <div className="flex justify-center items-center">
          <img
            src="https://www.metaweather.com/static/img/weather/sn.svg"
            alt=""
            width="50px"
            height="50px"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <span>{temp_min}°C</span>
        <span>{temp_max}°C</span>
      </div>
    </div>
  );
};

export default Card;
