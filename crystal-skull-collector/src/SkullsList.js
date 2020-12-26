const SkullsList = ({ skulls }) => {
  return skulls.map((skull) => {
    return (
      <li key={skull.id}>
        <button>
          <img src={skull.src} alt="skull" />
        </button>
      </li>
    );
  });
};

export default SkullsList;
