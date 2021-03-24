import React from 'react';
import StyledButton from './StyledButton'

const Button = (props) => {

    const {text, background, width, radius, color} = props;
    return (
        <StyledButton background={background} width={width} radius={radius} color={color} { ...props }>
            {text}
        </StyledButton>
    )
}

export default Button;