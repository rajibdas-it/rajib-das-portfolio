const RadialSkillBar = () => {
  return (
    <div>
      <h1>Circular Box</h1>
      <div>
        <svg x="0px" y="0px" viewBox="0 0 200 200">
          <circle
            className="border-8 border-myRed"
            cx="100"
            cy="100"
            r="80"
          ></circle>
          <circle cx="100" cy="100" r="80"></circle>
        </svg>
        <div>90%</div>
        <div>HTML</div>
      </div>
    </div>
  );
};

export default RadialSkillBar;
