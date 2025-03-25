import FirstRoute from "./routes/routeFirst";
import { context } from "./Context/contextProduct";
import { useContext, useState } from "react";

export default function App() {
 
  // Création de l'état local si nécessaire
  const [products, setProducts] = useState();
  const [productsvalidate, setProductsvalidate] = useState(0);
  const [compte,setCompte] = useState(0)
  const [quantite,setquantite] = useState(0)


  return (
    <context.Provider value={{ products, setProducts,productsvalidate, setProductsvalidate,compte,setCompte,quantite,setquantite}}>
      <FirstRoute />
    </context.Provider>
  );
}
