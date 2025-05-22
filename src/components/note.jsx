import { useState} from "react"


export default function Note({Title , Content , id , onDelete , onEdit}){
    const [checked , setChecked] = useState(false)
    function handleClick(){
        onDelete(id);
    }
    function handleEdit(){onEdit(id)}
    
    return(
        <div className = "w-60 p-4 shadow-md rounded-md bg-white relative min-h-[100px]">
            <div title="Done task" className = "absolute flex flex-col gap-1 top-2 items-center justify-center w-[30px] right-2 border-0 rounded-md bg-neutral-200 p-1">
                <button className={`w-5 h-5  ${checked ? 'text-green-500' : 'text-amber-500'}  flex items-center justify-center rounded-full hover:bg-neutral-100`} onClick = {()=>{setChecked(!checked)}}>
                    <i className={`fas fa-check text-[13px]`}></i>
                </button>
                <button title="Edit note" className="w-5 h-5 text-amber-500 hover:text-amber-600 flex items-center justify-center rounded-full hover:bg-neutral-100" onClick={handleEdit}>
                    <i className="fas fa-edit text-[13px]"></i>
                </button>
                <button title="Delete note" className="w-5 h-5 text-amber-500 hover:text-red-600 flex items-center justify-center rounded-full hover:bg-neutral-100" onClick={handleClick}>
                    <i className="fas fa-trash text-[13px]"></i>
                </button>
            </div>
            <div className="mr-[29px]">
                <div className="flex items-center gap-2 w-full ">
                    <p className="w-2 h-2 rounded-full bg-amber-500"></p>
                    <h3 className={`font-bold ${checked ? 'line-through' : ''}`}>{Title}</h3>
                </div>
                <p className = {` ${checked ? 'line-through' : ''}`} >{Content}</p>
            </div>
            </div>
    )
}