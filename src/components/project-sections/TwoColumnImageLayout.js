

export default function TwoColumnImageLayout({ project, imageData }) {

    const imageElements = imageData.map((image) => {
        return (
            <div className="col">
                <img className="col-image" src={"img/" + project + "/" + image.imageTitle} alt={image.altText} />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-2">
                {imageElements}
            </div>
        </div>
    )
}