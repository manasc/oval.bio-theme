function wcpd_loading_remove() {
    jQuery(document).find('.ajax_add_to_cart ').removeClass('loading');
}

function wcpd_getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return false;
}

function wcpd_setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function wcpd_trace_disclaimer(prodId, state) {
    var traceData = {
        'action': 'add_disclaimer_trace_info',
        'state': state,
        'prodId': prodId,
        'ip': wcpd.ip,
        'country': wcpd.country,
        'city': wcpd.city,
        'continent': wcpd.continent,
        'custom_nonce': wcpd.custom_nonce
    };
    //alert(data.toSource());
    jQuery.post(wcpd.ajaxurl, traceData, function(response) {
        //alert('Got this from the server: ' + response);
        var obj = JSON.parse(response);
        if (obj.status) {
            console.log('Trace ok');
        } else {
            console.log('Trace error');
        }
    });
}
jQuery(document).ready(function($) {
    jQuery(window).bind('tb_unload', function() {
        wcpd_loading_remove();
    });

    jQuery("form.cart").submit(function(e) {

        if (wcpd.ptype === "variable") {
            e.preventDefault();
        } else {

            return;
        }
        var data = {
            'action': 'variable_product_disclaimer',
            'prodId': wcpd.product_id,
            'varId': jQuery(document).find("input[name='variation_id']").val(),
            'custom_nonce': wcpd.custom_nonce
        };
        $.post(wcpd.ajaxurl, data, function(response) {
            console.log('Got this from the server: ' + response);
            var obj = JSON.parse(response);
            if (obj.flag) {
                // var message = obj.message;
                var url = obj.url;
                var prodId = obj.prodId;
                var enableCookie = obj.enableCookie;
                var message = obj.message;
                if (wcpd.ptype === "variable") {
                    console.log('yes');
                    jQuery('#TB_ajaxContent').html('');
                    if ((jQuery('#wped_variation_disclaimer').length) == 0) {
                        jQuery('body').append('<div id="wped_variation_disclaimer"><div>' + message + '</div></div>');
                    } else {
                        jQuery('#wped_variation_disclaimer').html('<div>' + message + '</div>');
                    }
                    tb_show(obj.heading, '#TB_inline?inlineId=wped_variation_disclaimer', '');
                }
                jQuery(document).on('click', '.disclaimer_agree', function(a) {
                    a.preventDefault();
                    // user clicked "ok"
                    $('body').toggleClass('modal-open');
                    if (enableCookie) {
                        var cookie = 'product-' + prodId;
                        var duration = wcpd.session;
                        if (duration == 'session') {
                            duration = null;
                        }
                        if (wcpd_getCookie(cookie) === false) {
                            wcpd_setCookie(cookie, prodId, duration);
                        }
                    }
                    if (wcpd.log == 'yes') {
                        // add trace
                        wcpd_trace_disclaimer(prodId, 'Accepted');
                    }
                    $("form.cart").unbind().submit();
                    tb_remove();
                });
                jQuery(document).on('click', '.disclaimer_reject', function(r) {
                    r.preventDefault();
                    // user clicked "cancel"
                    if (wcpd.log == 'yes') {
                        // add trace
                        wcpd_trace_disclaimer(prodId, 'Rejected');
                    }
                    if (url) {
                        window.location = url;
                    }
                    tb_remove();
                });

            } else {
                jQuery("form.cart").unbind().submit();
            }
        });
    });
    
if (typeof wc_single_product_params === 'undefined') {
    var $thisbutton;
    var path;
    var prodId;
    var check;
    var enableCookie;
    var cookie;
    var duration;
    var product_id;
    var quantity;
    if (!wcpd.ajax_cart) {
        // shop page ajax
        jQuery(".ajax_add_to_cart, .add_to_cart_button").on('click', function(event) {
            event.preventDefault();
            $thisbutton = $(this);
            jQuery(document).ajaxSend(function(event, jqxhr, settings) {
                if (settings.url.indexOf('?wc-ajax=add_to_cart') != -1) {
                    jqxhr.abort();
                }
            });
            //alert('test');
            path = $(this).attr('href');
            prodId = $(this).attr("data-product_id");
            check = $("#check" + prodId).val();
            if (check == 'yes') {
                var message = $("#message" + prodId).val();
                var heading = $("#headingtext" + prodId).val();
                var url = $("#url" + prodId).val();
                enableCookie = $("#enableCookie" + prodId).val();
                tb_show(heading, '#TB_inline?inlineId=message' + prodId, '');
            } else {
                window.location = path;
            }
            
        });
    } else {
        jQuery(document).ajaxSend(function(event, jqxhr, settings) {
            if (settings.url.indexOf('?wc-ajax=add_to_cart') != -1) {
                jqxhr.abort();
            }
        });
        //var screenHeight = $(window).height();       
        jQuery(document).on('click', '.ajax_add_to_cart, .add_to_cart_button', function(event){
            event.preventDefault();
            $thisbutton = jQuery(this);
            path = jQuery(this).attr('href');
            prodId = jQuery(this).attr("data-product_id");
            check = $("#check" + prodId).val();
            if (check == 'yes') {
                cookie = 'product-' + prodId;
                duration = wcpd.session;
                if (duration == 'session') {
                    duration = null;
                }
                if (check == 'yes' && wcpd_getCookie(cookie) === false) {
                    var message = $("#message" + prodId).val();
                    var heading = $("#headingtext" + prodId).val();
                    var url = $("#url" + prodId).val();
                    console.log('url:1 ' + url);
                    enableCookie = $("#enableCookie" + prodId).val();
                    tb_show(heading, '#TB_inline?inlineId=message' + prodId, '');                             
                } else {
                    // add to cart ajax
                    $thisbutton.removeClass('added');
                    $thisbutton.addClass('loading');
                    if ($thisbutton.is('.product_type_simple')) {
                        if (!$thisbutton.attr('data-product_id'))
                            return true;                     
                        product_id = $thisbutton.attr('data-product_id');
                        quantity = $thisbutton.attr('data-quantity');
                        // Trigger event
                        //$('body').trigger('adding_to_cart', [$thisbutton, data]);
                        woo_add_to_cart(product_id, quantity, $thisbutton);
                        return;
                    } else {
                        window.location = path;
                        return false;
                    }
                    return true;
                    // end of add to cart
                }
            } else {


                if ($thisbutton.hasClass("product_type_simple")) {
                    $thisbutton.removeClass('added');
                    $thisbutton.addClass('loading');
                    var qty = $thisbutton.attr('data-quantity');
                    prodId = $thisbutton.attr('data-product_id');
                    jQuery.get(wcpd.home_url + '/?post_type=product&add-to-cart=' + prodId + '&quantity=' + qty, function() {
                        window.location.reload();
                    });
                } else {
                    path = $(this).attr('href');
                    window.location = path;
                }

            }

        });
    } /* end else */
    
    jQuery(document).on('click', '.disclaimer_agree', function(e) {
        e.preventDefault();
        // user clicked "ok"                
        if (enableCookie) {
            if (wcpd_getCookie(cookie) === false) {
                wcpd_setCookie(cookie, prodId, duration);
            }
        }
        if (wcpd.log == 'yes') {
            // add trace
            wcpd_trace_disclaimer(prodId, 'Accepted');
        }
        // add to cart ajax
        if ($thisbutton.is('.product_type_simple')) {
            if (!$thisbutton.attr('data-product_id'))
                return true;

            product_id = $thisbutton.attr('data-product_id');
            quantity = $thisbutton.attr('data-quantity');
            // Trigger event
            //$('body').trigger('adding_to_cart', [$thisbutton, data]);
            woo_add_to_cart(product_id, quantity, $thisbutton);

            return;
        } else {
            window.location = path;
            return false;
        }
        return true;
        // end of add to cart
    });

    jQuery(document).on('click', '.disclaimer_reject', function(r) {
        r.preventDefault();
        if (wcpd.reject_url) {
            window.location = wcpd.reject_url;
        }
        tb_remove();
    });
}

});

