/*/
javascript/lib/wrappers/javascripts/RSHelpers.js*/
function $parentElWithAttr(a, b, c) {
    for (a = c || !a ? a : a.parentNode; a && a.getAttribute;) {
        if (a.getAttribute(b)) return a;
        a = a.parentNode
    }
    return null
}

function $cacheEls(a, b, c, d) {
    c = c || "rs-view";
    b = b || {};
    d && a.getAttribute(c) && (b[a.getAttribute(c)] = a);
    a = a.getElementsByTagName("*");
    for (d = 0; d < a.length; d++) {
        var e = a[d],
            f = e.getAttribute(c);
        f && (b[f] = e)
    }
    return b
}

function $childElWithAttr(a, b, c) {
    if (c && a.getAttribute(b)) return a;
    a = a.getElementsByTagName("*");
    for (c = 0; c < a.length; c++) {
        var d = a[c];
        if (d.getAttribute(b)) return d
    }
}

function $childElWithHasAttr(a, b, c) {
    if (c && a.getAttribute(b)) return a;
    a = a.getElementsByTagName("*");
    for (c = 0; c < a.length; c++) {
        var d = a[c];
        if (d.hasAttribute(b)) return d
    }
}

function $childElsWithAttr(a, b, c) {
    c = [];
    var d = a.getElementsByTagName("*");
    a.getAttribute(b) && c.push(a);
    for (a = 0; a < d.length; a++) {
        var e = d[a];
        e.getAttribute(b) && c.push(e)
    }
    return c
}

function $removeElsInPar(a, b) {
    for (var c = a.firstElementChild; c;) {
        var d = c.nextElementSibling;
        b && c.getAttribute("static") || c.parentNode.removeChild(c);
        c = d
    }
}

function $getSelectBoxValue(a) {
    return a.options[a.selectedIndex].value
}

function $getAttrValueMap(a, b) {
    for (var c = {}, d = a.attributes, e = 0; e < d.length; e++) {
        var f = d[e];
        c[f.nodeName] = f.nodeValue
    }
    b && (c._this = a);
    return c
}

function $getSiblingWithAttr(a, b) {
    for (var c = $childElsWithAttr(a.parentNode, b), d = 0; d < c.length; d++)
        if (c[d] !== a) return c[d]
}

function getCookie(a) {
    a += "\x3d";
    for (var b = decodeURIComponent(document.cookie).split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c];
            " " === d.charAt(0);) d = d.substring(1);
        if (0 === d.indexOf(a)) return d.substring(a.length, d.length)
    }
    return ""
}

function getGlobal(a) {
    if (!a) return a;
    var b = window;
    a.split(".").forEach(function(a) {
        b = b[a]
    });
    return b
}

function getValidDate(a) {
    var b = new Date(a);
    return isNaN(b.getTime()) ? new Date(a.split("-").join("/").replace(".0", "")) : b
}

function noop() {}

function isFunction(a) {
    return "[object Function]" === Object.prototype.toString.call(a)
}

function isArray(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
}

function isObject(a) {
    return null !== a && "object" === typeof a
}

function isDOM(a) {
    return a instanceof HTMLElement
}

function $freeze(a) {
    showModal(a);
    showLoader(a)
}

function $unFreeze() {
    hideModal();
    hideLoader()
}

function showLoader(a) {
    var b = $id("RSLoaderEl");
    b && (b.style.zIndex = a || getZIndex(), b.classList.remove("rs-block--hidden"))
}

function hideLoader() {
    var a = $id("RSLoaderEl");
    a && a.classList.add("rs-block--hidden")
}

function showModal(a) {
    var b = $id("RSModalEl");
    b && (b.style.zIndex = a || getZIndexCounter(), b.classList.remove("rs-block--hidden"))
}

function getModalEl() {
    return $id("RSModalEl")
}

function hideModal() {
    var a = $id("RSModalEl");
    a && a.classList.add("rs-block--hidden")
}

function $_checked(a, b) {
    a && (a.checked = "string" === typeof b ? "true" === b : !!b)
}

function $_toUnits(a) {
    return a + "px"
}

function $_textUnits(a) {
    var b = $id("RSMeasureTextWidthEl");
    b.html(a || "");
    a = b.clientHeight + 1;
    b = b.clientWidth + 1;
    return {
        height: a,
        heightUnits: $_toUnits(a),
        width: b,
        widthUnits: $_toUnits(b)
    }
}

function $getInnerHeight(a) {
    var b = 0;
    a = a.children;
    for (var c = 0; c < a.length; c++) b += a[c].offsetHeight;
    return b
}

function $getInnerWidth(a) {
    var b = 0;
    a = a.children;
    for (var c = 0; c < a.length; c++) var d = window.getComputedStyle(a[c], null),
        b = b + (a[c].offsetWidth + parseFloat((d.getPropertyValue("margin-left") || "0").replace("px", "") || 0) + parseFloat((d.getPropertyValue("margin-right") || "0").replace("px", "") || 0));
    return b
}

function $getElHeight(a, b) {
    b = b || 0;
    var c = a.children;
    if (0 === c.length) return b + Math.max(a.scrollHeight, a.offsetHeight);
    for (var d = 0; d < c.length; d++) b += $getElHeight(c[d]);
    return b
}

function $getHeight(a) {
    var b = window.getComputedStyle(a, null);
    return $getInnerHeight(a) + parseFloat(b.getPropertyValue("padding-top").replace("px", "")) + parseFloat(b.getPropertyValue("padding-bottom").replace("px", "")) + parseFloat((b.getPropertyValue("border-top") || "0").replace("px", "")) + parseFloat((b.getPropertyValue("border-bottom") || "0").replace("px", ""))
}

function $getWidth(a) {
    var b = window.getComputedStyle(a, null);
    return $getInnerWidth(a) + parseFloat(b.getPropertyValue("padding-left").replace("px", "")) + parseFloat(b.getPropertyValue("padding-right").replace("px", "")) + parseFloat((b.getPropertyValue("border-left") || "0").replace("px", "")) + parseFloat((b.getPropertyValue("border-right") || "0").replace("px", ""))
}

function $_titleCase(a, b) {
    a = a.toLowerCase();
    a = a.split(" ");
    b = b || a.length;
    for (var c = 0; c < b; c++) a[c] = a[c].charAt(0).toUpperCase() + a[c].slice(1);
    return a.join(" ")
}

function getCSRFToken() {}
var untitledCounter = 1;

function getUntitled() {
    return "Untitled - " + untitledCounter++
}

function getUntitledCounter() {
    return untitledCounter++
}
var zIndexCounter = 200,
    zIndexMaxCounter = 2047483600;

function getZIndexCounter() {
    return zIndexCounter
}

function getZIndex(a) {
    return ++zIndexCounter + (a ? zIndexMaxCounter : 0)
}

function dToT(a) {
    a = a.TABS.HOME;
    for (var b in a.layout) {
        var c = a.layout[b];
        "text" !== c.type && (c.meta = {
            title: c.title + " " + c.type.toUpperCase() + " " + c.period + (c.comparison ? " " + c.comparison : "")
        })
    }
}

function validEmail(a) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(a) ? !0 : !1
}

function debounce(a, b, c) {
    var d;
    return function() {
        var e = this,
            f = arguments,
            g = c && !d;
        clearTimeout(d);
        d = setTimeout(function() {
            d = null;
            c || a.apply(e, f)
        }, b);
        g && a.apply(e, f)
    }
}
var _BLOCK_HIDDEN = "rs-block--hidden",
    _BLOCK_DISABLE = "rs-block--disable",
    _NO_TRANSITION = "rs-block--notransition",
    _BLOCK_DOC_HEIGHT = "rs-block--docheight",
    _BLOCK_FULL_HEIGHT = "rs-block--fullheight",
    _BLOCK_TOP_LEFT = "rs-block--topleft",
    _BLOCK_TOP_RIGHT = "rs-block--topright",
    _BLOCK_RIGHT_AUTO = "rs-block--rightauto",
    _BLOCK_LEFT_AUTO = "rs-block--leftauto",
    _BLOCK_WIDTH_AUTO = "rs-block--widthauto",
    _BLOCK_OFFSCREEN = "rs-offscreen",
    _USER_ACTION_CLICK = "click",
    _USER_ACTION_KEY_DOWN = "keydown",
    _VIEW_IS_PREMIUM = "rs-view__premium--disabled";
