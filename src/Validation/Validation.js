import React from 'react';

const validation = (props) => {

    let msg = "Text too small !";
    
    if(props.length > 5) {
        msg = "Text long enough !"
    }

    return (
        <div>
            <p>{msg}</p>
        </div>
    )
}

export default validation