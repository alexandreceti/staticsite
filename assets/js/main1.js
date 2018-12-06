(function ($) {
var td_is_safari = false;
var td_is_ios = false;
var td_is_windows_phone = false;
var ua = navigator.userAgent.toLowerCase();
var td_is_android = ua.indexOf('android') > -1;
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {} else {
    td_is_safari = true;
  }
}
if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
  td_is_ios = true;
}
if (navigator.userAgent.match(/Windows Phone/i)) {
  td_is_windows_phone = true;
}
if (td_is_ios || td_is_safari || td_is_windows_phone || td_is_android) {
  if (top.location != location) {
    top.location.replace('https://demo.tagdiv.com/newspaper/');
  }
}
var tdBlocksArray = [];

function tdBlock() {
  this.id = '';
  this.block_type = 1;
  this.atts = '';
  this.td_column_number = '';
  this.td_current_page = 1;
  this.post_count = 0;
  this.found_posts = 0;
  this.max_num_pages = 0;
  this.td_filter_value = '';
  this.is_ajax_running = false;
  this.td_user_action = '';
  this.header_color = '';
  this.ajax_pagination_infinite_stop = '';
}(function () {
  var htmlTag = document.getElementsByTagName("html")[0];
  if (navigator.userAgent.indexOf("MSIE 10.0") > -1) {
    htmlTag.className += ' ie10';
  }
  if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    htmlTag.className += ' ie11';
  }
  if (navigator.userAgent.indexOf("Edge") > -1) {
    htmlTag.className += ' ieEdge';
  }
  if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
    htmlTag.className += ' td-md-is-ios';
  }
  var user_agent = navigator.userAgent.toLowerCase();
  if (user_agent.indexOf("android") > -1) {
    htmlTag.className += ' td-md-is-android';
  }
  if (-1 !== navigator.userAgent.indexOf('Mac OS X')) {
    htmlTag.className += ' td-md-is-os-x';
  }
  if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
    htmlTag.className += ' td-md-is-chrome';
  }
  if (-1 !== navigator.userAgent.indexOf('Firefox')) {
    htmlTag.className += ' td-md-is-firefox';
  }
  if (-1 !== navigator.userAgent.indexOf('Safari') && -1 === navigator.userAgent.indexOf('Chrome')) {
    htmlTag.className += ' td-md-is-safari';
  }
  if (-1 !== navigator.userAgent.indexOf('IEMobile')) {
    htmlTag.className += ' td-md-is-iemobile';
  }
})();
var tdLocalCache = {};
(function () {
  "use strict";
  tdLocalCache = {
    data: {},
    remove: function (resource_id) {
      delete tdLocalCache.data[resource_id];
    },
    exist: function (resource_id) {
      return tdLocalCache.data.hasOwnProperty(resource_id) && tdLocalCache.data[resource_id] !== null;
    },
    get: function (resource_id) {
      return tdLocalCache.data[resource_id];
    },
    set: function (resource_id, cachedData) {
      tdLocalCache.remove(resource_id);
      tdLocalCache.data[resource_id] = cachedData;
    }
  };
})();
var tds_login_sing_in_widget = "show";
var td_viewport_interval_list = [{
  "limitBottom": 767,
  "sidebarWidth": 228
}, {
  "limitBottom": 1018,
  "sidebarWidth": 300
}, {
  "limitBottom": 1140,
  "sidebarWidth": 324
}];
var td_animation_stack_effect = "type0";
var tds_animation_stack = true;
var td_animation_stack_specific_selectors = ".entry-thumb, img";
var td_animation_stack_general_selectors = ".td-animation-stack img, .td-animation-stack .entry-thumb, .post img";
var td_ajax_url = "https:\/\/demo.tagdiv.com\/newspaper\/wp-admin\/admin-ajax.php?td_theme_name=Newspaper&v=8.7_d91";
var td_get_template_directory_uri = "https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/themes\/011";
var tds_snap_menu = "smart_snap_always";
var tds_logo_on_sticky = "show_header_logo";
var tds_header_style = "";
var td_please_wait = "Please wait...";
var td_email_user_pass_incorrect = "User or password incorrect!";
var td_email_user_incorrect = "Email or username incorrect!";
var td_email_incorrect = "Email incorrect!";
var tds_more_articles_on_post_enable = "";
var tds_more_articles_on_post_time_to_wait = "";
var tds_more_articles_on_post_pages_distance_from_top = 0;
var tds_theme_color_site_wide = "#4db2ec";
var tds_smart_sidebar = "enabled";
var tdThemeName = "Newspaper";
var td_magnific_popup_translation_tPrev = "Previous (Left arrow key)";
var td_magnific_popup_translation_tNext = "Next (Right arrow key)";
var td_magnific_popup_translation_tCounter = "%curr% of %total%";
var td_magnific_popup_translation_ajax_tError = "The content from %url% could not be loaded.";
var td_magnific_popup_translation_image_tError = "The image #%curr% could not be loaded.";
var tdDateNamesI18n = {
  "month_names": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "month_names_short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "day_names_short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
var td_ad_background_click_link = "";
var td_ad_background_click_target = "";
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-43963494-1', 'auto');
ga('send', 'pageview');

jQuery().ready(function () {
  tdWeather.addItem({
    "block_uid": "td_top_weather_uid",
    "location": "New York",
    "api_location": "New York",
    "api_language": "en",
    "api_key": "c937b98a4e6a49405410bfe0790a0eac",
    "today_icon": "broken-clouds-d",
    "today_icon_text": "broken clouds",
    "today_temp": [22.9, 73.2],
    "today_humidity": 53,
    "today_wind_speed": [1.9, 1.2],
    "today_min": [22, 71.6],
    "today_max": [24, 75.2],
    "today_clouds": 75,
    "current_unit": 0,
    "forecast": [{
      "timestamp": 1530036000,
      "day_name": "Tue",
      "day_temp": [25, 77],
      "owm_day_index": 0
    }, {
      "timestamp": 1530057600,
      "day_name": "Wed",
      "day_temp": [24, 75],
      "owm_day_index": 2
    }, {
      "timestamp": 1530144000,
      "day_name": "Thu",
      "day_temp": [24, 75],
      "owm_day_index": 10
    }, {
      "timestamp": 1530230400,
      "day_name": "Fri",
      "day_temp": [29, 83],
      "owm_day_index": 18
    }, {
      "timestamp": 1530316800,
      "day_name": "Sat",
      "day_temp": [31, 88],
      "owm_day_index": 26
    }, {
      "timestamp": 1530403200,
      "day_name": "Sun",
      "day_temp": [28, 83],
      "owm_day_index": 34
    }]
  });
});
jQuery(window).load(function () {
  jQuery('body').find('#td_uid_1_5b3289782e2af .td-element-style').each(function (index, element) {
    jQuery(element).css('opacity', 1);
    return;
  });
});
jQuery(window).ready(function () {
  setTimeout(function () {
    var $content = jQuery('body').find('#tdc-live-iframe'),
      refWindow = undefined;
    if ($content.length) {
      $content = $content.contents();
      refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;
    } else {
      $content = jQuery('body');
      refWindow = window;
    }
    $content.find('#td_uid_1_5b3289782e2af .td-element-style').each(function (index, element) {
      jQuery(element).css('opacity', 1);
      return;
    });
  });
}, 200);
jQuery(window).load(function () {
  jQuery('body').find('#td_uid_3_5b32897830199 .td-element-style').each(function (index, element) {
    jQuery(element).css('opacity', 1);
    return;
  });
});
jQuery(window).ready(function () {
  setTimeout(function () {
    var $content = jQuery('body').find('#tdc-live-iframe'),
      refWindow = undefined;
    if ($content.length) {
      $content = $content.contents();
      refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;
    } else {
      $content = jQuery('body');
      refWindow = window;
    }
    $content.find('#td_uid_3_5b32897830199 .td-element-style').each(function (index, element) {
      jQuery(element).css('opacity', 1);
      return;
    });
  });
}, 200);
jQuery(window).load(function () {
  jQuery('body').find('#td_uid_6_5b3289783a22b .td-element-style').each(function (index, element) {
    jQuery(element).css('opacity', 1);
    return;
  });
});
jQuery(window).ready(function () {
  setTimeout(function () {
    var $content = jQuery('body').find('#tdc-live-iframe'),
      refWindow = undefined;
    if ($content.length) {
      $content = $content.contents();
      refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;
    } else {
      $content = jQuery('body');
      refWindow = window;
    }
    $content.find('#td_uid_6_5b3289783a22b .td-element-style').each(function (index, element) {
      jQuery(element).css('opacity', 1);
      return;
    });
  });
}, 200);
jQuery(window).load(function () {
  jQuery('body').find('#td_uid_9_5b3289783cf57 .td-element-style').each(function (index, element) {
    jQuery(element).css('opacity', 1);
    return;
  });
});
jQuery(window).ready(function () {
  setTimeout(function () {
    var $content = jQuery('body').find('#tdc-live-iframe'),
      refWindow = undefined;
    if ($content.length) {
      $content = $content.contents();
      refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;
    } else {
      $content = jQuery('body');
      refWindow = window;
    }
    $content.find('#td_uid_9_5b3289783cf57 .td-element-style').each(function (index, element) {
      jQuery(element).css('opacity', 1);
      return;
    });
  });
}, 200);
jQuery(window).load(function () {
  jQuery('body').find('#td_uid_11_5b3289783d2ae .td-element-style').each(function (index, element) {
    jQuery(element).css('opacity', 1);
    return;
  });
});
jQuery(window).ready(function () {
  setTimeout(function () {
    var $content = jQuery('body').find('#tdc-live-iframe'),
      refWindow = undefined;
    if ($content.length) {
      $content = $content.contents();
      refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;
    } else {
      $content = jQuery('body');
      refWindow = window;
    }
    $content.find('#td_uid_11_5b3289783d2ae .td-element-style').each(function (index, element) {
      jQuery(element).css('opacity', 1);
      return;
    });
  });
}, 200);
jQuery(window).load(function () {
  jQuery('body').find('#td_uid_15_5b3289784140c .td-element-style').each(function (index, element) {
    jQuery(element).css('opacity', 1);
    return;
  });
});
jQuery(window).ready(function () {
  setTimeout(function () {
    var $content = jQuery('body').find('#tdc-live-iframe'),
      refWindow = undefined;
    if ($content.length) {
      $content = $content.contents();
      refWindow = document.getElementById('tdc-live-iframe').contentWindow || document.getElementById('tdc-live-iframe').contentDocument;
    } else {
      $content = jQuery('body');
      refWindow = window;
    }
    $content.find('#td_uid_15_5b3289784140c .td-element-style').each(function (index, element) {
      jQuery(element).css('opacity', 1);
      return;
    });
  });
}, 200);
(function () {
  var html_jquery_obj = jQuery('html');
  if (html_jquery_obj.length && (html_jquery_obj.is('.ie8') || html_jquery_obj.is('.ie9'))) {
    var path = 'https://demo.tagdiv.com/newspaper/wp-content/themes/011/style.css';
    jQuery.get(path, function (data) {
      var str_split_separator = '#td_css_split_separator';
      var arr_splits = data.split(str_split_separator);
      var arr_length = arr_splits.length;
      if (arr_length > 1) {
        var dir_path = 'https://demo.tagdiv.com/newspaper/wp-content/themes/011';
        var splited_css = '';
        for (var i = 0; i < arr_length; i++) {
          if (i > 0) {
            arr_splits[i] = str_split_separator + ' ' + arr_splits[i];
          }
          var formated_str = arr_splits[i].replace(/\surl\(\'(?!data\:)/gi, function regex_function(str) {
            return ' url(\'' + dir_path + '/' + str.replace(/url\(\'/gi, '').replace(/^\s+|\s+$/gm, '');
          });
          splited_css += "<style>" + formated_str + "</style>";
        }
        var td_theme_css = jQuery('link#td-theme-css');
        if (td_theme_css.length) {
          td_theme_css.after(splited_css);
        }
      }
    });
  }
})();

(function (jQuery, undefined) {
  jQuery(window).ready(function () {
    if ('undefined' !== typeof tdcAdminIFrameUI) {
      var $liveIframe = tdcAdminIFrameUI.getLiveIframe();
      if ($liveIframe.length) {
        $liveIframe.load(function () {
          $liveIframe.contents().find('body').append('<textarea class="tdw-css-writer-editor" style="display: none"></textarea>');
        });
      }
    }
  });
})(jQuery);

jQuery(window).load(function () {
  if ('undefined' !== typeof tdLiveCssInject) {
    tdLiveCssInject.init();
    var editor_textarea = jQuery('.td_live_css_uid_1_5b32897848937');
    var languageTools = ace.require("ace/ext/language_tools");
    var tdcCompleter = {
      getCompletions: function (editor, session, pos, prefix, callback) {
        if (prefix.length === 0) {
          callback(null, []);
          return
        }
        if ('undefined' !== typeof tdcAdminIFrameUI) {
          var data = {
            error: undefined,
            getShortcode: ''
          };
          tdcIFrameData.getShortcodeFromData(data);
          if (!_.isUndefined(data.error)) {
            tdcDebug.log(data.error);
          }
          if (!_.isUndefined(data.getShortcode)) {
            var regex = /el_class=\"([A-Za-z0-9_-]*\s*)+\"/g,
              results = data.getShortcode.match(regex);
            var elClasses = {};
            for (var i = 0; i < results.length; i++) {
              var currentClasses = results[i].replace('el_class="', '').replace('"', '').split(' ');
              for (var j = 0; j < currentClasses.length; j++) {
                if (_.isUndefined(elClasses[currentClasses[j]])) {
                  elClasses[currentClasses[j]] = '';
                }
              }
            }
            var arrElClasses = [];
            for (var prop in elClasses) {
              arrElClasses.push(prop);
            }
            callback(null, arrElClasses.map(function (item) {
              return {
                name: item,
                value: item,
                meta: 'in_page'
              }
            }));
          }
        }
      }
    };
    languageTools.addCompleter(tdcCompleter);
    window.editor = ace.edit("td_live_css_uid_1_5b32897848937");
    window.editorChangeHandler = function () {
      window.onbeforeunload = function () {
        if (tdwState.lessWasEdited) {
          return "You have attempted to leave this page. Are you sure?";
        }
        return false;
      };
      var editorValue = editor.getSession().getValue();
      editor_textarea.val(editorValue);
      if ('undefined' !== typeof tdcAdminIFrameUI) {
        tdcAdminIFrameUI.getLiveIframe().contents().find('.tdw-css-writer-editor:first').val(editorValue);
        tdcMain.setContentModified();
      }
      tdLiveCssInject.less();
    };
    editor.getSession().setValue(editor_textarea.val());
    editor.getSession().on('change', editorChangeHandler);
    editor.setTheme("ace/theme/textmate");
    editor.setShowPrintMargin(false);
    editor.getSession().setMode("ace/mode/less");
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
    });
  }
});
// teste

var block_td_uid_2_5b32897820d59 = new tdBlock();
block_td_uid_2_5b32897820d59.id = "td_uid_2_5b32897820d59";
block_td_uid_2_5b32897820d59.atts = '{"limit":4,"td_column_number":3,"ajax_pagination":"next_prev","category_id":"6","show_child_cat":30,"td_ajax_filter_type":"td_category_ids_filter","td_ajax_preloading":"preload","block_template_id":"","header_color":"","ajax_pagination_infinite_stop":"","offset":"","td_filter_default_txt":"","td_ajax_filter_ids":"","el_class":"","color_preset":"","border_top":"","css":"","tdc_css":"","class":"td_uid_2_5b32897820d59_rand","tdc_css_class":"td_uid_2_5b32897820d59_rand","tdc_css_class_style":"td_uid_2_5b32897820d59_rand_style"}';
block_td_uid_2_5b32897820d59.td_column_number = "3";
block_td_uid_2_5b32897820d59.block_type = "td_block_mega_menu";
block_td_uid_2_5b32897820d59.post_count = "4";
block_td_uid_2_5b32897820d59.found_posts = "32";
block_td_uid_2_5b32897820d59.header_color = "";
block_td_uid_2_5b32897820d59.ajax_pagination_infinite_stop = "";
block_td_uid_2_5b32897820d59.max_num_pages = "8";
tdBlocksArray.push(block_td_uid_2_5b32897820d59);
var tmpObj = JSON.parse(JSON.stringify(block_td_uid_2_5b32897820d59));
tmpObj.is_ajax_running = true;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-kerala-india-they-call-it-own-country-for-nothing\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Kerala, India: They call it Own Country for nothing\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/1-218x150.jpg\" alt=\"\" title=\"Kerala, India: They call it Own Country for nothing\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/\" class=\"td-post-category\">Fashion<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-kerala-india-they-call-it-own-country-for-nothing\/\" rel=\"bookmark\" title=\"Kerala, India: They call it Own Country for nothing\">Kerala, India: They call it Own Country for nothing<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-designer-fashion-show-kicks-off-variety-week\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Designer fashion show kicks off Variety Week\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/12-218x150.jpg\" alt=\"\" title=\"Designer fashion show kicks off Variety Week\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-new-look-2015\/\" class=\"td-post-category\">New look 2018<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-designer-fashion-show-kicks-off-variety-week\/\" rel=\"bookmark\" title=\"Designer fashion show kicks off Variety Week\">Designer fashion show kicks off Variety Week<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-springfest-one-fashion-show-at-the-university-of-michigan\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"SpringFest One Fashion Show at the University of Michigan\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/9-218x150.jpg\" alt=\"\" title=\"SpringFest One Fashion Show at the University of Michigan\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-new-look-2015\/\" class=\"td-post-category\">New look 2018<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-springfest-one-fashion-show-at-the-university-of-michigan\/\" rel=\"bookmark\" title=\"SpringFest One Fashion Show at the University of Michigan\">SpringFest One Fashion Show at the University of Michigan<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/fashion-photography-helps-raising-funds\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"15 Grooming Techniques Every Man Needs to Know\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2016\/01\/04-beard-218x150.jpg\" alt=\"\" title=\"15 Grooming Techniques Every Man Needs to Know\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-style-hunter\/\" class=\"td-post-category\">Style hunter<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/fashion-photography-helps-raising-funds\/\" rel=\"bookmark\" title=\"15 Grooming Techniques Every Man Needs to Know\">15 Grooming Techniques Every Man Needs to Know<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_2_5b32897820d59",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_2_5b32897820d59));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 8;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-designer-fashion-show-kicks-off-variety-week\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Designer fashion show kicks off Variety Week\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/12-218x150.jpg\" alt=\"\" title=\"Designer fashion show kicks off Variety Week\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-new-look-2015\/\" class=\"td-post-category\">New look 2018<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-designer-fashion-show-kicks-off-variety-week\/\" rel=\"bookmark\" title=\"Designer fashion show kicks off Variety Week\">Designer fashion show kicks off Variety Week<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-springfest-one-fashion-show-at-the-university-of-michigan\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"SpringFest One Fashion Show at the University of Michigan\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/9-218x150.jpg\" alt=\"\" title=\"SpringFest One Fashion Show at the University of Michigan\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-new-look-2015\/\" class=\"td-post-category\">New look 2018<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-springfest-one-fashion-show-at-the-university-of-michigan\/\" rel=\"bookmark\" title=\"SpringFest One Fashion Show at the University of Michigan\">SpringFest One Fashion Show at the University of Michigan<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-olivia-wilde-looks-fashion-forward-in-patterned-dress\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Olivia Wilde looks fashion forward in patterned dress\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/13-218x150.jpg\" alt=\"\" title=\"Olivia Wilde looks fashion forward in patterned dress\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-new-look-2015\/\" class=\"td-post-category\">New look 2018<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-olivia-wilde-looks-fashion-forward-in-patterned-dress\/\" rel=\"bookmark\" title=\"Olivia Wilde looks fashion forward in patterned dress\">Olivia Wilde looks fashion forward in patterned dress<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-sleeping-bear-dunes-shipwrecks-spotted-by-helicopter-patrol\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Sleeping Bear Dunes shipwrecks spotted by helicopter patrol\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/11-218x150.jpg\" alt=\"\" title=\"Sleeping Bear Dunes shipwrecks spotted by helicopter patrol\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-new-look-2015\/\" class=\"td-post-category\">New look 2018<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-sleeping-bear-dunes-shipwrecks-spotted-by-helicopter-patrol\/\" rel=\"bookmark\" title=\"Sleeping Bear Dunes shipwrecks spotted by helicopter patrol\">Sleeping Bear Dunes shipwrecks spotted by helicopter patrol<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_2_5b32897820d59",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_2_5b32897820d59));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 7;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-if-you-only-knew-how-much-your-relative-churn-rate-matters\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"If You Only Knew How Much Your Relative Churn Rate Matters\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/8-218x150.jpg\" alt=\"\" title=\"If You Only Knew How Much Your Relative Churn Rate Matters\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-street-fashion\/\" class=\"td-post-category\">Street fashion<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-if-you-only-knew-how-much-your-relative-churn-rate-matters\/\" rel=\"bookmark\" title=\"If You Only Knew How Much Your Relative Churn Rate Matters\">If You Only Knew How Much Your Relative Churn Rate Matters<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-shanghai-fashion-week-the-shape-of-things-to-come\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Shanghai Fashion Week: the shape of things to come\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/5-218x150.jpg\" alt=\"\" title=\"Shanghai Fashion Week: the shape of things to come\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-street-fashion\/\" class=\"td-post-category\">Street fashion<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-shanghai-fashion-week-the-shape-of-things-to-come\/\" rel=\"bookmark\" title=\"Shanghai Fashion Week: the shape of things to come\">Shanghai Fashion Week: the shape of things to come<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-summer-fashion-trends-2015-the-pieces-that-deserve\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Summer Fashion Trends 2015: The Pieces That Deserve\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/4-218x150.jpg\" alt=\"\" title=\"Summer Fashion Trends 2015: The Pieces That Deserve\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-street-fashion\/\" class=\"td-post-category\">Street fashion<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-summer-fashion-trends-2015-the-pieces-that-deserve\/\" rel=\"bookmark\" title=\"Summer Fashion Trends 2015: The Pieces That Deserve\">Summer Fashion Trends 2015: The Pieces That Deserve<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-which-top-fashion-designers-wear-their-own-clothes\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Which top fashion designers wear their own clothes?\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/02\/7-218x150.jpg\" alt=\"\" title=\"Which top fashion designers wear their own clothes?\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-street-fashion\/\" class=\"td-post-category\">Street fashion<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-which-top-fashion-designers-wear-their-own-clothes\/\" rel=\"bookmark\" title=\"Which top fashion designers wear their own clothes?\">Which top fashion designers wear their own clothes?<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_2_5b32897820d59",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_2_5b32897820d59));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 10;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/fashion-photography-helps-raising-funds\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"15 Grooming Techniques Every Man Needs to Know\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2016\/01\/04-beard-218x150.jpg\" alt=\"\" title=\"15 Grooming Techniques Every Man Needs to Know\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-style-hunter\/\" class=\"td-post-category\">Style hunter<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/fashion-photography-helps-raising-funds\/\" rel=\"bookmark\" title=\"15 Grooming Techniques Every Man Needs to Know\">15 Grooming Techniques Every Man Needs to Know<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-kim-selfie-book-available-for-pre-order-walks-her-last-runway-show\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Kim Selfie Book Available For Pre-Order, Walks Her Last Runway Show\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/21-218x150.jpg\" alt=\"\" title=\"Kim Selfie Book Available For Pre-Order, Walks Her Last Runway Show\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-style-hunter\/\" class=\"td-post-category\">Style hunter<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-kim-selfie-book-available-for-pre-order-walks-her-last-runway-show\/\" rel=\"bookmark\" title=\"Kim Selfie Book Available For Pre-Order, Walks Her Last Runway Show\">Kim Selfie Book Available For Pre-Order, Walks Her Last Runway Show<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-academy-of-country-music-awards-2015-red-carpet-fashion\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Academy of Country Music Awards 2015 Red Carpet Fashion\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/22-218x150.jpg\" alt=\"\" title=\"Academy of Country Music Awards 2015 Red Carpet Fashion\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-style-hunter\/\" class=\"td-post-category\">Style hunter<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-academy-of-country-music-awards-2015-red-carpet-fashion\/\" rel=\"bookmark\" title=\"Academy of Country Music Awards 2015 Red Carpet Fashion\">Academy of Country Music Awards 2015 Red Carpet Fashion<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-removes-its-rule-about-running-advertising-on-covers\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Removes Its Rule About Running Advertising on Covers\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/20-218x150.jpg\" alt=\"\" title=\"Removes Its Rule About Running Advertising on Covers\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-style-hunter\/\" class=\"td-post-category\">Style hunter<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-removes-its-rule-about-running-advertising-on-covers\/\" rel=\"bookmark\" title=\"Removes Its Rule About Running Advertising on Covers\">Removes Its Rule About Running Advertising on Covers<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_2_5b32897820d59",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_2_5b32897820d59));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 9;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-sir-john-is-new-celebrity-makeup-artist-and-is-worth-3-8-billion\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Sir John is New Celebrity Makeup Artist and is Worth $3.8 Billion\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/18-218x150.jpg\" alt=\"\" title=\"Sir John is New Celebrity Makeup Artist and is Worth $3.8 Billion\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-vogue\/\" class=\"td-post-category\">Vogue<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-sir-john-is-new-celebrity-makeup-artist-and-is-worth-3-8-billion\/\" rel=\"bookmark\" title=\"Sir John is New Celebrity Makeup Artist and is Worth $3.8 Billion\">Sir John is New Celebrity Makeup Artist and is Worth $3.8...<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-burberry-brings-london-to-la-including-the-grenadier-guards\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Burberry Brings London to LA, Including the Grenadier Guards\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/17-218x150.jpg\" alt=\"\" title=\"Burberry Brings London to LA, Including the Grenadier Guards\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-vogue\/\" class=\"td-post-category\">Vogue<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-burberry-brings-london-to-la-including-the-grenadier-guards\/\" rel=\"bookmark\" title=\"Burberry Brings London to LA, Including the Grenadier Guards\">Burberry Brings London to LA, Including the Grenadier Guards<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-mcdonell-kanye-west-highlights-difficulties-for-celebrities\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"McDonell Kanye West highlights difficulties for celebrities\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/15-218x150.jpg\" alt=\"\" title=\"McDonell Kanye West highlights difficulties for celebrities\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-vogue\/\" class=\"td-post-category\">Vogue<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-mcdonell-kanye-west-highlights-difficulties-for-celebrities\/\" rel=\"bookmark\" title=\"McDonell Kanye West highlights difficulties for celebrities\">McDonell Kanye West highlights difficulties for celebrities<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-the-10-biggest-stories-in-fashion-this-week\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"The 10 Biggest Stories In Fashion This Week\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/16-218x150.jpg\" alt=\"\" title=\"The 10 Biggest Stories In Fashion This Week\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-fashion\/tagdiv-vogue\/\" class=\"td-post-category\">Vogue<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-the-10-biggest-stories-in-fashion-this-week\/\" rel=\"bookmark\" title=\"The 10 Biggest Stories In Fashion This Week\">The 10 Biggest Stories In Fashion This Week<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_2_5b32897820d59",
  "td_hide_prev": true,
  "td_hide_next": false
}));

