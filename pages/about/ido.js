import Link from "next/link";

export default function aboutIdo() {
  return (
    <>
      <h1>my name is ido</h1>;
      <h1>
        go back
        <Link href="/">
          <a> home</a>
        </Link>
      </h1>
    </>
  );
}
