'use client'

import { useState } from "react"
import { Event, ViewMode } from '@/types/event'
import { getNextMonth, getTodayDate, getPreviousMonth, formatDateToString, getPreviousWeek, getNextWeek } from "@/utils/dateHelpers"
import { CalendarHeader } from "./CalendarHeader"
import { MonthView } from "./MonthView"
import { getMonthDays, getWeekDays } from "@/utils/dateHelpers"
import { EventModal } from "./EventModal"
import { EditEventModal } from "../EditEventModal"
import { WeekView } from "./WeekVIew"



export const Calendar = () => {
    // 表示状態の管理
    const [currentDate, setCurrentDate] = useState<Date>(getTodayDate());
    const [viewMode, setViewMode] = useState<ViewMode>('month');

    // 予定の管理
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    // モーダルの管理
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

    // 表示モードの切り替え
    const handleViewMode = (mode: ViewMode)=>{
        setViewMode(mode);
    }

    // 月の切り替え
    const handlePreviousMonth = ()=>{
        const newDate = getPreviousMonth(currentDate);
        setCurrentDate(newDate);
    };

    const handleNextMonth = ()=>{
        const newDate = getNextMonth(currentDate);
        setCurrentDate(newDate);
    }

    // 週の切り替え
    const handlePreviousWeek = () => {
        const newDate = getPreviousWeek(currentDate);
        setCurrentDate(newDate);
    };

    const handleNextWeek = ()=>{
        const newDate = getNextWeek(currentDate);
        setCurrentDate(newDate);
    };

    // イベント操作
    const handleSaveEvents = (eventData: Omit<Event, 'id'>) => {
        const newEvent: Event = {
            id: Date.now().toString(),
            ...eventData,
        };
        setEvents((prev: Event[]) => [...prev, newEvent]);
    };

    const updateEvent = (id: string, newTitle: string) => {
        setEvents(events.map((event) => 
            event.id === id ? { ...event, title: newTitle } : event
        ));
    };

    const deleteEvent = (id: string) => {
        setEvents(events.filter((event) => event.id !== id));
    };
    
    const handleEventClick = (event: Event)=>{
        setSelectedEvent(event);
    };


    // モーダルの操作
    const handleOpenClick = ()=>{
        setIsModalOpen(true);
    };

    const handleCloseClick = ()=>{
        setIsModalOpen(false);
    };
    
    const handleOpenEditClick = ()=>{
        setIsEditModalOpen(true);
    };
    
    const handleCloseEditClick = ()=>{
        setIsEditModalOpen(false);
    };

    //予定の取得
    const getEventsForDate = (date: Date): Event[] => {
        return events.filter((event) => event.date === formatDateToString(date));
    };
    
    const days = getMonthDays(currentDate);
    const weekDays = getWeekDays(currentDate);


    
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
            getEventsForDate = {getEventsForDate}
            handleOpenEditClick = {handleOpenEditClick}
            handleEventClick = {handleEventClick}
            handlePreviousMonth = {handlePreviousMonth}
            handleNextMonth = {handleNextMonth}
            />) : (<WeekView 
            currentDate = {currentDate}
            days = {weekDays}
            handleOpenClick = {handleOpenClick}
            getEventsForDate = {getEventsForDate}
            handleOpenEditClick = {handleOpenEditClick}
            handleEventClick = {handleEventClick}
            handlePreviousWeek = {handlePreviousWeek}
            handleNextWeek = {handleNextWeek}
            />)}
            {isModalOpen && <EventModal 
            onClose={handleCloseClick}
            onSave={handleSaveEvents}
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
