import * as React from "react";
import ReactTooltip from "react-tooltip";

class MatrixCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { badgeId, tooltipText } = this.props;
    return (
      <div className="matrix-choice" data-tip={tooltipText} data-effect="solid">
        <a href={`${process.env.PUBLIC_URL}/customize/index.html?id=${badgeId}`}>
          {this.props.children}
          <ReactTooltip multiline />
        </a>
      </div>
    );
  }
}

export default MatrixCell;
