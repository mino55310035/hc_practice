'use client'

import { isSameMonth, checkIsToday, formatDateToString } from "@/utils/dateHelpers"
import { Event } from "@/types/event"




export const MonthView = ({
    currentDate,
    days,
    handleOpenClick,
    getEventsForDate,
    handleOpenEditClick,
    handleEventClick,
    handlePreviousMonth,
    handleNextMonth,
}: {
    currentDate: Date
    days: Date[]
    handleOpenClick: ()=>void
    getEventsForDate: (date: Date) => Event[]
    handleOpenEditClick: () => void
    handleEventClick: (event: Event) => void
    handlePreviousMonth: () => void
    handleNextMonth: () => void
}
) => {
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

    return (
      <div>
        <div className='flex items-center gap-2 text-gray-600'>
                <button onClick={handlePreviousMonth}>←前月</button>
                <button onClick={handleNextMonth}>次月→</button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
            {dayOfWeek.map((day)=>(
                <div key={day} className="text-center font-bold text-gray-600 p-2">
                    {day}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-gray-500">
            {days.map((date, index)=>(
                <div key={index} className=
                {`border px-2 h-35 ${
                    isSameMonth(date, currentDate)? 'text-black' : 'text-gray-400'
                }` 
                } onClick={() => {
                    handleOpenClick();
                }}>
                    <div className={`inline-flex items-center justify-center ${checkIsToday(date)? 'text-white bg-blue-500 rounded-full w-7 h-7 mx-auto' : 'text-center'}`}>
                    {date.getDate()}</div>
                    {getEventsForDate(date).slice(0, 3).map((event)=>(
                        <div 
                        key={event.id} 
                        className="bg-blue-500 p-0.5 rounded-b-sm mt-1 text-white text-left text-xs"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOpenEditClick();
                            handleEventClick(event);
                        }}
                        >{event.title}</div>
                    ))}
                    {getEventsForDate(date).length > 3 && <div className="bg-blue-500 p-0.5 rounded-b-sm mt-1 text-white text-left text-xs">+{getEventsForDate(date).length - 3}件の予定</div>}
                    </div>
            ))}
        </div>
      </div>
    )
}