function woo_add_to_cart(product_id, quantity, $this) {
    var data = {
        action: 'woocommerce_add_to_cart',
        product_id: product_id,
        quantity: quantity
    };
    // Ajax action
    jQuery.post(wc_add_to_cart_params.ajax_url, data, function(response) {
        if (!response)
            return;
        var this_page = window.location.toString();
        this_page = this_page.replace('add-to-cart', 'added-to-cart');
        if (response.error && response.product_url) {
            window.location = response.product_url;
            return false;
        }
        // Redirect to cart option
        if (wc_add_to_cart_params.cart_redirect_after_add === 'yes') {
            window.location = wc_add_to_cart_params.cart_url;
            return;
        } else {
            tb_remove();
            //window.location.reload();
            $this.removeClass('loading');
            fragments = response.fragments;
            cart_hash = response.cart_hash;
            // Block fragments class
            if (fragments) {
                jQuery.each(fragments, function(key, value) {
                    jQuery(key).addClass('updating');
                });
            }
            // Changes button classes
            $this.addClass('added');
            // View cart text
            if (!wc_add_to_cart_params.is_cart && $this.parent().find('.added_to_cart').size() === 0) {
                $this.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' +
                                   wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + '</a>');
            }
            // Replace fragments
            if (fragments) {
                jQuery.each(fragments, function(key, value) {
                    jQuery(key).replaceWith(value);
                });
            }
            // Unblock
            jQuery('.widget_shopping_cart, .updating').stop(true).css('opacity', '1').unblock();
            // Cart page elements
            jQuery('.shop_table.cart').load(this_page + ' .shop_table.cart:eq(0) > *', function() {
                jQuery('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" id="add1" class="plus" />').prepend('<input type="button" value="-" id="minus1" class="minus" />');
                jQuery('.shop_table.cart').stop(true).css('opacity', '1').unblock();
                jQuery('body').trigger('cart_page_refreshed');
            });

            jQuery('.cart_totals').load(this_page + ' .cart_totals:eq(0) > *', function() {
                jQuery('.cart_totals').stop(true).css('opacity', '1').unblock();
            });
            // Trigger event so themes can refresh other areas
            jQuery('body').trigger('added_to_cart', [fragments, cart_hash]);
        }
    });
}