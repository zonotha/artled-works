import Link from "next/link";
import "./awakening.css";

export default function AwakeningPage() {
  return (
    <main className="awakening-page">

      <header className="awakening-nav">
        <Link href="/" className="awakening-brand">
          ARTLED WORKS
        </Link>
      </header>

      <section className="awakening-hero">
        <p className="eyebrow">FEATURED WORK</p>

        <h1>The Awakening</h1>

        <p className="hero-intro">
          A story about movement, alignment,
          and what becomes visible when we
          choose to move toward the light.
        </p>

        <div className="hero-line" />
      </section>

      <section className="awakening-story">
        <div className="awakening-layout">

          <div className="art-column">
            <div className="art-frame">
              <img
                src="/artworks/the-awakening.png"
                alt="The Awakening"
              />
            </div>

            <div className="art-caption">
              <span>THE AWAKENING</span>
              <span>Original Artwork</span>
            </div>
          </div>

          <article className="story-column">

            <section className="story-section">
              <p className="section-number">01</p>

              <h2>A story in the making</h2>

              <p>
                There is always light.
              </p>

              <p>
                Sometimes, we only see its illumination
                from a distance — a quiet sense that
                something exists beyond where we are.
              </p>

              <p>
                We can remain where we are because it
                is familiar. Life continues around us;
                our thoughts become crowded, routines
                become comfortable, and the familiar
                can begin to feel like enough.
              </p>
            </section>

            <section className="story-section">
              <p className="section-number">02</p>

              <h2>The light</h2>

              <p>
                But sometimes, something shifts.
              </p>

              <p>
                We notice the light.
              </p>

              <p>
                And once we do, we are faced with
                a choice: remain where we are,
                or move closer.
              </p>

              <div className="pull-quote">
                <span>“</span>
                <p>
                  The light was always there.
                  Alignment allowed her to see it.
                </p>
              </div>
            </section>

            <section className="story-section">
              <p className="section-number">03</p>

              <h2>The threshold</h2>

              <p>
                An awakening is not necessarily
                a single moment.
              </p>

              <p>
                It can happen in many areas of a
                person&apos;s life — in the way we see
                ourselves, the choices we make,
                the relationships we hold, or the
                direction we begin to take.
              </p>

              <p>
                For me, <em>The Awakening</em> is
                about that movement.
              </p>

              <p>
                The light running through the work
                represents what has awakened her.
                She has reached a point where its
                presence can no longer be ignored.
              </p>
            </section>

            <section className="story-section">
              <p className="section-number">04</p>

              <h2>Reaching toward it</h2>

              <p>
                The figure is suspended between
                what was and what is becoming —
                reaching toward something she has
                begun to see, but has not yet fully
                discovered.
              </p>

              <p>
                The reaching is important.
              </p>

              <p>
                Awakening may begin with seeing,
                but moving toward what we see
                requires something more.
              </p>
            </section>

            <section className="story-section">
              <p className="section-number">05</p>

              <h2>Beyond the light</h2>

              <p>
                After the threshold, the light broadens.
              </p>

              <p>
                This is deliberate.
              </p>

              <p>
                Awakening does not mean arriving at
                an illuminated destination where
                everything suddenly becomes clear.
                If anything, greater awareness reveals
                more to explore.
              </p>

              <p>
                The darkness remains along the edges.
              </p>

              <p>
                Not as something to fear, but as a
                reminder that the walk continues.
              </p>
            </section>

            <section className="story-section">
              <p className="section-number">06</p>

              <h2>What we carry</h2>

              <p>
                We don&apos;t leave everything behind
                when we awaken.
              </p>

              <p>
                We carry parts of where we&apos;ve been
                with us — experiences, lessons,
                memories and the things that shaped
                who we became.
              </p>

              <p>
                They remain part of the journey.
              </p>

              <p>
                What changes is the way we move
                forward with them.
              </p>
            </section>

            <section className="story-section final-section">
              <p className="section-number">07</p>

              <h2>The work continues</h2>

              <p>
                There is always another depth to discover.
              </p>

              <p>
                An awakening may change what we can
                see, but it does not remove the work
                of becoming. It asks us to keep moving,
                to keep questioning, and to keep reaching
                beyond what is already familiar.
              </p>

              <p>
                The light becomes broader.
              </p>

              <p>
                The path becomes clearer.
              </p>

              <p>
                But there is still more ahead.
              </p>

              <div className="closing-line">
                <p>Perhaps that is the real awakening:</p>

                <strong>
                  not discovering that you have arrived,
                  but recognising that you are ready
                  to keep going.
                </strong>
              </div>
            </section>

          </article>
        </div>
      </section>

      <section className="awakening-close">
        <div className="close-inner">
          <p className="eyebrow">THE AWAKENING</p>

          <h2>The light becomes broader.</h2>

          <div className="gold-rule" />

          <p>The journey continues.</p>
        </div>
      </section>

      <footer className="site-footer">
        <Link href="/">ARTLED WORKS</Link>
      </footer>

    </main>
  );
}
