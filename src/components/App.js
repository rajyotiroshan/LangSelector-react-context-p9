import React from 'react';
import UserCreate from '../components/UserCreate';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';
class App extends React.Component {
    state = {
        language: "english"
    }

    /** listener for flag icon*/

    onLanguageChange(language){
        this.setState({language});
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select A Language
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')}></i>
                    <i className="flag in" onClick={()=>this.onLanguageChange('indian')}></i>
                </div>
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>{/**only value */}
                         <UserCreate />  
                    </LanguageContext.Provider>                    
                </ColorContext.Provider>

                
            </div>
        )
    }
}

export default App;