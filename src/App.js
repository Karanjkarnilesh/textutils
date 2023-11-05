import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Routes,
} from "react-router-dom";

function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{setAlert(null)},2000)
  }
const toggleMode=()=>{
  console.log("modeClick");
  if(mode==='light')
  {
setMode('dark');
showAlert('set Dark mode','success');
document.body.style.backgroundColor='#042747';
  }else{
setMode('light');
document.body.style.backgroundColor='white';
showAlert('set Light mode','success');
  }
}

  
  return (
    
    <>
   
<Navbar title="Textutils2" mode={mode} toggleMode={toggleMode} />
  
  
  {/* <About/> */}



<TextForm heading="Enter Text in TextArea" mode={mode} showAlert={showAlert}/>

</>
  );
}



export default App;
