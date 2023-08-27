import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import Footer3 from '../Footer/Footer3';
import List from '../Listitems/List ';
import Moviessection from '../Movies/Moviessection';
import Navbar from '../Navbar/Navbar';
import Sliders from '../Sliders/Sliders';
import Stream from '../Stream/Stream'
import Premiere from '../Premiere/Premiere';
import Online from '../../Online/Online';
import Outdoor from '../../Outdoor/Outdoor';
import Laughter from '../../Laughter/Laughter';
import Popular from '../../Popular/Popular';
import Latest from '../../Latest/Latest';
import Games from '../../Games/Games';
import Trending from '../../Trending/Trending';
import Explore from '../../Explore/Explore';

function Home() {
    return (
        <div>
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
    )
}

export default Home