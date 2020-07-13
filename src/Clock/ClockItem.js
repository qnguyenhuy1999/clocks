import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import moment from "moment-timezone";

export default function (props) {
  const { timezone, removeTimezone } = props;

  const [date, setDate] = useState(
    new Date(moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss"))
  );

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date(moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss")));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="clock-item">
      <div className="header">
        <p>{timezone}</p>
        <i className="fa fa-times" onClick={removeTimezone(timezone)}></i>
      </div>
      <Clock value={date} />
    </div>
  );
}
