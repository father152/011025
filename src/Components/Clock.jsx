import React, { useState, useEffect } from "react";
import "./clock.css";

export default function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Обновлять каждую секунду

    // Очистка таймера при размонтировании компонента
    return () => {
      clearInterval(timerId);
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании и размонтировании

  // Форматирование даты и времени для отображения
  const options = {
    //   year: 'numeric', // Год
    // weekday: "long", // День недели
    // month: "long", // Месяц
    // day: "numeric", // День
    hour: "2-digit", // Часы
    minute: "2-digit", // Минуты
    second: "2-digit", // Секунды
  };

  return (
    <div className="clock">
      <p>{currentDate.toLocaleString(undefined, options)}</p>
    </div>
  );
}
