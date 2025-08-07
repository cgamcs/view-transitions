async function toggleDialog(dialogId) {
    const viewTransitionClass = 'vt-element-animation'
    const viewTransitionClassClosing = 'vt-element-animation-closing'

    // Flujo de cerrado
    if (!dialogId) {
        const openDialog = document.querySelector('dialog[open]')
        const originElement = document.querySelector('[origin-element]')

        openDialog.style.viewTransitionName = 'vt-shared'
        openDialog.style.viewTransitionClass = viewTransitionClassClosing

        const viewTransition = document.startViewTransition(() => {
            originElement.style.viewTransitionName = 'vt-shared'
            originElement.style.viewTransitionClass = viewTransitionClassClosing

            openDialog.style.viewTransitionName = ''
            openDialog.style.viewTransitionClass = ''

            openDialog.close()
        })
        await viewTransition.finished

        originElement.style.viewTransitionName = ''
        originElement.style.viewTransitionClass = ''
        originElement.removeAttribute('origin-element')

        return
    }
    
    // Flujo de apertura
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
}