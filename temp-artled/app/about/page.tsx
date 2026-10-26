import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        background: "#171514",
        color: "#171514",
        minHeight: "100vh",
      }}
    >
      <header className="artist-nav">
        <Link href="/" className="artist-brand">
          ARTLED WORKS
        </Link>
      </header>

      {/* HERO — LEFT UNCHANGED */}
      <section
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 7% 100px",
          background: "#171514",
          color: "#F5F0E8",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 24px",
              fontSize: "0.68rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#B89A62",
            }}
          >
            ARTIST
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(4rem, 9vw, 8rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "#F5F0E8",
            }}
          >
            Zonotha Zwane
          </h1>
        </div>
      </section>

      {/* ARTIST'S NOTE — IMAGE + TEXT */}
      <section
        style={{
          background: "#F3EBDD",
          padding: "85px 6% 95px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(380px, 0.9fr) minmax(0, 1fr)",
            gap: "58px",
            alignItems: "center",
          }}
        >
          {/* IMAGE */}
          <div
            className="artist-body-image"
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(600px, 72vh, 760px)",
              overflow: "hidden",
              background: "#171514",
            }}
          >
            <Image
              src="/images/zonotha-studio.jpeg"
              alt="Zonotha Zwane in her studio"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center 42%",
                filter: "grayscale(100%) contrast(1.08) brightness(0.96)",
              }}
            />

            {/* subtle edge treatment */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(90deg, rgba(17,17,17,.08), transparent 18%, transparent 82%, rgba(17,17,17,.12))",
              }}
            />
          </div>

          {/* ARTIST'S NOTE */}
          <div>
            <p
              style={{
                margin: "0 0 30px",
                fontSize: "0.68rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8D7042",
                fontWeight: 600,
              }}
            >
              ARTIST&apos;S NOTE
            </p>

            <h2
              style={{
                margin: "0 0 34px",
                fontSize: "clamp(3rem, 5vw, 5.5rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.045em",
                fontWeight: 400,
                color: "#171514",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              A place to
              <br />
              discover.
            </h2>

            <div
              style={{
                width: "55px",
                height: "1px",
                background: "#B89A62",
                marginBottom: "35px",
              }}
            />

            <p
              style={{
                margin: 0,
                maxWidth: "520px",
                fontSize: "1.35rem",
                lineHeight: 1.75,
                color: "#171514",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              I mostly identify as a visual artist, but I have never wanted
              to confine myself to one medium or one way of creating. Artled
              Works is both an extension of me and something beyond me — a
              place where I continue to discover what I am capable of.
            </p>
          </div>
        </div>
      </section>

      {/* BECOMING */}
      <section
        style={{
          background: "#FFFFFF",
          padding: "85px 7% 75px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(220px, 0.72fr) minmax(0, 1.28fr)",
              gap: "45px",
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <div>
              <p
                style={{
                  margin: "0 0 28px",
                  fontSize: "0.68rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8D7042",
                  fontWeight: 600,
                }}
              >
                BECOMING
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.045em",
                  fontWeight: 400,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Art found
                <br />
                me again.
              </h2>

              <p
                style={{
                  margin: "42px 0 0",
                  fontSize: "2rem",
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  fontWeight: 400,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                2016
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.15rem",
                  lineHeight: 1.72,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                I didn&apos;t set out to become an artist.
              </p>

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "1.15rem",
                  lineHeight: 1.72,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                I&apos;ve always been creative. In Grade 12, I applied to
                design and art schools alongside my applications to study
                business. I was accepted into three, but the practical side
                of me questioned whether investing in art made sense when the
                career possibilities felt uncertain. I chose business school
                in Pretoria instead.
              </p>

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "1.15rem",
                  lineHeight: 1.72,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                In 2016, unforeseen circumstances brought that path to an end.
                I began creating again — not as a career, but for myself.
              </p>

              <blockquote
                style={{
                  margin: "52px 0",
                  padding: "24px 28px 24px 30px",
                  borderLeft: "4px solid #B89A62",
                  background: "#F3EBDD",
                  color: "#171514",
                  fontSize: "1.45rem",
                  lineHeight: 1.55,
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                I wanted to see what I was capable of.
              </blockquote>

              <p
                style={{
                  margin: 0,
                  fontSize: "1.15rem",
                  lineHeight: 1.72,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                I questioned myself, practised endlessly and watched my
                abilities develop. Seeing that growth became its own kind of
                fuel.
              </p>

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "1.15rem",
                  lineHeight: 1.72,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Eventually, I realised I could turn that ability into
                something of value to others. That was when I began creating
                custom portraits.
              </p>

              <p
                style={{
                  margin: "35px 0 0",
                  fontSize: "1.35rem",
                  lineHeight: 1.65,
                  color: "#171514",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Art had become a place where I could discover my own potential.
              </p>
            </div>
          </div>

          {/* VIEWER RECEPTION */}
          <div
            style={{
              marginTop: "65px",
              display: "grid",
              gridTemplateColumns: "minmax(220px, 0.72fr) minmax(0, 1.28fr)",
              gap: "60px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  borderLeft: "4px solid #B89A62",
                  background: "#F3EBDD",
                  padding: "22px 28px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "1.2rem",
                    lineHeight: 1.6,
                    color: "#171514",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  “The work ultimately belongs to the viewer&apos;s
                  experience. I don&apos;t want to prescribe what someone
                  should feel or how they should encounter it.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section
        style={{
          background: "#F5F0E8",
          padding: "75px 7% 90px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(220px, 0.72fr) minmax(0, 1.28fr)",
            gap: "60px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "0.68rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8D7042",
                fontWeight: 600,
              }}
            >
              THE WORK
            </p>
          </div>

          <div>
            <h2
              style={{
                margin: "0 0 25px",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                fontWeight: 400,
                color: "#171514",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Beauty, to me,
              <br />
              is presence.
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#171514",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              It is more than appearance. It is what someone carries into a
              space — the way a person occupies it, the character they reveal,
              and what remains with you after they are gone.
            </p>

            <p
              style={{
                margin: "12px 0 0",
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#171514",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Presence is at the centre of my work. My practice is drawn from
              what I observe, what I experience, what surrounds me and what I
              discover within myself.
            </p>

            <p
              style={{
                margin: "12px 0 0",
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#171514",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Woman, in particular, continues to hold a profound place in that
              exploration — versatile, complex, vulnerable, powerful and
              capable of occupying every space.
            </p>
          </div>
        </div>
      </section>

      {/* THE PRACTICE */}
      <section
        style={{
          background: "#171514",
          color: "#F5F0E8",
          padding: "100px 7% 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "0.68rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#B89A62",
              fontWeight: 600,
            }}
          >
            THE PRACTICE
          </p>

          <h2
            style={{
              margin: 0,
              maxWidth: "760px",
              fontSize: "clamp(4rem, 8vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              fontWeight: 400,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            A Marriage
            <br />
            With Art
          </h2>
        </div>
      </section>

      {/* RETURN */}
      <section
        style={{
          background: "#171514",
          textAlign: "center",
          padding: "0 7% 95px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-block",
            color: "#D6BE91",
            textDecoration: "none",
            border: "1px solid #B89A62",
            padding: "14px 34px",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            fontSize: "0.68rem",
            fontWeight: 400,
          }}
        >
          Back to Home
        </Link>
      </section>

      <style>{`
  @media (max-width: 900px) {
    .artist-body-image {
      height: 620px !important;
    }
  }

  @media (max-width: 600px) {
    .artist-body-image {
      height: 560px !important;
    }
  }
`}</style>
    </main>
  );
}