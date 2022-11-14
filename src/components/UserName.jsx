import React from 'react';

const UserName = (props) => {
    let {name}=props;
    return ( 
        <div>
          <label htmlFor="userName">{name}</label>
          <input type="text" id="userName" />
        </div>
     );
}
 
export default UserName;