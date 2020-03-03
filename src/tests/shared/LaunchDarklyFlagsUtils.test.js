import LaunchDarklyFlagsUtils from "../../shared/LaunchDarklyFlagsUtils";

describe('Launch Darkly Flags Utils unit tests', () => {

    let getFlagsFn;

    beforeEach(() => {
        getFlagsFn = jest.fn();
    }); 

    afterEach(() => {
        getFlagsFn.mockClear();
    });

    it('should return false for both full site and partial site maintenance are off', () => {
        getFlagsFn.mockReturnValue({ fullSiteMaintenance: false, partialSiteMaintenance: false});

        const ldFlagsUtils = new LaunchDarklyFlagsUtils(getFlagsFn);
        const maintenanceFlags = ldFlagsUtils.getSiteMaintenanceFlags();

        expect(maintenanceFlags.isFullSiteOn).toBeFalsy();
        expect(maintenanceFlags.isPartialSiteOn).toBeFalsy();
        expect(maintenanceFlags.isAnyOn).toBeFalsy();
        expect(maintenanceFlags.isAllOn).toBeFalsy();
    });

    it('should return correct flags for when full site maintenance is on', () => {
        getFlagsFn.mockReturnValue({ fullSiteMaintenance: true, partialSiteMaintenance: false});

        const ldFlagsUtils = new LaunchDarklyFlagsUtils(getFlagsFn);
        const maintenanceFlags = ldFlagsUtils.getSiteMaintenanceFlags();

        expect(maintenanceFlags.isFullSiteOn).toBeTruthy();
        expect(maintenanceFlags.isPartialSiteOn).toBeFalsy();
        expect(maintenanceFlags.isAnyOn).toBeTruthy();
        expect(maintenanceFlags.isAllOn).toBeFalsy();
    });

    it('should return correct flags for when partial site maintenance is on', () => {
        getFlagsFn.mockReturnValue({ fullSiteMaintenance: false, partialSiteMaintenance: true });

        const ldFlagsUtils = new LaunchDarklyFlagsUtils(getFlagsFn);
        const maintenanceFlags = ldFlagsUtils.getSiteMaintenanceFlags();

        expect(maintenanceFlags.isFullSiteOn).toBeFalsy();
        expect(maintenanceFlags.isPartialSiteOn).toBeTruthy();
        expect(maintenanceFlags.isAnyOn).toBeTruthy();
        expect(maintenanceFlags.isAllOn).toBeFalsy();
    });

    it('should return correct flags for when both full and partial maintenance are on', () => {
        getFlagsFn.mockReturnValue({ fullSiteMaintenance: true, partialSiteMaintenance: true });

        const ldFlagsUtils = new LaunchDarklyFlagsUtils(getFlagsFn);
        const maintenanceFlags = ldFlagsUtils.getSiteMaintenanceFlags();

        expect(maintenanceFlags.isFullSiteOn).toBeTruthy();
        expect(maintenanceFlags.isPartialSiteOn).toBeTruthy();
        expect(maintenanceFlags.isAnyOn).toBeTruthy();
        expect(maintenanceFlags.isAllOn).toBeTruthy();
    });

});