import { Link } from "react-router";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function CTA() {
    return(
        <section className="">
            <div className="container bg-gradient-to-r bg-primary rounded-lg px-4 py-8 text-center text-white">
                <h2 className="text-5xl font-display font-bold mb-6">Siap Menjelajahi Salatiga?</h2>
                <p className="max-w-2xl mx-auto mb-10">Temukan lebih banyak destinasi, kuliner khas, budaya, dan pengalaman menarik lainnya di Kota Salatiga.</p>
                <Link to="/attraction" className="group inline-flex gap-2 items-center py-2 border-b-1 border-white hover:border-b-2 duration-300 transition">
                    Jelajahi Destinasi Lain
                    <span className="transition duration-300 group-hover:rotate-45">
                        <ArrowUpRightIcon aria-hidden="true" className="block size-6" />
                    </span>
                </Link>
            </div>
        </section>
    )
}