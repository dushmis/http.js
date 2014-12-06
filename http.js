var http = {
    DEFAULTS: {
        method: "GET",
        url: "./",
        async: true,
        data: null,
        onload: function() { }
    },
    request: function(options) {
        var options = this.options(options);
        var req = new XMLHttpRequest();
        req.onload = options.onload;
        req.open(options.method, options.url, options.async);
        req.send(options.data);
        return req;
    },
    options: function(options) {
        return {
            method: options.method || this.DEFAULTS.method,
            url: options.url || this.DEFAULTS.url,
            async: (typeof options.async === "undefined") ? this.DEFAULTS.async : options.async,
            data: (typeof options.data === "undefined") ? this.DEFAULTS.data : options.data,
            onload: options.onload || this.DEFAULTS.onload
        }
    },
    get: function(options) {
        return this.request(options);
    },
    post: function(options) {
        options.method = "POST";
        return this.request(options);
    }
}