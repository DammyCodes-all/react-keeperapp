import { useState } from "react";

export default function NoteAdd({ onAddNote }){
    const [noteData, setNoteData] = useState({title : '' , note : ''});
    function handleClick(){
        let id = parseInt(localStorage.getItem('id') || 0) + 1
        localStorage.setItem('id', id.toString());
        const newNote = {
            id : id,
            title: noteData.title,
            note: noteData.note}
        onAddNote(newNote);
        setNoteData({title: '', note: ''});
    }
    return(
        <div className = "w-60 p-4 shadow-md rounded-md bg-white flex flex-col gap-2 justify-start">
            <input type="text" className="border-amber-500 focus:border-b focus:outline-none" name="title" placeholder= "Add title" value={noteData.title} onChange={(e) => setNoteData({...noteData, title: e.target.value})} />
            <textarea type="text" className="border-amber-500 focus:border-b focus:outline-none  min-h-[40px] max-h-[200px] overflow-y-auto resize" name="note" placeholder= "Add note" value={noteData.note} onChange={(e) => setNoteData({...noteData, note: e.target.value})}></textarea>
            <button className="fas fa-plus w-8 h-8 rounded-full cursor-pointer  self-end transition-transform  hover:bg-neutral-200 duration-150" onClick={handleClick}></button>
        </div>
    )
}


