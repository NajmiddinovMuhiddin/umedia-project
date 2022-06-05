!function () {
    function n(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 350;
        e.classList.contains("_slide") || (e.classList.add("_slide"), e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout(function () {
            e.hidden = !0, e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide")
        }, t))
    }

    function r(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 350;
        e.classList.contains("_slide") || (e.classList.add("_slide"), e.style.transitionProperty = "width, margin, padding", e.style.transitionDuration = t + "ms", e.style.width = e.offsetWidth + "px", e.offsetWidth, e.style.overflow = "hidden", e.style.width = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout(function () {
            e.hidden = !0, e.style.removeProperty("width"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide")
        }, t))
    }

    function s(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 350;
        (e.hidden ? function (e) {
            var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 350;
            e.classList.contains("_slide") || (e.classList.add("_slide"), e.hidden && (e.hidden = !1), t = e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = r + "ms", e.style.height = t + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout(function () {
                e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide")
            }, r))
        } : n)(e, t)
    }

    document.querySelectorAll("._iselect_").forEach(function (e) {
        for (var r = e.querySelector("._iselect_title_"), o = e.querySelector("._iselect_items_"), e = e.querySelectorAll("._iselect_item_"), i = (n(o), r.addEventListener("click", function () {
            s(o)
        }), Array.from(e)), t = 0; t < i.length; t++) !function (e) {
            var t = i[e];
            t.addEventListener("click", function () {
                i.push(r);
                var e = [i[i.length - 1].innerHTML, t.innerHTML];
                t.innerHTML = e[0], i[i.length - 1].innerHTML = e[1], n(o)
            })
        }(t);
        document.addEventListener("mousedown", function (e) {
            null === e.target.closest("._iselect_") && n(o)
        })
    });
    var e = document.querySelector(".icon-menu"), t = document.querySelector(".menu__body"),
        o = document.querySelector(".header"), i = document.querySelector(".overlay");

    function l(e) {
        this.type = e
    }

    window.matchMedia("(min-width: 1200px)").addEventListener("change", function () {
        i.classList.remove("--show")
    }), e.addEventListener("click", function () {
        e.classList.toggle("menu-open"), e.classList.add("no-touch"), setTimeout(function () {
            e.classList.remove("no-touch")
        }, 1e3), t.classList.contains("menu-open") ? t.classList.toggle("menu-open") : setTimeout(function () {
            t.classList.toggle("menu-open")
        }, 1e3), o.classList.contains("--anim-line") ? setTimeout(function () {
            o.classList.toggle("--anim-line")
        }, 1e3) : o.classList.toggle("--anim-line"), i.classList.toggle("--show"), document.querySelector("body").classList.toggle("lock")
    }), l.prototype.init = function () {
        var i = this, n = this;
        this.оbjects = [], this.daClassname = "_dynamic_adapt_", this.nodes = document.querySelectorAll("[data-da]");
        for (var e = 0; e < this.nodes.length; e++) {
            var t = this.nodes[e], r = t.dataset.da.trim().split(","), o = {};
            o.element = t, o.parent = t.parentNode, o.destination = document.querySelector(r[0].trim()), o.breakpoint = r[1] ? r[1].trim() : "480", o.place = r[2] ? r[2].trim() : "last", o.index = this.indexInParent(o.parent, o.element), this.оbjects.push(o)
        }
        this.arraySort(this.оbjects), this.mediaQueries = Array.prototype.map.call(this.оbjects, function (e) {
            return "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
        }, this), this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (e, t, r) {
            return Array.prototype.indexOf.call(r, e) === t
        });
        for (var s = 0; s < this.mediaQueries.length; s++) !function (e) {
            var e = i.mediaQueries[e], e = String.prototype.split.call(e, ","), t = window.matchMedia(e[0]), r = e[1],
                o = Array.prototype.filter.call(i.оbjects, function (e) {
                    return e.breakpoint === r
                });
            t.addListener(function () {
                n.mediaHandler(t, o)
            }), i.mediaHandler(t, o)
        }(s)
    }, l.prototype.mediaHandler = function (e, t) {
        if (e.matches) for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.index = this.indexInParent(o.parent, o.element), this.moveTo(o.place, o.element, o.destination)
        } else for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.element.classList.contains(this.daClassname) && this.moveBack(n.parent, n.element, n.index)
        }
    }, l.prototype.moveTo = function (e, t, r) {
        t.classList.add(this.daClassname), "last" === e || e >= r.children.length ? r.insertAdjacentElement("beforeend", t) : "first" === e ? r.insertAdjacentElement("afterbegin", t) : r.children[e].insertAdjacentElement("beforebegin", t)
    }, l.prototype.moveBack = function (e, t, r) {
        t.classList.remove(this.daClassname), void 0 !== e.children[r] ? e.children[r].insertAdjacentElement("beforebegin", t) : e.insertAdjacentElement("beforeend", t)
    }, l.prototype.indexInParent = function (e, t) {
        e = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(e, t)
    }, l.prototype.arraySort = function (e) {
        "min" === this.type ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? -1 : "last" === e.place || "first" === t.place ? 1 : e.place - t.place : e.breakpoint - t.breakpoint
        }) : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? 1 : "last" === e.place || "first" === t.place ? -1 : t.place - e.place : t.breakpoint - e.breakpoint
        })
    };
    new l("max").init();
    // console.log(1)
    // window.onload = () => {
    //     for (var a = document.querySelectorAll(".ibg"), c = 0; c < a.length; c++) a[c].querySelector("img") && (a[c].style.backgroundImage = "url(" + a[c].querySelector("img").getAttribute("src") + ")");
    // }

    var d, u = document.body, m = document.querySelector(".header"), p = "scroll-up", y = "scroll-down", f = 0,
        v = (window.addEventListener("scroll", function () {
            var e = window.pageYOffset;
            100 < window.scrollY ? m.classList.add("--scrolled") : window.scrollY < 150 && m.classList.remove("--scrolled"), e <= 0 ? m.classList.remove(p) : (f < e && !u.classList.contains(y) ? (m.classList.remove(p), m.classList.add(y)) : e < f && m.classList.contains(y) && (m.classList.remove(y), m.classList.add(p)), f = e)
        }), 0 < document.querySelectorAll("[data-quantity]").length && document.querySelectorAll("[data-quantity]").forEach(function (e) {
            var t = e.querySelector("[data-quantity-decrease]"), r = e.querySelector("[data-quantity-increase]"),
                o = e.querySelector("[data-quantity-value]");
            r.onclick = function () {
                d = parseFloat(o.value), d = isNaN(d) ? 0 : d, d++, o.value = d
            }, t.onclick = function () {
                d = parseFloat(o.value), 0 < (d = isNaN(d) ? 0 : d) && d--, o.value = d
            }
        }), {
            Android: function () {
                return navigator.userAgent.match(/Android/i)
            }, BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i)
            }, iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            }, Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i)
            }, Windows: function () {
                return navigator.userAgent.match(/IEMobile/i)
            }, any: function () {
                return v.Android() || v.BlackBerry() || v.iOS() || v.Opera() || v.Windows()
            }
        }), g = document.querySelector("body");
    if (v.any() ? g.classList.add("touch") : g.classList.add("mouse"), 0 < document.querySelectorAll("[data-req]").length) for (var h = document.querySelectorAll(".form"), O = function (e) {
        var i = h[e];

        function n(e) {
            var t = document.createElement("span");
            return t.className = "form-error-text", t.innerHTML = e, t
        }

        i.addEventListener("submit", function (r) {
            for (var e = i.querySelectorAll("[data-req]"), t = i.querySelectorAll(".form-error-text"), o = 0; o < t.length; o++) t[o].remove();
            e.forEach(function (e) {
                var t;
                "" === e.value.trim() && (r.preventDefault(), e.classList.add("error"), t = n(e.dataset.error), e.parentElement.insertBefore(t, e)), "email" !== e.type && "email" != e.dataset.req || (/\S+@\S+\.\S+/.test(e.value) || (r.preventDefault(), e.classList.add("error"), t = n(e.dataset.error), e.parentElement.insertBefore(t, e))), "phone" != e.dataset.req || e.value.match(/^[0-9]*\s{1}[0-9]*\s{1}[0-9]*$/) && (r.preventDefault(), e.classList.add("error"), t = n(e.dataset.error), e.parentElement.insertBefore(t, e))
            })
        })
    }, w = 0; w < h.length; w++) O(w);
    var L, g = document.querySelectorAll('[data-req="phone"]'), _ = (0 < g.length && g.forEach(function (e) {
        new Inputmask({mask: "(99) 999-99-99"}).mask(e)
    }), document.querySelectorAll("._anim-items"));
    if (0 < _.length && (g = function () {
        for (var e = 0; e < _.length; e++) {
            var t = _[e], r = t.offsetHeight, o = L(t).top, i = (window.innerWidth, window.innerHeight - r / 1.8);
            r > window.innerHeight && (i = window.innerHeight - window.innerHeight / 1.8), window.pageYOffset > o - i && window.pageYOffset < o + r ? t.classList.add("_animated") : t.classList.contains("_anim-no-hide") || t.classList.remove("_animated")
        }
    }, L = function (e) {
        var e = e.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft,
            r = window.pageYOffset || document.documentElement.scrollTop;
        return {top: e.top + r, left: e.left + t}
    }, window.addEventListener("scroll", g), g()), document.querySelector(".language")) {
        for (var S = document.querySelector(".language"), q = document.querySelector(".language__selected"), b = document.querySelector(".language__items"), P = document.querySelectorAll(".language__item"), A = (document.querySelector(".language__clicked"), document.querySelector(".menu__body")), E = (b.getBoundingClientRect().width, b.getAttribute("hidden") && r(b), q.addEventListener("click", function () {
            S.classList.toggle("--active"), function (e) {
                var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 350;
                e.classList.contains("_slide") || (e.classList.add("_slide"), e.hidden && (e.hidden = !1), t = e.offsetWidth, e.style.overflow = "hidden", e.style.width = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetWidth, e.style.transitionProperty = "width, margin, padding", e.style.transitionDuration = r + "ms", e.style.width = t + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout(function () {
                    e.style.removeProperty("width"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide")
                }, r))
            }(b), A.classList.toggle("--hide")
        }), 0); E < P.length; E++) !function (e) {
            var t = P[e];
            t.addEventListener("click", function () {
                var e = [q.innerHTML, t.innerHTML];
                t.innerHTML = e[0], q.innerHTML = e[1], S.classList.remove("--active"), r(b), A.classList.remove("--hide")
            })
        }(E);
        document.addEventListener("mousedown", function (e) {
            null === e.target.closest(".language") && (r(b), A.classList.remove("--hide"), S.classList.remove("--active"))
        })
    }
    var k, x, T, B, H, M, V = document.querySelectorAll(".parallax-layer"), I = Array.from(V).map(function (e) {
        return e.dataset.depth ? Number(e.dataset.depth) : .2
    }), j = Array.from(V).map(function (e) {
        e = window.getComputedStyle(e, null).getPropertyValue("font-size");
        return Number(e.slice(0, e.length - 2)).toFixed(2)
    });

    function C() {
        for (var e, t = 0; t < V.length; t++) {
            var r = V[t], o = I[t], i = j[t];
            r = r, e = window.scrollY * o, i = i - o * window.scrollY / 10, r.style.transform = "translate(-50%, -50%) translate3d(0, ".concat(e.toFixed(1), "px, 0)"), r.style.transition = "none", r.style.fontSize = "".concat(i, "px")
        }
        window.requestAnimationFrame(C)
    }

    window.addEventListener("scroll", function () {
        window.requestAnimationFrame(C)
    }), document.querySelector(".first-section__title") && (g = document.querySelector(".first-section__title-texts"), k = document.querySelector(".first-section__title-texts-list"), x = k.querySelectorAll("span"), T = x[0].getBoundingClientRect().height, B = 0, g.style.overflow = "hidden", k.style.height = T + "px", k.style.display = "inline-flex", k.style.flexDirection = "column-reverse", x.forEach(function (e) {
        e.style.height = T + "px", e.style.flexShrink = 0, e.style.flexGrow = 0
    }), setInterval(function () {
        var e = B * T;
        k.style.transform = "translateY(".concat(e, "px)"), ++B == x.length && (B = 0)
    }, 2e3)), document.querySelector(".info-services-item") && (H = document.querySelectorAll(".services__item"), M = document.querySelectorAll(".info-services-item"), H.forEach(function (t, e) {
        var r = t.querySelector(".info-services-item"), o = t.querySelector(".services__item-title");
        768 < window.innerWidth ? ((e + 1) % 2 == 0 ? t.classList.add("--right") : t.classList.add("--left"), (e + 1) % 2 == 0 && e + 1 === H.length && (t.classList.remove("--right"), t.classList.add("--bottom-right")), (e + 1) % 2 != 0 && e + 1 === H.length - 1 && (t.classList.remove("--left"), t.classList.add("--bottom-left")), t.addEventListener("mouseenter", function () {
            H.forEach(function (e) {
                return e.classList.remove("--active")
            }), M.forEach(function (e) {
                return e.classList.remove("--active")
            }), t.classList.add("--active"), r.classList.add("--active")
        }), t.addEventListener("mouseleave", function () {
            H.forEach(function (e) {
                return e.classList.remove("--active")
            }), M.forEach(function (e) {
                return e.classList.remove("--active")
            }), t.classList.remove("--active"), r.classList.remove("--active")
        }), document.addEventListener("mousedown", function (e) {
            null === e.target.closest(".services__item") && (t.classList.remove("--active"), r.classList.remove("--active"))
        })) : (n(r), o.addEventListener("click", function () {
            s(r)
        }))
    })), (function () {
        document.querySelector(".mainpage-aboutus__swiper") && new Swiper(".mainpage-aboutus__swiper", {
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            spaceBetween: 30,
            parallax: !0,
            autoplay: {delay: 2e3},
            speed: 1500,
            breakpoints: {
                0: {slidesPerView: 1},
                480: {slidesPerView: 2},
                992: {slidesPerView: 1},
                1200: {slidesPerView: 2}
            }
        }), document.querySelector(".mainpage-portfolio__swiper") && new Swiper(".mainpage-portfolio__swiper", {
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            spaceBetween: 40,
            autoplay: {delay: 4e3},
            autoHeight: !0,
            speed: 1e3,
            centeredSlides: !0,
            breakpoints: {
                0: {slidesPerView: 1.1},
                480: {slidesPerView: 1.5},
                560: {slidesPerView: 2},
                992: {slidesPerView: 3},
                1e3: {slidesPerView: 3.5},
                1300: {slidesPerView: 4}
            }
        }), document.querySelector(".our-values__swiper") && new Swiper(".our-values__swiper", {
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            spaceBetween: 30,
            parallax: !0,
            autoplay: {delay: 2e3},
            speed: 1500,
            slidesPerView: 1,
            pagination: {el: ".our-values__swiper-pagination", clickable: !0}
        }), document.querySelector(".our-partners__slider") && new Swiper(".our-partners__slider", {
            spaceBetween: 0,
            centeredSlides: !0,
            speed: 7e3,
            autoplay: {delay: 1},
            loop: !0,
            slidesPerView: "auto",
            allowTouchMove: !1,
            disableOnInteraction: !0
        }), document.querySelector(".reviews-portfolio__swiper") && new Swiper(".reviews-portfolio__swiper", {
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            spaceBetween: 30,
            parallax: !0,
            autoplay: {delay: 2e3},
            speed: 2e3,
            slidesPerView: 1,
            pagination: {el: ".reviews-portfolio__swiper-pagination", clickable: !0}
        }), document.querySelector(".portfolio-item-full__pagination-swiper") && new Swiper(".portfolio-item-full__pagination-swiper", {
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            slidesPerView: 2
        }), document.querySelector(".portfolio-item-full__swiper") && (new Swiper(".portfolio-item-full__swiper", {
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            slidesPerView: 1,
            pagination: {el: ".portfolio-item-full__pagination"},
            navigation: {nextEl: ".portfolio-item-full__swiper-next", prevEl: ".portfolio-item-full__swiper-prev"},
            on: {
                init: function (e) {
                    document.querySelector(".portfolio-item-full__swiper-all").innerHTML = e.slides.length
                }, slideChange: function (e) {
                    document.querySelector(".portfolio-item-full__swiper-current").innerHTML = e.activeIndex + 1
                }
            }
        }), document.querySelectorAll(".portfolio-item .swiper-pagination-bullet").forEach(function (e, t) {
            e.innerHTML += t + 1
        }))
    })(), /*AOS.init({
        once: !0,
        offset: 150,
        duration: 1e3,
        delay: 200
    }),*/ document.querySelector(".fp-watermark") && (console.log(1), document.querySelector(".fp-watermark").remove()), 0 < document.querySelectorAll(".portfolio-item").length && document.querySelectorAll(".portfolio-item").forEach(function (e) {
        var t, r;
        e.querySelector(".portfolio-item-full") && (t = e.querySelector(".portfolio-item-full"), r = e.querySelector(".portfolio-item-full__close"), e.querySelector(".portfolio-item__title").addEventListener("click", function () {
            t.classList.add("--show"), document.body.classList.add("lock"), document.querySelector(".main").classList.add("zIndex")
        }), r.addEventListener("click", function () {
            t.classList.remove("--show"), document.body.classList.remove("lock"), document.querySelector(".main").classList.remove("zIndex")
        }))
    })
}();