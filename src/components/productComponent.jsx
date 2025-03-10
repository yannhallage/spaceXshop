import { dataPoduct } from "../hooks/dataProductComponent";

const ProductComponent = () => {

    if (dataPoduct) {
        console.log(dataPoduct.length)
    }

    return (
        <>
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
        </>
    )
}

export default ProductComponent;