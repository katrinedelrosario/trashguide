//displays a heading, allowing dynamic content and styling
export const Title = ({title, className}) => {
    return <h1 className={className}>{title}</h1>
}