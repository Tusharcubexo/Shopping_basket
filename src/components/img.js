// const url = "http://localhost:3000/"
// console.log(process.env.REACT_APP_URL)
// import ReactImageMagnify from 'react-image-magnify';
// import {
//     Magnifier,
//     GlassMagnifier,
//     SideBySideMagnifier,
//     PictureInPictureMagnifier,
//     MOUSE_ACTIVATION,
//     TOUCH_ACTIVATION
// } from "react-image-magnifiers";


const url = process.env.REACT_APP_URL
export default function Images(prop) {

    console.log(url);
    return (
        <>
            <img data-image="red" className="active" src={url + prop.pic} alt='img' />
            {/* <GlassMagnifier
                imageSrc={url + prop.pic}
                imageAlt="Example"
            />

            <GlassMagnifier
                imageSrc={url + prop.pic}
                imageAlt="Example"
                // largeImageSrc="./large-image.jpg" // Optional
            />

            <Magnifier
                imageSrc={url + prop.pic}
                imageAlt="Example"
                largeImageSrc={url + prop.pic} // Optional
                mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
            /> */}
        </>
    )

}