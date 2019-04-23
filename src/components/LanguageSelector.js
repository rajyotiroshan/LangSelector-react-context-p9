import React from 'react';
import LanguageContext from '../contexts/languageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render(){
        console.log(this.context);
        return(
         <div>
                Select A Language
                <i className="flag us" onClick={()=>this.context.onLanguageChange('english')}></i>
                <i className="flag in" onClick={()=>this.context.onLanguageChange('indian')}></i>
        </div>
        );
    }
}

export default LanguageSelector;