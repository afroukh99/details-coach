import React from 'react'

const Stars = ({starsNumber , size}) => {
  return (
    <div className="flex items-center gap-2">
    {Array(starsNumber).fill().map((_, index) => (
        <img  className={size} key={index} src="/images/star.png" alt="star" />
    ))}
</div>
  )
}

export default Stars