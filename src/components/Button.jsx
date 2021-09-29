import React from 'react'

function Button({className, name, onClick}) {
    return <button className={className} name={name} onClick={onClick}>{name}</button>
}

export default Button
