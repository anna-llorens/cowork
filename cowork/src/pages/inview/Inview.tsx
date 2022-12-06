import { FixedHeader } from "./FixedHeader";
import { Header } from "./Header";
import { TextContentExample } from "./TextContentExample";
import "./Inview.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Inview = () => {
  const [displayFixedHeader, setFixedHeader] = useState(false);
  const { inView, ref } = useInView();

  /* Sticks FixedHeader to page when the Header is not 'inView' */
  useEffect(() => {
    setFixedHeader(!inView);
  }, [inView, displayFixedHeader]);

  return (
    <>
      <Header ref={ref} />
      {displayFixedHeader && <FixedHeader />}
      <TextContentExample />
    </>
  );
};
