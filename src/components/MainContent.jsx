import "../styles/MainContent.css";
import Card from "./Card";
import data from "../data.js";

console.log(data);

const MainContent = () => {
  return (
    <main className="main-content">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
};

export default MainContent;
