import React from 'react';
import RandomWord from './RandomWord'
import Animals from './listes/Animals'
import Music from './listes/Music'
import Word from './Word'

class ChooseCateg extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            choosenWord:'',
            choosen:false,
        }
    }
    chooseWord=(e,list)=>{
        e.preventDefault()
        let choosenWord= RandomWord(list)
        this.setState({
                choosen:true,
                choosenWord:choosenWord,
            },()=>console.log(choosenWord))
        
    }



    render(){
        const choosen=this.state.choosen
        const choosenWord= this.state.choosenWord
        return(
            <div>
                <div className={choosen? 'hide':'show'} >
                    <h1> Choisis ta catégorie </h1>
                    <button onClick={(e)=>this.chooseWord(e,Animals)}>Animaux Mignons</button>
                    <button onClick={(e)=>this.chooseWord(e,Music)}>Instruments bruyants</button>
                </div>
                <div className={choosen? 'show':'hide'}>
                    <Word choosenWord={choosenWord} />
                </div>
            </div>
            
        )
    }

}





export default ChooseCateg