import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Ask AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult?
            <>
            <div className="greet">
            <p><span>Hello,</span></p>
            <p>How can i help you?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places i can visit during summer vacation</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly explain this concept: React Native</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>How can i learn full stack development?</p>
                <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest the best ways to communicate with loved ones</p>
                <img src={assets.message_icon} alt="" />
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />

                {loading?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }

            </div>
        </div>
        }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
                <p className="bottom-info">
                    Ask AI may display innacurate info, including about people, so double-check its responses. Your privacy and Ask AI apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main