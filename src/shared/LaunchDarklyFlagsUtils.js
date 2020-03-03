function LaunchDarklyFlagsUtils(getLDFlagsFn) {
    this.getLDFlagsFn = getLDFlagsFn;

    const getSiteMaintenanceFlags = () => {
        const allFlags = this.getLDFlagsFn();
        /*
        let target = {}
        const x = Object.keys(allFlags)
                        .filter(k => k.endsWith('SiteMaintenance'))
                        .reduce((obj, currentKey) => obj['prop'] = 'val', target);

        console.log('ALL FLAGS');
        console.log(x);
        console.log('');
        */
        
        const  { fullSiteMaintenance, partialSiteMaintenance } = allFlags;

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