var block_td_uid_8_5b32897824fde = new tdBlock();
block_td_uid_8_5b32897824fde.id = "td_uid_8_5b32897824fde";
block_td_uid_8_5b32897824fde.atts = '{"limit":"5","td_column_number":3,"ajax_pagination":"next_prev","category_id":"13","show_child_cat":30,"td_ajax_filter_type":"td_category_ids_filter","td_ajax_preloading":"preload","block_template_id":"","header_color":"","ajax_pagination_infinite_stop":"","offset":"","td_filter_default_txt":"","td_ajax_filter_ids":"","el_class":"","color_preset":"","border_top":"","css":"","tdc_css":"","class":"td_uid_8_5b32897824fde_rand","tdc_css_class":"td_uid_8_5b32897824fde_rand","tdc_css_class_style":"td_uid_8_5b32897824fde_rand_style"}';
block_td_uid_8_5b32897824fde.td_column_number = "3";
block_td_uid_8_5b32897824fde.block_type = "td_block_mega_menu";
block_td_uid_8_5b32897824fde.post_count = "5";
block_td_uid_8_5b32897824fde.found_posts = "15";
block_td_uid_8_5b32897824fde.header_color = "";
block_td_uid_8_5b32897824fde.ajax_pagination_infinite_stop = "";
block_td_uid_8_5b32897824fde.max_num_pages = "3";
tdBlocksArray.push(block_td_uid_8_5b32897824fde);

