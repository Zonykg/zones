"use client";
import { useEffect,useState } from "react";
import { useAppContext } from "../../../context/AppContext";
export default function ProductDetail({params}){
  const {id}=params;
  const [p,setP]=useState(null);
  const {favorites,toggleFavorite}=useAppContext();
  useEffect(()=>{fetch("https://fakestoreapi.com/products/"+id).then(r=>r.json()).then(d=>setP(d));},[id]);
  if(!p) return <p>Loading...</p>;
  return(
    <div>
      <h2>{p.title}</h2>
      <img src={p.image} width="150"/>
      <p>{p.description}</p>
      <p>{p.price}$</p>
      <button onClick={()=>toggleFavorite(p)}>
        {favorites.find(i=>i.id===p.id)?"★ Remove":"☆ Add"}
      </button>
    </div>);
}