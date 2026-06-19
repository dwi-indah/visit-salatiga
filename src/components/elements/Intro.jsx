import { useRef } from "react"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Link } from "react-router"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Intro() {

    const container = useRef(null);
    useGSAP(() => {
        const introText =
            container.current.querySelector('.introText');

        const images =
            container.current.querySelectorAll('.introGallery');

        const splitEl = SplitText.create(introText, {
            type: 'words'
        });

        const tl = gsap.timeline();

        tl.to(splitEl.words, {
            color: '#173021',
            stagger: 0.1
        });

        ScrollTrigger.create({
            trigger: container.current,
            start: 'top 80%',
            end: 'top top',
            animation: tl,
            scrub: true
        });

        gsap.set(images, {
            opacity: 0,
            scale: 0
        });

        gsap.to(images, {
            opacity: 1,
            scale: 1,
            stagger: {
                each: 0.1,
                from: 'center'
            },
            scrollTrigger: {
                trigger: introText,
                start: 'top 50%',
                end: 'top 0',
                scrub: true,
                // markers: true
            }
        });
    }, {
        scope: container,
        revertOnUpdate: true
    });

    return(
        <section ref={container} className="intro min-h-[50vh] mt-[90vh] pt-12 mb-40">
            <div className="introText relative m-auto px-3 py-[5vh] lg:py-[10vh] max-w-3xl text-center">
                <span className="text-secondary uppercase tracking-widest text-sm font-semibold">Tentang Salatiga</span>
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide z-1 text-primary-light mt-2">
                    Sebuah kota kecil di lereng gunung, di mana setiap sudut menghadirkan cerita, rasa, dan kehangatan yang sulit dilupakan.
                </h2>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center mx-auto mt-6 mb-12 max-w-3xl">
                <div className="introGallery opacity-50 scale-75 w-1/6 aspect-[2/3] bg-gray-200 rounded-lg realtive overflow-hidden">
                    <img src="./images/intro-1.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="introGallery opacity-50 scale-75 w-1/6 aspect-[2/3] bg-gray-200 rounded-lg realtive overflow-hidden">
                    <img src="./images/intro-2.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="introGallery opacity-50 scale-75 w-2/6 aspect-[2/3] bg-gray-200 rounded-lg realtive overflow-hidden">
                    <img src="./images/intro-1.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="introGallery opacity-50 scale-75 w-1/6 aspect-[2/3] bg-gray-200 rounded-lg realtive overflow-hidden">
                    <img src="./images/intro-2.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="introGallery opacity-50 scale-75 w-1/6 aspect-[2/3] bg-gray-200 rounded-lg realtive overflow-hidden">
                    <img src="./images/intro-1.jpg" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="relative pb-3 text-center lg:max-w-3xl m-auto">
                <p className="text-gray-600 leading-8 text-lg">Salatiga bukan sekadar kota—ia adalah cerita yang hidup dari masa ke masa. Dari jejak Prasasti Plumpungan hingga bangunan kolonial yang masih berdiri anggun, setiap sudut kota menyimpan kisah tentang perjalanan panjang budaya dan peradaban.</p>
                <Link to="/history" className="inline-block py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-light hover:text-primary mt-4 text-lg leading-8 lg:mt-8 lg:px-6 lg:py-3 lg:text-2xl transition duration-300">Sejarah Salatiga
                </Link>
            </div>
        </section>
    )
}