var block_td_uid_9_5b32897825efe = new tdBlock();
block_td_uid_9_5b32897825efe.id = "td_uid_9_5b32897825efe";
block_td_uid_9_5b32897825efe.atts = '{"limit":4,"td_column_number":3,"ajax_pagination":"next_prev","category_id":"16","show_child_cat":30,"td_ajax_filter_type":"td_category_ids_filter","td_ajax_preloading":"preload","block_template_id":"","header_color":"","ajax_pagination_infinite_stop":"","offset":"","td_filter_default_txt":"","td_ajax_filter_ids":"","el_class":"","color_preset":"","border_top":"","css":"","tdc_css":"","class":"td_uid_9_5b32897825efe_rand","tdc_css_class":"td_uid_9_5b32897825efe_rand","tdc_css_class_style":"td_uid_9_5b32897825efe_rand_style"}';
block_td_uid_9_5b32897825efe.td_column_number = "3";
block_td_uid_9_5b32897825efe.block_type = "td_block_mega_menu";
block_td_uid_9_5b32897825efe.post_count = "4";
block_td_uid_9_5b32897825efe.found_posts = "32";
block_td_uid_9_5b32897825efe.header_color = "";
block_td_uid_9_5b32897825efe.ajax_pagination_infinite_stop = "";
block_td_uid_9_5b32897825efe.max_num_pages = "8";
tdBlocksArray.push(block_td_uid_9_5b32897825efe);
var tmpObj = JSON.parse(JSON.stringify(block_td_uid_9_5b32897825efe));
tmpObj.is_ajax_running = true;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/wordpress-news-magazine-charts-the-most-fashionable-new-york-couples-in-2016\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"WordPress News Magazine Charts the Most Fashionable New York Women in 2018\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2016\/01\/01-girl-218x150.jpg\" alt=\"\" title=\"WordPress News Magazine Charts the Most Fashionable New York Women in 2018\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-health-fitness\/\" class=\"td-post-category\">Health &amp; Fitness<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/wordpress-news-magazine-charts-the-most-fashionable-new-york-couples-in-2016\/\" rel=\"bookmark\" title=\"WordPress News Magazine Charts the Most Fashionable New York Women in 2018\">WordPress News Magazine Charts the Most Fashionable New York Women in...<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/the-most-anticipated-charter-flights-in-the-canary-islands\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"The Most Anticipated Hotel Openings in Strasbourg this Summer\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2016\/01\/02-hotels-218x150.jpg\" alt=\"\" title=\"The Most Anticipated Hotel Openings in Strasbourg this Summer\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-travel\/\" class=\"td-post-category\">Travel<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/the-most-anticipated-charter-flights-in-the-canary-islands\/\" rel=\"bookmark\" title=\"The Most Anticipated Hotel Openings in Strasbourg this Summer\">The Most Anticipated Hotel Openings in Strasbourg this Summer<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/whitewater-rafting-day-trip-new-york-east\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Haunts of the Heart: Landscapes of Lynn Zimmerman\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green1-218x150.jpg\" alt=\"\" title=\"Haunts of the Heart: Landscapes of Lynn Zimmerman\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-business\/\" class=\"td-post-category\">Business<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/whitewater-rafting-day-trip-new-york-east\/\" rel=\"bookmark\" title=\"Haunts of the Heart: Landscapes of Lynn Zimmerman\">Haunts of the Heart: Landscapes of Lynn Zimmerman<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-five-things-you-may-have-missed-over-the-weekend-from-the-world-of-business\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Dream Homes: North Penthouse Listed For $1.7 Million\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green2-218x150.jpg\" alt=\"\" title=\"Dream Homes: North Penthouse Listed For $1.7 Million\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-business\/\" class=\"td-post-category\">Business<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-five-things-you-may-have-missed-over-the-weekend-from-the-world-of-business\/\" rel=\"bookmark\" title=\"Dream Homes: North Penthouse Listed For $1.7 Million\">Dream Homes: North Penthouse Listed For $1.7 Million<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_9_5b32897825efe",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_9_5b32897825efe));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 20;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/whitewater-rafting-day-trip-new-york-east\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Haunts of the Heart: Landscapes of Lynn Zimmerman\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green1-218x150.jpg\" alt=\"\" title=\"Haunts of the Heart: Landscapes of Lynn Zimmerman\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-business\/\" class=\"td-post-category\">Business<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/whitewater-rafting-day-trip-new-york-east\/\" rel=\"bookmark\" title=\"Haunts of the Heart: Landscapes of Lynn Zimmerman\">Haunts of the Heart: Landscapes of Lynn Zimmerman<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-five-things-you-may-have-missed-over-the-weekend-from-the-world-of-business\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Dream Homes: North Penthouse Listed For $1.7 Million\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green2-218x150.jpg\" alt=\"\" title=\"Dream Homes: North Penthouse Listed For $1.7 Million\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-business\/\" class=\"td-post-category\">Business<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-five-things-you-may-have-missed-over-the-weekend-from-the-world-of-business\/\" rel=\"bookmark\" title=\"Dream Homes: North Penthouse Listed For $1.7 Million\">Dream Homes: North Penthouse Listed For $1.7 Million<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-400k-for-whisky-most-expensive-foods-and-drink-auctioned\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"10 Foods You Have Been Eating Wrong All Your Life\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green4-218x150.jpg\" alt=\"\" title=\"10 Foods You Have Been Eating Wrong All Your Life\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-business\/\" class=\"td-post-category\">Business<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-400k-for-whisky-most-expensive-foods-and-drink-auctioned\/\" rel=\"bookmark\" title=\"10 Foods You Have Been Eating Wrong All Your Life\">10 Foods You Have Been Eating Wrong All Your Life<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-seeking-business-cuomo-heads-to-cuba-with-a-new-york-trade-delegation\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Seeking Business, Cuomo Heads to Cuba With a New York Trade Delegation\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green5-218x150.jpg\" alt=\"\" title=\"Seeking Business, Cuomo Heads to Cuba With a New York Trade Delegation\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-business\/\" class=\"td-post-category\">Business<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-seeking-business-cuomo-heads-to-cuba-with-a-new-york-trade-delegation\/\" rel=\"bookmark\" title=\"Seeking Business, Cuomo Heads to Cuba With a New York Trade Delegation\">Seeking Business, Cuomo Heads to Cuba With a New York Trade...<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_9_5b32897825efe",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_9_5b32897825efe));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 19;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/wordpress-news-magazine-charts-the-most-fashionable-new-york-couples-in-2016\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"WordPress News Magazine Charts the Most Fashionable New York Women in 2018\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2016\/01\/01-girl-218x150.jpg\" alt=\"\" title=\"WordPress News Magazine Charts the Most Fashionable New York Women in 2018\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-health-fitness\/\" class=\"td-post-category\">Health &amp; Fitness<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/wordpress-news-magazine-charts-the-most-fashionable-new-york-couples-in-2016\/\" rel=\"bookmark\" title=\"WordPress News Magazine Charts the Most Fashionable New York Women in 2018\">WordPress News Magazine Charts the Most Fashionable New York Women in...<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-food-health-star-ratings-kelloggs-reveals-the-cereal-that-gets-1-5-stars\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Heritage Museums &#038; Gardens to Open with New Landscape\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/green6-218x150.jpg\" alt=\"\" title=\"Heritage Museums &#038; Gardens to Open with New Landscape\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-health-fitness\/\" class=\"td-post-category\">Health &amp; Fitness<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-food-health-star-ratings-kelloggs-reveals-the-cereal-that-gets-1-5-stars\/\" rel=\"bookmark\" title=\"Heritage Museums &#038; Gardens to Open with New Landscape\">Heritage Museums &#038; Gardens to Open with New Landscape<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-the-secret-to-living-200-years-just-ask-a-whale\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"The Secret To Living 200 Years? Just Ask A Whale\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/62-218x150.jpg\" alt=\"\" title=\"The Secret To Living 200 Years? Just Ask A Whale\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-health-fitness\/\" class=\"td-post-category\">Health &amp; Fitness<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-the-secret-to-living-200-years-just-ask-a-whale\/\" rel=\"bookmark\" title=\"The Secret To Living 200 Years? Just Ask A Whale\">The Secret To Living 200 Years? Just Ask A Whale<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-the-dangers-of-eating-too-much-restaurant-food\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"The dangers of eating too much restaurant food\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/60-218x150.jpg\" alt=\"\" title=\"The dangers of eating too much restaurant food\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-health-fitness\/\" class=\"td-post-category\">Health &amp; Fitness<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-the-dangers-of-eating-too-much-restaurant-food\/\" rel=\"bookmark\" title=\"The dangers of eating too much restaurant food\">The dangers of eating too much restaurant food<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_9_5b32897825efe",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_9_5b32897825efe));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 18;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-cronuts-cloth-filters-and-coffee-shops-a-taste-of-what-we-like-this-week-at-cook\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Cronuts, cloth filters and coffee shops: a taste of what we like this week at Cook\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/55-218x150.jpg\" alt=\"\" title=\"Cronuts, cloth filters and coffee shops: a taste of what we like this week at Cook\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-recipes\/\" class=\"td-post-category\">Recipes<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-cronuts-cloth-filters-and-coffee-shops-a-taste-of-what-we-like-this-week-at-cook\/\" rel=\"bookmark\" title=\"Cronuts, cloth filters and coffee shops: a taste of what we like this week at Cook\">Cronuts, cloth filters and coffee shops: a taste of what we...<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-pasta-with-caramelised-onions-and-yogurt-recipe\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Pasta with caramelised onions and yogurt recipe\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/03\/juice-218x150.jpg\" alt=\"\" title=\"Pasta with caramelised onions and yogurt recipe\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-recipes\/\" class=\"td-post-category\">Recipes<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-pasta-with-caramelised-onions-and-yogurt-recipe\/\" rel=\"bookmark\" title=\"Pasta with caramelised onions and yogurt recipe\">Pasta with caramelised onions and yogurt recipe<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-scallop-and-mango-summer-rolls-with-spiced-peanut-dip-recipe\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Scallop and mango summer rolls with spiced peanut dip recipe\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/59-218x150.jpg\" alt=\"\" title=\"Scallop and mango summer rolls with spiced peanut dip recipe\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-recipes\/\" class=\"td-post-category\">Recipes<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-scallop-and-mango-summer-rolls-with-spiced-peanut-dip-recipe\/\" rel=\"bookmark\" title=\"Scallop and mango summer rolls with spiced peanut dip recipe\">Scallop and mango summer rolls with spiced peanut dip recipe<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-curry-in-a-hurry-top-ten-kitchen-shortcuts-for-indian-food\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Curry in a hurry: top ten kitchen shortcuts for Indian food\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/56-218x150.jpg\" alt=\"\" title=\"Curry in a hurry: top ten kitchen shortcuts for Indian food\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-recipes\/\" class=\"td-post-category\">Recipes<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-curry-in-a-hurry-top-ten-kitchen-shortcuts-for-indian-food\/\" rel=\"bookmark\" title=\"Curry in a hurry: top ten kitchen shortcuts for Indian food\">Curry in a hurry: top ten kitchen shortcuts for Indian food<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_9_5b32897825efe",
  "td_hide_prev": true,
  "td_hide_next": false
}));
tmpObj = JSON.parse(JSON.stringify(block_td_uid_9_5b32897825efe));
tmpObj.is_ajax_running = true;
tmpObj.td_current_page = 1;
tmpObj.td_filter_value = 17;
var currentBlockObjSignature = JSON.stringify(tmpObj);
tdLocalCache.set(currentBlockObjSignature, JSON.stringify({
  "td_data": "<div class=\"td-mega-row\"><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/the-most-anticipated-charter-flights-in-the-canary-islands\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"The Most Anticipated Hotel Openings in Strasbourg this Summer\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2016\/01\/02-hotels-218x150.jpg\" alt=\"\" title=\"The Most Anticipated Hotel Openings in Strasbourg this Summer\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-travel\/\" class=\"td-post-category\">Travel<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/the-most-anticipated-charter-flights-in-the-canary-islands\/\" rel=\"bookmark\" title=\"The Most Anticipated Hotel Openings in Strasbourg this Summer\">The Most Anticipated Hotel Openings in Strasbourg this Summer<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/10-landscapes-wont-even-imagined-exist\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Basketball Stars Face Off in Ultimate Playoff Beard Battle\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/03\/yellow1-218x150.jpg\" alt=\"\" title=\"Basketball Stars Face Off in Ultimate Playoff Beard Battle\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-travel\/\" class=\"td-post-category\">Travel<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/10-landscapes-wont-even-imagined-exist\/\" rel=\"bookmark\" title=\"Basketball Stars Face Off in Ultimate Playoff Beard Battle\">Basketball Stars Face Off in Ultimate Playoff Beard Battle<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-planning-a-winter-holiday-canary-islands-offers-the-best-value-getaway-this-season\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Planning a Winter Holiday? Canary Islands Offers\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/03\/yellow5-218x150.jpg\" alt=\"\" title=\"Planning a Winter Holiday? Canary Islands Offers\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-travel\/\" class=\"td-post-category\">Travel<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-planning-a-winter-holiday-canary-islands-offers-the-best-value-getaway-this-season\/\" rel=\"bookmark\" title=\"Planning a Winter Holiday? Canary Islands Offers\">Planning a Winter Holiday? Canary Islands Offers<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><div class=\"td-mega-span\">\r\n        <div class=\"td_module_mega_menu td_mod_mega_menu\">\r\n            <div class=\"td-module-image\">\r\n                <div class=\"td-module-thumb\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-republic-day-week-top-weekend-getaways-from-delhi-and-mumbai\/\" rel=\"bookmark\" class=\"td-image-wrap\" title=\"Republic Day Week: Top weekend getaways from Delhi and Mumbai\"><img width=\"218\" height=\"150\" class=\"entry-thumb\" src=\"https:\/\/demo.tagdiv.com\/newspaper\/wp-content\/uploads\/2015\/04\/52-218x150.jpg\" alt=\"\" title=\"Republic Day Week: Top weekend getaways from Delhi and Mumbai\"\/><\/a><\/div>                <a href=\"https:\/\/demo.tagdiv.com\/newspaper\/category\/tagdiv-lifestyle\/tagdiv-travel\/\" class=\"td-post-category\">Travel<\/a>            <\/div>\r\n\r\n            <div class=\"item-details\">\r\n                <h3 class=\"entry-title td-module-title\"><a href=\"https:\/\/demo.tagdiv.com\/newspaper\/td-post-republic-day-week-top-weekend-getaways-from-delhi-and-mumbai\/\" rel=\"bookmark\" title=\"Republic Day Week: Top weekend getaways from Delhi and Mumbai\">Republic Day Week: Top weekend getaways from Delhi and Mumbai<\/a><\/h3>            <\/div>\r\n        <\/div>\r\n        <\/div><\/div>",
  "td_block_id": "td_uid_9_5b32897825efe",
  "td_hide_prev": true,
  "td_hide_next": false
}));

