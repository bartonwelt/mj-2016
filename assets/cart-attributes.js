jQuery(function() {
    jQuery("body").on("click", '[name="checkout"], [name="goto_pp"], [name="goto_gc"]', function() {
        var e = !0,
            r = "Please fill this out and you will be able to check out.";
        return jQuery('[name^="attributes"], [name="note"]').filter('.required, [required]').each(function() {
            jQuery(this).removeClass("error"), e && "" == jQuery(this).val() && (e = !1, r = jQuery(this).attr("data-error") || r, jQuery(this).addClass("error"))
        }), e ? void jQuery(this).submit() : (alert(r), !1)
    })
}), jQuery(window).unload(function() {
    var e = jQuery('form[action="/cart"]');
    if (e.size()) {
        var r = {
            type: "POST",
            url: "/cart/update.js",
            data: e.serialize(),
            dataType: "json",
            async: !1
        };
        jQuery.ajax(r)
    }
});
