import React from 'react'


type Color = {
    color: string
}
const Border = ({ color }: Color) => {
    return (
        <div className="border" style={{ backgroundColor: color }} />
    )
}
export default Border