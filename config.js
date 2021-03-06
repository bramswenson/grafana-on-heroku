module.exports =  {
    "listen_port": process.env.PORT,
    // Control HTTP max-Age header. Whether the browser cache static grafana files or not?
    // 0 for no-cache, unit in millisecond, default to 0
    // We strongly recommand you set to a larger number such as 2592000000(a month) to get a better loading speed
    "brower_cache_maxage": 0,
    "cookie_secret": process.env.COOKIE_SECRET,

    // We use the following redirect URI:
    // http://YOUR-grafana-SITE:[listen_port]/auth/google/callback
    // Please add it in the google developers console first.
    // The client ID of Google OAuth2
    "client_id": process.env.GOOGLE_CLIENT_ID,
    "client_secret": process.env.GOOGLE_CLIENT_SECRET,  // The client secret of Google OAuth2
    "allowed_emails": process.env.ALLOWED_EMAILS.split(',')  // An emails list for the authorized users

};
