import React, {useState} from 'react'
// useState is imported to use hooks
// hooks helps to use the features and methods of class-based components in function-based components


export default function Textform(props) {
    const toUppercase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Coverted to Uppercase','success')
    }

    const toLowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lowercase','success')
    }

    const handleSentenceCase = () =>{
        for(let i = 0;i < text.length; i++){
            let sentence = text.split(". ")
            for(let i = 0; i < sentence.length; i++){
                sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
            }
            let newText = sentence.join(". ")
            setText(newText)
        }
        props.showAlert('Converted to Sentence case', 'success')
    }

    const handleCopy = () =>{
        var text = document.querySelector('#myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard','success')
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed','success')
    }

    const handleClear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert('Text Area cleared','success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const wordCount = () =>{
        if(text.length === 0){
            return 0;
        }
        else if(text.charAt(text.length-1) === " " && !(!/\S/.test(text))){
            return text.split(" ").length-1
        }
        else if (!/\S/.test(text)){
            return 0;
        }
        return text.split(" ").length
    }

    // general syntax-->  const [variable,function] = useState('State of component given by variable')
    const [text,setText] = useState('Enter text here')
  return (
    <>
        <div style = {{color: props.mode === 'dark'?'white':'black'}}>
        <br />
        <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* a function needs to be written for the onChange */}
                <textarea className="form-control" id="myBox" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'black':'white',color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
                {/* the two curly brackets are used for changing the style. One set is for using javascript in jsx and the other one is for the object which is used to change the html properties using javascript */}
            </div>
            <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1 btn-sm" onClick={toUppercase}>To Uppercase</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1 btn-sm" onClick={toLowercase}>To Lowercase</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1 btn-sm" onClick={handleSentenceCase}>Lower to Sentence case</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1 btn-sm" onClick={handleClear}>Clear textarea</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1 btn-sm" onClick={handleCopy}>Copy text</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1 btn-sm" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            
    </div>
    <div className="container my-4" style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        <p>
            {wordCount()} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    
  )
}

// text.split(" ").length