import {ThemeContextConsumer} from './ThemeContext';

function Fiston() {
    return(
        <ThemeContextConsumer>
        { ({theme, toggleTheme}) => (
            <>
                <h3>Fiston, 
                    { theme === 'dark' &&
                        <span>Sombre</span>
                    }
                </h3>
                <button onClick={() => toggleTheme()}>Toggle Theme</button>

            </>
        )}
        </ThemeContextConsumer>
    )
}

export default Fiston;