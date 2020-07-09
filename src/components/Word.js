import React from 'react';
import Letter from './Letter';

const maxLife=20;
class Word extends React.Component{
    constructor(props){
        super(props);
        this.state={
            choosenWord:props.choosenWord,
            letters:[],
            usedLetters:[],
            isError: false,
            nbTry:0,
        }
    }
    playLetter=(letter)=>{
        const usedLetters= this.state.usedLetters
        
        let error =false
        if(usedLetters.indexOf(letter)===-1){
            
            this.setState({
                usedLetters:[...usedLetters,letter],
                
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
        let  nbTry=this.state.nbTry
        let letters=[]
        for (let i = 0; i < choosenWord.length; i++) {
            let letter = choosenWord.charAt(i)
            let reveal= this.state.usedLetters.indexOf(letter)!==-1? true:false
            if(!reveal){
                nbTry= nbTry+1
            }
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
            nbTry:nbTry
        },()=>console.log(nbTry))
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
                <h2 className={this.state.nbTry>maxLife? 'show':'hide' }>Vous avez Perdu le mot était : {this.props.choosenWord}</h2>
                <div className={this.state.nbTry>maxLife? 'hide':'show' } >
                <p className={this.state.isError? 'error':''} >{this.state.letters} </p>
                <p className={this.state.isError? '':'hide'}>Lettre déja utilisée!</p>
                </div>

            </div>
            
        )
    }
}
export default Word