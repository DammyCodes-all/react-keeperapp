import { useState , useEffect } from "react"

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div className="w-60 p-4 shadow-md rounded-md bg-white">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
function Timer(){
    const [time, setTime] = useState('Timer');
    const [isActive, setIsActive] = useState(false);
    useEffect(()=>{
        let timer;
        if(isActive){
            timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            } , 1000)
        }
        return () => {clearInterval(timer)}
    }, [isActive])
    return(
        <div className="w-60 p-4 shadow-md rounded-md bg-white">
        <p>{time}</p>
        <button className="cursor-pointer p-1 bg-amber-300 rounded-sm" onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Stop Timer' : 'Start Timer'}
        </button>
        </div>
    ) 
}



function Note({Title , Content}){
    return(
        <div className = "w-60 p-4 shadow-md rounded-md bg-white ">
            <p>{Title}</p>
            <p>{Content}</p>
        </div>
    )
}
export default function NoteSpace(){
    return(
        <div className="flex flex-wrap items-center w-full gap-4 p-2 justify-center md:justify-start">
        <Note Title = 'My own Title' Content = 'My own Content'/>
        <Note Title = 'My own Title' Content = 'My own Content'/>
        <Note Title = 'My own Title' Content = 'My own Content'/>
        <Note Content = 'To write react / js code' Title = 'Tommorows task' />
        {addedNotes.map((note) => (
            <Note key={note.id} Title={note.Title} Content={note.Content} />
        ))}
        <Counter />
        <Timer />
        </div>
    )
}


const addedNotes = [{id: 1, Title: 'My own Title', Content: 'My own Content'},
                    {id: 2, Title: 'Tommorows task', Content: 'To write react / js code'},
                    {id: 3, Title: 'New Note', Content: 'This is a new note'}]