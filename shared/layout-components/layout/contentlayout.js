import { useSession } from 'next-auth/react';
import { Fragment, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../../shared/redux/store';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Switcher from '../switcher/switcher';
import TabToTop from '../tab-to-top/tab-to-top';

const Contentlayout = ({ children }) => {
    const { data: session } = useSession();
    const [lateLoad, setlateLoad] = useState(false);

    useEffect(() => {
        setlateLoad(true);
    }, []);

    const remove = () => {
        if (document.querySelector('.card.search-result') != null) {
            document
                .querySelector('.card.search-result')
                ?.classList.add('d-none');
        }
    };

    return (
        <Fragment>
            <Provider store={store}>
                <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>
                    <Switcher />
                    <div className="page">
                        <Header session={session} />
                        <Sidebar />
                        <div className="main-content app-content">
                            <div
                                className="container-fluid layout"
                                onClick={() => remove()}
                            >
                                {children}
                            </div>
                        </div>
                        <Footer />
                    </div>
                    <TabToTop />
                </div>
            </Provider>
        </Fragment>
    );
};

export default Contentlayout;
