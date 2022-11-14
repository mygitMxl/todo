import React from 'react'
const Password = (props) => {
    let {pwdname,id}=props;
    return ( 
        <div>
            <label htmlFor={id}>{pwdname}</label>
            <input type="password" id={id} />
        </div>
     );
}
 
export default Password;