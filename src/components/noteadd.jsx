import { useState} from "react"; 

export default function NoteAdd({ onAddNote, id, initialTitle = '', initialContent = '', isEditing = false, onSave, onCancel }){
    const [noteData, setNoteData] = useState({title: initialTitle, note: initialContent});

    
    function handleSubmit(){
        if (isEditing) {
            onSave(id, {
                title: noteData.title,
                note: noteData.note
            });
        } else {
            let id = parseInt(localStorage.getItem('id') || 0) + 1;
            localStorage.setItem('id', id.toString());
            const newNote = {
                id: id,
                title: noteData.title,
                note: noteData.note
            };
            onAddNote(newNote);
            setNoteData({title: '', note: ''});
        }
    }
    
    return(
        <div className="w-60 p-4 shadow-md rounded-md bg-white flex flex-col gap-2 justify-start">
            <input 
                type="text" 
                className="border-amber-500 focus:border-b focus:outline-none" 
                name="title" 
                placeholder="Add title" 
                value={noteData.title} 
                onChange={(e) => setNoteData({...noteData, title: e.target.value})} 
            />
            <textarea 
                type="text" 
                className="border-amber-500 focus:border-b focus:outline-none min-h-[40px] max-h-[200px] overflow-y-auto resize-none" 
                name="note" 
                placeholder="Add note" 
                value={noteData.note} 
                onChange={(e) => setNoteData({...noteData, note: e.target.value})}
            ></textarea>
            
            {isEditing ? (<div className="flex justify-end gap-2">
                    <button title="Save edit" className="fas fa-save x-2 py-1 bg-amber-500 text-white rounded-md hover:bg-amber-600 min-w-[40px]" onClick={handleSubmit}>  </button>
                    <button title="Cancel Edit" className="fas fa-times min-w-[40px] px-2 py-1 bg-neutral-200 rounded-md hover:bg-neutral-300" onClick={onCancel}></button>
                </div>
            ) : (
                <button 
                    className="w-8 h-8 rounded-full cursor-pointer self-end flex items-center justify-center transition-transform hover:bg-neutral-200 duration-150"
                    onClick={handleSubmit}
                >
                    <i className="fas fa-plus text-amber-500"></i>
                </button>
            )}
        </div>
    );
}