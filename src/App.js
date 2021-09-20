import './App.scss';
import AppRouter from './routes';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="row main">
      <header>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" type="text/css" rel="stylesheet" />
      </header>
      <body>
      <AppRouter />
      </body>
    </div>
  );
}

export default App;
