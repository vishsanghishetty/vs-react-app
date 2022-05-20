import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

//ReactDOM.render(<App />, document.getElementById("root"))
