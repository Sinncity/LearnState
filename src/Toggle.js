import useToggle from "./useToggle";

function Toggle() {
  const [happy, toggleHappy] = useToggle(true);
  const [cool, toggleCool] = useToggle(true);
  const [surfing, togglesurfing] = useToggle(true);
  return (
    <div>
      <h1 onClick={() => toggleHappy(!happy)}> {happy ? " 😁" : "  🤬 "}</h1>
      <h1 onClick={() => toggleCool(!cool)}> {cool ? " 🤩" : "  😎 "}</h1>
      <h1 onClick={() => togglesurfing(!surfing)}>
        {" "}
        {surfing ? " 🏄" : "  🏊 "}
      </h1>
    </div>
  );
}

export default Toggle;
