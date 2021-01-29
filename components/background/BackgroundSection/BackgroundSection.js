export default function BackgroundSection({ title, children }) {
  return (
    <div style={{ textAlign: "center" }}>
      {title ? <h2>{title}</h2> : <></>}
      {children}
    </div>
  );
}
