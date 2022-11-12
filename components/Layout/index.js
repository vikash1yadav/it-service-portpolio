/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Head from 'next/head'
import Header from '../Header';
import Footer from '../Footer';
import TopBar from '../TopBar';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Best Cloud Company</title>
                {/* <meta name="description" content={description} />
                <meta name="keywords" content={keywords.join()} />
                <link rel="canonical" href={`${BASE_URL}${slugUrl}`} /> */}

                <script src="assets/vendors/jquery/jquery-3.6.0.min.js"></script>
                <script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendors/jarallax/jarallax.min.js"></script>
                <script src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
                <script src="assets/vendors/jquery-appear/jquery.appear.min.js"></script>
                <script src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
                <script src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="assets/vendors/jquery-validate/jquery.validate.min.js"></script>
                <script src="assets/vendors/nouislider/nouislider.min.js"></script>
                <script src="assets/vendors/odometer/odometer.min.js"></script>
                <script src="assets/vendors/swiper/swiper.min.js"></script>
                <script src="assets/vendors/tiny-slider/tiny-slider.min.js"></script>
                <script src="assets/vendors/wnumb/wNumb.min.js"></script>
                <script src="assets/vendors/wow/wow.js"></script>
                <script src="assets/vendors/isotope/isotope.js"></script>
                <script src="assets/vendors/countdown/countdown.min.js"></script>
                <script src="assets/vendors/owl-carousel/owl.carousel.min.js"></script>
                <script src="assets/vendors/bxslider/jquery.bxslider.min.js"></script>
                <script src="assets/vendors/bootstrap-select/js/bootstrap-select.min.js"></script>
                <script src="assets/vendors/vegas/vegas.min.js"></script>
                <script src="assets/vendors/jquery-ui/jquery-ui.js"></script>
                <script src="assets/vendors/timepicker/timePicker.js"></script>
                <script src="assets/js/notech.js"></script>
            </Head>
            <TopBar />
            <Header />
            {children}
            <Footer />
            <a href="#" data-target="html" className="scroll-to-target scroll-to-top change_color">
                <i className="fa fa-angle-up"></i>
            </a>
        </>
    );
}