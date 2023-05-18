

function closeAllWindows() {
    while (WindowList.length != 0){
        WindowList.forEach( win => win.close() )
        WindowList.pop()
    }
}

function closeSelectedWindow(index) {
    WindowList[index].close()
}
