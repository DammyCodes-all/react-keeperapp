import { useState , useEffect } from "react"


export default function NoteSpace(){
    const [noteList, setNoteList] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('notes')) {
            setNoteList(JSON.parse(localStorage.getItem('notes')));
        }
    }, []);
    function addNote(newNote){
        setNoteList((prevNotes) => {
            const updatedNotes = [...prevNotes, newNote];
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    }
    return(
        <div  className="flex flex-wrap items-center w-full gap-4 p-2 justify-center md:justify-start">
        <NoteAdd onAddNote={addNote} />
        {noteList.map((note , index) => (
            <Note key={index} Title = {note.title} Content = {note.note} />
        ))}
        </div>
    )
}
function NoteAdd({ onAddNote }){
    const [noteData, setNoteData] = useState({title : '' , note : ''});
    function handleClick(){
        const newNote = {
            title: noteData.title,
            note: noteData.note}
        onAddNote(newNote);
        setNoteData({title: '', note: ''});
    }
    return(
        <div className = "w-60 p-4 shadow-md rounded-md bg-white flex flex-col gap-2 justify-start">
            <input type="text" className="border-amber-500 focus:border-b focus:outline-none" name="title" placeholder= "Add title" value={noteData.title} onChange={(e) => setNoteData({...noteData, title: e.target.value})} />
            <textarea type="text" className="border-amber-500 focus:border-b focus:outline-none  min-h-[40px] max-h-[200px] overflow-y-auto resize" name="note" placeholder= "Add note" value={noteData.note} onChange={(e) => setNoteData({...noteData, note: e.target.value})}></textarea>
            <button className="w-8 h-8 rounded-full cursor-pointer material-icons self-end transition-transform  hover:bg-neutral-200 duration-150" onClick={handleClick}>add</button>
        </div>
    )
}
function Note({Title , Content}){
    return(
        <div className = "w-60 p-4 shadow-md rounded-md bg-white ">
            <div className="flex items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-amber-500"></p>
                <h3 className="font-bold">{Title}</h3>
            </div>
            <p>{Content}</p>
        </div>
    )
}