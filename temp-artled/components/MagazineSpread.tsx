import Image from "next/image";

interface MagazineSpreadProps {
  title: string;
  medium: string;
 year: string;
  image: string;

  children: React.ReactNode;

  reverse?: boolean;

  background?: string;
}

export default function MagazineSpread({
  title,
  medium,
  year,
  image,
  children,
  reverse = false,
  background = "#F8F5F2",
}: MagazineSpreadProps) {
  return (
    <section
      style={{
        background,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 8%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",

          direction: reverse ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            direction: "ltr",
            position: "relative",
            width: "100%",
            height: "720px",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            direction: "ltr",
            maxWidth: "520px",
          }}
        >
          <p
            style={{
              letterSpacing: ".18em",
              textTransform: "uppercase",
              opacity: .55,
              marginBottom: "20px",
            }}
          >
            {medium} • {year}
          </p>

          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 400,
              marginBottom: "40px",
            }}
          >
            {title}
          </h2>

          <div
            style={{
              lineHeight: 2,
              fontSize: "1.08rem",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}