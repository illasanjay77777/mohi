import React, { useState } from 'react'
import BasicExample from './BasicExample.js'

export default function Home() {
    
    const [first, setfirst] = useState(false)

    const onClickButton = (event)=>{
        if(first === true) setfirst(false)
        else setfirst(true)    
    }

    return (
        <div className='container'>
            <h1>This is home page of routing example website</h1>
            <button className='btn btn-primary' onClick={onClickButton}>Hi Toast</button>
            {
                first===true && <BasicExample onClickButton={onClickButton}/>
            }


            {/* <div>
                <button type="button" className="btn btn-primary" id="liveToastBtn" onClick="onClickToast">Show live toast</button>
                <div className="position-fixed bottom-0 end-0 p-3" style={{ "z-index": 11 }}>
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
