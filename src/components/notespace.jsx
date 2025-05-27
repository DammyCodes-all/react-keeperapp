import { useState, useEffect , useReducer} from "react"
import Note from "./note"
import NoteAdd from "./noteadd" 
import NoteEdit from "./noteedit";
import LinearProgress from "@mui/material/LinearProgress";
// import { UpdateRounded } from "@mui/icons-material";

const UNDO_DURATION = 5000;
const initialState = {
    noteList : JSON.parse(localStorage.getItem('storedNotes')) || [],
    editingNoteId : null,
    isUndoVisible : false,
    notesBeforeDelete : [],
    searchedNotes : []
}

export default function NoteSpace({query}){
    const [state , dispatch] = useReducer(noteReducer , initialState)
    
    useEffect(() => {
        localStorage.setItem('storedNotes', JSON.stringify(state.noteList));
    }, [state.noteList]);
    
    useEffect(()=>{
        dispatch({type : 'search' , query : query.trim()})
    }, [query])

    function addNote(newNote){
        dispatch({ type : 'addNote', note : newNote})
    }
    
    function deleteNote(id){
        dispatch({ type: 'deleteNote', id })
    }
    function onUndo(){
        if (state.notesBeforeDelete) {
            dispatch({type : 'undoDelete' })
        }
    }
    function handleTimerComplete() {
        dispatch({type : 'undoTimercomplete'})
    }
    function editNote(id){
        dispatch({type : 'editNote' , id : id})
    }
    
    function saveEditedNote(id, updatedNote) {
        dispatch({type : 'saveEditedNote' , id : id , updatedNote : updatedNote});
    }
    function cancelEdit() {
        dispatch({type : 'undoEdit'})
    }
    
    const notesToDisplay = query.trim() ? state.searchedNotes : state.noteList;
    
    return(
        <div className="flex flex-wrap items-start w-full gap-4 p-4 justify-center md:justify-start">
            <NoteAdd onAddNote={addNote} />
            {notesToDisplay.map((note) => (
                state.editingNoteId === note.id ? (
                    <NoteEdit 
                        key={`edit-${note.id}`}
                        id={note.id}
                        initialTitle={note.title}
                        initialContent={note.note}
                        onSave={saveEditedNote}
                        onCancel={cancelEdit}
                    />
                ) : (
                    <Note 
                        key={`view-${note.id}`}  
                        id={note.id} 
                        Title={note.title} 
                        Content={note.note} 
                        onEdit={editNote} 
                        onDelete={deleteNote} 
                    />
                )
            ))}
            
            {state.isUndoVisible && 
                <UndoDelete 
                    onUndo={onUndo} 
                    duration={UNDO_DURATION}
                    onTimerComplete={handleTimerComplete} 
                />
            }
        </div>
    )
}

function UndoDelete({ onUndo, duration, onTimerComplete }) {
    const [progress, setProgress] = useState(100);
    
    useEffect(() => {
        const interval = 50; 
        const decrementPerStep = (interval / duration) * 100;
        
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress <= 0) {
                    clearInterval(timer);
                    onTimerComplete();
                    return 0;
                }
                return prevProgress - decrementPerStep;
            });
        }, interval);
        
        return () => clearInterval(timer);
    }, [duration, onTimerComplete]);
    
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-md px-3 py-2 rounded flex flex-col items-center z-50 min-w-[220px] max-w-[90vw] animate-fade-in">
            <div className="flex items-center justify-between w-full mb-1.5">
                <div className="flex items-center">
                    <span className="text-sm text-gray-800 dark:text-gray-200">Note deleted</span>
                </div>
                <button 
                    aria-label="Undo note deletion"
                    className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white px-2.5 py-0.5 rounded text-xs uppercase transition-colors duration-200"
                    onClick={onUndo}>
                    Undo
                </button>
            </div>
            <div className="w-full">
                <LinearProgress 
                    variant="determinate" 
                    value={progress} 
                    sx={{ 
                        height: 2,
                        borderRadius: 1,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        '.dark &': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                        },
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#f59e0b',
                            borderRadius: 1,
                            transition: 'transform 0.1s linear',
                        }
                    }}
                />
            </div>
        </div>
    );
}



function noteReducer(state , action){
    switch (action.type){
        case 'addNote':{
            const updatedNotes = {...state , noteList : [...state.noteList , action.note ]}
            return updatedNotes;
        }
        case 'deleteNote':{
            const filteredNotes = state.noteList.filter(note => note.id !== action.id)
            return {...state , noteList : filteredNotes , isUndoVisible : true , notesBeforeDelete : state.noteList}
        }
        case 'undoDelete' : {
            return {...state , noteList : state.notesBeforeDelete ,  isUndoVisible : false , notesBeforeDelete : []}
        }
        case 'saveEditedNote' : {
            const updatedNotes = state.noteList.map(note =>
                note.id === action.id ? {...note, title: action.updatedNote.title, note: action.updatedNote.note} : note
        );
            return {...state , editingNoteId : null , noteList : updatedNotes}
        }
        case 'editNote' : {
            return {...state , editingNoteId : action.id}
        }
        case 'undoEdit' : {
            return {...state , editingNoteId : null}
        }
        case 'undoTimercomplete':{
            return {...state , isUndoVisible : false , notesBeforeDelete : []}
        }
        case 'search' :{
            if(action.query === '') {
                return {...state, searchedNotes: []} // Reset when empty
            }
            const searchResult = state.noteList.filter((note) => 
                note.title.toLowerCase().includes(action.query.toLowerCase()) ||
                note.note.toLowerCase().includes(action.query.toLowerCase())
)
            return {...state , searchedNotes : searchResult}
        }
        default:
            return state;
    }
}