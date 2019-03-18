import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>TalkingInk | welcome</title>
            <link rel="Stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css"/>
        </Head>
        <Navbar />
        <div className="ml-4 mt-4">
            {props.children}
        </div>

    </div>
)

export default Layout