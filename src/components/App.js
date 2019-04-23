import React from 'react';

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
                {this.state.language}
            </div>
        )
    }
}

export default App;