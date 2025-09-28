"use client";
import { useAppContext } from "../../context/AppContext";
export default function FavoritesPage(){
  const {favorites,toggleFavorite}=useAppContext();
  return(
    <div>
      <h2>Favorites</h2>
      {favorites.length===0&&<p>No favorites</p>}
      {favorites.map(p=>(
        <div key={p.id}>
          <img src={p.image} width="80"/> {p.title} - {p.price}$
          <button onClick={()=>toggleFavorite(p)}>Remove</button>
        </div>
      ))}
    </div>);
}