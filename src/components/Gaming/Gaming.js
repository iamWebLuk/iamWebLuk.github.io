import './gaming.css'

import Smash from '../../img/smash.jpg'
import CsGo from '../../img/csgo.jpg'
import { useTranslation } from 'react-i18next';
import { MDBRipple } from 'mdb-react-ui-kit';

function Gaming() {

    const { t } = useTranslation();

    return (
        <div>
                <section id="gaming">
                  <div style={{backgroundColor: '#775979a'}}></div>
                </section>
           

                    <div style={{width: '100%'}}>

                  
                    <section id="games" style={{color: 'black'}}>
                    <br />
                    <h2> {t("gaming.header")}</h2>
                    <hr />
                    <p></p>
                    <p />
                      <div style={{textAlign: 'center', fontSize: '18px'}}>
                          {t("gaming.text")}
                            <p> {t("gaming.subtext")}</p>
                          {t("gaming.trailerText")}
                          
                              <br /><br /><br />
                              
                       </div>

                                <div>
                                    <MDBRipple className='bg-image hover-overlay shadow-1-strong rounded'
                                               rippleTag="div"
                                    rippleColor='light'>


                                  <a href="https://www.youtube.com/watch?v=c1_xxJyv8io"
                                  target="_blank"
                                  >
                                <img src={ Smash } className="img-fluid tag" alt="Smash" style={{maxHeight: '300px'}} />
                                </a>

                                <a href="https://youtu.be/edYCtaNueQY" target="_blank">
                                <img src={ CsGo } className="img-fluid tag" alt="csgo" style={{maxHeight: '300px'}} />
                                </a>
                                    </MDBRipple>
                                </div>
                                   
                                  </section>
                                  </div>
                                  </div>
    );
}

export default Gaming;