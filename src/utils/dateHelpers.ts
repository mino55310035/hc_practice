import {
    format,
    startOfMonth, 
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameDay,
    isToday,
    addMonths,
    subMonths,
    startOfDay,
    subWeeks,
    addWeeks,
} from 'date-fns';

export const getTodayDate = (): Date => {
    return new Date();
};

export const formatDateToString = (date: Date): string =>{
    return format(date, 'yyyy-MM-dd');
};

export const parseDateString = (dateString: string): Date => {
    return new Date(dateString);
};

export const getMonthDays = (currentDate: Date): Date[] => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    return eachDayOfInterval({start: startDate, end: endDate});
};

export const checkIsToday = (date: Date): boolean => {
    return isToday(date);
};

export const checkIsSameDay = (date1: Date, date2: Date): boolean => {
    return isSameDay(date1, date2);
};

export const getPreviousMonth = (currentDate: Date): Date =>{
    return subMonths(currentDate, 1);
};

export const getNextMonth = (currentDate: Date): Date =>{
    return addMonths(currentDate, 1);
};

export const isSameMonth = (date1: Date, date2: Date): boolean=>{
    return date1.getMonth() === date2.getMonth() && 
           date1.getFullYear() === date2.getFullYear();
}

export const getWeekDays = (currentDate: Date): Date[] =>{
    return eachDayOfInterval({start: startOfWeek(currentDate), end: endOfWeek(currentDate)});
};

export const getPreviousWeek = (currentDate: Date): Date =>{
    return subWeeks(currentDate, 1);
};

export const getNextWeek = (currentDate: Date): Date =>{
    return addWeeks(currentDate, 1);
};