var block_td_uid_15_5b3289782aaa1 = new tdBlock();
block_td_uid_15_5b3289782aaa1.id = "td_uid_15_5b3289782aaa1";
block_td_uid_15_5b3289782aaa1.atts = '{"limit":"5","td_column_number":3,"ajax_pagination":"next_prev","category_id":"21","show_child_cat":30,"td_ajax_filter_type":"td_category_ids_filter","td_ajax_preloading":"preload","block_template_id":"","header_color":"","ajax_pagination_infinite_stop":"","offset":"","td_filter_default_txt":"","td_ajax_filter_ids":"","el_class":"","color_preset":"","border_top":"","css":"","tdc_css":"","class":"td_uid_15_5b3289782aaa1_rand","tdc_css_class":"td_uid_15_5b3289782aaa1_rand","tdc_css_class_style":"td_uid_15_5b3289782aaa1_rand_style"}';
block_td_uid_15_5b3289782aaa1.td_column_number = "3";
block_td_uid_15_5b3289782aaa1.block_type = "td_block_mega_menu";
block_td_uid_15_5b3289782aaa1.post_count = "5";
block_td_uid_15_5b3289782aaa1.found_posts = "10";
block_td_uid_15_5b3289782aaa1.header_color = "";
block_td_uid_15_5b3289782aaa1.ajax_pagination_infinite_stop = "";
block_td_uid_15_5b3289782aaa1.max_num_pages = "2";
tdBlocksArray.push(block_td_uid_15_5b3289782aaa1);

