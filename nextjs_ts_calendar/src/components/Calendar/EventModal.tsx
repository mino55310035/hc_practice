'use client'

import { useState } from "react";
import { Event } from "@/types/event";

export const EventModal = ({
    onClose,
    onSave
} : {
    onClose: () => void,
    onSave: (eventData: Omit<Event, 'id'>) => void,
}
)=>{
    const [eventTitle, setEventTitle] = useState<string>('');
    const [eventDate, setEventDate] = useState<string>('');
    const handleSave = () => {
        if (!eventTitle.trim() || !eventDate){
            alert('タイトルと日付を入力してください');
            return;
        }

        onSave({
            title: eventTitle,
            date: eventDate,
        });
        
        setEventTitle('');
        setEventDate('');
        onClose();
        };

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClose}>
        <div className="bg-white rounded-b-lg p-6 w-96" onClick={(e)=>e.stopPropagation()}>

            <h2 className="text-xl font-bold mb-4 text-gray-500">予定を作成</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-500">タイトル</label>
                <input
                type="text"
                value={eventTitle}
                onChange={(e)=>setEventTitle(e.target.value)}
                />
            </div>

            <div className="mb-4 text-gray-500">
                <label className="block text-sm font-medium mb-2">日付</label>
                <input 
                type="date"
                value={eventDate}
                onChange={(e)=>setEventDate(e.target.value)}
                 />
            </div>

            <div className="flex gap-2 justify-end">
                <button className="px-4 py-2 text-gray-600 border rounded" onClick={onClose}>キャンセル</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>保存</button>
            </div>
        </div>
    </div>
    );
    
};