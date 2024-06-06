import React, {forwardRef} from 'react'

const Button = forwardRef(({disabled, ariaExpanded, className, ariaLabel, type, text, onClick, keyDownEvent}, ref) => {
  const handleKeyDown = (e) => {
    if(e.target === "Enter" || e.target === " "){

    }
  }
  return (
   <button 
    onClick={onClick}
    onKeyDown={keyDownEvent}
    className={className} 
    type={type}
    aria-label={ariaLabel}
    disabled={disabled}
    ref={ref}
    ariaExpanded={ariaExpanded}
  >
    {text}
   </button>
  )
})

export default Button
