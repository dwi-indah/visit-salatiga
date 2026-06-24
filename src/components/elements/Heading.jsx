import { Link } from "react-router";

export default function Heading({ title, subtitle, desc, link, linkAddress }) {
    return(
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 justify-between mb-8">
            <h2 className="text-5xl font-display font-bold text-primary">
                <span className="block font-body text-normal text-secondary uppercase tracking-widest text-sm font-semibold mb-4">{subtitle}</span>
                {title}
            </h2>
            <div className="text-gray-600 lg:max-w-md lg:text-xl mt-6">
                {desc}
                { link && link.trim() !== "" && (
                    <Link to={`/${linkAddress}`} className="group inline-flex gap-1 py-2 items-center text-primary font-bold border-b hover:border-b-2 lg:text-2xl transition duration-300">
                    {link}
                    <span className="group-hover:rotate-45 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </span>
                </Link>
                )}
            </div>
        </div>
    )
}