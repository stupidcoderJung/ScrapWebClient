import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ArticleComponent from "./components/articleComponent";
import KakaoSignUp from "./components/KakaoSignUp";

function App() {
  return (
    <div className="App">
      <KakaoSignUp></KakaoSignUp>
      <ArticleComponent></ArticleComponent>
    </div>
  );
}

export default App;
