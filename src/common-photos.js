const AutoPhoto = {
    isEditing: () => {
        return jQuery('button:contains("Done")').is(":visible");
    },
    editPhoto: () => {
        jQuery("[aria-label='Edit']").click();
    },
    selectFilterAuto: () => {
        jQuery("[aria-posinset='2'").click();
    },
    editPhotoDone: () => {
        jQuery('button:contains("Done")').click();
    },
    hasNextPhoto: () => {
        return jQuery("[aria-label='View next photo']").is(":visible");
    },
    hasPreviousPhoto: () => {
        return jQuery("[aria-label='View previous photo']").is(":visible");
    },
    nextPhoto: () => {
        jQuery("[aria-label='View next photo']").click();
    },
    previousPhoto: () => {
        jQuery("[aria-label='View previous photo']").click();
    }
};