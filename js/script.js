var HTMLheaderName = '<h2>%data%</h2>';
var HTMLabout = '<p class="f4-ns f5 fw3">%data%</<p>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkTitle = '<h3 class="black-80 mb1 mt4 fw6">%data%</h3>';
var HTMLworkEmployer = '<a class="no-underline red db f5 fw5 pt1" href="#">%data%';
var HTMLworkDates = '<span class="black-50"> - %data%</span> </a>';
var HTMLworkDescription = '<p class="ma0 pt2">%data%</p>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = "<a class='no-underline red f5 fw5 db mt0 pt0' href='#'>%data%";
var HTMLschoolDates = '<span class="black-50"> - %data%</span></a>';
var HTMLschoolDegree = '<p class="dib">%data%</p>';
var HTMLschoolMajor = '<p class="dib ml1"> - %data%</p>';
var HTMLskills = '<li class="list black-50 pv2">%data%</li>';
var HTMLtools = '<a class="w-50 mt3 dib"><img style="height: 40px;" src=#><h3 class="dib mt2 ml3 black-50 v-top">%data%</h3></a>';
var HTMLdevelopment = '<a class="w-50 mt3 dib"><img style="height: 40px;" src=#><h3 class="dib black-50r mt2 ml3 v-top">%data%</h3></a>';
var HTMLemail = '<a class="tl db mt2 fw5" href="mailto:jciclitira@gmail.com">%data%</a>';
var HTMLweb = '<a class="tl db mt3 fw5" href="jciclitra.com">%data%</a>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="no-underline red f5 fw5 db" href="#">%data%</a>';
var HTMLprojectDates = '<p>%data%</p>';
var HTMLprojectDemo = '<a target="blank" class=" f5 fw5 db no-underline mb3" href="#">Demo</a>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<div class="w-100 w-third-ns mb3 pa2 dib"><div><div><img src="%data%">'

