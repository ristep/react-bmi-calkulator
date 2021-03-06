import React from "react";
import { Button, Container } from "react-bootstrap";
import ReactJson from "react-json-view";
import { useAuthData } from "hooks/authData";
import { useBmiHistory } from "hooks/useBmiHistory";
import { usePsAlert } from "hooks/usePsAlert";

const About = (props) => {
  const { setTheme } = props;
  const { authData } = useAuthData();
  const { data:bmiData } = useBmiHistory({userID: authData.data.id}); 

  const Alert = usePsAlert({
    title:<h3>Important!</h3>,
    body:<p>This is an example of a custom alert component</p>,
    buttons:[ 
    { text: "Cancel", variant: "secondary", value: false },
    { text: " OK de ",  variant: "primary", value: true },
    ]
  });

  const them = (theme) => ("./styles/" + theme + "/main.css" );

  return (
    <Container>
      <Alert.Tag />
      <Button onClick={() => Alert.show(()=>alert('Tamam e'))  }>Show Alert</Button>
      <Button onClick={() => Alert.show()  }>Show Alert no func()</Button>
      <h3>Choose Botswatch theme</h3>
      <Button style={{backgroundColor:"rgb(217, 227, 241)"}} onClick={()=>setTheme(them("Morph"))}>Morph</Button>
      <Button style={{backgroundColor:"rgb(120, 194, 173)"}} onClick={()=>setTheme(them("Minty"))}>Minty</Button>
      <Button style={{backgroundColor:"rgb(44, 62, 80)"}}    onClick={()=>setTheme(them("Flatly"))}>Flatly</Button>
      <Button style={{backgroundColor:"rgb(47, 164, 231)"}}  onClick={()=>setTheme(them("Cerulean"))}>Cerulean</Button>
      <Button style={{backgroundColor:"rgb(69, 130, 236)"}}  onClick={()=>setTheme(them("Litera"))}>Litera</Button>
      <ReactJson src={bmiData} />
   </Container>
  );

}

export default About;