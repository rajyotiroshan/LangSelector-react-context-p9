import React from 'react';
import UserCreate from '../components/UserCreate'
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
                    <i className="flag us" onClick={()=>this.onLanguageChange('us')}></i>
                    <i className="flag in" onClick={()=>this.onLanguageChange('indian')}></i>
                </div>
                <UserCreate />
            </div>
        )
    }
}

export default App;