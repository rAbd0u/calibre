/*
 * Hyphenation
 * Copyright 2008 Kovid Goyal
 * License: GNU GPL v3
 */

function do_hyphenation(lang) {
    Hyphenator.config(
        {
        'minwordlength'    : 6,
        //'hyphenchar'     : '|',
        'displaytogglebox' : false,
        'remoteloading'    : false,
        'doframes'         : true,
        'defaultlanguage'  : 'en',
        'storagetype'      : 'session',
        'onerrorhandler'   : function (e) {
                                window.py_bridge.debug(e);
                            }
        });
    Hyphenator.hyphenate(document.body, lang);
}

