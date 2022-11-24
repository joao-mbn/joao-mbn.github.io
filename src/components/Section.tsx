export interface SectionProps extends React.HtmlHTMLAttributes<HTMLElement> {
  header: string;
  children: React.ReactNode;
}

export default function Section({ header, children, ...props }: SectionProps) {
  return (
    <section style={props.style}>
      <h2>{header}</h2>
      {children}
    </section>
  );
}
