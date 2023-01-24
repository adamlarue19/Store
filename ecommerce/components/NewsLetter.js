import React from 'react'

const NewsLetter = () => {
    return (
        <div className='newsletter-container'>
            <h1 className='newslettter-title'> Join our News Letter Today</h1>
            <p className='newsletter-text'> Subscribe to our newsletter to stay up to date on all of our sales and promtions, as well as new realses!</p>

            <input type='email' placeholder='Enter Email' className='newsletter-input'></input>

        </div>
    )
}

export default NewsLetter