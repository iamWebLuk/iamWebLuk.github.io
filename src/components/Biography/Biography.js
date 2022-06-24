import passFoto from '../../img/Passfoto.png'
import './biography.css'
import { useTranslation } from 'react-i18next';


function Biography() {

    const { t } = useTranslation();

  return (
    <div className="header">
      <div className="content">
          <div className="header">
            <div className="content">
              <section id="biography">
<br /><br /><br />
                <div className="container">
                  <div className="row">
                    <div className="col-sm" style={{textAlign: 'center'}}>
                     <img src={ passFoto } alt="Photo" />
                     
                    </div> 
                     <div className="col-sm  column-margin" style={{fontFamily: 'Brygada 1918'}}>

                      <h1 style={{color: 'black'}}>{t("biography.header")}</h1>

                      <hr />
                        <div style={{fontSize: '18px'}}>
                            {t("biography.text")}
                            {t("biography.subtext")}
                        </div>
                    </div>
                  </div>
                  </div>
                  <br />
                </section>
                </div>
                </div>
                </div>
                </div>
                ); 
                }

export default Biography;