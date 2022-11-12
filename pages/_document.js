import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title> Best Cloud Company</title>
          {/* <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-touch-icon.png" /> */}
          <link
            rel="icon"
            type="image/png"
            href="assets/images/favicons/cloudsurfex_favicon-removedbg-.png"
          />
          {/* <link rel="icon" type="image/png" sizes="512x512" href="assets/images/favicons/cloudsurfex.png" /> */}
          {/* <link rel="manifest" href="assets/images/favicons/site.webmanifest" /> */}
          <meta
            name="description"
            content="Notech HTML Template For It Solution"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/animate/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/animate/custom-animate.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/fontawesome/css/all.min.css"
          />
          <link rel="stylesheet" href="assets/vendors/jarallax/jarallax.css" />
          <link
            rel="stylesheet"
            href="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/nouislider/nouislider.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/nouislider/nouislider.pips.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/odometer/odometer.min.css"
          />
          <link rel="stylesheet" href="assets/vendors/swiper/swiper.min.css" />
          <link rel="stylesheet" href="assets/vendors/notech-icons/style.css" />
          <link
            rel="stylesheet"
            href="assets/vendors/tiny-slider/tiny-slider.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/reey-font/stylesheet.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/owl-carousel/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/owl-carousel/owl.theme.default.min.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/bxslider/jquery.bxslider.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/bootstrap-select/css/bootstrap-select.min.css"
          />
          <link rel="stylesheet" href="assets/vendors/vegas/vegas.min.css" />
          <link
            rel="stylesheet"
            href="assets/vendors/jquery-ui/jquery-ui.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendors/timepicker/timePicker.css"
          />
          <link rel="stylesheet" href="assets/css/notech.css" />
          <link rel="stylesheet" href="assets/css/notech-responsive.css" />
          <link rel="stylesheet" href="assets/css/notech-dark.css" />

          {/* simple javasrcipt */}

          <script src="assets/vendors/jquery/jquery-3.6.0.min.js" />
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

          {/* template js */}
          <script src="assets/js/notech.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
