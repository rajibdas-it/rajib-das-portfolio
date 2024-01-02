import "./RaidalBar.css";

const RaidalBar = () => {
  return (
    <div className="mt-20 min-h-screen">
      <div className="container1">
        <div className="heading1">
          <div className="radial-bars">
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="path path-1"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className="parcentage">90%</div>
              <div className="text">Creativity</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="path path-1"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className="parcentage">90%</div>
              <div className="text">Smartness</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="path path-1"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className="parcentage">95%</div>
              <div className="text">Handsome</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progress-bar"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="path path-1"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <div className="parcentage">95%</div>
              <div className="text">Handsome</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaidalBar;
