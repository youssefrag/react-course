const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(
      Person,
      { name: "Youssef", occupation: "developer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Sameh", occupation: "carpenter" },
      null
    ),
    React.createElement(Person, { name: "Aly", occupation: "bartender" }, null),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
