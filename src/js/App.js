import BirthdayCard from './BirthdayCard';
import Cake from './Cake';
import Flags from './Background';

import '../css/App.css';

function App() {
  const message = "Wishing you joy, love, and happiness on your special day. May this year bring you wonderful moments and all the success you deserve!";
  return (
    <div className="App">
      <div className="container">
        <Flags />
        <BirthdayCard name="John" message={message} />
        <Cake />
      </div>
    </div>
  );
}

export default App;
