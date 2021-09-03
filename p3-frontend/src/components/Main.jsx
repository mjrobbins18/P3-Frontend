import React from 'react';
import Browse from './Browse';
import Collection from './Collection';
import Featured from './Featured';


function Main(props) {
    return (
        <div>
            <div>
                <Browse/>
                <Collection/>
                <Featured/>
            </div>
        </div>
    );
}

export default Main;