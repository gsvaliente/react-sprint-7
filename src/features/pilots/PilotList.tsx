import { useAppSelector } from '../../hooks/useReduxHooks';
import Card from '../../ui/Card';
import { Title } from '../../ui/Title';

export default function PilotList() {
    const { pilotData } = useAppSelector(store => store.pilots);

    //TODO maybe return a string that says no pilots were found
    if (!pilotData[0]) return null;

    return (
        <div className='mt-10'>
            <div>
                <Title>pilots</Title>
            </div>
            <div className='flex gap-4 my-5'>
                {pilotData.map(pilot => (
                    <Card
                        key={pilot.name}
                        name={pilot.name}
                        img={pilot.image}
                    />
                ))}
            </div>
        </div>
    );
}
