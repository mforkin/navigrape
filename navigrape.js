var navigrape = {};

navigrape.ajax = function () {
    function get (url, params, includeQ) {
        var script = document.createElement('script');
        script.src = url + (includeQ === false ? '' : '?') + params2UrlParams(params, includeQ);
        document.body.appendChild(script);
    }

    function params2UrlParams(params, includeQ) {
        var sep = '&',
            paramString = (includeQ === false ? sep : '') + "appId=e2333ba5247a4b53b4f1bff96a9dca14";
        for (i in params) {
            if (params.hasOwnProperty(i)) {
                paramString += (sep + i + "=" + params[i]);
            }
        }
        return paramString;
    }

    return {
        get: get
    };
}();

function update (id, html) {
    document.getElementById(id).innerHTML = html;
}