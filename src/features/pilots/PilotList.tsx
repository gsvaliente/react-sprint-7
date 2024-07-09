import { useAppSelector } from '../../hooks/useReduxHooks';
import { Title } from '../../ui/Title';

export default function PilotList() {
    // const { pilots } = useAppSelector(store => store.ships);
    const { pilotData } = useAppSelector(store => store.pilots);

    if (!pilotData[0]) return null;

    return (
        <div>
            <div>
                <Title>pilots</Title>
            </div>
            {pilotData.map(pilot => (
                <p key={pilot.name}>{pilot.name}</p>
            ))}
        </div>
    );
}
