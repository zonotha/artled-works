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
        className="button"
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

