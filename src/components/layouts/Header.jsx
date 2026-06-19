import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import { getSiteData } from '../../utils/utils';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {

    const [navigation, setNavigation] = useState([]);
    const [cityName, setCityName] = useState('');

    useEffect(() => {

        const loadData = async () => {
            const data = await getSiteData();

            if (data) {
                setNavigation(data.menu || []);
                setCityName(data.city || '');
            }
        };

        loadData();

    }, []);

    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 right-0 z-10 p-3 will-change-transform transition-[transform .4s ease, background .3s ease, backdrop-filter .3s ease]"
        >
            <div className="backdrop-blur-lg bg-primary-accent/20 relative rounded-md lg:flex lg:items-center lg:justify-between p-2">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex shrink-0 items-center">
                        <a href="#" className="font-display font-bold uppercase">{cityName}</a>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={({ isActive }) =>
                                        classNames(
                                            isActive
                                                ? 'bg-primary text-white'
                                                : 'text-primary hover:bg-white/5 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="backdrop-blur-lg bg-primary-accent/20 space-y-1 px-2 pt-2 pb-3 flex flex-col gap-3 rounded-lg">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.id}
                            className="text-left"
                        >
                            <NavLink
                                to={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={({ isActive }) =>
                                    classNames(
                                        isActive
                                            ? 'bg-primary text-white'
                                            : 'text-primary hover:bg-white/5 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium block w-full'
                                    )
                                }
                            >
                                {item.name}
                            </NavLink>
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}