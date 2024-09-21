import React from 'react';
import Card from './Components/Card';
import Practice from './Components/Practice';
import Trail from './Components/Trail';
import Button from './Components/Button';

function App(){

    return(
        <div>
            {/* <Card/> */}
            {/* <Practice/> */}
            {/* <Trail/> */}
            <Button text="Know more" color="bg-blue-500"/>
            <Button text="Downlaod" color="bg-red-500"/> 
        </div>
    );
}

export default App;