import React, { Suspense } from "react";
import "./DecisionTree.css";
import treeData from "../decisionTree.json";

function loadBadge(badgeId) {
  if (!badgeId) {
    return null;
  }
  const Component = React.lazy(() => import(`../Badges/${badgeId}.js`));
  return Component;
}
class DecisionTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLevel: 0,
      data: treeData,
      answers: { 0: null, 1: null, 2: null },
      levels: [0, 1, 2],
      showBadge: false,
      selectedBadgeId: null,
    };
  }

  getLevelOptions = (level) => {
    return this.state.data.options.filter((option) => option.level === level);
  };

  getChildrenOptions = (parentId) => {
    return this.state.data.options.filter(
      (option) => option.childOf === parentId
    );
  };

  toggleAnswer(option, level, e) {
    e.stopPropagation();
    var answers = { ...this.state.answers };
    var activeLevel = null;
    if (this.state.answers[level] !== option.id) {
      answers[level] = option.id;
      var isLastLevel = level === this.state.levels.length - 1;
      var showBadge = isLastLevel;
      activeLevel = level + 1; //isLastLevel ? level : level + 1;
      var selectedBadgeId = option.badgeId ? option.badgeId : null;
      this.setState({ answers, activeLevel, showBadge, selectedBadgeId });
    } else {
      for (var i = this.state.levels.length; i >= level; i--) {
        answers[i] = null;
      }
      activeLevel = level - 1 >= 0 ? level - 1 : 0;
      this.setState({ answers, activeLevel, showBadge: false });
    }
  }

  render() {
    const { answers, showBadge, selectedBadgeId } = this.state;
    var MyBadge = null;
    if (selectedBadgeId) {
      MyBadge = loadBadge(selectedBadgeId);
    }
    return (
      <>
        <div className="decision-tree">
          <div
            className="questions-block"
            style={{ marginLeft: 10 * 0 + "px" }}
          >
            {this.getLevelOptions(0).map((o0) => {
              return (
                <div
                  key={o0.id}
                  className={
                    "questions-block-item" +
                    (o0.id === answers[0] ? " active-item" : "")
                  }
                  onClick={(e) => this.toggleAnswer(o0, 0, e)}
                >
                  <p>{o0.title}</p>
                  <div
                    className={
                      "questions-block" +
                      (answers[0] !== o0.id ? " hidden" : "")
                    }
                  >
                    {this.getChildrenOptions(o0.id).map((o1) => {
                      return (
                        <div
                          key={o1.id}
                          className={
                            "questions-block-item sublevel" +
                            (o1.id === answers[1] ? " active-item" : "")
                          }
                          onClick={(e) => this.toggleAnswer(o1, 1, e)}
                        >
                          <p
                            className={
                              "level1" +
                              (o1.id === answers[1] ? " item-selected" : "")
                            }
                          >
                            {o1.id === answers[1] ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                className="bi bi-arrow-return-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                                />
                              </svg>
                            ) : (
                              ""
                            )}
                            {o1.title}
                          </p>
                          <div className="badge">
                            {this.state.activeLevel === 2 && answers[1] === o1.id && selectedBadgeId && (
                              <a
                                href={`${process.env.PUBLIC_URL}/customize/index.html?id=${selectedBadgeId.toLowerCase()}`}
                              >
                                <Suspense fallback={<div>Loading...</div>}>
                                  <MyBadge />
                                </Suspense>
                              </a>
                            )}
                          </div>
                          <div
                            className={
                              "questions-block" +
                              (answers[1] !== o1.id ? " hidden" : "")
                            }
                          >
                            {this.getChildrenOptions(o1.id).map((o2) => (
                              <div
                                key={o2.id}
                                className={
                                  "questions-block-item sublevel" +
                                  (o2.id === answers[2] ? " active-item" : "")
                                }
                                onClick={(e) => this.toggleAnswer(o2, 2, e)}
                              >
                                <p
                                  className={
                                    "level2" +
                                    (o2.id === answers[2]
                                      ? " item-selected"
                                      : "")
                                  }
                                >
                                  {o2.id === answers[2] ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      fill="currentColor"
                                      className="bi bi-arrow-return-right"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                                      />
                                    </svg>
                                  ) : (
                                    ""
                                  )}
                                  {o2.title}
                                </p>
                                <div className="badge">
                                  {showBadge && answers[2] === o2.id && (
                                    <a
                                      href={`${process.env.PUBLIC_URL}/customize/index.html?id=${selectedBadgeId.toLowerCase()}`}
                                    >
                                      <Suspense
                                        fallback={<div>Loading...</div>}
                                      >
                                        <MyBadge />
                                      </Suspense>
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default DecisionTree;
