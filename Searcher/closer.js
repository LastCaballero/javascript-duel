

function closeAllWindows() {
    WindowList.forEach((win) => {
        win.close()
        WindowList = []
    })
}

function closeSelectedWindow(index) {
    WindowList[index].close()
}