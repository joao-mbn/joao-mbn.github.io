export default function Experience({
  position,
  timespan,
  place,
}: {
  position: string;
  timespan: string;
  place: string;
}) {
  return (
    <span>
      <h3>
        {position} - {place}
      </h3>
      <span className="light small-text">{timespan}</span>
      <br />
    </span>
  );
}
