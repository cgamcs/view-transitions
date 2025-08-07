function toggleDialog(dialogId) {
    if (!dialogId) {
        const openDialog = document.querySelector('dialog[open]')
        openDialog.close()

        return
    }
    const dialog = document.getElementById(dialogId)
    dialog.showModal()
}