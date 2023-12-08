import React from "react";
import { NavLink } from 'react-router-dom';
import DotsVertical from '../assets/icons/dots_vertical.svg';
import BotonLike from '../assets/icons/boton_like.svg';
import BotonComentarios from "../assets/icons/boton_comentarios.svg";

const Publication = ({ gato }) => {
  let { perfil, nombre, fecha, imagen, likes, comments, text } = gato;

  return (
    <div className="pt-4 pb-4 border-b-2 border-gray">
      <div className="flex h-10">
        <div className="h-full w-16 pl-4">
          <div className="w-11 h-10 rounded-full overflow-hidden">
            <NavLink to="/perfil">
              <img src={perfil} className="object-cover w-full h-full" />  
            </NavLink>
          </div>
        </div>
        <div className="w-64 text-black flex flex-col items-start justify-center ml-2">
          <NavLink to="/perfil">
            <p className="text-base text-white">{nombre}</p>
            <p className="text-sm text-light-gray">{fecha}</p>  
          </NavLink>
          
        </div>
        <div className="h-full w-10">
          <img src={DotsVertical} className="p-2" />
        </div>
      </div>

      {text && (
        <div className="text-sm text-left pl-4 pr-4 mt-2">
          <p className="text-white">{text}</p>
        </div>
      )}

      <div className="p-4">
        <img src={imagen} className="object-cover w-full rounded-2xl" />
      </div>

      <div className="flex pl-4 gap-4 text-white">
        <NavLink to="/likes" className="flex gap-2">
          <img src={BotonLike} /> {likes}
        </NavLink>
        <NavLink to="/comments" className="flex gap-2">
          <img src={BotonComentarios} /> {comments}
        </NavLink>
      </div>
    </div>
  );
};

export default Publication;
