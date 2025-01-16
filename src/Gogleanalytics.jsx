import ReactGA from "react-ga4";

ReactGA.initialize("GTM-PLWLGSBB"); // Replace with your Measurement ID

const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export { trackPageView };
