import { useState, useEffect } from 'react';
import { getSiteData } from '../../utils/utils';

export default function Trivia() {
    const [trivia, setTrivia] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await getSiteData();

            if(data) {
                setTrivia(data.trivia || []);
            }
        };

        loadData();

    }, [])

    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            {trivia.map((item) => {
                <div className='bg-neutral-light rounded-3xl p-4 text-primary' key={item.id}>
                    <div className='text-xl mb-6 text-secondary'>/0{item.id}</div>
                    <h3 className='text-2xl font-semibold mb-4'>{item.title}</h3>
                    <p className='text-gray-600 leading-7'>{item.desc}</p>
                </div>
            })}
        </div>
    )
}