import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note({Title , Content , id , onDelete , onEdit}){
    const [checked , setChecked] = useState(false)
    function handleClick(){
        onDelete(id);
    }
    function handleEdit(){onEdit(id)}
      return(
        <div className="w-4/5 md:w-75 p-4 shadow-md rounded-md bg-white dark:bg-gray-800 relative min-h-[120px] transition-colors duration-300">
            <div title="Done task" className="absolute flex flex-col gap-1 top-2 items-center justify-center w-[30px] right-2 border-0 rounded-md bg-neutral-200 dark:bg-gray-700 p-1 transition-colors duration-300">
                <button className={`w-6 h-6  ${checked ? 'text-green-500' : 'text-amber-500'}  flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-gray-600`} onClick = {()=>{setChecked(!checked)}}>
                    <CheckIcon fontSize="x-small" />
                </button>
                <button title="Edit note" className="w-6 h-6 text-amber-500 hover:text-amber-600 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-gray-600" onClick={handleEdit}>
                    <EditIcon fontSize="x-small" />
                </button>
                <button title="Delete note" className="w-6 h-6 text-amber-500 hover:text-red-600 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-gray-600" onClick={handleClick}>
                    <DeleteIcon fontSize="x-small" />
                </button>
            </div>
            <div className="pr-[35px] w-full">
                <div className="flex items-center gap-2 w-full">
                    <p className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></p>
                    <h3 className={`font-bold ${checked ? 'line-through' : ''} break-words dark:text-white`}>{Title}</h3>
                </div>
                <p className={`${checked ? 'line-through' : ''} break-words mt-2 dark:text-gray-300`}>{Content}</p>
            </div>
        </div>
    )
}