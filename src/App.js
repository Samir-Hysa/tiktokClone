import "./App.css";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={"https://tinyurl.com/yfpzzgmq"}
          channel={"SamirHysa"}
          description={"This is my channel"}
          song={"Dynamite - BTS"}
          likes={1000000}
          messages={1203}
          shares={345}
        />
        <Video
          url={"https://tinyurl.com/yfpzzgmq"}
          channel={"SamirHysa"}
          description={"This is my channel"}
          song={"Dynamite - BTS"}
          likes={1000000}
          messages={1203}
          shares={345}
        />
      </div>
    </div>
  );
}

export default App;
