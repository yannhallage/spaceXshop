
import { dataMen, dataRecentlyViewed, dataAccessoires } from "../hooks/dataProductComponent";

const RecentlyComponent = ({ text }) => {

    return (
        <>
            {text === 'accessoire' ? <Acces /> : <Human />}
        </>
    )
}


const Acces = () => {

    return (
        <>
            <div className="">
                <hr className="text-[#ccc]" />
                <div className="mt-19">
                    <div className="container mx-auto space-y-17">
                        <div className="text-center text-xl font-bold">
                            <span>
                                Recently Viewed
                            </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p">
                            {
                                dataAccessoires.map((item, index) => {
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
                </div>
            </div>
        </>
    )
}
const Human = () => {
    return (
        <>
            <div className="">
                <hr className="text-[#ccc]" />
                <div className="mt-19">
                    <div className="container mx-auto space-y-17">
                        <div className="text-center text-xl font-bold">
                            <span>
                                Recently Viewed
                            </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p">
                            {
                                dataRecentlyViewed.map((item, index) => {
                                    return (
                                        <div className="bg-white cursor-pointer" key={index}>
                                            <img src={item.name} alt="image" />
                                            <div className=' p-3  text-center'>
                                                <p>
                                                    SpaceX Starship Flight 8 T-Shirt <br /> <span className='text-[14px]'>{item.price}</span>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RecentlyComponent;