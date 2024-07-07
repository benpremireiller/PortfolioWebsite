import React from 'react';
import { Link } from 'react-router-dom';
import { IoPeople, IoLibrary, IoGameController } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Games, Gallery, and Staff Pages  */}
        <Link to="/"><FaHouseChimney /> Home</Link>
        <Link to="./topics"><IoLibrary /> Topics</Link>
        <Link to="./games"><IoGameController /> Games</Link>
        <Link to="./gallery"><GrGallery/> Gallery</Link>
        {/*<Link to="./contact"><MdOutlineConnectWithoutContact /> Contact</Link> */}
        <Link to="./order"><TbBusinessplan/> Order</Link>
        <Link to="./staff"><IoPeople/> Staff</Link>
    </nav>
  );
}

export default Navigation;
