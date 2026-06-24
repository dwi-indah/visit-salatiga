import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { getSiteData } from '../../utils/utils';

export default function Footer() {
    const [navigation, setNavigation] = useState([]);
    const [navFooter, setNavFooter] = useState([]);
    const [navCredit, setNavCredit] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await getSiteData();

            if(data) {
                setNavigation(data.menu || []);
                setNavFooter(data.footerMenu || []);
                setNavCredit(data.footerLink || []);
            }
        };

        loadData();

    }, [])

    return(
        <footer className="bg-primary text-white pt-4 px-4 md:pt-8 md:px-8">
            <div className="grid lg:grid-cols-10 gap-8 mb-8 text-white">
                <div className="lg:col-span-4">
                    <a href="#" className="font-display font-bold uppercase">Salatiga</a>
                    <p className="text-white/70 leading-8 max-w-md">Informasi tentang Kota Salatiga dan sekitarnya.</p>

                </div>
                <div className="lg:col-span-2">
                    <h3 className="font-semibold text-xl mb-3">Jelajahi</h3>
                    <ul className="space-y-2 text-white/70">
                    {navigation.map((item) => (
                        <li key={item.id}><Link
                            to={item.href}
                            className="text-white/70 hover:text-white transition duration-300"
                        >
                            {item.name}
                        </Link></li>
                    ))}
                    </ul>
                </div>
                <div className="lg:col-span-2">
                    <h3 className="font-semibold text-xl mb-3">Instansi Terkait</h3>
                    <ul className="space-y-2 text-white/70">
                    {navFooter.map((item) => (
                        <li key={item.id}><Link
                            to={item.href}
                            className="text-white/70 hover:text-white transition duration-300"
                        >
                            {item.name}
                        </Link></li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="border-t border-white py-4">
                <div className="flex flex-col gap-1 lg:gap-4">
                    <p className="text-white/70 text-sm">© 2026 All Rights Reserved.</p>
                    <ul className="flex gap-1 text-sm text-white/70 justify-between md:justify-start md:gap-4 w-full">
                        {navCredit.map((item) => (
                            <li key={item.id}><Link
                                to={item.href}
                                className="text-white/70 hover:text-white transition duration-300"
                            >
                                {item.name}
                            </Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="overflow-hidden">
                <img src="./images/logo-footer.svg" className="w-full"/>
            </div>
        </footer>
    ) 
}