import Header from './components/header.jsx'
import NoteSpace from './components/notespace.jsx'

export default function App(){
    return(<>
    <div className="min-h-screen bg-gray-100 bg-[url(https://www.transparenttextures.com/patterns/cubes.png)] dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <NoteSpace />
    </div>
    </>
    )
}
