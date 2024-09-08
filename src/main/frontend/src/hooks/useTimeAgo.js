import { useState, useEffect } from "react";
import moment from "moment";

const useTimeAgo = (initialDate) => {
  const [contentTime, setContentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const datetime = moment(initialDate);
      const now = moment();
      const duration = moment.duration(now.diff(datetime));

      let seconds = duration.asSeconds();
      let minutes = duration.asMinutes();
      let hours = duration.asHours();
      let days = duration.asDays();
      let weeks = duration.asWeeks();
      let months = duration.asMonths();
      let years = duration.asYears();

      if (minutes < 1) {
        setContentTime(parseInt(seconds) + "초 전");
      } else if (hours < 1) {
        setContentTime(parseInt(minutes) + "분 전");
      } else if (hours < 24) {
        setContentTime(parseInt(hours) + "시간 전");
      } else if (days < 7) {
        setContentTime(parseInt(days) + "일 전");
      } else if (weeks < 4) {
        setContentTime(parseInt(weeks) + "주 전");
      } else if (months < 12) {
        setContentTime(parseInt(months) + "달 전");
      } else {
        setContentTime(parseInt(years) + "년 전");
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [initialDate]);

  return contentTime;
};

export default useTimeAgo;
