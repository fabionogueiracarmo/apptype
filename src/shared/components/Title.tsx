import {PropsWithChildren} from 'react'
type TitleProps = {
    color?: string,
    title: string
}

function Title(props: PropsWithChildren<TitleProps>){
    const {color="green", children} = props;
    return <h1 style={{color: color}}>{props.title}</h1>
}

export default Title;