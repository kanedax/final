import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './layouts/adminLayout/Index';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Index />
            </div>
        </BrowserRouter>
    );
}

export default App;
