import Link from "next/link";
import "./process.css";

export default function ProcessPage() {
  return (
    <main className="process-page">

      <header className="process-nav">
        <Link href="/" className="process-brand">
          ARTLED WORKS
        </Link>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="process-hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">THE WORK IN MOTION</p>
          <h1>Process</h1>
        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-content">
        <div className="process-container">


          {/* =================================================
              01 — TALES
          ================================================= */}

          <article className="process-row">

            <div className="process-copy">
              <div className="gold-panel">

                <p className="panel-eyebrow">
                  PROCESS
                </p>

                <span className="panel-rule" />

                <h2>
                  Tales
                </h2>

                <p className="panel-description">
                  Glimpses into the making
                  <br />
                  of &lsquo;Tales&rsquo;
                </p>

                <div className="panel-index">
                  <span>01</span>
                  <i />
                </div>

              </div>
            </div>


            <div className="process-media">
              <video
                src="/videos/Tales Process.mp4"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>

          </article>


          <div className="process-divider" />


          {/* =================================================
              02 — CHARCOAL PREPARATION
          ================================================= */}

          <article className="process-row">

            <div className="process-media">
              <video
                src="/videos/Charcoal Preparation.mp4"
                poster="/images/process/charcoal-preparation-preview.png"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>


            <div className="process-copy">
              <div className="gold-panel">

                <p className="panel-eyebrow">
                  PROCESS
                </p>

                <span className="panel-rule" />

                <h2>
                  Charcoal
                  <br />
                  Preparation
                </h2>

                <p className="panel-description">
                  Preparing the medium
                  <br />
                  before the work begins.
                </p>

                <div className="panel-index">
                  <span>02</span>
                  <i />
                </div>

              </div>
            </div>

          </article>


          <div className="process-divider" />


          {/* =================================================
              03 — GRAPHITE PREPARATION
          ================================================= */}

          <article className="process-row">

            <div className="process-copy">
              <div className="gold-panel">

                <p className="panel-eyebrow">
                  PROCESS
                </p>

                <span className="panel-rule" />

                <h2>
                  Graphite
                  <br />
                  Preparation
                </h2>

                <p className="panel-description">
                  Preparing the materials
                  <br />
                  before the drawing begins.
                </p>

                <div className="panel-index">
                  <span>03</span>
                  <i />
                </div>

              </div>
            </div>


            <div className="process-media">
              <video
                src="/videos/Graphite Preparation.mp4"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </div>

          </article>

        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="process-footer">
        <Link href="/">
          ARTLED WORKS
        </Link>

        <span />
      </footer>
    </main>
  );
}
