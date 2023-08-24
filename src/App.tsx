
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer/Footer2';
import Footer3 from './Components/Footer/Footer3';
import List from './Components/Listitems/List ';
import Moviessection from './Components/Movies/Moviessection';
import Navbar from './Components/Navbar/Navbar';
import Sliders from './Components/Sliders/Sliders';
import Stream from './Components/Stream/Stream'
import Premiere from './Components/Premiere/Premiere';
import Online from './Online/Online';
import Outdoor from './Outdoor/Outdoor';
import Laughter from './Laughter/Laughter';
import Popular from './Popular/Popular';
import Latest from './Latest/Latest';
import Games from './Games/Games';
import Trending from './Trending/Trending';
import Explore from './Explore/Explore';

function App() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <List />
      <Sliders />
      <Moviessection />
      <Stream />
      <Events />
      <Premiere />
      <Online />
      <Outdoor />
      <Laughter />
      <Popular />
      <Latest />
      <Games />
      <Trending />
      <Explore />
      <Footer />
      <Footer2 />
      <Footer3 />
      
    </div>
  );
}

export default App;
