import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import Seo from '../../../shared/layout-components/seo/seo';
const Leafletmapsdata = dynamic(
    () => import('../../../shared/data/maps/leafletmapsdata'),
    { ssr: false }
);
const Leafletmaps = () => {
    return (
        <Fragment>
            <Seo title={'Leafletmaps'} />

            <Leafletmapsdata />
        </Fragment>
    );
};
Leafletmaps.layout = 'Contentlayout';
export default Leafletmaps;
