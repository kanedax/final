import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrevPageBtn = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button className='btn btn-sm btn-secondary' onClick={()=>navigate(-1)} >بازگشت</button>
        </div>
    );
}

export default PrevPageBtn;
