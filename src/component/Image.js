import React from "react";

const Image = (props) => {
    const images = props.images.map(ele => {
        return (<div key={ele.id}>
            <img alt="img" src={ele.urls.regular} />
        </div >)
    });
    return <div>{images}</div>
}
export default Image;
