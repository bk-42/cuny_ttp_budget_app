function generatePieGraph(t, e) {! function() { var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = t }(); var o, i, n = e.hasOwnProperty("pie") ? e.pie : "normal",
        r = e.values,
        a = e.colors,
        l = !!e.hasOwnProperty("animation") && e.animation,
        s = e.hasOwnProperty("animationSpeed") ? e.animationSpeed : 20,
        f = !!e.hasOwnProperty("fillTextData") && e.fillTextData,
        h = e.hasOwnProperty("fillTextColor") ? e.fillTextColor : "#fff",
        P = e.hasOwnProperty("fillTextPosition") ? e.fillTextPosition : "horizontal",
        u = e.hasOwnProperty("fillTextAlign") ? e.fillTextAlign : 1.85,
        c = e.hasOwnProperty("doughnutHoleSize") ? e.doughnutHoleSize : null,
        d = e.hasOwnProperty("doughnutHoleColor") ? e.doughnutHoleColor : "#fff",
        m = e.hasOwnProperty("offset") ? e.offset : null,
        p = null,
        g = L(e, "strokeStartEndPoints") ? e.isStrokePie.strokeStartEndPoints : "No",
        v = !!L(e, "overlayStroke") && e.isStrokePie.overlayStroke,
        k = L(e, "overlayStrokeColor") ? e.isStrokePie.overlayStrokeColor : "#eee",
        M = !L(e, "strokeAnimation") || e.isStrokePie.strokeAnimation,
        S = L(e, "strokeAnimationSpeed") ? e.isStrokePie.strokeAnimationSpeed : 10,
        y = L(e, "stroke") ? e.isStrokePie.stroke : 20,
        w = L(e, "fontSize") ? e.isStrokePie.fontSize : "60px",
        I = L(e, "textAlignement") ? e.isStrokePie.textAlignement : "center",
        A = L(e, "fontFamily") ? e.isStrokePie.fontFamily : "Arial",
        T = L(e, "fontWeight") ? e.isStrokePie.fontWeight : "bold",
        x = document.getElementById(t),
        b = x.getContext("2d"),
        O = x.width / 2,
        C = x.height / 2,
        F = O,
        z = 0,
        q = [],
        H = (o = 0, r.map(t => { o += t }), o),
        E = 0,
        R = 0; if (r.length > 1)
        for (var W = 0; W < r.length; W++) { var Y = 0 == W ? 0 : E;
            E = r[W] * (100 / H) + Y, q.push([Math.round(Y), Math.round(E), a[W]]) }

    function j() { q.forEach(function(t, e) { var o = t[0] / 100 * Math.PI * 2,
                i = null != m ? (t[1] - m / 10) / 100 * Math.PI * 2 : t[1] / 100 * Math.PI * 2,
                n = ((o = "Top" == p ? o - Math.PI / 2 : o) + (i = "Top" == p ? i - Math.PI / 2 : i)) / 2;
            offsetX = 0 == m || null == m ? 0 : Math.cos(n) * m, offsetY = 0 == m || null == m ? 0 : Math.sin(n) * m, b.beginPath(), b.moveTo(O + offsetX, C + offsetY), b.arc(O + offsetX, C + offsetY, F, o, i), b.fillStyle = t[2], b.fill(), b.fillStyle = d, b.beginPath(), b.moveTo(O, C), b.arc(O, C, c / 100 * C, 0, 2 * Math.PI), b.closePath(), b.fill() }) }

    function X(t) { return t / 100 * (2 * Math.PI) }

    function B(t, e, o, i, n, r, a) { b.beginPath(), b.arc(t, e, o, i, n, !1), b.strokeStyle = r, b.lineWidth = a, b.stroke() }

    function D(t, e) { b.clearRect(0, 0, x.width, x.height), 1 == e && (b.beginPath(), b.arc(O, C, F - y, X(0) - Math.PI / 2, X(100) - Math.PI / 2), b.strokeStyle = k, b.lineWidth = y, b.stroke()), b.font = T + " " + w + " " + A, b.textAlign = I, b.textBaseline = "middle", "Yes" == g && B(O, C, F - y / 2, X(0) - Math.PI / 2, X(.1) - Math.PI / 2, a[0], y), B(O, C, F - y, X(0) - Math.PI / 2, X(t) - Math.PI / 2, a[0], y), "Yes" == g && B(O, C, F - y / 2, X(t - .1) - Math.PI / 2, X(t) - Math.PI / 2, a[0], y), b.fillText(t + "%", O, C) }

    function L(t, e) { if ("object" == typeof t && null !== t) { if (t.hasOwnProperty(e)) return !0; for (var o in t)
                if (t.hasOwnProperty(o) && L(t[o], e)) return !0 } return !1 }! function e() { 1 == r.length && "stroke" == n ? function() { var t = 0; if (1 == M && 0 == v) var e = setInterval(function() { D(++t, v), t >= r[0] && clearInterval(e) }, S);
            else if (1 == v) { if (0 == M && D(r[0], v), 1 == M) var e = setInterval(function() { D(++t, v), t >= r[0] && clearInterval(e) }, S) } else D(r[0], v) }() : 1 == l && "normal" == n ? (b.clearRect(0, 0, x.width, x.height), j(), o = z / 100 * Math.PI * 2, b.globalCompositeOperation = "destination-in", b.beginPath(), b.moveTo(O, C), b.arc(O, C, F, 0, o), b.fill(), b.globalCompositeOperation = "source-over", z++ < 100 && setTimeout(function() { requestAnimationFrame(e) }, s)) : (j(), b.beginPath(), b.arc(O, C, F + 5, 0, 2 * Math.PI, !1), b.lineWidth = 30, b.strokeStyle = d, b.stroke()); var o; if (101 == z) { if (1 == f && "inner" == P)
                for (var c = 0; c < r.length; c++) { i = r[c] / H * Math.PI * 2; var m = C / u,
                        g = "Top" == p ? O + m * Math.cos(R + i / 2 - Math.PI / 2) : O + m * Math.cos(R + i / 2),
                        k = "Top" == p ? C + m * Math.sin(R + i / 2 - Math.PI / 2) : C + m * Math.sin(R + i / 2),
                        y = r[c] * (100 / H);
                    b.fillStyle = h, b.font = "bold 16px Arial", b.textAlign = "center", b.fillText(y.toFixed(1) + "%", g, k), R += i }
            if (1 == f && "horizontal" == P) { for (var w = '<div class="pie-horizontal-list"><ul>', c = 0; c < r.length; c++) w += '<li><span style="background: ' + a[c] + '"></span> ' + r[c] * (100 / H) + " %<li>";
                w += "</ul></div>", x.insertAdjacentHTML("afterend", w) } if (1 == f && "vertical" == P) { for (var w = '<div class="pie-vertical-list-' + t + '"><ul>', c = 0; c < r.length; c++) w += '<li><span style="background: ' + a[c] + '"></span> ' + r[c] * (100 / H) + " %<li>";
                w += "</ul></div>", x.parentElement.insertAdjacentHTML("beforeend", w) } } }() }