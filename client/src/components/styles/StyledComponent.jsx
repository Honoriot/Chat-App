import {styled} from '@mui/material'
import {Link as LinkComponent} from 'react-router-dom'

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1
})

export const Link = styled(LinkComponent)({
    textDecoration: 'none',
    color: 'black',
    padding: '0.5rem',
    '&:hover': {
        backgroundColor: 'rgba(143, 251, 147, 1)'
    }
})

export const InputBox = styled("input")`
width: 100%;
height: 100%;
border: none;
outline: none;
padding: 0 3rem;
border-radius: 1.5rem;
background-color: ${'rgba(215, 218, 215, 0.8)'};
`

export const SearchField = styled("input")`
padding: 1rem 2rem;
width: 20vmax;
border: none;
outline: none;
border-radius: 1.5rem;
background-color: ${'rgba(215, 218, 215, 0.8)'};
font-size: 1.2rem;
`

export const CurveButton = styled('button')`
border-radius: 1.5rem;
padding: 1rem 2rem;
border: none;
outline: none;
cursor: pointer;
background-color: ${'rgba(0, 0, 0, 0.8)'};
color: white;
font-size: 1.1rem;
&:hover {
background-color: rgba(31, 30, 30, 0.8);
}
`