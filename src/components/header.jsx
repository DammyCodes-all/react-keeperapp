import EditNoteIcon from '@mui/icons-material/EditNote';

export default function Header(){
    return(
        <>
        <div className="w-full bg-yellow-500 h-15 shadow-lg flex items-center p-2">
            <EditNoteIcon className="text-white text-3xl ml-2" />
            <h1 className = "text-white text-2xl font-mclaren">Keeper</h1>
        </div>
        </>
    )
}
