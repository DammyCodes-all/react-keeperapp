import { useState } from "react"; 
import AddIcon from '@mui/icons-material/Add';

export default function NoteAdd({ onAddNote }){
    const [noteData, setNoteData] = useState({title: '', note: ''});
    const [isInputFocused, setIsInputFocused] = useState(false);

    function handleSubmit(){ 
            let id = parseInt(localStorage.getItem('id') || 0) + 1;
            localStorage.setItem('id', id.toString());
            const newNote = {
                id: id,
                title: noteData.title,
                note: noteData.note
            };
            onAddNote(newNote);
            setNoteData({title: '', note: ''});
            setIsInputFocused(false);    }    
    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-4/5 md:w-80 p-4 shadow-lg rounded-md bg-white dark:bg-gray-800 flex flex-col gap-2 justify-start transition-colors duration-300">
            {isInputFocused ?
            <>
            <input 
                type="text"  className="w-full border-amber-500 focus:border-b focus:outline-none bg-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400"  name="title"  placeholder="Title" value={noteData.title} 
                onChange={(e) => setNoteData({...noteData, title: e.target.value})} 
            />
            <textarea type="text"  className="w-full border-amber-500 focus:border-b focus:outline-none min-h-[40px] max-h-[200px] overflow-y-auto resize-none bg-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400" name="note" placeholder="Take a note...." value={noteData.note} rows={1}
                onChange={(e) => setNoteData({...noteData, note: e.target.value})}></textarea>            
            <button  className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 shadow-sm cursor-pointer self-end flex items-center justify-center transition-all hover:bg-neutral-200 dark:hover:bg-gray-600 duration-150"  onClick={handleSubmit}>
                <AddIcon className="text-amber-500" />
            </button> 
            </>: 
            <input type="text" className="w-full border-amber-500 focus:border-b focus:outline-none bg-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400" name="title" placeholder="Take a note....." value={noteData.title} 
                onChange={(e) => setNoteData({...noteData, title: e.target.value})} 
                onFocus={() => setIsInputFocused(true)}/>
            }
        </div>
        </div>
        
    );
}