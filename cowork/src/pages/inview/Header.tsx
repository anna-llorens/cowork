import React, { HTMLProps } from "react";
import "./Inview.css";

export const Header = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div className="top-container" ref={ref}>
    <h1>Scroll Down</h1>
    <p>Scroll down to see the sticky effect.</p>
  </div>
));

export type HtmlElementProps = HTMLProps<HTMLElement>;
export interface TextProps extends React.HTMLProps<HTMLElement> {
  HtmlTag?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "p";
  content: any;
  link?: string;
}
export const TextComponent = ({
  HtmlTag = "span",
  ...props
}: TextProps): JSX.Element => (
  <HtmlTag className={props.className}>
    {props.content}
    {props.children}
  </HtmlTag>
);
export const Body2 = ({
  HtmlTag = "span",
  ...props
}: TextProps): React.ReactNode => {
  return <div></div>;
};
//export const Body: React<HtmlElementProps> = ({ HtmlTag = 'span', ...props }: TextProps) => {
