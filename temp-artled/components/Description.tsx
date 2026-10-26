interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
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