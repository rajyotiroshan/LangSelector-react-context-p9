import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Button extends React.Component {
    //add property to Button.
    static contextType = LanguageContext;

    render(){
        const text = this.context === 'english'?'Submit': 'Voorleggen';
        return (
            <button className="ui button primary">{text}</button>
        );
    }
}
export default Button;