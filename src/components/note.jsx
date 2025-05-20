import { useState , useEffect } from "react"


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



function NoteAdd({ onAddNote }){
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




function Note({Title , Content , id , onDelete}){
    const [checked , setChecked] = useState(false)
    function handleClick(){
        onDelete(id);
    }
    return(
        <div className = "w-60 p-4 shadow-md rounded-md bg-white relative min-h-[100px]">
            <div className = "absolute flex flex-col gap-1 top-2 items-center justify-center w-[30px] right-2 border-0 rounded-md bg-neutral-200 p-1">
                <button className="w-5 h-5 text-amber-500 hover:text-amber-600 flex items-center justify-center rounded-full hover:bg-neutral-100" onClick = {()=>{setChecked(!checked)}}>
                    <i className={`fas ${checked? 'fa-times' : 'fa-check'} text-[13px]`}></i>
                </button>
                <button className="w-5 h-5 text-amber-500 hover:text-amber-600 flex items-center justify-center rounded-full hover:bg-neutral-100">
                    <i className="fas fa-edit text-[13px]"></i>
                </button>
                <button className="w-5 h-5 text-amber-500 hover:text-red-600 flex items-center justify-center rounded-full hover:bg-neutral-100" onClick={handleClick}>
                    <i className="fas fa-trash text-[13px]"></i>
                </button>
            </div>
            <div className="flex items-center gap-2 w-full">
                <p className="w-2 h-2 rounded-full bg-amber-500"></p>
                <h3 className={`font-bold ${checked ? 'line-through' : ''}`}>{Title}</h3>
            </div>
            <p className = {` ${checked ? 'line-through' : ''}`}>{Content}</p>
        </div>
    )
}