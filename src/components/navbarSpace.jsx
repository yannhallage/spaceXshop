import { useContext ,useState} from "react";
import { Link } from "react-router-dom";
import { context } from "../Context/contextProduct";

const NavbarSpacex = () => {

    const {productsvalidate, setProductsvalidate} = useContext(context)
    const [search, setSearch] = useState('')
    return (
        <>
          
            <nav className="bg-black">
                <div className="mx-auto max-w-7xl p-2 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <Link to="/">
                                    <img src="https://shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073%201x,%20//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x@2x.png?v=1614778073%202x" alt="" />
                                </Link>                            </div>
                            <div className="hidden  sm:ml-6 sm:block">
                                <div className="flex space-x-4 py-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <Link to="/collection/mens" className="rounded-md  px-3 py-2 text-sm font-medium text-white">MENS</Link>
                                    <Link to="/collection/womens" className="rounded-md  px-3 py-2 text-sm font-medium text-white">WOMENS</Link>
                                    <Link to="/collection/accessories" className="rounded-md  px-3 py-2 text-sm font-medium text-white">ACCESSORIES</Link>
                                    {/* <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white ">FLIGHT SHIRTS</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3 ">
                                <div>
                                    <Link to="/collection/accessories" className="rounded-md px-3 py-2 text-sm font-medium text-white">ACCOUNT</Link>
                                    {/* ><Link to="/collection/accessories">SEARCH</Link></a> */}
                                    <Link to="/collection/Cart" className="rounded-md px-3 py-2 text-sm font-medium text-white">CART ({productsvalidate})</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavbarSpacex;