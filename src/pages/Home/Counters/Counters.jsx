import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversalAccess,
  faHandHoldingDollar,
  faCoins,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import "./counter.css";
import { activityStats } from "../../../actions/client";
import { Grid } from '@mui/material';

function EventCounter({ event }) {
  return (
    <div className="count">
      <div>
        <div className="event-icon">{event.icon}</div>
        <div className="event-count">
          <div>{event.name}</div>
          <CountUp start={event.start} end={event.end} duration={5}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} style={{  fontSize: ""  }} />
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </div>
  );
}

function Counters() {
  const countersRef = useRef(null);
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.client.activityStats);
  const events = [
    {
      name: "Total Activities",
      start: 0,
      end: stats?.totalActivities,
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      name: "Amount Raised",
      start: 0,
      end: stats?.amountRaised,
      icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    },
    {
      name: "Amount Spent",
      start: 0,
      end: stats?.totalAmountSpend,
      icon: <FontAwesomeIcon icon={faCoins} />,
    },
    {
      name: "Total Clubs",
      start: 0,
      end: stats?.totalClubs,
      icon: (
        <img
          src={"/assets/img/lion.ico"}
          alt="Lion Icon"
          style={{ width: "60%" }}
        />
      ),
    },
    {
      name: "Beneficiaries",
      start: 0,
      end: stats?.beneficiariesServed,
      icon: <FontAwesomeIcon icon={faUniversalAccess} />,
    },
  ];

  useEffect(() => {
    dispatch(activityStats());
  }, []);

    return (
        <div className="counters">
            <div className='col-lg-12 '>
                <div ref={countersRef} className='row text-center'>
                    <Grid container spacing={2} className='counterGrid'>
                        {events.map((event, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={2.4}>
                                <EventCounter key={event.name} event={event} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Counters;
