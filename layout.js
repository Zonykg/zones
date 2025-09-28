"use client";
import { AppProvider, useAppContext } from "../context/AppContext";
function Header(){
  const {theme,setTheme}=useAppContext();
  return(
    <header>
      <a href="/">Home</a> | <a href="/favorites">Favorites</a>
      <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>
        {theme==="light"?"Dark":"Light"}
      </button>
    </header>
  );
}
export default function RootLayout({children}){
  return(<html><body><AppProvider><Header/>{children}</AppProvider></body></html>);
}