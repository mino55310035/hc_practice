'use client'

import { useState } from "react";
import { Calendar } from "./Calendar";

export const EventModal = (
    {handleCloseClick, handleInputTitle, eventTitle, handleInputDate, eventDate, handleSaveEvents, handleCancelEvents}:
    {
    handleCloseClick: ()=>void, 
    handleInputTitle: (e: React.ChangeEvent<HTMLInputElement>)=>void, 
    eventTitle: string
    handleInputDate: (e: React.ChangeEvent<HTMLInputElement>) =>void,
    eventDate: string,
    handleSaveEvents: () => void,
    handleCancelEvents: () => void,
    }
)=>{
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleCloseClick}>
        <div className="bg-white rounded-b-lg p-6 w-96" onClick={(e)=>e.stopPropagation()}>

            <h2 className="text-xl font-bold mb-4 text-gray-500">予定を作成</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-500">タイトル</label>
                <input
                type="text"
                value={eventTitle}
                onChange={handleInputTitle}
                placeholder="予定のタイトルを入力する"
                className="w-full border rounded px-3 py-2 text-gray-500"
                />
            </div>

            <div className="mb-4 text-gray-500">
                <label className="block text-sm font-medium mb-2">日付</label>
                <input 
                type="date"
                value={eventDate}
                onChange={handleInputDate}
                className="w-full border rounded px-3 py-2"
                 />
            </div>

            <div className="flex gap-2 justify-end">
                <button className="px-4 py-2 text-gray-600 border rounded" onClick={handleCancelEvents}>キャンセル</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSaveEvents}>保存</button>
            </div>
        </div>
    </div>
    );
    
};