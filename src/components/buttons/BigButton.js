const BigButton = (props) => {
    return (
        <button
            className = "bg-red text-white font-bold py-2 px-8 rounded"
            onClick = {props.onClick}
        >
            {props.text}
        </button>
    );
}
export default BigButton;