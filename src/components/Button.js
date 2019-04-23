import React from 'react';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component {
    //add property to Button.
    //need when access using this.context
    //static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english'?'Submit':'Voorleggen';
    }
    render(){
        //need when defined contextType.
       // const text = this.context === 'english'?'Submit': 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {(color)=>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {/**A child: automatically called by consumer 
                            with current value inside the context object. as first argument */}
                            {(value)=>this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>                          
                }
            
            </ColorContext.Consumer>

        );
    }
}
export default Button;