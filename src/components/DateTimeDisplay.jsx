import { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const getFormattedDate = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const now = new Date();
    const day = days[now.getDay()];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${day} ${hours}:${minutes}`;
  };

  const [dateTime, setDateTime] = useState(getFormattedDate());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getFormattedDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-3xs tracking-tighter font-semibold text-orange-400 cursor-pointer bg-blend-difference">
      {dateTime}
    </div>
  );
};

export default DateTimeDisplay;