var block_td_uid_18_5b3289782e5b5 = new tdBlock();
block_td_uid_18_5b3289782e5b5.id = "td_uid_18_5b3289782e5b5";
block_td_uid_18_5b3289782e5b5.atts = '{"sort":"","navigation":"","style":"","header_text_color":"","header_color":"","articles_color":"","next_prev_color":"","next_prev_border_color":"","separator":"","post_ids":"","category_id":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","limit":"5","offset":"","el_class":"","css":"","tdc_css":"","block_template_id":"","td_column_number":3,"ajax_pagination_infinite_stop":"","td_ajax_preloading":"","td_ajax_filter_type":"","td_filter_default_txt":"","td_ajax_filter_ids":"","color_preset":"","ajax_pagination":"","border_top":"","class":"td_uid_18_5b3289782e5b5_rand","tdc_css_class":"td_uid_18_5b3289782e5b5_rand","tdc_css_class_style":"td_uid_18_5b3289782e5b5_rand_style"}';
block_td_uid_18_5b3289782e5b5.td_column_number = "3";
block_td_uid_18_5b3289782e5b5.block_type = "td_block_trending_now";
block_td_uid_18_5b3289782e5b5.post_count = "5";
block_td_uid_18_5b3289782e5b5.found_posts = "161";
block_td_uid_18_5b3289782e5b5.header_color = "";
block_td_uid_18_5b3289782e5b5.ajax_pagination_infinite_stop = "";
block_td_uid_18_5b3289782e5b5.max_num_pages = "33";
tdBlocksArray.push(block_td_uid_18_5b3289782e5b5);

var block_td_uid_22_5b32897830469 = new tdBlock();
block_td_uid_22_5b32897830469.id = "td_uid_22_5b32897830469";
block_td_uid_22_5b32897830469.atts = '{"custom_title":"DON\u0027T MISS","header_color":"#f9c100","category_ids":"-2","sort":"popular","td_ajax_filter_type":"td_category_ids_filter","td_ajax_filter_ids":"10, 9, 19, 17, 13, 24, 12, 14, 15, 27, 26, 18","ajax_pagination":"next_prev","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_id":"","tag_slug":"","autors_id":"","installed_post_types":"","limit":"5","offset":"","el_class":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_reset":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_reset":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_reset":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_reset":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"td_uid_22_5b32897830469_rand","tdc_css_class":"td_uid_22_5b32897830469_rand","tdc_css_class_style":"td_uid_22_5b32897830469_rand_style"}';
block_td_uid_22_5b32897830469.td_column_number = "2";
block_td_uid_22_5b32897830469.block_type = "td_block_1";
block_td_uid_22_5b32897830469.post_count = "5";
block_td_uid_22_5b32897830469.found_posts = "144";
block_td_uid_22_5b32897830469.header_color = "#f9c100";
block_td_uid_22_5b32897830469.ajax_pagination_infinite_stop = "";
block_td_uid_22_5b32897830469.max_num_pages = "29";
tdBlocksArray.push(block_td_uid_22_5b32897830469);

