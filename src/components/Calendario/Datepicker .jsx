import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const EventCalendar = ({ events }) => (
  <Calendar
    localizer={localizer}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 400,
      width: 350,
    }}
  />
);

export default EventCalendar;
