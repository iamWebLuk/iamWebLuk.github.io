import React, {useContext} from 'react';
import UserNameContext from "../../UserNameContext";

export default function SettingsPage() {

    const halli = useContext(UserNameContext);

    return(
        <div>
            Settings Site
            {halli}
        </div>
    )
}