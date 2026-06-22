import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/elements/Hero'
import { useState, useEffect } from 'react';
import { getSiteData } from '../utils/utils';

export default function Credit() {
    const [credit, setCredit] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            const data = await getSiteData();

            if(data) {
                setCredit(data.credit || []);
            }
        };

        loadData();

    }, [])
    return(
        <>
            <Header />
            <main className="relative min-h-screen bg-white pt-16 pb-8 px-3 lg:px-4">
                <Hero headingId={8} />
                <section className='py-16'>
                    <div className='container flex flex-col gap-1'>
                        <p className='text-lg text-gray-600 leading-relaxed max-w-3xl'>
                            Website ini dikembangkan sebagai media informasi digital  memperkenalkan sejarah, budaya, destinasi wisata, kuliner, dan kehidupan masyarakat Kota Salatiga  kepada masyarakat Indonesia maupun dunia.
                        </p>
                        {credit.map((item) => {
                            <div key={item.id} className=''>
                                <h2 className='inline text-primary font-semibold text-xl w-full shrink-0 lg:max-w-xs'>{item.title}</h2>
                                <div className='inline text-lg'>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}