import React ,{useState} from 'react'
import TextReview from './TextReview';

export default function TextForm(props) {
    const [Text, setText] = useState("");

    const HadleOnChange = (e)=>{
        setText(e.target.value)
    }
    const HandleOnUpperClick =()=>{
        let Newtext = Text.toUpperCase()
        setText(Newtext)
    }

    const HandleOnLowerClick =()=>{
        if(Text.toUpper){
            return false;
        }
        else{
        let Newtext = Text.toLowerCase()
            setText(Newtext)
        }
    }

    return (
        <>
            <div className='container my-3'>
                <div className="form-group">
                    <h2>{props.title}</h2>
                    <textarea className="form-control bg-white" placeholder='Enter some text here' id="exampleFormControlTextarea1" rows="8" value = {Text} onChange={HadleOnChange}></textarea>
                </div>
                <div className="container my-4">
                    <button className="btn btn-primary mx-2" onClick={HandleOnUpperClick}>CovertToUpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={HandleOnLowerClick}>CovertToLowerCase</button>
                    {/* <button className="btn btn-primary">CovertToUpperCase</button> */}
                </div>
            </div>
            <TextReview text = {Text}/>
        </>
    )
}
