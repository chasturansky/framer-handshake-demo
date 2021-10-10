module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.experiments = webpackConfig.experiments || {};
            webpackConfig.experiments.buildHttp = true;
            return webpackConfig;
        }
    }
}