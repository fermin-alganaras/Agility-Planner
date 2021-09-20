import LeftNav from './Nav';
import Main from './Main';
import leftNav from '../data/left-nav';

function AgilityPlanner() {
  return (
    <div className="row main">
      <header>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" type="text/css" rel="stylesheet" />
      </header>
      <body>
          <leftNav />
          <Main />
      </body>
    </div>
  );
}

export default AgilityPlanner;
