import FooterSpaceX from "../components/footerSpace";
import { dataMen } from "../hooks/dataProductComponent";
import RecentlyComponent from '../components/recentlyComponent';
import { context } from "../Context/contextProduct";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Womens = () => {
    const { setProducts } = useContext(context);
    const navigate = useNavigate();
    
    const executer = (item) => {
        setProducts(item); // Stocker l'objet entier au lieu de l'index
        navigate('/collection/Products');
    };

    return (
        <>
            <main>
                <section className="mt-11 text-3xl">
                    <div className="text-center">
                        <span>Womens</span>
                    </div>
                </section>

                <section className="mt-11">
                    <div className='container mx-auto'>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                            {dataMen.map((item, index) => (
                                <div 
                                    className="bg-white cursor-pointer animate__animated animate__fadeIn" 
                                    key={index} 
                                    onClick={() => executer(item)} // Passer l'objet produit entier
                                >
                                    <img src={item.name} alt="image" />
                                    <div className='p-3 text-center'>
                                        <p>
                                            SpaceX Starship Flight 8 T-Shirt <br /> 
                                            <span className='text-[14px]'>{item.price}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <RecentlyComponent text={""} />
                </section>
                <section>
                    <FooterSpaceX />
                </section>
            </main>
        </>
    );
};

export default Womens;
