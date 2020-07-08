import React from 'react';
import Letter from './Letter';

class Word extends React.Component{
    constructor(props){
        super(props);
        this.state={
            choosenWord:props.choosenWord,
        }
    }

}
export default Word