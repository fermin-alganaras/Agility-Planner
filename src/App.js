import './App.scss';
import LeftNav from './view/Nav';
import Main from './view/Main';

function App() {
  return (
    <div className="row main">
      <header>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" type="text/css" rel="stylesheet" />
      </header>
      <body>
        <LeftNav />
        <Main />
      </body>
    </div>
  );
}

export default App;
