/*
const LaunchDarklyFlagsUtils = {
    getSiteMaintenanceFlags: getLDFlagsFn => {
        const { fullSiteMaintenance, partialSiteMaintenance } = getLDFlagsFn();

        return {
            isFullSiteOn: fullSiteMaintenance === true,
            isPartialSiteOn: partialSiteMaintenance === true,
            isAnyOn: fullSiteMaintenance === true || partialSiteMaintenance === true,
            isAllOn: fullSiteMaintenance === true && partialSiteMaintenance === true
        };
    }
};

export default LaunchDarklyFlagsUtils;
*/

function LaunchDarklyFlagsUtils(getLDFlagsFn) {
    this.getLDFlagsFn = getLDFlagsFn;

    const getSiteMaintenanceFlags = () => {
        const allFlags = this.getLDFlagsFn();
        let target = {}
        const x = Object.keys(allFlags)
                        .filter(k => k.endsWith('SiteMaintenance'))
                        .reduce((obj, currentKey) => obj['prop'] = 'val', target);

        console.log('ALL FLAGS');
        console.log(x);
        console.log('');
        
        const  { fullSiteMaintenance, partialSiteMaintenance } = this.getLDFlagsFn();

        const allValues = [fullSiteMaintenance, partialSiteMaintenance];

        return {
            isFullSiteOn: fullSiteMaintenance === true,
            isPartialSiteOn: partialSiteMaintenance === true,
            isAnyOn: allValues.some(v => v === true),
            isAllOn: allValues.every(v => v === true)
        };
    };
    
    return {
        getSiteMaintenanceFlags
    };
};

export default LaunchDarklyFlagsUtils;