import React from "react";
import "./JoinUs.scss";

const JoinUs: React.FC = () => {
  return (
    <div className="join-us-container">
      <h2>Join Us</h2>
      <p>
        Do you want to gain more technical experience, collaborate across
        disciplines, and work in an agile environment? We’re looking for
        designers, developers, data science, and devops to join the team! Once
        you join our Slack, you’ll have access to our resources and be able to
        contribute right away.
      </p>
      <button className="join-slack-button">Join our Slack</button>
    </div>
  );
};

export default JoinUs;
