import React from 'react';

const validation = (props) => {
    let inputMessage = '';

    if( props.inputLength <=5)
    {
        inputMessage = 'Text too Short! :(';
    } else if ( props.inputLength >= 10)
    {
           inputMessage = 'Text too Long! :0'; 
    } else {
        inputMessage = 'Text too enough! :)';

    }

    return(
        <div>
            <p>test! ;-)</p>
            <p>{inputMessage}</p>
        </div>
    )
}

export default validation;