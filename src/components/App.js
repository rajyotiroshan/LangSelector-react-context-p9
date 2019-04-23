import React from 'react';
import UserCreate from '../components/UserCreate';
import {LanguageStore} from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {
    render(){
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector/>
                    <ColorContext.Provider value="primary">
                            <UserCreate />  
                    </ColorContext.Provider>                    
                </LanguageStore>
            </div>
        )
    }
}

export default App;