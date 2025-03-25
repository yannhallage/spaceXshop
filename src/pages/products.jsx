import { useContext, useState } from "react";
import FooterSpaceX from "../components/footerSpace";
import { context } from "../Context/contextProduct";
import "../styles/button.css";
import RecentlyComponent from "../components/recentlyComponent";

const Products = () => {
    const { products } = useContext(context);
    const [count, setCount] = useState(1);

    // Augmenter la quantité
    const addPacket = () => {
        setCount(count + 1);
    };

    // Diminuer la quantité (sans aller en dessous de 1)
    const reducePacket = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    // Vérification si products est défini
    if (!products) {
        return (
            <main>
                <section className="mt-11 text-center">
                    <p className="text-xl text-gray-500">Aucun produit sélectionné.</p>
                </section>
                <FooterSpaceX />
            </main>
        );
    }

    return (
        <>
            <main>
                <section className="mt-11">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 p-4 animate__animated animate__fadeIn">
                            {/* Image du produit */}
                            <div>
                                <img src={products.name} alt={products.name} className="w-full rounded-lg shadow-md" />
                            </div>

                            {/* Détails du produit */}
                            <div className="p-3">
                                <h2 className="text-2xl font-bold">
                                    Unisex Starship Flight <br /> 8 T-Shirt
                                </h2>

                                <div className="mt-5 text-xl">
                                    <span className="font-semibold">${products.price}.00</span>
                                </div>

                                <hr className="my-4 border-gray-300" />

                                <div className="mt-7 space-y-4 text-[13px]">
                                    <div>
                                        <span className="font-bold text-gray-700">Fabric Content</span>
                                        <p className="text-gray-600">Small-5X: 60% Cotton / 40% Polyester</p>
                                    </div>

                                    {/* Sélection de la taille */}
                                    <div>
                                        <span className="text-gray-700">Size:</span>
                                        <button className="border p-4 w-full flex justify-between items-center">
                                            <span className="text-gray-700">XS</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Sélection de la quantité */}
                                    <div>
                                        <span className="text-gray-700">Quantity:</span>
                                        <div className="flex items-center border w-32 p-3 justify-between">
                                            <button
                                                className="text-gray-700 hover:text-black"
                                                onClick={reducePacket}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                </svg>
                                            </button>
                                            <span>{count}</span>
                                            <button
                                                className="text-gray-700 hover:text-black"
                                                onClick={addPacket}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Bouton Ajouter au panier */}
                                    <div>
                                        <button className="border w-full p-4 text-white bg-black cursor-pointer hover:bg-gray-800" id="addToCart">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <RecentlyComponent text={""} /> */}
                <FooterSpaceX />
            </main>
        </>
    );
};

export default Products;
