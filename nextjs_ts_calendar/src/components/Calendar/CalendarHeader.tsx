'use client';

import {format} from 'date-fns';
import { ViewMode } from '@/types/event';

export const CalendarHeader = ({
    currentDate,
    onPreviousMonth,
    onNextMonth,
    viewMode,
    handleViewMode

}: { 
    currentDate: Date;
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    viewMode: ViewMode;
    handleViewMode: (mode: ViewMode) => void;

})=>{
    const formatCurrentDate = format(currentDate, 'yyyy年M月')
    
    return (
        
        <div className='flex justify-between items-center text-gray-400'>
            <h2 className="text-xl font-bold text-gray-800">{formatCurrentDate}</h2>
            <div className='flex items-center gap-2'>
                <button onClick={()=>handleViewMode('month')} className={viewMode === 'month' ? 'bg-blue-500 text-white px-4 py-2 rounded-md' : 'bg-gray-200 text-gray-400 px-4 py-2 rounded-md'}>月</button>
                <button onClick={()=>handleViewMode('week')} className={viewMode === 'week' ? 'bg-blue-500 text-white px-4 py-2 rounded-md' : 'bg-gray-200 text-gray-400 px-4 py-2 rounded-md'}>週</button>
            </div>

        </div>
    );
};