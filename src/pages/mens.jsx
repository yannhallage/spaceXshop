import FooterSpaceX from "../components/footerSpace";
import { dataPoduct } from "../hooks/dataProductComponent";
const Mens = () => {
    return (
        <>

            <main>
                <section className="mt-11 text-3xl font-bold">
                    <div className="text-center ">
                        <span>Mens</span>
                    </div>
                </section>

                <section className="mt-11">
                    <div className='container mx-auto'>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
                            {
                                dataPoduct.map((item, index) => {
                                    return (
                                        <>
                                            <div className="bg-white cursor-pointer" key={index}>
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