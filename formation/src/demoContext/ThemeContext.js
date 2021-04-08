import React, {createContext} from 'react';

const { Provider, Consumer } = createContext();

class ThemeContextProvider extends React.Component
{
    state = {
        theme: 'dark'
    }

    toggleTheme = () => {
       this.setState(prevState => {
           return {
               theme: prevState.theme === 'dark' ? 'light' : 'dark'
           }
       }) 
    }


    render() {
        return(
            <Provider value={{
                theme: this.state.theme,
                toggleTheme: this.toggleTheme
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }