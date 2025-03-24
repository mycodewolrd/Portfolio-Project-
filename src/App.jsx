import { useState } from "react";
import Navbar from "./components/NavBar/navbar.jsx";
import MobileMenu from "./components/NavBar/MobileMenu.jsx";


const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    );
};

export default App;