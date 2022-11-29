import React, {useState} from 'react'
import FancyLoadingAnimation from 'fancy-loading-animation'
import 'fancy-loading-animation/dist/index.css'
import './Loader.css'

const Loader = ({loading}) => {
  return (
    <>
        {
            loading && 
            <div className='loader-container'>
                    <FancyLoadingAnimation
                    loadingAnimationVarient='puppy'
                    loadingAnimationDelay={0.3}
                    loadingCharacterDirection='right'
                    loadingTextStyle={{ color: 'white' }}
                    />
            </div>
        }
    </>
  )
}

export default Loader