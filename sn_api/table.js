class Table {
    constructor(snInstanceURL, snCookie, options) {
        this.snInstanceURL = snInstanceURL;
        this.snCookie = snCookie;
        this.options = options;
    }
    getTable(callBack) {
        const request = require('request')
        request.debug = this.options.verbose
        request({
            baseUrl: this.snInstanceURL,
            method: 'GET',
            // This uri is a part of myTables service.
            uri: '/api/now/table/x_entg_hhs_ea_it_system?sysparm_display_value=true&sysparm_fields=name%2Cacronym%2Cuuid',
            json: true,
            // Set the cookie to authenticate the request.
            headers: {
                'Cookie': this.snCookie
            }
        }, (err, response, body) => callBack(err, response, body));
    }
}

module.exports = Table
