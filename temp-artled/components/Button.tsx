import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({
  children,
  href,
}: Props) {

  if (href) {
    return (
      <Link
        href={href}
        className="button hero-cta"
      >
        {children}
      </Link>
    );
  }

  return (
    <button className="button">
      {children}
    </button>
  );
}