! function(a, b) {
    function z(a) {
        var b = a.length,
            c = s.type(a);
        return !s.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a))) }

    function B(a) {
        var b = A[a] = {};
        return s.each(a.match(t) || [], function(a, c) { b[c] = !0 }), b }

    function G() { Object.defineProperty(this.cache = {}, 0, { get: function() {
                return {} } }), this.expando = s.expando + Math.random() }

    function H(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)
            if (e = "data-" + c.replace(F, "-$1").toLowerCase(), "string" == typeof(d = a.getAttribute(e))) {
                try { d = "true" === d || "false" !== d && ("null" === d ? null : +d + "" === d ? +d : E.test(d) ? JSON.parse(d) : d) } catch (a) {}
                C.set(a, c, d) } else d = b;
        return d }

    function R() {
        return !0 }

    function S() {
        return !1 }

    function T() {
        try {
            return g.activeElement } catch (a) {} }

    function ga(a, b) {
        return s.nodeName(a, "table") && s.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function ha(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }


    function ja(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && s.nodeName(a, c) ? s.merge([a], d) : d }
    var c, d, e = typeof b,
        g = (a.location, a.document),
        i = (g.documentElement, a.jQuery),
        j = a.$,
        k = {},
        l = [],
        m = "2.0.3",
        n = l.concat,
        o = l.push,
        p = l.indexOf,
        q = k.toString,
        r = m.trim,
        s = function(a, b) {
            return new s.fn.init(a, b, c) },
        t = /\S+/g,
        u = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^-ms-/,
        x = /-([\da-z])/gi,
        y = function() { g.removeEventListener("DOMContentLoaded", y, !1), a.removeEventListener("load", y, !1), s.ready() };
    s.fn = s.prototype = { jquery: m, constructor: s, init: function(a, c, d) {
                var e, f;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : u.exec(a)) || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                    if (e[1]) {
                        if (c = c instanceof s ? c[0] : c, s.merge(this, s.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : g, !0)), v.test(e[1]) && s.isPlainObject(c))
                            for (e in c) s.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                        return this }
                    return f = g.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = g, this.selector = a, this }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : s.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), s.makeArray(a, this)) }, selector: "", length: 0, get: function(a) {
                return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a] }, pushStack: function(a) {
                var b = s.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b }, ready: function(a) {
                return s.ready.promise().done(a), this }, push: o, sort: [].sort, splice: [].splice }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || s.isFunction(h) || (h = {}), j === i && (h = this, --i); i < j; i++)
                if (null != (a = arguments[i]))
                    for (c in a) d = h[c], e = a[c], h !== e && (k && e && (s.isPlainObject(e) || (f = s.isArray(e))) ? (f ? (f = !1, g = d && s.isArray(d) ? d : []) : g = d && s.isPlainObject(d) ? d : {}, h[c] = s.extend(k, g, e)) : e !== b && (h[c] = e));
            return h }, s.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), noConflict: function(b) {
                return a.$ === s && (a.$ = j), b && a.jQuery === s && (a.jQuery = i), s }, isReady: !1, readyWait: 1, holdReady: function(a) { a ? s.readyWait++ : s.ready(!0) }, ready: function(a) {
                (!0 === a ? --s.readyWait : s.isReady) || (s.isReady = !0, !0 !== a && --s.readyWait > 0 || (d.resolveWith(g, [s]), s.fn.trigger && s(g).trigger("ready").off("ready"))) }, isFunction: function(a) {
                return "function" === s.type(a) }, isArray: Array.isArray, isWindow: function(a) {
                return null != a && a === a.window }, isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a) }, type: function(a) {
                return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? k[q.call(a)] || "object" : typeof a }, isPlainObject: function(a) {
                if ("object" !== s.type(a) || a.nodeType || s.isWindow(a)) return !1;
                try {
                    if (a.constructor && !core_hasOwn.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (a) {
                    return !1 }
                return !0 }, camelCase: function(a) {
                return a.replace(w, "ms-").replace(x, fcamelCase) }, nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b, c) {
                var e = 0,
                    f = a.length,
                    g = z(a);
                if (c) {
                    if (g)
                        for (; e < f && !1 !== b.apply(a[e], c); e++);
                    else
                        for (e in a)
                            if (!1 === b.apply(a[e], c)) break } else if (g)
                    for (; e < f && !1 !== b.call(a[e], e, a[e]); e++);
                else
                    for (e in a)
                        if (!1 === b.call(a[e], e, a[e])) break; return a }, trim: function(a) {
                return null == a ? "" : r.call(a) }, makeArray: function(a, b) {
                var c = b || [];
                return null != a && (z(Object(a)) ? s.merge(c, "string" == typeof a ? [a] : a) : o.call(c, a)), c }, inArray: function(a, b, c) {
                return null == b ? -1 : p.call(b, a, c) }, merge: function(a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if ("number" == typeof d)
                    for (; f < d; f++) a[e++] = c[f];
                else
                    for (; c[f] !== b;) a[e++] = c[f++];
                return a.length = e, a }, grep: function(a, b, c) {
                var d, e = [],
                    f = 0,
                    g = a.length;
                for (c = !!c; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                return e }, map: function(a, b, c) {
                var d, e = 0,
                    f = a.length,
                    g = z(a),
                    h = [];
                if (g)
                    for (; e < f; e++) null != (d = b(a[e], e, c)) && (h[h.length] = d);
                else
                    for (e in a) null != (d = b(a[e], e, c)) && (h[h.length] = d);
                return n.apply([], h) }, guid: 1, proxy: function(a, c) {
                var d, e, f;
                return "string" == typeof c && (d = a[c], c = a, a = d), s.isFunction(a) ? (e = core_slice.call(arguments, 2), f = function() {
                    return a.apply(c || this, e.concat(core_slice.call(arguments))) }, f.guid = a.guid = a.guid || s.guid++, f) : b }, access: function(a, c, d, e, f, g, h) {
                var i = 0,
                    j = a.length,
                    k = null == d;
                if ("object" === s.type(d)) { f = !0;
                    for (i in d) s.access(a, c, i, d[i], !0, g, h) } else if (e !== b && (f = !0, s.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                        return k.call(s(a), c) })), c))
                    for (; i < j; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                return f ? a : k ? c.call(a) : j ? c(a[0], d) : g }, now: Date.now, swap: function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e } }), s.ready.promise = function(b) {
            return d || (d = s.Deferred(), "complete" === g.readyState ? setTimeout(s.ready) : (g.addEventListener("DOMContentLoaded", y, !1), a.addEventListener("load", y, !1))), d.promise(b) }, s.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { k["[object " + b + "]"] = b.toLowerCase() }), c = s(g),
        function(a, b) {
            function fa(a, b, c, e) {
                var f, g, h, i, j, k, n, q, r, s;
                if ((b ? b.ownerDocument || b : v) !== m && l(b), b = b || m, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (i = b.nodeType) && 9 !== i) return [];
                if (o && !e) {
                    if (f = _.exec(a))
                        if (h = f[1]) {
                            if (9 === i) {
                                if (!(g = b.getElementById(h)) || !g.parentNode) return c;
                                if (g.id === h) return c.push(g), c } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && t(b, g) && g.id === h) return c.push(g), c } else {
                            if (f[2]) return J.apply(c, b.getElementsByTagName(a)), c;
                            if ((h = f[3]) && d.getElementsByClassName && b.getElementsByClassName) return J.apply(c, b.getElementsByClassName(h)), c }
                    if (d.qsa && (!p || !p.test(a))) {
                        if (q = n = u, r = b, s = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                            for (k = pa(a), (n = b.getAttribute("id")) ? q = n.replace(ca, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = k.length; j--;) k[j] = q + qa(k[j]);
                            r = V.test(a) && b.parentNode || b, s = k.join(",") }
                        if (s) try {
                            return J.apply(c, r.querySelectorAll(s)), c } catch (a) {} finally { n || b.removeAttribute("id") } } }
                return ya(a.replace(S, "$1"), b, c, e) }

            function ga() {
                function b(c, d) {
                    return a.push(c += " ") > f.cacheLength && delete b[a.shift()], b[c] = d }
                var a = [];
                return b }

            function ha(a) {
                return a[u] = !0, a }

            function ia(a) {
                var b = m.createElement("div");
                try {
                    return !!a(b) } catch (a) {
                    return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

            function ja(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) f.attrHandle[c[d]] = b }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || E) - (~a.sourceIndex || E);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1 }

            function la(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a } }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a } }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function oa() {}

            function pa(a, b) {
                var c, d, e, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = f.preFilter; h;) { c && !(d = T.exec(h)) || (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = U.exec(h)) && (c = d.shift(), e.push({ value: c, type: d[0].replace(S, " ") }), h = h.slice(c.length));
                    for (g in f.filter) !(d = Z[g].exec(h)) || j[g] && !(d = j[g](d)) || (c = d.shift(), e.push({ value: c, type: g, matches: d }), h = h.slice(c.length));
                    if (!c) break }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) }

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d }

            function ra(a, b, c) {
                var d = b.dir,
                    f = c && "parentNode" === d,
                    g = x++;
                return b.first ? function(b, c, e) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || f) return a(b, c, e) } : function(b, c, h) {
                    var i, j, k, l = w + " " + g;
                    if (h) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || f) && a(b, c, h)) return !0 } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || f)
                                if (k = b[u] || (b[u] = {}), (j = k[d]) && j[0] === l) {
                                    if (!0 === (i = j[1]) || i === e) return !0 === i } else if (j = k[d] = [l], j[1] = a(b, c, h) || e, !0 === j[1]) return !0 } }

            function sa(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0 } : a[0] }

            function ta(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g }

            function ua(a, b, c, d, e, f) {
                return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || xa(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ta(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d)
                        for (j = ta(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    if (f) {
                        if (e || a) {
                            if (e) {
                                for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i) }
                            for (k = r.length; k--;)(l = r[k]) && (j = e ? L.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : J.apply(g, r) }) }

            function va(a) {
                for (var b, c, d, e = a.length, g = f.relative[a[0].type], h = g || f.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                        return a === b }, h, !0), l = ra(function(a) {
                        return L.call(b, a) > -1 }, h, !0), m = [function(a, c, d) {
                        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; i < e; i++)
                    if (c = f.relative[a[i].type]) m = [ra(sa(m), c)];
                    else {
                        if (c = f.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (d = ++i; d < e && !f.relative[a[d].type]; d++);
                            return ua(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(S, "$1"), c, i < d && va(a.slice(i, d)), d < e && va(a = a.slice(d)), d < e && qa(a)) }
                        m.push(c) }
                return sa(m) }

            function wa(a, b) {
                var c = 0,
                    d = b.length > 0,
                    g = a.length > 0,
                    h = function(h, i, k, l, n) {
                        var o, p, q, r = [],
                            s = 0,
                            t = "0",
                            u = h && [],
                            v = null != n,
                            x = j,
                            y = h || g && f.find.TAG("*", n && i.parentNode || i),
                            z = w += null == x ? 1 : Math.random() || .1;
                        for (v && (j = i !== m && i, e = c); null != (o = y[t]); t++) {
                            if (g && o) {
                                for (p = 0; q = a[p++];)
                                    if (q(o, i, k)) { l.push(o);
                                        break }
                                v && (w = z, e = ++c) }
                            d && ((o = !q && o) && s--, h && u.push(o)) }
                        if (s += t, d && t !== s) {
                            for (p = 0; q = b[p++];) q(u, r, i, k);
                            if (h) {
                                if (s > 0)
                                    for (; t--;) u[t] || r[t] || (r[t] = H.call(l));
                                r = ta(r) }
                            J.apply(l, r), v && !h && r.length > 0 && s + b.length > 1 && fa.uniqueSort(l) }
                        return v && (w = z, j = x), u };
                return d ? ha(h) : h }

            function xa(a, b, c) {
                for (var d = 0, e = b.length; d < e; d++) fa(a, b[d], c);
                return c }

            function ya(a, b, c, e) {
                var g, h, j, k, l, m = pa(a);
                if (!e && 1 === m.length) {
                    if (h = m[0] = m[0].slice(0), h.length > 2 && "ID" === (j = h[0]).type && d.getById && 9 === b.nodeType && o && f.relative[h[1].type]) {
                        if (!(b = (f.find.ID(j.matches[0].replace(da, ea), b) || [])[0])) return c;
                        a = a.slice(h.shift().value.length) }
                    for (g = Z.needsContext.test(a) ? 0 : h.length; g-- && (j = h[g], !f.relative[k = j.type]);)
                        if ((l = f.find[k]) && (e = l(j.matches[0].replace(da, ea), V.test(h[0].type) && b.parentNode || b))) {
                            if (h.splice(g, 1), !(a = e.length && qa(h))) return J.apply(c, e), c;
                            break } }
                return i(a, m)(e, b, !o, c, V.test(a)), c }
            var c, d, e, f, h, i, j, k, l, m, n, o, p, q, r, t, u = "sizzle" + -new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = !1,
                C = function(a, b) {
                    return a === b ? (B = !0, 0) : 0 },
                D = typeof b,
                E = 1 << 31,
                F = {}.hasOwnProperty,
                G = [],
                H = G.pop,
                I = G.push,
                J = G.push,
                K = G.slice,
                L = G.indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (this[b] === a) return b;
                    return -1 },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                N = "[\\x20\\t\\r\\n\\f]",
                O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                P = O.replace("w", "w#"),
                Q = "\\[" + N + "*(" + O + ")" + N + "*(?:([*^$|!~]?=)" + N + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + P + ")|)|)" + N + "*\\]",
                R = ":(" + O + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + Q.replace(3, 8) + ")*)|.*)\\)|)",
                S = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                T = new RegExp("^" + N + "*," + N + "*"),
                U = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                V = new RegExp(N + "*[+~]"),
                W = new RegExp("=" + N + "*([^\\]'\"]*)" + N + "*\\]", "g"),
                X = new RegExp(R),
                Z = (new RegExp("^" + P + "$"), { ID: new RegExp("^#(" + O + ")"), CLASS: new RegExp("^\\.(" + O + ")"), TAG: new RegExp("^(" + O.replace("w", "w*") + ")"), ATTR: new RegExp("^" + Q), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"), bool: new RegExp("^(?:" + M + ")$", "i"), needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i") }),
                $ = /^[^{]+\{\s*\[native \w/,
                _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ca = /'|\\/g,
                da = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
                ea = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) };
            try { J.apply(G = K.call(v.childNodes), v.childNodes), G[v.childNodes.length].nodeType } catch (a) { J = { apply: G.length ? function(a, b) { I.apply(a, K.call(b)) } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1 } } }
            h = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName }, d = fa.support = {}, l = fa.setDocument = function(a) {
                var b = a ? a.ownerDocument || a : v,
                    c = b.defaultView;
                return b !== m && 9 === b.nodeType && b.documentElement ? (m = b, n = b.documentElement, o = !h(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() { l() }), d.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className") }), d.getElementsByTagName = ia(function(a) {
                    return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length }), d.getElementsByClassName = ia(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), d.getById = ia(function(a) {
                    return n.appendChild(a).id = u, !b.getElementsByName || !b.getElementsByName(u).length }), d.getById ? (f.find.ID = function(a, b) {
                    if (typeof b.getElementById !== D && o) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : [] } }, f.filter.ID = function(a) {
                    var b = a.replace(da, ea);
                    return function(a) {
                        return a.getAttribute("id") === b } }) : (delete f.find.ID, f.filter.ID = function(a) {
                    var b = a.replace(da, ea);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== D && a.getAttributeNode("id");
                        return c && c.value === b } }), f.find.TAG = d.getElementsByTagName ? function(a, b) {
                    if (typeof b.getElementsByTagName !== D) return b.getElementsByTagName(a) } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d }
                    return f }, f.find.CLASS = d.getElementsByClassName && function(a, b) {
                    if (typeof b.getElementsByClassName !== D && o) return b.getElementsByClassName(a) }, q = [], p = [], (d.qsa = $.test(b.querySelectorAll)) && (ia(function(a) { a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || p.push("\\[" + N + "*(?:value|" + M + ")"), a.querySelectorAll(":checked").length || p.push(":checked") }), ia(function(a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && p.push("[*^$]=" + N + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || p.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), p.push(",.*:") })), (d.matchesSelector = $.test(r = n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && ia(function(a) { d.disconnectedMatch = r.call(a, "div"), r.call(a, "[s!='']:x"), q.push("!=", R) }), p = p.length && new RegExp(p.join("|")), q = q.length && new RegExp(q.join("|")), t = $.test(n.contains) || n.compareDocumentPosition ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1 }, C = n.compareDocumentPosition ? function(a, c) {
                    if (a === c) return B = !0, 0;
                    var e = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                    return e ? 1 & e || !d.sortDetached && c.compareDocumentPosition(a) === e ? a === b || t(v, a) ? -1 : c === b || t(v, c) ? 1 : k ? L.call(k, a) - L.call(k, c) : 0 : 4 & e ? -1 : 1 : a.compareDocumentPosition ? -1 : 1 } : function(a, c) {
                    var d, e = 0,
                        f = a.parentNode,
                        g = c.parentNode,
                        h = [a],
                        i = [c];
                    if (a === c) return B = !0, 0;
                    if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : k ? L.call(k, a) - L.call(k, c) : 0;
                    if (f === g) return ka(a, c);
                    for (d = a; d = d.parentNode;) h.unshift(d);
                    for (d = c; d = d.parentNode;) i.unshift(d);
                    for (; h[e] === i[e];) e++;
                    return e ? ka(h[e], i[e]) : h[e] === v ? -1 : i[e] === v ? 1 : 0 }, b) : m }, fa.matches = function(a, b) {
                return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== m && l(a), b = b.replace(W, "='$1']"), d.matchesSelector && o && (!q || !q.test(b)) && (!p || !p.test(b))) try {
                    var c = r.call(a, b);
                    if (c || d.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c } catch (a) {}
                return fa(b, m, null, [a]).length > 0 }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== m && l(a), t(a, b) }, fa.attr = function(a, c) {
                (a.ownerDocument || a) !== m && l(a);
                var e = f.attrHandle[c.toLowerCase()],
                    g = e && F.call(f.attrHandle, c.toLowerCase()) ? e(a, c, !o) : b;
                return g === b ? d.attributes || !o ? a.getAttribute(c) : (g = a.getAttributeNode(c)) && g.specified ? g.value : null : g }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) {
                var b, c = [],
                    e = 0,
                    f = 0;
                if (B = !d.detectDuplicates, k = !d.sortStable && a.slice(0), a.sort(C), B) {
                    for (; b = a[f++];) b === a[f] && (e = c.push(f));
                    for (; e--;) a.splice(c[e], 1) }
                return a }, f = fa.selectors = { cacheLength: 50, createPseudo: ha, match: Z, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) {
                        return a[1] = a[1].replace(da, ea), a[3] = (a[4] || a[5] || "").replace(da, ea), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) {
                        var c, d = !a[5] && a[2];
                        return Z.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && X.test(d) && (c = pa(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3)) } }, filter: { TAG: function(a) {
                        var b = a.replace(da, ea).toLowerCase();
                        return "*" === a ? function() {
                            return !0 } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + N + ")" + a + "(" + N + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== D && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, PSEUDO: function(a, b) {
                        var c, d = f.pseudos[a] || f.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return d[u] ? d(b) : d.length > 1 ? (c = [a, a, "", b], f.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            for (var e, f = d(a, b), g = f.length; g--;) e = L.call(a, f[g]), a[e] = !(c[e] = f[g]) }) : function(a) {
                            return d(a, 0, c) }) : d } }, pseudos: { last: na(function(a, b) {
                        return [b - 1] }) } }, f.pseudos.nth = f.pseudos.eq;
            for (c in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) f.pseudos[c] = la(c);
            for (c in { submit: !0, reset: !0 }) f.pseudos[c] = ma(c);
            oa.prototype = f.filters = f.pseudos, f.setFilters = new oa, i = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    for (b || (b = pa(a)), c = b.length; c--;) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, wa(e, d)) }
                return f }, d.sortStable = u.split("").sort(C).join("") === u, d.detectDuplicates = B, l(), d.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(m.createElement("div")) }), ia(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), d.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ia(function(a) {
                return null == a.getAttribute("disabled") }) || ja(M, function(a, b, c) {
                var d;
                if (!c) return (d = a.getAttributeNode(b)) && d.specified ? d.value : !0 === a[b] ? b.toLowerCase() : null }), s.find = fa, s.expr = fa.selectors, s.expr[":"] = s.expr.pseudos, s.unique = fa.uniqueSort, s.text = fa.getText, s.isXMLDoc = fa.isXML, s.contains = fa.contains }(a);
    var A = {};
    s.Callbacks = function(a) { a = "string" == typeof a ? A[a] || B(a) : s.extend({}, a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function(b) {
                for (c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0; i && h < g; h++)
                    if (!1 === i[h].apply(b[0], b[1]) && a.stopOnFalse) { c = !1;
                        break }
                e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable()) },
            l = { add: function() {
                    if (i) {
                        var b = i.length;! function b(c) { s.each(c, function(c, d) {
                                var e = s.type(d); "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d) }) }(arguments), e ? g = i.length : c && (f = b, k(c)) }
                    return this }, remove: function() {
                    return i && s.each(arguments, function(a, b) {
                        for (var c;
                            (c = s.inArray(b, i, c)) > -1;) i.splice(c, 1), e && (c <= g && g--, c <= h && h--) }), this }, has: function(a) {
                    return a ? s.inArray(a, i) > -1 : !(!i || !i.length) }, empty: function() {
                    return i = [], g = 0, this }, disable: function() {
                    return i = j = c = b, this }, disabled: function() {
                    return !i }, lock: function() {
                    return j = b, c || l.disable(), this }, locked: function() {
                    return !j }, fireWith: function(a, b) {
                    return !i || d && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], e ? j.push(b) : k(b)), this }, fire: function() {
                    return l.fireWith(this, arguments), this }, fired: function() {
                    return !!d } };
        return l }, s.extend({ Deferred: function(a) {
            var b = [
                    ["resolve", "done", s.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", s.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", s.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() {
                        return c }, always: function() {
                        return e.done(arguments).fail(arguments), this }, then: function() {
                        var a = arguments;
                        return s.Deferred(function(c) { s.each(b, function(b, f) {
                                var g = f[0],
                                    h = s.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && s.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) {
                        return null != a ? s.extend(a, d) : d } },
                e = {};
            return d.pipe = d.then, s.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) {
            var h, i, j, b = 0,
                c = core_slice.call(arguments),
                d = c.length,
                e = 1 !== d || a && s.isFunction(a.promise) ? d : 0,
                f = 1 === e ? a : s.Deferred(),
                g = function(a, b, c) {
                    return function(d) { b[a] = this, c[a] = arguments.length > 1 ? core_slice.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c) } };
            if (d > 1)
                for (h = new Array(d), i = new Array(d), j = new Array(d); b < d; b++) c[b] && s.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
            return e || f.resolveWith(j, c), f.promise() } }), s.support = function(b) {
        var c = g.createElement("input"),
            d = g.createDocumentFragment(),
            e = g.createElement("div"),
            f = g.createElement("select"),
            h = f.appendChild(g.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = h.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled, c = g.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, s(function() {
            var c, d, h = g.getElementsByTagName("body")[0];
            h && (c = g.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", h.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", s.swap(h, null != h.style.zoom ? { zoom: 1 } : {}, function() { b.boxSizing = 4 === e.offsetWidth }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || { width: "4px" }).width, d = e.appendChild(g.createElement("div")), d.style.cssText = e.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), h.removeChild(c)) }), b) : b }({});
    var C, D, E = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        F = /([A-Z])/g;
    G.uid = 1, G.accepts = function(a) {
        return !a.nodeType || (1 === a.nodeType || 9 === a.nodeType) }, G.prototype = { key: function(a) {
            if (!G.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) { c = G.uid++;
                try { b[this.expando] = { value: c }, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, s.extend(a, b) } }
            return this.cache[c] || (this.cache[c] = {}), c }, set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (s.isEmptyObject(f)) s.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f }, get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c] }, access: function(a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, s.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c) }, remove: function(a, c) {
            var d, e, f, g = this.key(a),
                h = this.cache[g];
            if (c === b) this.cache[g] = {};
            else { s.isArray(c) ? e = c.concat(c.map(s.camelCase)) : (f = s.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(t) || [])), d = e.length;
                for (; d--;) delete h[e[d]] } }, hasData: function(a) {
            return !s.isEmptyObject(this.cache[a[this.expando]] || {}) }, discard: function(a) { a[this.expando] && delete this.cache[a[this.expando]] } }, C = new G, D = new G, s.extend({ acceptData: G.accepts, hasData: function(a) {
            return C.hasData(a) || D.hasData(a) }, data: function(a, b, c) {
            return C.access(a, b, c) }, removeData: function(a, b) { C.remove(a, b) }, _data: function(a, b, c) {
            return D.access(a, b, c) }, _removeData: function(a, b) { D.remove(a, b) } }), s.fn.extend({ data: function(a, c) {
            var d, e, f = this[0],
                g = 0,
                h = null;
            if (a === b) {
                if (this.length && (h = C.get(f), 1 === f.nodeType && !D.get(f, "hasDataAttrs"))) {
                    for (d = f.attributes; g < d.length; g++) e = d[g].name, 0 === e.indexOf("data-") && (e = s.camelCase(e.slice(5)), H(f, e, h[e]));
                    D.set(f, "hasDataAttrs", !0) }
                return h }
            return "object" == typeof a ? this.each(function() { C.set(this, a) }) : s.access(this, function(c) {
                var d, e = s.camelCase(a);
                if (f && c === b) {
                    if ((d = C.get(f, a)) !== b) return d;
                    if ((d = C.get(f, e)) !== b) return d;
                    if ((d = H(f, e, b)) !== b) return d } else this.each(function() {
                    var d = C.get(this, e);
                    C.set(this, e, c), -1 !== a.indexOf("-") && d !== b && C.set(this, a, c) }) }, null, c, arguments.length > 1, null, !0) }, removeData: function(a) {
            return this.each(function() { C.remove(this, a) }) } }), s.extend({ queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = D.get(a, b), c && (!d || s.isArray(c) ? d = D.access(a, b, s.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx";
            var c = s.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = s._queueHooks(a, b),
                g = function() { s.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return D.get(a, c) || D.access(a, c, { empty: s.Callbacks("once memory").add(function() { D.remove(a, [b + "queue", c]) }) }) } }), s.fn.extend({ queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? s.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = s.queue(this, a, c);
                s._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && s.dequeue(this, a) }) }, dequeue: function(a) {
            return this.each(function() { s.dequeue(this, a) }) }, delay: function(a, b) {
            return a = s.fx ? s.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) } }) }, clearQueue: function(a) {
            return this.queue(a || "fx", []) }, promise: function(a, c) {
            var d, e = 1,
                f = s.Deferred(),
                g = this,
                h = this.length,
                i = function() {--e || f.resolveWith(g, [g]) };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)(d = D.get(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c) } });
    var I, J, K = /[\t\r\n\f]/g,
        L = /\r/g,
        M = /^(?:input|select|textarea|button)$/i;
    s.fn.extend({ attr: function(a, b) {
            return s.access(this, s.attr, a, b, arguments.length > 1) }, removeAttr: function(a) {
            return this.each(function() { s.removeAttr(this, a) }) }, prop: function(a, b) {
            return s.access(this, s.prop, a, b, arguments.length > 1) }, removeProp: function(a) {
            return this.each(function() { delete this[s.propFix[a] || a] }) }, addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (s.isFunction(a)) return this.each(function(b) { s(this).addClass(a.call(this, b, this.className)) });
            if (i)
                for (b = (a || "").match(t) || []; g < h; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(K, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = s.trim(d) }
            return this }, removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (s.isFunction(a)) return this.each(function(b) { s(this).removeClass(a.call(this, b, this.className)) });
            if (i)
                for (b = (a || "").match(t) || []; g < h; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(K, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? s.trim(d) : "" }
            return this }, toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : s.isFunction(a) ? this.each(function(c) { s(this).toggleClass(a.call(this, c, this.className, b), b) }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, f = s(this), g = a.match(t) || []; b = g[d++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
                else c !== e && "boolean" !== c || (this.className && D.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : D.get(this, "__className__") || "") }) }, hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(K, " ").indexOf(b) >= 0) return !0;
            return !1 }, val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = s.isFunction(a), this.each(function(d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, s(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : s.isArray(f) && (f = s.map(f, function(a) {
                        return null == a ? "" : a + "" })), (c = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()]) && "set" in c && c.set(this, f, "value") !== b || (this.value = f)) });
                if (f) return (c = s.valHooks[f.type] || s.valHooks[f.nodeName.toLowerCase()]) && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(L, "") : null == d ? "" : d) } } }), s.extend({ valHooks: { option: { get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text } }, select: { get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (s.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !s.nodeName(c.parentNode, "optgroup"))) {
                            if (b = s(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) {
                    for (var c, d, e = a.options, f = s.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = s.inArray(s(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f } } }, attr: function(a, c, d) {
            var f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return typeof a.getAttribute === e ? s.prop(a, c, d) : (1 === h && s.isXMLDoc(a) || (c = c.toLowerCase(), f = s.attrHooks[c] || (s.expr.match.bool.test(c) ? J : I)), d === b ? f && "get" in f && null !== (g = f.get(a, c)) ? g : (g = s.find.attr(a, c), null == g ? b : g) : null !== d ? f && "set" in f && (g = f.set(a, d, c)) !== b ? g : (a.setAttribute(c, d + ""), d) : void s.removeAttr(a, c)) }, removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(t);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = s.propFix[c] || c, s.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) }, attrHooks: { type: { set: function(a, b) {
                    if (!s.support.radioValue && "radio" === b && s.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b } } } }, propFix: { for: "htmlFor", class: "className" }, prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !s.isXMLDoc(a), g && (c = s.propFix[c] || c, f = s.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c] }, propHooks: { tabIndex: { get: function(a) {
                    return a.hasAttribute("tabindex") || M.test(a.nodeName) || a.href ? a.tabIndex : -1 } } } }), J = { set: function(a, b, c) {
            return !1 === b ? s.removeAttr(a, c) : a.setAttribute(c, c), c } }, s.each(s.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = s.expr.attrHandle[c] || s.find.attr;
        s.expr.attrHandle[c] = function(a, c, e) {
            var f = s.expr.attrHandle[c],
                g = e ? b : (s.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return s.expr.attrHandle[c] = f, g } }), s.support.optSelected || (s.propHooks.selected = { get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null } }), s.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { s.propFix[this.toLowerCase()] = this }), s.each(["radio", "checkbox"], function() { s.valHooks[this] = { set: function(a, b) {
                if (s.isArray(b)) return a.checked = s.inArray(s(a).val(), b) >= 0 } }, s.support.checkOn || (s.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value }) });
    var N = /^key/,
        O = /^(?:mouse|contextmenu)|click/,
        Q = /^([^.]*)(?:\.(.+)|)$/;
    s.event = { global: {}, add: function(a, c, d, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, u = D.get(a);
            if (u) {
                for (d.handler && (h = d, d = h.handler, g = h.selector), d.guid || (d.guid = s.guid++), (k = u.events) || (k = u.events = {}), (i = u.handle) || (i = u.handle = function(a) {
                        return typeof s === e || a && s.event.triggered === a.type ? b : s.event.dispatch.apply(i.elem, arguments) }, i.elem = a), c = (c || "").match(t) || [""], l = c.length; l--;) j = Q.exec(c[l]) || [], p = r = j[1], q = (j[2] || "").split(".").sort(), p && (n = s.event.special[p] || {}, p = (g ? n.delegateType : n.bindType) || p, n = s.event.special[p] || {}, m = s.extend({ type: p, origType: r, data: f, handler: d, guid: d.guid, selector: g, needsContext: g && s.expr.match.needsContext.test(g), namespace: q.join(".") }, h), (o = k[p]) || (o = k[p] = [], o.delegateCount = 0, n.setup && !1 !== n.setup.call(a, f, q, i) || a.addEventListener && a.addEventListener(p, i, !1)), n.add && (n.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), g ? o.splice(o.delegateCount++, 0, m) : o.push(m), s.event.global[p] = !0);
                a = null } }, remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = D.hasData(a) && D.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(t) || [""], j = b.length; j--;)
                    if (h = Q.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = s.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || s.removeEvent(a, n, q.handle), delete i[n]) } else
                        for (n in i) s.event.remove(a, n + b[j], c, d, !0);
                s.isEmptyObject(i) && (delete q.handle, D.remove(a, "events")) } }, fix: function(a) {
            if (a[s.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                h = this.fixHooks[e];
            for (h || (this.fixHooks[e] = h = O.test(e) ? this.mouseHooks : N.test(e) ? this.keyHooks : {}), d = h.props ? this.props.concat(h.props) : this.props, a = new s.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = g), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, f) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() {
                    if ("checkbox" === this.type && this.click && s.nodeName(this, "input")) return this.click(), !1 }, _default: function(a) {
                    return s.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { a.result !== b && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c, d) {
            var e = s.extend(new s.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? s.event.trigger(e, null, b) : s.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, s.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, s.Event = function(a, b) {
        if (!(this instanceof s.Event)) return new s.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? R : S) : this.type = a, b && s.extend(this, b), this.timeStamp = a && a.timeStamp || s.now(), this[s.expando] = !0 }, s.Event.prototype = { isDefaultPrevented: S, isPropagationStopped: S, isImmediatePropagationStopped: S, preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = R, a && a.preventDefault && a.preventDefault() }, stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = R, a && a.stopPropagation && a.stopPropagation() }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = R, this.stopPropagation() } }, s.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) { s.event.special[a] = { delegateType: b, bindType: b, handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || s.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), s.support.focusinBubbles || s.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = 0,
            d = function(a) { s.event.simulate(b, a.target, s.event.fix(a), !0) };
        s.event.special[b] = { setup: function() { 0 == c++ && g.addEventListener(a, d, !0) }, teardown: function() { 0 == --c && g.removeEventListener(a, d, !0) } } }), s.fn.extend({ on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) { "string" != typeof c && (d = d || c, c = b);
                for (h in a) this.on(h, c, d, a[h], f);
                return this }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), !1 === e) e = S;
            else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return s().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = s.guid++)), this.each(function() { s.event.add(this, a, e, d, c) }) }, one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1) }, off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, s(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this }
            return !1 !== c && "function" != typeof c || (d = c, c = b), !1 === d && (d = S), this.each(function() { s.event.remove(this, a, d, c) }) }, trigger: function(a, b) {
            return this.each(function() { s.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return s.event.trigger(a, b, c, !0) } });
    var W = s.expr.match.needsContext;
    s.fn.extend({ find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(s(a).filter(function() {
                for (b = 0; b < e; b++)
                    if (s.contains(d[b], this)) return !0 }));
            for (b = 0; b < e; b++) s.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? s.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, has: function(a) {
            var b = s(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (s.contains(this, b[a])) return !0 }) }, not: function(a) {
            return this.pushStack(winnow(this, a || [], !0)) }, filter: function(a) {
            return this.pushStack(winnow(this, a || [], !1)) }, is: function(a) {
            return !!winnow(this, "string" == typeof a && W.test(a) ? s(a) : a || [], !1).length }, closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = W.test(a) || "string" != typeof a ? s(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && s.find.matchesSelector(c, a))) { c = f.push(c);
                        break }
            return this.pushStack(f.length > 1 ? s.unique(f) : f) }, index: function(a) {
            return a ? "string" == typeof a ? p.call(s(a), this[0]) : p.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) {
            var c = "string" == typeof a ? s(a, b) : s.makeArray(a && a.nodeType ? [a] : a),
                d = s.merge(this.get(), c);
            return this.pushStack(s.unique(d)) }, addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });
    var Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Z = /<([\w:]+)/,
        $ = /<|&#?\w+;/,
        ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ca = /^$|\/(?:java|ecma)script/i,
        ea = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        fa = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    fa.optgroup = fa.option, fa.tbody = fa.tfoot = fa.colgroup = fa.caption = fa.thead, fa.th = fa.td, s.fn.extend({ text: function(a) {
            return s.access(this, function(a) {
                return a === b ? s.text(this) : this.empty().append((this[0] && this[0].ownerDocument || g).createTextNode(a)) }, null, a, arguments.length) }, append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { ga(this, a).appendChild(a) } }) }, prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ga(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, domManip: function(a, b, c) { a = n.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                m = k - 1,
                o = a[0],
                p = s.isFunction(o);
            if (p || !(k <= 1 || "string" != typeof o || s.support.checkClone) && ba.test(o)) return this.each(function(d) {
                var e = l.eq(d);
                p && (a[0] = o.call(this, d, e.html())), e.domManip(a, b, c) });
            if (k && (d = s.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = s.map(ja(d, "script"), ha), g = f.length; j < k; j++) h = d, j !== m && (h = s.clone(h, !0, !0), g && s.merge(f, ja(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, s.map(f, restoreScript), j = 0; j < g; j++) h = f[j], ca.test(h.type || "") && !D.access(h, "globalEval") && s.contains(i, h) && (h.src ? s._evalUrl(h.src) : s.globalEval(h.textContent.replace(ea, ""))) }
            return this } }), s.extend({ clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = s.contains(a.ownerDocument, a);
            if (!(s.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || s.isXMLDoc(a)))
                for (g = ja(h), f = ja(a), d = 0, e = f.length; d < e; d++) fixInput(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ja(a), g = g || ja(h), d = 0, e = f.length; d < e; d++) ia(f[d], g[d]);
                else ia(a, h);
            return g = ja(h, "script"), g.length > 0 && setGlobalEval(g, !i && ja(a, "script")), h }, buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; k < l; k++)
                if ((e = a[k]) || 0 === e)
                    if ("object" === s.type(e)) s.merge(n, e.nodeType ? [e] : e);
                    else if ($.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Z.exec(e) || ["", ""])[1].toLowerCase(), h = fa[g] || fa._default, f.innerHTML = h[1] + e.replace(Y, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                s.merge(n, f.childNodes), f = m.firstChild, f.textContent = "" } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++];)
                if ((!d || -1 === s.inArray(e, d)) && (i = s.contains(e.ownerDocument, e), f = ja(m.appendChild(e), "script"), i && setGlobalEval(f), c))
                    for (j = 0; e = f[j++];) ca.test(e.type || "") && c.push(e);
            return m }, _evalUrl: function(a) {
            return s.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) } }), s.fn.size = function() {
        return this.length }, s.fn.andSelf = s.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = s : "function" == typeof define && define.amd && define("jquery", [], function() {
        return s }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = s) }(window);
