import "./styles.css"
export default function Two_content(props) {
    return (
        <div className="two_content">
            <iframe className="iframe_content" src={props.link_1}></iframe>
            <iframe className="iframe_content" src={props.link_2}></iframe>
        </div>
    )
}