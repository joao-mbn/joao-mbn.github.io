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
      <h3 className="bold" style={{ letterSpacing: '0.05rem' }}>
        {position}
      </h3>
      <span className="light small-text">{timespan}</span>
      <br />
      <span className="semi-bold">{place}</span>
    </span>
  );
}
