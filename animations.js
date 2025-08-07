async function toggleDialog(dialogId) {
    const viewTransitionClass = 'vt-element-animation'
    const viewTransitionClassClosing = 'vt-element-animation-closing'
    
    const dialog = document.getElementById(dialogId)
    const originElement = event.currentTarget

    dialog.style.viewTransitionName = 'vt-shared'
    dialog.style.viewTransitionClass = viewTransitionClass

    originElement.style.viewTransitionName = 'vt-shared'
    originElement.style.viewTransitionClass = viewTransitionClass
    originElement.setAttribute('origin-element', '')

    const viewTransition = document.startViewTransition(() => {
        originElement.style.viewTransitionName = ''
        originElement.style.viewTransitionClass = ''
        dialog.showModal()
    })
    await viewTransition.finished
    
    
    // if (!dialogId) {
    //     const openDialog = document.querySelector('dialog[open]')
    //     openDialog.close()
    
    //     return
    // }
}