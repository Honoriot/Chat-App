
import { Helmet } from "react-helmet-async";

const Title = ({title="Chat App", description='I am Chotu'})=>{
    return (
    <>
        <Helmet >
            <title>{title}</title>
            <meta name="descrition" content={description} />
        </Helmet>
    </>
    );
}

export default Title;