var block_td_uid_36_5b3289783295e = new tdBlock();
block_td_uid_36_5b3289783295e.id = "td_uid_36_5b3289783295e";
block_td_uid_36_5b3289783295e.atts = '{"custom_title":"LIFESTYLE NEWS","header_color":"#4caf50","category_id":"16","category_ids":"16, -2","limit":"6","td_ajax_filter_type":"td_category_ids_filter","td_ajax_filter_ids":"17, 18, 19, 20","ajax_pagination":"next_prev","post_ids":"-125, -129, -159","separator":"","custom_url":"","block_template_id":"","m2_tl":"","m2_el":"","m6_tl":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m2f_title_font_header":"","m2f_title_font_title":"Article title","m2f_title_font_reset":"","m2f_title_font_family":"","m2f_title_font_size":"","m2f_title_font_line_height":"","m2f_title_font_style":"","m2f_title_font_weight":"","m2f_title_font_transform":"","m2f_title_font_spacing":"","m2f_title_":"","m2f_cat_font_title":"Article category tag","m2f_cat_font_reset":"","m2f_cat_font_family":"","m2f_cat_font_size":"","m2f_cat_font_line_height":"","m2f_cat_font_style":"","m2f_cat_font_weight":"","m2f_cat_font_transform":"","m2f_cat_font_spacing":"","m2f_cat_":"","m2f_meta_font_title":"Article meta info","m2f_meta_font_reset":"","m2f_meta_font_family":"","m2f_meta_font_size":"","m2f_meta_font_line_height":"","m2f_meta_font_style":"","m2f_meta_font_weight":"","m2f_meta_font_transform":"","m2f_meta_font_spacing":"","m2f_meta_":"","m2f_ex_font_title":"Article excerpt","m2f_ex_font_reset":"","m2f_ex_font_family":"","m2f_ex_font_size":"","m2f_ex_font_line_height":"","m2f_ex_font_style":"","m2f_ex_font_weight":"","m2f_ex_font_transform":"","m2f_ex_font_spacing":"","m2f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"td_uid_36_5b3289783295e_rand","tdc_css_class":"td_uid_36_5b3289783295e_rand","tdc_css_class_style":"td_uid_36_5b3289783295e_rand_style"}';
block_td_uid_36_5b3289783295e.td_column_number = "2";
block_td_uid_36_5b3289783295e.block_type = "td_block_2";
block_td_uid_36_5b3289783295e.post_count = "6";
block_td_uid_36_5b3289783295e.found_posts = "25";
block_td_uid_36_5b3289783295e.header_color = "#4caf50";
block_td_uid_36_5b3289783295e.ajax_pagination_infinite_stop = "";
block_td_uid_36_5b3289783295e.max_num_pages = "5";
tdBlocksArray.push(block_td_uid_36_5b3289783295e);

var block_td_uid_42_5b328978347e5 = new tdBlock();
block_td_uid_42_5b328978347e5.id = "td_uid_42_5b328978347e5";
block_td_uid_42_5b328978347e5.atts = '{"custom_title":"HOUSE DESIGN","header_color":"#607d8b","category_id":"25","limit":"3","ajax_pagination":"next_prev","separator":"","custom_url":"","block_template_id":"","mx4_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","mx4f_title_font_header":"","mx4f_title_font_title":"Article title","mx4f_title_font_reset":"","mx4f_title_font_family":"","mx4f_title_font_size":"","mx4f_title_font_line_height":"","mx4f_title_font_style":"","mx4f_title_font_weight":"","mx4f_title_font_transform":"","mx4f_title_font_spacing":"","mx4f_title_":"","mx4f_cat_font_title":"Article category tag","mx4f_cat_font_reset":"","mx4f_cat_font_family":"","mx4f_cat_font_size":"","mx4f_cat_font_line_height":"","mx4f_cat_font_style":"","mx4f_cat_font_weight":"","mx4f_cat_font_transform":"","mx4f_cat_font_spacing":"","mx4f_cat_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"td_uid_42_5b328978347e5_rand","tdc_css_class":"td_uid_42_5b328978347e5_rand","tdc_css_class_style":"td_uid_42_5b328978347e5_rand_style"}';
block_td_uid_42_5b328978347e5.td_column_number = "2";
block_td_uid_42_5b328978347e5.block_type = "td_block_15";
block_td_uid_42_5b328978347e5.post_count = "3";
block_td_uid_42_5b328978347e5.found_posts = "34";
block_td_uid_42_5b328978347e5.header_color = "#607d8b";
block_td_uid_42_5b328978347e5.ajax_pagination_infinite_stop = "";
block_td_uid_42_5b328978347e5.max_num_pages = "12";
tdBlocksArray.push(block_td_uid_42_5b328978347e5);


var block_td_uid_43_5b328978357ac = new tdBlock();
block_td_uid_43_5b328978357ac.id = "td_uid_43_5b328978357ac";
block_td_uid_43_5b328978357ac.atts = '{"custom_title":"TECH AND GADGETS","header_color":"#f44336","category_id":"11","td_ajax_filter_type":"td_category_ids_filter","td_ajax_filter_ids":"13, 14, 15, 12","ajax_pagination":"next_prev","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","el_class":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_reset":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_reset":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_reset":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_reset":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"color_preset":"","border_top":"","class":"td_uid_43_5b328978357ac_rand","tdc_css_class":"td_uid_43_5b328978357ac_rand","tdc_css_class_style":"td_uid_43_5b328978357ac_rand_style"}';
block_td_uid_43_5b328978357ac.td_column_number = "2";
block_td_uid_43_5b328978357ac.block_type = "td_block_1";
block_td_uid_43_5b328978357ac.post_count = "5";
block_td_uid_43_5b328978357ac.found_posts = "33";
block_td_uid_43_5b328978357ac.header_color = "#f44336";
block_td_uid_43_5b328978357ac.ajax_pagination_infinite_stop = "";
block_td_uid_43_5b328978357ac.max_num_pages = "7";
tdBlocksArray.push(block_td_uid_43_5b328978357ac);


var block_td_uid_52_5b3289783789c = new tdBlock();
block_td_uid_52_5b3289783789c.id = "td_uid_52_5b3289783789c";
block_td_uid_52_5b3289783789c.atts = '{"custom_title":"MAKE IT MODERN","category_id":"27","limit":"4","ajax_pagination":"next_prev","separator":"","custom_url":"","block_template_id":"","mx4_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","mx4f_title_font_header":"","mx4f_title_font_title":"Article title","mx4f_title_font_reset":"","mx4f_title_font_family":"","mx4f_title_font_size":"","mx4f_title_font_line_height":"","mx4f_title_font_style":"","mx4f_title_font_weight":"","mx4f_title_font_transform":"","mx4f_title_font_spacing":"","mx4f_title_":"","mx4f_cat_font_title":"Article category tag","mx4f_cat_font_reset":"","mx4f_cat_font_family":"","mx4f_cat_font_size":"","mx4f_cat_font_line_height":"","mx4f_cat_font_style":"","mx4f_cat_font_weight":"","mx4f_cat_font_transform":"","mx4f_cat_font_spacing":"","mx4f_cat_":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_52_5b3289783789c_rand","tdc_css_class":"td_uid_52_5b3289783789c_rand","tdc_css_class_style":"td_uid_52_5b3289783789c_rand_style"}';
block_td_uid_52_5b3289783789c.td_column_number = "1";
block_td_uid_52_5b3289783789c.block_type = "td_block_15";
block_td_uid_52_5b3289783789c.post_count = "4";
block_td_uid_52_5b3289783789c.found_posts = "12";
block_td_uid_52_5b3289783789c.header_color = "";
block_td_uid_52_5b3289783789c.ajax_pagination_infinite_stop = "";
block_td_uid_52_5b3289783789c.max_num_pages = "3";
tdBlocksArray.push(block_td_uid_52_5b3289783789c);

var block_td_uid_53_5b32897838ed9 = new tdBlock();
block_td_uid_53_5b32897838ed9.id = "td_uid_53_5b32897838ed9";
block_td_uid_53_5b32897838ed9.atts = '{"custom_title":"LATEST REVIEWS","category_id":"12","limit":"3","separator":"","custom_url":"","block_template_id":"","m4_tl":"","m4_el":"","m6_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m4f_title_font_header":"","m4f_title_font_title":"Article title","m4f_title_font_reset":"","m4f_title_font_family":"","m4f_title_font_size":"","m4f_title_font_line_height":"","m4f_title_font_style":"","m4f_title_font_weight":"","m4f_title_font_transform":"","m4f_title_font_spacing":"","m4f_title_":"","m4f_cat_font_title":"Article category tag","m4f_cat_font_reset":"","m4f_cat_font_family":"","m4f_cat_font_size":"","m4f_cat_font_line_height":"","m4f_cat_font_style":"","m4f_cat_font_weight":"","m4f_cat_font_transform":"","m4f_cat_font_spacing":"","m4f_cat_":"","m4f_meta_font_title":"Article meta info","m4f_meta_font_reset":"","m4f_meta_font_family":"","m4f_meta_font_size":"","m4f_meta_font_line_height":"","m4f_meta_font_style":"","m4f_meta_font_weight":"","m4f_meta_font_transform":"","m4f_meta_font_spacing":"","m4f_meta_":"","m4f_ex_font_title":"Article excerpt","m4f_ex_font_reset":"","m4f_ex_font_family":"","m4f_ex_font_size":"","m4f_ex_font_line_height":"","m4f_ex_font_style":"","m4f_ex_font_weight":"","m4f_ex_font_transform":"","m4f_ex_font_spacing":"","m4f_ex_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_53_5b32897838ed9_rand","tdc_css_class":"td_uid_53_5b32897838ed9_rand","tdc_css_class_style":"td_uid_53_5b32897838ed9_rand_style"}';
block_td_uid_53_5b32897838ed9.td_column_number = "1";
block_td_uid_53_5b32897838ed9.block_type = "td_block_1";
block_td_uid_53_5b32897838ed9.post_count = "3";
block_td_uid_53_5b32897838ed9.found_posts = "14";
block_td_uid_53_5b32897838ed9.header_color = "";
block_td_uid_53_5b32897838ed9.ajax_pagination_infinite_stop = "";
block_td_uid_53_5b32897838ed9.max_num_pages = "5";
tdBlocksArray.push(block_td_uid_53_5b32897838ed9);



