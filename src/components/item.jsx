import { motion } from "framer-motion";

export const Item =(props)=> {
    return(
        <>
        <img style={{width : '377px' , height : '328px' 
            ,objectFit:'contain'}} src={props.im.img}/>
        {props.score?  <h4>{props.im.Score}</h4> :  <h4>{props.im.Year}</h4> }
        </>
    );
}
    