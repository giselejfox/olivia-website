

export default function ProjectHeader(props) {

    const title = props.title
    const description = props.description
    const projectType = props.projectType
    const duration = props.duration
    const date = props.date

    return (
        <div className="container py-5">
            <h1 className="mb-4">{title}</h1>
            <div className="d-flex flex-column flex-md-row flex-wrap justify-content-between fw-bold">
                <div className="pb-3 pb-lg-0 col-md-8 pe-3">{description}</div>
                <div className="d-flex flex-column flex-md-row flex-wrap justify-content-end col-md-4">
                    <div className="px-0 pb-3 pb-lg-0 pe-md-3">{projectType}</div>
                    <div className="px-0 pb-3 pb-lg-0 pe-md-3">{duration}</div>
                    <div className="px-0 pb-3 pb-lg-0 pe-md-3">{date}</div>
                </div>
            </div>
        </div>
    )
}