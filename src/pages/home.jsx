import '../styles/home.css'
import ButtonComponent from '../components/buttonComponent';
import FooterSpaceX from '../components/footerSpace';
import ProductComponent from '../components/productComponent';

const Home = () => {
    return (
        <>
            <main className='animate__animated animate__fadeIn'>
                <div className='' id='home-pic'>
                </div>

                <section className=' p-11'>
                    <div className='text-center p-4 text-[32px] '>
                        <p>
                            trending
                        </p>
                    </div>
                </section>
                <section >
                    <ProductComponent/>
                </section>
                <section>
                    <ButtonComponent />
                </section>
                <section>
                    <FooterSpaceX />
                </section>
            </main>
        </>
    )
}

export default Home;