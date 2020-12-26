const SkullsList = ({ skulls, setCurrentTotal }) => {
  return skulls.map((skull) => {
    return (
      <li key={skull.id}>
        <button onClick={(e) => setCurrentTotal(e, skull.assignedNumber)}>
          <img src={skull.src} alt="skull" />
        </button>
      </li>
    );
  });
};

export default SkullsList;
