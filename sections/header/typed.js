import {useEffect, useRef} from "react";
import TypedT from 'typed.js';

export default function Typed() {

    const element = useRef(null);

    useEffect(() => {
        const typed = new TypedT(element.current, {
            strings: ["A creative web Developer... ", "Micro-services developer" , "Spring developer", "Angular developer", "JHipster enthusiast", "Coffee lover"],
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (<span ref={element}/>);

}
