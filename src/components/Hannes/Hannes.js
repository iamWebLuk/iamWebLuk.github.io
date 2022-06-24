import './hannes.css'
import hannes from '../../img/hannes.jpeg'
import {useTranslation} from "react-i18next";

function Hannes() {

    const { t } = useTranslation();

    return(
<section id="hannes">
                                <br /><br /><br />
                                      <div style={{color: 'black', fontSize: 'large'}}>
                                          <h2 style={{color: 'black'}}>
                                              {t("hannes.header")}
                                          </h2>
                                      </div>
  
                              <hr />
                                  <img src={ hannes } className="img-fluid" alt="" />
                                  </section>
    );
}

export default Hannes;