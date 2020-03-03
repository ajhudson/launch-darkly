import LaunchDarklyFlagsUtils from "./LaunchDarklyFlagsUtils";

const StoredFeatures = {
    getFeature: () => 'Gold',
    getFlagsUtils: fn => new LaunchDarklyFlagsUtils(fn)
};

export default StoredFeatures;