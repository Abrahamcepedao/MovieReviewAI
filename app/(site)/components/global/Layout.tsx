//react
import { JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";

//Components
import Header from "./Header";

interface Props {
    children: ReactNode;
}

const Layout = ({children}:Props) => {
    
        return (
            <div className='h-screen max-h-screen bg-ds__lightAlt dark:bg-ds__darkAlt p-2'>
                <Header/>
                {/* dashboard content container */}
                <div className="lg:absolute w-full lg:w-ds__right lg:right-5 lg:top-20">
                    <div className="max-w-6xl m-auto max-h-ds__container overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        )
}

export const getLayout = (page: string | number | boolean | ReactElement<any //Components
        , string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => <Layout>{page}</Layout>

export default Layout