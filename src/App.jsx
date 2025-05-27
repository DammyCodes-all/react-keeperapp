import Header from './components/header.jsx'
import NoteSpace from './components/notespace.jsx'
import {useState} from 'react'

export default function App(){
    const [searchQuery , setSearchQuery] = useState('')
    function handleQuery(query){
        setSearchQuery(query)
    }
    return(<>
    <div className="min-h-screen bg-gray-100 bg-[url(https://www.transparenttextures.com/patterns/cubes.png)] dark:bg-gray-900 transition-colors duration-300">
        <Header handleQuery = {handleQuery} />
        <NoteSpace query = {searchQuery} />
    </div>
    </>
    )
}
