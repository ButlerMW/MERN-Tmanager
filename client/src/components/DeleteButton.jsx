import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup'

export default props => {
    const { teamId, successCallback } = props;
    const deleteTeam = e => {
        axios.delete("http://localhost:8000/api/players/delete/" + teamId)
            .then(res => {
                if(window.confirm("are you to git rid of this cocksucker??")){
                    successCallback();
                }
            })
    }

    return (
        // <Popup trigger={<button> Delete </button>}>
        //     {close => (
        //         <div>
        //             <p>Are you sure you want to delete?</p>
        //             <button onClick={deleteTeam}>
        //                 Yes
        //             </button>
        //             <button onClick={close}>
        //                 No
        //             </button>
        //         </div>
        //     )}
        // </Popup>
        <div>
            <button onClick={deleteTeam}>
                Delete
            </button>
        </div>
    )
}