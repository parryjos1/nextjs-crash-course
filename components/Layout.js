import Head from 'next/head';
import Navbar from './Navbar';

// If you put the head on just a specific page it would only affect that page 
// otherwise it will only affect the page you put it on
const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css" rel="stylesheet" integrity="sha384-LV/SIoc08vbV9CCeAwiz7RJZMI5YntsH8rGov0Y2nysmepqMWVvJqds6y0RaxIXT" crossorigin="anonymous"></link>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;