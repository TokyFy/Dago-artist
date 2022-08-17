import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layouts from "./styles/Layout.module.scss";
import SectionArtist from "./components/sectionArtist";
import ArtistCards from "./components/ArtistCards";

import kristelImage from "./image/kristel.jpeg";
import Imiangaly from "./image/Imiangaly.jpeg";
import Faniah from "./image/Faniah.jpeg";
import dizzyBrains from "./image/The Dizzy Brains.jpg";
import alala from "./image/Alala.jpg";
import gaele from "./image/Gaelle tsirinofy.jpg";

function App() {
  return (
    <div className={`${Layouts.row}`}>
      <Navbar />
      <Header primary={"DAGO"} second={"ARTISTS"} />
      <SectionArtist>
        <ArtistCards img={kristelImage} name={"Kristel"} genre={"Rock"} />
        <ArtistCards img={Imiangaly} name={"Imiangaly"} genre={"Jazz"} />
        <ArtistCards img={Faniah} name={"Faniah"} genre={"Jazz"} />
        <ArtistCards
          img={dizzyBrains}
          name={"The DizzyBrains"}
          genre={"Rock"}
        />
        <ArtistCards img={alala} name={"Alala"} genre={"Pop"} />
        <ArtistCards img={gaele} name={"Gaele"} genre={"Jazz"} />
        <ArtistCards img={Faniah} name={"Faniah"} genre={"Jazz"} />
        <ArtistCards
          img={dizzyBrains}
          name={"The DizzyBrains"}
          genre={"Rock"}
        />
        <ArtistCards img={alala} name={"Alala"} genre={"Pop"} />
        <ArtistCards img={gaele} name={"Gaele"} genre={"Jazz"} />
        <ArtistCards img={Faniah} name={"Faniah"} genre={"Jazz"} />
        <ArtistCards
          img={dizzyBrains}
          name={"The DizzyBrains"}
          genre={"Rock"}
        />
      </SectionArtist>
    </div>
  );
}

export default App;
