interface DescriptionProps {
  children: React.ReactNode;
  background: string;
}

export default function Description({
  children,
  background,
}: DescriptionProps) {
  return (
    <section
      className="description"
      style={{
        background: "var(--gallery-description)",
      }}
    >
      <div className="description-content">
        <p>{children}</p>
      </div>
    </section>
  );
}