import coverBgImage from '../../assets/image/cover.jpg';

const coverStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${coverBgImage})`
}

export default function Cover() {
    return(
        <section className="fixed top-0 left-0 right-0 h-[90vh] -z-1">
            <div className="relative h-full justify-center pt-16 pb-3 px-4">
                <div className="bg-primary rounded-lg h-full px-3 flex flex-col justify-end" style={coverStyle} >
                    <p className="text-white/90 italic mb-2">Harmoni Alam, Budaya, dan Pengalaman Tak Terlupakan</p>
                    <h2 className="uppercase text-white text-5xl md:text-7xl font-bold font-display tracking-wide">Salatiga</h2>
                </div>
            </div>
        </section>
    )
}