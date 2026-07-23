import Link from "next/link";

type NextRoomProps = {
  href: string;
};

export default function NextRoom({ href }: NextRoomProps) {
  return (
    <section className="next-room">
      <div className="next-room-content">
        <div className="next-room-divider">✦</div>

        <Link href={href} className="next-room-button">
          Enter the Next Space
        </Link>
      </div>
    </section>
  );
}
