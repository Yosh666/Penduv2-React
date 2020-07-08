import React from 'react';
import RandomWord from './RandomWord'
import Animals from './listes/Animals'
import Music from './listes/Music'
import Word from './Word'

class ChooseCateg extends React.Component{
    state={
        choosen:false,
        choosenWord:''
    }
    chooseWord=(list)=>{
        const choosen= this.state.choosen
        let choosenWord= RandomWord(list)
        this.setState({
                choosen:true,
                choosenWord:choosenWord,
            })
        
    }



    render(){
        const choosen=this.state.choosen
        const choosenWord= this.state.choosenWord
        return(
            <div>
                <div className={choosen? 'hide':'show'} >
                    <h1> Choisis ta catégorie </h1>
                    <button onClick={this.chooseWord(<Animals/>)}>Animaux Mignons</button>
                    <button onClick={this.chooseWord(<Music />)}>Instruments bruyants</button>
                </div>
                <div className={choosen? 'show':'hide'}>
                    <Word choosenWord={this.state.choosenWord} />
                </div>
            </div>
            
        )
    }

}





export default ChooseCateg