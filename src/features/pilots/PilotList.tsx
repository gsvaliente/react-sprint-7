import { useAppSelector } from '../../hooks/useReduxHooks';

export default function PilotList() {
    // const { pilots } = useAppSelector(store => store.ships);
    const { pilotData } = useAppSelector(store => store.pilots);
    // console.log(pilots);
    console.log(pilotData);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if ((pilots?.length ?? 0) > 0) {
    //         pilots?.map(pilot => dispatch(findPilots(pilot)));
    //         // dispatch(findPilots(pilots[0]));
    //     } else return;
    // }, [dispatch, pilots]);

    return (
        <div>
            {pilotData.map(pilot => (
                <p key={pilot.name}>{pilot.name}</p>
            ))}
        </div>
    );
}
