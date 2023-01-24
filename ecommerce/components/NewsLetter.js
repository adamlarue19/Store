import React from 'react'


const NewsLetter = () => {
    return (
        <div className='newsletter-container'>
            <h1 className='newslettter-title'> Join our News Letter Today</h1>
            <p className='newsletter-text'> Subscribe to our newsletter to stay up to date on all of our sales and promtions, as well as new realses!</p>
            <div className='input-container'>
                <input type='email' placeholder='Enter Email' className='newsletter-input'/>  
            </div>
            <button  className='submit'> Subscribe
                  
                </button>
        </div>
    )
}

export default NewsLetter