/*/javascript/lib/wrappers/javascripts/RSNodes.js*/
var RSNodes = new function() {
    this.VIEW_PORT;
    this.MODE_EL;
    var d = document.createElement("div"),
        e = document.createElement("span");
    this.getViewPort = function() {
        return this.VIEW_PORT || (this.VIEW_PORT = $id("RSAppViewPortEl") || $id("RSAppEl"))
    };
    this.getNode = function(a) {
        switch (a) {
            case $constants.DASHBOARD_LIST_SELECT_BOX_HTML:
                return $id($constants.DASHBOARD_LIST_SELECT_BOX_HTML) || {};
            default:
                return $id(a)
        }
    };
    this.getParentNode = function(a) {
        switch (a) {
            case $constants.TYPE_DASHBOARD:
                return $id($constants.DASHBOARD_CONTAINER_EL_ID);
            default:
                return $id(a)
        }
    };
    this.getDiv = function(a) {
        var b = d.cloneNode();
        b.html(a || "");
        return b
    };
    this.getSpan = function() {
        return e.cloneNode()
    };
    this.getRect = function(a) {
        switch (a) {
            case $constants.TYPE_KPI:
                return {
                    width: 20, height: 13, x: 0, y: 0
                };
            case $constants.TYPE_TEXT:
                return {
                    width: 100, height: 1, x: 0, y: 0
                };
            case $constants.TYPE_COHORT:
                return {
                    width: 100, height: 57, x: 0, y: 0
                };
            default:
                return {
                    width: 100, height: 35, x: 0, y: 0
                }
        }
    };
    this.getDashboardItemViewEl = function(a) {
        switch (a) {
            case $constants.TYPE_KPI:
                return this.getEl({
                    name: "KPI",
                    id: "RSKPIEl"
                });
            case $constants.TYPE_TEXT:
                return this.getEl({
                    name: "TEXT",
                    id: "RSTextEl"
                });
            case "premium-banner":
                return this.getEl({
                    name: "TEXT",
                    id: "RSTextEl"
                });
            default:
                return this.getEl({
                    name: "VIEW",
                    id: "RSViewEl"
                })
        }
    };
    this.getDashboardItemEl = function() {
        return this.getEl({
            name: "DASHBOARD_ITEM",
            id: "RSDashboardItemWrapperEl"
        })
    };
    this.initModeEl = function(a) {
        var b = this.getViewPort();
        $removeElsInPar(b, !0);
        switch (a) {
            case $constants.CUSTOMER_REPORT_MODE:
            case $constants.ACCOUNTS_REPORT_MODE:
            case $constants.DASHBOARD_MODE:
                this.MODE_EL =
                    RSDashboardController.isCached() ? RSDashboardController.getEl() : this.getEl({
                        name: "DASHBOARD",
                        id: "RSDashboardEl"
                    });
                break;
            case $constants.EDIT_MODE:
                this.MODE_EL = RSDashboardEditController.isCached() ? RSDashboardEditController.getEl() : this.getEl({
                    name: "EDIT_MODE",
                    id: "RSDashboardEditEl"
                });
                break;
            case $constants.GALLERY_MODE:
                this.MODE_EL = RSNodes.getEl({
                    name: "GALLERY_MODE",
                    id: "RSGalleryEl"
                });
                break;
            case $constants.TEMPLATE_MODE:
                this.MODE_EL = RSNodes.getEl({
                    name: "TEMPLATE_MODE",
                    id: "RSTemplateEl"
                });
                break;
            case $constants.UPGRADE_MODE:
                this.MODE_EL =
                    RSNodes.getEl({
                        name: "UPGRADE_MODE",
                        id: "RSUpgradeEl"
                    });
                break;
            case $constants.METRICS_MANUAL_MODE:
                this.MODE_EL = RSNodes.getEl({
                    name: "METRICS_MANUAL_MODE",
                    id: "RSMetricsManualEl"
                });
                break;
            case $constants.ALERT_MODE:
                this.MODE_EL = RSNodes.getEl({
                    name: "ALERT_AND_GOAL_EL",
                    id: "RSAlertAndGoalsEl"
                });
                break;
            case $constants.WHATS_NEW_MODE:
                this.MODE_EL = RSNodes.getEl({
                    name: "WHATS_NEW_MODE",
                    id: "RSWhatsNewEl"
                });
                break;
            case $constants.GOALS_MODE:
                this.MODE_EL = RSNodes.getEl({
                    name: "ALERT_AND_GOAL_EL",
                    id: "RSAlertAndGoalsEl"
                })
        }
        this.getAppEl().setAttribute("rs-appmode",
            RSAppModule.MODE_VS_HASH[a] || "dashboard");
        b.appendChild(this.MODE_EL)
    };
    this.initViewEl = function(a, b) {
        $removeElsInPar(b, !0);
        var c = this.getDashboardItemViewEl(a);
        c.classList.add("rs-" + a);
        $cacheEls(c, c, "rs-view", !0);
        b.appendChild(c);
        return c
    };
    this.initNode = function(a, b) {
        var c = $id(b);
        c || (c = d.cloneNode(!0));
        c.removeAttribute("id");
        return this[a + "_EL"] = c
    };
    this.getEl = function(a) {
        a = (this[a.name + "_EL"] || this.initNode(a.name, a.id)).cloneNode(!0);
        $cacheEls(a, a, "rs-view");
        return a
    };
    this.getListOptionEl = function() {
        var a =
            this.getDiv();
        a.classList.add("rs-list__option");
        return a
    };
    this.getAppEl = function() {
        return $id("RSAppEl")
    };
    this.getDomCacheEl = function() {
        return $id("RSDomCache")
    }
};
/*/javascript/lib/wrappers/javascripts/RSReadMore.js*/
var RSReadMore = new function() {
    var f = this,
        g = {
            size: 30,
            toggle: !0,
            more: "More",
            less: "Less"
        };
    this.init = function(a, b) {
        var c = Object.assign({}, g, b),
            d = a.html();
        if (this.countWords(d) > c.size) {
            a.html(this.innerHTML(d, c.size), !0);
            a.setAttribute("readmore", "true");
            var e = $childElWithAttr(a, "link");
            e.html(c.more);
            $attachEvent(e, "click", this.toggle, null, e, [a, d, c])
        }
    };
    this.toggle = function(a, b, c, d) {
        $stopEventBubble(a);
        a = "true" === b.getAttribute("readmore");
        b.html(a ? c : f.trim(c, d.size));
        this.html(a ? d.less : d.more);
        b.setAttribute("readmore",
            !a + "");
        b.appendChild(this)
    };
    this.countWords = function(a) {
        return a.split(/\s+/).length
    };
    this.trim = function(a, b) {
        return a.split(/\s+/).slice(0, b).join(" ") + "... "
    };
    this.innerHTML = function(a, b) {
        return this.trim(a, b) + "\x3cspan class\x3d'rs-readmore' link\x3d'true'\x3e\x3c/span\x3e"
    }
};
/*/javascript/app/javascripts/RSActions.js*/
var RSActions = new function() {
    this.cr_create = function(a) {
        $request.send({
            EVENT: "create_report",
            URL: "/custom_reports/reports/create",
            TYPE: "POST",
            DATA: "reportMeta\x3d" + JSON.stringify(a)
        })
    };
    this.cr_meta = function(a) {
        $request.send({
            EVENT: "get_meta",
            URL: "/custom_reports/reports/" + a,
            TYPE: "GET"
        })
    };
    this.cr_data = function(a) {
        $request.send({
            EVENT: "get_data",
            URL: "/custom_reports/reports/" + a + "/data",
            TYPE: "GET"
        })
    };
    this.cr_download = function(a) {
        $request.send({
            EVENT: "get_data",
            URL: "/custom_reports/reports/" + a + "/download",
            TYPE: "GET"
        })
    };
    this.cr_dataSources = function() {
        $request.send({
            EVENT: "datasources",
            URL: "/datasources",
            TYPE: "GET"
        })
    };
    this.cr_dg = function() {
        $request.send({
            EVENT: "dg",
            URL: "/custom_reports/default-groups",
            TYPE: "GET"
        })
    };
    this.cr_st = function() {
        $request.send({
            EVENT: "dg",
            URL: "/custom_reports/standard-templates",
            TYPE: "GET"
        })
    };
    this.cr_sl = function(a) {
        $request.send({
            EVENT: "dg",
            URL: "/custom_reports/schedule_history/" + a,
            TYPE: "GET"
        })
    };
    this.cr_ul = function(a) {
        $request.send({
            EVENT: "dg",
            URL: "/email_role_list",
            TYPE: "GET"
        })
    };
    this.fetchLayout = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dMETA\x26META\x3dDASHBOARD\x26FETCH\x3dLAYOUT\x26"
        })
    };
    this.fetchDomCache = function(a) {
        RSRoutes.URL.LAZY_LOAD += window.isMergedRS ? "" : "?q\x3dmergedRS";
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("LAZY_LOAD"),
            DATA: "?q\x3dmergedRS",
            TYPE: "GET"
        })
    };
    this.fetchView = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("DATA_REPORT"),
            DATA: "ACTION\x3dDATA" + this.appendParams("REPORTID SEGMENTS TL SEGMENT CLIENT_META SORT_IDX SORT_ORDER".split(" "), b)
        })
    };
    this.fetchGoalsMeta = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dGOALS\x26GOALS\x3dCONFIG\x26"
        })
    };
    this.fetchAlertMeta = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dALERT\x26ALERT\x3dCONFIG\x26"
        })
    };
    this.fetchReportMeta = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dMETA\x26META\x3dREPORT"
        })
    };
    this.saveGoals = function(a, b) {
        $request.send(Object.assign({}, b, {
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dGOALS\x26GOALS\x3dSAVE" + this.appendParams(["SAVE"], b)
        }))
    };
    this.fetchGoalsFullMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dGOALS\x26GOALS\x3dDATA" + this.appendParams(["IDS"], b)
        })
    };
    this.deleteGoals = function(a, b) {
        $request.send(Object.assign({}, b, {
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dGOALS\x26GOALS\x3dDELETE" + this.appendParams(["DELETE",
                "REPORT_ID"
            ], b)
        }))
    };
    this.fetchReportMetaData = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("DATA_REPORT"),
            DATA: "ACTION\x3dDATA" + this.appendParams(["REPORTID", "SEGMENTS", "TL", "SEGMENT"], b)
        })
    };
    this.saveAlert = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dALERT\x26ALERT\x3dSAVE" + this.appendParams(["SAVE"], b)
        })
    };
    this.deleteAlert = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dALERT\x26ALERT\x3dDELETE" + this.appendParams(["DELETE"],
                b)
        })
    };
    this.fetchNotificationData = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META_NOTIFICATION"),
            DATA: "ACTION\x3dNOTIFICATION"
        })
    };
    this.fetchNotificationStatus = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META_NOTIFICATION"),
            DATA: "ACTION\x3dSTATUS" + this.appendParams(["STATUS"], b)
        })
    };
    this.dashboardExportJob = function(a, b) {
        $request.send({
            FILE_TYPE: "pdf",
            EVENT: a,
            URL: RSRoutes.get("EXPORT_JOB"),
            DATA: "ACTION\x3dDOWNLOAD\x26DOWNLOAD\x3dDASHBOARD" + this.appendParams(["SEGMENT", "SEGMENTS",
                "DASHBOARDID"
            ], b)
        })
    };
    this.VUDExportJob = function(a, b) {
        $request.send({
            FILE_TYPE: "csv",
            EVENT: a,
            URL: RSRoutes.get("EXPORT_JOB"),
            DATA: "ACTION\x3dDOWNLOAD\x26DOWNLOAD\x3dVUD" + this.appendParams("REPORTID SEGMENTS TL SEGMENT CLIENT_META SORT_IDX SORT_ORDER".split(" "), b)
        })
    };
    this.fetchExportStatusMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("EXPORT_DOWNLOAD"),
            DATA: "ACTION\x3dSTATUS" + this.appendParams(["STATUS"], b),
            PARAMS: b
        })
    };
    this.fetchExportDownloadMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("EXPORT_DOWNLOAD"),
            DATA: "ACTION\x3dDOWNLOAD" + this.appendParams(["DOWNLOAD"], b),
            PARAMS: b
        })
    };
    this.fetchFilterValues = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("DATA_FILTER"),
            DATA: "ACTION\x3dFILTER\x26USER\x3dRS" + this.appendParams(["FILTER", "SEGMENT", "SEGMENTS"], b),
            CALLBACK: b.CALLBACK,
            CONFIG: b.FILTER
        })
    };
    this.fetchUserTemplates = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dUSER_TEMPLATES"
        })
    };
    this.shareTemplateMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dCLONE_TEMPLATE" +
                this.appendParams(["CLONE_TEMPLATE", "desc"], b)
        })
    };
    this.deleteUserTemplateMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dDELETE_USER_TEMPLATE" + this.appendParams(["DELETE_USER_TEMPLATE"], b)
        })
    };
    this.saveDashboardMeta = function(a, b) {
        var c = ["DASHBOARD", "NAME"].concat([b.ORIG_NAME]);
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dSAVE\x26SAVE\x3dDASHBOARD" + this.appendParams(c, b)
        })
    };
    this.saveAsDashboardMeta = function(a, b) {
        var c = ["DASHBOARD"].concat([b.NAME]);
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dSAVEAS\x26SAVEAS\x3dDASHBOARD" + this.appendParams(c, b)
        })
    };
    this.deleteDashboardMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dDELETE\x26DELETE\x3dDASHBOARD" + this.appendParams(["DASHBOARD"], b)
        })
    };
    this.fetchTemplateMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dTEMPLATE" + this.appendParams(["TEMPLATE"], b),
            NAME: b.NAME
        })
    };
    this.fetchUserTemplateMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dUSER_TEMPLATE" + this.appendParams(["USER_TEMPLATE"], b),
            NAME: b.NAME
        })
    };
    this.savePropertyMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dSAVE\x26SAVE\x3dUSER" + this.appendParams(["USER"], b),
            NAME: b.NAME
        })
    };
    this.sendMetricRequest = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SUPPORT"),
            DATA: "ACTION\x3dREQUEST_METRIC" + this.appendParams(["DESCRIPTION"], b)
        })
    };
    this.setRoleAndDashboardForDemoUser = function(a, b) {
        $request.send(Object.assign({},
            b, {
                EVENT: a,
                URL: RSRoutes.get("META_USER"),
                DATA: "ACTION\x3dUSER_ROLE" + this.appendParams(["USER_ROLE"], b)
            }))
    };
    this.setDigestPreference = function(a, b) {
        $request.send(Object.assign({}, b, {
            EVENT: a,
            URL: RSRoutes.get("META_USER"),
            DATA: "ACTION\x3dSAVE_DIGEST_PREFERENCE" + this.appendParams(["SAVE_DIGEST_PREFERENCE"], b)
        }))
    };
    this.fetchCuesMeta = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dCUES\x26CUES\x3dCONFIG\x26"
        })
    };
    this.saveCues = function(a, b) {
        $request.send(Object.assign({}, b, {
            EVENT: a,
            URL: RSRoutes.get("SETTING"),
            DATA: "ACTION\x3dCUES\x26CUES\x3dSAVE" + this.appendParams(["SAVE", "CUE_TYPE"], b)
        }))
    };
    this.saveUserAppHelpMeta = function(a, b) {
        $request.send(Object.assign({}, b, {
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dCUES\x26CUES\x3dUPDATE" + this.appendParams(["NAME"], b)
        }))
    };
    this.fetchUserAppHelpMeta = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("META"),
            DATA: "ACTION\x3dCUES\x26CUES\x3dCONFIG"
        })
    };
    this.requestUpgrade = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("SUPPORT"),
            DATA: "ACTION\x3dUPGRADE"
        })
    };
    this.getCacheMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("CACHE"),
            DATA: "ACTION\x3dCACHE\x26" + this.appendParams(["CACHE", "SEGMENTS"], b),
            PARAMS: b
        })
    };
    this.getCacheStatus = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("CACHE"),
            DATA: "ACTION\x3dSTATUS\x26" + this.appendParams(["CACHE", "BATCH_ID", "REPORTS", "SEGMENTS"], b),
            PARAMS: b
        })
    };
    this.fetchDashboardScheduleMeta = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("DASHBOARD_SCHEDULE") + "?email\x3d" + RSApp.USER.$email,
            TYPE: "GET"
        })
    };
    this.deleteScheduleMeta = function(a, b) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("DASHBOARD_SCHEDULE_DELETE").replace("${id}", b)
        })
    };
    this.getConsolidatedSites = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("CONSOLIDATED_SITES"),
            TYPE: "GET"
        })
    };
    this.fetchUserMetaInfo = function(a) {
        $request.send({
            EVENT: a,
            URL: RSRoutes.get("USER_META_INFO"),
            TYPE: "GET"
        })
    };
    this.appendParams = function(a, b) {
        for (var c = "", e = 0; e < a.length; e++) {
            var d = a[e];
            if (d && b[d]) var f = b[d],
                c = c + (encodeURIComponent(d) + "\x3d" + (isObject(f) ?
                    encodeURIComponent(JSON.stringify(f)) : encodeURIComponent(f)) + "\x26")
        }
        return c ? "\x26" + c : ""
    }
};
/*/javascript/app/javascripts/RSElConstants.js*/
var RSElConstants = new function() {
    this.MULTI_SELECT_OPTION = {
        name: "MULTI_SELECT_OPTION",
        id: "RSMultiSelectOptionEl"
    };
    this.POPUP = {
        name: "POPUP",
        id: "RSPopUpEl"
    };
    this.POPUP_ACTION = {
        name: "POPUP_ACTION",
        id: "RSPopUpActionEl"
    };
    this.POPUP_ALERT = {
        name: "POPUP_ALERT",
        id: "RSPopUpAlertEl"
    };
    this.LIST = {
        name: "LIST",
        id: "RSListEl"
    };
    this.SNACK_BAR = {
        name: "SNACK_BAR",
        id: "RSSnackBarEl"
    };
    this.USER_MENU = {
        name: "USER_MENU",
        id: "RSUserMenuEl"
    };
    this.GOALS_EMPTY = {
        name: "GOALS_EMPTY",
        id: "RSGoalsEmpty"
    }
};
/*/javascript/lib/globals/javascripts/RSGlobal.js*/
function $id(a) {
    return a ? document.getElementById(a) : null
}

