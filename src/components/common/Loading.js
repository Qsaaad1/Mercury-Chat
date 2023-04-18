import { BounceLoader } from 'react-spinners'
import React from 'react'

function Loading(props) {
    const { size, color, classname, visible, type } = props
    return (
        <BounceLoader
            visible={visible}
            type={type}
            color={color}
            height={size}
            width={size}
            className={classname}
        />
    )
}

export default React.memo(Loading)
