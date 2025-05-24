import { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const NoteEdit = ({id, initialTitle, initialContent, onSave, onCancel }) => {
    const [editNote, setEditNote] = useState({title: initialTitle || '', note: initialContent || ''})
    
    function handleSubmit(){
        onSave(id, {
            title: editNote.title,
            note: editNote.note
        })    }    return(
        <div className="w-4/5 md:w-80 p-4 shadow-md rounded-md bg-white dark:bg-gray-800 flex flex-col gap-2 justify-start min-h-[100px] transition-colors duration-300">              
            <input 
                type="text"  
                className="w-full border-amber-500 border-b focus:outline-none bg-transparent dark:text-white" 
                name="title" 
                value={editNote.title} 
                onChange={(e) => setEditNote({...editNote, title: e.target.value})} 
            />
            <textarea 
                type="text"  
                className="w-full border-amber-500 border-b focus:outline-none min-h-[40px] max-h-[200px] overflow-y-auto resize-none bg-transparent dark:text-white" 
                name="note" 
                value={editNote.note} 
                onChange={(e) => setEditNote({...editNote, note: e.target.value})}
            ></textarea>
            <div className="flex justify-end gap-2">
                <button title="Save edit" className="px-2 py-1 bg-amber-500 text-white rounded-md hover:bg-amber-600 min-w-[40px] flex items-center justify-center" onClick={handleSubmit}>
                    <CheckIcon fontSize="small" />
                </button>
                <button title="Cancel Edit" className="px-2 py-1 bg-neutral-200 dark:bg-gray-700 dark:text-white rounded-md hover:bg-neutral-300 dark:hover:bg-gray-600 min-w-[40px] flex items-center justify-center transition-colors duration-300" onClick={onCancel}>
                    <CloseIcon fontSize="small" />
                </button>
            </div>
        </div>
    )
}

export default NoteEdit