var block_td_uid_56_5b3289783a4c6 = new tdBlock();
block_td_uid_56_5b3289783a4c6.id = "td_uid_56_5b3289783a4c6";
block_td_uid_56_5b3289783a4c6.atts = '{"custom_title":"PERFORMANCE TRAINING","category_id":"23","separator":"","custom_url":"","block_template_id":"","m10_tl":"","m10_el":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","limit":"5","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m10f_title_font_header":"","m10f_title_font_title":"Article title","m10f_title_font_reset":"","m10f_title_font_family":"","m10f_title_font_size":"","m10f_title_font_line_height":"","m10f_title_font_style":"","m10f_title_font_weight":"","m10f_title_font_transform":"","m10f_title_font_spacing":"","m10f_title_":"","m10f_cat_font_title":"Article category tag","m10f_cat_font_reset":"","m10f_cat_font_family":"","m10f_cat_font_size":"","m10f_cat_font_line_height":"","m10f_cat_font_style":"","m10f_cat_font_weight":"","m10f_cat_font_transform":"","m10f_cat_font_spacing":"","m10f_cat_":"","m10f_meta_font_title":"Article meta info","m10f_meta_font_reset":"","m10f_meta_font_family":"","m10f_meta_font_size":"","m10f_meta_font_line_height":"","m10f_meta_font_style":"","m10f_meta_font_weight":"","m10f_meta_font_transform":"","m10f_meta_font_spacing":"","m10f_meta_":"","m10f_ex_font_title":"Article excerpt","m10f_ex_font_reset":"","m10f_ex_font_family":"","m10f_ex_font_size":"","m10f_ex_font_line_height":"","m10f_ex_font_style":"","m10f_ex_font_weight":"","m10f_ex_font_transform":"","m10f_ex_font_spacing":"","m10f_ex_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":2,"header_color":"","color_preset":"","border_top":"","class":"td_uid_56_5b3289783a4c6_rand","tdc_css_class":"td_uid_56_5b3289783a4c6_rand","tdc_css_class_style":"td_uid_56_5b3289783a4c6_rand_style"}';
block_td_uid_56_5b3289783a4c6.td_column_number = "2";
block_td_uid_56_5b3289783a4c6.block_type = "td_block_11";
block_td_uid_56_5b3289783a4c6.post_count = "5";
block_td_uid_56_5b3289783a4c6.found_posts = "11";
block_td_uid_56_5b3289783a4c6.header_color = "";
block_td_uid_56_5b3289783a4c6.ajax_pagination_infinite_stop = "";
block_td_uid_56_5b3289783a4c6.max_num_pages = "3";
tdBlocksArray.push(block_td_uid_56_5b3289783a4c6);


var block_td_uid_59_5b3289783c2c8 = new tdBlock();
block_td_uid_59_5b3289783c2c8.id = "td_uid_59_5b3289783c2c8";
block_td_uid_59_5b3289783c2c8.atts = '{"custom_title":"HOLIDAY RECIPES","header_color":"#ff7500","category_id":"18","tag_slug":"recipe","limit":"1","separator":"","custom_url":"","block_template_id":"","m5_tl":"","m5_el":"","post_ids":"","category_ids":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m5f_title_font_header":"","m5f_title_font_title":"Article title","m5f_title_font_reset":"","m5f_title_font_family":"","m5f_title_font_size":"","m5f_title_font_line_height":"","m5f_title_font_style":"","m5f_title_font_weight":"","m5f_title_font_transform":"","m5f_title_font_spacing":"","m5f_title_":"","m5f_cat_font_title":"Article category tag","m5f_cat_font_reset":"","m5f_cat_font_family":"","m5f_cat_font_size":"","m5f_cat_font_line_height":"","m5f_cat_font_style":"","m5f_cat_font_weight":"","m5f_cat_font_transform":"","m5f_cat_font_spacing":"","m5f_cat_":"","m5f_meta_font_title":"Article meta info","m5f_meta_font_reset":"","m5f_meta_font_family":"","m5f_meta_font_size":"","m5f_meta_font_line_height":"","m5f_meta_font_style":"","m5f_meta_font_weight":"","m5f_meta_font_transform":"","m5f_meta_font_spacing":"","m5f_meta_":"","m5f_ex_font_title":"Article excerpt","m5f_ex_font_reset":"","m5f_ex_font_family":"","m5f_ex_font_size":"","m5f_ex_font_line_height":"","m5f_ex_font_style":"","m5f_ex_font_weight":"","m5f_ex_font_transform":"","m5f_ex_font_spacing":"","m5f_ex_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","class":"td_uid_59_5b3289783c2c8_rand","tdc_css_class":"td_uid_59_5b3289783c2c8_rand","tdc_css_class_style":"td_uid_59_5b3289783c2c8_rand_style"}';
block_td_uid_59_5b3289783c2c8.td_column_number = "1";
block_td_uid_59_5b3289783c2c8.block_type = "td_block_6";
block_td_uid_59_5b3289783c2c8.post_count = "1";
block_td_uid_59_5b3289783c2c8.found_posts = "1";
block_td_uid_59_5b3289783c2c8.header_color = "#ff7500";
block_td_uid_59_5b3289783c2c8.ajax_pagination_infinite_stop = "";
block_td_uid_59_5b3289783c2c8.max_num_pages = "1";
tdBlocksArray.push(block_td_uid_59_5b3289783c2c8);


var block_td_uid_65_5b3289783d542 = new tdBlock();
block_td_uid_65_5b3289783d542.id = "td_uid_65_5b3289783d542";
block_td_uid_65_5b3289783d542.atts = '{"custom_title":"WRC RACING","header_color":"#4db2ec","category_id":"24","limit":"4","separator":"","custom_url":"","block_template_id":"","mx1_tl":"","mx2_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","mx1f_title_font_header":"","mx1f_title_font_title":"Article title","mx1f_title_font_reset":"","mx1f_title_font_family":"","mx1f_title_font_size":"","mx1f_title_font_line_height":"","mx1f_title_font_style":"","mx1f_title_font_weight":"","mx1f_title_font_transform":"","mx1f_title_font_spacing":"","mx1f_title_":"","mx1f_cat_font_title":"Article category tag","mx1f_cat_font_reset":"","mx1f_cat_font_family":"","mx1f_cat_font_size":"","mx1f_cat_font_line_height":"","mx1f_cat_font_style":"","mx1f_cat_font_weight":"","mx1f_cat_font_transform":"","mx1f_cat_font_spacing":"","mx1f_cat_":"","mx1f_meta_font_title":"Article meta info","mx1f_meta_font_reset":"","mx1f_meta_font_family":"","mx1f_meta_font_size":"","mx1f_meta_font_line_height":"","mx1f_meta_font_style":"","mx1f_meta_font_weight":"","mx1f_meta_font_transform":"","mx1f_meta_font_spacing":"","mx1f_meta_":"","mx2f_title_font_header":"","mx2f_title_font_title":"Article title","mx2f_title_font_reset":"","mx2f_title_font_family":"","mx2f_title_font_size":"","mx2f_title_font_line_height":"","mx2f_title_font_style":"","mx2f_title_font_weight":"","mx2f_title_font_transform":"","mx2f_title_font_spacing":"","mx2f_title_":"","mx2f_cat_font_title":"Article category tag","mx2f_cat_font_reset":"","mx2f_cat_font_family":"","mx2f_cat_font_size":"","mx2f_cat_font_line_height":"","mx2f_cat_font_style":"","mx2f_cat_font_weight":"","mx2f_cat_font_transform":"","mx2f_cat_font_spacing":"","mx2f_cat_":"","mx2f_meta_font_title":"Article meta info","mx2f_meta_font_reset":"","mx2f_meta_font_family":"","mx2f_meta_font_size":"","mx2f_meta_font_line_height":"","mx2f_meta_font_style":"","mx2f_meta_font_weight":"","mx2f_meta_font_transform":"","mx2f_meta_font_spacing":"","mx2f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","class":"td_uid_65_5b3289783d542_rand","tdc_css_class":"td_uid_65_5b3289783d542_rand","tdc_css_class_style":"td_uid_65_5b3289783d542_rand_style"}';
block_td_uid_65_5b3289783d542.td_column_number = "1";
block_td_uid_65_5b3289783d542.block_type = "td_block_19";
block_td_uid_65_5b3289783d542.post_count = "4";
block_td_uid_65_5b3289783d542.found_posts = "11";
block_td_uid_65_5b3289783d542.header_color = "#4db2ec";
block_td_uid_65_5b3289783d542.ajax_pagination_infinite_stop = "";
block_td_uid_65_5b3289783d542.max_num_pages = "3";
tdBlocksArray.push(block_td_uid_65_5b3289783d542);


