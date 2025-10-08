'use client'


import { Event } from "@/types/event"
import { useState } from "react"


export const EditEventModal = ({selectedEvent, handleCloseEditClick, updateEvent, deleteEvent}: {selectedEvent: Event | null, handleCloseEditClick: () => void, updateEvent: (id: string, newTitle: string) => void, deleteEvent: (id: string) => void}) => {
    const [editTitle,setEditTitle] = useState(selectedEvent?.title || '');
    const handleSave = () => {
        if(selectedEvent){
            updateEvent(selectedEvent.id, editTitle);
            handleCloseEditClick();
        }
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleCloseEditClick}>
            <div className="bg-white rounded-b-lg p-6 w-96 " onClick={(e)=>e.stopPropagation()}>
                {selectedEvent && (
                    <>
                      <div className="flex justify-between items-center" >
                        <h2 className="text-xl font-bold mb-2 text-gray-500">予定を編集</h2>
                        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={()=>{deleteEvent(selectedEvent.id); handleCloseEditClick()}}>削除</button>
                      </div>
                        <input
                        type="text"
                        value={editTitle}
                        onChange={(e)=>setEditTitle(e.target.value)}
                        className="w-full border rounded px-3 py-2 my-4 text-gray-500"
                        />
                        <p className="text-gray-500">{selectedEvent.date}</p>
                        <div className="flex gap-2 justify-end">
                            <button className="px-4 py-2 text-gray-600 border rounded" onClick={handleCloseEditClick}>キャンセル</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>保存</button>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}