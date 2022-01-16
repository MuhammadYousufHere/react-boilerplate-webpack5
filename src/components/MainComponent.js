import "./MainComponent.scss";

const MainComponent = () => {
  const box = document.createElement("div");
  box.classList.add("main-component-box");
  box.style.border = "4px solid grey";

  box.textContent = "React Boilerplate";

  return box;
};

export default MainComponent;
