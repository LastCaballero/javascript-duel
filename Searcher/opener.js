

const WindowList = []
const UrlList = []

const bing_str = 'https://www.bing.com/search?q='
const google_str = 'https://www.google.de/search?q='
const duck_str = 'https://duckduckgo.com/?q='


function openWindow(what, where, engine){
    let eng
    switch (engine) {
        case 'bing':
            eng = bing_str
            break
        case 'google':
            eng = google_str 
            break;
        case 'duck':
            eng = duck_str
            break
        default:
            eng = bing_str
            break;
    }
    target = encodeURI(eng + '+' + what + '+' + where)
    WindowList.push(window.open(target))
    UrlList.push(decodeURI(target))
}