export function Container(props) {
  return (
    <div
      style={{
        minHeight: "200px",
        border: "1px solid transparent"
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}
export function Textarea(props) {
  return (
    <textarea
      style={{
        display: "block",
        width: "100%",
        padding: "10px"
      }}
      {...props}
    ></textarea>
  );
}
export function Button(props) {
  return (
    <button
      style={{
        padding: "8px 16px",
        margin: "0 3px"
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}
export function Table(props) {
  return (
    <table
      style={{
        display: "inline-block",
        marginTop: "20px",
        textAlign: "left"
      }}
      {...props}
    >
      {props.children}
    </table>
  );
}
export function Heading(props) {
  return (
    <h3
      style={{
        color: props.success ? "green" : "red"
      }}
    >
      {props.children}
    </h3>
  );
}
