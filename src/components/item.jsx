import { motion } from "framer-motion";

export const Item =(props)=> {
    return(
        <>
        <img style={{width : '377px' , height : '328px' 
            ,objectFit:'contain'}} src={props.im.img}/>
        <h4>{props.im.Year}</h4>
        </>
    );
}
    