const Display = ({ className, children }) => {
    return <h1 className={`font-practical font-thin text-9xl uppercase ${className ? className : ''}`}>{children}</h1>;
};


const Header1 = ({ className, children }) => {
    return <h2 className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[64px] ${className ? className : ''}`}>{children}</h2>;
};

const Header2 = ({ className, children }) => {
    return <h2 className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[24px] ${className ? className : ''}`}>{children}</h2>;
};
const Header2Semibold = ({ className, children }) => {
    return <h2 className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[24px] font-sm ${className ? className : ''}`}>{children}</h2>;
};

const Body = ({ className, children }) => {
    return <p className={`font-geist leading-none text-[15px] ${className ? className : ''}`}>{children}</p>;
};
const BodySemibold = ({ className, children }) => {
    return <p className={`font-geist leading-none text-[15px] font-semibold ${className ? className : ''}`}>{children}</p>;
};

const Details = ({ className, children }) => {
    return <p className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[13px] ${className ? className : ''}`}>{children}</p>;
}
const DetailsSemibold = ({ className, children }) => {
    return <p className={`font-geist leading-none mt-trim-tight mb-trim-loose text-[13px] font-sm ${className ? className : ''}`}>{children}</p>;

}


export { Display, Header1, Header2, Header2Semibold, Body, BodySemibold, Details, DetailsSemibold };
