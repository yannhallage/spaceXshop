import FooterSpaceX from "../components/footerSpace";

const CartComponent = () => {
    return (
        <>
            <main>
                <section className="mt-11 text-3xl">
                    <div className="text-center">
                        <span>Cart</span>
                    </div>
                </section>

                <section className="mt-11">
                    <div className='container mx-auto p-11'>
                        <div className="border-b-1 border-[#ccc] p-1">
                            <span>PRODUCT</span>
                            <span className="float-end space-x-11">
                                <span>QUANTITY</span>
                                <span>TOTAL</span>
                            </span>
                        </div>

                        {/* products */}

                        <div className="p-3">
                            <div className="border-b-1 border-[#ccc] ">
                                <div className="flex">
                                    <img width={100} src="https://shop.spacex.com/cdn/shop/files/SpaceX_Starship_Flight_7_Tshirt_Back_240x.png?v=1736547938" />
                                    <div className="ml-5 text-[13px] space-y-3">
                                        <div className="">
                                            <span>Unisex Starship Flight 7 T-Shirt</span><br />
                                        </div>
                                        <div className="">
                                            <span>Black / S</span><br />
                                            <span>$30.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative size-32 float-end">
                                    <div className="absolute  -top-15  space-x-4">
                                        <button className="underline font-sans">remove</button>
                                        <button className="">$30,00</button>
                                    </div>
                                </div>
                            </div>

                            <div className="" >
                                <span className="float-end font-bold">TOTAL</span><br />
                                <span className="float-end">$75,00</span><br />
                                <span className="float-end">Shipping & taxes calculated at checkout</span><br />
                                <span className="float-end border p-2 bg-black cursor-pointer text-white font-sans">CHECKOUT</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    {/* <RecentlyComponent text={""} /> */}
                </section>
                <section>
                    <FooterSpaceX />
                </section>
            </main>
        </>
    )
}

export default CartComponent;