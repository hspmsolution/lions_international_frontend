import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faHandHoldingDollar, faCoins, faUsers } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import './counter.css';

function EventCounter({ event }) {
    return (
        <div className='count'>
            <div>
                <div className='event-icon'>{event.icon}</div>
                <div className='event-count'>
                    <div>{event.name}</div>
                    <CountUp start={event.start} end={event.end} duration={5}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} style={{fontSize: ''}} />
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    );
}



const events = [
    { name: "Total Activities", start: 100, end: 9590, icon:<FontAwesomeIcon icon={faUsers} /> },
    { name: "Amount Raised", start: 100000, end: 96783787, icon:<FontAwesomeIcon icon={faHandHoldingDollar} /> },
    { name: "Amount Spent", start: 100000, end: 96783787, icon:<FontAwesomeIcon icon={faCoins} /> },
    { name: "Total Clubs", start: 10, end: 128, icon:<img src={'/assets/img/lion.ico'} alt="Lion Icon" style={{width: '60%'}} /> },
    { name: "Beneficiaries Served", start: 10000, end: 4210402, icon:<FontAwesomeIcon icon={faUniversalAccess} /> },
]

function Counters() {
    const countersRef = useRef(null);

    return (
        <div className="counters">
            <div className='col-lg-12 '>
                <div ref={countersRef} className='row text-center'>
                    {events.map((event, index) => (  
                        <EventCounter key={event.name} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Counters;