interface CardProps {
    img: string;
    name: string;
}

export default function Card({ img, name }: CardProps) {
    return (
        <div className='card bg-base-100 w-96 shadow-xl'>
            <figure>
                <img
                    className='max-h-96'
                    src={img}
                    alt={img}
                />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
            </div>
        </div>
    );
}
