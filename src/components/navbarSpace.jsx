import { Link } from "react-router-dom";

const NavbarSpacex = () => {

    return (
        <>
            <div className="border bg-[#000] p-5 flex ">
                <div className=" md:container mx-auto flex space-x-11 mt-4 text-white">
                    <div id="logo-spacex" className="">
                        <Link to="/">
                            <img src="https://shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073%201x,%20//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x@2x.png?v=1614778073%202x" alt="" />
                        </Link>
                    </div>

                    <div id="spaceX-produits" className="flex space-x-11 py-3 text-[14px] font-bold ">
                        <div className="">
                            <Link to="/collection/mens">MENS</Link>
                        </div>
                        <div className=""><Link to="/collection/womens">WOMENS</Link></div>
                        <div className=""><Link to="/collection/accessories">ACCESSORIES</Link></div>
                        <div className="">FLIGHT SHIRTS</div>
                    </div>
                </div>
                <div id="spaceX-produits" className="flex text-[13px] space-x-3 py-3 font-bold text-white mt-4">
                    <div className=""><Link to="/account">ACCOUNT</Link></div>
                    <div className=""><Link to="/cart">CART</Link></div>
                </div>
            </div>
        </>
    )
}

export default NavbarSpacex;