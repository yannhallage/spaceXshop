import FirstRoute from "./routes/routeFirst";
import { context } from "./Context/contextProduct";
import { useContext, useState } from "react";

export default function App() {
  // Récupération du contexte
  const existingContext = useContext(context);

  // Création de l'état local si nécessaire
  const [products, setProducts] = useState();

  return (
    <context.Provider value={{ products, setProducts }}>
      <FirstRoute />
    </context.Provider>
  );
}
