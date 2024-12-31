import { Link } from "react-router-dom";
import Icon from "../icons/Icon";
import { Body } from "../typography/typography";
import LinkWithLoader from "../loader/LinkLoader";

const Cta = ({ URL = "", iconName = null, className, loader = true, children, ...props }) => {

    const body = <Body className={`text-base relative after:content-[''] after:w-0 after:h-px after:bg-black after:absolute after:-bottom-[3px] after:left-0 hover:after:w-full after:transition-all after:ease-slow after:duration-[400ms] ${className ? className : ""}`}>{children}</Body>
    return (
        <>
            <div className="flex flex-row gap-[5px] items-center" {...props}>
                {iconName ? <Icon className="fill-black" name={iconName} /> : null}
                {loader ? <LinkWithLoader to={URL}>{body}</LinkWithLoader> : <Link to={URL} >{body}</Link>}
            </div>
        </>
    );
}

export default Cta
