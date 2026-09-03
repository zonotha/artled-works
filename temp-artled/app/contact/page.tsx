import Link from "next/link";
import Image from "next/image";
import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <header className="site-nav">
          <Link href="/" className="brand">
            ARTLED WORKS
          </Link>

          <nav>
            <Link href="/exhibitions">Exhibitions</Link>
            <Link href="/about">Artist</Link>
            <Link href="/process">Process</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <div className="contact-hero-content">
          <p className="section-label">GET IN TOUCH</p>

          <h1>Contact</h1>

          <p className="hero-description">
            For enquiries, collaborations, commissions
            and artwork acquisitions.
          </p>

          <div className="gold-rule" />
        </div>

        <div className="contact-artwork">
          <Image
            src="/images/contact-sketch.jpeg"
            alt="Artwork in progress"
            fill
            className="contact-art-image"
          />
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="contact-body">
        <div className="contact-container">

          <div className="contact-intro">
            <p className="body-label">THE CONVERSATION</p>

            <h2>
              Let&apos;s begin
              <br />
              somewhere.
            </h2>

            <p>
              Whether you are interested in the work,
              would like to discuss a collaboration, or
              simply want to make an enquiry, you are
              welcome to get in touch.
            </p>
          </div>

          <div className="contact-grid">

            {/* DIRECT CONTACT */}
            <div className="contact-column">
              <p className="body-label">DIRECT CONTACT</p>

              <div className="contact-detail">
                <span>EMAIL</span>

                <a href="mailto:artledworks@yahoo.com">
                  artledworks@yahoo.com
                </a>
              </div>

              <div className="contact-detail">
                <span>PHONE</span>

                <a href="tel:+27676374544">
                  +27 67 637 4544
                </a>
              </div>

              <div className="contact-detail">
                <span>WHATSAPP</span>

                <a
                  href="https://wa.me/27676374544"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message Artled Works
                  <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            {/* FOLLOW */}
            <div className="contact-column">
              <p className="body-label">FOLLOW THE WORK</p>

              <div className="social-link">
                <span>INSTAGRAM</span>

                <a
                  href="https://www.instagram.com/artled_works/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @artled_works
                  <span className="arrow">↗</span>
                </a>
              </div>

              <div className="social-link">
                <span>TIKTOK</span>

                <a
                  href="https://www.tiktok.com/@artled_works"
                  target="_blank"
                  rel="noreferrer"
                >
                  @artled_works
                  <span className="arrow">↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* LOCATION */}
          <div className="contact-location">
            <p className="body-label">BASED IN</p>

            <h3>Vryheid, KwaZulu-Natal</h3>

            <p>South Africa</p>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="contact-close">
        <div className="contact-close-content">
          <p className="section-label">ARTLED WORKS</p>

          <h2>
            Let&apos;s begin
            <br />
            the conversation.
          </h2>

          <div className="gold-rule" />

          <Link href="/" className="home-link">
            Back to Home
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <Link href="/">ARTLED WORKS</Link>
      </footer>

    </main>
  );
}
