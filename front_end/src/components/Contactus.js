import React from 'react'
import vg from '../assets/vg.png'

const Contactus = () => {
  return (
    <div id='contact'>
        <section >
            <form>
                <h2>
                    CONTACT ME
                </h2>
                <input type='text' placeholder='Your Name' required/>
                <input type='email' placeholder='Your Email' required/>
                <input type='text' placeholder='Your Message' required/>
                <button type='submit'  > Send</button>
                           </form>

        </section>
        <aside>
            <img src={vg} alt='graphis'></img>
        </aside>
    </div>
  )
}

export default Contactus;