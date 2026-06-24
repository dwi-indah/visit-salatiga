import { Link } from 'react-router'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export function ButtonPrimary({ linkAddress, link }) {
    return(
        <Link to={`/${linkAddress}`} className="group inline-flex gap-2 items-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-light hover:text-primary mt-4 text-lg leading-8 lg:mt-8 lg:px-6 lg:py-3 lg:text-2xl transition duration-300">
            {link}
            <span className="transition duration-300 group-hover:rotate-45">
                <ArrowUpRightIcon aria-hidden="true" className="block size-6" />
            </span>
        </Link>
    )
}

export function ButtonSecondary({ linkAddress, link }) {
    return(
        <Link to={`/${linkAddress}`} className="group inline-flex gap-1 py-2 items-center text-primary font-bold border-b hover:border-b-2 lg:text-2xl transition duration-300">
            {link}
            <span className="group-hover:rotate-45 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </span>
        </Link>
    )
}