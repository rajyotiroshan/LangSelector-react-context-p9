import React from 'react'
//create a context object
/* const context = React.createContext("english");//default value 'english'
console.log(context);
export default context; */

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state={language:'english'};//App store or state.

    onLanguageChange= (language)=>{
        this.setState({language});
    }

    render(){
        return (
            <Context.Provider value={{...this.state, onLanguageChange:this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;


