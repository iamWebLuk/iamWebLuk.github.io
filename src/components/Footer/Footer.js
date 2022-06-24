import backToTop from '../../img/BackToTop.png';
import instagramLogo from '../../img/Instagram_logo.png';
import githubLogo from '../../img/GitHub_Logo.png';
import './footer.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Footer() {

    return (
    <div className="row text-center" style={{backgroundColor: '#1E2124'}}>
        <div className="col">
            <span style={{color:'white'}}>Home</span>
            <br />

            <div>
                <a href='#top'><ArrowUpwardIcon className='arrowStyle' /> </a>

            </div>
        </div>
        <div className="col">
            <span style={{fontWeight: 'bold'}} id="white-text">Sections</span>
                <br />
            <span><a href="index.html#biography" id="white-text">Biography</a></span>
                <br />
            <span><a href="index.html#sport" id="white-text">Sport</a></span>
                <br />
            <span><a href="index.html#gaming" id="white-text">Gaming</a></span>
                <br />
            <span><a href="rubiksCube.html" id="white-text">Rubiks Cube</a></span>
        </div>

        <div className="col">
            <span style={{color: 'white', textDecoration: 'none'}}>Social Media</span>
            <div style={{padding:'15px 0'}}>
                <a href="https://www.instagram.com/lukas.weber_/"><img src={ instagramLogo } className='instagramLogo' alt={instagramLogo}/></a>
                <a href="https://www.github.com/iamwebluk"><img src={ githubLogo } className='githubLogo' alt={githubLogo}/></a>
            </div>
        </div>
    </div>
    );
}
export default Footer;