const SkillCard = () => {
  return (
    <div>
      <div
        className="radial-progress text-primary"
        style={{ "--value": "80", "--size": "12rem", "--thickness": "1rem" }}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
};

export default SkillCard;
