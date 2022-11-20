import React from 'react';
import Input from './Input';
import Switch from './Switch';
// import Date from './Date';
// import File from './File';
// import Radio from './Radio';


const AuthFormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'switch':
            return <Switch {...props} />
        // case 'date':
        //     return <Date {...props} />
        // case 'file':
        //     return <File {...props} />
        default:
            return null
    }
}
export default AuthFormikControl;