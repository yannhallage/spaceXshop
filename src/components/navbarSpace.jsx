import { Link } from "react-router-dom";

const NavbarSpacex = () => {

    return (
        <>
            {/* <div className="border bg-[#000] p-5 flex fi">
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
            </div> */}


            <nav class="bg-black ">
                <div class="mx-auto max-w-7xl p-2 px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>

                                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>


                                <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex shrink-0 items-center">
                                <Link to="/">
                                    <img src="https://shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073%201x,%20//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x@2x.png?v=1614778073%202x" alt="" />
                                </Link>                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4 py-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-white" aria-current="page"><Link to="/collection/mens">MENS</Link></a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white "><Link to="/collection/womens">WOMENS</Link></a>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white "><Link to="/collection/accessories">ACCESSORIES</Link></a>
                                    {/* <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white ">FLIGHT SHIRTS</a> */}
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button> */}

                            {/* <!-- Profile dropdown --> */}
                            <div class="relative ml-3 ">
                                <div>
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white "><Link to="/collection/accessories">ACCOUNT</Link></a>
                                    {/* <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white "><Link to="/collection/accessories">SEARCH</Link></a> */}
                                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white "><Link to="/collection/accessories">CARTS</Link></a>
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