import './pictureSite.css';
import {Upload} from "@mui/icons-material";
import UploadForm from "../UploadForm/UploadForm";

function PictureSite () {

        //TODO: Make an firebase account on my macbook and store the script in src/config.js
        //TODO: Link for the tutorial: https://www.youtube.com/watch?v=vUe91uOx7R0


        return (
            <div className="title">
                <h1>FireGram</h1>
                <h2>Your Pictures</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <UploadForm />
            </div>
        )

}

export  default PictureSite;