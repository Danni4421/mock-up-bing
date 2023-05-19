import "./style/component.css";

export default function Logo({ child, sliceChild }) {
  return (
    <h1 className="text-logo">
      <span className="slice-text-logo">{sliceChild}</span>
      {child}
    </h1>
  );
}
