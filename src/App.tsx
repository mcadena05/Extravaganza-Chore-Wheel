import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility ] = useState(false);

  return (
    
     
    
    
    <div>
       

      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}> You gave Isaiah a hug!</Alert> }
      <Button onClick={() => 
        setAlertVisibility(true)
          
      
        }>Hug Isaiah 
      </Button>
    </div>
  )

}

export default App;
