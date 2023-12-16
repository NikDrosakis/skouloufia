import './App.css';
import Iframe from 'react-iframe'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mapouter">
          <div className="gmap_canvas">
            <Iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    src="https://maps.google.com/maps?width=641&amp;height=509&amp;hl=en&amp;q=skouloufia&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></Iframe>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
