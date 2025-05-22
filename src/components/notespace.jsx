import { useState , useEffect } from "react"
import Note from "./note"
import NoteAdd from "./noteadd" 
import NoteEdit from "./noteedit";

export default function NoteSpace(){
    const [noteList, setNoteList] = useState([]);
    const [editingNoteId , setEditingNoteId] = useState(null);
    useEffect(() => {
        if (localStorage.getItem('storedNotes')) {
            setNoteList(JSON.parse(localStorage.getItem('storedNotes')));
        }
    }, []);
    function addNote(newNote){
        setNoteList((prevNotes) => {
            const updatedNotes = [...prevNotes, newNote];
            localStorage.setItem('storedNotes', JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    }
    function deleteNote(id){
        setNoteList((prevNotes) => {
            const updatedNotes = prevNotes.filter((note) => note.id !== id);
            localStorage.setItem('storedNotes', JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    }
    function editNote(id){
        setEditingNoteId(id);
    }
    
    function saveEditedNote(id, updatedNote) {
        setNoteList((prevNotes) => {
            const updatedNotes = prevNotes.map(note => 
                note.id === id ? {...note, title: updatedNote.title, note: updatedNote.note} : note
            );
            localStorage.setItem('storedNotes', JSON.stringify(updatedNotes));
            return updatedNotes;
        });
        setEditingNoteId(null); // Exit edit mode
    }
    
    function cancelEdit() {
        setEditingNoteId(null);
    }
    
    return(
        <div className="flex flex-wrap items-center w-full gap-4 p-2 justify-center md:justify-start">
        <NoteAdd onAddNote={addNote} />
            {noteList.map((note) => (
                editingNoteId === note.id ? (
                    <NoteEdit 
                        key={note.id}
                        id={note.id}
                        initialTitle={note.title}
                        initialContent={note.note}
                        onSave={saveEditedNote}
                        onCancel={cancelEdit}
                    />
                ) : (
                    <Note 
                        key={note.id} 
                        id={note.id} 
                        Title={note.title} 
                        Content={note.note} 
                        onEdit={editNote} 
                        onDelete={deleteNote} 
                    />
                )
            ))}
        </div>
    )
}
