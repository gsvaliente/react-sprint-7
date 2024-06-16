interface ShipProps {
  name: string;
  model: string;
}

export function Ship({ name, model }: ShipProps) {
  return (
    <li className="w-3/4 cursor-pointer ">
      <div className="card bg-zinc-900 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{model}</p>
        </div>
      </div>
    </li>
  );
}
