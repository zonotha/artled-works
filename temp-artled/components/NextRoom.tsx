import Link from "next/link";

type NextRoomProps = {
  href: string;
};

export default function NextRoom({ href }: NextRoomProps) {
  return (
    <section className="next-room">
      <div className="next-room-content">
        <div className="next-room-divider">✦</div>

        <Link href={href} scroll={true} className="next-room-button">
          Proceed
        </Link>
      </div>
    </section>
  );
}
