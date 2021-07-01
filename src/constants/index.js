import animationData from '../assets/lotties/grey-loader.json'
import BlackLoaderData from '../assets/lotties/black-loader.json';

export const lottieDefault = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const BlackLoader = {
    loop: true,
    autoplay: true,
    animationData: BlackLoaderData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}