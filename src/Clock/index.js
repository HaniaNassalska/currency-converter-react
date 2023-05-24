import { StyledClock } from "./styled";
import useDate from "./useDate";

const Clock = () => {
  const currentDate = useDate();

  return (
    <StyledClock>
      Dzisiaj jest{" "}
      {currentDate.toLocaleString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })}
      ,{" "}
      {currentDate.toLocaleString("pl-PL", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </StyledClock>
  );
};

export default Clock;
