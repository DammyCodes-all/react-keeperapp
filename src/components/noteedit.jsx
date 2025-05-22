import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const NoteEdit = ({id, initialTitle, initialContent, onSave, onCancel }) => {
    const [editNote, setEditNote] = useState({title: initialTitle || '', note: initialContent || ''})
    
    function handleSubmit(){
        onSave(id, {
            title: editNote.title,
            note: editNote.note
        })
    }    return(
        <div className="w-4/5 md:w-80 p-4 shadow-md rounded-md bg-white flex flex-col gap-2 justify-start min-h-[100px]">              
            <input 
                type="text"  
                className="w-full border-amber-500 border-b focus:outline-none" 
                name="title" 
                value={editNote.title} 
                onChange={(e) => setEditNote({...editNote, title: e.target.value})} 
            />
            <textarea 
                type="text"  
                className="w-full border-amber-500 border-b focus:outline-none min-h-[40px] max-h-[200px] overflow-y-auto resize-none" 
                name="note" 
                value={editNote.note} 
                onChange={(e) => setEditNote({...editNote, note: e.target.value})}
            ></textarea>
            <div className="flex justify-end gap-2">
                <button title="Save edit" className="px-2 py-1 bg-amber-500 text-white rounded-md hover:bg-amber-600 min-w-[40px] flex items-center justify-center" onClick={handleSubmit}>
                    <SaveIcon fontSize="small" />
                </button>
                <button title="Cancel Edit" className="px-2 py-1 bg-neutral-200 rounded-md hover:bg-neutral-300 min-w-[40px] flex items-center justify-center" onClick={onCancel}>
                    <CloseIcon fontSize="small" />
                </button>
            </div>
        </div>
    )
}

export default NoteEdit