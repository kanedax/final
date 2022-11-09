import React from 'react';

const Avatar = ({name , imagepath}) => {
    return (
        <div className="pt-1 pb-2 d-flex flex-column avatar_li mb-2 position-relative sidebar_item">
            <span className="avatar_box">
                <img className="w-100 rounded-circle" src={imagepath} />
            </span>
            <div className="sidebar_avatar_name text-center hiddenable"> {name} </div>
        </div>
    );
}

export default Avatar;
