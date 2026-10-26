interface ReflectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Reflection({
  title,
  children,
}: ReflectionProps) {
  return (
    <section
      className="reflection"
      style={{
        background: "var(--gallery-reflection)",
      }}
    >
      <div className="reflection-content">

        <p className="reflection-label">
          {title}
        </p>

        <div className="reflection-text">
          {children}
        </div>

      </div>
    </section>
  );
}