import React from 'react'
import Style from "../css/bootstrap.min.css"
const Button = (props) => {
    let {txt}=props;
    let className=Style.btn+" "+Style["btn-primary"];
    return ( 
        <div>
            <input className={className} type="button" defaultValue={txt}/>
        </div>
     );
}
 
export default Button;