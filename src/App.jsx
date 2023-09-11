import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Booksmarks/BookMarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>

    </>
  )
}

export default App