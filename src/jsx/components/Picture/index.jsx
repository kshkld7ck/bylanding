import React from 'react'
// import './index.scss'
import PropTypes from 'prop-types'

function Picture(props) {
    const { pictureName, pictureAlt, wrapperClass } = props

    return (
        <figure className={wrapperClass}>
            <picture>
                <source
                    srcSet={`images/@1x/${pictureName}.webp 1x, images/@2x/${pictureName}.webp 2x`}
                    type="image/webp"
                />
                <img
                    src={`images/@1x/${pictureName}.png`}
                    srcSet={`images/@2x/${pictureName}.png 2x`}
                    className="img-responsive"
                    alt={pictureAlt}
                    loading="lazy"
                />
            </picture>
        </figure>
    )
}

Picture.propTypes = {
    pictureName: PropTypes.string.isRequired,
    pictureAlt: PropTypes.string,
    wrapperClass: PropTypes.string,
}

Picture.defaultProps = {
    pictureAlt: '',
    wrapperClass: '',
}

export default Picture
