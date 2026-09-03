import Image from "next/image";

interface MagazineSpreadProps {
  title: string;
  medium: string;
  year: string;
  image: string;
  children: React.ReactNode;
  reverse?: boolean;
  background?: string;
  imageScale?: number;
}

export default function MagazineSpread({
  title,
  medium,
  year,
  image,
  children,
  reverse = false,
  background = "#F8F5F2",
  imageScale = 1,
}: MagazineSpreadProps) {

  const isDark = background === "#171514";

  return (
    <section
      style={{
        background,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 6%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          direction: reverse ? "rtl" : "ltr",
        }}
      >
        {/* IMAGE */}

        <div
          style={{
            direction: "ltr",
            position: "relative",
            width: "100%",
            height: "900px",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: "contain",
              transform: `scale(${imageScale})`,
            }}
          />
        </div>

        {/* TEXT */}

        <div
          style={{
            direction: "ltr",
            maxWidth: "520px",
            color: isDark ? "#F8F5F2" : "#171514",
          }}
        >
          <p
            style={{
              letterSpacing: ".18em",
              textTransform: "uppercase",
              opacity: 0.55,
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
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}