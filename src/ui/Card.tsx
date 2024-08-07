interface CardProps {
    img: string;
    name: string;
}

export default function Card({ img, name }: CardProps) {
    return (
        <div className='card bg-base-200 w-96 shadow-xl rounded-lg border-b-4 border-b-red-500'>
            <figure>
                <img
                    className='max-h-96 pt-5 rounded-t-[60px]'
                    src={img}
                    alt={img}
                />
            </figure>
            <div className='card-body  bg-stone-800 mt-2'>
                <h2 className='card-title'>{name}</h2>
            </div>
        </div>
    );
}
