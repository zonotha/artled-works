import Link from "next/link";

export default function ProcessPage() {
  return (
    <main className="process-page">

      <header className="site-nav">
        <a href="/" className="brand">
          ARTLED WORKS
        </a>

        <nav>
          <a href="/exhibitions">Exhibitions</a>
          <a href="/about">Artist</a>
          <a href="/process">Process</a>
          <a href="/contact">Contact</a>
        </nav>
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
                  of the &lsquo;Tales&rsquo; series.
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


      {/* =====================================================
          STYLES

          Plain CSS only.
          No styled-jsx import.
      ===================================================== */}

      <style>{`

        /* ===================================================
           RESET
        =================================================== */

        .process-page,
        .process-page * {
          box-sizing: border-box;
        }


        .site-nav {
          width: 100%;
          padding: 32px 48px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background: #F7F4EE;
        }


        .brand {
          color: #111111;
          text-decoration: none;

          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
          letter-spacing: 0.28em;
        }


        .site-nav nav {
          display: flex;
          align-items: center;
          gap: 38px;
        }


        .site-nav nav a {
          color: #111111;
          text-decoration: none;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          letter-spacing: 0.16em;

          transition: color 180ms ease;
        }


        .site-nav nav a:hover {
          color: #B7A58A;
        }


        /* ===================================================
           PAGE
        =================================================== */

        .process-page {
          width: 100%;
          min-height: 100vh;

          background: #111;
          color: #171513;
        }


        /* ===================================================
           HERO
        =================================================== */

        .process-hero {
          width: 100%;
          min-height: 680px;

          background: #F7F4EE;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
        }


        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 70px 24px 76px;
        }


        .hero-eyebrow {
          margin: 0 0 24px;

          color: #c6a263;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 10px;
          font-weight: 500;

          letter-spacing: 0.34em;
          line-height: 1;

          text-transform: uppercase;
        }


        .process-hero h1 {
          margin: 0;

          color: #111111;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(76px, 9vw, 118px);

          font-weight: 400;

          letter-spacing: -0.055em;
          line-height: 0.82;
        }


        /* ===================================================
           BODY
        =================================================== */

        .process-content {
          width: 100%;

          background: #111111;
          color: #f7f4ee;

          padding: 76px 0 110px;
        }


        /*
          THIS IS THE IMPORTANT PART.

          Every row uses exactly the same two columns.

          Nothing is independently centered.
          Nothing has a 330px column.
        */

        .process-container {
          width: min(1160px, calc(100% - 120px));

          margin: 0 auto;
        }


        .process-row {
          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          column-gap: 56px;

          align-items: center;
        }


        /* ===================================================
           COPY COLUMN
        =================================================== */

        .process-copy {
          width: 100%;

          display: flex;

          align-items: center;
        }


        /*
          Gold panel deliberately does NOT determine the
          width of the grid.

          The grid determines its position.
        */

        .gold-panel {
          width: 100%;
          min-height: 420px;

          padding: 46px 42px 40px;

          background: #c9a562;
          color: #111111;

          display: flex;
          flex-direction: column;

          justify-content: flex-start;
        }


        .gold-panel h2,
        .gold-panel .panel-eyebrow,
        .gold-panel .panel-description,
        .gold-panel .panel-index,
        .gold-panel .panel-index span {
          color: #111111;
        }


        /* ===================================================
           PANEL TYPOGRAPHY
        =================================================== */

        .panel-eyebrow {
          margin: 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 10px;
          font-weight: 500;

          letter-spacing: 0.30em;
          line-height: 1;

          text-transform: uppercase;
        }


        .panel-rule {
          display: block;

          width: 34px;
          height: 1px;

          margin-top: 23px;
          margin-bottom: 27px;

          background: #171513;
        }


        .gold-panel h2 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(48px, 4.4vw, 66px);

          font-weight: 400;

          letter-spacing: -0.055em;
          line-height: 0.91;
        }


        .panel-description {
          margin: 38px 0 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;

          line-height: 1.6;

          color: #211e1a;
        }


        /* ===================================================
           NUMBER
        =================================================== */

        .panel-index {
          margin-top: auto;
          padding-top: 34px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }


        .panel-index span {
          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 15px;

          line-height: 1;

          letter-spacing: 0.12em;
        }


        .panel-index i {
          display: block;

          width: 34px;
          height: 1px;

          margin-top: 12px;

          background: #171513;
        }


        /* ===================================================
           VIDEO COLUMN
        =================================================== */

        .process-media {
          width: 100%;

          display: flex;

          align-items: center;
        }


        /*
          Both video columns occupy the SAME grid column
          width, regardless of whether they are on the left
          or right.

          The video is slightly reduced inside that column,
          rather than changing the page grid.
        */

        .process-media video {
          display: block;

          width: 100%;

          max-width: 100%;

          max-height: 560px;

          background: #000;

          border-radius: 4px;

          object-fit: contain;
        }


        /* ===================================================
           DIVIDER
        =================================================== */

        .process-divider {
          width: 100%;
          height: 1px;

          margin: 58px 0;

          background: #d4ccbf;
        }


        /* ===================================================
           FOOTER
        =================================================== */

        .process-footer {
          min-height: 125px;

          background: #F7F4EE;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;
        }


        .process-footer a {
          color: #c6a263;

          text-decoration: none;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 12px;

          letter-spacing: 0.25em;
        }


        .process-footer span {
          display: block;

          width: 34px;
          height: 1px;

          margin-top: 14px;

          background: #c6a263;
        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 900px) {

          .process-container {
            width: min(100% - 64px, 760px);
          }


          .process-row {
            column-gap: 36px;
          }


          .gold-panel {
            min-height: 390px;

            padding: 38px 30px;
          }


          .gold-panel h2 {
            font-size: 46px;
          }


          .process-media video {
            max-height: 500px;
          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 680px) {

          .process-hero {
            min-height: 520px;
          }


          .hero-inner {
            padding: 60px 20px 65px;
          }


          .process-content {
            padding: 50px 0 70px;
          }


          .process-container {
            width: calc(100% - 40px);
          }


          /*
            On mobile we still keep the same two-column
            editorial logic, but stack the elements.
          */

          .process-row {
            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 24px;
          }


          .gold-panel {
            min-height: 350px;

            padding: 38px 28px;
          }


          .gold-panel h2 {
            font-size: 46px;
          }


          .process-media {
            width: 100%;
          }


          .process-media video {
            width: 100%;
            max-height: none;
          }


          .process-divider {
            margin: 46px 0;
          }

        }

        /* PROCESS BODY BACKGROUND */
        .process-page {
          background: #111 !important;
        }

      `}</style>

    </main>
  );
}
