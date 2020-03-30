import React from 'react';
import { Link } from 'react-router-dom';

import './error404.scss';

export default function Error404() {
    return (
        <div className="error-404">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to="/">
                <h3>Go to home page</h3>
            </Link>
        </div>
    );
}