function $target(a) {
    return a ? a.target || a.srcElement || $target() : document.body
}

function $stopEventBubble(a) {
    a && a.stopPropagation ? (a.preventDefault(), a.stopPropagation()) : window.event && (window.event.cancelBubble = !0, window.event.returnValue = !1)
}

function $stopPropagation(a) {
    a && a.stopPropagation ? a.stopPropagation() : window.event && (window.event.cancelBubble = !0)
}

function $clone(a) {
    return JSON.parse(JSON.stringify(a))
}

function $attachEvent(a, b, c, d, e, f) {
    a.addEventListener(b, function(a) {
        c.apply(e || this, [].concat([a], f || []))
    }, d)
}

function $cachedFunc(a) {
    var b = Object.create(null);
    return function(c) {
        return b[c] || (b[c] = a(c))
    }
}

function $callOnce(a) {
    var b = !1;
    return function() {
        b || (b = !0, a.apply(this, arguments))
    }
};
/*/javascript/lib/globals/javascripts/ArrayIterator.js*/
var ArrayIterator = function(f) {
    var b, a, c, d = function() {
            return c > a
        },
        e = function() {
            return 0 < a - 1
        };
    b = f || [];
    a = 0;
    c = b.length;
    return {
        hasNext: d,
        next: function() {
            return d() ? b[a++] : null
        },
        get: function(a) {
            return b[a]
        },
        length: function() {
            return c
        },
        index: function() {
            return 0 === a ? a : a - 1
        },
        hasPrev: e,
        prev: function() {
            return e() ? b[--a - 1] : null
        }
    }
};
/*/javascript/lib/globals/javascripts/Queue.js*/
var Queue = function() {
    var a, b = function() {
        return a.length
    };
    a = [];
    return {
        enqueue: function(b) {
            a.push(b)
        },
        dequeue: function() {
            return a.shift() || null
        },
        hasNext: function() {
            return 0 < a.length
        },
        size: b,
        isEmpty: function() {
            return 0 === b()
        }
    }
};
/*/javascript/lib/globals/javascripts/RSProto.js*/
(function() {
    function e(a) {
        a = parseInt(a);
        return 9 < a ? a : "0" + a
    }
    var f = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        k = "January February March April May June July August September October November December".split(" ");
    Date.prototype.fromNow = function() {
        var a = [{
                label: "year",
                seconds: 31536E3
            }, {
                label: "month",
                seconds: 2592E3
            }, {
                label: "day",
                seconds: 86400
            }, {
                label: "hour",
                seconds: 3600
            }, {
                label: "minute",
                seconds: 60
            }, {
                label: "second",
                seconds: 0
            }],
            b = Math.floor((Date.now() - this.getTime()) / 1E3);
        a: {
            for (var d =
                    0; d < a.length; d++)
                if (a[d].seconds < b) {
                    a = a[d];
                    break a
                } a = void 0
        }
        b = Math.floor(b / a.seconds);
        return isFinite(b) ? b + " " + a.label + (1 !== b ? "s " : " ") + "ago" : "now"
    };
    Date.prototype.getWeek = function() {
        return Math.floor(this.getDate() / 7) + 1
    };
    Date.prototype.setWeek = function(a) {
        this.setDate(7 * a);
        return this.getTime()
    };
    Date.prototype.getQuarter = function() {
        return Math.floor(this.getMonth() / 3) + 1
    };
    Date.prototype.setQuarter = function(a) {
        this.setMonth(3 * a - 1);
        return this.getTime()
    };
    Date.prototype.setDay = function(a) {
        this.setDate(this.getDate() -
            this.getDay() + a);
        return this.getTime()
    };
    Date.prototype.toFormat = function(a) {
        switch (a) {
            case "yearly":
            case "yyyy":
                return this.getFullYear();
            case "ytd":
                a = this.toFormat("MMM dd yyyy");
                var b = (new Date(this.getFullYear(), 0, 1)).toFormat("MMM dd yyyy");
                return b + " - " + a;
            case "monthly":
            case "MMM yyyy":
                return f[this.getMonth()] + " " + this.getFullYear();
            case "MMMM yyyy":
                return k[this.getMonth()] + " " + this.getFullYear();
            case "mtd":
                return a = this.toFormat("MMM dd yyyy"), b = (new Date(this.getFullYear(), this.getMonth(),
                    1)).toFormat("MMM dd yyyy"), b + " - " + a;
            case "quarterly":
            case "Q yyyy":
                return "Q" + this.getQuarter() + " " + this.getFullYear();
            case "qtd":
                return a = this.toFormat("MMM dd yyyy"), b = (new Date(this.getFullYear(), 3 * (this.getQuarter() - 1), 1)).toFormat("MMM dd yyyy"), b + " - " + a;
            case "daily":
            case "MMM dd":
                return f[this.getMonth()] + " " + this.getDate();
            case "MMM dd yyyy":
                return f[this.getMonth()] + " " + this.getDate() + " " + this.getFullYear();
            case "weekly":
            case "W MMM yyyy":
                return "W" + this.getWeek() + " " + f[this.getMonth()] +
                    " " + this.getFullYear();
            case "wtd":
                return b = this.getDay(), a = this.toFormat("MMM dd yyyy"), b = new Date(this.getFullYear(), this.getMonth(), this.getDate() + (0 === b ? -6 : 1) - b), b.toFormat("MMM dd yyyy") + " - " + a;
            case "mm":
                return e(this.getMonth() + 1);
            case "dd":
                return e(this.getDate());
            case "hh:mm:ss":
                return e(this.getHours()) + ":" + e(this.getMinutes()) + ":" + e(this.getSeconds());
            case "yyyy-mm-dd hh:mm:ss":
                a = this.toFormat("yyyy");
                var b = this.toFormat("mm"),
                    d = this.toFormat("dd"),
                    l = this.toFormat("hh:mm:ss");
                return a + "-" +
                    b + "-" + d + " " + l;
            default:
                return this.toDateString()
        }
    };
    Object.defineProperty(Array.prototype, "customSort", {
        value: function(a, b, d) {
            this.sort(this.customSortComparator(a, b, d))
        },
        enumerable: !1
    });
    Object.defineProperty(Array.prototype, "customSortComparator", {
        value: function(a, b, d, e) {
            switch (b) {
                case 0:
                    return function(b, c) {
                        switch (d) {
                            case "DATE":
                                return getValidDate(b[a].ACTUAL || b[a].VALUE) - getValidDate(c[a].ACTUAL || c[a].VALUE);
                            case "NUMBER":
                                return parseInt(b[a].ACTUAL || (b[a].VALUE || "").replace(/[^0-9\.-]+/g, "")) -
                                    parseInt(c[a].ACTUAL || (c[a].VALUE || "").replace(/[^0-9\.-]+/g, ""));
                            case "CURRENCY":
                            case "DECIMAL NUMBER":
                            case "PERCENT":
                                var e = Number(b[a].ACTUAL || (b[a].VALUE || "").replace(/[^0-9\.-]+/g, "")),
                                    g = Number(c[a].ACTUAL || (c[a].VALUE || "").replace(/[^0-9\.-]+/g, ""));
                                return e - g;
                            default:
                                return b[a].VALUE < c[a].VALUE ? -1 : b[a].VALUE > c[a].VALUE ? 1 : 0
                        }
                    };
                case 1:
                    return function(b, c) {
                        switch (d) {
                            case "DATE":
                                return getValidDate(c[a].ACTUAL || c[a].VALUE) - getValidDate(b[a].ACTUAL || b[a].VALUE);
                            case "NUMBER":
                                return parseInt(c[a].ACTUAL ||
                                    (c[a].VALUE || "").replace(/[^0-9\.-]+/g, "")) - parseInt(b[a].ACTUAL || (b[a].VALUE || "").replace(/[^0-9\.-]+/g, ""));
                            case "CURRENCY":
                            case "DECIMAL NUMBER":
                            case "PERCENT":
                                var e = Number(b[a].ACTUAL || (b[a].VALUE || "").replace(/[^0-9\.-]+/g, ""));
                                return Number(c[a].ACTUAL || (c[a].VALUE || "").replace(/[^0-9\.-]+/g, "")) - e;
                            default:
                                return c[a].VALUE < b[a].VALUE ? -1 : c[a].VALUE > b[a].VALUE ? 1 : 0
                        }
                    }
            }
        },
        enumerable: !1
    });
    DOMTokenList.prototype.addAll = function(a) {
        for (var b = 0, d = a.length; b < d; b++) this.add(a[b])
    };
    DOMTokenList.prototype.removeAll =
        function(a) {
            for (var b = 0, d = a.length; b < d; b++) this.remove(a[b])
        };
    HTMLElement.prototype.html = function() {
        if (0 === arguments.length) return this.innerHTML.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e").replace(/&amp;/g, "\x26");
        var a = arguments[0];
        this.innerHTML = "";
        arguments[1] ? this.innerHTML = a : this.appendChild(document.createTextNode(a))
    };
    HTMLElement.prototype.render = function(a, b, d) {
        if (a) {
            var e = this.getElementsByTagName("*");
            b = b || "rs-view";
            d = !0 === d;
            for (var f = 0; f < e.length; f++) {
                var c = e[f],
                    h = c.getAttribute(b),
                    g = a[h];
                h && (g || d && "" === g) && c.html(g)
            }
        }
    };
    Object.defineProperty(Object.prototype, "$clone", {
        value: function() {
            var a = this instanceof Array ? [] : {},
                b;
            for (b in this) a[b] = this[b] && "object" == typeof this[b] ? this[b].$clone() : this[b];
            return a
        },
        enumerable: !1
    })
})();
/*/javascript/lib/globals/javascripts/RSUrl.js*/
var RSUrl = new function() {
    this.onPopState = [];
    this.getLocation = function() {
        return window.location.pathname + window.location.search + window.location.hash
    };
    this.getParamValue = function(a, b) {
        var c = this.parseParam()[a];
        return c ? b ? c : decodeURIComponent(c) : null
    };
    this.parseParam = function(a) {
        var b = {};
        "string" !== typeof a && (a = window.location.search);
        a = a.replace(/^\?/g, "");
        if (!a) return {};
        a = a.split("\x26");
        for (var c = null, d = 0; d < a.length; ++d) {
            var e = a[d].indexOf("\x3d");
            0 > e ? (e = a[d].length, c = !0) : c = decodeURIComponent(a[d].slice(e +
                1));
            b[decodeURIComponent(a[d].slice(0, e))] = c
        }
        return b
    };
    this.hash = function(a) {
        if (null === a || void 0 === a) return window.location.hash.substring(1);
        "" === a && this.removeHash();
        return window.location.hash = a
    };
    this.getHash = function() {
        return window.location.hash.substring(1)
    };
    this.stringify = function(a) {
        var b = "";
        if (!a || a.constructor !== Object) return b;
        Object.keys(a).forEach(function(c) {
            var d = a[c];
            b += c;
            !0 !== d && (b += "\x3d" + encodeURIComponent(a[c]));
            b += "\x26"
        });
        return b = b.replace(/\&$/g, "")
    };
    this.updateParam = function(a,
        b, c) {
        var d = this.parseParam();
        if (b) {
            if (d[a] === b) return;
            d[a] = b
        } else delete d[a];
        a = this.stringify(d);
        b = window.location;
        this.updateURL(b.pathname + ("" === a ? a : "?" + a) + b.hash, c)
    };
    this.updateURL = function(a, b) {
        b ? this.pushState(a) : this.replaceState(a)
    };
    this.pushState = function(a) {
        var b = Object.assign({}, this.parseParam(), {
            hash: this.hash()
        });
        window.history.pushState(b, "RevenueStory", a)
    };
    this.replaceState = function(a) {
        var b = Object.assign({}, this.parseParam(), {
            hash: this.hash()
        });
        window.history.replaceState(b, "RevenueStory",
            a)
    };
    this.removeHash = function() {
        this.updateURL(window.location.pathname + window.location.search, !1)
    };
    this.removeQuery = function() {
        this.updateURL(window.location.pathname + window.location.hash, !1)
    };
    window.onpopstate = function(a) {};
    window.onhashchange = function() {
        window.RSAppModule && $events.emitEvent(RSAppModule.getModeEvent(RSAppModule.HASH_VS_MODE(RSUrl.getHash()), RSAppModule.SET_EVENT_STATUS))
    }
};
/*/javascript/lib/globals/javascripts/EventEmitter.js*/
var EventEmitter = function() {
    var h = this,
        d = {},
        f = {};
    this.on = function(a, b) {
        if (a && b) {
            var c = d[a] = d[a] || []; - 1 === c.indexOf(b) && c.push(b);
            return this
        }
    };
    this.once = function(a, b) {
        if (a && b) return h.on(a, b), (f[a] = f[a] || {})[b] = !0, h
    };
    this.off = function(a, b) {
        var c = d && d[a];
        if (c && c.length) {
            var e = c.indexOf(b); - 1 != e && c.splice(e, 1);
            return this
        }
    };
    this.emitEvent = function(a) {
        var b = d && d[a];
        if (b && b.length) {
            for (var b = b.slice(0), c = f && f[a], e = 0; e < b.length; e++) {
                var g = b[e];
                c && c[g] && (h.off(a, g), delete c[g]);
                g.apply(this, Array.prototype.slice.call(arguments,
                    1))
            }
            return this
        }
    };
    this.allOff = function(a) {
        delete d[a];
        delete f[a]
    };
    this.getEvents = function() {
        return d
    }
};
/*/javascript/lib/events/javascripts/RSEventEmitter.js*/
var RSEventEmitter = new EventEmitter;
/*/javascript/lib/events/javascripts/RSEvents.js*/
var RSEvents = new function() {
    this.EVENTS = window.$events = Object.freeze({
        DOM_LOADED: "DOM_LOADED",
        DOM_ELS_LOADED: "DOM_ELS_LOADED",
        DOM_ELS_LOADED_SUCCESS: "DOM_ELS_LOADED_SUCCESS",
        SET_DASHBOARD_MODE: "SET_DASHBOARD_MODE",
        SET_EDIT_MODE: "SET_EDIT_MODE",
        SET_GALLERY_MODE: "SET_GALLERY_MODE",
        SET_TEMPLATE_MODE: "SET_TEMPLATE_MODE",
        SET_UPGRADE_MODE: "SET_UPGRADE_MODE",
        SET_METRICS_MANUAL_MODE: "SET_METRICS_MANUAL_MODE",
        SET_WHATS_NEW_MODE: "SET_WHATS_NEW_MODE",
        SET_GOALS_MODE: "SET_GOALS_MODE",
        SET_ALERT_MODE: "SET_ALERT_MODE",
        SET_CUSTOMER_REPORT_MODE: "SET_CUSTOMER_REPORT_MODE",
        SET_REPORT_BUILDER_MODE: "SET_REPORT_BUILDER_MODE",
        SET_ACCOUNTS_REPORT_MODE: "SET_ACCOUNTS_REPORT_MODE",
        SET_DASHBOARD_MODE_SUCCESS: "SET_DASHBOARD_MODE_SUCCESS",
        SET_EDIT_MODE_SUCCESS: "SET_EDIT_MODE_SUCCESS",
        SET_GALLERY_MODE_SUCCESS: "SET_GALLERY_MODE_SUCCESS",
        SET_TEMPLATE_MODE_SUCCESS: "SET_TEMPLATE_MODE_SUCCESS",
        SET_UPGRADE_MODE_SUCCESS: "SET_UPGRADE_MODE_SUCCESS",
        SET_METRICS_MANUAL_MODE_SUCCESS: "SET_METRICS_MANUAL_MODE_SUCCESS",
        SET_WHATS_NEW_MODE_SUCCESS: "SET_WHATS_NEW_MODE_SUCCESS",
        SET_GOALS_MODE_SUCCESS: "SET_GOALS_MODE_SUCCESS",
        SET_ALERT_MODE_SUCCESS: "SET_ALERT_MODE_SUCCESS",
        SET_CUSTOMER_REPORT_MODE_SUCCESS: "SET_CUSTOMER_REPORT_MODE_SUCCESS",
        SET_REPORT_BUILDER_MODE_SUCCESS: "SET_REPORT_BUILDER_MODE_SUCCESS",
        SET_ACCOUNTS_REPORT_MODE_SUCCESS: "SET_ACCOUNTS_REPORT_MODE_SUCCESS",
        DASHBOARD_SELECTED: "DASHBOARD_SELECTED",
        SEGMENT_SELECTED: "SEGMENT_SELECTED",
        DASHBOARD_LOAD: "DASHBOARD_LOAD",
        SET_APP_MODE: "SET_APP_MODE",
        SET_PREV_MODE: "SET_PREV_MODE",
        FETCH_LAYOUT: "FETCH_LAYOUT",
        FETCH_LAYOUT_SUCCESS: "FETCH_LAYOUT_SUCCESS",
        FETCH_GOALS_SUCCESS: "FETCH_GOALS_SUCCESS",
        REQUEST_FAILURE: "REQUEST_FAILURE",
        SHOW_USER_INFO: "SHOW_USER_INFO",
        FETCH_VIEW: "FETCH_VIEW",
        FETCH_VIEW_SUCCESS: "FETCH_VIEW_SUCCESS",
        SHOW_VIEW_HELP: "SHOW_VIEW_HELP",
        GALLERY_REPORT_CLICK: "GALLERY_REPORT_CLICK",
        GALLERY_CATEGORY_SELECT: "GALLERY_CATEGORY_SELECT",
        SHOW_KPI_VUD: "SHOW_KPI_VUD",
        SHOW_VIEW_VUD: "SHOW_VIEW_VUD",
        SHOW_VIEW_PERIOD_DROPDOWN: "SHOW_VIEW_PERIOD_DROPDOWN",
        SHOW_KPI_COMPARISON_DROPDOWN: "SHOW_KPI_COMPARISON_DROPDOWN",
        SHOW_SEGMENT_POPUP: "SHOW_SEGMENT_POPUP",
        SEGMENT_TOGGLE_TABLE: "SEGMENT_TOGGLE_TABLE",
        SEGMENT_FIELD_SELECT: "SEGMENT_FIELD_SELECT",
        APP_READ_ONLY_ERROR_MESSAGE: "APP_READ_ONLY_ERROR_MESSAGE",
        emitEvent: RSEventEmitter.emitEvent,
        notify: RSEventEmitter.emitEvent,
        listen: RSEventEmitter.on,
        listenOnce: RSEventEmitter.once,
        off: RSEventEmitter.off,
        allOff: RSEventEmitter.allOff
    });
    RSEventEmitter.on("FETCH_SVG_SPRITE_SUCCESS", function(b) {
        var a = document.createElement("div");
        a.innerHTML = b;
        RSNodes.getDomCacheEl().insertBefore(a, RSNodes.getDomCacheEl().childNodes[0])
    });
    RSEventEmitter.on(this.EVENTS.DOM_ELS_LOADED_SUCCESS, function(b) {
        RSAppController.isPhantomJS() || (RSNodes.getDomCacheEl().innerHTML += b);
        RSEventDispatcher.init.apply(RSEventDispatcher, arguments);
        RSCache.init.apply(RSCache, arguments);
        RSAjaxAPI.init(RSCache.cache(RSCache.CACHE_KEY_USER_CSRF_TOKEN));
        RSApp.defineProperty(RSApp, $constants.MODULES, RSCache.cache($constants.MODULES));
        RSApp.defineProperty(RSApp, $constants.IS_MOBILE, RSCache.cache(RSCache.CACHE_KEY_DEVICE_IS_MOBILE));
        RSApp.defineProperty(RSApp, $constants.SYNC_TIME, RSCache.cache(RSCache.CACHE_KEY_SYNC_TIME));
        RSApp.defineProperty(RSApp, $constants.TIME_ZONE, RSCache.cache(RSCache.CACHE_KEY_TIME_ZONE));
        RSApp.defineProperty(RSApp, $constants.USER, RSCache.cache(RSCache.CACHE_KEY_USER_INFO) || {});
        RSApp.defineProperty(RSApp, $constants.IS_DEMO_USER,
            "true" === RSApp.USER.IS_DEMO_USER + "");
        RSApp.defineProperty(RSApp, $constants.MIX_PANEL_API_KEY, RSCache.cache(RSCache.CACHE_KEY_MIX_PANEL_API_KEY));
        RSApp.USER.IS_DEMO_USER && $request.init({
            email: RSApp.USER.$email
        });
        RSRoutes.init(RSApp.USER.IS_DEMO_USER);
        RSAppController.isPhantomJS() || RSApp.USER.IS_DEMO_USER || !RSApp.USER.isLaunchPlanUser || RSSession.init();
        if (RSApp.USER.isLaunchPlanUser && !RSApp.USER.isTestSite) {
            hideLoader();
            var a = $id("RSLaunchPlanPopupEl");
            $cacheEls(a, a, "rs-view");
            a.upgradeCTA.setAttribute("href",
                RSApp.USER.cbUpgradePageURL);
            RSPopUp.show({
                NAME: "LAUNCH_PLAN_USER",
                EL: a,
                HEADER_HIDDEN: !0,
                CONTENT_HEIGHT: !0,
                CONTENT_WIDTH: !0
            });
            getModalEl().classList.add("rs-block--nothidden")
        }
        RSAppModule.init(RSApp.MODULES);
        RSAppController.isPhantomJS() ? $events.emitEvent($events.FETCH_LAYOUT_SUCCESS, $id("exportData").innerHTML) : ($events.emitEvent($events.FETCH_LAYOUT), window.isMergedRS || $id("RSRSDownloadsHeaderBtnEl").parentNode.removeChild($id("RSRSDownloadsHeaderBtnEl")), ((RSApp.USER.IS_DEMO_USER || RSAppController.isCBUserTest()) &&
            !RSApp.USER.IS_USER_SYNCED || RSApp.USER.isLaunchPlanUser) && $id("RSDemoDataBannerEl").classList.remove("rs-block--hidden"))
    });
    RSEventEmitter.on(this.EVENTS.DASHBOARD_SELECTED, function(b, a) {
        var c = RSApp[$constants.DASHBOARD_SELECTED],
            d = RSAppController.getDashboardId(c);
        RSUrl.updateParam("d", d, !0);
        RSUrl.updateParam("s", "");
        $events.emitEvent($events.DASHBOARD_LOAD, c)
    });
    RSEventEmitter.on(this.EVENTS.FETCH_LAYOUT, function() {
        RSActions.fetchLayout($events.FETCH_LAYOUT)
    });
    RSEventEmitter.on(this.EVENTS.FETCH_VIEW,
        function() {
            RSActions.fetchLayout($events.FETCH_LAYOUT)
        });
    RSEventEmitter.on(this.EVENTS.FETCH_LAYOUT_SUCCESS, function() {
        RSThirdPartyController.init();
        RSAppController.isPhantomJS() || (RSUserController.init(), RSGettingStartedController.init(), RSDemoController.init(), RSApp.IS_MOBILE || (RSNotificationController.init(), RSUserAppHelpInfoController.init.call(RSUserAppHelpInfoController)))
    });
    RSEventEmitter.on(this.EVENTS.REQUEST_FAILURE, function() {
        RSSnackBar.error("Oops! Something went wrong! Try Again!")
    });
    RSEventEmitter.on(this.EVENTS.APP_READ_ONLY_ERROR_MESSAGE, function() {
        $unFreeze();
        RSPopUp.hideAll();
        RSApp.USER.READ_ONLY_ERROR_MESSAGE && RSSnackBar.info(RSApp.USER.READ_ONLY_ERROR_MESSAGE)
    })
};
/*/javascript/lib/events/javascripts/RSEventDispatcher.js*/
var RSEventDispatcher = new function() {
    this.init = function() {
        document.body.addEventListener("click", this.bodyClickEvent)
    };
    this.bodyClickEvent = function(a) {
        RSEventEmitter.emitEvent("ON_DOC_CLICK_HIDE", a);
        RSEventDispatcher.dispatch(a)
    };
    this.dispatch = function(a) {
        var c = $target(a),
            b = c.getAttribute("rs-click");
        b && (RSEventEmitter.emitEvent(b, a, c), window.RSUserLog && RSUserLog.log(b))
    }
};
/*/javascript/lib/routes/javascripts/RSRoutes.js*/
var RSRoutes = new function() {
    this.URL = this.USER = {
        META: "/analytics/meta",
        META_USER: "/analytics/user_meta",
        META_NOTIFICATION: "/analytics/notification",
        DATA_CACHE: "/analytics/cache",
        DATA_REPORT: "/analytics/report",
        DATA_FILTER: "/analytics/filter",
        SUPPORT: "/analytics/support",
        EXPORT_JOB: "/analytics/create_export_job",
        EXPORT_DOWNLOAD: "/analytics/download",
        SETTING: "/analytics/setting",
        COMMON: "https://demo.revenuestory.io/analytics/common",
        LAZY_LOAD: "/dashboard/lazyload",
        CACHE: "/analytics/cache",
        CONSOLIDATED_SITES: "/consolidated_sites",
        DASHBOARD_SCHEDULE: "/dashboard_schedule",
        DASHBOARD_SCHEDULE_DELETE: "/dashboard_schedule/${id}/delete",
        USER_META_INFO: "/usermetainfo"
    };
    this.DEMO_USER = Object.freeze({
        META: "/demo/meta",
        META_USER: "/demo/user_meta",
        META_NOTIFICATION: "/demo/notification",
        DATA_CACHE: "",
        DATA_REPORT: "/demo/report",
        DATA_FILTER: "/demo/filter",
        SUPPORT: "/demo/support",
        EXPORT_JOB: "/demo/create_export_job",
        EXPORT_DOWNLOAD: "/demo/download",
        SETTING: "/demo/setting",
        COMMON: "https://demo.revenuestory.io/analytics/common",
        LAZY_LOAD: "/dashboard/lazyload",
        CONSOLIDATED_SITES: "/demo/consolidated_sites",
        DASHBOARD_SCHEDULE: "/demo/dashboard_schedule",
        DASHBOARD_SCHEDULE_DELETE: "/demo/dashboard_schedule/${id}/delete",
        USER_META_INFO: "/demo/usermetainfo"
    });
    this.init = function(a) {
        this.URL = a ? this.DEMO_USER : this.USER;
        Object.freeze(this)
    };
    this.get = function(a) {
        return a ? this.URL[a] : ""
    }
};
/*/javascript/lib/requests/javascripts/RSAjaxAPI.js*/
var RSAjaxAPI = new function() {
    var d = function(a, b) {
            a.onreadystatechange = c.bind(b.CONTEXT || this, a, b);
            !1 !== b.ASYNC && (b.ASYNC = !0);
            a.open(b.TYPE || "POST", b.URL, b.ASYNC);
            a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        },
        c = function(a, b) {
            if (a.readyState === XMLHttpRequest.DONE) switch (a.status) {
                case 200:
                    b.ONSUCCESS && b.ONSUCCESS.call(this, a.response, Object.assign({}, {
                        XHR: a
                    }, b));
                    break;
                default:
                    b.ONFAILURE && b.ONFAILURE.call(this, b)
            }
        },
        e =
        function() {
            var a;
            window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP"));
            return a
        },
        f = function(a) {
            a.DATA = a.DATA || "";
            this.CSRF_TOKEN && (a.DATA += "\x26_csrf_token\x3d" + this.CSRF_TOKEN)
        };
    this.init = function(a) {
        this.CSRF_TOKEN = a;
        Object.freeze(this)
    };
    this.sendRequest = function(a) {
        f.call(RSAjaxAPI, a);
        var b = e.call(RSAjaxAPI, a);
        a.RESPONSE_TYPE && (b.responseType = a.RESPONSE_TYPE);
        d.call(RSAjaxAPI, b, a);
        b.send(a.DATA)
    }
};
/*/javascript/lib/requests/javascripts/RSAppRequestQueue.js*/
var RSAppRequestQueue = new function() {
    var h = Queue(),
        k = Queue(),
        b = Queue(),
        l = 4,
        f = 0,
        e, m = function(a, d) {
            switch (d) {
                case 3:
                    b.enqueue(Object.assign({}, a, {
                        reqtype: 3
                    }));
                    break;
                case 1:
                    k.enqueue(Object.assign({}, a, {
                        reqtype: 1
                    }));
                    break;
                default:
                    h.enqueue(Object.assign({}, a, {
                        reqtype: 2
                    }))
            }
            g()
        },
        g = function() {
            for (; f < l;) {
                var a = h.dequeue() || b.dequeue() || k.dequeue();
                if (!a) break;
                a.DATA += e || "";
                "GET" !== a.TYPE || a.URL.includes("lazyload") || a.URL.includes("email\x3d") || !e || (a.URL.includes("?") ? a.URL += "\x26" + e : a.URL += "?" + e);
                RSAjaxAPI.sendRequest(Object.assign({},
                    a, {
                        ONSUCCESS: function(a, c) {
                            f--;
                            g();
                            c.EVENT && $events.emitEvent(c.EVENT + "_SUCCESS", a, c);
                            3 === c.reqtype && b.isEmpty() && hideLoader()
                        },
                        ONFAILURE: function(a) {
                            f--;
                            g();
                            a.EVENT && $events.emitEvent(a.EVENT + "_FAILURE", a);
                            3 === a.reqtype && b.isEmpty() && hideLoader();
                            RSApp && RSApp.USER && RSApp.USER.IS_READ_ONLY && $events.emitEvent($events.APP_READ_ONLY_ERROR_MESSAGE, a)
                        }
                    }));
                f++
            }
        };
    this.init = function(a) {
        var d = "",
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) var b = a[c],
                d = d + (c + "\x3d" + (isObject(b) ? JSON.stringify(b) : b) + "\x26");
        e = d ? "\x26" +
            d : ""
    };
    this.send = function(a) {
        m(a, 2)
    };
    this.later = function(a) {
        m(a, 1)
    };
    this.setMaxReqlimit = function(a) {
        l = a
    };
    this.destroyDashboardQueue = function() {
        b = Queue()
    };
    window.$request = this
};
/*/javascript/controller/javascripts/RSHelpCenterController.js*/
var RSHelpCenterController = new function() {
    this.FAQ_MODE = "faq";
    this.VIDEO_MODE = "video";
    this.METRICS_MANUAL = "metricsmanual";
    this.init = function() {
        this.changeAppMode(RSUrl.getHash());
        RSEventDispatcher.init()
    };
    this.setAppViewMode = function(a) {
        var b = $id("RSAppEl");
        b.classList.toggle("rs-tab__faq", a === this.FAQ_MODE);
        b.classList.toggle("rs-tab__video", a === this.VIDEO_MODE);
        b.classList.toggle("rs-tab__metricsmanual", a === this.METRICS_MANUAL)
    };
    this.changeAppMode = function(a) {
        a = a || this.METRICS_MANUAL; 
        // RSUrl.hash(a);
        switch (a) {
            case "metricsmanual":
                this.setAppViewMode(a);
                RSMetricsManualController.initStandAlone();
                break;
            default:
                RSUrl.hash("metricsmanual"), a = this.METRICS_MANUAL; 
                break;
        }
    };
    this.fetchHelpMeta = function(a, b) {
        RSEventEmitter.on("FETCH_HELP_META_SUCCESS", this.segregateData);
        $request.send({
            URL: RSRoutes.get("COMMON"),
            DATA: "ACTION\x3dFAQ\x26",
            EVENT: "FETCH_HELP_META",
            CALLBACK: a,
            CONTEXT: b
        })
    };
    this.segregateData = function(a, b) {
        for (var d = JSON.parse(a).DATA, e = [], f = [], c = 0; c < d.length; c++) d[c].hasOwnProperty("video_id") ? f.push(d[c]) : e.push(d[c]);
        RSHelpVideoController.DATA = f;
        RSFaqController.DATA = e;
        b.CALLBACK && b.CALLBACK.call(b.CONTEXT)
    }
};
/*/javascript/controller/javascripts/RSFaqController.js*/
var RSFaqController = new function() {
    this.DATA;
    this.segregatedData = {};
    this.EMPTY_DIV = document.createElement("div");
    this.isRendered = !1;
    var g = ["Differences between RevenueStory and SaaS Metrics report", "General FAQs"];
    this.init = function() {
        $freeze();
        this.DATA ? (!this.isRendered && this.loadData(), $unFreeze()) : RSHelpCenterController.fetchHelpMeta(this.loadData, this)
    };
    this.segregateFAQData = function() {
        for (var a = ArrayIterator(this.DATA); a.hasNext();) {
            var b = a.next(),
                c = b.category || "General";
            !this.segregatedData[c] &&
                (this.segregatedData[c] = []);
            this.segregatedData[c].push(b)
        }
    };
    this.loadData = function() {
        this.segregateFAQData();
        this.render();
        this.registerEvents();
        $unFreeze()
    };
    this.registerEvents = function() {
        var a;
        $id("RSFaqEl").addEventListener("click", function(b) {
            b = RSFaqController.getTargetQuestion(RSFaqController.getTargetEl(b));
            b.classList.contains("question--open") ? (b.classList.remove("question--open"), a = void 0) : (a && a.classList.remove("question--open"), b && b.classList.add("question--open"), a = b)
        })
    };
    this.render =
        function() {
            for (var a = $id("RSFaqEl"), b = ArrayIterator(g); b.hasNext();) {
                var c = b.next();
                if (this.segregatedData.hasOwnProperty(c)) {
                    var d = RSNodes.getEl({
                        id: "RSFAQSectionEl",
                        name: "FAQ_SECTION"
                    });
                    d.name.html(c);
                    for (c = ArrayIterator(this.segregatedData[c]); c.hasNext();) {
                        var f = c.next(),
                            e = RSNodes.getEl({
                                id: "RSFAQQuestionHolderEl",
                                name: "FAQ_QUESTIONS_HOLDER"
                            });
                        e.question.innerHTML = f.ques;
                        e.answer.innerHTML = f.ans;
                        d.appendChild(e)
                    }
                    a.appendChild(d)
                }
            }
            this.isRendered = !0
        };
    this.getTargetQuestion = function(a) {
        for (; a &&
            a.hasAttribute;) {
            if (a.hasAttribute("rs-question")) return a;
            a = a.parentNode
        }
        return null
    };
    this.getTargetEl = function(a) {
        return a ? a.target || a.srcElement || $target() : document.body
    }
};
/*/javascript/controller/javascripts/RSHelpVideoController.js*/
var RSHelpVideoController = new function() {
    this.DATA;
    this.EMPTY_DIV = document.createElement("div");
    this.isRendered = !1;
    this.ytIFrame;
    this.init = function() {
        !this.DATA && RSHelpCenterController.fetchHelpMeta(this.renderHelp, this);
        !this.isRendered && this.DATA && this.renderHelp()
    };
    this.renderHelp = function() {
        for (var a = this.EMPTY_DIV.cloneNode(), b = $id("RSHelpVideosEl"), c = 0, m = this.DATA.length; c < m; c++) {
            var e = this.DATA[c],
                l = e.video_id,
                d = a.cloneNode();
            d.classList.add("rs-videos__container");
            var f = a.cloneNode();
            f.classList.add("rs-vcontainer__thumb");
            var g = a.cloneNode();
            g.classList.add("rs-vcontainer__title");
            var h = a.cloneNode();
            h.classList.add("rs-vcontainer__desc");
            var k = a.cloneNode();
            k.classList.add("rs-vcontainer__duration");
            f.style.backgroundImage = "url('https://img.youtube.com/vi/" + l + "/0.jpg')";
            g.innerText = e.title;
            h.innerText = e.desc || "";
            k.innerText = e.duration || "";
            d.appendChild(f);
            d.appendChild(g);
            d.appendChild(h);
            d.appendChild(k);
            (function(a) {
                d.addEventListener("click", function() {
                    RSHelpVideoController.popVideo(a)
                })
            })(l);
            b.appendChild(d)
        }
        this.isRendered = !0;
        $unFreeze();
        RSUrl.getParamValue("id") && this.popVideo(RSUrl.getParamValue("id"));
        RSUrl.updateParam("id");
        RSUrl.getParamValue("bucket") && this.popVideoUsingCategory(RSUrl.getParamValue("bucket"));
        RSUrl.updateParam("bucket")
    };
    this.popVideoUsingCategory = function(a) {
        (a = this.getVideoIdFromCategory(a)) && this.popVideo(a)
    };
    this.getVideoIdFromCategory = function(a) {
        for (var b = ArrayIterator(this.DATA); b.hasNext();) {
            var c = b.next();
            if (c.bucket && -1 < c.bucket.indexOf(a)) return c.video_id
        }
        return null
    };
    this.popVideo =
        function(a) {
            a = RSHelpVideoController.getYTIframe(a);
            RSPopUp.show({
                NAME: "HELP_VIDEO",
                EL: a,
                HEADER_HIDDEN: !0,
                NO_FRAME: !0,
                ON_MODEL_CLICK_HIDE: !0
            })
        };
    this.getYTIframe = function(a) {
        if (this.ytIFrame) {
            var b = this.ytIFrame.cloneNode(!0);
            b.setAttribute("src", "//www.youtube.com/embed/" + a);
            return b
        }
        b = document.createElement("iframe");
        b.setAttribute("src", "//www.youtube.com/embed/" + a);
        b.setAttribute("allowfullscreen", "");
        b.setAttribute("width", "800px");
        b.setAttribute("height", "465px");
        b.classList.add("youtube-iframe");
        this.ytIFrame = b;
        return b.cloneNode(!0)
    }
};
/*/javascript/controller/javascripts/RSMetricsManualController.js*/
var RSMetricsManualController = new function() {
    var e = this;
    this.DATA;
    this.EL;
    this.CRITERIA;
    this.OPEN;
    this.IS_STAND_ALONE;
    this.categoryList = "All Metrics;MRR;Churn;Acquisition;Subscription;Plan;Premium;Revenue;Billing;Custom;Receivable;Leakage;Dunning;New;Cashflow;Transaction;Customers;Customer;Order;Tax".split(";");
    this.categoryVsMetric = {
        MRR: "New MRR by Acquisition Channel;New MRR by Sales Agent;Total MRR by Customer Type;Total MRR by Plan;New MRR by Plan;Free To Paid MRR by Plan;Reactivation MRR by Plan;Total MRR;Total MRR by Plan Group;New MRR by Plan Group;Total ARR;Net ARR Growth;Net MRR Growth by Customer Type;Downgrade MRR by Customer Type;Upgrade MRR by Customer Type;New MRR by Customer Type;New MRR by Business Type;Downgrade MRR by Business Type;Total MRR by Business Type;Quick Ratio;Net Dollar Expansion;CMRR;Paused Subscription MRR;Resumed Subscription MRR;Gross MRR Churn Rate by Country".split(";"),
        Churn: ["CB - Paid Subscription Churn", "Paid Subscription Churn Rate", "Total Subscription Churn Rate"],
        Acquisition: ["Signups by Day of the Week", "Expansion MRR by Sales Agent", "New MRR by Acquisition Mode"],
        Subscription: "Average Revenue per Paid Subscription by Acquisition Channel;Activations by Plan;Active Subscriptions by Plan;Paid Active Subscriptions by Plan;New Paid Subscriptions;New Paid Subscription by Customer Type;Lifetime Value of a Paid Subscription by Customer Type;Total Active Subscriptions by Customer Type;Average Revenue per Paid Subscription by Customer Type;Paid Subscription Lifetime by Business Type;Lifetime Value of a Paid Subscription by Business Type;Average Revenue per Churned Subscription;Average Revenue per New Subscription;Signup to Activation Cohort;Total Active Paid Subscriptions;Paid Subscription Lifetime;Paid Subscription Lifetime by Acquisition Channel;Average Revenue Per Paid Subscription by Country;Signups by Day of the Week;Total Subscription Quantity ;Subscription Breakdown;Lifetime Value of a Paid Subscription;Average Revenue Per Paid Subscription;Total Active Customers;Paid Subscription Churn by Plan;Total Subscription Churn by Plan;Total Active Subscriptions;CB - Total Subscription Churn;CB - Paid Subscription Churn;CB - Subscription Retention Cohort By Activation Date;Storehub - MRR Retention Cohort;Storehub - Subscription Retention Cohort By Activation Date;Signups - BMW Table;Total Reactive;Total Pause;Subscription moving to Trial;Total CAC by Initial Plan;Total CAC;Total CAC by Current Plan;New ARR by Sales Agent;Net ARR Growth by Sales Agent;New ARR;Total Active Paid Subscriptions - merchant".split(";"),
        Plan: ["New Billing by Plan"],
        Premium: "Plan Movement Report;Churn Breakdown Report By Activation Date;Churn Breakdown Report By Signup Date;Signups by Customer Type (to be deleted);Free to Paid Evolution Cohort;Net Dollar Expansion;Signup to Activation Lead Time;Plan Movement Report (Yearly);New Billing by Sales Agent;Overdue Invoice Recovery Breakdown;Revenue Leakage by Coupon Type;Revenue Leakage Summary - Coupons;Gross Cashflow by Gateway;Gross Cashflow by Payment Method;Refunds by Gateway;Refunds by Payment Method;Total CAC by Initial Plan;Total CAC;Total CAC by Current Plan".split(";"),
        Revenue: "Gross MRR Churn by Plan;RevenueStory Add-on Revenue;RevenueStory MRR;RevenueStory Premium Users Count;CB Cancellation MRR Rate;CB Paid Churn;CB Cancellation MRR;Net MRR Growth Table;Total Subscription Quantity by Plan ;Free to Paid Count;Launch to Paid conversion breakdown;Upgrade Count;Paused Subscription Count;Recurring Addon MRR;#test Summary of count;MRR Summary;Subscription Summary;Cancellation MRR by Cancellation Reason;Total MRR by Country;New MRR by Country;Net MRR Growth by Country;Net ARR Growth by Country;Paid Subscription Churn Rate by Country;Cancellation MRR by Country;CB - Net MRR Growth".split(";"),
        Billing: "Metered Charges;Add-on Revenue;Total Billing;Total Billing by Country;Total Billing by Plan;New Billing;New Billing by Sales Agent;New Billing by Country;New Billing by Plan;Net Billing;Total Non-Recurring Billing;Total Taxes;Addon Revenue Summary;CB - Net Cashflow;CB - Net Billing;CB - Active Subscriptions by Plan;CB - Unpaid Invoices;Account Receivables Aging - 30th Day;Recurring Addon Revenue Summary;Total Billing - Personio;Total Credit Notes - Personio;Total Billing - izettle".split(";"),
        Custom: ["Signups by Customer Type (to be deleted)", "Paid Subscription Lifetime by Acquisition Channel ", "Total CAC by Initial Plan", "Total CAC", "Total CAC by Current Plan"],
        Receivable: "Total Receivables - Current Due;Account Receivables Aging;Total Receivables - Overdue;Overdue Invoice Recovery Breakdown;Receivables Summary;Account Receivables Aging - more than 10 days".split(";"),
        Leakage: ["Total Credit Notes", "Revenue Leakage by Coupon Type", "Revenue Leakage Summary - Coupons", "Voided Invoice Amount",
            "Total Write Off"
        ],
        Dunning: ["Dunning Status Summary", "Total Amount Recovered", "Total Amount Recovered by Dunning Attempt"],
        New: ["Total Write Off", "Total Billing - Paid", "New Billing - Paid"],
        Cashflow: "Non-recurring cashflow;Recurring Cashflow;Gross Cashflow;Refunds;Gross Cashflow by Gateway;Gross Cashflow by Payment Method;Net Cashflow".split(";"),
        Transaction: "Number of Payment Transaction;Number of Refund Transaction;Number of Failed Payment Transaction;Number of Voided Payment Transaction;Number of Failed Payment Transaction by Gateway;Number of Failed Payment Transaction by Payment Method;Number of Failed Refund Transaction;Payment Transaction Summary;Refund Transaction Summary;Payments Error Summary;Refunds Error Summary;Cards about to Expire;Refunds by Gateway;Refunds by Payment Method;Cards Expired".split(";"),
        Customers: ["Total Customers"],
        Customer: ["Total MRR - Customer"],
        Order: "Orders Cancelled;Orders Returned;Orders Shipment Status;Orders Cancelled by Cancellation Reason;Average Order Value;Total Order Value;Orders Shipment Summary;Total Order Value by Country".split(";"),
        Tax: ["Tax Summary by Jurisdiction Type and Name", "Tax Summary by Tax Rate", "Tax Summary by Tax Name"]
    };
    this.metricVsCategory = {
        "New MRR": ["MRR"],
        "Expansion MRR": ["MRR"],
        "Net MRR Growth": ["MRR"],
        "Free to Paid MRR": ["MRR"],
        "Upgrade MRR": ["MRR"],
        "Reactivation MRR": ["MRR"],
        "Gross MRR Churn": ["MRR"],
        "Downgrade MRR": ["MRR"],
        "Cancellation MRR": ["MRR", "Churn"],
        "Total Subscription Churn": ["Churn"],
        "Paid Subscription Churn": ["Churn"],
        Signups: ["Acquisition"],
        Activations: ["Acquisition"],
        "MRR Retention Cohort": ["MRR", "Churn"],
        "Total Active Subscriptions": ["Subscription"],
        "Paid Subscription Lifetime": ["Subscription"],
        "Average Revenue Per Subscription (Overall)": ["Subscription"],
        "Average Revenue Per Paid Subscription": ["Subscription"],
        "Lifetime Value of a Paid Subscription": ["Subscription"],
        "Total Active Paid Subscriptions": ["Subscription"],
        "Total MRR": ["MRR"],
        "Plan Movement Report": ["Plan", "Premium"],
        "Churn Breakdown Report By Activation Date": ["Churn", "Premium"],
        "Churn Breakdown Report By Signup Date": ["Churn", "Acquisition", "Premium"],
        "Subscription Retention Cohort By Activation Date": ["Churn"],
        "Same Month Cancellations": ["Churn"],
        "Gross MRR Churn Rate": ["Churn"],
        "Net MRR Churn Rate": ["Churn"],
        "New MRR by Acquisition Channel": ["Acquisition", "MRR"],
        "Average Revenue per Paid Subscription by Acquisition Channel": ["Acquisition",
            "Subscription"
        ],
        "New MRR by Sales Agent": ["MRR", "Acquisition"],
        "Total MRR by Customer Type": ["MRR"],
        "Total MRR by Plan": ["MRR", "Plan"],
        "Net MRR Growth by Plan": ["Plan", "Revenue"],
        "Cancellation MRR by Plan": ["Churn", "Plan"],
        "New MRR by Plan": ["MRR", "Plan"],
        "Free To Paid MRR by Plan": ["MRR", "Plan"],
        "Reactivation MRR by Plan": ["MRR", "Plan"],
        "Activations by Plan": ["Subscription", "Plan"],
        "Active Subscriptions by Plan": ["Subscription", "Plan"],
        "Paid Active Subscriptions by Plan": ["Subscription", "Plan"],
        "Total MRR by Plan Group": ["MRR", "Plan"],
        "New MRR by Plan Group": ["MRR", "Plan"],
        "Paid Active Subscriptions by Plan Group": ["Plan"],
        "Total ARR": ["MRR"],
        "New Paid Subscriptions": ["Subscription"],
        "Net ARR Growth": ["MRR"],
        "Metered Charges": ["Billing"],
        "Signups by Customer Type (to be deleted)": ["Custom", "Premium"],
        "Paid Subscription Churn Rate": ["Churn"],
        "Cancellation MRR Rate": ["Churn"],
        "Total Scheduled Cancellations": ["Churn"],
        "Total Scheduled Cancellation MRR": ["Churn"],
        "Signups by Customer Type": ["Acquisition"],
        "New Paid Subscription by Customer Type": ["Subscription"],
        "Lifetime Value of a Paid Subscription by Customer Type": ["Subscription"],
        "Net MRR Growth by Customer Type": ["MRR"],
        "Downgrade MRR by Customer Type": ["MRR"],
        "Upgrade MRR by Customer Type": ["MRR"],
        "Total Active Subscriptions by Customer Type": ["Subscription"],
        "New MRR by Customer Type": ["MRR"],
        "Average Revenue per Paid Subscription by Customer Type": ["Subscription"],
        "Signups by Acquisition Channel": ["Acquisition"],
        "Activation by Acquisition Channel": ["Acquisition"],
        "New MRR by Business Type": ["MRR"],
        "Downgrade MRR by Business Type": ["MRR"],
        "Paid Subscription Churn by Business Type": ["Churn"],
        "Signups by Business Type": ["Acquisition"],
        "Paid Subscription Lifetime by Business Type": ["Subscription"],
        "Total MRR by Business Type": ["MRR"],
        "Lifetime Value of a Paid Subscription by Business Type": ["Subscription"],
        "Free to Paid Evolution Cohort": ["Revenue", "Premium"],
        "Add-on Revenue": ["Billing"],
        "Quick Ratio": ["MRR"],
        "Average Revenue per Churned Subscription": ["Subscription",
            "Churn"
        ],
        "Average Revenue per New Subscription": ["Subscription"],
        "Total Subscriptions in Trial": ["Acquisition"],
        "Net Dollar Expansion": ["MRR", "Premium"],
        "Signup to Activation Lead Time": ["Acquisition", "Premium"],
        "Signup to Activation Conversions Breakdown": ["Acquisition"],
        "Signup to Activation Cohort": ["Subscription"],
        "Gross MRR Churn by Plan": ["Plan", "Revenue", "Churn"],
        "Subscription Quantity by Plan/Add-on": ["Plan"],
        "Lifetime Value of a Paid Subscription by Plan": ["Plan"],
        "Paid Subscription Lifetime by Acquisition Channel ": ["Custom"],
        "Paid Subscription Lifetime by Acquisition Channel": ["Subscription", "Acquisition"],
        "Average Revenue Per Paid Subscription by Country": ["Subscription"],
        "Signups by Day of the Week": ["Subscription", "Acquisition"],
        "Total Subscription Quantity ": ["Subscription"],
        CMRR: ["MRR"],
        "Subscription Breakdown": ["Subscription"],
        "Plan Movement Report (Yearly)": ["Premium"],
        "Total Active Customers": ["Subscription"],
        "RevenueStory Add-on Revenue": ["Revenue"],
        "RevenueStory MRR": ["Revenue"],
        "RevenueStory Premium Users Count": ["Revenue"],
        "CB Cancellation MRR Rate": ["Revenue", "Churn"],
        "CB Paid Churn": ["Revenue", "Churn"],
        "CB Cancellation MRR": ["Revenue", "Churn"],
        "Net MRR Growth Table": ["Revenue"],
        "Total Subscription Quantity by Plan ": ["Revenue"],
        "Total Billing": ["Billing"],
        "Total Billing by Country": ["Billing"],
        "Total Billing by Plan": ["Billing", "Plan"],
        "New Billing": ["Billing"],
        "New Billing by Sales Agent": ["Billing", "Premium"],
        "New Billing by Country": ["Billing"],
        "New Billing by Plan": ["Billing", "Plan"],
        "Total Receivables - Current Due": ["Receivable"],
        "Account Receivables Aging": ["Receivable"],
        "Total Receivables - Overdue": ["Receivable"],
        "Overdue Invoice Recovery Breakdown": ["Receivable", "Premium"],
        "Total Credit Notes": ["Leakage"],
        "Net Billing": ["Billing"],
        "Revenue Leakage by Coupon Type": ["Leakage", "Premium"],
        "Revenue Leakage Summary - Coupons": ["Leakage", "Premium"],
        "Total Non-Recurring Billing": ["Billing"],
        "Total Taxes": ["Billing"],
        "Voided Invoice Amount": ["Leakage"],
        "Addon Revenue Summary": ["Billing"],
        "Total Subscription Churn Rate": ["Churn"],
        "Free to Paid Count": ["Revenue"],
        "Dunning Status Summary": ["Dunning"],
        "Launch to Paid conversion breakdown": ["Revenue"],
        "Upgrade Count": ["Revenue"],
        "Paid Subscription Churn by Plan": ["Subscription", "Churn"],
        "Total Subscription Churn by Plan": ["Subscription", "Churn"],
        "Paused Subscription MRR": ["MRR"],
        "Paused Subscription Count": ["Revenue"],
        "Recurring Addon MRR": ["Revenue"],
        "Total Write Off": ["Leakage", "New"],
        "Resumed Subscription MRR": ["MRR"],
        "#test Summary of count": ["Revenue"],
        "MRR Summary": ["Revenue"],
        "Subscription Summary": ["Revenue"],
        "Test MTD - Net MRR Churn Rate": ["Churn"],
        "Receivables Summary": ["Receivable"],
        "Cancellation MRR by Cancellation Reason": ["Revenue", "Churn"],
        "CB - Total Subscription Churn": ["Subscription", "Churn"],
        "CB - Paid Subscription Churn": ["Subscription", "Churn"],
        "Non-recurring cashflow": ["Cashflow"],
        "Recurring Cashflow": ["Cashflow"],
        "Gross Cashflow": ["Cashflow"],
        Refunds: ["Cashflow"],
        "Number of Payment Transaction": ["Transaction"],
        "Number of Refund Transaction": ["Transaction"],
        "Gross Cashflow by Gateway": ["Cashflow", "Premium"],
        "Gross Cashflow by Payment Method": ["Cashflow", "Premium"],
        "Number of Failed Payment Transaction": ["Transaction"],
        "Number of Voided Payment Transaction": ["Transaction"],
        "Number of Failed Payment Transaction by Gateway": ["Transaction"],
        "Number of Failed Payment Transaction by Payment Method": ["Transaction"],
        "Number of Failed Refund Transaction": ["Transaction"],
        "Payment Transaction Summary": ["Transaction"],
        "Refund Transaction Summary": ["Transaction"],
        "Total MRR by Country": ["Revenue"],
        "New MRR by Country": ["Revenue"],
        "Net MRR Growth by Country": ["Revenue"],
        "Net ARR Growth by Country": ["Revenue"],
        "Paid Subscription Churn Rate by Country": ["Revenue"],
        "Cancellation MRR by Country": ["Revenue"],
        "Expansion MRR by Sales Agent": ["Acquisition"],
        "CB - Net MRR Growth": ["Revenue"],
        "Total Billing - Paid": ["New"],
        "New Billing - Paid": ["New"],
        "CB - Subscription Retention Cohort By Activation Date": ["Subscription"],
        "Payments Error Summary": ["Transaction"],
        "Refunds Error Summary": ["Transaction"],
        "Cards about to Expire": ["Transaction"],
        "Refunds by Gateway": ["Transaction", "Premium"],
        "Refunds by Payment Method": ["Transaction", "Premium"],
        "Net Cashflow": ["Cashflow"],
        "Cards Expired": ["Transaction"],
        "Total Customers": ["Customers"],
        "Total MRR - Customer": ["Customer"],
        "Orders Cancelled": ["Order"],
        "Orders Returned": ["Order"],
        "Orders Shipment Status": ["Order"],
        "Orders Cancelled by Cancellation Reason": ["Order"],
        "Average Order Value": ["Order"],
        "Total Order Value": ["Order"],
        "Orders Shipment Summary": ["Order"],
        "Storehub - MRR Retention Cohort": ["Subscription"],
        "Storehub - Subscription Retention Cohort By Activation Date": ["Subscription"],
        "CB - Net Cashflow": ["Billing"],
        "CB - Net Billing": ["Billing"],
        "Total Order Value by Country": ["Order"],
        "CB - Active Subscriptions by Plan": ["Billing"],
        "CB - Unpaid Invoices": ["Billing"],
        "Account Receivables Aging - 30th Day": ["Billing"],
        "Signups - BMW Table": ["Subscription"],
        "Recurring Addon Revenue Summary": ["Billing"],
        "Total Reactive": ["Subscription"],
        "Total Pause": ["Subscription"],
        "Subscription moving to Trial": ["Subscription"],
        "Total CAC by Initial Plan": ["Subscription", "Custom", "Premium"],
        "Total CAC": ["Subscription", "Custom", "Premium"],
        "Total CAC by Current Plan": ["Subscription", "Custom", "Premium"],
        "Account Receivables Aging - more than 10 days": ["Receivable"],
        "Tax Summary by Jurisdiction Type and Name": ["Tax"],
        "Tax Summary by Tax Rate": ["Tax"],
        "Tax Summary by Tax Name": ["Tax"],
        "New ARR by Sales Agent": ["Subscription"],
        "Net ARR Growth by Sales Agent": ["Subscription"],
        "Gross MRR Churn Rate by Country": ["MRR"],
        "Total Amount Recovered": ["Dunning"],
        "Total Amount Recovered by Dunning Attempt": ["Dunning"],
        "New MRR by Acquisition Mode": ["Acquisition"],
        "Total Billing - Personio": ["Billing"],
        "Total Credit Notes - Personio": ["Billing"],
        "New ARR": ["Subscription"],
        "Total Active Paid Subscriptions - merchant": ["Subscription"],
        "Total Billing - izettle": ["Billing"]
    };
    this.CATEGORY = this.categoryList[0];
    this.initStandAlone = function() {
        this.IS_STAND_ALONE = !0;
        this.fetch()
    };
    this.fetch = function() {
        $freeze();
        this.initFetchData();
        $unFreeze()
    };
    this.initFetchData = function() {
        this.DATA ? this.load() : this.fetchMetricsManualMeta()
    };
    this.init = function(a) {
        this.DATA = a;
        this.EL = $id("RSReportHelpEl");
        this.FULL_EL = $id("RSReportHelpContainerEl");
        $cacheEls(this.FULL_EL, this.FULL_EL, "rs-view", !1);
        this.load()
    };
    this.load = function() {
        this.ANCHOR = {};
        this.CRITERIA = "";
        this.OPEN = {};
        window.isMergedRS && this.renderNav();
        this.render();
        this.IS_STAND_ALONE && RSUrl.getParamValue("q") && this.showHelp(null, RSUrl.getParamValue("q"))
    };
    this.renderNav = function() {
        for (var a =
                ArrayIterator(this.categoryList), c = document.createElement("div"); a.hasNext();) {
            var d = a.next(),
                b = c.cloneNode();
            b.classList.add("rs-reporthelp__nav-item");
            this.CATEGORY === d && b.classList.add("rs-reporthelp__nav-item--selected");
            b.html(d);
            b.setAttribute("rs-view", d);
            $attachEvent(b, "click", RSMetricsManualController.setActiveCategory);
            this.FULL_EL.navContent.appendChild(b)
        }
        $cacheEls(this.FULL_EL.navContent, this.FULL_EL.navContent, "rs-view", !1)
    };
    this.setActiveCategory = function(a) {
        e.FULL_EL.navContent[e.CATEGORY].classList.remove("rs-reporthelp__nav-item--selected");
        a.target.classList.add("rs-reporthelp__nav-item--selected");
        e.CATEGORY = a.target.getAttribute("rs-view");
        e.render()
    };
    this.getDocs = function() {
        var a = [],
            c = 0,
            d;
        for (d in this.DATA) {
            var b = this.DATA[d],
                f;
            if (f = this.CRITERIA) {
                f = b;
                var e = 1E5 * g(f.name) + 1E4 * g(f.oneliner) + 1E3 * g(f.desc) + 100 * g(f.calc) + 10 * g(f.indicator) + g(f.interpretation);
                f.PRIORITY = RSMetricsManualController.CRITERIA ? e : 0;
                f = !(0 < e)
            }
            f || !this.metricVsCategory[b.name] || this.CATEGORY !== this.categoryList[0] && !this.metricVsCategory[b.name].includes(this.CATEGORY) ||
                (!this.CRITERIA && (b.PRIORITY = c--), b.name = d, a.push(b))
        }
        return ArrayIterator(a.sort(l))
    };
    this.render = function() {
        $removeElsInPar(this.EL);
        for (var a = this.getDocs(); a.hasNext();) {
            var c = a.next(),
                d = c.name,
                b = RSNodes.getEl({
                    id: "RSReportHelpItemEl",
                    name: "METRICS_MANUAL_ITEM"
                });
            b.setAttribute("help", d);
            b.name.html(d);
            b.oneliner.html(c.oneliner);
            b.oneliner.setAttribute("text", c.oneliner);
            RSReadMore.init(b.oneliner, {
                size: 10,
                more: ""
            });
            $attachEvent(b, "click", this.more, null, this, [d]);
            $attachEvent(b.less, "click",
                this.less, null, this, [d]);
            b.descname.classList.toggle(_BLOCK_HIDDEN, !c.desc);
            b.desc.html(h(c.desc), !0);
            b.calcname.classList.toggle(_BLOCK_HIDDEN, !c.calc);
            b.calc.html(h(c.calc), !0);
            b.indicatorname.classList.toggle(_BLOCK_HIDDEN, !c.indicator);
            b.indicator.html(h(c.indicator), !0);
            b.interpretationname.classList.toggle(_BLOCK_HIDDEN, !c.indicator);
            b.interpretation.html(h(c.interpretation), !0);
            this.OPEN[d] && b.classList.add("rs-reporthelp__item--expanded");
            this.EL.appendChild(b);
            this.ANCHOR[d] = {
                EL: b
            }
        }
    };
    this.more =
        function(a, c) {
            this.OPEN[c] = !0;
            var d = this.ANCHOR[c].EL;
            d.classList.add("rs-reporthelp__item--expanded");
            $id("RSTabsContainer").scrollTop = d.offsetTop - 156;
            d.oneliner.html(d.oneliner.getAttribute("text"))
        };
    this.showHelp = function(a, c) {
        window.RSApp && RSApp.MODE !== RSApp.METRICS_MANUAL_MODE || (e.OPEN = {}, e.more(a, c), RSPopUp.hideAll())
    };
    this.less = function(a, c) {
        $stopEventBubble(a);
        var d = this.ANCHOR[c].EL;
        d.classList.remove("rs-reporthelp__item--expanded");
        RSReadMore.init(d.oneliner, {
            size: 10,
            more: ""
        })
    };
    this.filter =
        function(a, c) {
            $removeElsInPar(e.EL);
            e.CRITERIA = c.value || "";
            e.render()
        };
    this.filterValue = function(a, c) {};
    this.hasDoc = function(a) {
        return this.DATA && !!this.DATA[a]
    };
    this.getOneLiner = function(a) {
        return this.hasDoc(a) ? this.DATA[a].oneliner : ""
    };
    this.getDescription = function(a) {
        return this.hasDoc(a) ? this.DATA[a].desc : ""
    };
    this.discard = function() {
        RSApp.MODE = RSApp.PREV_MODE
    };
    var k = function() {
            var a = RSMetricsManualController.CRITERIA.split(" "),
                a = a.filter(function(a) {
                    return "" !== a
                }),
                a = a.join("|"),
                a = a.replace(/[-[\]{}()*+?.,\\^$]/g,
                    "\\$\x26");
            return new RegExp(a, "gi")
        },
        g = function(a) {
            return (a = a && a.match(k())) ? a.length : 0
        },
        l = function(a, c) {
            return c.PRIORITY - a.PRIORITY
        },
        h = function(a) {
            return RSMetricsManualController.CRITERIA ? a.replace(k(), m) : a
        },
        m = function(a) {
            return "\x3cb class\x3d'rs-mark--light'\x3e" + a + "\x3c/b\x3e"
        };
    this.fetchMetricsManualMeta = function() {
        RSEventEmitter.on("FETCH_METRICS_MANUAL_META_SUCCESS", function(a) {
            a = JSON.parse(a);
            RSMetricsManualController.init(a.DATA)
        });
        $request.send({
            URL: RSRoutes.get("COMMON"),
            DATA: "ACTION\x3dMETRICS_MANUAL\x26",
            EVENT: "FETCH_METRICS_MANUAL_META"
        })
    }
};
/*/javascript/lib_ui/javascripts/RSPopUp.js*/
var RSPopUp = new function() {
    var k = this,
        u = 0,
        l = 0,
        f = [];
    this.popUp = function(a) {
        if (a) {
            for (var d = ArrayIterator(f); d.hasNext();) {
                var e = d.next();
                if (e.options("NAME") === a) return e
            }
            return null
        }
        return f[f.length - 1]
    };
    this.popUpInFocus = function() {
        for (var a = f.length - 1; a--;) {
            var d = f[a];
            if (!d.isCleaning()) return d
        }
    };
    this.show = function() {
        var a = m.apply(RSPopUp, arguments);
        a.show();
        f.push({
            id: a.id,
            el: a.el,
            container: a.container,
            hide: a.hide,
            options: a.options,
            isDropDown: a.isDropDown,
            position: a.position,
            resize: a.resize,
            bringToFront: a.bringToFront,
            setClassList: a.setClassList,
            isCleaning: a.isCleaning
        });
        return this.popUp()
    };
    this.hideAll = function() {
        for (var a = ArrayIterator(f); a.hasNext();) a.next().hide()
    };
    this.hideAllDropDown = function() {
        for (var a = ArrayIterator(f); a.hasNext();) {
            var d = a.next();
            d.isDropDown && d.hide()
        }
    };
    this.pop = function(a) {
        for (var d = ArrayIterator(f); d.hasNext();)
            if (d.next().id === a) {
                f.splice(d.index(), 1);
                break
            }
    };
    this.action = function(a) {
        return this.show.call(this, Object.assign(a, {
            NODE: "ACTION"
        }))
    };
    this.alert = function(a) {
        return this.show.call(this,
            Object.assign(a, {
                NODE: "ALERT"
            }))
    };
    this.dropDown = function(a) {
        return this.show.call(this, Object.assign(a, {
            POPUP_TYPE: "DROPDOWN"
        }))
    };
    this.showMini = function(a) {
        if (!this.closeMini(a.NAME)) return this.show.call(this, Object.assign(a, {
            POSITION: "RIGHT",
            NO_MODAL: !0,
            POPUP_TYPE: "MINI"
        }))
    };
    this.closeMini = function(a) {
        var d = RSPopUp.popUp(a);
        return a && d ? (d.hide(), !0) : !1
    };
    this.docClickHide = function() {
        var a = this.popUp();
        a && a.options("ON_MODEL_CLICK_HIDE") && (a.hide(), this.moveModalBehind())
    };
    this.moveModalBehind = function() {
        var a =
            k.popUpInFocus();
        a && !a.options("NO_MODAL") && a.bringToFront()
    };
    this.stopEventBubble = function() {};
    $events.listen("ON_MODEL_CLICK_HIDE", function() {
        k.docClickHide.apply(k, arguments)
    });
    $events.listen("HIDE_ALL_POPUP", function() {
        k.hideAll()
    });
    var v = function(a) {
            switch (a) {
                case "ACTION":
                    return RSNodes.getEl(RSElConstants.POPUP_ACTION);
                case "ALERT":
                    return RSNodes.getEl(RSElConstants.POPUP_ALERT);
                default:
                    return RSNodes.getEl(RSElConstants.POPUP)
            }
        },
        m = function(a) {
            var d, e, b, f, h, k, p = function() {
                    c("CONTENT_HEIGHT") &&
                        b.classList.add("rs-block--heightauto")
                },
                g = function(n) {
                    if (!f) {
                        !m(n) && $stopEventBubble(n);
                        w(b.close, _USER_ACTION_CLICK, g);
                        c("ON_DOC_CLICK_HIDE") && $events.off("ON_DOC_CLICK_HIDE", g);
                        document.body.removeEventListener(_USER_ACTION_KEY_DOWN, q);
                        switch (c("HIDE_EFFECT")) {
                            case "STRETCH-RIGHT":
                                b.classList.remove("rs-animation--stretchright");
                                b.classList.add("rs-animation__hide--stretchright");
                                break;
                            case "STRETCH-LEFT":
                                b.classList.remove("rs-animation--stretchleft");
                                b.classList.add("rs-animation__hide--stretchleft");
                                break;
                            case "NONE":
                                break;
                            default:
                                b.classList.remove(h ? "rs-animation--dropdown" : "rs-animation--fadein"), b.classList.add(h ? "rs-animation--close" : "rs-animation--fadeout")
                        }
                        h && "DIV" === c("TARGET_EL").nodeName && c("TARGET_EL").classList.remove("rs-selectbox--expanded");
                        k && c("TARGET_EL").classList.remove("rs-tooltip--hide");
                        !h && RSPopUp.hideAllDropDown();
                        f = !0;
                        setTimeout(function() {
                            b.parentNode.removeChild(b);
                            RSPopUp.pop(d);
                            h || c("NO_MODAL") || (l = Math.max(l - 1, 0));
                            0 === l && hideModal();
                            c("ON_HIDE_CALL") && getGlobal(c("ON_HIDE_CALL"))(n,
                                b, e)
                        }, "NONE" === c("HIDE_EFFECT") ? 0 : 150)
                    }
                },
                m = function(b) {
                    return (b = $target(b)) && b.getAttribute("href") ? !0 : !(!b.parentNode || !b.parentNode.getAttribute("href"))
                },
                c = function() {
                    if (1 === arguments.length) return e[arguments[0]];
                    e[arguments[0]] = arguments[1]
                },
                r = function() {
                    var a = c("TARGET_EL");
                    if (a) {
                        var e;
                        0 < b.offsetHeight ? e = b.getBoundingClientRect() : (b.classList.add(_BLOCK_OFFSCREEN), document.body.appendChild(b), e = b.getBoundingClientRect(), document.body.removeChild(b), b.classList.remove(_BLOCK_OFFSCREEN));
                        var d =
                            a.getBoundingClientRect(),
                            f;
                        "RIGHT" === c("POSITION") ? f = d.right + ("" === b.style.marginLeft ? 0 : b.style.marginLeft) : "A_RIGHT" === c("POSITION") ? (document.body.appendChild(b), f = d.left + d.width - b.offsetWidth, b.remove()) : f = d.left - b.style.marginRight;
                        var g = d.top;
                        h && (g += a.getClientRects()[0].height);
                        f + e.width > window.innerWidth && (f -= d.left + e.width - window.innerWidth + 4);
                        d.bottom + e.height > window.innerHeight && (h && (g = d.top - (e.height + b.style.marginTop)), k && (g = d.top + a.offsetHeight - e.height + b.style.marginTop));
                        b.style.left =
                            $_toUnits(f);
                        b.style.top = $_toUnits(g)
                    }
                },
                w = function(b, a, c) {
                    b && b.removeEventListener(a, c)
                },
                q = function(a) {
                    RSPopUp.popUp().el === b && 27 === a.keyCode && ($stopEventBubble(a), g(a))
                },
                x = function() {
                    var a = $childElsWithAttr(b, "tabindex");
                    a.forEach(function(b, a) {
                        b.setAttribute("tabindex", a + 1)
                    });
                    var d = c("TAB_IDX") - 1 || 0;
                    a[d] && a[d].focus() || !a[d] && a[0] && a[0].focus()
                },
                y = function() {
                    switch (h ? "DROPDOWN" : c("NODE")) {
                        case "DROPDOWN":
                            return "rs-animation--dropdown";
                        default:
                            return "rs-animation--fadein"
                    }
                },
                t = function(a) {
                    b.classList.addAll(a ||
                        c("CLASSLIST") || [""])
                };
            e = a;
            b = c("NO_FRAME") ? c("EL") : v(c("NODE"));
            b.style.zIndex = getZIndex(!0);
            c("CSS") && b.classList.addAll(c("CSS"));
            switch (c("THEME")) {
                case "ERROR":
                    b.classList.add("rs-popup--error");
                    break;
                case "INFO":
                    b.classList.add("rs-popup--info")
            }
            switch (c("THEME_ICON")) {
                case "WARNING":
                    b.icon.classList.add("rs-picon--warning")
            }
            d = "RSPopUp-" + ++u;
            h = "DROPDOWN" === c("POPUP_TYPE");
            k = "MINI" === c("POPUP_TYPE");
            return {
                id: d,
                el: b,
                container: b.container,
                isDropDown: h,
                show: function() {
                    h && (b.classList.add("rs-popup--dropdown"),
                        b.classList.remove("rs-block--absolutecenter"), "DIV" === c("TARGET_EL").nodeName && c("TARGET_EL").classList.add("rs-selectbox--expanded"), b.header.classList.add(_BLOCK_HIDDEN));
                    k && (b.classList.add("rs-popup--mini"), b.classList.remove("rs-block--absolutecenter"), b.header.classList.add(_BLOCK_HIDDEN), c("TARGET_EL").classList.add("rs-tooltip--hide"));
                    c("NO_FRAME") ? b.classList.add("rs-block--absolutecenter") : (c("HEADER_HIDDEN") && b.header.classList.add(_BLOCK_HIDDEN), b.name.html(e.TITLE || window.RSApp && RSApp.NAME),
                        e.TITLE_TOOLTIP && b.name.setAttribute("tooltip", e.TITLE_TOOLTIP), e.HTML && b.container.html(e.HTML, e.HTML_NO_ENCODE) || e.EL && b.container.appendChild(e.EL), e.EL && $cacheEls(e.EL, e.EL));
                    var a = c("TARGET_EL");
                    c("DOC_HEIGHT") && (b.classList.add(_BLOCK_DOC_HEIGHT), b.container.classList.add(_BLOCK_FULL_HEIGHT));
                    c("CONTENT_WIDTH") ? b.classList.add(_BLOCK_RIGHT_AUTO, _BLOCK_WIDTH_AUTO, _BLOCK_LEFT_AUTO) : a && c("INHERIT_TARGET_WIDTH") && (b.style.width = $_toUnits(a.offsetWidth));
                    if (c("ANCHOR")) switch (c("ANCHOR")) {
                        case $constants.TOP:
                            b.style.top =
                                $_toUnits(0);
                            break;
                        case $constants.BOTTOM:
                        case $constants.RIGHT:
                        case $constants.LEFT:
                        case $constants.TOP_LEFT:
                            b.classList.add(_BLOCK_TOP_LEFT);
                            break;
                        case $constants.TOP_RIGHT:
                            b.classList.add(_BLOCK_TOP_RIGHT)
                    } else r();
                    if (c("ACTIONS") && (a = c("ACTIONS") || [], 0 !== a.length)) {
                        a = a[0];
                        b.action.classList.remove(_BLOCK_HIDDEN);
                        b.action.html(a.NAME);
                        var d = b.action;
                        d && d.addEventListener(_USER_ACTION_CLICK, a.ACTION)
                    }
                    c("CLASSLIST") && t();
                    (a = b.close) && a.addEventListener(_USER_ACTION_CLICK, g);
                    e.EL && e.EL.close && (a =
                        e.EL.close) && a.addEventListener(_USER_ACTION_CLICK, g);
                    c("PREVENT_CLOSE_ON_ESC") || (a = document.body) && a.addEventListener(_USER_ACTION_KEY_DOWN, q);
                    c("ON_DOC_CLICK_HIDE") && $events.listenOnce("ON_DOC_CLICK_HIDE", g);
                    "ALERT" === c("NODE") && (a = c("ALERT") || {}, a.OK.HTML && b.ok.html(a.OK.HTML), a.CANCEL.HTML && b.cancel.html(a.CANCEL.HTML), (d = b.ok) && d.addEventListener(_USER_ACTION_CLICK, a.OK.EVENT), (d = b.cancel) && d.addEventListener(_USER_ACTION_CLICK, a.CANCEL.EVENT));
                    $id("RSAppEl").appendChild(b);
                    switch (c("SHOW_EFFECT")) {
                        case "STRETCH-RIGHT":
                            b.classList.add("rs-animation--stretchright");
                            break;
                        case "STRETCH-LEFT":
                            b.classList.add("rs-animation--stretchleft");
                            break;
                        case "FADE-IN":
                            b.classList.add("rs-animation--fadein");
                            break;
                        case "SCALE-IN":
                            b.classList.add("rs-animation--scalein");
                            break;
                        case "NONE":
                            break;
                        default:
                            b.classList.add(y())
                    }
                    x();
                    !h && !c("NO_MODAL") && ++l && showModal();
                    p()
                },
                hide: g,
                options: c,
                position: function() {
                    b.classList.add(_NO_TRANSITION);
                    r()
                },
                resize: p,
                bringToFront: function() {
                    b.style.zIndex = getZIndex(!0)
                },
                setClassList: t,
                isCleaning: function() {
                    return f
                }
            }
        }
};

setTimeout(function(){
    RSHelpCenterController.changeAppMode('metricsmanual');
}, 500)