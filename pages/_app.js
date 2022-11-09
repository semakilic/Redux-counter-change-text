import React from 'react';
import "/public/style.css"

export default function App({ Component, pageProps }) {
    return (
            <Component {...pageProps} />
    );
}
