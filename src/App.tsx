import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element= {<ListEmployeeComponent/>}></Route>
          <Route path='/addEmployee' element= {<EmployeeComponent/>}></Route>
          <Route path='/editEmployee/:id' element= {<EmployeeComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
