

const WindowList = []
const UrlList = []

const bing_str = 'https://www.bing.com/search?q='
const google_str = 'https://www.google.de/search?q='
const duck_str = 'https://duckduckgo.com/?q='


function openWindow(url, what){
    target = encodeURI(url + what)
    WindowList.push(window.open(target))
    UrlList.push(decodeURI(target))
}