import FooterSpaceX from "../components/footerSpace";
import { dataRecentlyViewed } from "../hooks/dataProductComponent";
import { dataMen } from "../hooks/dataProductComponent";


const Mens = () => {
    return (
        <>

            <main>
                <section className="mt-11 text-3xl ">
                    <div className="text-center ">
                        <span>Mens</span>
                    </div>
                </section>

                <section className="mt-11">
                    <div className='container mx-auto'>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
                            {
                                dataMen.map((item, index) => {
                                    return (
                                        <>
                                            <div className="bg-white cursor-pointer animate__animated animate__fadeIn" key={index}>
                                                <img src={item.name} alt="image" />
                                                <div className=' p-3  text-center'>
                                                    <p>
                                                        SpaceX Starship Flight 8 T-Shirt <br /> <span className='text-[14px]'>{item.price}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <FooterSpaceX />
                </section>
            </main>
        </>
    )
}

export default Mens;