var block_td_uid_67_5b3289783f2b7 = new tdBlock();
block_td_uid_67_5b3289783f2b7.id = "td_uid_67_5b3289783f2b7";
block_td_uid_67_5b3289783f2b7.atts = '{"custom_title":"HEALTH &amp; FITNESS","category_id":"19","category_ids":"19, -2","limit":"4","offset":"1","separator":"","custom_url":"","block_template_id":"","mx1_tl":"","mx2_tl":"","post_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","mx1f_title_font_header":"","mx1f_title_font_title":"Article title","mx1f_title_font_reset":"","mx1f_title_font_family":"","mx1f_title_font_size":"","mx1f_title_font_line_height":"","mx1f_title_font_style":"","mx1f_title_font_weight":"","mx1f_title_font_transform":"","mx1f_title_font_spacing":"","mx1f_title_":"","mx1f_cat_font_title":"Article category tag","mx1f_cat_font_reset":"","mx1f_cat_font_family":"","mx1f_cat_font_size":"","mx1f_cat_font_line_height":"","mx1f_cat_font_style":"","mx1f_cat_font_weight":"","mx1f_cat_font_transform":"","mx1f_cat_font_spacing":"","mx1f_cat_":"","mx1f_meta_font_title":"Article meta info","mx1f_meta_font_reset":"","mx1f_meta_font_family":"","mx1f_meta_font_size":"","mx1f_meta_font_line_height":"","mx1f_meta_font_style":"","mx1f_meta_font_weight":"","mx1f_meta_font_transform":"","mx1f_meta_font_spacing":"","mx1f_meta_":"","mx2f_title_font_header":"","mx2f_title_font_title":"Article title","mx2f_title_font_reset":"","mx2f_title_font_family":"","mx2f_title_font_size":"","mx2f_title_font_line_height":"","mx2f_title_font_style":"","mx2f_title_font_weight":"","mx2f_title_font_transform":"","mx2f_title_font_spacing":"","mx2f_title_":"","mx2f_cat_font_title":"Article category tag","mx2f_cat_font_reset":"","mx2f_cat_font_family":"","mx2f_cat_font_size":"","mx2f_cat_font_line_height":"","mx2f_cat_font_style":"","mx2f_cat_font_weight":"","mx2f_cat_font_transform":"","mx2f_cat_font_spacing":"","mx2f_cat_":"","mx2f_meta_font_title":"Article meta info","mx2f_meta_font_reset":"","mx2f_meta_font_family":"","mx2f_meta_font_size":"","mx2f_meta_font_line_height":"","mx2f_meta_font_style":"","mx2f_meta_font_weight":"","mx2f_meta_font_transform":"","mx2f_meta_font_spacing":"","mx2f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_67_5b3289783f2b7_rand","tdc_css_class":"td_uid_67_5b3289783f2b7_rand","tdc_css_class_style":"td_uid_67_5b3289783f2b7_rand_style"}';
block_td_uid_67_5b3289783f2b7.td_column_number = "1";
block_td_uid_67_5b3289783f2b7.block_type = "td_block_19";
block_td_uid_67_5b3289783f2b7.post_count = "4";
block_td_uid_67_5b3289783f2b7.found_posts = "10";
block_td_uid_67_5b3289783f2b7.header_color = "";
block_td_uid_67_5b3289783f2b7.ajax_pagination_infinite_stop = "";
block_td_uid_67_5b3289783f2b7.max_num_pages = "3";
tdBlocksArray.push(block_td_uid_67_5b3289783f2b7);

var block_td_uid_74_5b328978452b3 = new tdBlock();
block_td_uid_74_5b328978452b3.id = "td_uid_74_5b328978452b3";
block_td_uid_74_5b328978452b3.atts = '{"category_id":"","category_ids":"","tag_slug":"","autors_id":"","sort":"popular","installed_post_types":"","limit":"4","offset":"","custom_title":"MOST POPULAR","custom_url":"","header_text_color":"#","header_color":"#","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","ajax_pagination":"load_more","ajax_pagination_infinite_stop":"","class":"td_block_widget td_uid_74_5b328978452b3_rand","separator":"","block_template_id":"","m6_tl":"","post_ids":"","el_class":"","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","css":"","tdc_css":"","td_column_number":1,"color_preset":"","border_top":"","tdc_css_class":"td_uid_74_5b328978452b3_rand","tdc_css_class_style":"td_uid_74_5b328978452b3_rand_style"}';
block_td_uid_74_5b328978452b3.td_column_number = "1";
block_td_uid_74_5b328978452b3.block_type = "td_block_7";
block_td_uid_74_5b328978452b3.post_count = "4";
block_td_uid_74_5b328978452b3.found_posts = "161";
block_td_uid_74_5b328978452b3.header_color = "#";
block_td_uid_74_5b328978452b3.ajax_pagination_infinite_stop = "";
block_td_uid_74_5b328978452b3.max_num_pages = "41";
tdBlocksArray.push(block_td_uid_74_5b328978452b3);

var block_td_uid_76_5b3289784653e = new tdBlock();
block_td_uid_76_5b3289784653e.id = "td_uid_76_5b3289784653e";
block_td_uid_76_5b3289784653e.atts = '{"custom_title":"EDITOR PICKS","limit":3,"sort":"featured","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_id":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_76_5b3289784653e_rand","tdc_css_class":"td_uid_76_5b3289784653e_rand","tdc_css_class_style":"td_uid_76_5b3289784653e_rand_style"}';
block_td_uid_76_5b3289784653e.td_column_number = "1";
block_td_uid_76_5b3289784653e.block_type = "td_block_7";
block_td_uid_76_5b3289784653e.post_count = "3";
block_td_uid_76_5b3289784653e.found_posts = "17";
block_td_uid_76_5b3289784653e.header_color = "";
block_td_uid_76_5b3289784653e.ajax_pagination_infinite_stop = "";
block_td_uid_76_5b3289784653e.max_num_pages = "6";
tdBlocksArray.push(block_td_uid_76_5b3289784653e);


var block_td_uid_77_5b328978471d1 = new tdBlock();
block_td_uid_77_5b328978471d1.id = "td_uid_77_5b328978471d1";
block_td_uid_77_5b328978471d1.atts = '{"custom_title":"POPULAR POSTS","limit":3,"sort":"popular","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"","category_id":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_reset":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_reset":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_reset":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_77_5b328978471d1_rand","tdc_css_class":"td_uid_77_5b328978471d1_rand","tdc_css_class_style":"td_uid_77_5b328978471d1_rand_style"}';
block_td_uid_77_5b328978471d1.td_column_number = "1";
block_td_uid_77_5b328978471d1.block_type = "td_block_7";
block_td_uid_77_5b328978471d1.post_count = "3";
block_td_uid_77_5b328978471d1.found_posts = "161";
block_td_uid_77_5b328978471d1.header_color = "";
block_td_uid_77_5b328978471d1.ajax_pagination_infinite_stop = "";
block_td_uid_77_5b328978471d1.max_num_pages = "54";
tdBlocksArray.push(block_td_uid_77_5b328978471d1);


var block_td_uid_69_5b328978409cb = new tdBlock();
block_td_uid_69_5b328978409cb.id = "td_uid_69_5b328978409cb";
block_td_uid_69_5b328978409cb.atts = '{"custom_title":"BUSINESS","category_id":"20","limit":"3","separator":"","custom_url":"","block_template_id":"","m9_tl":"","post_ids":"","category_ids":"","tag_slug":"","autors_id":"","installed_post_types":"","sort":"","offset":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_reset":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_reset":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_reset":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m9f_title_font_header":"","m9f_title_font_title":"Article title","m9f_title_font_reset":"","m9f_title_font_family":"","m9f_title_font_size":"","m9f_title_font_line_height":"","m9f_title_font_style":"","m9f_title_font_weight":"","m9f_title_font_transform":"","m9f_title_font_spacing":"","m9f_title_":"","m9f_cat_font_title":"Article category tag","m9f_cat_font_reset":"","m9f_cat_font_family":"","m9f_cat_font_size":"","m9f_cat_font_line_height":"","m9f_cat_font_style":"","m9f_cat_font_weight":"","m9f_cat_font_transform":"","m9f_cat_font_spacing":"","m9f_cat_":"","m9f_meta_font_title":"Article meta info","m9f_meta_font_reset":"","m9f_meta_font_family":"","m9f_meta_font_size":"","m9f_meta_font_line_height":"","m9f_meta_font_style":"","m9f_meta_font_weight":"","m9f_meta_font_transform":"","m9f_meta_font_spacing":"","m9f_meta_":"","ajax_pagination":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"td_uid_69_5b328978409cb_rand","tdc_css_class":"td_uid_69_5b328978409cb_rand","tdc_css_class_style":"td_uid_69_5b328978409cb_rand_style"}';
block_td_uid_69_5b328978409cb.td_column_number = "1";
block_td_uid_69_5b328978409cb.block_type = "td_block_10";
block_td_uid_69_5b328978409cb.post_count = "3";
block_td_uid_69_5b328978409cb.found_posts = "13";
block_td_uid_69_5b328978409cb.header_color = "";
block_td_uid_69_5b328978409cb.ajax_pagination_infinite_stop = "";
block_td_uid_69_5b328978409cb.max_num_pages = "5";
tdBlocksArray.push(block_td_uid_69_5b328978409cb);

})