const MultiImageFrame = (props) => {
    const _style = {
        // textAlign : 'center',
        // color : 'var(--light)',
        // backgroundColor : 'var(--accent2)',
        // padding : '2px 0 2px 0px'
    }

    return (
        <div style={_style}>
            <img scr={props.images} alt="Cannot load images" />
        </div>
    );
}

export default MultiImageFrame;