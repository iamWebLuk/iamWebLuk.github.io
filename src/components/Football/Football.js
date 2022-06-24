import './football.css'
import SCU_Logo from '../../img/Scu_Logo.jpg'
import SCU_Meister from '../../img/scu Meister.jpg'
import {useTranslation} from "react-i18next";

function Football() {

    const { t } = useTranslation();

    return (
        <section id='sport' >

               <div className='backgroundA'>
                 <br />
             <div className="row">
               <br />
               <div className="col-md-4" style={{marginLeft: '0%', textAlign: 'center'}}><img src={ SCU_Logo } alt="Scu Logo" /></div>
               
               <div className="col-md-4" style={{textAlign: 'center', marginTop: '20px'}}><br /><h1 style={{color:'black'}}>{t("football.header")}</h1>
                 
                 <h2 style={{color:'black'}}>{t("football.subheader")}</h2>
                 <h3 style={{color:'black'}}>{t("football.text")}</h3></div>
             </div>
                <hr />
            <br />
                 <br />
               <img className="img-fluid px-5" src={ SCU_Meister } style={{width: '100%'}} />
               </div>
             <br /> <br /> <br />
             </section>
             );
             }

export default Football;
