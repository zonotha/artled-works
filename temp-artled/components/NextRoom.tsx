import Link from "next/link";

type NextRoomProps = {
  href: string;
  background: string;
  label?: string;
};

export default function NextRoom({
  href,
  background,
  label = "Continue",
}: NextRoomProps) {
  return (
    <section
      className="next-room"
      style={{ background }}
    >
      <div className="next-room-content">
        <div className="next-room-divider">✦</div>

        <Link
          href={href}
          scroll={true}
          className="next-room-button"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}