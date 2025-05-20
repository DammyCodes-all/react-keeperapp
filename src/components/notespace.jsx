import { useState , useEffect } from "react"
import Note from "./note"
import NoteAdd from "./noteadd" 

export default function NoteSpace(){
    const [noteList, setNoteList] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('storedNotes')) {
            setNoteList(JSON.parse(localStorage.getItem('storedNotes')));
        }
    }, []);
    function addNote(newNote){
        setNoteList((prevNotes) => {
            console.log(newNote)
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
    return(
        <div  className="flex flex-wrap items-center w-full gap-4 p-2 justify-center md:justify-start">
        <NoteAdd onAddNote={addNote} />
        {noteList.map((note) => (
            <Note key={note.id} id = {note.id} Title = {note.title} Content = {note.note} onDelete={deleteNote} />
        ))}
        </div>
    )
}
