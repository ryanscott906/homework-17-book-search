import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center",
        backgroundImage: `url("https://i.guim.co.uk/img/media/d1e315ebc0633e661ef2028dea1cd0507dd6c202/0_0_4134_3097/master/4134.jpg?width=1920&quality=85&auto=format&fit=max&s=7c98bb957828c99cd0ad960c2e77c2ee")`
       }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;