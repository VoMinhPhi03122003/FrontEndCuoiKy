import {Link} from "react-router-dom";

function SectionBreadcrumb(props) {
    const styleBreadcrumb = {display: "flex", justifyContent: "center"}
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={styleBreadcrumb}>
                    {props.breadcrumbs.map((breadcrumb, index) => (
                        <li className="breadcrumb-item" key={index}>
                            <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

export default SectionBreadcrumb;
