async function applyAutoFilterToCurrentPhoto() {
    console.log("[AutoPhoto] editing photo");
    AutoPhoto.editPhoto();
    await sleep(1000);
    
    console.log("[AutoPhoto] waiting for edit mode");
    await waitFor(() => AutoPhoto.isEditing());
    await sleep(1000);
    
    console.log("[AutoPhoto] selecting filter: Auto");
    AutoPhoto.selectFilterAuto();
    await sleep(1000);
    
    console.log("[AutoPhoto] done, leaving edit mode");
    AutoPhoto.editPhotoDone();
    await sleep(1000);
    
    console.log("[AutoPhoto] waiting for edit mode to close");
    await waitFor(() => !AutoPhoto.isEditing());
    await sleep(1000);

    console.log("[AutoPhoto] edit mode is closed");
}

async function applyAutoFilterToAllPhotos() {
    console.log("[AutoPhoto] start");

    while (true) {
        await applyAutoFilterToCurrentPhoto();

        if (!AutoPhoto.hasNextPhoto()) {
            break;
        }

        console.log("[AutoPhoto] next photo");
        AutoPhoto.nextPhoto();
        await sleep(5000);
    }

    console.log("[AutoPhoto] end");
}

applyAutoFilterToAllPhotos();