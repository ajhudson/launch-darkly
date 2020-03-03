import LaunchDarklyFlagsUtils from "./LaunchDarklyFlagsUtils";

export default class SharedFactory {
    createLaunchDarklyFlagsUtils(getLDFlagsFnArg) {
        return new LaunchDarklyFlagsUtils(getLDFlagsFnArg);
    }
}