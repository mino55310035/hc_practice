'use client'

import { useState } from "react"
import {Event, ViewMode} from '@/types/event'
import { getNextMonth, getTodayDate, getPreviousMonth, formatDateToString, getPreviousWeek, getNextWeek } from "@/utils/dateHelpers"
import { CalendarHeader } from "./CalendarHeader"
import { MonthView } from "./MonthView"
import { getMonthDays, getWeekDays } from "@/utils/dateHelpers"
import { EventModal } from "./EventModal"
import { EditEventModal } from "../EditEventModal"
import { WeekView } from "./WeekVIew"

type CalendarProps = object;

export const Calendar = ({}: CalendarProps) => {
    const [currentDate, setCurrentDate] = useState<Date>(getTodayDate());


    const [viewMode, setViewMode] = useState<ViewMode>('month');

    const handleViewMode = (mode: ViewMode)=>{
        setViewMode(mode);
    }

    const [events, setEvents] = useState<Event[]>([]);

    const resetEvents = () =>{
        setEventTitle('');
        setEventDate('');
    };

    const saveEvents = (event: Event)=>{
        setEvents(prev => [...prev, event]);
    }


    const handleEventClick = (event: Event)=>{
        setSelectedEvent(event);
    };
     

    const handleCancelEvents = ()=>{
        resetEvents();
        handleCloseClick();
    };

    const handlePreviousMonth = ()=>{
        const newDate = getPreviousMonth(currentDate);
        setCurrentDate(newDate);
    };

    const handleNextMonth = ()=>{
        const newDate = getNextMonth(currentDate);
        setCurrentDate(newDate);
    }

    const days = getMonthDays(currentDate);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenClick = ()=>{
        setIsModalOpen(true);
    };

    const handleCloseClick = ()=>{
        setIsModalOpen(false);
    };

    const handleSaveEvents = () =>{
        const newEvent: Event= {
            id: Date.now().toString(),
            title: eventTitle,
            date: eventDate,
        };
        saveEvents(newEvent);
        resetEvents();
        handleCloseClick();
    };

    const [eventTitle, setEventTitle] = useState<string>('');

    const handleInputTitle = (title: React.ChangeEvent<HTMLInputElement>)=>{
        setEventTitle(title.target.value);
    };

    const [eventDate, setEventDate] = useState<string>('');

    const handleInputDate = (date: React.ChangeEvent<HTMLInputElement>)=>{
        setEventDate(date.target.value);
    }

    const handleDateClick = (date: Date) => {
        setEventDate(formatDateToString(date));
    };

    const getEventsForDate = (date: Date): Event[] => {
        return events.filter((event) => event.date === formatDateToString(date));
    };

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);


    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

    const handleOpenEditClick = ()=>{
        setIsEditModalOpen(true);
    };
    const handleCloseEditClick = ()=>{
        setIsEditModalOpen(false);
    };


    const updateEvent = (id: string, newTitle: string) => {
        setEvents(events.map((event) => 
            event.id === id ? { ...event, title: newTitle } : event
        ));
    };

    const deleteEvent = (id: string) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    const weekDays = getWeekDays(currentDate);

    const handlePreviousWeek = ()=>{
        const newDate = getPreviousWeek(currentDate);
        setCurrentDate(newDate);
    };

    const handleNextWeek = ()=>{
        const newDate = getNextWeek(currentDate);
        setCurrentDate(newDate);
    };





    return (
        <div className="max-w-6xl mx-auto p-4">
            <CalendarHeader 
            currentDate = {currentDate}
            onPreviousMonth = {handlePreviousMonth}
            onNextMonth = {handleNextMonth}
            viewMode = {viewMode}
            handleViewMode = {handleViewMode}
            />
            {/* ここに今後、ヘッダー・月表示・週表示を追加していきます */}
            {viewMode === 'month' ? (<MonthView
            currentDate = {currentDate}
            days = {days}
            handleOpenClick = {handleOpenClick}
            handleDateClick = {handleDateClick}
            getEventsForDate = {getEventsForDate}
            handleOpenEditClick = {handleOpenEditClick}
            handleEventClick = {handleEventClick}
            handlePreviousMonth = {handlePreviousMonth}
            handleNextMonth = {handleNextMonth}
            />) : (<WeekView 
            currentDate = {currentDate}
            days = {weekDays}
            handleOpenClick = {handleOpenClick}
            handleDateClick = {handleDateClick}
            getEventsForDate = {getEventsForDate}
            handleOpenEditClick = {handleOpenEditClick}
            handleEventClick = {handleEventClick}
            handlePreviousWeek = {handlePreviousWeek}
            handleNextWeek = {handleNextWeek}
            />)}
            {isModalOpen && <EventModal 
            handleCloseClick={handleCloseClick}
            handleInputTitle = {handleInputTitle}
            eventTitle={eventTitle}
            handleInputDate = {handleInputDate}
            eventDate={eventDate}
            handleSaveEvents = {handleSaveEvents}
            handleCancelEvents = {handleCancelEvents}
            />}
            {isEditModalOpen && <EditEventModal 
            handleCloseEditClick={handleCloseEditClick}
            selectedEvent={selectedEvent}
            updateEvent={updateEvent}
            deleteEvent={deleteEvent}
            />}
        </div>
    );
};
