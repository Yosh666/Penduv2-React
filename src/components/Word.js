import React from 'react';
import Letter from './Letter';

class Word extends React.Component{
    constructor(props){
        super(props);
        this.state={
            choosenWord:props.choosenWord,
            letters:[],
            usedLetters:[],
            isError: false,
        }
    }
    playLetter=(letter)=>{
        const usedLetters= this.state.usedLetters
        let error =false
        if(usedLetters.indexOf(letter)===-1){
            this.setState({
                usedLetters:[...usedLetters,letter]
            })
        }
        else{
            
                error=true
            
        }
        this.setState({
            isError:error
        })
        this.constructWord()

    }

    constructWord=()=>{
        const choosenWord=this.props.choosenWord
        let letters=[]
        for (let i = 0; i < choosenWord.length; i++) {
            let letter = choosenWord.charAt(i)
            let reveal= this.state.usedLetters.indexOf(letter)!==-1? true:false
            letters.push(
                <Letter 
                    key={i}
                    reveal={reveal}
                    letter={ letter }
                />
            )            
        }
        this.setState({
            letters:letters,

        })
    }

    componentDidMount(){
        window.addEventListener('keyup',(e)=>{
            this.playLetter(e.key.toUpperCase())
        })
        this.constructWord()
    }
    
    render(){
        
        return(
            <div>
                <p className={this.state.isError? 'error':''} >{this.state.letters} </p>
                <p className={this.state.isError? '':'hide'}>Lettre déja utilisée!</p>
            </div>
        )
    }
}
export default Word