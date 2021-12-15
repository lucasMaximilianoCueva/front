import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router-dom";

const Sidebar = ({id}) => {
    const {logOut} = useContext(UserContext);
    const {push} = useHistory()

    const handleLogOut = () => {
        logOut()
        push('/')
    }
    
  

    return (
        <div className="col-md-4 col-lg-3 pr-md-4">
            <ul className="sidebar__menu">
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}`} activeClassName="sidebar--active bold" className='sidebar__link'>
                    Dashboard
                    <span className='sidebar__icon'>
                      <AiFillDashboard />
                    </span>
                  </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}/perfil`} activeClassName="sidebar--active  bold" className='sidebar__link'>
                  Mi perfil
                  <span className='sidebar__icon'>
                    <FaUser />
                  </span>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}/postulaciones`} activeClassName="sidebar--active  bold" className='sidebar__link'>
                  Mis postulaciones
                  <span className='sidebar__icon'>
                    <RiFileCopy2Fill />
                  </span>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}/guardado`} activeClassName="sidebar--active  bold" className='sidebar__link'>
                  Guardados
                  <span className='sidebar__icon'>
                    <MdOutlineWork />
                  </span>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <button 
                  className='sidebar__link border-0 ' 
                  style={{backgroundColor: 'transparent'}}
                  onClick={handleLogOut}
                  >
                  Salir
                  <span className='sidebar__icon'>
                    <IoExit />
                  </span>
                </button>
              </li>
            </ul>
        </div>
    );
};

export default Sidebar;
