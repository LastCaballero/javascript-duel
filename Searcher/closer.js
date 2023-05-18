

function closeAllWindows() {
    WindowList.forEach((win) => {
        win.close()
        WindowList.pop()
    })
}

function closeSelectedWindow(index) {
    WindowList[index].close()
}