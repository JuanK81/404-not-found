

const Button = (props) => {
    return <button className="base-button" onClick={props.onClick} >{props.text}</button>
};

export default Button;