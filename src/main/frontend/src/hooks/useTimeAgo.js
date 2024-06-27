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
      let minute = duration.asMinutes();
      let hours = duration.asHours();
      let days = duration.asDays();
      let weeks = duration.asWeeks();
      let month = duration.asMonths();
      let year = duration.asYears();

      if (minute < 1) {
        setContentTime(parseInt(seconds) + "초 전");
      } else if (hours < 1) {
        setContentTime(parseInt(minute) + "분 전");
      } else if (hours < 24) {
        setContentTime(parseInt(hours) + "시간 전");
      } else if (weeks < 1) {
        setContentTime(parseInt(days) + "일 전");
      } else if (month < 1) {
        setContentTime(parseInt(weeks) + "주 전");
      } else if (year < 1) {
        setContentTime(parseInt(month) + "달 전");
      } else {
        setContentTime(parseInt(year) + "년 전");
      }
    };

    updateTime();
  }, [initialDate]);

  return contentTime;
};

export default useTimeAgo;
