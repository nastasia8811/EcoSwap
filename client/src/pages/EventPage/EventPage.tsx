import React from 'react';
//import { useParams } from 'react-router-dom';
//import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
//import { Container , ToggleButton} from '@mui/material';
import './EventPage.scss';
//
// import {useEffect, useState} from 'react';
// import { useSelector } from 'react-redux';
// @ts-ignore
import background from './img/background.jpg';
interface EventPageProps {
    id?: any;
    title?: string;
    img?: string;
    date?: string;
    city?: string;
    description?:string;
    available?:number;
    onClick?: () => void;
}
const EventPage: React.FC<EventPageProps> = () => {
    // const [event, setEvent] = useState<any>(null);
    // const { id } = useParams<{ id: string }>();
    // const eventsData: EventPageProps[] = useSelector((state: any) => state.events.eventsData);
    // useEffect(() => {
    //     const event = eventsData.find(event => event.id === parseInt(id || '', 10));
    //     setEvent(event);
    // }, [id]);
    //
    // if (!event) {
    //     return <div>Event not found</div>;
    // }

    return (
        <>
            {/*<Container className="eventPage" maxWidth="xl">*/}
                {/*<img className="eventPage__img" src={background} alt='nature'/>*/}
                {/*<BreadCrumbs linksArray={[{ link: '/events', text: 'Events' }, { link: `/event/${id}`, text: 'Event' }]} />*/}
                {/*<div className="eventPage__container">*/}

                {/*    <h2 className="eventPage__container-title">{event.title}</h2>*/}
                {/*    <div className="eventPage__container-date">{event.date}</div>*/}
                {/*    <div className="eventPage__container-available">{event.available}</div>*/}

                {/*    <ToggleButton value="android">Join Event</ToggleButton>*/}
                {/*    <h4 className="eventPage__container-city">{event.city}</h4>*/}
                {/*    <img className="eventPage__container-img" src={event.img} alt={event.title} />*/}
                {/*    <p className="eventPage__container-description">{event.description}</p>*/}
                {/*</div>*/}
            {/*</Container>*/}
        </>
    );
};

export default EventPage;
