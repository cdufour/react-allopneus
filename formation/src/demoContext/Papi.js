import React from 'react';
import Papa from './Papa';
import {ThemeContextConsumer} from './ThemeContext';


class Papi extends React.Component
{
    render() {
        return(
            <ThemeContextConsumer>
                { ({theme}) => (
                    <>
                        <h1>Papi, {theme}</h1>
                        <Papa/>
                    </>
                )}
            </ThemeContextConsumer>
        )
    }
}

export default Papi;