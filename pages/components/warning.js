export default function Warning() {

  const [close, setClose] = React.useState(true);
  // function closeWarning() {
  //   if (!close) setClose(true);
  //   else setClose(false);
  // }

  return (
    <div
      style={{ display: `${!close ? "none" : null}` }}
      className="bg-red-100 border mt-5 border-red-400 text-red-700 px-4 py-2 rounded relative"
      role="alert"
    >
      <strong className="font-bold">OPS!</strong>
      <span className="block sm:inline"> Keep your size so big.</span>
    </div>
  );
}
