

export default function ProjectHeader(props) {

    const title = props.title
    const description = props.description
    const projectType = props.projectType
    const duration = props.duration
    const date = props.date

    return (
        <div className="container py-5 mb-5">
            <h1 className="mb-4">{title}</h1>
            <div className="d-flex flex-wrap justify-content-between">
                <div className="fw-semibold">{description}</div>
                <div className="d-flex flex-wrap justify-content-end">
                    <div className="fw-semibold px-3">{projectType}</div>
                    <div className="fw-semibold px-3">{duration}</div>
                    <div className="fw-semibold px-3">{date}</div>
                </div>
            </div>
        </div>
    )
}