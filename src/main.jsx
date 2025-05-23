// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )







































import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AuthContext from './contextfolder/AuthContext.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
       
                <App />
        
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);
