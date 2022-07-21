import NavbarOwn from '../Navbar/NavbarOwn'
import Biography from "../Biography/Biography";
import Football from '../Football/Football';
import Gaming from'../Gaming/Gaming';
import RubiksCube from "../RubiksCube/RubiksCube";
import Hannes from '../Hannes/Hannes';
import Footer from '../Footer/Footer';
import AppBar from "../AppBar/AppBar";

function Home() {
return(
    <div>
        {/*<Biography />*/}
        <Football />
        <Gaming />
        <Hannes />
        <Footer />
    </div>
);
}

export default Home;