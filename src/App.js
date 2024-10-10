import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Hero primaryText={"Hostechnology"} secondaryText={"We serve peole who serve people"} />
      <div className="py-10 flex justify-center flex-wrap space-x-8">
          <Card />
          <Card />
          <Card />
        </div>
      <Footer />
    </>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
