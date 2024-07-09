import { useAppSelector } from '../../hooks/useReduxHooks';
import Card from '../../ui/Card';
import { Title } from '../../ui/Title';

export default function MovieList() {
    const { movieData } = useAppSelector(store => store.movies);

    //TODO maybe return a string that says no pilots were found
    if (!movieData[0]) return null;

    return (
        <div className='mt-10'>
            <div>
                <Title>movies</Title>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 my-5'>
                {movieData.map(movie => (
                    <Card
                        key={movie.title}
                        name={movie.title}
                        img={movie.image}
                    />
                ))}
            </div>
        </div>
    );
}
