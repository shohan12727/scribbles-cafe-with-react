import './App.css'
import Blog from './component/Blog/Blog'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
     

      <div className="main-container flex text-center" >
        <div className="left-container w-[70%] border">
         
          <Blog></Blog>

          
          </div>
        <div className="right-container w-[30%] border ">
        <h1>Reading time: 0</h1>
        <h1>Bookmarked Count: 0</h1>
        </div>
         
         </div>
       
    </>
  )
}


export default App
