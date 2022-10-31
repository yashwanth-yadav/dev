import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import BasicModal from "./TransitionModal";
import EditModal from "./EditModal";

const Calender = () => {
  const [events, setevents] = useState([]);
  const [iseditEvent, setiseditEvent] = useState(false);
  const [currentEvent, setcurrentEvent] = useState({});
  const [isEventModal, setisEventModal] = useState(false);
  const [eventId, seteventId] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/events")
      .then((res) => {
        setevents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isModelOpen, setisModelOpen] = useState(false);
  const [date, setdate] = useState("date");

  const dateClick = (e) => {
    console.log("Date is  , ", e.dateStr.split("T")[0]);
    setdate(e.dateStr.split("T")[0]);
    setisModelOpen(true);
  };

  const eventClick = (e) => {
    console.log("event is  , ", e.event.id);
    setisEventModal(true);
    seteventId(e.event.id);
    setiseditEvent(true);

    axios
      .get(`http://localhost:8080/events/${e.event.id}`)
      .then((res) => {
        setcurrentEvent({ ...res.data });
        console.log("Current event is : ", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {!iseditEvent && (
        <BasicModal
          isModelOpen={isModelOpen}
          setisModelOpen={setisModelOpen}
          date={date}
          events={events}
          setevents={setevents}
          iseditEvent={iseditEvent}
          setiseditEvent={setiseditEvent}
          eventId={eventId}
        />
      )}
      <EditModal
        isEventModal={isEventModal}
        setisEventModal={setisEventModal}
        setisAddOpen={setisModelOpen}
        events={events}
        seteventId={seteventId}
        iseditEvent={iseditEvent}
        setiseditEvent={setiseditEvent}
        setevents={setevents}
        date={date}
        currentEvent={currentEvent}
      />
      <Box sx={{ marginTop: "70px" }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: "dayGridMonth,timeGridWeek,timeGridDay new",
          }}
          customButtons={{
            new: {
              text: "-",
              click: () => console.log("new event"),
            },
          }}
          events={events}
          eventColor="#f20a7e"
          nowIndicator
          dateClick={dateClick}
          eventClick={eventClick}
        />
      </Box>
    </div>
  );
};

export default Calender;
