import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/#top" aria-label="Starixis home">
      <span className="brand-mark" aria-hidden="true" />
      <span className="wordmark">STARIXIS</span>
    </Link>
  );
}
