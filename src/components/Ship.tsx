interface ShipProps {
  name: string;
  model: string;
}

export function Ship({ name, model }: ShipProps) {
  return (
    <li>
      <h3>{name}</h3>
      <p>{model}</p>
    </li>
  );
}
