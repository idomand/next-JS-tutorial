import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function aboutIdo() {
  return (
    <>
      <Title>my name is ido</Title>;
      <h1>
        go back
        <Link href="/">
          <a> home</a>
        </Link>
      </h1>
    </>
  );
}
