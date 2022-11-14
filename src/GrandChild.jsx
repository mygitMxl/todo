import React from 'react';

const GrandChild = (props) => {
    return ( 
        <>
           <input placeholder='GrandChild' type="text" ref={props.inputRef} />
        </>
     );
}
 
export default GrandChild;