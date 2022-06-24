import React, { useState } from 'react';
import { ProgressBar } from "react-bootstrap";

import ProgressBarOwn from "../ProgressBar/ProgressBar";

function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)
    const allowedTypes = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
       let selected = e.target.files[0];

       if (selected && allowedTypes.includes(selected.type) ) {
           console.log(selected)
           setFile(selected.name)
           setError(null)
           console.log(file)
       } else {
           setFile(null);
           setError("Please select an image file (png or jpeg)")

       }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                { error && <div className="error"> { error } </div> }
                { file && <div className="file"> { file } </div> }
                { file && <ProgressBarOwn file={file} setFile={setFile} />}
                <ProgressBar now={30} />
            </div>
        </form>
    )
}

export default UploadForm;