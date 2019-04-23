import React from 'react';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component {
    //add property to Button.
    //need when access using this.context
    //static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english'?'Submit':'Voorleggen';
    }

    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language})=>this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    render(){
        //need when defined contextType.
       // const text = this.context === 'english'?'Submit': 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderButton(color)}                      
            </ColorContext.Consumer>

        );
    }
}
export default Button;