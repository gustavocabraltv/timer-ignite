import { HeaderContainer } from "./styles";
import logoIgnite from '../../assets/Logo.svg'
import {Timer, Scroll} from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header(){
    return(
    <HeaderContainer>
       <img src={logoIgnite}/>
        <nav> 
            <NavLink to="/history">
                <Timer size={24} />
            </NavLink>

            <NavLink to="/" end>
                 <Scroll size={24} />
            </NavLink>

        </nav>
    </HeaderContainer>)
}