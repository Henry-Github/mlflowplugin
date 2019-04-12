function OpenIndex(url: string) {
    let host = window.location.hostname
    let port = window.location.port
    let baseURL = 'http://' + host + ':' + port + '/';
    let openURL = '';
    if (url.indexOf('/') == 0) {
        openURL = baseURL + url.substring(1);
    } else {
        openURL = baseURL + url;
    }
    console.log('windows open url: ', openURL)
    window.open(openURL, '_blank')
}

export {OpenIndex}