(window.webpackJsonp_typing_text = window.webpackJsonp_typing_text || []).push([
	[2],
	{ 7: function (e, t, n) {} },
]),
	(function (e) {
		function t(t) {
			for (
				var a, r, l = t[0], i = t[1], s = t[2], m = 0, p = [];
				m < l.length;
				m++
			)
				(r = l[m]),
					Object.prototype.hasOwnProperty.call(o, r) && o[r] && p.push(o[r][0]),
					(o[r] = 0);
			for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
			for (u && u(t); p.length; ) p.shift()();
			return c.push.apply(c, s || []), n();
		}
		function n() {
			for (var e, t = 0; t < c.length; t++) {
				for (var n = c[t], a = !0, l = 1; l < n.length; l++) {
					var i = n[l];
					0 !== o[i] && (a = !1);
				}
				a && (c.splice(t--, 1), (e = r((r.s = n[0]))));
			}
			return e;
		}
		var a = {},
			o = { 1: 0 },
			c = [];
		function r(t) {
			if (a[t]) return a[t].exports;
			var n = (a[t] = { i: t, l: !1, exports: {} });
			return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
		}
		(r.m = e),
			(r.c = a),
			(r.d = function (e, t, n) {
				r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
			}),
			(r.r = function (e) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(r.t = function (e, t) {
				if ((1 & t && (e = r(e)), 8 & t)) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if (
					(r.r(n),
					Object.defineProperty(n, "default", { enumerable: !0, value: e }),
					2 & t && "string" != typeof e)
				)
					for (var a in e)
						r.d(
							n,
							a,
							function (t) {
								return e[t];
							}.bind(null, a)
						);
				return n;
			}),
			(r.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return r.d(t, "a", t), t;
			}),
			(r.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(r.p = "");
		var l = (window.webpackJsonp_typing_text =
				window.webpackJsonp_typing_text || []),
			i = l.push.bind(l);
		(l.push = t), (l = l.slice());
		for (var s = 0; s < l.length; s++) t(l[s]);
		var u = i;
		c.push([12, 2]), n();
	})([
		function (e, t, n) {
			e.exports = n(9)();
		},
		function (e, t) {
			e.exports = window.React;
		},
		function (e, t, n) {
			"use strict";
			e.exports = function (e, t, n, a, o, c, r, l) {
				if (!e) {
					var i;
					if (void 0 === t)
						i = new Error(
							"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
						);
					else {
						var s = [n, a, o, c, r, l],
							u = 0;
						(i = new Error(
							t.replace(/%s/g, function () {
								return s[u++];
							})
						)).name = "Invariant Violation";
					}
					throw ((i.framesToPop = 1), i);
				}
			};
		},
		function (e, t) {
			e.exports = window.ReactDOM;
		},
		function (e, t, n) {
			var a;
			(a = function () {
				return (function (e) {
					var t = {};
					function n(a) {
						if (t[a]) return t[a].exports;
						var o = (t[a] = { exports: {}, id: a, loaded: !1 });
						return (
							e[a].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
						);
					}
					return (n.m = e), (n.c = t), (n.p = ""), n(0);
				})([
					function (e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", { value: !0 });
						var a = (function () {
								function e(e, t) {
									for (var n = 0; n < t.length; n++) {
										var a = t[n];
										(a.enumerable = a.enumerable || !1),
											(a.configurable = !0),
											"value" in a && (a.writable = !0),
											Object.defineProperty(e, a.key, a);
									}
								}
								return function (t, n, a) {
									return n && e(t.prototype, n), a && e(t, a), t;
								};
							})(),
							o = n(1),
							c = n(3),
							r = (function () {
								function e(t, n) {
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e),
										o.initializer.load(this, n, t),
										this.begin();
								}
								return (
									a(e, [
										{
											key: "toggle",
											value: function () {
												this.pause.status ? this.start() : this.stop();
											},
										},
										{
											key: "stop",
											value: function () {
												this.typingComplete ||
													this.pause.status ||
													(this.toggleBlinking(!0),
													(this.pause.status = !0),
													this.options.onStop(this.arrayPos, this));
											},
										},
										{
											key: "start",
											value: function () {
												this.typingComplete ||
													(this.pause.status &&
														((this.pause.status = !1),
														this.pause.typewrite
															? this.typewrite(
																	this.pause.curString,
																	this.pause.curStrPos
															  )
															: this.backspace(
																	this.pause.curString,
																	this.pause.curStrPos
															  ),
														this.options.onStart(this.arrayPos, this)));
											},
										},
										{
											key: "destroy",
											value: function () {
												this.reset(!1), this.options.onDestroy(this);
											},
										},
										{
											key: "reset",
											value: function () {
												var e =
													arguments.length <= 0 ||
													void 0 === arguments[0] ||
													arguments[0];
												clearInterval(this.timeout),
													this.replaceText(""),
													this.cursor &&
														this.cursor.parentNode &&
														(this.cursor.parentNode.removeChild(this.cursor),
														(this.cursor = null)),
													(this.strPos = 0),
													(this.arrayPos = 0),
													(this.curLoop = 0),
													e &&
														(this.insertCursor(),
														this.options.onReset(this),
														this.begin());
											},
										},
										{
											key: "begin",
											value: function () {
												var e = this;
												this.options.onBegin(this),
													(this.typingComplete = !1),
													this.shuffleStringsIfNeeded(this),
													this.insertCursor(),
													this.bindInputFocusEvents && this.bindFocusEvents(),
													(this.timeout = setTimeout(function () {
														e.currentElContent &&
														0 !== e.currentElContent.length
															? e.backspace(
																	e.currentElContent,
																	e.currentElContent.length
															  )
															: e.typewrite(
																	e.strings[e.sequence[e.arrayPos]],
																	e.strPos
															  );
													}, this.startDelay));
											},
										},
										{
											key: "typewrite",
											value: function (e, t) {
												var n = this;
												this.fadeOut &&
													this.el.classList.contains(this.fadeOutClass) &&
													(this.el.classList.remove(this.fadeOutClass),
													this.cursor &&
														this.cursor.classList.remove(this.fadeOutClass));
												var a = this.humanizer(this.typeSpeed),
													o = 1;
												!0 !== this.pause.status
													? (this.timeout = setTimeout(function () {
															t = c.htmlParser.typeHtmlChars(e, t, n);
															var a = 0,
																r = e.substr(t);
															if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
																var l = 1;
																(l += (r = /\d+/.exec(r)[0]).length),
																	(a = parseInt(r)),
																	(n.temporaryPause = !0),
																	n.options.onTypingPaused(n.arrayPos, n),
																	(e = e.substring(0, t) + e.substring(t + l)),
																	n.toggleBlinking(!0);
															}
															if ("`" === r.charAt(0)) {
																for (
																	;
																	"`" !== e.substr(t + o).charAt(0) &&
																	(o++, !(t + o > e.length));

																);
																var i = e.substring(0, t),
																	s = e.substring(i.length + 1, t + o),
																	u = e.substring(t + o + 1);
																(e = i + s + u), o--;
															}
															n.timeout = setTimeout(function () {
																n.toggleBlinking(!1),
																	t >= e.length
																		? n.doneTyping(e, t)
																		: n.keepTyping(e, t, o),
																	n.temporaryPause &&
																		((n.temporaryPause = !1),
																		n.options.onTypingResumed(n.arrayPos, n));
															}, a);
													  }, a))
													: this.setPauseStatus(e, t, !0);
											},
										},
										{
											key: "keepTyping",
											value: function (e, t, n) {
												0 === t &&
													(this.toggleBlinking(!1),
													this.options.preStringTyped(this.arrayPos, this)),
													(t += n);
												var a = e.substr(0, t);
												this.replaceText(a), this.typewrite(e, t);
											},
										},
										{
											key: "doneTyping",
											value: function (e, t) {
												var n = this;
												this.options.onStringTyped(this.arrayPos, this),
													this.toggleBlinking(!0),
													(this.arrayPos === this.strings.length - 1 &&
														(this.complete(),
														!1 === this.loop ||
															this.curLoop === this.loopCount)) ||
														(this.timeout = setTimeout(function () {
															n.backspace(e, t);
														}, this.backDelay));
											},
										},
										{
											key: "backspace",
											value: function (e, t) {
												var n = this;
												if (!0 !== this.pause.status) {
													if (this.fadeOut) return this.initFadeOut();
													this.toggleBlinking(!1);
													var a = this.humanizer(this.backSpeed);
													this.timeout = setTimeout(function () {
														t = c.htmlParser.backSpaceHtmlChars(e, t, n);
														var a = e.substr(0, t);
														if ((n.replaceText(a), n.smartBackspace)) {
															var o = n.strings[n.arrayPos + 1];
															o && a === o.substr(0, t)
																? (n.stopNum = t)
																: (n.stopNum = 0);
														}
														t > n.stopNum
															? (t--, n.backspace(e, t))
															: t <= n.stopNum &&
															  (n.arrayPos++,
															  n.arrayPos === n.strings.length
																	? ((n.arrayPos = 0),
																	  n.options.onLastStringBackspaced(),
																	  n.shuffleStringsIfNeeded(),
																	  n.begin())
																	: n.typewrite(
																			n.strings[n.sequence[n.arrayPos]],
																			t
																	  ));
													}, a);
												} else this.setPauseStatus(e, t, !1);
											},
										},
										{
											key: "complete",
											value: function () {
												this.options.onComplete(this),
													this.loop
														? this.curLoop++
														: (this.typingComplete = !0);
											},
										},
										{
											key: "setPauseStatus",
											value: function (e, t, n) {
												(this.pause.typewrite = n),
													(this.pause.curString = e),
													(this.pause.curStrPos = t);
											},
										},
										{
											key: "toggleBlinking",
											value: function (e) {
												this.cursor &&
													(this.pause.status ||
														(this.cursorBlinking !== e &&
															((this.cursorBlinking = e),
															e
																? this.cursor.classList.add(
																		"typed-cursor--blink"
																  )
																: this.cursor.classList.remove(
																		"typed-cursor--blink"
																  ))));
											},
										},
										{
											key: "humanizer",
											value: function (e) {
												return Math.round((Math.random() * e) / 2) + e;
											},
										},
										{
											key: "shuffleStringsIfNeeded",
											value: function () {
												this.shuffle &&
													(this.sequence = this.sequence.sort(function () {
														return Math.random() - 0.5;
													}));
											},
										},
										{
											key: "initFadeOut",
											value: function () {
												var e = this;
												return (
													(this.el.className += " " + this.fadeOutClass),
													this.cursor &&
														(this.cursor.className += " " + this.fadeOutClass),
													setTimeout(function () {
														e.arrayPos++,
															e.replaceText(""),
															e.strings.length > e.arrayPos
																? e.typewrite(
																		e.strings[e.sequence[e.arrayPos]],
																		0
																  )
																: (e.typewrite(e.strings[0], 0),
																  (e.arrayPos = 0));
													}, this.fadeOutDelay)
												);
											},
										},
										{
											key: "replaceText",
											value: function (e) {
												this.attr
													? this.el.setAttribute(this.attr, e)
													: this.isInput
													? (this.el.value = e)
													: "html" === this.contentType
													? (this.el.innerHTML = e)
													: (this.el.textContent = e);
											},
										},
										{
											key: "bindFocusEvents",
											value: function () {
												var e = this;
												this.isInput &&
													(this.el.addEventListener("focus", function (t) {
														e.stop();
													}),
													this.el.addEventListener("blur", function (t) {
														(e.el.value && 0 !== e.el.value.length) ||
															e.start();
													}));
											},
										},
										{
											key: "insertCursor",
											value: function () {
												this.showCursor &&
													(this.cursor ||
														((this.cursor = document.createElement("span")),
														(this.cursor.className = "typed-cursor"),
														this.cursor.setAttribute("aria-hidden", !0),
														(this.cursor.innerHTML = this.cursorChar),
														this.el.parentNode &&
															this.el.parentNode.insertBefore(
																this.cursor,
																this.el.nextSibling
															)));
											},
										},
									]),
									e
								);
							})();
						(t.default = r), (e.exports = t.default);
					},
					function (e, t, n) {
						"use strict";
						Object.defineProperty(t, "__esModule", { value: !0 });
						var a,
							o =
								Object.assign ||
								function (e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = arguments[t];
										for (var a in n)
											Object.prototype.hasOwnProperty.call(n, a) &&
												(e[a] = n[a]);
									}
									return e;
								},
							c = (function () {
								function e(e, t) {
									for (var n = 0; n < t.length; n++) {
										var a = t[n];
										(a.enumerable = a.enumerable || !1),
											(a.configurable = !0),
											"value" in a && (a.writable = !0),
											Object.defineProperty(e, a.key, a);
									}
								}
								return function (t, n, a) {
									return n && e(t.prototype, n), a && e(t, a), t;
								};
							})(),
							r = (a = n(2)) && a.__esModule ? a : { default: a },
							l = (function () {
								function e() {
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e);
								}
								return (
									c(e, [
										{
											key: "load",
											value: function (e, t, n) {
												if (
													((e.el =
														"string" == typeof n
															? document.querySelector(n)
															: n),
													(e.options = o({}, r.default, t)),
													(e.isInput = "input" === e.el.tagName.toLowerCase()),
													(e.attr = e.options.attr),
													(e.bindInputFocusEvents =
														e.options.bindInputFocusEvents),
													(e.showCursor = !e.isInput && e.options.showCursor),
													(e.cursorChar = e.options.cursorChar),
													(e.cursorBlinking = !0),
													(e.elContent = e.attr
														? e.el.getAttribute(e.attr)
														: e.el.textContent),
													(e.contentType = e.options.contentType),
													(e.typeSpeed = e.options.typeSpeed),
													(e.startDelay = e.options.startDelay),
													(e.backSpeed = e.options.backSpeed),
													(e.smartBackspace = e.options.smartBackspace),
													(e.backDelay = e.options.backDelay),
													(e.fadeOut = e.options.fadeOut),
													(e.fadeOutClass = e.options.fadeOutClass),
													(e.fadeOutDelay = e.options.fadeOutDelay),
													(e.isPaused = !1),
													(e.strings = e.options.strings.map(function (e) {
														return e.trim();
													})),
													"string" == typeof e.options.stringsElement
														? (e.stringsElement = document.querySelector(
																e.options.stringsElement
														  ))
														: (e.stringsElement = e.options.stringsElement),
													e.stringsElement)
												) {
													(e.strings = []),
														(e.stringsElement.style.display = "none");
													var a = Array.prototype.slice.apply(
															e.stringsElement.children
														),
														c = a.length;
													if (c)
														for (var l = 0; l < c; l += 1) {
															var i = a[l];
															e.strings.push(i.innerHTML.trim());
														}
												}
												for (var l in ((e.strPos = 0),
												(e.arrayPos = 0),
												(e.stopNum = 0),
												(e.loop = e.options.loop),
												(e.loopCount = e.options.loopCount),
												(e.curLoop = 0),
												(e.shuffle = e.options.shuffle),
												(e.sequence = []),
												(e.pause = {
													status: !1,
													typewrite: !0,
													curString: "",
													curStrPos: 0,
												}),
												(e.typingComplete = !1),
												e.strings))
													e.sequence[l] = l;
												(e.currentElContent = this.getCurrentElContent(e)),
													(e.autoInsertCss = e.options.autoInsertCss),
													this.appendAnimationCss(e);
											},
										},
										{
											key: "getCurrentElContent",
											value: function (e) {
												return e.attr
													? e.el.getAttribute(e.attr)
													: e.isInput
													? e.el.value
													: "html" === e.contentType
													? e.el.innerHTML
													: e.el.textContent;
											},
										},
										{
											key: "appendAnimationCss",
											value: function (e) {
												if (
													e.autoInsertCss &&
													(e.showCursor || e.fadeOut) &&
													!document.querySelector("[data-typed-js-css]")
												) {
													var t = document.createElement("style");
													(t.type = "text/css"),
														t.setAttribute("data-typed-js-css", !0);
													var n = "";
													e.showCursor &&
														(n +=
															"\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
														e.fadeOut &&
															(n +=
																"\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
														0 !== t.length &&
															((t.innerHTML = n), document.body.appendChild(t));
												}
											},
										},
									]),
									e
								);
							})();
						t.default = l;
						var i = new l();
						t.initializer = i;
					},
					function (e, t) {
						"use strict";
						Object.defineProperty(t, "__esModule", { value: !0 });
						(t.default = {
							strings: [
								"These are the default values...",
								"You know what you should do?",
								"Use your own!",
								"Have a great day!",
							],
							stringsElement: null,
							typeSpeed: 0,
							startDelay: 0,
							backSpeed: 0,
							smartBackspace: !0,
							shuffle: !1,
							backDelay: 700,
							fadeOut: !1,
							fadeOutClass: "typed-fade-out",
							fadeOutDelay: 500,
							loop: !1,
							loopCount: 1 / 0,
							showCursor: !0,
							cursorChar: "|",
							autoInsertCss: !0,
							attr: null,
							bindInputFocusEvents: !1,
							contentType: "html",
							onBegin: function (e) {},
							onComplete: function (e) {},
							preStringTyped: function (e, t) {},
							onStringTyped: function (e, t) {},
							onLastStringBackspaced: function (e) {},
							onTypingPaused: function (e, t) {},
							onTypingResumed: function (e, t) {},
							onReset: function (e) {},
							onStop: function (e, t) {},
							onStart: function (e, t) {},
							onDestroy: function (e) {},
						}),
							(e.exports = t.default);
					},
					function (e, t) {
						"use strict";
						Object.defineProperty(t, "__esModule", { value: !0 });
						var n = (function () {
								function e(e, t) {
									for (var n = 0; n < t.length; n++) {
										var a = t[n];
										(a.enumerable = a.enumerable || !1),
											(a.configurable = !0),
											"value" in a && (a.writable = !0),
											Object.defineProperty(e, a.key, a);
									}
								}
								return function (t, n, a) {
									return n && e(t.prototype, n), a && e(t, a), t;
								};
							})(),
							a = (function () {
								function e() {
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e);
								}
								return (
									n(e, [
										{
											key: "typeHtmlChars",
											value: function (e, t, n) {
												if ("html" !== n.contentType) return t;
												var a = e.substr(t).charAt(0);
												if ("<" === a || "&" === a) {
													var o;
													for (
														o = "<" === a ? ">" : ";";
														e.substr(t + 1).charAt(0) !== o &&
														!(1 + ++t > e.length);

													);
													t++;
												}
												return t;
											},
										},
										{
											key: "backSpaceHtmlChars",
											value: function (e, t, n) {
												if ("html" !== n.contentType) return t;
												var a = e.substr(t).charAt(0);
												if (">" === a || ";" === a) {
													var o;
													for (
														o = ">" === a ? "<" : "&";
														e.substr(t - 1).charAt(0) !== o && !(--t < 0);

													);
													t--;
												}
												return t;
											},
										},
									]),
									e
								);
							})();
						t.default = a;
						var o = new a();
						t.htmlParser = o;
					},
				]);
			}),
				(e.exports = a());
		},
		function (e, t) {
			function n(t) {
				return (
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? ((e.exports = n = function (e) {
								return typeof e;
						  }),
						  (e.exports.default = e.exports),
						  (e.exports.__esModule = !0))
						: ((e.exports = n = function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  }),
						  (e.exports.default = e.exports),
						  (e.exports.__esModule = !0)),
					n(t)
				);
			}
			(e.exports = n),
				(e.exports.default = e.exports),
				(e.exports.__esModule = !0);
		},
		function (e, t, n) {
			"use strict";
			const a = (e, t, n) => {
				const a = t < 0 ? e.length + t : t;
				if (a >= 0 && a < e.length) {
					const a = n < 0 ? e.length + n : n,
						[o] = e.splice(t, 1);
					e.splice(a, 0, o);
				}
			};
			(e.exports = (e, t, n) => ((e = [...e]), a(e, t, n), e)),
				(e.exports.mutate = a);
		},
		,
		function (e, t, n) {},
		function (e, t, n) {
			"use strict";
			var a = n(10);
			function o() {}
			function c() {}
			(c.resetWarningCache = o),
				(e.exports = function () {
					function e(e, t, n, o, c, r) {
						if (r !== a) {
							var l = new Error(
								"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
							);
							throw ((l.name = "Invariant Violation"), l);
						}
					}
					function t() {
						return e;
					}
					e.isRequired = e;
					var n = {
						array: e,
						bool: e,
						func: e,
						number: e,
						object: e,
						string: e,
						symbol: e,
						any: e,
						arrayOf: t,
						element: e,
						elementType: e,
						instanceOf: t,
						node: e,
						objectOf: t,
						oneOf: t,
						oneOfType: t,
						shape: t,
						exact: t,
						checkPropTypes: c,
						resetWarningCache: o,
					};
					return (n.PropTypes = n), n;
				});
		},
		function (e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		},
		,
		function (e, t, n) {
			"use strict";
			n.r(t);
			var a = {};
			n.r(a),
				n.d(a, "typoPrefix_prefixText", function () {
					return o;
				}),
				n.d(a, "typoPrefix_suffixText", function () {
					return c;
				}),
				n.d(a, "typoPrefix_typedText", function () {
					return r;
				}),
				n(7),
				n(8);
			var o = "prefixText",
				c = "suffixText",
				r = "typedText";
			function l(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? l(Object(n), !0).forEach(function (t) {
								s(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: l(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function s(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var u = function (e) {
				return e || 0 === e;
			};
			function m(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? m(Object(n), !0).forEach(function (t) {
								g(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: m(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function g(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var b = function (e) {
				var t = e.prefixConstant,
					n = e.defaultFontSize,
					a = e.attributes,
					o = a["".concat(t, "FontFamily")],
					c = a["".concat(t, "FontWeight")],
					r = a["".concat(t, "FontStyle")],
					l = a["".concat(t, "TextTransform")],
					i = a["".concat(t, "TextDecoration")],
					s = a["".concat(t, "FontSize")],
					m = void 0 === s ? n : s,
					p = a["".concat(t, "SizeUnit")],
					g = a["".concat(t, "LetterSpacing")],
					b = a["".concat(t, "LetterSpacingUnit")],
					d = a["".concat(t, "LineHeight")],
					v = a["".concat(t, "LineHeightUnit")],
					f = a["TAB".concat(t, "SizeUnit")],
					h = a["TAB".concat(t, "LetterSpacingUnit")],
					y = a["TAB".concat(t, "LineHeightUnit")],
					R = a["TAB".concat(t, "FontSize")],
					x = a["TAB".concat(t, "LetterSpacing")],
					C = a["TAB".concat(t, "LineHeight")],
					_ = a["MOB".concat(t, "SizeUnit")],
					E = a["MOB".concat(t, "LetterSpacingUnit")],
					T = a["MOB".concat(t, "LineHeightUnit")],
					S = a["MOB".concat(t, "FontSize")],
					O = a["MOB".concat(t, "LetterSpacing")],
					I = a["MOB".concat(t, "LineHeight")];
				return {
					typoStylesDesktop: "\n              "
						.concat(
							o ? "font-family: ".concat(o, ";") : " ",
							"\n              "
						)
						.concat(
							u(m) ? "font-size: ".concat(m).concat(p, ";") : " ",
							"\n              "
						)
						.concat(
							u(d) ? "line-height: ".concat(d).concat(v, ";") : " ",
							"\n              "
						)
						.concat(
							c ? "font-weight: ".concat(c, ";") : " ",
							"\n              "
						)
						.concat(r ? "font-style: ".concat(r, ";") : " ", "\n              ")
						.concat(
							i ? "text-decoration: ".concat(i, ";") : " ",
							"\n              "
						)
						.concat(
							l ? "text-transform: ".concat(l, ";") : " ",
							"\n              "
						)
						.concat(
							u(g) ? "letter-spacing: ".concat(g).concat(b, ";") : " ",
							"\n          "
						),
					typoStylesTab: "\n              "
						.concat(
							u(R) ? "font-size: ".concat(R).concat(f, ";") : " ",
							"\n              "
						)
						.concat(
							u(C) ? "line-height: ".concat(C).concat(y, ";") : " ",
							"\n              "
						)
						.concat(
							u(x) ? "letter-spacing: ".concat(x).concat(h, ";") : " ",
							"\n          "
						),
					typoStylesMobile: "\n              "
						.concat(
							u(S) ? "font-size: ".concat(S).concat(_, ";") : " ",
							"\n              "
						)
						.concat(
							u(I) ? "line-height: ".concat(I).concat(T, ";") : " ",
							"\n              "
						)
						.concat(
							u(O) ? "letter-spacing: ".concat(O).concat(E, ";") : " ",
							"\n          "
						),
				};
			};
			function d(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function v(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? d(Object(n), !0).forEach(function (t) {
								f(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: d(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function f(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var h = function (e) {
					var t,
						n,
						a =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {},
						o = a.top,
						c = a.right,
						r = a.bottom,
						l = a.left,
						i = a.isLinked,
						s = void 0 === i || i,
						m = u(o)
							? f({}, "".concat(e, "Top"), {
									type: "string",
									default: "".concat(o),
							  })
							: f({}, "".concat(e, "Top"), { type: "string" }),
						p = u(c)
							? f({}, "".concat(e, "Right"), {
									type: "string",
									default: "".concat(c),
							  })
							: f({}, "".concat(e, "Right"), { type: "string" }),
						g = u(r)
							? f({}, "".concat(e, "Bottom"), {
									type: "string",
									default: "".concat(r),
							  })
							: f({}, "".concat(e, "Bottom"), { type: "string" }),
						b = u(l)
							? f({}, "".concat(e, "Left"), {
									type: "string",
									default: "".concat(l),
							  })
							: f({}, "".concat(e, "Left"), { type: "string" });
					return v(
						v(
							v(
								v(
									v(
										(f((t = {}), "".concat(e, "isLinked"), {
											type: "boolean",
											default: s,
										}),
										f(t, "".concat(e, "Unit"), {
											type: "string",
											default: "px",
										}),
										t),
										m
									),
									p
								),
								g
							),
							b
						),
						{},
						(f((n = {}), "TAB".concat(e, "Unit"), {
							type: "string",
							default: "px",
						}),
						f(n, "TAB".concat(e, "Top"), { type: "string" }),
						f(n, "TAB".concat(e, "Right"), { type: "string" }),
						f(n, "TAB".concat(e, "Bottom"), { type: "string" }),
						f(n, "TAB".concat(e, "Left"), { type: "string" }),
						f(n, "MOB".concat(e, "Unit"), { type: "string", default: "px" }),
						f(n, "MOB".concat(e, "Top"), { type: "string" }),
						f(n, "MOB".concat(e, "Right"), { type: "string" }),
						f(n, "MOB".concat(e, "Bottom"), { type: "string" }),
						f(n, "MOB".concat(e, "Left"), { type: "string" }),
						n)
					);
				},
				y = function (e) {
					var t = e.controlName,
						n = e.styleFor,
						a = e.attributes,
						o = a["".concat(t, "isLinked")],
						c = a["".concat(t, "Unit")],
						r = a["".concat(t, "Top")],
						l = a["".concat(t, "Right")],
						i = a["".concat(t, "Bottom")],
						s = a["".concat(t, "Left")],
						u = a["TAB".concat(t, "Unit")],
						m = a["TAB".concat(t, "Top")],
						p = a["TAB".concat(t, "Right")],
						g = a["TAB".concat(t, "Bottom")],
						b = a["TAB".concat(t, "Left")],
						d = a["MOB".concat(t, "Unit")],
						v = a["MOB".concat(t, "Top")],
						f = a["MOB".concat(t, "Right")],
						h = a["MOB".concat(t, "Bottom")],
						y = a["MOB".concat(t, "Left")],
						R = " ",
						x = " ",
						C = " ";
					return (
						!0 === o
							? "border" === n
								? ((R = "\n            ".concat(
										r
											? "border-width: ".concat(parseFloat(r)).concat(c, "; ")
											: " ",
										"\n        \n            "
								  )),
								  (x = "\n                ".concat(
										m
											? "border-width: ".concat(parseFloat(m)).concat(u, ";")
											: " ",
										"\n    \n            "
								  )),
								  (C = "\n                ".concat(
										v
											? "border-width: ".concat(parseFloat(v)).concat(d, ";")
											: " ",
										"\n    \n            "
								  )))
								: "border-radius" === n
								? ((R = "\n                ".concat(
										r
											? "border-radius: ".concat(parseFloat(r)).concat(c, ";")
											: " ",
										"\n        \n            "
								  )),
								  (x = "\n                ".concat(
										m
											? "border-radius: ".concat(parseFloat(m)).concat(u, ";")
											: " ",
										"\n    \n            "
								  )),
								  (C = "\n                ".concat(
										v
											? "border-radius: ".concat(parseFloat(v)).concat(d, ";")
											: " ",
										"\n    \n            "
								  )))
								: ((R = "\n            ".concat(
										r
											? "".concat(n, ": ").concat(parseFloat(r)).concat(c, ";")
											: " ",
										"\n        \n            "
								  )),
								  (x = "\n                ".concat(
										m
											? "".concat(n, ": ").concat(parseFloat(m)).concat(u, ";")
											: " ",
										"\n    \n            "
								  )),
								  (C = "\n                ".concat(
										v
											? "".concat(n, ": ").concat(parseFloat(v)).concat(d, ";")
											: " ",
										"\n    \n            "
								  )))
							: "border" === n
							? ((R = "\n            "
									.concat(
										r
											? "border-top-width: "
													.concat(parseFloat(r))
													.concat(c, "; z-index:999;")
											: " ",
										"\n            "
									)
									.concat(
										l
											? "border-right-width: "
													.concat(parseFloat(l))
													.concat(c, ";")
											: " ",
										"\n            "
									)
									.concat(
										s
											? "border-left-width: "
													.concat(parseFloat(s))
													.concat(c, ";")
											: " ",
										"\n            "
									)
									.concat(
										i
											? "border-bottom-width: "
													.concat(parseFloat(i))
													.concat(c, ";")
											: " ",
										"\n        \n            "
									)),
							  (x = "\n                "
									.concat(
										m
											? "border-top-width: "
													.concat(parseFloat(m))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										p
											? "border-right-width: "
													.concat(parseFloat(p))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										b
											? "border-left-width: "
													.concat(parseFloat(b))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										g
											? "border-bottom-width: "
													.concat(parseFloat(g))
													.concat(u, ";")
											: " ",
										"\n    \n            "
									)),
							  (C = "\n                "
									.concat(
										v
											? "border-top-width: "
													.concat(parseFloat(v))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										f
											? "border-right-width: "
													.concat(parseFloat(f))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										y
											? "border-left-width: "
													.concat(parseFloat(y))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										h
											? "border-bottom-width: "
													.concat(parseFloat(h))
													.concat(d, ";")
											: " ",
										"\n    \n            "
									)))
							: "border-radius" === n
							? ((R = "\n                "
									.concat(
										r
											? "border-top-left-radius: "
													.concat(parseFloat(r))
													.concat(c, ";")
											: " ",
										"\n                "
									)
									.concat(
										l
											? "border-top-right-radius: "
													.concat(parseFloat(l))
													.concat(c, ";")
											: " ",
										"\n                "
									)
									.concat(
										s
											? "border-bottom-left-radius: "
													.concat(parseFloat(s))
													.concat(c, ";")
											: " ",
										"\n                "
									)
									.concat(
										i
											? "border-bottom-right-radius: "
													.concat(parseFloat(i))
													.concat(c, ";")
											: " ",
										"\n        \n            "
									)),
							  (x = "\n                "
									.concat(
										m
											? "border-top-left-radius: "
													.concat(parseFloat(m))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										p
											? "border-top-right-radius: "
													.concat(parseFloat(p))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										b
											? "border-bottom-left-radius: "
													.concat(parseFloat(b))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										g
											? "border-bottom-right-radius: "
													.concat(parseFloat(g))
													.concat(u, ";")
											: " ",
										"\n    \n            "
									)),
							  (C = "\n                "
									.concat(
										v
											? "border-top-left-radius: "
													.concat(parseFloat(v))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										f
											? "border-top-right-radius: "
													.concat(parseFloat(f))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										y
											? "border-bottom-left-radius: "
													.concat(parseFloat(y))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										h
											? "border-bottom-right-radius: "
													.concat(parseFloat(h))
													.concat(d, ";")
											: " ",
										"\n    \n            "
									)))
							: ((R = "\n            "
									.concat(
										r
											? ""
													.concat(n, "-top: ")
													.concat(parseFloat(r))
													.concat(c, ";")
											: " ",
										"\n            "
									)
									.concat(
										l
											? ""
													.concat(n, "-right: ")
													.concat(parseFloat(l))
													.concat(c, ";")
											: " ",
										"\n            "
									)
									.concat(
										s
											? ""
													.concat(n, "-left: ")
													.concat(parseFloat(s))
													.concat(c, ";")
											: " ",
										"\n            "
									)
									.concat(
										i
											? ""
													.concat(n, "-bottom: ")
													.concat(parseFloat(i))
													.concat(c, ";")
											: " ",
										"\n        \n            "
									)),
							  (x = "\n                "
									.concat(
										m
											? ""
													.concat(n, "-top: ")
													.concat(parseFloat(m))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										p
											? ""
													.concat(n, "-right: ")
													.concat(parseFloat(p))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										b
											? ""
													.concat(n, "-left: ")
													.concat(parseFloat(b))
													.concat(u, ";")
											: " ",
										"\n                "
									)
									.concat(
										g
											? ""
													.concat(n, "-bottom: ")
													.concat(parseFloat(g))
													.concat(u, ";")
											: " ",
										"\n    \n            "
									)),
							  (C = "\n                "
									.concat(
										v
											? ""
													.concat(n, "-top: ")
													.concat(parseFloat(v))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										f
											? ""
													.concat(n, "-right: ")
													.concat(parseFloat(f))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										y
											? ""
													.concat(n, "-left: ")
													.concat(parseFloat(y))
													.concat(d, ";")
											: " ",
										"\n                "
									)
									.concat(
										h
											? ""
													.concat(n, "-bottom: ")
													.concat(parseFloat(h))
													.concat(d, ";")
											: " ",
										"\n    \n            "
									))),
						{
							dimensionStylesDesktop: R,
							dimensionStylesTab: x,
							dimensionStylesMobile: C,
						}
					);
				};
			function R(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function x(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? R(Object(n), !0).forEach(function (t) {
								C(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: R(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function C(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var _ = function (e) {
					return e.replace(/\s+/g, " ");
				},
				E = function (e) {
					return /.+(?=\:(?!hover)(?!focus))/.test(e);
				},
				T = function (e) {
					var t = e.setPreviewDeviceType;
					(0, e.setAttributes)({ resOption: "Desktop" }), t("Desktop");
				},
				S = function (e) {
					var t = e.setPreviewDeviceType;
					(0, e.setAttributes)({ resOption: "Tablet" }), t("Tablet");
				},
				O = function (e) {
					var t = e.setPreviewDeviceType;
					(0, e.setAttributes)({ resOption: "Mobile" }), t("Mobile");
				};
			function I(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var B = function (e) {
					var t,
						n = e.isForPreviewButton,
						a = void 0 !== n && n,
						o = e.domObj,
						c = e.resOption;
					(t = a
						? o.querySelectorAll(".eb-guten-block-main-parent-wrapper > style")
						: o.querySelectorAll(
								".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
						  )).length < 1 ||
						t.forEach(function (e) {
							var t = e.textContent.replace(/\s+/g, " "),
								n = /(mimmikcssStart\s\*\/)(.+)(\/\*\smimmikcssEnd)/i,
								a = " ";
							if ("Tablet" === c) {
								var o = (t.match(
									/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i
								) || [, " "])[1];
								a = t.replace(n, "$1 ".concat(o, " $3"));
							} else if ("Mobile" === c) {
								var r = (t.match(
										/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i
									) || [, " "])[1],
									l = (t.match(/mobcssStart\s\*\/(.+)(?=\/\*\smobcssEnd)/i) || [
										,
										" ",
									])[1];
								a = t.replace(n, "$1 ".concat(r, " ").concat(l, " $3"));
							} else a = t.replace(n, "$1  $3");
							e.textContent = a;
						});
				},
				w = n(4),
				P = n.n(w);
			function k(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function A(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? k(Object(n), !0).forEach(function (t) {
								M(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: k(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function M(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function U(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var a,
								o,
								c = [],
								_n = !0,
								r = !1;
							try {
								for (
									n = n.call(e);
									!(_n = (a = n.next()).done) &&
									(c.push(a.value), !t || c.length !== t);
									_n = !0
								);
							} catch (e) {
								(r = !0), (o = e);
							} finally {
								try {
									_n || null == n.return || n.return();
								} finally {
									if (r) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return D(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? D(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function D(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var F = wp.element,
				z = F.useEffect,
				L = F.useState,
				j = wp.data.dispatch;
			function N(e) {
				var t = e.top,
					n = e.right,
					a = e.bottom,
					o = e.left,
					c = e.onChange,
					r = e.neededProps,
					l = U(L({ top: t, right: n, bottom: a, left: o }), 2),
					i = l[0],
					s = l[1],
					u = r.baseLabel,
					m = r.resOption,
					p = r.forBorderRadius,
					g = r.setAttributes,
					b = r.dimensionIsLinked,
					d = r.controlName,
					v = U(L(b), 2),
					f = v[0],
					h = v[1],
					y = function (e) {
						var t = e.target,
							n = t.name,
							a = t.value;
						s(
							f
								? { top: a, right: a, bottom: a, left: a }
								: function (e) {
										return A(A({}, e), {}, M({}, n, a));
								  }
						);
					};
				return (
					z(
						function () {
							c(i);
						},
						[i]
					),
					z(
						function () {
							g(M({}, "".concat(d, "isLinked"), f));
							var e = i.top;
							f && s({ top: e, right: e, bottom: e, left: e });
						},
						[f]
					),
					React.createElement(
						"div",
						{ className: "dimention-container" },
						React.createElement(
							"div",
							{ className: "withResWrapperInDimension" },
							React.createElement("div", { className: "dimention-label" }, u),
							React.createElement("span", {
								onClick: function () {
									return T({
										setAttributes: g,
										setPreviewDeviceType: j("core/edit-post")
											.__experimentalSetPreviewDeviceType,
									});
								},
								class: "typoResButton dashicons dashicons-desktop ".concat(
									"Desktop" === m ? "active" : " "
								),
							}),
							React.createElement("span", {
								onClick: function () {
									return S({
										setAttributes: g,
										setPreviewDeviceType: j("core/edit-post")
											.__experimentalSetPreviewDeviceType,
									});
								},
								class: "typoResButton dashicons dashicons-tablet ".concat(
									"Tablet" === m ? "active" : " "
								),
							}),
							React.createElement("span", {
								onClick: function () {
									return O({
										setAttributes: g,
										setPreviewDeviceType: j("core/edit-post")
											.__experimentalSetPreviewDeviceType,
									});
								},
								class: "typoResButton dashicons dashicons-smartphone ".concat(
									"Mobile" === m ? "active" : " "
								),
							})
						),
						React.createElement(
							"div",
							{ className: "input-container" },
							React.createElement(
								"div",
								{ className: "input-wrapper" },
								React.createElement("input", {
									type: "number",
									name: "top",
									value: i.top,
									onChange: y,
								}),
								React.createElement(
									"label",
									{ className: "dimentions-input-label" },
									p ? " " : "Top"
								)
							),
							React.createElement(
								"div",
								{ className: "input-wrapper" },
								React.createElement("input", {
									type: "number",
									name: "right",
									value: i.right,
									onChange: y,
								}),
								React.createElement(
									"label",
									{ className: "dimentions-input-label" },
									p ? " " : "Right"
								)
							),
							React.createElement(
								"div",
								{ className: "input-wrapper" },
								React.createElement("input", {
									type: "number",
									name: "bottom",
									value: i.bottom,
									onChange: y,
								}),
								React.createElement(
									"label",
									{ className: "dimentions-input-label" },
									p ? " " : "Bottom"
								)
							),
							React.createElement(
								"div",
								{ className: "input-wrapper" },
								React.createElement("input", {
									type: "number",
									name: "left",
									value: i.left,
									onChange: y,
								}),
								React.createElement(
									"label",
									{ className: "dimentions-input-label" },
									p ? " " : "Left"
								)
							),
							React.createElement("button", {
								className: "linked-btn components-button is-button dashicons dashicons-".concat(
									f ? "admin-links is-primary" : "editor-unlink is-default"
								),
								onClick: function () {
									return h(!f);
								},
							})
						)
					)
				);
			}
			var Y = wp.components,
				X = Y.ButtonGroup,
				q = Y.Button,
				H = function (e) {
					var t = e.selectedUnit,
						n = e.unitTypes,
						a = e.onClick;
					return React.createElement(
						X,
						{ className: "eb-unit-control-btn-group" },
						n.map(function (e) {
							return React.createElement(
								q,
								{
									className: "eb-unit-control-btn ".concat(
										e.value === t && "eb-unit-active"
									),
									isSmall: !0,
									isPrimary: e.value === t,
									onClick: function () {
										return a(e.value);
									},
								},
								e.label
							);
						})
					);
				};
			function W(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function G(e) {
				var t = e.resRequiredProps,
					n = e.controlName,
					a = e.baseLabel,
					o = e.forBorderRadius,
					c = t.attributes,
					r = t.setAttributes,
					l = t.resOption,
					i = c["".concat(n, "isLinked")],
					s = c["".concat(n, "Unit")],
					u = c["".concat(n, "Top")],
					m = c["".concat(n, "Right")],
					p = c["".concat(n, "Bottom")],
					g = c["".concat(n, "Left")],
					b = c["TAB".concat(n, "Unit")],
					d = c["TAB".concat(n, "Top")],
					v = c["TAB".concat(n, "Right")],
					f = c["TAB".concat(n, "Bottom")],
					h = c["TAB".concat(n, "Left")],
					y = c["MOB".concat(n, "Unit")],
					R = c["MOB".concat(n, "Top")],
					x = c["MOB".concat(n, "Right")],
					C = c["MOB".concat(n, "Bottom")],
					_ = c["MOB".concat(n, "Left")],
					E = [
						{ label: "px", value: "px" },
						{ label: "em", value: "em" },
						{ label: "%", value: "%" },
					],
					T = {
						resOption: l,
						baseLabel: a,
						forBorderRadius: o,
						setAttributes: r,
						dimensionIsLinked: i,
						controlName: n,
					};
				return React.createElement(
					React.Fragment,
					null,
					"Desktop" == l &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(H, {
								selectedUnit: s,
								unitTypes: E,
								onClick: function (e) {
									return r(W({}, "".concat(n, "Unit"), e));
								},
							}),
							React.createElement(N, {
								top: u,
								right: m,
								bottom: p,
								left: g,
								neededProps: T,
								onChange: function (e) {
									var t,
										a = e.top,
										o = e.right,
										c = e.bottom,
										l = e.left;
									return r(
										(W((t = {}), "".concat(n, "Top"), a),
										W(t, "".concat(n, "Right"), o),
										W(t, "".concat(n, "Bottom"), c),
										W(t, "".concat(n, "Left"), l),
										t)
									);
								},
							})
						),
					"Tablet" == l &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(H, {
								selectedUnit: b,
								unitTypes: E,
								onClick: function (e) {
									return r(W({}, "TAB".concat(n, "Unit"), e));
								},
							}),
							React.createElement(N, {
								top: d,
								right: v,
								bottom: f,
								left: h,
								neededProps: T,
								onChange: function (e) {
									var t,
										a = e.top,
										o = e.right,
										c = e.bottom,
										l = e.left;
									return r(
										(W((t = {}), "TAB".concat(n, "Top"), a),
										W(t, "TAB".concat(n, "Right"), o),
										W(t, "TAB".concat(n, "Bottom"), c),
										W(t, "TAB".concat(n, "Left"), l),
										t)
									);
								},
							})
						),
					"Mobile" == l &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(H, {
								selectedUnit: y,
								unitTypes: E,
								onClick: function (e) {
									return r(W({}, "MOB".concat(n, "Unit"), e));
								},
							}),
							React.createElement(N, {
								top: R,
								right: x,
								bottom: C,
								left: _,
								neededProps: T,
								onChange: function (e) {
									var t,
										a = e.top,
										o = e.right,
										c = e.bottom,
										l = e.left;
									return r(
										(W((t = {}), "MOB".concat(n, "Top"), a),
										W(t, "MOB".concat(n, "Right"), o),
										W(t, "MOB".concat(n, "Bottom"), c),
										W(t, "MOB".concat(n, "Left"), l),
										t)
									);
								},
							})
						)
				);
			}
			function K() {
				return (K =
					Object.assign ||
					function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n)
								Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
						}
						return e;
					}).apply(this, arguments);
			}
			function V(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			function $(e, t) {
				if (e) {
					if ("string" == typeof e) return V(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? V(e, t)
							: void 0
					);
				}
			}
			function J(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var a,
								o,
								c = [],
								_n = !0,
								r = !1;
							try {
								for (
									n = n.call(e);
									!(_n = (a = n.next()).done) &&
									(c.push(a.value), !t || c.length !== t);
									_n = !0
								);
							} catch (e) {
								(r = !0), (o = e);
							} finally {
								try {
									_n || null == n.return || n.return();
								} finally {
									if (r) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					$(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function Q(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function Z(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? Object(arguments[t]) : {},
						a = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols &&
						(a = a.concat(
							Object.getOwnPropertySymbols(n).filter(function (e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable;
							})
						)),
						a.forEach(function (t) {
							Q(e, t, n[t]);
						});
				}
				return e;
			}
			function ee(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function");
			}
			function te(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					(a.enumerable = a.enumerable || !1),
						(a.configurable = !0),
						"value" in a && (a.writable = !0),
						Object.defineProperty(e, a.key, a);
				}
			}
			function ne(e, t, n) {
				return t && te(e.prototype, t), n && te(e, n), e;
			}
			var ae = n(5),
				oe = n.n(ae);
			function ce(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function re(e, t) {
				return !t || ("object" !== oe()(t) && "function" != typeof t)
					? ce(e)
					: t;
			}
			function le(e) {
				return (le = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e);
					  })(e);
			}
			function ie(e, t) {
				return (ie =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e;
					})(e, t);
			}
			function se(e, t) {
				if ("function" != typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					t && ie(e, t);
			}
			var ue = n(1),
				me = n.n(ue),
				pe = n(0),
				ge = n.n(pe),
				be = n(3),
				de = n(2),
				ve = n.n(de);
			var fe = (function () {
				function e() {
					ee(this, e), Q(this, "refs", {});
				}
				return (
					ne(e, [
						{
							key: "add",
							value: function (e, t) {
								this.refs[e] || (this.refs[e] = []), this.refs[e].push(t);
							},
						},
						{
							key: "remove",
							value: function (e, t) {
								var n = this.getIndex(e, t);
								-1 !== n && this.refs[e].splice(n, 1);
							},
						},
						{
							key: "isActive",
							value: function () {
								return this.active;
							},
						},
						{
							key: "getActive",
							value: function () {
								var e = this;
								return this.refs[this.active.collection].find(function (t) {
									return t.node.sortableInfo.index == e.active.index;
								});
							},
						},
						{
							key: "getIndex",
							value: function (e, t) {
								return this.refs[e].indexOf(t);
							},
						},
						{
							key: "getOrderedRefs",
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: this.active.collection;
								return this.refs[e].sort(he);
							},
						},
					]),
					e
				);
			})();
			function he(e, t) {
				return e.node.sortableInfo.index - t.node.sortableInfo.index;
			}
			function ye(e, t) {
				return Object.keys(e).reduce(function (n, a) {
					return -1 === t.indexOf(a) && (n[a] = e[a]), n;
				}, {});
			}
			var Re = {
					end: ["touchend", "touchcancel", "mouseup"],
					move: ["touchmove", "mousemove"],
					start: ["touchstart", "mousedown"],
				},
				xe = (function () {
					if ("undefined" == typeof window || "undefined" == typeof document)
						return "";
					var e = window.getComputedStyle(document.documentElement, "") || [
							"-moz-hidden-iframe",
						],
						t = (Array.prototype.slice
							.call(e)
							.join("")
							.match(/-(moz|webkit|ms)-/) ||
							("" === e.OLink && ["", "o"]))[1];
					switch (t) {
						case "ms":
							return "ms";
						default:
							return t && t.length ? t[0].toUpperCase() + t.substr(1) : "";
					}
				})();
			function Ce(e, t) {
				Object.keys(t).forEach(function (n) {
					e.style[n] = t[n];
				});
			}
			function _e(e, t) {
				e.style["".concat(xe, "Transform")] =
					null == t
						? ""
						: "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)");
			}
			function Ee(e, t) {
				e.style["".concat(xe, "TransitionDuration")] =
					null == t ? "" : "".concat(t, "ms");
			}
			function Te(e, t) {
				for (; e; ) {
					if (t(e)) return e;
					e = e.parentNode;
				}
				return null;
			}
			function Se(e, t, n) {
				return Math.max(e, Math.min(n, t));
			}
			function Oe(e) {
				return "px" === e.substr(-2) ? parseFloat(e) : 0;
			}
			function Ie(e) {
				var t = window.getComputedStyle(e);
				return {
					bottom: Oe(t.marginBottom),
					left: Oe(t.marginLeft),
					right: Oe(t.marginRight),
					top: Oe(t.marginTop),
				};
			}
			function Be(e, t) {
				var n = t.displayName || t.name;
				return n ? "".concat(e, "(").concat(n, ")") : e;
			}
			function we(e, t) {
				var n = e.getBoundingClientRect();
				return { top: n.top + t.top, left: n.left + t.left };
			}
			function Pe(e) {
				return e.touches && e.touches.length
					? { x: e.touches[0].pageX, y: e.touches[0].pageY }
					: e.changedTouches && e.changedTouches.length
					? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
					: { x: e.pageX, y: e.pageY };
			}
			function ke(e) {
				return (
					(e.touches && e.touches.length) ||
					(e.changedTouches && e.changedTouches.length)
				);
			}
			function Ae(e, t) {
				var n =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: { left: 0, top: 0 };
				if (e) {
					var a = { left: n.left + e.offsetLeft, top: n.top + e.offsetTop };
					return e.parentNode === t ? a : Ae(e.parentNode, t, a);
				}
			}
			function Me(e, t, n) {
				return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e;
			}
			function Ue(e) {
				var t = e.lockOffset,
					n = e.width,
					a = e.height,
					o = t,
					c = t,
					r = "px";
				if ("string" == typeof t) {
					var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
					ve()(
						null !== l,
						'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',
						t
					),
						(o = parseFloat(t)),
						(c = parseFloat(t)),
						(r = l[1]);
				}
				return (
					ve()(
						isFinite(o) && isFinite(c),
						"lockOffset value should be a finite. Given %s",
						t
					),
					"%" === r && ((o = (o * n) / 100), (c = (c * a) / 100)),
					{ x: o, y: c }
				);
			}
			function De(e) {
				var t = e.height,
					n = e.width,
					a = e.lockOffset,
					o = Array.isArray(a) ? a : [a, a];
				ve()(
					2 === o.length,
					"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",
					a
				);
				var c = J(o, 2),
					r = c[0],
					l = c[1];
				return [
					Ue({ height: t, lockOffset: r, width: n }),
					Ue({ height: t, lockOffset: l, width: n }),
				];
			}
			function Fe(e) {
				return e instanceof HTMLElement
					? (function (e) {
							var t = window.getComputedStyle(e),
								n = /(auto|scroll)/;
							return ["overflow", "overflowX", "overflowY"].find(function (e) {
								return n.test(t[e]);
							});
					  })(e)
						? e
						: Fe(e.parentNode)
					: null;
			}
			function ze(e) {
				var t = window.getComputedStyle(e);
				return "grid" === t.display
					? { x: Oe(t.gridColumnGap), y: Oe(t.gridRowGap) }
					: { x: 0, y: 0 };
			}
			var Le = "BUTTON",
				je = "INPUT",
				Ne = "OPTION",
				Ye = "TEXTAREA",
				Xe = "SELECT";
			function qe(e) {
				var t,
					n = "input, textarea, select, canvas, [contenteditable]",
					a = e.querySelectorAll(n),
					o = e.cloneNode(!0);
				return (
					((t = o.querySelectorAll(n)),
					(function (e) {
						if (Array.isArray(e)) return V(e);
					})(t) ||
						(function (e) {
							if (
								("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
								null != e["@@iterator"]
							)
								return Array.from(e);
						})(t) ||
						$(t) ||
						(function () {
							throw new TypeError(
								"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
							);
						})()).forEach(function (e, t) {
						"file" !== e.type && (e.value = a[t].value),
							"radio" === e.type &&
								e.name &&
								(e.name = "__sortableClone__".concat(e.name)),
							"CANVAS" === e.tagName &&
								a[t].width > 0 &&
								a[t].height > 0 &&
								e.getContext("2d").drawImage(a[t], 0, 0);
					}),
					o
				);
			}
			function He(e) {
				return null != e.sortableHandle;
			}
			var We = (function () {
					function e(t, n) {
						ee(this, e), (this.container = t), (this.onScrollCallback = n);
					}
					return (
						ne(e, [
							{
								key: "clear",
								value: function () {
									null != this.interval &&
										(clearInterval(this.interval), (this.interval = null));
								},
							},
							{
								key: "update",
								value: function (e) {
									var t = this,
										n = e.translate,
										a = e.minTranslate,
										o = e.maxTranslate,
										c = e.width,
										r = e.height,
										l = { x: 0, y: 0 },
										i = { x: 1, y: 1 },
										s = this.container,
										u = s.scrollTop,
										m = s.scrollLeft,
										p = s.scrollHeight,
										g = s.scrollWidth,
										b = 0 === u,
										d = p - u - s.clientHeight == 0,
										v = 0 === m,
										f = g - m - s.clientWidth == 0;
									n.y >= o.y - r / 2 && !d
										? ((l.y = 1),
										  (i.y = 10 * Math.abs((o.y - r / 2 - n.y) / r)))
										: n.x >= o.x - c / 2 && !f
										? ((l.x = 1),
										  (i.x = 10 * Math.abs((o.x - c / 2 - n.x) / c)))
										: n.y <= a.y + r / 2 && !b
										? ((l.y = -1),
										  (i.y = 10 * Math.abs((n.y - r / 2 - a.y) / r)))
										: n.x <= a.x + c / 2 &&
										  !v &&
										  ((l.x = -1),
										  (i.x = 10 * Math.abs((n.x - c / 2 - a.x) / c))),
										this.interval &&
											(this.clear(), (this.isAutoScrolling = !1)),
										(0 === l.x && 0 === l.y) ||
											(this.interval = setInterval(function () {
												t.isAutoScrolling = !0;
												var e = { left: i.x * l.x, top: i.y * l.y };
												(t.container.scrollTop += e.top),
													(t.container.scrollLeft += e.left),
													t.onScrollCallback(e);
											}, 5));
								},
							},
						]),
						e
					);
				})(),
				Ge = {
					axis: ge.a.oneOf(["x", "y", "xy"]),
					contentWindow: ge.a.any,
					disableAutoscroll: ge.a.bool,
					distance: ge.a.number,
					getContainer: ge.a.func,
					getHelperDimensions: ge.a.func,
					helperClass: ge.a.string,
					helperContainer: ge.a.oneOfType([
						ge.a.func,
						"undefined" == typeof HTMLElement
							? ge.a.any
							: ge.a.instanceOf(HTMLElement),
					]),
					hideSortableGhost: ge.a.bool,
					keyboardSortingTransitionDuration: ge.a.number,
					lockAxis: ge.a.string,
					lockOffset: ge.a.oneOfType([
						ge.a.number,
						ge.a.string,
						ge.a.arrayOf(ge.a.oneOfType([ge.a.number, ge.a.string])),
					]),
					lockToContainerEdges: ge.a.bool,
					onSortEnd: ge.a.func,
					onSortMove: ge.a.func,
					onSortOver: ge.a.func,
					onSortStart: ge.a.func,
					pressDelay: ge.a.number,
					pressThreshold: ge.a.number,
					keyCodes: ge.a.shape({
						lift: ge.a.arrayOf(ge.a.number),
						drop: ge.a.arrayOf(ge.a.number),
						cancel: ge.a.arrayOf(ge.a.number),
						up: ge.a.arrayOf(ge.a.number),
						down: ge.a.arrayOf(ge.a.number),
					}),
					shouldCancelStart: ge.a.func,
					transitionDuration: ge.a.number,
					updateBeforeSortStart: ge.a.func,
					useDragHandle: ge.a.bool,
					useWindowAsScrollContainer: ge.a.bool,
				},
				Ke = {
					lift: [32],
					drop: [32],
					cancel: [27],
					up: [38, 37],
					down: [40, 39],
				},
				Ve = {
					axis: "y",
					disableAutoscroll: !1,
					distance: 0,
					getHelperDimensions: function (e) {
						var t = e.node;
						return { height: t.offsetHeight, width: t.offsetWidth };
					},
					hideSortableGhost: !0,
					lockOffset: "50%",
					lockToContainerEdges: !1,
					pressDelay: 0,
					pressThreshold: 5,
					keyCodes: Ke,
					shouldCancelStart: function (e) {
						return (
							-1 !== [je, Ye, Xe, Ne, Le].indexOf(e.target.tagName) ||
							!!Te(e.target, function (e) {
								return "true" === e.contentEditable;
							})
						);
					},
					transitionDuration: 300,
					useWindowAsScrollContainer: !1,
				},
				$e = Object.keys(Ge);
			function Je(e) {
				ve()(
					!(e.distance && e.pressDelay),
					"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."
				);
			}
			function Qe(e, t) {
				try {
					var n = e();
				} catch (e) {
					return t(!0, e);
				}
				return n && n.then
					? n.then(t.bind(null, !1), t.bind(null, !0))
					: t(!1, value);
			}
			var Ze = {
					index: ge.a.number.isRequired,
					collection: ge.a.oneOfType([ge.a.number, ge.a.string]),
					disabled: ge.a.bool,
				},
				et = Object.keys(Ze),
				tt = n(6),
				nt = n.n(tt);
			function at(e) {
				return (at =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			function ot(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return ct(e);
					})(e) ||
					(function (e) {
						if (
							("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
							null != e["@@iterator"]
						)
							return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return ct(e, void 0);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? ct(e, void 0)
									: void 0
							);
						}
					})(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function ct(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			function rt(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function");
			}
			function lt(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					(a.enumerable = a.enumerable || !1),
						(a.configurable = !0),
						"value" in a && (a.writable = !0),
						Object.defineProperty(e, a.key, a);
				}
			}
			function it(e, t) {
				return (it =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e;
					})(e, t);
			}
			function st(e, t) {
				return !t || ("object" !== at(t) && "function" != typeof t) ? ut(e) : t;
			}
			function ut(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function mt(e) {
				return (mt = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e);
					  })(e);
			}
			function pt(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var gt = wp.element.Component,
				bt = {
					fontSize: 14,
					borderLeft: "1px solid #b4b4cb",
					lineHeight: "2.5em",
					flex: 2,
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
				},
				dt = (function (e) {
					var t,
						n,
						a =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: { withRef: !1 };
					return (
						(n = t = (function (t) {
							function n() {
								return ee(this, n), re(this, le(n).apply(this, arguments));
							}
							return (
								se(n, t),
								ne(n, [
									{
										key: "componentDidMount",
										value: function () {
											Object(be.findDOMNode)(this).sortableHandle = !0;
										},
									},
									{
										key: "getWrappedInstance",
										value: function () {
											return (
												ve()(
													a.withRef,
													"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"
												),
												this.refs.wrappedInstance
											);
										},
									},
									{
										key: "render",
										value: function () {
											var t = a.withRef ? "wrappedInstance" : null;
											return Object(ue.createElement)(
												e,
												K({ ref: t }, this.props)
											);
										},
									},
								]),
								n
							);
						})(ue.Component)),
						Q(t, "displayName", Be("sortableHandle", e)),
						n
					);
				})(function () {
					return React.createElement(
						"span",
						{ className: "drag-handle" },
						React.createElement(
							"svg",
							{
								xmlns: "http://www.w3.org/2000/svg",
								x: "0",
								y: "0",
								enableBackground: "new 0 0 512 512",
								version: "1.1",
								viewBox: "0 0 512 512",
								xmlSpace: "preserve",
								style: { height: 14 },
							},
							React.createElement("path", {
								d:
									"M512 256L402.6 146.6 402.6 210.3 301 210.3 301 109.4 365.4 109.4 256 0 146.6 109.4 211 109.4 211 210.3 109.4 210.3 109.4 146.6 0 256 109.4 365.4 109.4 300.3 211 300.3 211 402.6 146.6 402.6 256 512 365.4 402.6 301 402.6 301 300.3 402.6 300.3 402.6 365.4z",
								style: { fill: "#a9a9a9" },
							})
						)
					);
				}),
				vt = function (e) {
					var t = e.position,
						n = e.onDeleteItem;
					return React.createElement(
						"span",
						{
							className: "eb-social-delete-icon",
							style: bt,
							onClick: function () {
								return n(t);
							},
						},
						React.createElement(
							"svg",
							{
								xmlns: "http://www.w3.org/2000/svg",
								x: "0",
								y: "0",
								enableBackground: "new 0 0 512 512",
								version: "1.1",
								viewBox: "0 0 512 512",
								xmlSpace: "preserve",
								style: { width: 14 },
							},
							React.createElement("path", {
								d:
									"M423.3 86.6H89c-16.8.1-32.2 9.3-40.1 24.1-7.9 14.8-7.1 32.7 2.2 46.8l37.2 55.6V456c0 30.9 25.1 56 56 56h223.9c30.9 0 56-25.1 56-56V213.1l37.2-56c9.1-14 9.8-31.8 1.9-46.5-8.1-14.7-23.4-23.9-40-24zm-198 347c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2V220.9c0-13.9 11.3-25.2 25.2-25.2 13.9 0 25.2 11.3 25.2 25.2v212.7zm112 0c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2V220.9c0-13.9 11.3-25.2 25.2-25.2 13.9 0 25.2 11.3 25.2 25.2v212.7zM325.8 19.4C309.9 7.1 290.2 0 269.3 0h-26.4c-20.9 0-40.6 7.1-56.5 19.4-11.2 8.7-20.5 20.1-26.9 33.4h193.1c-6.3-13.3-15.6-24.7-26.8-33.4z",
								style: { fill: "#FF6464" },
							})
						)
					);
				},
				ft = (function (e) {
					var t,
						n,
						a =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: { withRef: !1 };
					return (
						(n = t = (function (t) {
							function n() {
								return ee(this, n), re(this, le(n).apply(this, arguments));
							}
							return (
								se(n, t),
								ne(n, [
									{
										key: "componentDidMount",
										value: function () {
											this.register();
										},
									},
									{
										key: "componentDidUpdate",
										value: function (e) {
											this.node &&
												(e.index !== this.props.index &&
													(this.node.sortableInfo.index = this.props.index),
												e.disabled !== this.props.disabled &&
													(this.node.sortableInfo.disabled = this.props.disabled)),
												e.collection !== this.props.collection &&
													(this.unregister(e.collection), this.register());
										},
									},
									{
										key: "componentWillUnmount",
										value: function () {
											this.unregister();
										},
									},
									{
										key: "register",
										value: function () {
											var e = this.props,
												t = e.collection,
												n = e.disabled,
												a = e.index,
												o = Object(be.findDOMNode)(this);
											(o.sortableInfo = {
												collection: t,
												disabled: n,
												index: a,
												manager: this.context.manager,
											}),
												(this.node = o),
												(this.ref = { node: o }),
												this.context.manager.add(t, this.ref);
										},
									},
									{
										key: "unregister",
										value: function () {
											var e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: this.props.collection;
											this.context.manager.remove(e, this.ref);
										},
									},
									{
										key: "getWrappedInstance",
										value: function () {
											return (
												ve()(
													a.withRef,
													"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"
												),
												this.refs.wrappedInstance
											);
										},
									},
									{
										key: "render",
										value: function () {
											var t = a.withRef ? "wrappedInstance" : null;
											return Object(ue.createElement)(
												e,
												K({ ref: t }, ye(this.props, et))
											);
										},
									},
								]),
								n
							);
						})(ue.Component)),
						Q(t, "displayName", Be("sortableElement", e)),
						Q(t, "contextTypes", { manager: ge.a.object.isRequired }),
						Q(t, "propTypes", Ze),
						Q(t, "defaultProps", { collection: 0 }),
						n
					);
				})(function (e) {
					var t = e.text,
						n = e.position,
						a = e.onTitleClick,
						o = e.onTextChange,
						c = e.clickedIndex,
						r = e.onDeleteItem;
					return React.createElement(
						"li",
						{ className: "drag-helper" },
						React.createElement(
							"span",
							{ className: "eb-typed-sortable-item" },
							React.createElement(
								"span",
								{
									className: "eb-typed-sortable-title",
									onClick: function () {
										return a(n);
									},
								},
								t
							),
							React.createElement(dt, null),
							React.createElement(vt, { position: n, onDeleteItem: r })
						),
						c === n &&
							React.createElement(
								"div",
								{ className: "eb-typed-input-wrapper" },
								React.createElement("input", {
									type: "text",
									value: t,
									onChange: function () {
										return o(event, n);
									},
									placeholder: "Add text",
								})
							)
					);
				}),
				ht = (function (e) {
					var t,
						n,
						a =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: { withRef: !1 };
					return (
						(n = t = (function (t) {
							function n(e) {
								var t;
								return (
									ee(this, n),
									Q(ce(ce((t = re(this, le(n).call(this, e))))), "state", {}),
									Q(ce(ce(t)), "handleStart", function (e) {
										var n = t.props,
											a = n.distance,
											o = n.shouldCancelStart;
										if (2 !== e.button && !o(e)) {
											(t.touched = !0), (t.position = Pe(e));
											var c = Te(e.target, function (e) {
												return null != e.sortableInfo;
											});
											if (
												c &&
												c.sortableInfo &&
												t.nodeIsChild(c) &&
												!t.state.sorting
											) {
												var r = t.props.useDragHandle,
													l = c.sortableInfo,
													i = l.index,
													s = l.collection;
												if (l.disabled) return;
												if (r && !Te(e.target, He)) return;
												(t.manager.active = { collection: s, index: i }),
													ke(e) ||
														"A" !== e.target.tagName ||
														e.preventDefault(),
													a ||
														(0 === t.props.pressDelay
															? t.handlePress(e)
															: (t.pressTimer = setTimeout(function () {
																	return t.handlePress(e);
															  }, t.props.pressDelay)));
											}
										}
									}),
									Q(ce(ce(t)), "nodeIsChild", function (e) {
										return e.sortableInfo.manager === t.manager;
									}),
									Q(ce(ce(t)), "handleMove", function (e) {
										var n = t.props,
											a = n.distance,
											o = n.pressThreshold;
										if (
											!t.state.sorting &&
											t.touched &&
											!t._awaitingUpdateBeforeSortStart
										) {
											var c = Pe(e),
												r = { x: t.position.x - c.x, y: t.position.y - c.y },
												l = Math.abs(r.x) + Math.abs(r.y);
											(t.delta = r),
												a || (o && !(l >= o))
													? a &&
													  l >= a &&
													  t.manager.isActive() &&
													  t.handlePress(e)
													: (clearTimeout(t.cancelTimer),
													  (t.cancelTimer = setTimeout(t.cancel, 0)));
										}
									}),
									Q(ce(ce(t)), "handleEnd", function () {
										(t.touched = !1), t.cancel();
									}),
									Q(ce(ce(t)), "cancel", function () {
										var e = t.props.distance;
										t.state.sorting ||
											(e || clearTimeout(t.pressTimer),
											(t.manager.active = null));
									}),
									Q(ce(ce(t)), "handlePress", function (e) {
										try {
											var n = t.manager.getActive(),
												a = (function () {
													if (n) {
														var a = function () {
																var n = p.sortableInfo.index,
																	a = Ie(p),
																	o = ze(t.container),
																	s = t.scrollContainer.getBoundingClientRect(),
																	d = r({ index: n, node: p, collection: g });
																if (
																	((t.node = p),
																	(t.margin = a),
																	(t.gridGap = o),
																	(t.width = d.width),
																	(t.height = d.height),
																	(t.marginOffset = {
																		x:
																			t.margin.left +
																			t.margin.right +
																			t.gridGap.x,
																		y: Math.max(
																			t.margin.top,
																			t.margin.bottom,
																			t.gridGap.y
																		),
																	}),
																	(t.boundingClientRect = p.getBoundingClientRect()),
																	(t.containerBoundingRect = s),
																	(t.index = n),
																	(t.newIndex = n),
																	(t.axis = {
																		x: c.indexOf("x") >= 0,
																		y: c.indexOf("y") >= 0,
																	}),
																	(t.offsetEdge = Ae(p, t.container)),
																	(t.initialOffset = Pe(
																		b
																			? Z({}, e, {
																					pageX: t.boundingClientRect.left,
																					pageY: t.boundingClientRect.top,
																			  })
																			: e
																	)),
																	(t.initialScroll = {
																		left: t.scrollContainer.scrollLeft,
																		top: t.scrollContainer.scrollTop,
																	}),
																	(t.initialWindowScroll = {
																		left: window.pageXOffset,
																		top: window.pageYOffset,
																	}),
																	(t.helper = t.helperContainer.appendChild(
																		qe(p)
																	)),
																	Ce(t.helper, {
																		boxSizing: "border-box",
																		height: "".concat(t.height, "px"),
																		left: "".concat(
																			t.boundingClientRect.left - a.left,
																			"px"
																		),
																		pointerEvents: "none",
																		position: "fixed",
																		top: "".concat(
																			t.boundingClientRect.top - a.top,
																			"px"
																		),
																		width: "".concat(t.width, "px"),
																	}),
																	b && t.helper.focus(),
																	i &&
																		((t.sortableGhost = p),
																		Ce(p, {
																			opacity: 0,
																			visibility: "hidden",
																		})),
																	(t.minTranslate = {}),
																	(t.maxTranslate = {}),
																	b)
																) {
																	var v = m
																			? {
																					top: 0,
																					left: 0,
																					width: t.contentWindow.innerWidth,
																					height: t.contentWindow.innerHeight,
																			  }
																			: t.containerBoundingRect,
																		f = v.top,
																		h = v.left,
																		y = v.width,
																		R = f + v.height,
																		x = h + y;
																	t.axis.x &&
																		((t.minTranslate.x =
																			h - t.boundingClientRect.left),
																		(t.maxTranslate.x =
																			x -
																			(t.boundingClientRect.left + t.width))),
																		t.axis.y &&
																			((t.minTranslate.y =
																				f - t.boundingClientRect.top),
																			(t.maxTranslate.y =
																				R -
																				(t.boundingClientRect.top + t.height)));
																} else
																	t.axis.x &&
																		((t.minTranslate.x =
																			(m ? 0 : s.left) -
																			t.boundingClientRect.left -
																			t.width / 2),
																		(t.maxTranslate.x =
																			(m
																				? t.contentWindow.innerWidth
																				: s.left + s.width) -
																			t.boundingClientRect.left -
																			t.width / 2)),
																		t.axis.y &&
																			((t.minTranslate.y =
																				(m ? 0 : s.top) -
																				t.boundingClientRect.top -
																				t.height / 2),
																			(t.maxTranslate.y =
																				(m
																					? t.contentWindow.innerHeight
																					: s.top + s.height) -
																				t.boundingClientRect.top -
																				t.height / 2));
																l &&
																	l.split(" ").forEach(function (e) {
																		return t.helper.classList.add(e);
																	}),
																	(t.listenerNode = e.touches
																		? p
																		: t.contentWindow),
																	b
																		? (t.listenerNode.addEventListener(
																				"wheel",
																				t.handleKeyEnd,
																				!0
																		  ),
																		  t.listenerNode.addEventListener(
																				"mousedown",
																				t.handleKeyEnd,
																				!0
																		  ),
																		  t.listenerNode.addEventListener(
																				"keydown",
																				t.handleKeyDown
																		  ))
																		: (Re.move.forEach(function (e) {
																				return t.listenerNode.addEventListener(
																					e,
																					t.handleSortMove,
																					!1
																				);
																		  }),
																		  Re.end.forEach(function (e) {
																				return t.listenerNode.addEventListener(
																					e,
																					t.handleSortEnd,
																					!1
																				);
																		  })),
																	t.setState({ sorting: !0, sortingIndex: n }),
																	u &&
																		u(
																			{
																				node: p,
																				index: n,
																				collection: g,
																				isKeySorting: b,
																				nodes: t.manager.getOrderedRefs(),
																				helper: t.helper,
																			},
																			e
																		),
																	b && t.keyMove(0);
															},
															o = t.props,
															c = o.axis,
															r = o.getHelperDimensions,
															l = o.helperClass,
															i = o.hideSortableGhost,
															s = o.updateBeforeSortStart,
															u = o.onSortStart,
															m = o.useWindowAsScrollContainer,
															p = n.node,
															g = n.collection,
															b = t.manager.isKeySorting,
															d = (function () {
																if ("function" == typeof s) {
																	t._awaitingUpdateBeforeSortStart = !0;
																	var n = Qe(
																		function () {
																			var t = p.sortableInfo.index;
																			return Promise.resolve(
																				s(
																					{
																						collection: g,
																						index: t,
																						node: p,
																						isKeySorting: b,
																					},
																					e
																				)
																			).then(function () {});
																		},
																		function (e, n) {
																			if (
																				((t._awaitingUpdateBeforeSortStart = !1),
																				e)
																			)
																				throw n;
																			return n;
																		}
																	);
																	if (n && n.then)
																		return n.then(function () {});
																}
															})();
														return d && d.then ? d.then(a) : a();
													}
												})();
											return Promise.resolve(
												a && a.then ? a.then(function () {}) : void 0
											);
										} catch (e) {
											return Promise.reject(e);
										}
									}),
									Q(ce(ce(t)), "handleSortMove", function (e) {
										var n = t.props.onSortMove;
										"function" == typeof e.preventDefault && e.preventDefault(),
											t.updateHelperPosition(e),
											t.animateNodes(),
											t.autoscroll(),
											n && n(e);
									}),
									Q(ce(ce(t)), "handleSortEnd", function (e) {
										var n = t.props,
											a = n.hideSortableGhost,
											o = n.onSortEnd,
											c = t.manager,
											r = c.active.collection,
											l = c.isKeySorting,
											i = t.manager.getOrderedRefs();
										t.listenerNode &&
											(l
												? (t.listenerNode.removeEventListener(
														"wheel",
														t.handleKeyEnd,
														!0
												  ),
												  t.listenerNode.removeEventListener(
														"mousedown",
														t.handleKeyEnd,
														!0
												  ),
												  t.listenerNode.removeEventListener(
														"keydown",
														t.handleKeyDown
												  ))
												: (Re.move.forEach(function (e) {
														return t.listenerNode.removeEventListener(
															e,
															t.handleSortMove
														);
												  }),
												  Re.end.forEach(function (e) {
														return t.listenerNode.removeEventListener(
															e,
															t.handleSortEnd
														);
												  }))),
											t.helper.parentNode.removeChild(t.helper),
											a &&
												t.sortableGhost &&
												Ce(t.sortableGhost, { opacity: "", visibility: "" });
										for (var s = 0, u = i.length; s < u; s++) {
											var m = i[s],
												p = m.node;
											(m.edgeOffset = null),
												(m.boundingClientRect = null),
												_e(p, null),
												Ee(p, null),
												(m.translate = null);
										}
										t.autoScroller.clear(),
											(t.manager.active = null),
											(t.manager.isKeySorting = !1),
											t.setState({ sorting: !1, sortingIndex: null }),
											"function" == typeof o &&
												o(
													{
														collection: r,
														newIndex: t.newIndex,
														oldIndex: t.index,
														isKeySorting: l,
														nodes: i,
													},
													e
												),
											(t.touched = !1);
									}),
									Q(ce(ce(t)), "autoscroll", function () {
										var e = t.props.disableAutoscroll,
											n = t.manager.isKeySorting;
										if (e) t.autoScroller.clear();
										else {
											if (n) {
												var a = Z({}, t.translate),
													o = 0,
													c = 0;
												return (
													t.axis.x &&
														((a.x = Math.min(
															t.maxTranslate.x,
															Math.max(t.minTranslate.x, t.translate.x)
														)),
														(o = t.translate.x - a.x)),
													t.axis.y &&
														((a.y = Math.min(
															t.maxTranslate.y,
															Math.max(t.minTranslate.y, t.translate.y)
														)),
														(c = t.translate.y - a.y)),
													(t.translate = a),
													_e(t.helper, t.translate),
													(t.scrollContainer.scrollLeft += o),
													void (t.scrollContainer.scrollTop += c)
												);
											}
											t.autoScroller.update({
												height: t.height,
												maxTranslate: t.maxTranslate,
												minTranslate: t.minTranslate,
												translate: t.translate,
												width: t.width,
											});
										}
									}),
									Q(ce(ce(t)), "onAutoScroll", function (e) {
										(t.translate.x += e.left),
											(t.translate.y += e.top),
											t.animateNodes();
									}),
									Q(ce(ce(t)), "handleKeyDown", function (e) {
										var n = e.keyCode,
											a = t.props,
											o = a.shouldCancelStart,
											c = a.keyCodes,
											r = Z({}, Ke, void 0 === c ? {} : c);
										(t.manager.active && !t.manager.isKeySorting) ||
											!(
												t.manager.active ||
												(r.lift.includes(n) &&
													!o(e) &&
													t.isValidSortingTarget(e))
											) ||
											(e.stopPropagation(),
											e.preventDefault(),
											r.lift.includes(n) && !t.manager.active
												? t.keyLift(e)
												: r.drop.includes(n) && t.manager.active
												? t.keyDrop(e)
												: r.cancel.includes(n)
												? ((t.newIndex = t.manager.active.index), t.keyDrop(e))
												: r.up.includes(n)
												? t.keyMove(-1)
												: r.down.includes(n) && t.keyMove(1));
									}),
									Q(ce(ce(t)), "keyLift", function (e) {
										var n = e.target,
											a = Te(n, function (e) {
												return null != e.sortableInfo;
											}).sortableInfo,
											o = a.index,
											c = a.collection;
										(t.initialFocusedNode = n),
											(t.manager.isKeySorting = !0),
											(t.manager.active = { index: o, collection: c }),
											t.handlePress(e);
									}),
									Q(ce(ce(t)), "keyMove", function (e) {
										var n = t.manager.getOrderedRefs(),
											a = n[n.length - 1].node.sortableInfo.index,
											o = t.newIndex + e,
											c = t.newIndex;
										if (!(o < 0 || o > a)) {
											(t.prevIndex = c), (t.newIndex = o);
											var r = Me(t.newIndex, t.prevIndex, t.index),
												l = n.find(function (e) {
													return e.node.sortableInfo.index === r;
												}),
												i = l.node,
												s = t.containerScrollDelta,
												u = l.boundingClientRect || we(i, s),
												m = l.translate || { x: 0, y: 0 },
												p = u.top + m.y - s.top,
												g = u.left + m.x - s.left,
												b = c < o,
												d = b && t.axis.x ? i.offsetWidth - t.width : 0,
												v = b && t.axis.y ? i.offsetHeight - t.height : 0;
											t.handleSortMove({
												pageX: g + d,
												pageY: p + v,
												ignoreTransition: 0 === e,
											});
										}
									}),
									Q(ce(ce(t)), "keyDrop", function (e) {
										t.handleSortEnd(e),
											t.initialFocusedNode && t.initialFocusedNode.focus();
									}),
									Q(ce(ce(t)), "handleKeyEnd", function (e) {
										t.manager.active && t.keyDrop(e);
									}),
									Q(ce(ce(t)), "isValidSortingTarget", function (e) {
										var n = t.props.useDragHandle,
											a = e.target,
											o = Te(a, function (e) {
												return null != e.sortableInfo;
											});
										return (
											o &&
											o.sortableInfo &&
											!o.sortableInfo.disabled &&
											(n ? He(a) : a.sortableInfo)
										);
									}),
									Je(e),
									(t.manager = new fe()),
									(t.events = {
										end: t.handleEnd,
										move: t.handleMove,
										start: t.handleStart,
									}),
									t
								);
							}
							return (
								se(n, t),
								ne(n, [
									{
										key: "getChildContext",
										value: function () {
											return { manager: this.manager };
										},
									},
									{
										key: "componentDidMount",
										value: function () {
											var e = this,
												t = this.props.useWindowAsScrollContainer,
												n = this.getContainer();
											Promise.resolve(n).then(function (n) {
												(e.container = n),
													(e.document = e.container.ownerDocument || document);
												var a =
													e.props.contentWindow ||
													e.document.defaultView ||
													window;
												(e.contentWindow = "function" == typeof a ? a() : a),
													(e.scrollContainer = t
														? e.document.scrollingElement ||
														  e.document.documentElement
														: Fe(e.container) || e.container),
													(e.autoScroller = new We(
														e.scrollContainer,
														e.onAutoScroll
													)),
													Object.keys(e.events).forEach(function (t) {
														return Re[t].forEach(function (n) {
															return e.container.addEventListener(
																n,
																e.events[t],
																!1
															);
														});
													}),
													e.container.addEventListener(
														"keydown",
														e.handleKeyDown
													);
											});
										},
									},
									{
										key: "componentWillUnmount",
										value: function () {
											var e = this;
											this.helper &&
												this.helper.parentNode &&
												this.helper.parentNode.removeChild(this.helper),
												this.container &&
													(Object.keys(this.events).forEach(function (t) {
														return Re[t].forEach(function (n) {
															return e.container.removeEventListener(
																n,
																e.events[t]
															);
														});
													}),
													this.container.removeEventListener(
														"keydown",
														this.handleKeyDown
													));
										},
									},
									{
										key: "updateHelperPosition",
										value: function (e) {
											var t = this.props,
												n = t.lockAxis,
												a = t.lockOffset,
												o = t.lockToContainerEdges,
												c = t.transitionDuration,
												r = t.keyboardSortingTransitionDuration,
												l = void 0 === r ? c : r,
												i = this.manager.isKeySorting,
												s = e.ignoreTransition,
												u = Pe(e),
												m = {
													x: u.x - this.initialOffset.x,
													y: u.y - this.initialOffset.y,
												};
											if (
												((m.y -=
													window.pageYOffset - this.initialWindowScroll.top),
												(m.x -=
													window.pageXOffset - this.initialWindowScroll.left),
												(this.translate = m),
												o)
											) {
												var p = J(
														De({
															height: this.height,
															lockOffset: a,
															width: this.width,
														}),
														2
													),
													g = p[0],
													b = p[1],
													d = {
														x: this.width / 2 - g.x,
														y: this.height / 2 - g.y,
													},
													v = {
														x: this.width / 2 - b.x,
														y: this.height / 2 - b.y,
													};
												(m.x = Se(
													this.minTranslate.x + d.x,
													this.maxTranslate.x - v.x,
													m.x
												)),
													(m.y = Se(
														this.minTranslate.y + d.y,
														this.maxTranslate.y - v.y,
														m.y
													));
											}
											"x" === n ? (m.y = 0) : "y" === n && (m.x = 0),
												i && l && !s && Ee(this.helper, l),
												_e(this.helper, m);
										},
									},
									{
										key: "animateNodes",
										value: function () {
											var e = this.props,
												t = e.transitionDuration,
												n = e.hideSortableGhost,
												a = e.onSortOver,
												o = this.containerScrollDelta,
												c = this.windowScrollDelta,
												r = this.manager.getOrderedRefs(),
												l = this.offsetEdge.left + this.translate.x + o.left,
												i = this.offsetEdge.top + this.translate.y + o.top,
												s = this.manager.isKeySorting,
												u = this.newIndex;
											this.newIndex = null;
											for (var m = 0, p = r.length; m < p; m++) {
												var g = r[m].node,
													b = g.sortableInfo.index,
													d = g.offsetWidth,
													v = g.offsetHeight,
													f = {
														height: this.height > v ? v / 2 : this.height / 2,
														width: this.width > d ? d / 2 : this.width / 2,
													},
													h = s && b > this.index && b <= u,
													y = s && b < this.index && b >= u,
													R = { x: 0, y: 0 },
													x = r[m].edgeOffset;
												x ||
													((x = Ae(g, this.container)),
													(r[m].edgeOffset = x),
													s && (r[m].boundingClientRect = we(g, o)));
												var C = m < r.length - 1 && r[m + 1],
													_ = m > 0 && r[m - 1];
												C &&
													!C.edgeOffset &&
													((C.edgeOffset = Ae(C.node, this.container)),
													s && (C.boundingClientRect = we(C.node, o))),
													b !== this.index
														? (t && Ee(g, t),
														  this.axis.x
																? this.axis.y
																	? y ||
																	  (b < this.index &&
																			((l + c.left - f.width <= x.left &&
																				i + c.top <= x.top + f.height) ||
																				i + c.top + f.height <= x.top))
																		? ((R.x = this.width + this.marginOffset.x),
																		  x.left + R.x >
																				this.containerBoundingRect.width -
																					f.width &&
																				C &&
																				((R.x = C.edgeOffset.left - x.left),
																				(R.y = C.edgeOffset.top - x.top)),
																		  null === this.newIndex &&
																				(this.newIndex = b))
																		: (h ||
																				(b > this.index &&
																					((l + c.left + f.width >= x.left &&
																						i + c.top + f.height >= x.top) ||
																						i + c.top + f.height >=
																							x.top + v))) &&
																		  ((R.x = -(
																				this.width + this.marginOffset.x
																		  )),
																		  x.left + R.x <
																				this.containerBoundingRect.left +
																					f.width &&
																				_ &&
																				((R.x = _.edgeOffset.left - x.left),
																				(R.y = _.edgeOffset.top - x.top)),
																		  (this.newIndex = b))
																	: h ||
																	  (b > this.index &&
																			l + c.left + f.width >= x.left)
																	? ((R.x = -(
																			this.width + this.marginOffset.x
																	  )),
																	  (this.newIndex = b))
																	: (y ||
																			(b < this.index &&
																				l + c.left <= x.left + f.width)) &&
																	  ((R.x = this.width + this.marginOffset.x),
																	  null == this.newIndex &&
																			(this.newIndex = b))
																: this.axis.y &&
																  (h ||
																  (b > this.index &&
																		i + c.top + f.height >= x.top)
																		? ((R.y = -(
																				this.height + this.marginOffset.y
																		  )),
																		  (this.newIndex = b))
																		: (y ||
																				(b < this.index &&
																					i + c.top <= x.top + f.height)) &&
																		  ((R.y =
																				this.height + this.marginOffset.y),
																		  null == this.newIndex &&
																				(this.newIndex = b))),
														  _e(g, R),
														  (r[m].translate = R))
														: n &&
														  ((this.sortableGhost = g),
														  Ce(g, { opacity: 0, visibility: "hidden" }));
											}
											null == this.newIndex && (this.newIndex = this.index),
												s && (this.newIndex = u);
											var E = s ? this.prevIndex : u;
											a &&
												this.newIndex !== E &&
												a({
													collection: this.manager.active.collection,
													index: this.index,
													newIndex: this.newIndex,
													oldIndex: E,
													isKeySorting: s,
													nodes: r,
													helper: this.helper,
												});
										},
									},
									{
										key: "getWrappedInstance",
										value: function () {
											return (
												ve()(
													a.withRef,
													"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"
												),
												this.refs.wrappedInstance
											);
										},
									},
									{
										key: "getContainer",
										value: function () {
											var e = this.props.getContainer;
											return "function" != typeof e
												? Object(be.findDOMNode)(this)
												: e(a.withRef ? this.getWrappedInstance() : void 0);
										},
									},
									{
										key: "render",
										value: function () {
											var t = a.withRef ? "wrappedInstance" : null;
											return Object(ue.createElement)(
												e,
												K({ ref: t }, ye(this.props, $e))
											);
										},
									},
									{
										key: "helperContainer",
										get: function () {
											var e = this.props.helperContainer;
											return "function" == typeof e
												? e()
												: this.props.helperContainer || this.document.body;
										},
									},
									{
										key: "containerScrollDelta",
										get: function () {
											return this.props.useWindowAsScrollContainer
												? { left: 0, top: 0 }
												: {
														left:
															this.scrollContainer.scrollLeft -
															this.initialScroll.left,
														top:
															this.scrollContainer.scrollTop -
															this.initialScroll.top,
												  };
										},
									},
									{
										key: "windowScrollDelta",
										get: function () {
											return {
												left:
													this.contentWindow.pageXOffset -
													this.initialWindowScroll.left,
												top:
													this.contentWindow.pageYOffset -
													this.initialWindowScroll.top,
											};
										},
									},
								]),
								n
							);
						})(ue.Component)),
						Q(t, "displayName", Be("sortableList", e)),
						Q(t, "defaultProps", Ve),
						Q(t, "propTypes", Ge),
						Q(t, "childContextTypes", { manager: ge.a.object.isRequired }),
						n
					);
				})(function (e) {
					var t = e.typedText,
						n = e.onTitleClick,
						a = e.onTextChange,
						o = e.clickedIndex,
						c = e.onDeleteItem;
					return React.createElement(
						"ul",
						{ className: "eb-sortable-typing-list" },
						t.map(function (e, t) {
							return React.createElement(ft, {
								key: "item-".concat(t),
								index: t,
								position: t,
								text: e.text,
								onTitleClick: n,
								onTextChange: a,
								clickedIndex: o,
								onDeleteItem: c,
							});
						})
					);
				}),
				yt = (function (e) {
					!(function (e, t) {
						if ("function" != typeof t && null !== t)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: { value: e, writable: !0, configurable: !0 },
						})),
							t && it(e, t);
					})(r, e);
					var t,
						n,
						a,
						o,
						c =
							((a = r),
							(o = (function () {
								if ("undefined" == typeof Reflect || !Reflect.construct)
									return !1;
								if (Reflect.construct.sham) return !1;
								if ("function" == typeof Proxy) return !0;
								try {
									return (
										Boolean.prototype.valueOf.call(
											Reflect.construct(Boolean, [], function () {})
										),
										!0
									);
								} catch (e) {
									return !1;
								}
							})()),
							function () {
								var e,
									t = mt(a);
								if (o) {
									var n = mt(this).constructor;
									e = Reflect.construct(t, arguments, n);
								} else e = t.apply(this, arguments);
								return st(this, e);
							});
					function r() {
						var e;
						rt(this, r);
						for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
							n[a] = arguments[a];
						return (
							pt(ut((e = c.call.apply(c, [this].concat(n)))), "state", {
								clickedIndex: null,
							}),
							pt(ut(e), "onSortEnd", function (t) {
								var n = t.oldIndex,
									a = t.newIndex,
									o = nt()(e.props.typedText, n, a);
								e.props.setAttributes({ typedText: o });
							}),
							pt(ut(e), "onTitleClick", function (t) {
								var n = e.state.clickedIndex === t ? null : t;
								e.setState({ clickedIndex: n });
							}),
							pt(ut(e), "onTextChange", function (t, n) {
								var a = ot(e.props.typedText);
								(a[n].text = t.target.value),
									e.props.setAttributes({ typedText: a });
							}),
							pt(ut(e), "onDeleteItem", function (t) {
								var n = ot(e.props.typedText).filter(function (e, n) {
									return t !== n;
								});
								e.props.setAttributes({ typedText: n });
							}),
							e
						);
					}
					return (
						(t = r),
						(n = [
							{
								key: "render",
								value: function () {
									return React.createElement(ht, {
										typedText: this.props.typedText,
										clickedIndex: this.state.clickedIndex,
										onTitleClick: this.onTitleClick,
										onTextChange: this.onTextChange,
										onDeleteItem: this.onDeleteItem,
										onSortEnd: this.onSortEnd,
										useDragHandle: !0,
									});
								},
							},
						]) && lt(t.prototype, n),
						r
					);
				})(gt),
				Rt = {
					"Abril Fatface": { weight: ["400"] },
					Anton: { weight: ["400"] },
					Arvo: { weight: ["400", "700"] },
					Asap: { weight: ["400", "500", "600", "700"] },
					"Barlow Condensed": {
						weight: [
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
						],
					},
					Barlow: {
						weight: [
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
						],
					},
					"Cormorant Garamond": { weight: ["300", "400", "500", "600", "700"] },
					Faustina: { weight: ["400", "500", "600", "700"] },
					"Fira Sans": {
						weight: [
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
						],
					},
					"IBM Plex Sans": {
						weight: ["100", "200", "300", "400", "500", "600", "700"],
					},
					Inconsolata: { weight: ["400", "700"] },
					Heebo: { weight: ["100", "300", "400", "500", "700", "800", "900"] },
					Karla: { weight: ["400", "700"] },
					Lato: {
						weight: [
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
						],
					},
					Lora: { weight: ["400", "700"] },
					Merriweather: {
						weight: ["300", "400", "500", "600", "700", "800", "900"],
					},
					Montserrat: {
						weight: [
							"100",
							"200",
							"300",
							"400",
							"500",
							"600",
							"700",
							"800",
							"900",
						],
					},
					"Noto Sans": { weight: ["400", "700"] },
					"Noto Serif": { weight: ["400", "700"] },
					"Open Sans": { weight: ["300", "400", "500", "600", "700", "800"] },
					Oswald: { weight: ["200", "300", "400", "500", "600", "700"] },
					"Playfair Display": { weight: ["400", "700", "900"] },
					"PT Serif": { weight: ["400", "700"] },
					Roboto: { weight: ["100", "300", "400", "500", "700", "900"] },
					Rubik: { weight: ["300", "400", "500", "700", "900"] },
					Tajawal: {
						weight: ["200", "300", "400", "500", "700", "800", "900"],
					},
					Ubuntu: { weight: ["300", "400", "500", "700"] },
					Yrsa: { weight: ["300", "400", "500", "600", "700"] },
				},
				xt = ["label", "value", "help", "instanceId", "onChange", "className"];
			function Ct() {
				return (Ct =
					Object.assign ||
					function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n)
								Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
						}
						return e;
					}).apply(this, arguments);
			}
			var __ = wp.i18n.__,
				_t = wp.compose.withInstanceId,
				Et = wp.components.BaseControl,
				Tt = _t(function (e) {
					var t = e.label,
						n = e.value,
						a = e.help,
						o = e.instanceId,
						c = e.onChange,
						r = e.className,
						l = (function (e, t) {
							if (null == e) return {};
							var n,
								a,
								o = (function (e, t) {
									if (null == e) return {};
									var n,
										a,
										o = {},
										c = Object.keys(e);
									for (a = 0; a < c.length; a++)
										(n = c[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
									return o;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var c = Object.getOwnPropertySymbols(e);
								for (a = 0; a < c.length; a++)
									(n = c[a]),
										t.indexOf(n) >= 0 ||
											(Object.prototype.propertyIsEnumerable.call(e, n) &&
												(o[n] = e[n]));
							}
							return o;
						})(e, xt),
						i = "inspector-eb-font-family-".concat(o),
						s = [
							{ value: "", label: __("Default") },
							{ value: "Arial", label: "Arial" },
							{ value: "Helvetica", label: "Helvetica" },
							{ value: "Times New Roman", label: "Times New Roman" },
							{ value: "Georgia", label: "Georgia" },
						];
					return (
						Object.keys(Rt).map(function (e) {
							s.push({ value: e, label: e });
						}),
						React.createElement(
							Et,
							{ label: t, id: i, help: a, className: r },
							React.createElement(
								"select",
								Ct(
									{
										id: i,
										className: "components-select-control__input",
										onChange: function (e) {
											var t = wp.data
													.select("core/editor")
													.getEditedPostAttribute("meta"),
												n = "",
												a =
													":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
												o = document.createElement("link");
											(o.rel = "stylesheet"),
												void 0 !== t &&
													void 0 !== t._eb_attr &&
													(n = t._eb_attr),
												n.length > 0
													? (n.includes(e.target.value) ||
															((o.href =
																"https://fonts.googleapis.com/css?family=" +
																e.target.value.replace(/ /g, "+") +
																a),
															document.head.appendChild(o)),
													  (n =
															(n = n.replace("," + e.target.value, "")) +
															"," +
															e.target.value))
													: ((o.href =
															"https://fonts.googleapis.com/css?family=" +
															e.target.value.replace(/ /g, "+") +
															a),
													  document.head.appendChild(o),
													  (n = e.target.value)),
												wp.data
													.dispatch("core/editor")
													.editPost({ meta: { _eb_attr: n } }),
												c(e.target.value);
										},
										"aria-describedby": a ? "".concat(i, "__help") : void 0,
									},
									l
								),
								s.map(function (e, t) {
									return React.createElement(
										"option",
										{
											key: ""
												.concat(e.label, "-")
												.concat(e.value, "-")
												.concat(t),
											value: e.value,
											selected: n === e.value ? "selected" : "",
										},
										e.label
									);
								})
							)
						)
					);
				}),
				St = function () {
					return React.createElement(
						"svg",
						{
							xmlns: "http://www.w3.org/2000/svg",
							x: "0",
							y: "0",
							enableBackground: "new 0 0 512 512",
							version: "1.1",
							viewBox: "0 0 512 512",
							xmlSpace: "preserve",
							style: { width: 14 },
						},
						React.createElement("path", {
							d:
								"M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
							className: "eb-typography-icon",
						})
					);
				},
				Ot = wp.data.dispatch;
			function It(e) {
				var t = e.className,
					n = e.children,
					a = e.resRequiredProps,
					o = e.label,
					c = a.setAttributes,
					r = a.resOption;
				return React.createElement(
					"div",
					{ className: "wrap_res ".concat(t || " ") },
					React.createElement(
						"div",
						{ className: "".concat(o ? "resBtns" : "resIcons") },
						o &&
							React.createElement(
								"span",
								{ style: { paddingRight: "5px" }, className: "resLabel" },
								o
							),
						React.createElement("span", {
							onClick: function () {
								return T({
									setAttributes: c,
									setPreviewDeviceType: Ot("core/edit-post")
										.__experimentalSetPreviewDeviceType,
								});
							},
							class: "typoResButton dashicons dashicons-desktop ".concat(
								"Desktop" === r ? "active" : " "
							),
						}),
						React.createElement("span", {
							onClick: function () {
								return S({
									setAttributes: c,
									setPreviewDeviceType: Ot("core/edit-post")
										.__experimentalSetPreviewDeviceType,
								});
							},
							class: "typoResButton dashicons dashicons-tablet ".concat(
								"Tablet" === r ? "active" : " "
							),
						}),
						React.createElement("span", {
							onClick: function () {
								return O({
									setAttributes: c,
									setPreviewDeviceType: Ot("core/edit-post")
										.__experimentalSetPreviewDeviceType,
								});
							},
							class: "typoResButton dashicons dashicons-smartphone ".concat(
								"Mobile" === r ? "active" : " "
							),
						})
					),
					n
				);
			}
			var Bt = wp.i18n.__,
				wt = [
					{ label: "px", value: "px" },
					{ label: "%", value: "%" },
					{ label: "em", value: "em" },
				],
				Pt = [
					{ label: Bt("Default"), value: "" },
					{ label: Bt("100"), value: "100" },
					{ label: Bt("200"), value: "200" },
					{ label: Bt("300"), value: "300" },
					{ label: Bt("400"), value: "400" },
					{ label: Bt("500"), value: "500" },
					{ label: Bt("600"), value: "600" },
					{ label: Bt("700"), value: "700" },
					{ label: Bt("800"), value: "800" },
					{ label: Bt("900"), value: "900" },
				],
				kt = [
					{ label: Bt("Default"), value: "" },
					{ label: Bt("None"), value: "none" },
					{ label: Bt("Lowercase"), value: "lowercase" },
					{ label: Bt("Capitalize"), value: "capitalize" },
					{ label: Bt("Uppercase"), value: "uppercase" },
				],
				At = [
					{ label: Bt("Default"), value: "" },
					{ label: Bt("None"), value: "initial" },
					{ label: Bt("Overline"), value: "overline" },
					{ label: Bt("Line Through"), value: "line-through" },
					{ label: Bt("Underline"), value: "underline" },
					{ label: Bt("Underline Oveline"), value: "underline overline" },
				],
				Mt = [
					{ label: Bt("Default"), value: "" },
					{ label: Bt("Normal"), value: "normal" },
					{ label: Bt("Italic"), value: "italic" },
					{ label: Bt("Oblique"), value: "oblique" },
				],
				Ut = [
					{ label: "px", value: "px" },
					{ label: "em", value: "em" },
				];
			function Dt(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var Ft = wp.i18n.__,
				zt = wp.components,
				Lt = zt.BaseControl,
				jt = zt.Button,
				Nt = zt.Dropdown,
				Yt = zt.RangeControl,
				Xt = zt.SelectControl,
				qt = function (e) {
					var t = e.baseLabel,
						n = e.typographyPrefixConstant,
						a = e.resRequiredProps,
						o = a.attributes,
						c = a.setAttributes,
						r = a.resOption,
						l = o["".concat(n, "FontFamily")],
						i = o["".concat(n, "FontWeight")],
						s = o["".concat(n, "FontStyle")],
						u = o["".concat(n, "TextTransform")],
						m = o["".concat(n, "TextDecoration")],
						p = o["".concat(n, "FontSize")],
						g = o["".concat(n, "SizeUnit")],
						b = o["".concat(n, "LetterSpacing")],
						d = o["".concat(n, "LetterSpacingUnit")],
						v = o["".concat(n, "LineHeight")],
						f = o["".concat(n, "LineHeightUnit")],
						h = o["TAB".concat(n, "SizeUnit")],
						y = o["TAB".concat(n, "LetterSpacingUnit")],
						R = o["TAB".concat(n, "LineHeightUnit")],
						x = o["TAB".concat(n, "FontSize")],
						C = o["TAB".concat(n, "LetterSpacing")],
						_ = o["TAB".concat(n, "LineHeight")],
						E = o["MOB".concat(n, "SizeUnit")],
						T = o["MOB".concat(n, "LetterSpacingUnit")],
						S = o["MOB".concat(n, "LineHeightUnit")],
						O = o["MOB".concat(n, "FontSize")],
						I = o["MOB".concat(n, "LetterSpacing")],
						B = o["MOB".concat(n, "LineHeight")];
					return React.createElement(
						Lt,
						{ label: Ft(t), className: "eb-typography-base" },
						React.createElement(Nt, {
							className: "eb-typography-dropdown",
							contentClassName: "my-popover-content-classname",
							position: "bottom right",
							renderToggle: function (e) {
								var t = e.isOpen,
									n = e.onToggle;
								return React.createElement(
									jt,
									{ isSmall: !0, onClick: n, "aria-expanded": t },
									React.createElement(St, null)
								);
							},
							renderContent: function () {
								return React.createElement(
									"div",
									{
										className: "eb-panel-control eb-typography-component-panel",
										style: { padding: "0.2rem" },
									},
									React.createElement(Tt, {
										label: Ft("Font Family"),
										value: l,
										onChange: function (e) {
											c(Dt({}, "".concat(n, "FontFamily"), e));
										},
									}),
									React.createElement(
										It,
										{ className: "forFontSize", resRequiredProps: a },
										"Desktop" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: g,
													unitTypes: wt,
													onClick: function (e) {
														return c(Dt({}, "".concat(n, "SizeUnit"), e));
													},
												}),
												React.createElement(Yt, {
													label: Ft("Font Size"),
													value: p,
													onChange: function (e) {
														return c(Dt({}, "".concat(n, "FontSize"), e));
													},
													step: "em" === g ? 0.1 : 1,
													min: 0,
													max: "em" === g ? 10 : 300,
												})
											),
										"Tablet" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: h,
													unitTypes: wt,
													onClick: function (e) {
														return c(Dt({}, "TAB".concat(n, "SizeUnit"), e));
													},
												}),
												React.createElement(Yt, {
													label: Ft("Font Size"),
													value: x,
													onChange: function (e) {
														return c(Dt({}, "TAB".concat(n, "FontSize"), e));
													},
													step: "em" === h ? 0.1 : 1,
													min: 0,
													max: "em" === h ? 10 : 300,
												})
											),
										"Mobile" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: E,
													unitTypes: wt,
													onClick: function (e) {
														return c(Dt({}, "MOB".concat(n, "SizeUnit"), e));
													},
												}),
												React.createElement(Yt, {
													label: Ft("Font Size"),
													value: O,
													onChange: function (e) {
														return c(Dt({}, "MOB".concat(n, "FontSize"), e));
													},
													step: "em" === E ? 0.1 : 1,
													min: 0,
													max: "em" === E ? 10 : 300,
												})
											)
									),
									React.createElement(Xt, {
										label: Ft("Font Weight"),
										value: i,
										options: Pt,
										onChange: function (e) {
											return c(Dt({}, "".concat(n, "FontWeight"), e));
										},
									}),
									React.createElement(Xt, {
										label: Ft("Font Style"),
										value: s,
										options: Mt,
										onChange: function (e) {
											return c(Dt({}, "".concat(n, "FontStyle"), e));
										},
									}),
									React.createElement(Xt, {
										label: Ft("Text Transform"),
										value: u,
										options: kt,
										onChange: function (e) {
											return c(Dt({}, "".concat(n, "TextTransform"), e));
										},
									}),
									React.createElement(Xt, {
										label: Ft("Text Decoration"),
										value: m,
										options: At,
										onChange: function (e) {
											return c(Dt({}, "".concat(n, "TextDecoration"), e));
										},
									}),
									React.createElement(
										It,
										{ className: "forLetterSpacing", resRequiredProps: a },
										"Desktop" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: d,
													unitTypes: Ut,
													onClick: function (e) {
														return c(
															Dt({}, "".concat(n, "LetterSpacingUnit"), e)
														);
													},
												}),
												React.createElement(Yt, {
													label: Ft("Letter Spacing"),
													value: b,
													onChange: function (e) {
														return c(Dt({}, "".concat(n, "LetterSpacing"), e));
													},
													min: 0,
													max: "em" === d ? 10 : 100,
													step: "em" === d ? 0.1 : 1,
												})
											),
										"Tablet" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: y,
													unitTypes: Ut,
													onClick: function (e) {
														return c(
															Dt({}, "TAB".concat(n, "LetterSpacingUnit"), e)
														);
													},
												}),
												React.createElement(Yt, {
													label: Ft("Letter Spacing"),
													value: C,
													onChange: function (e) {
														return c(
															Dt({}, "TAB".concat(n, "LetterSpacing"), e)
														);
													},
													min: 0,
													max: "em" === y ? 10 : 100,
													step: "em" === y ? 0.1 : 1,
												})
											),
										"Mobile" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: T,
													unitTypes: Ut,
													onClick: function (e) {
														return c(
															Dt({}, "MOB".concat(n, "LetterSpacingUnit"), e)
														);
													},
												}),
												React.createElement(Yt, {
													label: Ft("Letter Spacing"),
													value: I,
													onChange: function (e) {
														return c(
															Dt({}, "MOB".concat(n, "LetterSpacing"), e)
														);
													},
													min: 0,
													max: "em" === T ? 10 : 100,
													step: "em" === T ? 0.1 : 1,
												})
											)
									),
									React.createElement(
										It,
										{ className: "forLineHeight", resRequiredProps: a },
										"Desktop" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: f,
													unitTypes: Ut,
													onClick: function (e) {
														return c(Dt({}, "".concat(n, "LineHeightUnit"), e));
													},
												}),
												React.createElement(Yt, {
													label: Ft("Line Height"),
													value: v,
													onChange: function (e) {
														return c(Dt({}, "".concat(n, "LineHeight"), e));
													},
													min: 0,
													max: "em" === f ? 10 : 600,
													step: "em" === f ? 0.1 : 1,
												})
											),
										"Tablet" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: R,
													unitTypes: Ut,
													onClick: function (e) {
														return c(
															Dt({}, "TAB".concat(n, "LineHeightUnit"), e)
														);
													},
												}),
												React.createElement(Yt, {
													label: Ft("Line Height"),
													value: _,
													onChange: function (e) {
														return c(Dt({}, "TAB".concat(n, "LineHeight"), e));
													},
													min: 0,
													max: "em" === R ? 10 : 600,
													step: "em" === R ? 0.1 : 1,
												})
											),
										"Mobile" === r &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(H, {
													selectedUnit: S,
													unitTypes: Ut,
													onClick: function (e) {
														return c(
															Dt({}, "MOB".concat(n, "LineHeightUnit"), e)
														);
													},
												}),
												React.createElement(Yt, {
													label: Ft("Line Height"),
													value: B,
													onChange: function (e) {
														return c(Dt({}, "MOB".concat(n, "LineHeight"), e));
													},
													min: 0,
													max: "em" === S ? 10 : 600,
													step: "em" === S ? 0.1 : 1,
												})
											)
									)
								);
							},
						})
					);
				};
			function Ht(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function Wt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ht(Object(n), !0).forEach(function (t) {
								Gt(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Ht(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Gt(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function Kt(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var Vt = wp.element,
				$t = Vt.useState,
				Jt = Vt.useEffect,
				Qt = wp.components,
				Zt = Qt.BaseControl,
				en = Qt.Dropdown,
				tn = Qt.Tooltip,
				nn = Qt.ColorPicker,
				an = Qt.Button,
				on = {
					padding: 2,
					borderRadius: 0,
					background: "white",
					border: "1px solid #ebebeb",
				},
				cn = {
					height: 16,
					width: 16,
					borderRadius: "0%",
					boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
				},
				rn = function (e) {
					var t,
						n,
						a = e.label,
						o = e.color,
						c = e.onChange,
						r =
							((t = $t(null)),
							(n = 2),
							(function (e) {
								if (Array.isArray(e)) return e;
							})(t) ||
								(function (e, t) {
									var n =
										null == e
											? null
											: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
											  e["@@iterator"];
									if (null != n) {
										var a,
											o,
											c = [],
											_n = !0,
											r = !1;
										try {
											for (
												n = n.call(e);
												!(_n = (a = n.next()).done) &&
												(c.push(a.value), !t || c.length !== t);
												_n = !0
											);
										} catch (e) {
											(r = !0), (o = e);
										} finally {
											try {
												_n || null == n.return || n.return();
											} finally {
												if (r) throw o;
											}
										}
										return c;
									}
								})(t, n) ||
								(function (e, t) {
									if (e) {
										if ("string" == typeof e) return Kt(e, t);
										var n = Object.prototype.toString.call(e).slice(8, -1);
										return (
											"Object" === n &&
												e.constructor &&
												(n = e.constructor.name),
											"Map" === n || "Set" === n
												? Array.from(e)
												: "Arguments" === n ||
												  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
												? Kt(e, t)
												: void 0
										);
									}
								})(t, n) ||
								(function () {
									throw new TypeError(
										"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
									);
								})()),
						l = r[0],
						i = r[1];
					return (
						Jt(
							function () {
								c(l);
							},
							[l]
						),
						Jt(function () {
							i(o);
						}, []),
						React.createElement(
							Zt,
							{ label: a || "", className: "eb-color-base" },
							React.createElement(en, {
								renderToggle: function (e) {
									var t = e.isOpen,
										n = e.onToggle;
									return React.createElement(
										tn,
										{ text: l || "default" },
										React.createElement(
											"div",
											{ className: "eb-color-ball", style: l && on },
											React.createElement("div", {
												style: Wt(Wt({}, cn), {}, { backgroundColor: l }),
												"aria-expanded": t,
												onClick: n,
												"aria-label": l || "default",
											})
										)
									);
								},
								renderContent: function () {
									return React.createElement(nn, {
										color: l,
										onChangeComplete: function (e) {
											var t = e.rgb;
											i(
												"rgba("
													.concat(t.r, ",")
													.concat(t.g, ",")
													.concat(t.b, ",")
													.concat(t.a, ")")
											);
										},
									});
								},
							}),
							l &&
								React.createElement(an, {
									isSmall: !0,
									className: "eb-color-undo",
									icon: "image-rotate",
									style: { transform: "scaleX(-1) rotate(90deg)" },
									onClick: function () {
										i(void 0);
									},
								})
						)
					);
				},
				ln = function (e) {
					var t = e.onReset,
						n = e.children;
					return me.a.createElement(
						"div",
						{ className: "eb-range-controller-container" },
						n,
						me.a.createElement(
							"button",
							{ className: "eb-range-reset-button", onClick: t },
							me.a.createElement("span", {
								className: "dashicon dashicons dashicons-image-rotate",
							})
						)
					);
				};
			function sn(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var un = wp.i18n.__,
				mn = wp.components,
				pn = mn.ToggleControl,
				gn = (mn.TextControl, mn.Button),
				bn = mn.RangeControl,
				dn = mn.BaseControl,
				vn = mn.ButtonGroup,
				fn = mn.SelectControl,
				hn = mn.Dropdown;
			function yn(e) {
				var t = e.resRequiredProps,
					n = e.controlName,
					a = e.noBorder,
					o = e.noShadow,
					c = t.setAttributes,
					r = t.attributes,
					l = r["".concat(n, "borderStyle")],
					i = r["".concat(n, "borderColor")],
					s = r["".concat(n, "shadowType")],
					u = r["".concat(n, "shadowColor")],
					m = r["".concat(n, "hOffset")],
					p = r["".concat(n, "vOffset")],
					g = r["".concat(n, "blur")],
					b = r["".concat(n, "spread")],
					d = r["".concat(n, "hoverShadowColor")],
					v = r["".concat(n, "hoverHOffset")],
					f = r["".concat(n, "hoverVOffset")],
					h = r["".concat(n, "hoverBlur")],
					y = r["".concat(n, "hoverSpread")],
					R = r["".concat(n, "inset")],
					x = r["".concat(n, "BorderType")],
					C = r["".concat(n, "HborderStyle")],
					_ = r["".concat(n, "HborderColor")],
					E = r["".concat(n, "borderTransition")],
					T = r["".concat(n, "radiusTransition")],
					S = r["".concat(n, "shadowTransition")];
				return React.createElement(
					React.Fragment,
					null,
					!0 !== a &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(
								dn,
								{ id: "eb-infobox-border-hover-ptions" },
								React.createElement(
									vn,
									{ id: "eb-infobox-border-hover-ptions" },
									[
										{ label: "Normal", value: "normal" },
										{ label: "Hover", value: "hover" },
									].map(function (e) {
										var t = e.value,
											a = e.label;
										return React.createElement(
											gn,
											{
												isLarge: !0,
												isSecondary: x !== t,
												isPrimary: x === t,
												onClick: function () {
													return c(sn({}, "".concat(n, "BorderType"), t));
												},
											},
											a
										);
									})
								)
							),
							"normal" === x &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(fn, {
										label: un("Border Style"),
										value: l,
										options: [
											{ label: un("None"), value: "none" },
											{ label: un("Dashed"), value: "dashed" },
											{ label: un("Solid"), value: "solid" },
											{ label: un("Dotted"), value: "dotted" },
											{ label: un("Double"), value: "double" },
											{ label: un("Groove"), value: "groove" },
											{ label: un("Inset"), value: "inset" },
											{ label: un("Outset"), value: "outset" },
											{ label: un("Ridge"), value: "ridge" },
										],
										onChange: function (e) {
											return c(sn({}, "".concat(n, "borderStyle"), e));
										},
									}),
									"none" !== l &&
										React.createElement(
											React.Fragment,
											null,
											React.createElement(rn, {
												label: un("Border Color"),
												color: i,
												onChange: function (e) {
													return c(sn({}, "".concat(n, "borderColor"), e));
												},
											}),
											React.createElement(G, {
												resRequiredProps: t,
												controlName: "".concat(n, "Bdr_"),
												baseLabel: "Border Width",
											})
										),
									React.createElement(G, {
										forBorderRadius: !0,
										resRequiredProps: t,
										controlName: "".concat(n, "Rds_"),
										baseLabel: "Border Radius",
									})
								),
							"hover" === x &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(fn, {
										label: un("Border Style"),
										value: C,
										options: [
											{ label: un("None"), value: "none" },
											{ label: un("Dashed"), value: "dashed" },
											{ label: un("Solid"), value: "solid" },
											{ label: un("Dotted"), value: "dotted" },
											{ label: un("Double"), value: "double" },
											{ label: un("Groove"), value: "groove" },
											{ label: un("Inset"), value: "inset" },
											{ label: un("Outset"), value: "outset" },
											{ label: un("Ridge"), value: "ridge" },
										],
										onChange: function (e) {
											return c(sn({}, "".concat(n, "HborderStyle"), e));
										},
									}),
									"none" !== C &&
										React.createElement(
											React.Fragment,
											null,
											React.createElement(rn, {
												label: un("Border Color"),
												color: _,
												onChange: function (e) {
													return c(sn({}, "".concat(n, "HborderColor"), e));
												},
											}),
											React.createElement(G, {
												resRequiredProps: t,
												controlName: "".concat(n, "HBdr_"),
												baseLabel: "Border Width",
											}),
											React.createElement(bn, {
												label: un("Border Transition"),
												value: E,
												onChange: function (e) {
													return c(sn({}, "".concat(n, "borderTransition"), e));
												},
												step: 0.01,
												min: 0,
												max: 5,
											})
										),
									React.createElement(G, {
										forBorderRadius: !0,
										resRequiredProps: t,
										controlName: "".concat(n, "HRds_"),
										baseLabel: "Border Radius",
									}),
									React.createElement(bn, {
										label: un("Border Radius Transition"),
										value: T,
										onChange: function (e) {
											return c(sn({}, "".concat(n, "radiusTransition"), e));
										},
										step: 0.01,
										min: 0,
										max: 5,
									})
								)
						),
					!0 !== o &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(
								dn,
								{ label: un("Box Shadow"), className: "eb-typography-base" },
								React.createElement(hn, {
									className: "eb-typography-dropdown",
									contentClassName: "my-popover-content-classname",
									position: "bottom right",
									renderToggle: function (e) {
										var t = e.isOpen,
											n = e.onToggle;
										return React.createElement(
											gn,
											{ isSmall: !0, onClick: n, "aria-expanded": t },
											React.createElement(St, null)
										);
									},
									renderContent: function () {
										return React.createElement(
											React.Fragment,
											null,
											React.createElement(
												"div",
												{
													className: "eb-panel-control",
													style: { minWidth: "230px", padding: "10px" },
												},
												React.createElement(
													dn,
													{ id: "eb-infobox-shadow-hover-ptions" },
													React.createElement(
														vn,
														{ id: "eb-infobox-shadow-hover-ptions" },
														[
															{ label: "Normal", value: "normal" },
															{ label: "Hover", value: "hover" },
														].map(function (e) {
															var t = e.value,
																a = e.label;
															return React.createElement(
																gn,
																{
																	isLarge: !0,
																	isSecondary: s !== t,
																	isPrimary: s === t,
																	onClick: function () {
																		return c(
																			sn({}, "".concat(n, "shadowType"), t)
																		);
																	},
																},
																a
															);
														})
													)
												),
												React.createElement(pn, {
													label: un("Inset"),
													checked: R,
													onChange: function () {
														return c(sn({}, "".concat(n, "inset"), !R));
													},
												}),
												"normal" === s &&
													React.createElement(
														React.Fragment,
														null,
														React.createElement(rn, {
															label: un("Shadow Color"),
															color: u,
															onChange: function (e) {
																return c(
																	sn({}, "".concat(n, "shadowColor"), e)
																);
															},
														}),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "hOffset"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Horizontal Offset"),
																value: m,
																onChange: function (e) {
																	return c(sn({}, "".concat(n, "hOffset"), e));
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "vOffset"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Vertical Offset"),
																value: p,
																onChange: function (e) {
																	return c(sn({}, "".concat(n, "vOffset"), e));
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "blur"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Shadow Blur"),
																value: g,
																onChange: function (e) {
																	return c(sn({}, "".concat(n, "blur"), e));
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "spread"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Shadow Spread"),
																value: b,
																onChange: function (e) {
																	return c(sn({}, "".concat(n, "spread"), e));
																},
																min: 0,
																max: 20,
															})
														)
													),
												"hover" === s &&
													React.createElement(
														React.Fragment,
														null,
														React.createElement(rn, {
															label: un("Hover Shadow Color"),
															color: d,
															onChange: function (e) {
																return c(
																	sn({}, "".concat(n, "hoverShadowColor"), e)
																);
															},
														}),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "hoverHOffset"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Horizontal Offset"),
																value: v,
																onChange: function (e) {
																	return c(
																		sn({}, "".concat(n, "hoverHOffset"), e)
																	);
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "hoverVOffset"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Vertical Offset"),
																value: f,
																onChange: function (e) {
																	return c(
																		sn({}, "".concat(n, "hoverVOffset"), e)
																	);
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "hoverBlur"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Shadow Blur"),
																value: h,
																onChange: function (e) {
																	return c(
																		sn({}, "".concat(n, "hoverBlur"), e)
																	);
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(
															ln,
															{
																onReset: function () {
																	return c(
																		sn({}, "".concat(n, "hoverSpread"), void 0)
																	);
																},
															},
															React.createElement(bn, {
																label: un("Shadow Spread"),
																value: y,
																onChange: function (e) {
																	return c(
																		sn({}, "".concat(n, "hoverSpread"), e)
																	);
																},
																min: 0,
																max: 20,
															})
														),
														React.createElement(bn, {
															label: un("Shadow Transition"),
															value: S,
															onChange: function (e) {
																return c(
																	sn({}, "".concat(n, "shadowTransition"), e)
																);
															},
															step: 0.01,
															min: 0,
															max: 5,
														})
													)
											)
										);
									},
								})
							)
						)
				);
			}
			function Rn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var xn = wp.element,
				Cn = xn.useEffect,
				En = xn.useState,
				Tn = function (e) {
					var t,
						n,
						a = e.options,
						o = e.onChange,
						c = e.defaultSelected,
						r =
							((t = En(c || a[0])),
							(n = 2),
							(function (e) {
								if (Array.isArray(e)) return e;
							})(t) ||
								(function (e, t) {
									var n =
										null == e
											? null
											: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
											  e["@@iterator"];
									if (null != n) {
										var a,
											o,
											c = [],
											_n = !0,
											r = !1;
										try {
											for (
												n = n.call(e);
												!(_n = (a = n.next()).done) &&
												(c.push(a.value), !t || c.length !== t);
												_n = !0
											);
										} catch (e) {
											(r = !0), (o = e);
										} finally {
											try {
												_n || null == n.return || n.return();
											} finally {
												if (r) throw o;
											}
										}
										return c;
									}
								})(t, n) ||
								(function (e, t) {
									if (e) {
										if ("string" == typeof e) return Rn(e, t);
										var n = Object.prototype.toString.call(e).slice(8, -1);
										return (
											"Object" === n &&
												e.constructor &&
												(n = e.constructor.name),
											"Map" === n || "Set" === n
												? Array.from(e)
												: "Arguments" === n ||
												  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
												? Rn(e, t)
												: void 0
										);
									}
								})(t, n) ||
								(function () {
									throw new TypeError(
										"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
									);
								})()),
						l = r[0],
						i = r[1];
					return (
						Cn(
							function () {
								o(l.value);
							},
							[l]
						),
						Cn(
							function () {
								c && i(c);
							},
							[c]
						),
						React.createElement(
							"div",
							{ id: "switch", className: "eb-switch-control" },
							a.map(function (e) {
								return React.createElement(
									"label",
									null,
									React.createElement("input", {
										type: "radio",
										name: "gh",
										placeholder: "name",
										onChange: function () {
											return i(e);
										},
									}),
									React.createElement(
										"span",
										{
											style: { color: l.value === e.value ? "white" : "black" },
										},
										e.label
									)
								);
							}),
							React.createElement("span", {
								className: "slideBg",
								style: {
									backgroundColor: "#551ef7",
									transform: l == a[0] ? "translateX(0)" : "translateX(100%)",
								},
							})
						)
					);
				},
				Sn = [
					{ label: "Linear", value: "linear" },
					{ label: "Radial", value: "radial" },
				],
				On = [
					{ label: "Ellipse", value: "ellipse" },
					{ label: "Circle", value: "circle" },
				];
			function In(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var a,
								o,
								c = [],
								_n = !0,
								r = !1;
							try {
								for (
									n = n.call(e);
									!(_n = (a = n.next()).done) &&
									(c.push(a.value), !t || c.length !== t);
									_n = !0
								);
							} catch (e) {
								(r = !0), (o = e);
							} finally {
								try {
									_n || null == n.return || n.return();
								} finally {
									if (r) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return Bn(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? Bn(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function Bn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			function wn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function Pn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? wn(Object(n), !0).forEach(function (t) {
								kn(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: wn(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function kn(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function An(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var a,
								o,
								c = [],
								_n = !0,
								r = !1;
							try {
								for (
									n = n.call(e);
									!(_n = (a = n.next()).done) &&
									(c.push(a.value), !t || c.length !== t);
									_n = !0
								);
							} catch (e) {
								(r = !0), (o = e);
							} finally {
								try {
									_n || null == n.return || n.return();
								} finally {
									if (r) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return Mn(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? Mn(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function Mn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var Un = wp.i18n.__,
				Dn = wp.components,
				Fn = Dn.RangeControl,
				zn = Dn.BaseControl,
				Ln = Dn.Dropdown,
				jn = Dn.Tooltip,
				Nn = Dn.ColorPicker,
				Yn = wp.element,
				Xn = Yn.useState,
				qn = Yn.useEffect,
				Hn = {
					padding: 2,
					borderRadius: 0,
					background: "white",
					border: "1px solid #ebebeb",
				},
				Wn = {
					height: 16,
					width: 16,
					borderRadius: "0%",
					boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
				},
				Gn = function (e) {
					var t = e.gradientColor,
						n =
							void 0 === t
								? "linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.4))"
								: t,
						a = e.onChange,
						o = An(Xn("linear"), 2),
						c = o[0],
						r = o[1],
						l = An(Xn("transparent"), 2),
						i = l[0],
						s = l[1],
						u = An(Xn(0), 2),
						m = u[0],
						p = u[1],
						g = An(Xn("transparent"), 2),
						b = g[0],
						d = g[1],
						v = An(Xn(100), 2),
						f = v[0],
						h = v[1],
						y = An(Xn(0), 2),
						R = y[0],
						x = y[1],
						C = An(Xn("ellipse"), 2),
						_ = C[0],
						E = C[1],
						T = An(Xn(50), 2),
						S = T[0],
						O = T[1],
						I = An(Xn(50), 2),
						B = I[0],
						w = I[1];
					qn(function () {
						var e = (function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: "linear-gradient(45deg,#7967ff,#c277f2)",
									t = 45,
									n = 0,
									a = 100,
									o = "ellipse",
									c = 50,
									r = 50,
									l = e.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || [
										"rgba(0,0,0,0)",
										"rgba(0,0,0,0)",
									],
									i = In(l, 2),
									s = i[0],
									u = i[1],
									m = e.match(/\w{6}(?=-)/i) || ["linear"],
									p = In(m, 1),
									g = p[0];
								if ("linear" == g) {
									t = e.match(/\d{1,3}(?=deg)/i)[0];
									var b = e.match(/\d{1,3}(?=\%)/gi) || ["0", "100"],
										d = In(b, 2);
									(n = d[0]), (a = d[1]);
								} else {
									o = (e.match(/\w+(?= at)/i) || ["circle"])[0];
									var v = e.match(/\d{1,3}(?=\%)/gi) || [
										"50",
										"50",
										"18",
										"82",
									];
									(c = v[0]), (r = v[1]), (n = v[2]), (a = v[3]);
								}
								return {
									gradientType: g,
									angle: t,
									colorOne: s,
									colorTwo: u,
									colorOnePosition: n,
									colorTwoPosition: a,
									radialShape: o,
									radialX: c,
									radialY: r,
								};
							})(n),
							t = e.gradientType,
							a = e.angle,
							o = e.colorOne,
							c = e.colorTwo,
							l = e.colorOnePosition,
							i = e.colorTwoPosition,
							u = e.radialShape,
							m = e.radialX,
							g = e.radialY;
						r(t), x(a), s(o), d(c), p(l), h(i), E(u), O(m), w(g);
					}, []),
						qn(
							function () {
								a("linear" === c ? A() : k());
							},
							[c, i, m, b, f, R, _, S, B]
						);
					var P = function () {
							return ""
								.concat(i, " ")
								.concat(m, "% , ")
								.concat(b, " ")
								.concat(f, "%");
						},
						k = function () {
							return "radial-gradient("
								.concat(_, " at ")
								.concat(S, "% ")
								.concat(B, "%, ")
								.concat(P(), ")");
						},
						A = function () {
							return "linear-gradient(".concat(R, "deg, ").concat(P(), ")");
						};
					return React.createElement(
						"div",
						{ className: "eb-gradient-control" },
						React.createElement(
							zn,
							{
								label: Un("Gradient Type"),
								className: "eb-gradient-toggle-label",
							},
							React.createElement(Tn, {
								defaultSelected: "linear" === c ? Sn[0] : Sn[1],
								options: Sn,
								onChange: function (e) {
									return r(e);
								},
							})
						),
						"radial" === c &&
							React.createElement(
								zn,
								{
									label: Un("Radial Type"),
									className: "eb-gradient-toggle-label",
								},
								React.createElement(Tn, {
									defaultSelected: "ellipse" === _ ? On[0] : On[1],
									options: On,
									onChange: function (e) {
										return E(e);
									},
								})
							),
						React.createElement(
							zn,
							{ label: "First Color", className: "eb-color-base" },
							React.createElement(Ln, {
								renderToggle: function (e) {
									var t = e.isOpen,
										n = e.onToggle;
									return React.createElement(
										jn,
										{ text: i || "default" },
										React.createElement(
											"div",
											{ className: "eb-color-ball", style: i && Hn },
											React.createElement("div", {
												style: Pn(Pn({}, Wn), {}, { backgroundColor: i }),
												"aria-expanded": t,
												onClick: n,
												"aria-label": i || "default",
											})
										)
									);
								},
								renderContent: function () {
									return React.createElement(Nn, {
										color: i,
										onChangeComplete: function (e) {
											var t = e.rgb;
											s(
												"rgba("
													.concat(t.r, ",")
													.concat(t.g, ",")
													.concat(t.b, ",")
													.concat(t.a, ")")
											);
										},
									});
								},
							})
						),
						React.createElement(
							zn,
							{ label: "Second Color", className: "eb-color-base" },
							React.createElement(Ln, {
								renderToggle: function (e) {
									var t = e.isOpen,
										n = e.onToggle;
									return React.createElement(
										jn,
										{ text: b || "default" },
										React.createElement(
											"div",
											{ className: "eb-color-ball", style: b && Hn },
											React.createElement("div", {
												style: Pn(Pn({}, Wn), {}, { backgroundColor: b }),
												"aria-expanded": t,
												onClick: n,
												"aria-label": b || "default",
											})
										)
									);
								},
								renderContent: function () {
									return React.createElement(Nn, {
										color: b,
										onChangeComplete: function (e) {
											var t = e.rgb;
											d(
												"rgba("
													.concat(t.r, ",")
													.concat(t.g, ",")
													.concat(t.b, ",")
													.concat(t.a, ")")
											);
										},
									});
								},
							})
						),
						React.createElement(Fn, {
							label: Un("First Color Position"),
							value: m,
							onChange: function (e) {
								return p(e);
							},
							min: 0,
							max: 100,
						}),
						React.createElement(Fn, {
							label: Un("Second Color Position"),
							value: f,
							onChange: function (e) {
								return h(e);
							},
							min: 0,
							max: 100,
						}),
						"linear" === c &&
							React.createElement(Fn, {
								label: Un("Angle"),
								value: R,
								onChange: function (e) {
									return x(e);
								},
								min: 0,
								max: 360,
							}),
						"radial" === c &&
							React.createElement(
								React.Fragment,
								null,
								React.createElement(Fn, {
									label: Un("Center X Position"),
									value: S,
									onChange: function (e) {
										return O(e);
									},
									min: 0,
									max: 100,
								}),
								React.createElement(Fn, {
									label: Un("Center Y Position"),
									value: B,
									onChange: function (e) {
										return w(e);
									},
									min: 0,
									max: 100,
								})
							)
					);
				};
			function Kn(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var a,
								o,
								c = [],
								_n = !0,
								r = !1;
							try {
								for (
									n = n.call(e);
									!(_n = (a = n.next()).done) &&
									(c.push(a.value), !t || c.length !== t);
									_n = !0
								);
							} catch (e) {
								(r = !0), (o = e);
							} finally {
								try {
									_n || null == n.return || n.return();
								} finally {
									if (r) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return Vn(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? Vn(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function Vn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var $n = wp.element.useState,
				Jn = function (e) {
					var t = e.imageUrl,
						n = e.onDeleteImage,
						a = Kn($n(!1), 2),
						o = a[0],
						c = a[1],
						r = Kn($n(!1), 2),
						l = r[0],
						i = r[1],
						s = {
							visibility: o ? "visible" : "hidden",
							backgroundColor: l ? "white" : "#64666a",
							color: "#b4b5b7",
							position: "absolute",
							right: 34,
							fontSize: 16,
							alignSelf: "center",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 3,
							cursor: "pointer",
						};
					return React.createElement(
						"div",
						{
							className: "image-avatar",
							style: { backgroundImage: "url(".concat(t, ")") },
							onMouseEnter: function () {
								return c(!0);
							},
							onMouseLeave: function () {
								return c(!1);
							},
						},
						React.createElement("span", {
							className: "image-avatar-delete dashicons dashicons-trash",
							onMouseEnter: function () {
								return i(!0);
							},
							onMouseLeave: function () {
								return i(!1);
							},
							style: s,
							onClick: function () {
								return n();
							},
						})
					);
				};
			function Qn(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var Zn = wp.i18n.__,
				ea = wp.blockEditor.MediaUpload,
				ta = wp.components,
				na = ta.SelectControl,
				aa = ta.Button,
				oa = ta.RangeControl,
				ca = ta.BaseControl,
				ra = ta.ButtonGroup,
				la = ta.ToggleControl;
			function ia(e) {
				var t = e.resRequiredProps,
					n = e.controlName,
					a = e.noOverlayBgi,
					o = e.noTransition,
					c = t.setAttributes,
					r = t.attributes,
					l = t.resOption,
					i = r["".concat(n, "ovl_hoverType")],
					s = r["".concat(n, "ovl_bg_transition")],
					u = r["".concat(n, "ovl_filtersTransition")],
					m = r["".concat(n, "ovl_opacityTransition")],
					p = r["".concat(n, "overlayType")],
					g = r["".concat(n, "overlayColor")],
					b = r["".concat(n, "overlayGradient")],
					d = r["".concat(n, "ovl_bgImageURL")],
					v = r["".concat(n, "ovl_bgImageID")],
					f = r["".concat(n, "ovl_bgImgAttachment")],
					h = r["".concat(n, "ovl_opacity")],
					y = r["".concat(n, "ovl_blendMode")],
					R = r["".concat(n, "ovl_allowFilters")],
					x = r["".concat(n, "ovl_fltrBrightness")],
					C = r["".concat(n, "ovl_fltrContrast")],
					_ = r["".concat(n, "ovl_fltrSaturation")],
					E = r["".concat(n, "ovl_fltrBlur")],
					T = r["".concat(n, "ovl_fltrHue")],
					S = r["".concat(n, "ovl_backgroundSize")],
					O = r["".concat(n, "ovl_bgImgCustomSize")],
					I = r["".concat(n, "ovl_bgImgCustomSizeUnit")],
					B = r["".concat(n, "ovl_bgImgPos")],
					w = r["".concat(n, "ovl_bgImgcustomPosX")],
					P = r["".concat(n, "ovl_bgImgcustomPosXUnit")],
					k = r["".concat(n, "ovl_bgImgcustomPosY")],
					A = r["".concat(n, "ovl_bgImgcustomPosYUnit")],
					M = r["".concat(n, "ovl_bgImgRepeat")],
					U = r["TAB".concat(n, "ovl_backgroundSize")],
					D = r["TAB".concat(n, "ovl_bgImgCustomSize")],
					F = r["TAB".concat(n, "ovl_bgImgCustomSizeUnit")],
					z = r["TAB".concat(n, "ovl_bgImgPos")],
					L = r["TAB".concat(n, "ovl_bgImgcustomPosX")],
					j = r["TAB".concat(n, "ovl_bgImgcustomPosXUnit")],
					N = r["TAB".concat(n, "ovl_bgImgcustomPosY")],
					Y = r["TAB".concat(n, "ovl_bgImgcustomPosYUnit")],
					X = r["TAB".concat(n, "ovl_bgImgRepeat")],
					q = r["MOB".concat(n, "ovl_backgroundSize")],
					W = r["MOB".concat(n, "ovl_bgImgCustomSize")],
					G = r["MOB".concat(n, "ovl_bgImgCustomSizeUnit")],
					K = r["MOB".concat(n, "ovl_bgImgPos")],
					V = r["MOB".concat(n, "ovl_bgImgcustomPosX")],
					$ = r["MOB".concat(n, "ovl_bgImgcustomPosXUnit")],
					J = r["MOB".concat(n, "ovl_bgImgcustomPosY")],
					Q = r["MOB".concat(n, "ovl_bgImgcustomPosYUnit")],
					Z = r["MOB".concat(n, "ovl_bgImgRepeat")],
					ee = r["hov_".concat(n, "overlayType")],
					te = r["hov_".concat(n, "overlayColor")],
					ne = r["hov_".concat(n, "overlayGradient")],
					ae = r["hov_".concat(n, "ovl_bgImageURL")],
					oe = r["hov_".concat(n, "ovl_bgImageID")],
					ce = r["hov_".concat(n, "ovl_bgImgAttachment")],
					re = r["hov_".concat(n, "ovl_opacity")],
					le = r["hov_".concat(n, "ovl_blendMode")],
					ie = r["hov_".concat(n, "ovl_allowFilters")],
					se = r["hov_".concat(n, "ovl_fltrBrightness")],
					ue = r["hov_".concat(n, "ovl_fltrContrast")],
					me = r["hov_".concat(n, "ovl_fltrSaturation")],
					pe = r["hov_".concat(n, "ovl_fltrBlur")],
					ge = r["hov_".concat(n, "ovl_fltrHue")],
					be = r["hov_".concat(n, "ovl_backgroundSize")],
					de = r["hov_".concat(n, "ovl_bgImgCustomSize")],
					ve = r["hov_".concat(n, "ovl_bgImgCustomSizeUnit")],
					fe = r["hov_".concat(n, "ovl_bgImgPos")],
					he = r["hov_".concat(n, "ovl_bgImgcustomPosX")],
					ye = r["hov_".concat(n, "ovl_bgImgcustomPosXUnit")],
					Re = r["hov_".concat(n, "ovl_bgImgcustomPosY")],
					xe = r["hov_".concat(n, "ovl_bgImgcustomPosYUnit")],
					Ce = r["hov_".concat(n, "ovl_bgImgRepeat")],
					_e = r["hov_TAB".concat(n, "ovl_backgroundSize")],
					Ee = r["hov_TAB".concat(n, "ovl_bgImgCustomSize")],
					Te = r["hov_TAB".concat(n, "ovl_bgImgCustomSizeUnit")],
					Se = r["hov_TAB".concat(n, "ovl_bgImgPos")],
					Oe = r["hov_TAB".concat(n, "ovl_bgImgcustomPosX")],
					Ie = r["hov_TAB".concat(n, "ovl_bgImgcustomPosXUnit")],
					Be = r["hov_TAB".concat(n, "ovl_bgImgcustomPosY")],
					we = r["hov_TAB".concat(n, "ovl_bgImgcustomPosYUnit")],
					Pe = r["hov_TAB".concat(n, "ovl_bgImgRepeat")],
					ke = r["hov_MOB".concat(n, "ovl_backgroundSize")],
					Ae = r["hov_MOB".concat(n, "ovl_bgImgCustomSize")],
					Me = r["hov_MOB".concat(n, "ovl_bgImgCustomSizeUnit")],
					Ue = r["hov_MOB".concat(n, "ovl_bgImgPos")],
					De = r["hov_MOB".concat(n, "ovl_bgImgcustomPosX")],
					Fe = r["hov_MOB".concat(n, "ovl_bgImgcustomPosXUnit")],
					ze = r["hov_MOB".concat(n, "ovl_bgImgcustomPosY")],
					Le = r["hov_MOB".concat(n, "ovl_bgImgcustomPosYUnit")],
					je = r["hov_MOB".concat(n, "ovl_bgImgRepeat")];
				return React.createElement(
					React.Fragment,
					null,
					React.createElement(ca, { label: Zn("Background Overlay") }),
					React.createElement(
						ca,
						null,
						React.createElement(
							ra,
							null,
							[
								{ label: Zn("Normal"), value: "normal" },
								{ label: Zn("Hover"), value: "hover" },
							].map(function (e) {
								var t = e.value,
									a = e.label;
								return React.createElement(
									aa,
									{
										isPrimary: i === t,
										isSecondary: i !== t,
										onClick: function () {
											return c(Qn({}, "".concat(n, "ovl_hoverType"), t));
										},
									},
									a
								);
							})
						)
					),
					"normal" === i &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(
								ca,
								{ label: Zn("Overlay Type") },
								React.createElement(
									ra,
									{ id: "eb-background-control-new" },
									[
										{ label: "Classic", value: "classic" },
										{ label: "Gradient", value: "gradient" },
									].map(function (e) {
										var t = e.value,
											a = e.label;
										return React.createElement(
											aa,
											{
												isLarge: !0,
												isPrimary: p === t,
												isSecondary: p !== t,
												onClick: function () {
													return c(Qn({}, "".concat(n, "overlayType"), t));
												},
											},
											a
										);
									})
								)
							),
							"classic" === p &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(rn, {
										label: Zn("Overlay Color"),
										color: g,
										onChange: function (e) {
											return c(Qn({}, "".concat(n, "overlayColor"), e));
										},
									}),
									!1 === a &&
										React.createElement(
											React.Fragment,
											null,
											React.createElement(ca, { label: Zn("Overlay Image") }),
											React.createElement(ea, {
												onSelect: function (e) {
													var t,
														a = e.url,
														o = e.id;
													return c(
														(Qn((t = {}), "".concat(n, "ovl_bgImageURL"), a),
														Qn(t, "".concat(n, "ovl_bgImageID"), o),
														t)
													);
												},
												type: "image",
												value: v,
												render: function (e) {
													var t = e.open;
													return (
														!d &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(aa, {
																className:
																	"eb-background-control-inspector-panel-img-btn components-button",
																label: Zn("Upload Image"),
																icon: "format-image",
																onClick: t,
															}),
															React.createElement("span", {
																style: { padding: "10px 0", display: "block" },
															})
														)
													);
												},
											}),
											d &&
												React.createElement(
													React.Fragment,
													null,
													React.createElement(Jn, {
														imageUrl: d,
														onDeleteImage: function () {
															return c(
																Qn({}, "".concat(n, "ovl_bgImageURL"), null)
															);
														},
													}),
													"Desktop" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(na, {
																	value: B,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("Center Center"),
																			value: "center center",
																		},
																		{
																			label: Zn("Center Left"),
																			value: "center left",
																		},
																		{
																			label: Zn("Center Right"),
																			value: "center right",
																		},
																		{
																			label: Zn("Top Center"),
																			value: "top center",
																		},
																		{
																			label: Zn("Top Left"),
																			value: "top left",
																		},
																		{
																			label: Zn("Top Right"),
																			value: "top right",
																		},
																		{
																			label: Zn("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: Zn("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: Zn("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn({}, "".concat(n, "ovl_bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === B &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: P,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"".concat(
																						n,
																						"ovl_bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(oa, {
																			value: w,
																			min: 0,
																			max: "px" === P ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"".concat(n, "ovl_bgImgcustomPosX"),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: A,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"".concat(
																						n,
																						"ovl_bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(oa, {
																			value: k,
																			min: 0,
																			max: "px" === A ? 2e3 : 100,
																			step: "px" === A ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"".concat(n, "ovl_bgImgcustomPosY"),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(na, {
																label: "Attachment",
																value: f,
																options: [
																	{ label: Zn("Default"), value: "" },
																	{ label: Zn("Scroll"), value: "scroll" },
																	{ label: Zn("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		Qn(
																			{},
																			"".concat(n, "ovl_bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === f &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(na, {
																	value: M,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: Zn("Repeat"), value: "repeat" },
																		{
																			label: Zn("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: Zn("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			Qn({}, "".concat(n, "ovl_bgImgRepeat"), e)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(na, {
																	value: S,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{ label: Zn("Auto"), value: "auto" },
																		{ label: Zn("Cover"), value: "cover" },
																		{ label: Zn("Contain"), value: "contain" },
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"".concat(n, "ovl_backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === S &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: I,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"".concat(
																						n,
																						"ovl_bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(oa, {
																			value: O,
																			min: 0,
																			max: "px" === I ? 2e3 : 100,
																			step: "px" === I ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"".concat(n, "ovl_bgImgCustomSize"),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Tablet" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(na, {
																	value: z,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("Center Center"),
																			value: "center center",
																		},
																		{
																			label: Zn("Center Left"),
																			value: "center left",
																		},
																		{
																			label: Zn("Center Right"),
																			value: "center right",
																		},
																		{
																			label: Zn("Top Center"),
																			value: "top center",
																		},
																		{
																			label: Zn("Top Left"),
																			value: "top left",
																		},
																		{
																			label: Zn("Top Right"),
																			value: "top right",
																		},
																		{
																			label: Zn("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: Zn("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: Zn("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn({}, "TAB".concat(n, "ovl_bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === z &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: j,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"TAB".concat(
																						n,
																						"ovl_bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(oa, {
																			value: L,
																			min: 0,
																			max: "px" === j ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"TAB".concat(
																							n,
																							"ovl_bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: Y,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"TAB".concat(
																						n,
																						"ovl_bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(oa, {
																			value: N,
																			min: 0,
																			max: "px" === Y ? 2e3 : 100,
																			step: "px" === Y ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"TAB".concat(
																							n,
																							"ovl_bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(na, {
																label: "Attachment",
																value: f,
																options: [
																	{ label: Zn("Default"), value: "" },
																	{ label: Zn("Scroll"), value: "scroll" },
																	{ label: Zn("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		Qn(
																			{},
																			"".concat(n, "ovl_bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === f &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(na, {
																	value: X,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: Zn("Repeat"), value: "repeat" },
																		{
																			label: Zn("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: Zn("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"TAB".concat(n, "ovl_bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(na, {
																	value: U,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{ label: Zn("Auto"), value: "auto" },
																		{ label: Zn("Cover"), value: "cover" },
																		{ label: Zn("Contain"), value: "contain" },
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"TAB".concat(n, "ovl_backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === U &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: F,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"TAB".concat(
																						n,
																						"ovl_bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(oa, {
																			value: D,
																			min: 0,
																			max: "px" === F ? 2e3 : 100,
																			step: "px" === F ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"TAB".concat(
																							n,
																							"ovl_bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Mobile" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(na, {
																	value: K,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("Center Center"),
																			value: "center center",
																		},
																		{
																			label: Zn("Center Left"),
																			value: "center left",
																		},
																		{
																			label: Zn("Center Right"),
																			value: "center right",
																		},
																		{
																			label: Zn("Top Center"),
																			value: "top center",
																		},
																		{
																			label: Zn("Top Left"),
																			value: "top left",
																		},
																		{
																			label: Zn("Top Right"),
																			value: "top right",
																		},
																		{
																			label: Zn("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: Zn("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: Zn("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn({}, "MOB".concat(n, "ovl_bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === K &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: $,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"MOB".concat(
																						n,
																						"ovl_bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(oa, {
																			value: V,
																			min: 0,
																			max: "px" === $ ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"MOB".concat(
																							n,
																							"ovl_bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: Q,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"MOB".concat(
																						n,
																						"ovl_bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(oa, {
																			value: J,
																			min: 0,
																			max: "px" === Q ? 2e3 : 100,
																			step: "px" === Q ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"MOB".concat(
																							n,
																							"ovl_bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(na, {
																label: "Attachment",
																value: f,
																options: [
																	{ label: Zn("Default"), value: "" },
																	{ label: Zn("Scroll"), value: "scroll" },
																	{ label: Zn("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		Qn(
																			{},
																			"".concat(n, "ovl_bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === f &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(na, {
																	value: Z,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: Zn("Repeat"), value: "repeat" },
																		{
																			label: Zn("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: Zn("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"MOB".concat(n, "ovl_bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(na, {
																	value: q,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{ label: Zn("Auto"), value: "auto" },
																		{ label: Zn("Cover"), value: "cover" },
																		{ label: Zn("Contain"), value: "contain" },
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"MOB".concat(n, "ovl_backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === q &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: G,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"MOB".concat(
																						n,
																						"ovl_bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(oa, {
																			value: W,
																			min: 0,
																			max: "px" === G ? 2e3 : 100,
																			step: "px" === G ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"MOB".concat(
																							n,
																							"ovl_bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														)
												)
										)
								),
							"gradient" === p &&
								React.createElement(Gn, {
									gradientColor: b,
									onChange: function (e) {
										return c(Qn({}, "".concat(n, "overlayGradient"), e));
									},
								}),
							React.createElement("hr", null),
							React.createElement(oa, {
								label: Zn("Opacity"),
								value: h,
								onChange: function (e) {
									return c(Qn({}, "".concat(n, "ovl_opacity"), e));
								},
								step: 0.01,
								min: 0,
								max: 1,
							}),
							React.createElement(na, {
								label: Zn("Blend Mode"),
								value: y,
								options: [
									{ label: Zn("Normal"), value: "" },
									{ label: Zn("Multiply"), value: "multiply" },
									{ label: Zn("Screen"), value: "screen" },
									{ label: Zn("Overlay"), value: "overlay" },
									{ label: Zn("Darken"), value: "darken" },
									{ label: Zn("Lighten"), value: "lighten" },
									{ label: Zn("Color Dodge"), value: "color-dodge" },
									{ label: Zn("Saturation"), value: "saturation" },
									{ label: Zn("Color"), value: "color" },
									{ label: Zn("Luminosity"), value: "luminosity" },
								],
								onChange: function (e) {
									return c(Qn({}, "".concat(n, "ovl_blendMode"), e));
								},
							}),
							React.createElement(la, {
								label: Zn("CSS Filters"),
								checked: R,
								onChange: function () {
									return c(Qn({}, "".concat(n, "ovl_allowFilters"), !R));
								},
							}),
							R &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(oa, {
										label: Zn("Blur"),
										value: E,
										onChange: function (e) {
											return c(Qn({}, "".concat(n, "ovl_fltrBlur"), e));
										},
										step: 0.1,
										min: 0,
										max: 10,
									}),
									React.createElement(oa, {
										label: Zn("Brightness"),
										value: x,
										onChange: function (e) {
											return c(Qn({}, "".concat(n, "ovl_fltrBrightness"), e));
										},
										step: 1,
										min: 0,
										max: 200,
									}),
									React.createElement(oa, {
										label: Zn("Contrast"),
										value: C,
										onChange: function (e) {
											return c(Qn({}, "".concat(n, "ovl_fltrContrast"), e));
										},
										step: 1,
										min: 0,
										max: 200,
									}),
									React.createElement(oa, {
										label: Zn("Saturation"),
										value: _,
										onChange: function (e) {
											return c(Qn({}, "".concat(n, "ovl_fltrSaturation"), e));
										},
										step: 1,
										min: 0,
										max: 200,
									}),
									React.createElement(oa, {
										label: Zn("Hue"),
										value: T,
										onChange: function (e) {
											return c(Qn({}, "".concat(n, "ovl_fltrHue"), e));
										},
										step: 1,
										min: 0,
										max: 360,
									})
								)
						),
					"hover" === i &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(
								ca,
								{ label: Zn("Overlay Type") },
								React.createElement(
									ra,
									{ id: "eb-background-control-new" },
									[
										{ label: "Classic", value: "classic" },
										{ label: "Gradient", value: "gradient" },
									].map(function (e) {
										var t = e.value,
											a = e.label;
										return React.createElement(
											aa,
											{
												isLarge: !0,
												isPrimary: ee === t,
												isSecondary: ee !== t,
												onClick: function () {
													return c(Qn({}, "hov_".concat(n, "overlayType"), t));
												},
											},
											a
										);
									})
								)
							),
							"classic" === ee &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(rn, {
										label: Zn("Overlay Color"),
										color: te,
										onChange: function (e) {
											return c(Qn({}, "hov_".concat(n, "overlayColor"), e));
										},
									}),
									!1 === a &&
										React.createElement(
											React.Fragment,
											null,
											React.createElement(ca, { label: Zn("Overlay Image") }),
											React.createElement(ea, {
												onSelect: function (e) {
													var t,
														a = e.url,
														o = e.id;
													return c(
														(Qn(
															(t = {}),
															"hov_".concat(n, "ovl_bgImageURL"),
															a
														),
														Qn(t, "hov_".concat(n, "ovl_bgImageID"), o),
														t)
													);
												},
												type: "image",
												value: oe,
												render: function (e) {
													var t = e.open;
													return (
														!ae &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(aa, {
																className:
																	"eb-background-control-inspector-panel-img-btn components-button",
																label: Zn("Upload Image"),
																icon: "format-image",
																onClick: t,
															}),
															React.createElement("span", {
																style: { padding: "10px 0", display: "block" },
															})
														)
													);
												},
											}),
											ae &&
												React.createElement(
													React.Fragment,
													null,
													React.createElement(Jn, {
														imageUrl: ae,
														onDeleteImage: function () {
															return c(
																Qn({}, "hov_".concat(n, "ovl_bgImageURL"), null)
															);
														},
													}),
													"Desktop" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(na, {
																	value: fe,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("Center Center"),
																			value: "center center",
																		},
																		{
																			label: Zn("Center Left"),
																			value: "center left",
																		},
																		{
																			label: Zn("Center Right"),
																			value: "center right",
																		},
																		{
																			label: Zn("Top Center"),
																			value: "top center",
																		},
																		{
																			label: Zn("Top Left"),
																			value: "top left",
																		},
																		{
																			label: Zn("Top Right"),
																			value: "top right",
																		},
																		{
																			label: Zn("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: Zn("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: Zn("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_".concat(n, "ovl_bgImgPos"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === fe &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: ye,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_".concat(
																						n,
																						"ovl_bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(oa, {
																			value: he,
																			min: 0,
																			max: "px" === ye ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_".concat(
																							n,
																							"ovl_bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: xe,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_".concat(
																						n,
																						"ovl_bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(oa, {
																			value: Re,
																			min: 0,
																			max: "px" === xe ? 2e3 : 100,
																			step: "px" === xe ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_".concat(
																							n,
																							"ovl_bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(na, {
																label: "Attachment",
																value: ce,
																options: [
																	{ label: Zn("Default"), value: "" },
																	{ label: Zn("Scroll"), value: "scroll" },
																	{ label: Zn("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		Qn(
																			{},
																			"hov_".concat(n, "ovl_bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === ce &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(na, {
																	value: Ce,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: Zn("Repeat"), value: "repeat" },
																		{
																			label: Zn("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: Zn("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_".concat(n, "ovl_bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(na, {
																	value: be,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{ label: Zn("Auto"), value: "auto" },
																		{ label: Zn("Cover"), value: "cover" },
																		{ label: Zn("Contain"), value: "contain" },
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_".concat(n, "ovl_backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === be &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: ve,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_".concat(
																						n,
																						"ovl_bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(oa, {
																			value: de,
																			min: 0,
																			max: "px" === ve ? 2e3 : 100,
																			step: "px" === ve ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_".concat(
																							n,
																							"ovl_bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Tablet" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(na, {
																	value: Se,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("Center Center"),
																			value: "center center",
																		},
																		{
																			label: Zn("Center Left"),
																			value: "center left",
																		},
																		{
																			label: Zn("Center Right"),
																			value: "center right",
																		},
																		{
																			label: Zn("Top Center"),
																			value: "top center",
																		},
																		{
																			label: Zn("Top Left"),
																			value: "top left",
																		},
																		{
																			label: Zn("Top Right"),
																			value: "top right",
																		},
																		{
																			label: Zn("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: Zn("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: Zn("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_TAB".concat(n, "ovl_bgImgPos"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === Se &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: Ie,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_TAB".concat(
																						n,
																						"ovl_bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(oa, {
																			value: Oe,
																			min: 0,
																			max: "px" === Ie ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_TAB".concat(
																							n,
																							"ovl_bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: we,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_TAB".concat(
																						n,
																						"ovl_bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(oa, {
																			value: Be,
																			min: 0,
																			max: "px" === we ? 2e3 : 100,
																			step: "px" === we ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_TAB".concat(
																							n,
																							"ovl_bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(na, {
																label: "Attachment",
																value: ce,
																options: [
																	{ label: Zn("Default"), value: "" },
																	{ label: Zn("Scroll"), value: "scroll" },
																	{ label: Zn("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		Qn(
																			{},
																			"hov_".concat(n, "ovl_bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === ce &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(na, {
																	value: Pe,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: Zn("Repeat"), value: "repeat" },
																		{
																			label: Zn("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: Zn("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_TAB".concat(n, "ovl_bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(na, {
																	value: _e,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{ label: Zn("Auto"), value: "auto" },
																		{ label: Zn("Cover"), value: "cover" },
																		{ label: Zn("Contain"), value: "contain" },
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_TAB".concat(
																					n,
																					"ovl_backgroundSize"
																				),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === _e &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: Te,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_TAB".concat(
																						n,
																						"ovl_bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(oa, {
																			value: Ee,
																			min: 0,
																			max: "px" === Te ? 2e3 : 100,
																			step: "px" === Te ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_TAB".concat(
																							n,
																							"ovl_bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Mobile" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(na, {
																	value: Ue,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("Center Center"),
																			value: "center center",
																		},
																		{
																			label: Zn("Center Left"),
																			value: "center left",
																		},
																		{
																			label: Zn("Center Right"),
																			value: "center right",
																		},
																		{
																			label: Zn("Top Center"),
																			value: "top center",
																		},
																		{
																			label: Zn("Top Left"),
																			value: "top left",
																		},
																		{
																			label: Zn("Top Right"),
																			value: "top right",
																		},
																		{
																			label: Zn("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: Zn("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: Zn("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_MOB".concat(n, "ovl_bgImgPos"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === Ue &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: Fe,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_MOB".concat(
																						n,
																						"ovl_bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(oa, {
																			value: De,
																			min: 0,
																			max: "px" === Fe ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_MOB".concat(
																							n,
																							"ovl_bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: Le,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_MOB".concat(
																						n,
																						"ovl_bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(oa, {
																			value: ze,
																			min: 0,
																			max: "px" === Le ? 2e3 : 100,
																			step: "px" === Le ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_MOB".concat(
																							n,
																							"ovl_bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(na, {
																label: "Attachment",
																value: ce,
																options: [
																	{ label: Zn("Default"), value: "" },
																	{ label: Zn("Scroll"), value: "scroll" },
																	{ label: Zn("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		Qn(
																			{},
																			"hov_".concat(n, "ovl_bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === ce &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(na, {
																	value: je,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{
																			label: Zn("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: Zn("Repeat"), value: "repeat" },
																		{
																			label: Zn("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: Zn("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_MOB".concat(n, "ovl_bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(na, {
																	value: ke,
																	options: [
																		{ label: Zn("Default"), value: "" },
																		{ label: Zn("Auto"), value: "auto" },
																		{ label: Zn("Cover"), value: "cover" },
																		{ label: Zn("Contain"), value: "contain" },
																		{ label: Zn("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			Qn(
																				{},
																				"hov_MOB".concat(
																					n,
																					"ovl_backgroundSize"
																				),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === ke &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: Me,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				Qn(
																					{},
																					"hov_MOB".concat(
																						n,
																						"ovl_bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(oa, {
																			value: Ae,
																			min: 0,
																			max: "px" === Me ? 2e3 : 100,
																			step: "px" === Me ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					Qn(
																						{},
																						"hov_MOB".concat(
																							n,
																							"ovl_bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														)
												)
										)
								),
							"gradient" === ee &&
								React.createElement(Gn, {
									gradientColor: ne,
									onChange: function (e) {
										return c(Qn({}, "hov_".concat(n, "overlayGradient"), e));
									},
								}),
							React.createElement("hr", null),
							!o &&
								React.createElement(oa, {
									label: Zn("Overlay Transition"),
									value: s,
									min: 0,
									max: 5,
									step: 0.1,
									onChange: function (e) {
										return c(Qn({}, "".concat(n, "ovl_bg_transition"), e));
									},
								}),
							React.createElement("hr", null),
							React.createElement(
								ln,
								{
									onReset: function () {
										return c(Qn({}, "hov_".concat(n, "ovl_opacity"), void 0));
									},
								},
								React.createElement(oa, {
									label: Zn("Opacity"),
									value: re,
									onChange: function (e) {
										return c(Qn({}, "hov_".concat(n, "ovl_opacity"), e));
									},
									step: 0.01,
									min: 0,
									max: 1,
								})
							),
							!o &&
								re &&
								React.createElement(oa, {
									label: Zn("Opacity Transition"),
									value: m,
									onChange: function (e) {
										return c(Qn({}, "".concat(n, "ovl_opacityTransition"), e));
									},
									step: 0.01,
									min: 0,
									max: 5,
								}),
							React.createElement("hr", null),
							React.createElement(na, {
								label: Zn("Blend Mode"),
								value: le,
								options: [
									{ label: Zn("Normal"), value: "" },
									{ label: Zn("multiply"), value: "multiply" },
									{ label: Zn("screen"), value: "screen" },
									{ label: Zn("overlay"), value: "overlay" },
									{ label: Zn("darken"), value: "darken" },
									{ label: Zn("lighten"), value: "lighten" },
									{ label: Zn("color-dodge"), value: "Color Dodge" },
									{ label: Zn("saturation"), value: "saturation" },
									{ label: Zn("color"), value: "color" },
									{ label: Zn("luminosity"), value: "luminosity" },
								],
								onChange: function (e) {
									return c(Qn({}, "hov_".concat(n, "ovl_blendMode"), e));
								},
							}),
							React.createElement(la, {
								label: Zn("CSS Filters"),
								checked: ie,
								onChange: function () {
									return c(Qn({}, "hov_".concat(n, "ovl_allowFilters"), !ie));
								},
							}),
							ie &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(oa, {
										label: Zn("Blur"),
										value: pe,
										onChange: function (e) {
											return c(Qn({}, "hov_".concat(n, "ovl_fltrBlur"), e));
										},
										step: 0.1,
										min: 0,
										max: 10,
									}),
									React.createElement(oa, {
										label: Zn("Brightness"),
										value: se,
										onChange: function (e) {
											return c(
												Qn({}, "hov_".concat(n, "ovl_fltrBrightness"), e)
											);
										},
										step: 1,
										min: 0,
										max: 200,
									}),
									React.createElement(oa, {
										label: Zn("Contrast"),
										value: ue,
										onChange: function (e) {
											return c(Qn({}, "hov_".concat(n, "ovl_fltrContrast"), e));
										},
										step: 1,
										min: 0,
										max: 200,
									}),
									React.createElement(oa, {
										label: Zn("Saturation"),
										value: me,
										onChange: function (e) {
											return c(
												Qn({}, "hov_".concat(n, "ovl_fltrSaturation"), e)
											);
										},
										step: 1,
										min: 0,
										max: 200,
									}),
									React.createElement(oa, {
										label: Zn("Hue"),
										value: ge,
										onChange: function (e) {
											return c(Qn({}, "hov_".concat(n, "ovl_fltrHue"), e));
										},
										step: 1,
										min: 0,
										max: 360,
									}),
									React.createElement("hr", null),
									!o &&
										React.createElement(oa, {
											label: Zn("Css Filters Transition"),
											value: u,
											onChange: function (e) {
												return c(
													Qn({}, "".concat(n, "ovl_filtersTransition"), e)
												);
											},
											step: 0.01,
											min: 0,
											max: 5,
										})
								)
						)
				);
			}
			function sa(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var ua = wp.i18n.__,
				ma = wp.blockEditor.MediaUpload,
				pa = wp.components,
				ga = pa.SelectControl,
				ba = pa.Button,
				da = pa.RangeControl,
				va = pa.BaseControl,
				fa = pa.ButtonGroup;
			function ha(e) {
				var t = e.resRequiredProps,
					n = e.controlName,
					a = e.noMainBgi,
					o = e.noTransition,
					c = t.setAttributes,
					r = t.attributes,
					l = t.resOption,
					i = r["".concat(n, "bg_hoverType")],
					s = r["".concat(n, "bg_transition")],
					u = r["".concat(n, "backgroundType")],
					m = r["".concat(n, "backgroundColor")],
					p = r["".concat(n, "gradientColor")],
					g = r["".concat(n, "bgImageURL")],
					b = r["".concat(n, "bgImageID")],
					d = r["".concat(n, "bgImgAttachment")],
					v = r["".concat(n, "backgroundSize")],
					f = r["".concat(n, "bgImgCustomSize")],
					h = r["".concat(n, "bgImgCustomSizeUnit")],
					y = r["".concat(n, "bgImgPos")],
					R = r["".concat(n, "bgImgcustomPosX")],
					x = r["".concat(n, "bgImgcustomPosXUnit")],
					C = r["".concat(n, "bgImgcustomPosY")],
					_ = r["".concat(n, "bgImgcustomPosYUnit")],
					E = r["".concat(n, "bgImgRepeat")],
					T = r["TAB".concat(n, "backgroundSize")],
					S = r["TAB".concat(n, "bgImgCustomSize")],
					O = r["TAB".concat(n, "bgImgCustomSizeUnit")],
					I = r["TAB".concat(n, "bgImgPos")],
					B = r["TAB".concat(n, "bgImgcustomPosX")],
					w = r["TAB".concat(n, "bgImgcustomPosXUnit")],
					P = r["TAB".concat(n, "bgImgcustomPosY")],
					k = r["TAB".concat(n, "bgImgcustomPosYUnit")],
					A = r["TAB".concat(n, "bgImgRepeat")],
					M = r["MOB".concat(n, "backgroundSize")],
					U = r["MOB".concat(n, "bgImgCustomSize")],
					D = r["MOB".concat(n, "bgImgCustomSizeUnit")],
					F = r["MOB".concat(n, "bgImgPos")],
					z = r["MOB".concat(n, "bgImgcustomPosX")],
					L = r["MOB".concat(n, "bgImgcustomPosXUnit")],
					j = r["MOB".concat(n, "bgImgcustomPosY")],
					N = r["MOB".concat(n, "bgImgcustomPosYUnit")],
					Y = r["MOB".concat(n, "bgImgRepeat")],
					X = r["hov_".concat(n, "backgroundType")],
					q = r["hov_".concat(n, "backgroundColor")],
					W = r["hov_".concat(n, "gradientColor")],
					G = r["hov_".concat(n, "bgImageURL")],
					K = r["hov_".concat(n, "bgImageID")],
					V = r["hov_".concat(n, "bgImgAttachment")],
					$ = r["hov_".concat(n, "backgroundSize")],
					J = r["hov_".concat(n, "bgImgCustomSize")],
					Q = r["hov_".concat(n, "bgImgCustomSizeUnit")],
					Z = r["hov_".concat(n, "bgImgPos")],
					ee = r["hov_".concat(n, "bgImgcustomPosX")],
					te = r["hov_".concat(n, "bgImgcustomPosXUnit")],
					ne = r["hov_".concat(n, "bgImgcustomPosY")],
					ae = r["hov_".concat(n, "bgImgcustomPosYUnit")],
					oe = r["hov_".concat(n, "bgImgRepeat")],
					ce = r["hov_TAB".concat(n, "backgroundSize")],
					re = r["hov_TAB".concat(n, "bgImgCustomSize")],
					le = r["hov_TAB".concat(n, "bgImgCustomSizeUnit")],
					ie = r["hov_TAB".concat(n, "bgImgPos")],
					se = r["hov_TAB".concat(n, "bgImgcustomPosX")],
					ue = r["hov_TAB".concat(n, "bgImgcustomPosXUnit")],
					me = r["hov_TAB".concat(n, "bgImgcustomPosY")],
					pe = r["hov_TAB".concat(n, "bgImgcustomPosYUnit")],
					ge = r["hov_TAB".concat(n, "bgImgRepeat")],
					be = r["hov_MOB".concat(n, "backgroundSize")],
					de = r["hov_MOB".concat(n, "bgImgCustomSize")],
					ve = r["hov_MOB".concat(n, "bgImgCustomSizeUnit")],
					fe = r["hov_MOB".concat(n, "bgImgPos")],
					he = r["hov_MOB".concat(n, "bgImgcustomPosX")],
					ye = r["hov_MOB".concat(n, "bgImgcustomPosXUnit")],
					Re = r["hov_MOB".concat(n, "bgImgcustomPosY")],
					xe = r["hov_MOB".concat(n, "bgImgcustomPosYUnit")],
					Ce = r["hov_MOB".concat(n, "bgImgRepeat")];
				return React.createElement(
					React.Fragment,
					null,
					React.createElement(
						va,
						null,
						React.createElement(
							fa,
							null,
							[
								{ label: ua("Normal"), value: "normal" },
								{ label: ua("Hover"), value: "hover" },
							].map(function (e) {
								var t = e.value,
									a = e.label;
								return React.createElement(
									ba,
									{
										isPrimary: i === t,
										isSecondary: i !== t,
										onClick: function () {
											return c(sa({}, "".concat(n, "bg_hoverType"), t));
										},
									},
									a
								);
							})
						)
					),
					"normal" === i &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(
								va,
								{ label: ua("Background Type") },
								React.createElement(
									fa,
									null,
									[
										{ label: ua("Classic"), value: "classic" },
										{ label: ua("Gradient"), value: "gradient" },
									].map(function (e) {
										var t = e.value,
											a = e.label;
										return React.createElement(
											ba,
											{
												isPrimary: u === t,
												isSecondary: u !== t,
												onClick: function () {
													return c(sa({}, "".concat(n, "backgroundType"), t));
												},
											},
											a
										);
									})
								)
							),
							"classic" === u &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(rn, {
										label: ua("Background Color"),
										color: m,
										onChange: function (e) {
											return c(sa({}, "".concat(n, "backgroundColor"), e));
										},
									}),
									!1 === a &&
										React.createElement(
											React.Fragment,
											null,
											React.createElement(va, {
												label: ua("Background Image"),
											}),
											React.createElement(ma, {
												onSelect: function (e) {
													var t,
														a = e.url,
														o = e.id;
													return c(
														(sa((t = {}), "".concat(n, "bgImageURL"), a),
														sa(t, "".concat(n, "bgImageID"), o),
														t)
													);
												},
												type: "image",
												value: b,
												render: function (e) {
													var t = e.open;
													return (
														!g &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(ba, {
																className:
																	"eb-background-control-inspector-panel-img-btn components-button",
																label: ua("Upload Image"),
																icon: "format-image",
																onClick: t,
															}),
															React.createElement("span", {
																style: { padding: "10px 0", display: "block" },
															})
														)
													);
												},
											}),
											g &&
												React.createElement(
													React.Fragment,
													null,
													React.createElement(Jn, {
														imageUrl: g,
														onDeleteImage: function () {
															return c(
																sa({}, "".concat(n, "bgImageURL"), null)
															);
														},
													}),
													"Desktop" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(ga, {
																	value: y,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("Center Center"),
																			value: "center center",
																		},
																		{
																			label: ua("Center Left"),
																			value: "center left",
																		},
																		{
																			label: ua("Center Right"),
																			value: "center right",
																		},
																		{
																			label: ua("Top Center"),
																			value: "top center",
																		},
																		{
																			label: ua("Top Left"),
																			value: "top left",
																		},
																		{
																			label: ua("Top Right"),
																			value: "top right",
																		},
																		{
																			label: ua("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: ua("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: ua("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "".concat(n, "bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === y &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: x,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"".concat(n, "bgImgcustomPosXUnit"),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(da, {
																			value: R,
																			min: 0,
																			max: "px" === x ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"".concat(n, "bgImgcustomPosX"),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: _,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"".concat(n, "bgImgcustomPosYUnit"),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(da, {
																			value: C,
																			min: 0,
																			max: "px" === _ ? 2e3 : 100,
																			step: "px" === _ ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"".concat(n, "bgImgcustomPosY"),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(ga, {
																label: "Attachment",
																value: d,
																options: [
																	{ label: ua("Default"), value: "" },
																	{ label: ua("Scroll"), value: "scroll" },
																	{ label: ua("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		sa({}, "".concat(n, "bgImgAttachment"), e)
																	);
																},
															}),
															"fixed" === d &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(ga, {
																	value: E,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: ua("Repeat"), value: "repeat" },
																		{
																			label: ua("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: ua("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "".concat(n, "bgImgRepeat"), e)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(ga, {
																	value: v,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{ label: ua("Auto"), value: "auto" },
																		{ label: ua("Cover"), value: "cover" },
																		{ label: ua("Contain"), value: "contain" },
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "".concat(n, "backgroundSize"), e)
																		);
																	},
																})
															),
															"custom" === v &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: h,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"".concat(n, "bgImgCustomSizeUnit"),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(da, {
																			value: f,
																			min: 0,
																			max: "px" === h ? 2e3 : 100,
																			step: "px" === h ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"".concat(n, "bgImgCustomSize"),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Tablet" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(ga, {
																	value: I,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("Center Center"),
																			value: "center center",
																		},
																		{
																			label: ua("Center Left"),
																			value: "center left",
																		},
																		{
																			label: ua("Center Right"),
																			value: "center right",
																		},
																		{
																			label: ua("Top Center"),
																			value: "top center",
																		},
																		{
																			label: ua("Top Left"),
																			value: "top left",
																		},
																		{
																			label: ua("Top Right"),
																			value: "top right",
																		},
																		{
																			label: ua("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: ua("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: ua("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "TAB".concat(n, "bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === I &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: w,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"TAB".concat(
																						n,
																						"bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(da, {
																			value: B,
																			min: 0,
																			max: "px" === w ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"TAB".concat(n, "bgImgcustomPosX"),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: k,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"TAB".concat(
																						n,
																						"bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(da, {
																			value: P,
																			min: 0,
																			max: "px" === k ? 2e3 : 100,
																			step: "px" === k ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"TAB".concat(n, "bgImgcustomPosY"),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(ga, {
																label: "Attachment",
																value: d,
																options: [
																	{ label: ua("Default"), value: "" },
																	{ label: ua("Scroll"), value: "scroll" },
																	{ label: ua("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		sa({}, "".concat(n, "bgImgAttachment"), e)
																	);
																},
															}),
															"fixed" === d &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(ga, {
																	value: A,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: ua("Repeat"), value: "repeat" },
																		{
																			label: ua("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: ua("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "TAB".concat(n, "bgImgRepeat"), e)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(ga, {
																	value: T,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{ label: ua("Auto"), value: "auto" },
																		{ label: ua("Cover"), value: "cover" },
																		{ label: ua("Contain"), value: "contain" },
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"TAB".concat(n, "backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === T &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: O,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"TAB".concat(
																						n,
																						"bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(da, {
																			value: S,
																			min: 0,
																			max: "px" === O ? 2e3 : 100,
																			step: "px" === O ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"TAB".concat(n, "bgImgCustomSize"),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Mobile" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(ga, {
																	value: F,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("Center Center"),
																			value: "center center",
																		},
																		{
																			label: ua("Center Left"),
																			value: "center left",
																		},
																		{
																			label: ua("Center Right"),
																			value: "center right",
																		},
																		{
																			label: ua("Top Center"),
																			value: "top center",
																		},
																		{
																			label: ua("Top Left"),
																			value: "top left",
																		},
																		{
																			label: ua("Top Right"),
																			value: "top right",
																		},
																		{
																			label: ua("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: ua("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: ua("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "MOB".concat(n, "bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === F &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: L,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"MOB".concat(
																						n,
																						"bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(da, {
																			value: z,
																			min: 0,
																			max: "px" === L ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"MOB".concat(n, "bgImgcustomPosX"),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: N,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"MOB".concat(
																						n,
																						"bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(da, {
																			value: j,
																			min: 0,
																			max: "px" === N ? 2e3 : 100,
																			step: "px" === N ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"MOB".concat(n, "bgImgcustomPosY"),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(ga, {
																label: "Attachment",
																value: d,
																options: [
																	{ label: ua("Default"), value: "" },
																	{ label: ua("Scroll"), value: "scroll" },
																	{ label: ua("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		sa({}, "".concat(n, "bgImgAttachment"), e)
																	);
																},
															}),
															"fixed" === d &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(ga, {
																	value: Y,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: ua("Repeat"), value: "repeat" },
																		{
																			label: ua("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: ua("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "MOB".concat(n, "bgImgRepeat"), e)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(ga, {
																	value: M,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{ label: ua("Auto"), value: "auto" },
																		{ label: ua("Cover"), value: "cover" },
																		{ label: ua("Contain"), value: "contain" },
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"MOB".concat(n, "backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === M &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: D,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"MOB".concat(
																						n,
																						"bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(da, {
																			value: U,
																			min: 0,
																			max: "px" === D ? 2e3 : 100,
																			step: "px" === D ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"MOB".concat(n, "bgImgCustomSize"),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														)
												)
										)
								),
							"gradient" === u &&
								React.createElement(Gn, {
									gradientColor: p,
									onChange: function (e) {
										return c(sa({}, "".concat(n, "gradientColor"), e));
									},
								})
						),
					"hover" === i &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement(
								va,
								{ label: ua("Background Type") },
								React.createElement(
									fa,
									null,
									[
										{ label: ua("Classic"), value: "classic" },
										{ label: ua("Gradient"), value: "gradient" },
									].map(function (e) {
										var t = e.value,
											a = e.label;
										return React.createElement(
											ba,
											{
												isPrimary: X === t,
												isSecondary: X !== t,
												onClick: function () {
													return c(
														sa({}, "hov_".concat(n, "backgroundType"), t)
													);
												},
											},
											a
										);
									})
								)
							),
							"classic" === X &&
								React.createElement(
									React.Fragment,
									null,
									React.createElement(rn, {
										label: ua("Background Color"),
										color: q,
										onChange: function (e) {
											return c(sa({}, "hov_".concat(n, "backgroundColor"), e));
										},
									}),
									!1 === a &&
										React.createElement(
											React.Fragment,
											null,
											React.createElement(va, {
												label: ua("Background Image"),
											}),
											React.createElement(ma, {
												onSelect: function (e) {
													var t,
														a = e.url,
														o = e.id;
													return c(
														(sa((t = {}), "hov_".concat(n, "bgImageURL"), a),
														sa(t, "hov_".concat(n, "bgImageID"), o),
														t)
													);
												},
												type: "image",
												value: K,
												render: function (e) {
													var t = e.open;
													return (
														!G &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(ba, {
																className:
																	"eb-background-control-inspector-panel-img-btn components-button",
																label: ua("Upload Image"),
																icon: "format-image",
																onClick: t,
															}),
															React.createElement("span", {
																style: { padding: "10px 0", display: "block" },
															})
														)
													);
												},
											}),
											G &&
												React.createElement(
													React.Fragment,
													null,
													React.createElement(Jn, {
														imageUrl: G,
														onDeleteImage: function () {
															return c(
																sa({}, "hov_".concat(n, "bgImageURL"), null)
															);
														},
													}),
													"Desktop" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(ga, {
																	value: Z,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("Center Center"),
																			value: "center center",
																		},
																		{
																			label: ua("Center Left"),
																			value: "center left",
																		},
																		{
																			label: ua("Center Right"),
																			value: "center right",
																		},
																		{
																			label: ua("Top Center"),
																			value: "top center",
																		},
																		{
																			label: ua("Top Left"),
																			value: "top left",
																		},
																		{
																			label: ua("Top Right"),
																			value: "top right",
																		},
																		{
																			label: ua("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: ua("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: ua("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "hov_".concat(n, "bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === Z &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: te,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_".concat(
																						n,
																						"bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(da, {
																			value: ee,
																			min: 0,
																			max: "px" === te ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_".concat(n, "bgImgcustomPosX"),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: ae,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_".concat(
																						n,
																						"bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(da, {
																			value: ne,
																			min: 0,
																			max: "px" === ae ? 2e3 : 100,
																			step: "px" === ae ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_".concat(n, "bgImgcustomPosY"),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(ga, {
																label: "Attachment",
																value: V,
																options: [
																	{ label: ua("Default"), value: "" },
																	{ label: ua("Scroll"), value: "scroll" },
																	{ label: ua("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		sa(
																			{},
																			"hov_".concat(n, "bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === V &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(ga, {
																	value: oe,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: ua("Repeat"), value: "repeat" },
																		{
																			label: ua("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: ua("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "hov_".concat(n, "bgImgRepeat"), e)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(ga, {
																	value: $,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{ label: ua("Auto"), value: "auto" },
																		{ label: ua("Cover"), value: "cover" },
																		{ label: ua("Contain"), value: "contain" },
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"hov_".concat(n, "backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === $ &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: Q,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_".concat(
																						n,
																						"bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(da, {
																			value: J,
																			min: 0,
																			max: "px" === Q ? 2e3 : 100,
																			step: "px" === Q ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_".concat(n, "bgImgCustomSize"),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Tablet" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(ga, {
																	value: ie,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("Center Center"),
																			value: "center center",
																		},
																		{
																			label: ua("Center Left"),
																			value: "center left",
																		},
																		{
																			label: ua("Center Right"),
																			value: "center right",
																		},
																		{
																			label: ua("Top Center"),
																			value: "top center",
																		},
																		{
																			label: ua("Top Left"),
																			value: "top left",
																		},
																		{
																			label: ua("Top Right"),
																			value: "top right",
																		},
																		{
																			label: ua("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: ua("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: ua("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "hov_TAB".concat(n, "bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === ie &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: ue,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_TAB".concat(
																						n,
																						"bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(da, {
																			value: se,
																			min: 0,
																			max: "px" === ue ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_TAB".concat(
																							n,
																							"bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: pe,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_TAB".concat(
																						n,
																						"bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(da, {
																			value: me,
																			min: 0,
																			max: "px" === pe ? 2e3 : 100,
																			step: "px" === pe ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_TAB".concat(
																							n,
																							"bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(ga, {
																label: "Attachment",
																value: V,
																options: [
																	{ label: ua("Default"), value: "" },
																	{ label: ua("Scroll"), value: "scroll" },
																	{ label: ua("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		sa(
																			{},
																			"hov_".concat(n, "bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === V &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(ga, {
																	value: ge,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: ua("Repeat"), value: "repeat" },
																		{
																			label: ua("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: ua("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"hov_TAB".concat(n, "bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(ga, {
																	value: ce,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{ label: ua("Auto"), value: "auto" },
																		{ label: ua("Cover"), value: "cover" },
																		{ label: ua("Contain"), value: "contain" },
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"hov_TAB".concat(n, "backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === ce &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: le,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_TAB".concat(
																						n,
																						"bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(da, {
																			value: re,
																			min: 0,
																			max: "px" === le ? 2e3 : 100,
																			step: "px" === le ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_TAB".concat(
																							n,
																							"bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														),
													"Mobile" === l &&
														React.createElement(
															React.Fragment,
															null,
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Position" },
																React.createElement(ga, {
																	value: fe,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("Center Center"),
																			value: "center center",
																		},
																		{
																			label: ua("Center Left"),
																			value: "center left",
																		},
																		{
																			label: ua("Center Right"),
																			value: "center right",
																		},
																		{
																			label: ua("Top Center"),
																			value: "top center",
																		},
																		{
																			label: ua("Top Left"),
																			value: "top left",
																		},
																		{
																			label: ua("Top Right"),
																			value: "top right",
																		},
																		{
																			label: ua("Bottom Center"),
																			value: "bottom center",
																		},
																		{
																			label: ua("Bottom Left"),
																			value: "bottom left",
																		},
																		{
																			label: ua("Bottom Right"),
																			value: "bottom right",
																		},
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa({}, "hov_MOB".concat(n, "bgImgPos"), e)
																		);
																	},
																})
															),
															"custom" === fe &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: ye,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_MOB".concat(
																						n,
																						"bgImgcustomPosXUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "X Position",
																		},
																		React.createElement(da, {
																			value: he,
																			min: 0,
																			max: "px" === ye ? 2e3 : 100,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_MOB".concat(
																							n,
																							"bgImgcustomPosX"
																						),
																						e
																					)
																				);
																			},
																		})
																	),
																	React.createElement(H, {
																		selectedUnit: xe,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_MOB".concat(
																						n,
																						"bgImgcustomPosYUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{
																			resRequiredProps: t,
																			label: "Y Position",
																		},
																		React.createElement(da, {
																			value: Re,
																			min: 0,
																			max: "px" === xe ? 2e3 : 100,
																			step: "px" === xe ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_MOB".concat(
																							n,
																							"bgImgcustomPosY"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																),
															React.createElement(ga, {
																label: "Attachment",
																value: V,
																options: [
																	{ label: ua("Default"), value: "" },
																	{ label: ua("Scroll"), value: "scroll" },
																	{ label: ua("Fixed"), value: "fixed" },
																],
																onChange: function (e) {
																	return c(
																		sa(
																			{},
																			"hov_".concat(n, "bgImgAttachment"),
																			e
																		)
																	);
																},
															}),
															"fixed" === V &&
																React.createElement(
																	"p",
																	{
																		style: {
																			marginTop: "-10px",
																			paddingBottom: "10px",
																		},
																	},
																	React.createElement(
																		"i",
																		null,
																		"Note: Attachment Fixed works only on desktop."
																	)
																),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Repeat" },
																React.createElement(ga, {
																	value: Ce,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{
																			label: ua("No-repeat"),
																			value: "no-repeat",
																		},
																		{ label: ua("Repeat"), value: "repeat" },
																		{
																			label: ua("Repeat-x"),
																			value: "repeat-x",
																		},
																		{
																			label: ua("Repeat-y"),
																			value: "repeat-y",
																		},
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"hov_MOB".concat(n, "bgImgRepeat"),
																				e
																			)
																		);
																	},
																})
															),
															React.createElement(
																It,
																{ resRequiredProps: t, label: "Size" },
																React.createElement(ga, {
																	value: be,
																	options: [
																		{ label: ua("Default"), value: "" },
																		{ label: ua("Auto"), value: "auto" },
																		{ label: ua("Cover"), value: "cover" },
																		{ label: ua("Contain"), value: "contain" },
																		{ label: ua("Custom"), value: "custom" },
																	],
																	onChange: function (e) {
																		return c(
																			sa(
																				{},
																				"hov_MOB".concat(n, "backgroundSize"),
																				e
																			)
																		);
																	},
																})
															),
															"custom" === be &&
																React.createElement(
																	React.Fragment,
																	null,
																	React.createElement(H, {
																		selectedUnit: ve,
																		unitTypes: [
																			{ label: "px", value: "px" },
																			{ label: "em", value: "em" },
																			{ label: "%", value: "%" },
																		],
																		onClick: function (e) {
																			return c(
																				sa(
																					{},
																					"hov_MOB".concat(
																						n,
																						"bgImgCustomSizeUnit"
																					),
																					e
																				)
																			);
																		},
																	}),
																	React.createElement(
																		It,
																		{ resRequiredProps: t, label: "Width" },
																		React.createElement(da, {
																			value: de,
																			min: 0,
																			max: "px" === ve ? 2e3 : 100,
																			step: "px" === ve ? 1 : 0.1,
																			onChange: function (e) {
																				return c(
																					sa(
																						{},
																						"hov_MOB".concat(
																							n,
																							"bgImgCustomSize"
																						),
																						e
																					)
																				);
																			},
																		})
																	)
																)
														)
												)
										)
								),
							"gradient" === X &&
								React.createElement(Gn, {
									gradientColor: W,
									onChange: function (e) {
										return c(sa({}, "hov_".concat(n, "gradientColor"), e));
									},
								}),
							!o &&
								React.createElement(da, {
									label: ua("Background Transition"),
									value: s,
									min: 0,
									max: 5,
									step: 0.1,
									onChange: function (e) {
										return c(sa({}, "".concat(n, "bg_transition"), e));
									},
								})
						)
				);
			}
			var ya = wp.i18n.__,
				Ra = wp.components.ToggleControl;
			function xa(e) {
				var t = e.resRequiredProps,
					n = e.controlName,
					a = e.noOverlay,
					o = void 0 !== a && a,
					c = e.noMainBgi,
					r = void 0 !== c && c,
					l = e.noOverlayBgi,
					i = void 0 !== l && l,
					s = e.noTransition,
					u = void 0 !== s && s,
					m = t.setAttributes,
					p = t.attributes["".concat(n, "isBgOverlay")];
				return React.createElement(
					React.Fragment,
					null,
					React.createElement(ha, {
						resRequiredProps: t,
						controlName: n,
						noMainBgi: r,
						noTransition: u,
					}),
					!1 === o &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement("hr", null),
							React.createElement(Ra, {
								label: ya("Enable Overlay"),
								checked: p,
								onChange: function () {
									return m(
										(function (e, t, n) {
											return (
												t in e
													? Object.defineProperty(e, t, {
															value: n,
															enumerable: !0,
															configurable: !0,
															writable: !0,
													  })
													: (e[t] = n),
												e
											);
										})({}, "".concat(n, "isBgOverlay"), !p)
									);
								},
							}),
							p &&
								React.createElement(ia, {
									resRequiredProps: t,
									controlName: n,
									noOverlayBgi: i,
									noTransition: u,
								})
						)
				);
			}
			function Ca(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var _a = wp.i18n.__,
				Ea = wp.components,
				Ta = Ea.PanelBody,
				Sa = Ea.Button,
				Oa = Ea.BaseControl,
				Ia = Ea.ToggleControl,
				Ba = Ea.RangeControl,
				wa = Ea.TextControl,
				Pa = Ea.TabPanel,
				ka = wp.blockEditor.InspectorControls,
				Aa = wp.element.useEffect,
				Ma = wp.data.select,
				Ua = function (e) {
					var t = e.attributes,
						n = e.setAttributes,
						a = t.resOption,
						l = t.prefix,
						i = t.typedText,
						s = t.suffix,
						u = t.prefixColor,
						m = t.typedTextColor,
						p = t.suffixTextColor,
						g = t.typeSpeed,
						b = t.startDelay,
						d = t.smartBackspace,
						v = t.backSpeed,
						f = t.backDelay,
						h = t.fadeOut,
						y = t.fadeOutDelay,
						R = t.loop,
						x = t.showCursor;
					Aa(function () {
						n({
							resOption: Ma(
								"core/edit-post"
							).__experimentalGetPreviewDeviceType(),
						});
					}, []),
						Aa(
							function () {
								B({ domObj: document, resOption: a });
							},
							[a]
						),
						Aa(function () {
							var e = (function (e) {
								var t = e.domObj,
									n = e.select,
									a = e.setAttributes,
									o = t.querySelector(
										"#editor .edit-post-layout + .popover-slot"
									),
									c = function (e) {
										/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(
											e.target.className
										) &&
											setTimeout(function () {
												var e = n(
													"core/edit-post"
												).__experimentalGetPreviewDeviceType();
												B({ isForPreviewButton: !0, domObj: t, resOption: e }),
													a({ resOption: e });
											}, 0);
									};
								return (
									o.addEventListener("click", c),
									function () {
										o.removeEventListener("click", c);
									}
								);
							})({ domObj: document, select: Ma, setAttributes: n });
							return function () {
								e();
							};
						}, []);
					var C = { setAttributes: n, resOption: a, attributes: t };
					return React.createElement(
						ka,
						{ key: "controls" },
						React.createElement(
							"div",
							{ className: "eb-panel-control" },
							React.createElement(
								Pa,
								{
									className: "eb-parent-tab-panel",
									activeClass: "active-tab",
									tabs: [
										{
											name: "general",
											title: "General",
											className: "eb-tab general",
										},
										{
											name: "styles",
											title: "Styles",
											className: "eb-tab styles",
										},
									],
								},
								function (e) {
									return React.createElement(
										"div",
										{ className: "eb-tab-controls" + e.name },
										"general" === e.name &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(
													Ta,
													{ title: _a("Content Settings") },
													React.createElement(wa, {
														label: _a("Prefix Text"),
														placeholder: _a("Add prefix text"),
														value: l,
														onChange: function (e) {
															return n({ prefix: e });
														},
													}),
													React.createElement(
														Oa,
														{ label: _a("Typed Text") },
														0 !== i.length &&
															React.createElement(yt, {
																typedText: i,
																setAttributes: n,
															}),
														React.createElement(
															Sa,
															{
																className: "is-default eb-typed-add-wrapper",
																label: _a("Add Typed Item"),
																icon: "plus-alt",
																onClick: function () {
																	var e,
																		t = [].concat(
																			(function (e) {
																				if (Array.isArray(e)) return Ca(e);
																			})((e = i)) ||
																				(function (e) {
																					if (
																						("undefined" != typeof Symbol &&
																							null != e[Symbol.iterator]) ||
																						null != e["@@iterator"]
																					)
																						return Array.from(e);
																				})(e) ||
																				(function (e, t) {
																					if (e) {
																						if ("string" == typeof e)
																							return Ca(e, void 0);
																						var n = Object.prototype.toString
																							.call(e)
																							.slice(8, -1);
																						return (
																							"Object" === n &&
																								e.constructor &&
																								(n = e.constructor.name),
																							"Map" === n || "Set" === n
																								? Array.from(e)
																								: "Arguments" === n ||
																								  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																										n
																								  )
																								? Ca(e, void 0)
																								: void 0
																						);
																					}
																				})(e) ||
																				(function () {
																					throw new TypeError(
																						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
																					);
																				})(),
																			[
																				{
																					text: "Typed text ".concat(
																						i.length + 1
																					),
																				},
																			]
																		);
																	n({ typedText: t });
																},
															},
															React.createElement(
																"span",
																{ className: "eb-typed-add-button" },
																"Add Typed Text"
															)
														)
													),
													React.createElement(wa, {
														label: _a("Suffix Text"),
														placeholder: _a("Add suffix text"),
														value: s,
														onChange: function (e) {
															return n({ suffix: e });
														},
													}),
													React.createElement(Ia, {
														label: _a("Loop"),
														checked: R,
														onChange: function () {
															return n({ loop: !R });
														},
													}),
													!h &&
														React.createElement(Ia, {
															label: _a("Smart Backspace"),
															checked: d,
															onChange: function () {
																return n({ smartBackspace: !d });
															},
														}),
													React.createElement(Ia, {
														label: _a("Show Cursor"),
														checked: x,
														onChange: function () {
															return n({ showCursor: !x });
														},
													}),
													React.createElement(Ia, {
														label: _a("Fade Out"),
														checked: h,
														onChange: function () {
															return n({ fadeOut: !h });
														},
													}),
													React.createElement(Ba, {
														label: _a("Type Speed"),
														value: g,
														onChange: function (e) {
															return n({ typeSpeed: e });
														},
														min: 0,
														max: 5e3,
													}),
													React.createElement(Ba, {
														label: _a("Start Delay"),
														value: b,
														onChange: function (e) {
															return n({ startDelay: e });
														},
														min: 0,
														max: 1e3,
													}),
													!h &&
														React.createElement(Ba, {
															label: _a("Back Speed"),
															value: v,
															onChange: function (e) {
																return n({ backSpeed: e });
															},
															min: 0,
															max: 5e3,
														}),
													!h &&
														React.createElement(Ba, {
															label: _a("Back Delay"),
															value: f,
															onChange: function (e) {
																return n({ backDelay: e });
															},
															min: 0,
															max: 1e4,
														}),
													h &&
														React.createElement(Ba, {
															label: _a("Fade Delay"),
															value: y,
															onChange: function (e) {
																return n({ fadeOutDelay: e });
															},
															min: 0,
															max: 5e3,
														})
												)
											),
										"styles" === e.name &&
											React.createElement(
												React.Fragment,
												null,
												React.createElement(
													Ta,
													{
														title: _a("Typing Text Box", "typing-text"),
														initialOpen: !1,
													},
													React.createElement(G, {
														resRequiredProps: C,
														className: "forWrapperMargin",
														controlName: "margin",
														baseLabel: "Margin",
													}),
													React.createElement(G, {
														resRequiredProps: C,
														className: "forWrapperPadding",
														controlName: "padding",
														baseLabel: "Padding",
													}),
													React.createElement(
														Oa,
														null,
														React.createElement(
															"h3",
															{ className: "eb-control-title" },
															_a("Border & Shadow", "typing-text")
														)
													),
													React.createElement(yn, {
														controlName: "wrp_",
														resRequiredProps: C,
													}),
													React.createElement(
														Oa,
														null,
														React.createElement(
															"h3",
															{ className: "eb-control-title" },
															_a("Background", "typing-text")
														)
													),
													React.createElement(xa, {
														controlName: "backgroundWrp_",
														resRequiredProps: C,
														noOverlay: !0,
														noMainBgi: !0,
													})
												),
												l &&
													React.createElement(
														Ta,
														{ title: _a("Prefix"), initialOpen: !1 },
														React.createElement(rn, {
															label: _a("Prefix Color"),
															color: u,
															onChange: function (e) {
																return n({ prefixColor: e });
															},
														}),
														React.createElement(qt, {
															baseLabel: _a("Typography", "typing-text"),
															typographyPrefixConstant: o,
															resRequiredProps: C,
														})
													),
												i.length &&
													React.createElement(
														Ta,
														{
															title: _a("Typed Text", "typing-text"),
															initialOpen: !1,
														},
														React.createElement(rn, {
															label: _a("Typed Text Color", "typing-text"),
															color: m,
															onChange: function (e) {
																return n({ typedTextColor: e });
															},
														}),
														React.createElement(qt, {
															baseLabel: _a("Typography", "typing-text"),
															typographyPrefixConstant: r,
															resRequiredProps: C,
														})
													),
												s &&
													React.createElement(
														Ta,
														{
															title: _a("Suffix", "typing-text"),
															initialOpen: !1,
														},
														React.createElement(rn, {
															label: _a("Suffix Color", "typing-text"),
															color: p,
															onChange: function (e) {
																return n({ suffixTextColor: e });
															},
														}),
														React.createElement(qt, {
															baseLabel: _a("Typography", "typing-text"),
															typographyPrefixConstant: c,
															resRequiredProps: C,
														})
													)
											)
									);
								}
							)
						)
					);
				};
			function Da(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
				return a;
			}
			var Fa = wp.element,
				za = Fa.useEffect,
				La = Fa.useRef,
				ja = Fa.useState,
				Na = wp.blockEditor,
				Ya = Na.BlockControls,
				Xa = Na.AlignmentToolbar,
				qa = Na.useBlockProps,
				Ha = wp.data.select,
				Wa = wp.blockEditor.useBlockProps;
			function Ga(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function Ka(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? Ga(Object(n), !0).forEach(function (t) {
								Va(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: Ga(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			function Va(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			var $a = Ka(
					Ka(
						Ka(
							Ka(
								Ka(
									{
										resOption: { type: "string", default: "Desktop" },
										uniqueIdNumber: { type: "number" },
										blockId: { type: "string" },
										blockRoot: { type: "string", default: "essential_block" },
										blockMeta: { type: "object" },
										prefix: {
											type: "string",
											source: "text",
											selector: ".eb-typed-prefix",
										},
										typedText: {
											type: "array",
											source: "query",
											selector: ".eb-typed-text",
											query: { text: { type: "string", source: "text" } },
											default: [
												{ text: "First Typed Text" },
												{ text: "Second Typed Text" },
											],
										},
										suffix: {
											type: "string",
											source: "text",
											selector: ".eb-typed-suffix",
										},
										prefixColor: { type: "string", default: "#000000" },
										typedTextColor: { type: "string", default: "#000000" },
										suffixTextColor: { type: "string", default: "#000000" },
										typeSpeed: { type: "number", default: 50 },
										startDelay: { type: "number", default: 0 },
										smartBackspace: { type: "boolean", default: !0 },
										backSpeed: { type: "number", default: 40 },
										backDelay: { type: "number", default: 700 },
										fadeOut: { type: "boolean", default: !1 },
										fadeOutDelay: { type: "number", default: 500 },
										loop: { type: "boolean", default: !1 },
										showCursor: { type: "boolean", default: !0 },
										textAlign: { type: "string", default: "left" },
									},
									Object.values(a).reduce(function (e, t) {
										var n,
											a =
												(g((n = {}), "".concat(t, "FontFamily"), {
													type: "string",
												}),
												g(n, "".concat(t, "SizeUnit"), {
													type: "string",
													default: "px",
												}),
												g(n, "".concat(t, "FontSize"), { type: "number" }),
												g(n, "".concat(t, "FontWeight"), { type: "string" }),
												g(n, "".concat(t, "FontStyle"), { type: "string" }),
												g(n, "".concat(t, "TextTransform"), { type: "string" }),
												g(n, "".concat(t, "TextDecoration"), {
													type: "string",
												}),
												g(n, "".concat(t, "LetterSpacingUnit"), {
													type: "string",
													default: "px",
												}),
												g(n, "".concat(t, "LetterSpacing"), { type: "number" }),
												g(n, "".concat(t, "LineHeightUnit"), {
													type: "string",
													default: "em",
												}),
												g(n, "".concat(t, "LineHeight"), { type: "number" }),
												g(n, "TAB".concat(t, "SizeUnit"), {
													type: "string",
													default: "px",
												}),
												g(n, "TAB".concat(t, "FontSize"), { type: "number" }),
												g(n, "TAB".concat(t, "LetterSpacingUnit"), {
													type: "string",
													default: "px",
												}),
												g(n, "TAB".concat(t, "LetterSpacing"), {
													type: "number",
												}),
												g(n, "TAB".concat(t, "LineHeightUnit"), {
													type: "string",
													default: "em",
												}),
												g(n, "TAB".concat(t, "LineHeight"), { type: "number" }),
												g(n, "MOB".concat(t, "SizeUnit"), {
													type: "string",
													default: "px",
												}),
												g(n, "MOB".concat(t, "FontSize"), { type: "number" }),
												g(n, "MOB".concat(t, "LetterSpacingUnit"), {
													type: "string",
													default: "px",
												}),
												g(n, "MOB".concat(t, "LetterSpacing"), {
													type: "number",
												}),
												g(n, "MOB".concat(t, "LineHeightUnit"), {
													type: "string",
													default: "em",
												}),
												g(n, "MOB".concat(t, "LineHeight"), { type: "number" }),
												n);
										return p(p({}, e), a);
									}, {})
								),
								(function (e) {
									var t,
										n,
										a,
										o =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: {},
										c = o.bdrDefaults,
										r =
											void 0 === c
												? { top: 1, right: 1, bottom: 1, left: 1 }
												: c,
										l = o.rdsDefaults,
										i = void 0 === l ? {} : l,
										s = o.noBorder,
										u = void 0 !== s && s,
										m = o.noShadow,
										p = void 0 !== m && m,
										g = x(
											x(
												x(
													x(
														(C((t = {}), "".concat(e, "BorderType"), {
															type: "string",
															default: "normal",
														}),
														C(t, "".concat(e, "borderColor"), {
															type: "string",
														}),
														C(t, "".concat(e, "borderStyle"), {
															type: "string",
															default: "none",
														}),
														C(t, "".concat(e, "HborderColor"), {
															type: "string",
														}),
														C(t, "".concat(e, "HborderStyle"), {
															type: "string",
															default: "none",
														}),
														t),
														h("".concat(e, "Bdr_"), r)
													),
													h("".concat(e, "Rds_"), i)
												),
												h("".concat(e, "HBdr_"))
											),
											h("".concat(e, "HRds_"))
										),
										b =
											(C((n = {}), "".concat(e, "hOffset"), { type: "number" }),
											C(n, "".concat(e, "vOffset"), { type: "number" }),
											C(n, "".concat(e, "blur"), { type: "number" }),
											C(n, "".concat(e, "spread"), { type: "number" }),
											C(n, "".concat(e, "shadowColor"), { type: "string" }),
											C(n, "".concat(e, "inset"), {
												type: "boolean",
												default: !1,
											}),
											C(n, "".concat(e, "shadowType"), {
												type: "string",
												default: "normal",
											}),
											C(n, "".concat(e, "hoverHOffset"), { type: "number" }),
											C(n, "".concat(e, "hoverVOffset"), { type: "number" }),
											C(n, "".concat(e, "hoverBlur"), { type: "number" }),
											C(n, "".concat(e, "hoverSpread"), { type: "number" }),
											C(n, "".concat(e, "hoverShadowColor"), {
												type: "string",
											}),
											C(n, "".concat(e, "hoverInset"), {
												type: "boolean",
												default: !1,
											}),
											n),
										d =
											(C((a = {}), "".concat(e, "borderTransition"), {
												type: "number",
												default: 0.5,
											}),
											C(a, "".concat(e, "radiusTransition"), {
												type: "number",
												default: 0.5,
											}),
											C(a, "".concat(e, "shadowTransition"), {
												type: "number",
												default: 0.5,
											}),
											a);
									return x(
										!0 === u ? x({}, b) : !0 === p ? x({}, g) : x(x({}, g), b),
										d
									);
								})("wrp_")
							),
							h("margin")
						),
						h("padding")
					),
					(function (e) {
						var t,
							n,
							a,
							o,
							c,
							r =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							l = r.isBgDefaultGradient,
							u = r.defaultFillColor,
							m = r.defaultBgGradient,
							p =
								void 0 === m ? "linear-gradient(45deg,#00000000,#00000000)" : m,
							g = r.noOverlay,
							b = void 0 !== g && g,
							d = r.noMainBgi,
							v = void 0 !== d && d,
							f = r.noOverlayBgi,
							h = void 0 !== f && f,
							y = r.noTransition,
							R = void 0 !== y && y,
							x = s(
								{},
								"".concat(e, "backgroundColor"),
								u ? { type: "string", default: u } : { type: "string" }
							),
							C = R
								? {}
								: s({}, "".concat(e, "bg_transition"), {
										type: "number",
										default: 0.5,
								  }),
							_ = R
								? {}
								: (s((t = {}), "".concat(e, "ovl_bg_transition"), {
										type: "number",
										default: 0.5,
								  }),
								  s(t, "".concat(e, "ovl_filtersTransition"), {
										type: "number",
										default: 0.5,
								  }),
								  s(t, "".concat(e, "ovl_opacityTransition"), {
										type: "number",
										default: 0.5,
								  }),
								  t),
							E = i(
								i(
									i(
										s({}, "".concat(e, "bg_hoverType"), {
											type: "string",
											default: "normal",
										}),
										C
									),
									{},
									s({}, "".concat(e, "backgroundType"), {
										type: "string",
										default: !0 === l ? "gradient" : "classic",
									}),
									x
								),
								{},
								(s((n = {}), "".concat(e, "gradientColor"), {
									type: "string",
									default: p,
								}),
								s(n, "hov_".concat(e, "backgroundType"), {
									type: "string",
									default: "classic",
								}),
								s(n, "hov_".concat(e, "backgroundColor"), { type: "string" }),
								s(n, "hov_".concat(e, "gradientColor"), { type: "string" }),
								n)
							),
							T =
								(s((a = {}), "".concat(e, "bgImageURL"), { type: "string" }),
								s(a, "".concat(e, "bgImageID"), { type: "string" }),
								s(a, "".concat(e, "bgImgAttachment"), { type: "string" }),
								s(a, "".concat(e, "backgroundSize"), { type: "string" }),
								s(a, "".concat(e, "bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(a, "".concat(e, "bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(a, "".concat(e, "bgImgPos"), { type: "string" }),
								s(a, "".concat(e, "bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(a, "".concat(e, "bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "".concat(e, "bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(a, "".concat(e, "bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "".concat(e, "bgImgRepeat"), { type: "string" }),
								s(a, "TAB".concat(e, "backgroundSize"), { type: "string" }),
								s(a, "TAB".concat(e, "bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(a, "TAB".concat(e, "bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(a, "TAB".concat(e, "bgImgPos"), { type: "string" }),
								s(a, "TAB".concat(e, "bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(a, "TAB".concat(e, "bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "TAB".concat(e, "bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(a, "TAB".concat(e, "bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "TAB".concat(e, "bgImgRepeat"), { type: "string" }),
								s(a, "MOB".concat(e, "backgroundSize"), { type: "string" }),
								s(a, "MOB".concat(e, "bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(a, "MOB".concat(e, "bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(a, "MOB".concat(e, "bgImgPos"), { type: "string" }),
								s(a, "MOB".concat(e, "bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(a, "MOB".concat(e, "bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "MOB".concat(e, "bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(a, "MOB".concat(e, "bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "MOB".concat(e, "bgImgRepeat"), { type: "string" }),
								s(a, "hov_".concat(e, "bgImageURL"), { type: "string" }),
								s(a, "hov_".concat(e, "bgImageID"), { type: "string" }),
								s(a, "hov_".concat(e, "bgImgAttachment"), { type: "string" }),
								s(a, "hov_".concat(e, "backgroundSize"), { type: "string" }),
								s(a, "hov_".concat(e, "bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(a, "hov_".concat(e, "bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(a, "hov_".concat(e, "bgImgPos"), { type: "string" }),
								s(a, "hov_".concat(e, "bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(a, "hov_".concat(e, "bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "hov_".concat(e, "bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(a, "hov_".concat(e, "bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "hov_".concat(e, "bgImgRepeat"), { type: "string" }),
								s(a, "hov_TAB".concat(e, "backgroundSize"), { type: "string" }),
								s(a, "hov_TAB".concat(e, "bgImgCustomSize"), {
									type: "number",
								}),
								s(a, "hov_TAB".concat(e, "bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(a, "hov_TAB".concat(e, "bgImgPos"), { type: "string" }),
								s(a, "hov_TAB".concat(e, "bgImgcustomPosX"), {
									type: "number",
								}),
								s(a, "hov_TAB".concat(e, "bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "hov_TAB".concat(e, "bgImgcustomPosY"), {
									type: "number",
								}),
								s(a, "hov_TAB".concat(e, "bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "hov_TAB".concat(e, "bgImgRepeat"), { type: "string" }),
								s(a, "hov_MOB".concat(e, "backgroundSize"), { type: "string" }),
								s(a, "hov_MOB".concat(e, "bgImgCustomSize"), {
									type: "number",
								}),
								s(a, "hov_MOB".concat(e, "bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(a, "hov_MOB".concat(e, "bgImgPos"), { type: "string" }),
								s(a, "hov_MOB".concat(e, "bgImgcustomPosX"), {
									type: "number",
								}),
								s(a, "hov_MOB".concat(e, "bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "hov_MOB".concat(e, "bgImgcustomPosY"), {
									type: "number",
								}),
								s(a, "hov_MOB".concat(e, "bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(a, "hov_MOB".concat(e, "bgImgRepeat"), { type: "string" }),
								a),
							S = i(
								i(
									s({}, "".concat(e, "isBgOverlay"), {
										type: "boolean",
										default: !1,
									}),
									_
								),
								{},
								(s((o = {}), "".concat(e, "ovl_hoverType"), {
									type: "string",
									default: "normal",
								}),
								s(o, "".concat(e, "overlayType"), {
									type: "string",
									default: "classic",
								}),
								s(o, "".concat(e, "overlayColor"), { type: "string" }),
								s(o, "".concat(e, "overlayGradient"), {
									type: "string",
									default: "linear-gradient(45deg,#000000cc,#00000099)",
								}),
								s(o, "".concat(e, "ovl_opacity"), {
									type: "number",
									default: 0.5,
								}),
								s(o, "".concat(e, "ovl_blendMode"), { type: "string" }),
								s(o, "".concat(e, "ovl_allowFilters"), {
									type: "boolean",
									default: !1,
								}),
								s(o, "".concat(e, "ovl_fltrBrightness"), {
									type: "number",
									default: 100,
								}),
								s(o, "".concat(e, "ovl_fltrContrast"), {
									type: "number",
									default: 100,
								}),
								s(o, "".concat(e, "ovl_fltrSaturation"), {
									type: "number",
									default: 100,
								}),
								s(o, "".concat(e, "ovl_fltrBlur"), {
									type: "number",
									default: 0,
								}),
								s(o, "".concat(e, "ovl_fltrHue"), {
									type: "number",
									default: 0,
								}),
								s(o, "hov_".concat(e, "overlayType"), {
									type: "string",
									default: "classic",
								}),
								s(o, "hov_".concat(e, "overlayColor"), { type: "string" }),
								s(o, "hov_".concat(e, "overlayGradient"), { type: "string" }),
								s(o, "hov_".concat(e, "ovl_bgImageURL"), { type: "string" }),
								s(o, "hov_".concat(e, "ovl_bgImageID"), { type: "string" }),
								s(o, "hov_".concat(e, "ovl_bgImgAttachment"), {
									type: "string",
								}),
								s(o, "hov_".concat(e, "ovl_opacity"), { type: "number" }),
								s(o, "hov_".concat(e, "ovl_blendMode"), { type: "string" }),
								s(o, "hov_".concat(e, "ovl_allowFilters"), {
									type: "boolean",
									default: !1,
								}),
								s(o, "hov_".concat(e, "ovl_fltrBrightness"), {
									type: "number",
								}),
								s(o, "hov_".concat(e, "ovl_fltrContrast"), { type: "number" }),
								s(o, "hov_".concat(e, "ovl_fltrSaturation"), {
									type: "number",
								}),
								s(o, "hov_".concat(e, "ovl_fltrBlur"), { type: "number" }),
								s(o, "hov_".concat(e, "ovl_fltrHue"), { type: "number" }),
								o)
							),
							O =
								(s((c = {}), "".concat(e, "ovl_bgImageURL"), {
									type: "string",
								}),
								s(c, "".concat(e, "ovl_bgImageID"), { type: "string" }),
								s(c, "".concat(e, "ovl_bgImgAttachment"), { type: "string" }),
								s(c, "".concat(e, "ovl_backgroundSize"), { type: "string" }),
								s(c, "".concat(e, "ovl_bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(c, "".concat(e, "ovl_bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(c, "".concat(e, "ovl_bgImgPos"), { type: "string" }),
								s(c, "".concat(e, "ovl_bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(c, "".concat(e, "ovl_bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "".concat(e, "ovl_bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(c, "".concat(e, "ovl_bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "".concat(e, "ovl_bgImgRepeat"), { type: "string" }),
								s(c, "TAB".concat(e, "ovl_backgroundSize"), { type: "string" }),
								s(c, "TAB".concat(e, "ovl_bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(c, "TAB".concat(e, "ovl_bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(c, "TAB".concat(e, "ovl_bgImgPos"), { type: "string" }),
								s(c, "TAB".concat(e, "ovl_bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(c, "TAB".concat(e, "ovl_bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "TAB".concat(e, "ovl_bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(c, "TAB".concat(e, "ovl_bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "TAB".concat(e, "ovl_bgImgRepeat"), { type: "string" }),
								s(c, "MOB".concat(e, "ovl_backgroundSize"), { type: "string" }),
								s(c, "MOB".concat(e, "ovl_bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(c, "MOB".concat(e, "ovl_bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(c, "MOB".concat(e, "ovl_bgImgPos"), { type: "string" }),
								s(c, "MOB".concat(e, "ovl_bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(c, "MOB".concat(e, "ovl_bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "MOB".concat(e, "ovl_bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(c, "MOB".concat(e, "ovl_bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "MOB".concat(e, "ovl_bgImgRepeat"), { type: "string" }),
								s(c, "hov_".concat(e, "ovl_backgroundSize"), {
									type: "string",
								}),
								s(c, "hov_".concat(e, "ovl_bgImgCustomSize"), {
									type: "number",
									default: 100,
								}),
								s(c, "hov_".concat(e, "ovl_bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(c, "hov_".concat(e, "ovl_bgImgPos"), { type: "string" }),
								s(c, "hov_".concat(e, "ovl_bgImgcustomPosX"), {
									type: "number",
									default: 0,
								}),
								s(c, "hov_".concat(e, "ovl_bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "hov_".concat(e, "ovl_bgImgcustomPosY"), {
									type: "number",
									default: 0,
								}),
								s(c, "hov_".concat(e, "ovl_bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "hov_".concat(e, "ovl_bgImgRepeat"), { type: "string" }),
								s(c, "hov_TAB".concat(e, "ovl_backgroundSize"), {
									type: "string",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgCustomSize"), {
									type: "number",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgPos"), { type: "string" }),
								s(c, "hov_TAB".concat(e, "ovl_bgImgcustomPosX"), {
									type: "number",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgcustomPosY"), {
									type: "number",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "hov_TAB".concat(e, "ovl_bgImgRepeat"), {
									type: "string",
								}),
								s(c, "hov_MOB".concat(e, "ovl_backgroundSize"), {
									type: "string",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgCustomSize"), {
									type: "number",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgCustomSizeUnit"), {
									type: "string",
									default: "%",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgPos"), { type: "string" }),
								s(c, "hov_MOB".concat(e, "ovl_bgImgcustomPosX"), {
									type: "number",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgcustomPosXUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgcustomPosY"), {
									type: "number",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgcustomPosYUnit"), {
									type: "string",
									default: "px",
								}),
								s(c, "hov_MOB".concat(e, "ovl_bgImgRepeat"), {
									type: "string",
								}),
								c),
							I =
								!0 === b
									? !0 === v
										? i({}, E)
										: i(i({}, E), T)
									: !0 === h && !0 === v
									? i(i({}, E), S)
									: !0 === h && !1 === v
									? i(i(i({}, E), T), S)
									: i(
											i(!1 === h && !0 === v ? i({}, E) : i(i({}, E), T), S),
											O
									  );
						return I;
					})("backgroundWrp_", { noOverlay: !0, noMainBgi: !0 })
				),
				Ja = wp.blocks.registerBlockType,
				Qa = wp.i18n.__;
			Ja("typing-text/typing-text-block", {
				title: Qa("Typing Text", "typing-text"),
				description: Qa(
					"Make Your Website Interactive With Typing Text Animation",
					"typing-text"
				),
				category: "widgets",
				keywords: [
					Qa("EB typing text", "essential-blocks"),
					Qa("typing", "essential-blocks"),
					Qa("typing text", "essential-blocks"),
				],
				icon: function () {
					return React.createElement(
						"svg",
						{
							xmlns: "http://www.w3.org/2000/svg",
							x: "0",
							y: "0",
							enableBackground: "new 0 0 70 70",
							version: "1.1",
							viewBox: "0 0 70 70",
							xmlSpace: "preserve",
						},
						React.createElement(
							"linearGradient",
							{
								x1: "-16.082",
								x2: "86.557",
								y1: "32.808",
								y2: "37.212",
								gradientUnits: "userSpaceOnUse",
								id: "SVGID_1_TYPED",
							},
							React.createElement("stop", {
								offset: "0",
								stopColor: "#1A6DFF",
							}),
							React.createElement("stop", { offset: "1", stopColor: "#C822FF" })
						),
						React.createElement("path", {
							d:
								"M63.4 0H6.6C3 0 0 3 0 6.6v56.8C0 67 3 70 6.6 70h56.8c3.6 0 6.6-3 6.6-6.6V6.6C70 3 67 0 63.4 0zM67 63.4c0 2-1.6 3.6-3.6 3.6H6.6c-2 0-3.6-1.6-3.6-3.6V6.6C3 4.6 4.6 3 6.6 3h56.8c2 0 3.6 1.6 3.6 3.6v56.8z",
							className: "st0t",
						}),
						React.createElement(
							"linearGradient",
							{
								x1: "-16.763",
								x2: "85.875",
								y1: "48.693",
								y2: "53.097",
								gradientUnits: "userSpaceOnUse",
								id: "SVGID_2_TYPED",
							},
							React.createElement("stop", {
								offset: "0",
								stopColor: "#1A6DFF",
							}),
							React.createElement("stop", { offset: "1", stopColor: "#C822FF" })
						),
						React.createElement("path", {
							d:
								"M58.8 50.1H44.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z",
							className: "st1t",
						}),
						React.createElement(
							"linearGradient",
							{
								x1: "-16.087",
								x2: "86.551",
								y1: "32.94",
								y2: "37.344",
								gradientUnits: "userSpaceOnUse",
								id: "SVGID_3_TYPED",
							},
							React.createElement("stop", {
								offset: "0",
								stopColor: "#1A6DFF",
							}),
							React.createElement("stop", { offset: "1", stopColor: "#C822FF" })
						),
						React.createElement("path", {
							d:
								"M45.4 25.2v-6.1c0-1.3-1.2-2.2-2.2-2.2H11.9c-1.3 0-2.2 1.2-2.2 2.2v6.1c0 .7.3 1.3.7 1.6.4.4 1.1.7 1.6.7h2.7c1.3 0 2.2-1.2 2.2-2.2v-.8H24V46h-3.2c-1.3 0-2.2 1.2-2.2 2.2v2.7c0 1.3 1.2 2.2 2.2 2.2H35c1.3 0 2.2-1.2 2.2-2.2v-2.6c.1-.5-.1-1-.5-1.4-.4-.5-1-.8-1.7-.8h-3.8V24.4h7.1v.8c0 1.3 1.2 2.2 2.2 2.2h2.7c1.3 0 2.2-1.1 2.2-2.2zm-5.9-3.3H30c-.7 0-1.2.5-1.2 1.2v24.1c0 .7.5 1.2 1.2 1.2h4.8v2.2H21.1v-2.2h4.2c.7 0 1.2-.5 1.2-1.2v-24c0-.7-.5-1.2-1.2-1.2h-9.6c-.7 0-1.2.5-1.2 1.2V25h-2.4v-5.7H43v5.6h-2.2v-1.8c-.1-.6-.6-1.2-1.3-1.2z",
							className: "st2t",
						})
					);
				},
				attributes: $a,
				edit: function (e) {
					var t,
						n,
						a = e.attributes,
						l = e.setAttributes,
						i = e.clientId,
						s = e.isSelected,
						u = a.blockId,
						m = a.blockMeta,
						p = a.resOption,
						g = a.prefix,
						d = a.typedText,
						v = a.typeSpeed,
						f = a.startDelay,
						h = a.smartBackspace,
						R = a.backSpeed,
						x = a.backDelay,
						C = a.fadeOut,
						T = a.fadeOutDelay,
						S = a.loop,
						O = a.showCursor,
						w = a.suffix,
						k = a.prefixColor,
						A = a.typedTextColor,
						M = a.suffixTextColor,
						U = a.textAlign,
						D = La(null),
						F =
							((t = ja(null)),
							(n = 2),
							(function (e) {
								if (Array.isArray(e)) return e;
							})(t) ||
								(function (e, t) {
									var n =
										null == e
											? null
											: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
											  e["@@iterator"];
									if (null != n) {
										var a,
											o,
											c = [],
											_n = !0,
											r = !1;
										try {
											for (
												n = n.call(e);
												!(_n = (a = n.next()).done) &&
												(c.push(a.value), !t || c.length !== t);
												_n = !0
											);
										} catch (e) {
											(r = !0), (o = e);
										} finally {
											try {
												_n || null == n.return || n.return();
											} finally {
												if (r) throw o;
											}
										}
										return c;
									}
								})(t, n) ||
								(function (e, t) {
									if (e) {
										if ("string" == typeof e) return Da(e, t);
										var n = Object.prototype.toString.call(e).slice(8, -1);
										return (
											"Object" === n &&
												e.constructor &&
												(n = e.constructor.name),
											"Map" === n || "Set" === n
												? Array.from(e)
												: "Arguments" === n ||
												  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
												? Da(e, t)
												: void 0
										);
									}
								})(t, n) ||
								(function () {
									throw new TypeError(
										"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
									);
								})()),
						z = F[0],
						L = F[1],
						j = function () {
							var e = a.typedText,
								t = a.typeSpeed,
								n = a.startDelay,
								o = a.smartBackspace,
								c = a.backSpeed,
								r = a.backDelay,
								l = a.fadeOut,
								i = a.fadeOutDelay,
								s = a.loop,
								u = a.showCursor;
							return {
								strings: N(e),
								typeSpeed: t,
								startDelay: n,
								smartBackspace: o,
								backSpeed: c,
								backDelay: r,
								fadeOut: l,
								fadeOutDelay: i,
								loop: s,
								showCursor: u,
							};
						},
						N = function (e) {
							var t = [];
							return (
								e.map(function (e) {
									return t.push(e.text);
								}),
								t
							);
						};
					za(function () {
						var e = j(),
							t = new P.a(D.current, e);
						return (
							L(t),
							function () {
								z.destroy();
							}
						);
					}, []),
						za(
							function () {
								z && (z.destroy(), L(new P.a(D.current, j())));
							},
							[d, v, f, h, R, x, C, T, S, O]
						),
						za(function () {
							l({
								resOption: Ha(
									"core/edit-post"
								).__experimentalGetPreviewDeviceType(),
							});
						}, []),
						za(function () {
							!(function (e) {
								var t = e.blockId,
									n = e.setAttributes,
									a = e.select,
									o = e.clientId,
									c =
										e.BLOCK_PREFIX +
										"-" +
										Math.random().toString(36).substr(2, 7);
								t || n({ blockId: c });
								var r = a("core/block-editor").getBlocks(),
									l = !1;
								!(function e(a) {
									if (!l) {
										var r,
											i = (function (e, t) {
												var n =
													("undefined" != typeof Symbol &&
														e[Symbol.iterator]) ||
													e["@@iterator"];
												if (!n) {
													if (
														Array.isArray(e) ||
														(n = (function (e, t) {
															if (e) {
																if ("string" == typeof e) return I(e, void 0);
																var n = Object.prototype.toString
																	.call(e)
																	.slice(8, -1);
																return (
																	"Object" === n &&
																		e.constructor &&
																		(n = e.constructor.name),
																	"Map" === n || "Set" === n
																		? Array.from(e)
																		: "Arguments" === n ||
																		  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																				n
																		  )
																		? I(e, void 0)
																		: void 0
																);
															}
														})(e)) ||
														(t && e && "number" == typeof e.length)
													) {
														n && (e = n);
														var a = 0,
															o = function () {};
														return {
															s: o,
															n: function () {
																return a >= e.length
																	? { done: !0 }
																	: { done: !1, value: e[a++] };
															},
															e: function (e) {
																throw e;
															},
															f: o,
														};
													}
													throw new TypeError(
														"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
													);
												}
												var c,
													r = !0,
													l = !1;
												return {
													s: function () {
														n = n.call(e);
													},
													n: function () {
														var e = n.next();
														return (r = e.done), e;
													},
													e: function (e) {
														(l = !0), (c = e);
													},
													f: function () {
														try {
															r || null == n.return || n.return();
														} finally {
															if (l) throw c;
														}
													},
												};
											})(a);
										try {
											for (i.s(); !(r = i.n()).done; ) {
												var s = r.value,
													u = s.innerBlocks;
												if (s.attributes.blockId === t) {
													if (s.clientId !== o)
														return n({ blockId: c }), void (l = !0);
													u.length > 0 && e(u);
												} else u.length > 0 && e(u);
											}
										} catch (e) {
											i.e(e);
										} finally {
											i.f();
										}
									}
								})(r);
							})({
								BLOCK_PREFIX: "eb-typing-text",
								blockId: u,
								setAttributes: l,
								select: Ha,
								clientId: i,
							});
						}, []),
						za(function () {
							var e, t, n, a;
							(e = { domObj: document, select: Ha }),
								(n = e.select),
								(a = (t = e.domObj).body.className),
								/eb\-mimmik\-added/i.test(a) ||
									(t.body.classList.add("eb-mimmik-added"),
									t
										.querySelector("#editor .edit-post-layout + .popover-slot")
										.addEventListener("click", function (e) {
											/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(
												e.target.className
											) &&
												setTimeout(function () {
													var e = n(
														"core/edit-post"
													).__experimentalGetPreviewDeviceType();
													B({
														isForPreviewButton: !0,
														domObj: t,
														resOption: e,
													});
												}, 0);
										}));
						}, []);
					var Y = qa({ className: "eb-guten-block-main-parent-wrapper" });
					if (!d) return React.createElement("div", null);
					var X = y({
							controlName: "margin",
							styleFor: "margin",
							attributes: a,
						}),
						q = X.dimensionStylesDesktop,
						H = X.dimensionStylesTab,
						W = X.dimensionStylesMobile,
						G = y({
							controlName: "padding",
							styleFor: "padding",
							attributes: a,
						}),
						K = G.dimensionStylesDesktop,
						V = G.dimensionStylesTab,
						$ = G.dimensionStylesMobile,
						J = b({ attributes: a, prefixConstant: o }),
						Q = J.typoStylesDesktop,
						Z = J.typoStylesTab,
						ee = J.typoStylesMobile,
						te = b({ attributes: a, prefixConstant: c }),
						ne = te.typoStylesDesktop,
						ae = te.typoStylesTab,
						oe = te.typoStylesMobile,
						ce = b({ attributes: a, prefixConstant: r }),
						re = ce.typoStylesDesktop,
						le = ce.typoStylesTab,
						ie = ce.typoStylesMobile,
						se = (function (e) {
							var t = e.controlName,
								n = e.attributes,
								a = e.noBorder,
								o = e.noShadow,
								c = "",
								r = "",
								l = "",
								i = "",
								s = "",
								u = "",
								m = "",
								p = "",
								g = "",
								b = "",
								d = "",
								v = "";
							if (!0 !== a) {
								var f = y({
										controlName: "".concat(t, "Bdr_"),
										styleFor: "border",
										attributes: n,
									}),
									h = f.dimensionStylesDesktop,
									R = f.dimensionStylesTab,
									x = f.dimensionStylesMobile,
									C = y({
										controlName: "".concat(t, "Rds_"),
										styleFor: "border-radius",
										attributes: n,
									}),
									_ = C.dimensionStylesDesktop,
									E = C.dimensionStylesTab,
									T = C.dimensionStylesMobile,
									S = y({
										controlName: "".concat(t, "HBdr_"),
										styleFor: "border",
										attributes: n,
									}),
									O = S.dimensionStylesDesktop,
									I = S.dimensionStylesTab,
									B = S.dimensionStylesMobile,
									w = y({
										controlName: "".concat(t, "HRds_"),
										styleFor: "border-radius",
										attributes: n,
									});
								(c = h),
									(r = R),
									(l = x),
									(i = _),
									(s = E),
									(u = T),
									(m = O),
									(p = I),
									(g = B),
									(b = w.dimensionStylesDesktop),
									(d = w.dimensionStylesTab),
									(v = w.dimensionStylesMobile);
							}
							var P = n["".concat(t, "borderStyle")],
								k = n["".concat(t, "borderColor")],
								A = void 0 === k ? "#333333" : k,
								M = n["".concat(t, "HborderStyle")],
								U = n["".concat(t, "HborderColor")],
								D = void 0 === U ? A : U,
								F = n["".concat(t, "shadowColor")],
								z = n["".concat(t, "hOffset")],
								L = void 0 === z ? 0 : z,
								j = n["".concat(t, "vOffset")],
								N = void 0 === j ? 0 : j,
								Y = n["".concat(t, "blur")],
								X = void 0 === Y ? 0 : Y,
								q = n["".concat(t, "spread")],
								H = void 0 === q ? 0 : q,
								W = n["".concat(t, "inset")],
								G = n["".concat(t, "hoverShadowColor")],
								K = void 0 === G ? F : G,
								V = n["".concat(t, "hoverHOffset")],
								$ = void 0 === V ? L : V,
								J = n["".concat(t, "hoverVOffset")],
								Q = void 0 === J ? N : J,
								Z = n["".concat(t, "hoverBlur")],
								ee = void 0 === Z ? X : Z,
								te = n["".concat(t, "hoverSpread")],
								ne = void 0 === te ? H : te,
								ae = n["".concat(t, "borderTransition")],
								oe = n["".concat(t, "radiusTransition")],
								ce = n["".concat(t, "shadowTransition")];
							return {
								styesDesktop: "  \n      "
									.concat(
										!0 !== a
											? "\n          "
													.concat(i, "\n          ")
													.concat(
														"none" !== P && A
															? "\n              "
																	.concat(c, "\n              border-color: ")
																	.concat(A, ";\n              border-style: ")
																	.concat(P, ";\n              ")
															: " ",
														"\n          "
													)
											: " ",
										"\n    \n      "
									)
									.concat(
										!0 !== o && F
											? "box-shadow: "
													.concat(F, " ")
													.concat(L, "px ")
													.concat(N, "px ")
													.concat(X, "px ")
													.concat(H, "px ")
													.concat(W ? "inset" : "", ";")
											: " ",
										"\n  \n  \n    "
									),
								styesTab: "  \n    ".concat(
									!0 !== a
										? "\n        "
												.concat(A ? r : " ", "\n        ")
												.concat(s, "\n        ")
										: " ",
									"\n      \n    "
								),
								styesMobile: "\n    ".concat(
									!0 !== a
										? "\n        "
												.concat(A ? l : " ", "\n        ")
												.concat(u, "\n        ")
										: " ",
									"\n    "
								),
								stylesHoverDesktop: "\n    "
									.concat(
										!0 !== a
											? "\n        "
													.concat(
														"none" !== M
															? "\n              "
																	.concat(
																		D !== A
																			? "border-color: ".concat(D, ";")
																			: " ",
																		" \n              "
																	)
																	.concat(
																		M !== P
																			? "border-style: ".concat(M, ";")
																			: " ",
																		"\n              "
																	)
																	.concat(m, "\n            ")
															: " ",
														"\n  \n        "
													)
													.concat(b, "    \n        ")
											: " ",
										"   \n     \n    "
									)
									.concat(
										!0 !== o && K
											? "box-shadow: "
													.concat(K, " ")
													.concat($, "px ")
													.concat(Q, "px ")
													.concat(ee, "px ")
													.concat(ne, "px ")
													.concat(W ? "inset" : " ", ";")
											: " ",
										"\n  \n    "
									),
								stylesHoverTab: "\n    ".concat(
									!0 !== a
										? "\n        "
												.concat("none" !== M ? p : " ", "\n        ")
												.concat(d, "  \n        ")
										: " ",
									"\n    "
								),
								stylesHoverMobile: "\n    ".concat(
									!0 !== a
										? "\n        "
												.concat("none" !== M ? g : " ", "\n        ")
												.concat(v, "\n        ")
										: " ",
									"\n     \n    "
								),
								transitionStyle: "\n  border "
									.concat(ae || 0, "s, border-radius ")
									.concat(oe || 0, "s, box-shadow ")
									.concat(ce || 0, "s\n  "),
							};
						})({ controlName: "wrp_", attributes: a }),
						ue = se.styesDesktop,
						me = se.styesTab,
						pe = se.styesMobile,
						ge = se.stylesHoverDesktop,
						be = se.stylesHoverTab,
						de = se.stylesHoverMobile,
						ve = se.transitionStyle,
						fe = (function (e) {
							var t = e.controlName,
								n = e.attributes,
								a = e.noOverlay,
								o = void 0 !== a && a,
								c = e.noMainBgi,
								r = void 0 !== c && c,
								l = e.noOverlayBgi,
								i = void 0 !== l && l,
								s = e.noTransition,
								u = void 0 !== s && s,
								m = n["".concat(t, "bg_transition")],
								p = n["".concat(t, "backgroundType")],
								g = n["".concat(t, "backgroundColor")],
								b = n["".concat(t, "gradientColor")],
								d = n["".concat(t, "bgImageURL")],
								v = n["".concat(t, "backgroundSize")],
								f = n["".concat(t, "bgImgCustomSize")],
								h = n["".concat(t, "bgImgCustomSizeUnit")],
								y = n["".concat(t, "bgImgPos")],
								R = n["".concat(t, "bgImgcustomPosX")],
								x = n["".concat(t, "bgImgcustomPosXUnit")],
								C = n["".concat(t, "bgImgcustomPosY")],
								_ = n["".concat(t, "bgImgcustomPosYUnit")],
								E = n["".concat(t, "bgImgAttachment")],
								T = n["".concat(t, "bgImgRepeat")],
								S = n["TAB".concat(t, "backgroundSize")],
								O = n["TAB".concat(t, "bgImgCustomSize")],
								I = n["TAB".concat(t, "bgImgCustomSizeUnit")],
								B = n["TAB".concat(t, "bgImgPos")],
								w = n["TAB".concat(t, "bgImgcustomPosX")],
								P = n["TAB".concat(t, "bgImgcustomPosXUnit")],
								k = n["TAB".concat(t, "bgImgcustomPosY")],
								A = n["TAB".concat(t, "bgImgcustomPosYUnit")],
								M = n["TAB".concat(t, "bgImgRepeat")],
								U = n["MOB".concat(t, "backgroundSize")],
								D = n["MOB".concat(t, "bgImgCustomSize")],
								F = n["MOB".concat(t, "bgImgCustomSizeUnit")],
								z = n["MOB".concat(t, "bgImgPos")],
								L = n["MOB".concat(t, "bgImgcustomPosX")],
								j = n["MOB".concat(t, "bgImgcustomPosXUnit")],
								N = n["MOB".concat(t, "bgImgcustomPosY")],
								Y = n["MOB".concat(t, "bgImgcustomPosYUnit")],
								X = n["MOB".concat(t, "bgImgRepeat")],
								q = n["hov_".concat(t, "backgroundType")],
								H = n["hov_".concat(t, "backgroundColor")],
								W = n["hov_".concat(t, "gradientColor")],
								G = n["hov_".concat(t, "bgImageURL")],
								K = n["hov_".concat(t, "bgImgAttachment")],
								V = n["hov_".concat(t, "backgroundSize")],
								$ = n["hov_".concat(t, "bgImgCustomSize")],
								J = n["hov_".concat(t, "bgImgCustomSizeUnit")],
								Q = n["hov_".concat(t, "bgImgPos")],
								Z = n["hov_".concat(t, "bgImgcustomPosX")],
								ee = n["hov_".concat(t, "bgImgcustomPosXUnit")],
								te = n["hov_".concat(t, "bgImgcustomPosY")],
								ne = n["hov_".concat(t, "bgImgcustomPosYUnit")],
								ae = n["hov_".concat(t, "bgImgRepeat")],
								oe = n["hov_TAB".concat(t, "backgroundSize")],
								ce = n["hov_TAB".concat(t, "bgImgCustomSize")],
								re = n["hov_TAB".concat(t, "bgImgCustomSizeUnit")],
								le = n["hov_TAB".concat(t, "bgImgPos")],
								ie = n["hov_TAB".concat(t, "bgImgcustomPosX")],
								se = n["hov_TAB".concat(t, "bgImgcustomPosXUnit")],
								ue = n["hov_TAB".concat(t, "bgImgcustomPosY")],
								me = n["hov_TAB".concat(t, "bgImgcustomPosYUnit")],
								pe = n["hov_TAB".concat(t, "bgImgRepeat")],
								ge = n["hov_MOB".concat(t, "backgroundSize")],
								be = n["hov_MOB".concat(t, "bgImgCustomSize")],
								de = n["hov_MOB".concat(t, "bgImgCustomSizeUnit")],
								ve = n["hov_MOB".concat(t, "bgImgPos")],
								fe = n["hov_MOB".concat(t, "bgImgcustomPosX")],
								he = n["hov_MOB".concat(t, "bgImgcustomPosXUnit")],
								ye = n["hov_MOB".concat(t, "bgImgcustomPosY")],
								Re = n["hov_MOB".concat(t, "bgImgcustomPosYUnit")],
								xe = n["hov_MOB".concat(t, "bgImgRepeat")],
								Ce = n["".concat(t, "isBgOverlay")],
								_e = n["".concat(t, "ovl_bg_transition")],
								Ee = n["".concat(t, "ovl_filtersTransition")],
								Te = n["".concat(t, "ovl_opacityTransition")],
								Se = n["".concat(t, "overlayType")],
								Oe = n["".concat(t, "overlayColor")],
								Ie = n["".concat(t, "overlayGradient")],
								Be = n["".concat(t, "ovl_bgImageURL")],
								we = n["".concat(t, "ovl_bgImgAttachment")],
								Pe = n["".concat(t, "ovl_opacity")],
								ke = n["".concat(t, "ovl_blendMode")],
								Ae = n["".concat(t, "ovl_allowFilters")],
								Me = n["".concat(t, "ovl_fltrBrightness")],
								Ue = n["".concat(t, "ovl_fltrContrast")],
								De = n["".concat(t, "ovl_fltrSaturation")],
								Fe = n["".concat(t, "ovl_fltrBlur")],
								ze = n["".concat(t, "ovl_fltrHue")],
								Le = n["".concat(t, "ovl_backgroundSize")],
								je = n["".concat(t, "ovl_bgImgCustomSize")],
								Ne = n["".concat(t, "ovl_bgImgCustomSizeUnit")],
								Ye = n["".concat(t, "ovl_bgImgPos")],
								Xe = n["".concat(t, "ovl_bgImgcustomPosX")],
								qe = n["".concat(t, "ovl_bgImgcustomPosXUnit")],
								He = n["".concat(t, "ovl_bgImgcustomPosY")],
								We = n["".concat(t, "ovl_bgImgcustomPosYUnit")],
								Ge = n["".concat(t, "ovl_bgImgRepeat")],
								Ke = n["TAB".concat(t, "ovl_backgroundSize")],
								Ve = n["TAB".concat(t, "ovl_bgImgCustomSize")],
								$e = n["TAB".concat(t, "ovl_bgImgCustomSizeUnit")],
								Je = n["TAB".concat(t, "ovl_bgImgPos")],
								Qe = n["TAB".concat(t, "ovl_bgImgcustomPosX")],
								Ze = n["TAB".concat(t, "ovl_bgImgcustomPosXUnit")],
								et = n["TAB".concat(t, "ovl_bgImgcustomPosY")],
								tt = n["TAB".concat(t, "ovl_bgImgcustomPosYUnit")],
								nt = n["TAB".concat(t, "ovl_bgImgRepeat")],
								at = n["MOB".concat(t, "ovl_backgroundSize")],
								ot = n["MOB".concat(t, "ovl_bgImgCustomSize")],
								ct = n["MOB".concat(t, "ovl_bgImgCustomSizeUnit")],
								rt = n["MOB".concat(t, "ovl_bgImgPos")],
								lt = n["MOB".concat(t, "ovl_bgImgcustomPosX")],
								it = n["MOB".concat(t, "ovl_bgImgcustomPosXUnit")],
								st = n["MOB".concat(t, "ovl_bgImgcustomPosY")],
								ut = n["MOB".concat(t, "ovl_bgImgcustomPosYUnit")],
								mt = n["MOB".concat(t, "ovl_bgImgRepeat")],
								pt = n["hov_".concat(t, "overlayType")],
								gt = n["hov_".concat(t, "overlayColor")],
								bt = n["hov_".concat(t, "overlayGradient")],
								dt = n["hov_".concat(t, "ovl_bgImageURL")],
								vt = n["hov_".concat(t, "ovl_bgImgAttachment")],
								ft = n["hov_".concat(t, "ovl_opacity")],
								ht = n["hov_".concat(t, "ovl_blendMode")],
								yt = n["hov_".concat(t, "ovl_allowFilters")],
								Rt = n["hov_".concat(t, "ovl_fltrBrightness")],
								xt = n["hov_".concat(t, "ovl_fltrContrast")],
								Ct = n["hov_".concat(t, "ovl_fltrSaturation")],
								_t = n["hov_".concat(t, "ovl_fltrBlur")],
								Et = n["hov_".concat(t, "ovl_fltrHue")],
								Tt = n["hov_".concat(t, "ovl_backgroundSize")],
								St = n["hov_".concat(t, "ovl_bgImgCustomSize")],
								Ot = n["hov_".concat(t, "ovl_bgImgCustomSizeUnit")],
								It = n["hov_".concat(t, "ovl_bgImgPos")],
								Bt = n["hov_".concat(t, "ovl_bgImgcustomPosX")],
								wt = n["hov_".concat(t, "ovl_bgImgcustomPosXUnit")],
								Pt = n["hov_".concat(t, "ovl_bgImgcustomPosY")],
								kt = n["hov_".concat(t, "ovl_bgImgcustomPosYUnit")],
								At = n["hov_".concat(t, "ovl_bgImgRepeat")],
								Mt = n["hov_TAB".concat(t, "ovl_backgroundSize")],
								Ut = n["hov_TAB".concat(t, "ovl_bgImgCustomSize")],
								Dt = n["hov_TAB".concat(t, "ovl_bgImgCustomSizeUnit")],
								Ft = n["hov_TAB".concat(t, "ovl_bgImgPos")],
								zt = n["hov_TAB".concat(t, "ovl_bgImgcustomPosX")],
								Lt = n["hov_TAB".concat(t, "ovl_bgImgcustomPosXUnit")],
								jt = n["hov_TAB".concat(t, "ovl_bgImgcustomPosY")],
								Nt = n["hov_TAB".concat(t, "ovl_bgImgcustomPosYUnit")],
								Yt = n["hov_TAB".concat(t, "ovl_bgImgRepeat")],
								Xt = n["hov_MOB".concat(t, "ovl_backgroundSize")],
								qt = n["hov_MOB".concat(t, "ovl_bgImgCustomSize")],
								Ht = n["hov_MOB".concat(t, "ovl_bgImgCustomSizeUnit")],
								Wt = n["hov_MOB".concat(t, "ovl_bgImgPos")],
								Gt = n["hov_MOB".concat(t, "ovl_bgImgcustomPosX")],
								Kt = n["hov_MOB".concat(t, "ovl_bgImgcustomPosXUnit")],
								Vt = n["hov_MOB".concat(t, "ovl_bgImgcustomPosY")],
								$t = n["hov_MOB".concat(t, "ovl_bgImgcustomPosYUnit")],
								Jt = n["hov_MOB".concat(t, "ovl_bgImgRepeat")];
							return {
								backgroundStylesDesktop: "\n  "
									.concat(
										(!1 === r && "classic" === p && d) ||
											("gradient" === p && b)
											? "\n    background-image: ".concat(
													"classic" === p
														? 'url("'.concat(d, '")')
														: "gradient" === p
														? b
														: "none",
													";\n    "
											  )
											: " ",
										"\n      \n  \n      "
									)
									.concat(
										!1 === r && "classic" === p && d
											? "\n          "
													.concat(
														v && "custom" !== v
															? "background-size: ".concat(v, ";")
															: "custom" === v
															? "background-size: "
																	.concat(f)
																	.concat(h, " auto;")
															: " ",
														"\n  \n          "
													)
													.concat(
														y && "custom" !== y
															? "background-position: ".concat(y, ";")
															: "custom" === y
															? "background-position: "
																	.concat(R)
																	.concat(x, " ")
																	.concat(C)
																	.concat(_, ";")
															: " ",
														"\n  \n          "
													)
													.concat(
														E ? "background-attachment: ".concat(E, ";") : " ",
														"\n  \n          "
													)
													.concat(
														T ? "background-repeat: ".concat(T, ";") : " ",
														"\n          \n         \n          "
													)
											: " ",
										"\n\n      "
									)
									.concat(
										Ce
											? "\n            z-index: 2;\n            position: relative;\n          "
											: " ",
										"\t\n    \n      "
									)
									.concat(
										g ? "background-color: ".concat(g, ";") : " ",
										"\n  \n    "
									),
								hoverBackgroundStylesDesktop: "\n  \n    "
									.concat(
										(!1 === r && "classic" === q && G) ||
											("gradient" === q && W)
											? "\n        background-image: ".concat(
													"classic" === q
														? 'url("'.concat(G, '")')
														: "gradient" === q
														? W
														: "none",
													";    \n        "
											  )
											: " ",
										"\n  \n   \n  \n    "
									)
									.concat(
										!1 === r && "classic" === q && G
											? "\n        "
													.concat(
														V && "custom" !== V
															? "background-size: ".concat(V, ";")
															: "custom" === V
															? "background-size: "
																	.concat($)
																	.concat(J, " auto;")
															: " ",
														"\n  \n        "
													)
													.concat(
														Q && "custom" !== Q
															? "background-position: ".concat(Q, ";")
															: "custom" === Q
															? "background-position: "
																	.concat(Z)
																	.concat(ee, " ")
																	.concat(te)
																	.concat(ne, ";")
															: " ",
														"\n  \n        "
													)
													.concat(
														K ? "background-attachment: ".concat(K, ";") : " ",
														"\n  \n        "
													)
													.concat(
														ae ? "background-repeat: ".concat(ae, ";") : " ",
														"\n        \n        "
													)
											: " ",
										"\n  \n        "
									)
									.concat(
										H ? "background-color: ".concat(H, ";") : " ",
										"\n  \n  "
									),
								backgroundStylesTab: "\n      ".concat(
									!1 === r && "classic" === p && d
										? "\n          "
												.concat(
													S && "custom" !== S
														? "background-size: ".concat(S, ";")
														: "custom" === S
														? "background-size: ".concat(O).concat(I, " auto;")
														: " ",
													"\n  \n          "
												)
												.concat(
													B && "custom" !== B
														? "background-position: ".concat(B, ";")
														: "custom" === B
														? "background-position: "
																.concat(w)
																.concat(P, " ")
																.concat(k)
																.concat(A, ";")
														: " ",
													"\n  \n          "
												)
												.concat(
													M ? "background-repeat: ".concat(M, ";") : " ",
													"\n          background-attachment: scroll;\n          "
												)
										: " ",
									"\n  \n    "
								),
								hoverBackgroundStylesTab: "\n    ".concat(
									!1 === r && "classic" === q && G
										? "\n        "
												.concat(
													oe && "custom" !== oe
														? "background-size: ".concat(oe, ";")
														: "custom" === oe
														? "background-size: "
																.concat(ce)
																.concat(re, " auto;")
														: " ",
													"\n  \n        "
												)
												.concat(
													le && "custom" !== le
														? "background-position: ".concat(le, ";")
														: "custom" === le
														? "background-position: "
																.concat(ie)
																.concat(se, " ")
																.concat(ue)
																.concat(me, ";")
														: " ",
													"\n  \n        "
												)
												.concat(
													pe ? "background-repeat: ".concat(pe, ";") : " ",
													"\n        background-attachment: scroll;\n        "
												)
										: " ",
									"\n  \n  "
								),
								backgroundStylesMobile: "\n      ".concat(
									!1 === r && "classic" === p && d
										? "\n          "
												.concat(
													U && "custom" !== U
														? "background-size: ".concat(U, ";")
														: "custom" === U
														? "background-size: ".concat(D).concat(F, " auto;")
														: " ",
													"\n  \n          "
												)
												.concat(
													z && "custom" !== z
														? "background-position: ".concat(z, ";")
														: "custom" === z
														? "background-position: "
																.concat(L)
																.concat(j, " ")
																.concat(N)
																.concat(Y, ";")
														: " ",
													"\n  \n          "
												)
												.concat(
													X ? "background-repeat: ".concat(X, ";") : " ",
													"\n  \n          "
												)
										: " ",
									"\n  \n    "
								),
								hoverBackgroundStylesMobile: "\n    ".concat(
									!1 === r && "classic" === q && G
										? "\n        "
												.concat(
													ge && "custom" !== ge
														? "background-size: ".concat(ge, ";")
														: "custom" === ge
														? "background-size: "
																.concat(be)
																.concat(de, " auto;")
														: " ",
													"\n    \n        "
												)
												.concat(
													ve && "custom" !== ve
														? "background-position: ".concat(ve, ";")
														: "custom" === ve
														? "background-position: "
																.concat(fe)
																.concat(he, " ")
																.concat(ye)
																.concat(Re, ";")
														: " ",
													"\n    \n        "
												)
												.concat(
													xe ? "background-repeat: ".concat(xe, ";") : " ",
													"\n    \n        "
												)
										: " ",
									"\n    \n    "
								),
								overlayStylesDesktop: "\n    \n      ".concat(
									!1 === o && Ce
										? '\n            content: "";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            left: 0;\n            z-index: 0;\n            '
												.concat(
													(!1 === i && "classic" === Se && Be) ||
														("gradient" === Se && Ie)
														? "\n                background-image: ".concat(
																"classic" === Se
																	? 'url("'.concat(Be, '")')
																	: "gradient" === Se
																	? Ie
																	: "none",
																";              \n              "
														  )
														: " ",
													"\n           \n            "
												)
												.concat(
													Oe ? "background-color: ".concat(Oe, ";") : " ",
													"\n            "
												)
												.concat(
													Pe || 0 === Pe ? "opacity: ".concat(Pe, ";") : " ",
													"\n            "
												)
												.concat(
													ke ? "mix-blend-mode: ".concat(ke, ";") : " ",
													"\n            "
												)
												.concat(
													Ae
														? "filter: brightness( "
																.concat(Me, "% ) contrast( ")
																.concat(Ue, "% ) saturate( ")
																.concat(De, "% ) blur( ")
																.concat(Fe, "px ) hue-rotate( \n              ")
																.concat(ze, "deg );")
														: " ",
													"\n  \n        "
												)
												.concat(
													!1 === i && "classic" === Se && Be
														? "\n            "
																.concat(
																	Le && "custom" !== Le
																		? "background-size: ".concat(Le, ";")
																		: "custom" === Le
																		? "background-size: "
																				.concat(je)
																				.concat(Ne, " auto;")
																		: " ",
																	"\n  \n            "
																)
																.concat(
																	Ye && "custom" !== Ye
																		? "background-position: ".concat(Ye, ";")
																		: "custom" === Ye
																		? "background-position: "
																				.concat(Xe)
																				.concat(qe, " ")
																				.concat(He)
																				.concat(We, ";")
																		: " ",
																	"\n  \n            "
																)
																.concat(
																	we
																		? "background-attachment: ".concat(we, ";")
																		: " ",
																	"\n  \n            "
																)
																.concat(
																	Ge
																		? "background-repeat: ".concat(Ge, ";")
																		: " ",
																	"\n            \n            "
																)
														: " ",
													"\n  \n        "
												)
										: " ",
									"\n    \n    \n    "
								),
								hoverOverlayStylesDesktop: "\n    \n    ".concat(
									!1 === o && Ce
										? "\n        "
												.concat(
													(!1 === i && "classic" === pt && dt) ||
														("gradient" === pt && bt)
														? "\n          background-image: ".concat(
																"classic" === pt
																	? 'url("'.concat(dt, '")')
																	: "gradient" === pt
																	? bt
																	: "none",
																";\n          "
														  )
														: " ",
													"\n  \n        "
												)
												.concat(
													gt ? "background-color: ".concat(gt, ";") : " ",
													"\n        "
												)
												.concat(
													ft || 0 === ft ? "opacity: ".concat(ft, ";") : " ",
													"\n        "
												)
												.concat(
													ht ? "mix-blend-mode: ".concat(ht, ";") : " ",
													"\n        "
												)
												.concat(
													yt
														? "filter: brightness( "
																.concat(Rt, "% ) contrast( ")
																.concat(xt, "% ) saturate( ")
																.concat(Ct, "% ) blur( ")
																.concat(_t, "px ) hue-rotate( \n          ")
																.concat(Et, "deg );")
														: " ",
													"\n    \n      "
												)
												.concat(
													!1 === i && "classic" === pt && dt
														? "\n          "
																.concat(
																	Tt && "custom" !== Tt
																		? "background-size: ".concat(Tt, ";")
																		: "custom" === Tt
																		? "background-size: "
																				.concat(St)
																				.concat(Ot, " auto;")
																		: " ",
																	"\n    \n          "
																)
																.concat(
																	It && "custom" !== It
																		? "background-position: ".concat(It, ";")
																		: "custom" === It
																		? "background-position: "
																				.concat(Bt)
																				.concat(wt, " ")
																				.concat(Pt)
																				.concat(kt, ";")
																		: " ",
																	"\n    \n          "
																)
																.concat(
																	vt
																		? "background-attachment: ".concat(vt, ";")
																		: " ",
																	"\n    \n          "
																)
																.concat(
																	At
																		? "background-repeat: ".concat(At, ";")
																		: " ",
																	"\n          \n          "
																)
														: " ",
													"\n    \n      "
												)
										: " ",
									"\n    \n    \n    "
								),
								overlayStylesTab: "\n    ".concat(
									!1 === o && !1 === i && Ce && "classic" === Se && Be
										? "\n        "
												.concat(
													Ke && "custom" !== Ke
														? "background-size: ".concat(Ke, ";")
														: "custom" === Ke
														? "background-size: "
																.concat(Ve)
																.concat($e, " auto;")
														: " ",
													"\n  \n          "
												)
												.concat(
													Je && "custom" !== Je
														? "background-position: ".concat(Je, ";")
														: "custom" === Je
														? "background-position: "
																.concat(Qe)
																.concat(Ze, " ")
																.concat(et)
																.concat(tt, ";")
														: " ",
													"\n  \n          "
												)
												.concat(
													nt ? "background-repeat: ".concat(nt, ";") : " ",
													"\n          background-attachment: scroll;\n        "
												)
										: " ",
									"\n    \n    "
								),
								hoverOverlayStylesTab: "\n  ".concat(
									!1 === o && !1 === i && Ce && "classic" === pt && dt
										? "\n      "
												.concat(
													Mt && "custom" !== Mt
														? "background-size: ".concat(Mt, ";")
														: "custom" === Mt
														? "background-size: "
																.concat(Ut)
																.concat(Dt, " auto;")
														: " ",
													"\n  \n        "
												)
												.concat(
													Ft && "custom" !== Ft
														? "background-position: ".concat(Ft, ";")
														: "custom" === Ft
														? "background-position: "
																.concat(zt)
																.concat(Lt, " ")
																.concat(jt)
																.concat(Nt, ";")
														: " ",
													"\n  \n        "
												)
												.concat(
													Yt ? "background-repeat: ".concat(Yt, ";") : " ",
													"\n        background-attachment: scroll;\n      "
												)
										: " ",
									"\n  \n  "
								),
								overlayStylesMobile: "\n    ".concat(
									!1 === o && !1 === i && Ce && "classic" === Se && Be
										? "\n        "
												.concat(
													at && "custom" !== at
														? "background-size: ".concat(at, ";")
														: "custom" === at
														? "background-size: "
																.concat(ot)
																.concat(ct, " auto;")
														: " ",
													"\n  \n        "
												)
												.concat(
													rt && "custom" !== rt
														? "background-position: ".concat(rt, ";")
														: "custom" === rt
														? "background-position: "
																.concat(lt)
																.concat(it, " ")
																.concat(st)
																.concat(ut, ";")
														: " ",
													"\n  \n        "
												)
												.concat(
													mt ? "background-repeat: ".concat(mt, ";") : " ",
													"\n        "
												)
										: " ",
									"\n    \n    "
								),
								hoverOverlayStylesMobile: "\n    ".concat(
									!1 === o && !1 === i && Ce && "classic" === pt && dt
										? "\n        "
												.concat(
													Xt && "custom" !== Xt
														? "background-size: ".concat(Xt, ";")
														: "custom" === Xt
														? "background-size: "
																.concat(qt)
																.concat(Ht, " auto;")
														: " ",
													"\n  \n        "
												)
												.concat(
													Wt && "custom" !== Wt
														? "background-position: ".concat(Wt, ";")
														: "custom" === Wt
														? "background-position: "
																.concat(Gt)
																.concat(Kt, " ")
																.concat(Vt)
																.concat($t, ";")
														: " ",
													"\n  \n        "
												)
												.concat(
													Jt ? "background-repeat: ".concat(Jt, ";") : " ",
													"\n        "
												)
										: " ",
									"\n    \n    "
								),
								bgTransitionStyle: u ? " " : "background ".concat(m || 0, "s"),
								ovlTransitionStyle: u
									? " "
									: "background "
											.concat(_e || 0, "s, opacity ")
											.concat(Te || 0, "s, filter ")
											.concat(Ee || 0, "s"),
							};
						})({
							attributes: a,
							controlName: "backgroundWrp_",
							noOverlay: !0,
							noMainBgi: !0,
						}),
						he = fe.backgroundStylesDesktop,
						ye = fe.hoverBackgroundStylesDesktop,
						Re = fe.bgTransitionStyle,
						xe = "\n\n\t.eb-typed-wrapper."
							.concat(u, " {\n\t\t")
							.concat(q, "\n\t\t")
							.concat(K, "\n\t\t")
							.concat(ue, "\n\t\t")
							.concat(he, "\n\t\ttext-align: ")
							.concat(U, ";\n\t\ttransition: ")
							.concat(Re, ", ")
							.concat(ve, ";\n\t}\n\n\t.eb-typed-wrapper.")
							.concat(u, ":hover {\n\t\t")
							.concat(ye, "\n\t\t")
							.concat(ge, "\n\t}\n\n\t.eb-typed-wrapper.")
							.concat(u, ":before {\n\t\tz-index: -11;\n\t}\n\t"),
						Ce = "\n\t.eb-typed-wrapper."
							.concat(u, "{\n\t\t")
							.concat(H, "\n\t\t")
							.concat(V, "\n\t\t")
							.concat(me, "\n\t}\n\n\t.eb-typed-wrapper.")
							.concat(u, ":hover {\n\t\t")
							.concat(be, "\n\t}\n\t"),
						_e = "\n\t.eb-typed-wrapper."
							.concat(u, "{\n\t\t")
							.concat(W, "\n\t\t")
							.concat($, "\n\t\t")
							.concat(pe, "\n\t}\n\n\t.eb-typed-wrapper.")
							.concat(u, ":hover {\n\t\t")
							.concat(de, "\n\t}\n\t"),
						Ee = "\n\t."
							.concat(u, " .eb-typed-prefix{\n\t\t")
							.concat(Q, "\t\t\n\t\tcolor: ")
							.concat(k || "#fff", ";\n\t}\n\t"),
						Te = "\n\t."
							.concat(u, " .eb-typed-prefix{\n\t\t")
							.concat(Z, "\n\t}\n\t"),
						Se = "\n\t."
							.concat(u, " .eb-typed-prefix{\n\t\t")
							.concat(ee, "\n\t}\n\t"),
						Oe = "\n\t."
							.concat(u, " .eb-typed-suffix{\n\t\t")
							.concat(ne, "\t\t\n\t\tcolor: ")
							.concat(M || "#fff", ";\n\t}\n\t"),
						Ie = "\n\t."
							.concat(u, " .eb-typed-suffix{\n\t\t")
							.concat(ae, "\n\t}\n\t"),
						Be = "\n\t."
							.concat(u, " .eb-typed-suffix{\n\t\t")
							.concat(oe, "\n\t}\n\t"),
						we = "\n\t."
							.concat(u, " .eb-typed-text,.")
							.concat(u, " .eb-typed-view{\n\t\t")
							.concat(re, "\t\t\n\t\tcolor: ")
							.concat(A || "#fff", ";\n\t}\n\t"),
						Pe = "\n\t."
							.concat(u, " .eb-typed-text,.")
							.concat(u, " .eb-typed-view{\n\t\t")
							.concat(le, "\n\t}\n\t"),
						ke = "\n\t."
							.concat(u, " .eb-typed-text,.")
							.concat(u, " .eb-typed-view{\n\t\t")
							.concat(ie, "\n\t}\n\t"),
						Ae = _(
							"\n\t\t"
								.concat(E(xe) ? xe : " ", "\n\t\t")
								.concat(E(Ee) ? Ee : " ", "\n\t\t")
								.concat(E(Oe) ? Oe : " ", "\n\t\t")
								.concat(E(we) ? we : " ", "\n\t")
						),
						Me = _(
							"\n\t\t"
								.concat(E(Ce) ? Ce : " ", "\n\t\t")
								.concat(E(Te) ? Te : " ", "\n\t\t")
								.concat(E(Ie) ? Ie : " ", "\n\t\t")
								.concat(E(Pe) ? Pe : " ", "\n\t")
						),
						Ue = _(
							"\n\t\t"
								.concat(E(_e) ? _e : " ", "\n\t\t")
								.concat(E(Se) ? Se : " ", "\n\t\t")
								.concat(E(Be) ? Be : " ", "\n\t\t")
								.concat(E(ke) ? ke : " ", "\n\t")
						);
					return (
						za(
							function () {
								var e = { desktop: Ae, tab: Me, mobile: Ue };
								JSON.stringify(m) != JSON.stringify(e) && l({ blockMeta: e });
							},
							[a]
						),
						[
							React.createElement(
								Ya,
								null,
								React.createElement(Xa, {
									value: U,
									onChange: function (e) {
										return l({ textAlign: e });
									},
								})
							),
							s && React.createElement(Ua, { attributes: a, setAttributes: l }),
							React.createElement(
								"div",
								Y,
								React.createElement(
									"style",
									null,
									"\n\t\t\t\t"
										.concat(Ae, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t")
										.concat("Tablet" === p ? Me : " ", "\n\t\t\t\t")
										.concat(
											"Mobile" === p ? Me + Ue : " ",
											"\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t"
										)
										.concat(
											_(Me),
											"\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t"
										)
										.concat(
											_(Ue),
											"\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t"
										)
								),
								React.createElement(
									"div",
									{ className: "eb-typed-wrapper ".concat(u), "data-id": u },
									React.createElement(
										"span",
										{ className: "eb-typed-prefix" },
										g
									),
									React.createElement("span", {
										className: "eb-typed-text",
										ref: D,
									}),
									React.createElement(
										"span",
										{ className: "eb-typed-suffix" },
										w
									)
								)
							),
						]
					);
				},
				save: function (e) {
					var t = e.attributes,
						n = t.blockId,
						a = t.prefix,
						o = t.typedText,
						c = t.suffix,
						r = t.typeSpeed,
						l = t.startDelay,
						i = t.smartBackspace,
						s = t.backSpeed,
						u = t.backDelay,
						m = t.fadeOut,
						p = t.fadeOutDelay,
						g = t.loop,
						b = t.showCursor;
					return React.createElement(
						"div",
						Wa.save(),
						React.createElement(
							"div",
							{ className: "eb-typed-wrapper ".concat(n), "data-id": n },
							React.createElement(
								"div",
								{
									className: "eb-typed-content",
									"data-type-speed": r,
									"data-start-delay": l,
									"data-smart-backspace": i,
									"data-back-speed": s,
									"data-back-delay": u,
									"data-fade": m,
									"data-fade-delay": p,
									"data-loop": g,
									"data-cursor": b,
								},
								React.createElement(
									"span",
									{ className: "eb-typed-prefix" },
									a
								),
								React.createElement(
									"span",
									{ className: "eb-typed-text-wrapper is-hidden" },
									o.map(function (e) {
										return React.createElement(
											"span",
											{ className: "eb-typed-text" },
											e.text
										);
									})
								),
								React.createElement("span", { className: "eb-typed-view" }),
								React.createElement("span", { className: "eb-typed-suffix" }, c)
							)
						)
					);
				},
			});
		},
	]);
