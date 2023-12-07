import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import DropDown from "./DropDown";
import { auto } from "@popperjs/core";
import './Navbar.css';

const MenuItems = ({items,dephtlevel}) =>{
    const [dropdown,setDropDown] =useState(false);
    
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    let ref=useRef();

    useEffect(() =>{
        const handler = (event) =>{
            if(dropdown && ref.current && !ref.current.contains(event.target)){
                setDropDown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return() =>{
            document.removeEventListener("mousedown",handler);
            document.removeEventListener("touchstart", handler);
        };
    },[dropdown]);
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropDown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropDown(false);
    };
    return(
        <li
        className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        {
        items.submenu ? (
            <>
            <Link style={{ color: null, padding: 0, height:auto, margin:null, width: null}} to={`${items.ruta}`}>
            <button type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{color: hovered ? 'black':items.color}}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true": "false"}
            onClick={()=>setDropDown((prev)=>!prev)}
            >
                {items.title}{" "} {dephtlevel > 0 ? <span> &raquo;</span>:<span className="arrow"/>}
            </button></Link><DropDown dephtlevel={dephtlevel} submens={items.submenu} dropdown={dropdown}/></>
        ) : (<Link style={{ color: null, padding: 0, height:auto, margin:null, width: null}} to={`${items.ruta}`}><a href="/#" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{color: hovered ? 'black':items.color}}>{items.title}</a></Link>)
        }
        </li>
    );
};
export default MenuItems