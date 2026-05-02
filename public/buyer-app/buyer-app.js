//#region \0rolldown/runtime.js
var e = (e, t) => () => (e && (t = e(e = 0)), t), t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n = e((() => {})), r = e((() => {
	n();
}));
//#endregion
//#region node_modules/svelte/src/internal/shared/utils.js
function i(e) {
	return e();
}
function a(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function o() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var s, c, l, u, d, f, p, m, h, g, _, v, y = e((() => {
	s = Array.isArray, c = Array.prototype.indexOf, l = Array.prototype.includes, u = Array.from, d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyDescriptors, m = Object.prototype, h = Array.prototype, g = Object.getPrototypeOf, _ = Object.isExtensible, v = () => {};
})), b, x, S, C, w, T, ee, te, ne, re, ie, ae, oe, se, ce, le, E, D, O, ue, de, k = e((() => {
	b = 1024, x = 2048, S = 4096, C = 8192, w = 16384, T = 32768, ee = 1 << 25, te = 65536, ne = 1 << 18, re = 1 << 19, ie = 1 << 20, ae = 1 << 25, oe = 65536, se = 1 << 21, ce = 1 << 22, le = 1 << 23, E = Symbol("$state"), D = Symbol("legacy props"), O = Symbol(""), ue = new class extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}(), de = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
}));
function fe(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
var pe = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function me() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function he(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ge(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function _e() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ve(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function ye() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function be(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function xe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Se() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ce() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function we() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var Te = e((() => {
	r(), pe();
})), Ee, De, Oe, ke = e((() => {
	Ee = {}, De = Symbol(), Oe = "http://www.w3.org/1999/xhtml";
}));
function Ae(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function je() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
var Me = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
function Ne(e) {
	j = e;
}
function Pe(e) {
	if (e === null) throw Ae(), Ee;
	return M = e;
}
function Fe() {
	return Pe(/* @__PURE__ */ On(M));
}
function A(e) {
	if (j) {
		if (/* @__PURE__ */ On(M) !== null) throw Ae(), Ee;
		M = e;
	}
}
function Ie(e = 1) {
	if (j) {
		for (var t = e, n = M; t--;) n = /* @__PURE__ */ On(n);
		M = n;
	}
}
function Le(e = !0) {
	for (var t = 0, n = M;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ On(n);
		e && n.remove(), n = i;
	}
}
function Re(e) {
	if (!e || e.nodeType !== 8) throw Ae(), Ee;
	return e.data;
}
var j, M, N = e((() => {
	k(), ke(), Me(), zn(), j = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function ze(e) {
	return e === this.v;
}
function Be(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ve(e) {
	return !Be(e, this.v);
}
var He = e((() => {}));
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
function Ue() {
	Ge = !0;
}
var We, Ge, Ke = e((() => {
	We = !1, Ge = !1;
})), qe = e((() => {
	y();
})), Je = e((() => {
	qe(), k(), V(), q();
})), Ye = e((() => {
	r(), y(), pe();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
function Xe(e) {
	P = e;
}
function Ze(e, t = !1, n) {
	P = {
		p: P,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: Ge && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Qe(e) {
	var t = P, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Qn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, P = t.p, e ?? {};
}
function $e() {
	return !Ge || P !== null && P.l === null;
}
var P, et = e((() => {
	r(), Te(), q(), V(), Ke(), k(), P = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function tt() {
	var e = it;
	it = [], a(e);
}
function nt(e) {
	if (it.length === 0 && !Pt) {
		var t = it;
		queueMicrotask(() => {
			t === it && tt();
		});
	}
	it.push(e);
}
function rt() {
	for (; it.length > 0;) tt();
}
var it, at = e((() => {
	y(), Ht(), it = [];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/error-handling.js
function ot(e) {
	var t = K;
	if (t === null) return G.f |= le, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	st(e, t);
}
function st(e, t) {
	for (; t !== null;) {
		if (t.f & 128) {
			if (!(t.f & 32768)) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
var ct = e((() => {
	r(), ke(), zn(), k(), y(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function lt(e, t) {
	e.f = e.f & dt | t;
}
function ut(e) {
	e.f & 512 || e.deps === null ? lt(e, b) : lt(e, S);
}
var dt, ft = e((() => {
	k(), dt = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function pt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= oe, pt(t.deps));
}
function mt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), pt(e.deps), lt(e, b);
}
var ht = e((() => {
	k(), ft();
})), gt = e((() => {
	q(), y();
})), _t = e((() => {
	y(), gt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
function vt(e) {
	var t = bt;
	try {
		return bt = !1, [e(), bt];
	} finally {
		bt = t;
	}
}
var yt, bt, xt = e((() => {
	gt(), _t(), y(), q(), V(), xn(), yt = !1, bt = !1;
})), St = e((() => {
	k(), qe(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
function Ct(e) {
	var t = Pt;
	Pt = !0;
	try {
		var n;
		for (e && (F !== null && !F.is_fork && F.flush(), n = e());;) {
			if (rt(), F === null) return n;
			F.flush();
		}
	} finally {
		Pt = t;
	}
}
function wt() {
	try {
		ye();
	} catch (e) {
		st(e, Nt);
	}
}
function Tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && kr(r) && (Vt = /* @__PURE__ */ new Set(), Pr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && mr(r), Vt?.size > 0)) {
				yn.clear();
				for (let e of Vt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Vt.has(n) && (Vt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Pr(n);
					}
				}
				Vt.clear();
			}
		}
		Vt = null;
	}
}
function Et(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Et(i, t, n, r) : e & 4194320 && !(e & 2048) && Dt(i, t, r) && (lt(i, x), Ot(i));
	}
}
function Dt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && Dt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Ot(e) {
	F.schedule(e);
}
function kt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), lt(e, b);
		for (var n = e.first; n !== null;) kt(n, t), n = n.next;
	}
}
function At(e) {
	lt(e, b);
	for (var t = e.first; t !== null;) At(t), t = t.next;
}
var jt, F, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht = e((() => {
	k(), Ke(), y(), q(), Te(), at(), r(), ct(), xn(), V(), ht(), ke(), ft(), xt(), Ye(), St(), jt = /* @__PURE__ */ new Set(), F = null, Mt = null, Nt = null, Pt = !1, Ft = !1, It = null, Lt = null, Rt = 0, zt = 1, Bt = class e {
		id = zt++;
		current = /* @__PURE__ */ new Map();
		previous = /* @__PURE__ */ new Map();
		#e = /* @__PURE__ */ new Set();
		#t = /* @__PURE__ */ new Set();
		#n = /* @__PURE__ */ new Map();
		#r = /* @__PURE__ */ new Map();
		#i = null;
		#a = [];
		#o = [];
		#s = /* @__PURE__ */ new Set();
		#c = /* @__PURE__ */ new Set();
		#l = /* @__PURE__ */ new Map();
		is_fork = !1;
		#u = !1;
		#d = /* @__PURE__ */ new Set();
		#f() {
			return this.is_fork || this.#r.size > 0;
		}
		#p() {
			for (let n of this.#d) for (let r of n.#r.keys()) {
				for (var e = !1, t = r; t.parent !== null;) {
					if (this.#l.has(t)) {
						e = !0;
						break;
					}
					t = t.parent;
				}
				if (!e) return !0;
			}
			return !1;
		}
		skip_effect(e) {
			this.#l.has(e) || this.#l.set(e, {
				d: [],
				m: []
			});
		}
		unskip_effect(e) {
			var t = this.#l.get(e);
			if (t) {
				this.#l.delete(e);
				for (var n of t.d) lt(n, x), this.schedule(n);
				for (n of t.m) lt(n, S), this.schedule(n);
			}
		}
		#m() {
			if (Rt++ > 1e3 && (jt.delete(this), wt()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), lt(e, x), this.schedule(e);
				for (let e of this.#c) lt(e, S), this.schedule(e);
			}
			let t = this.#a;
			this.#a = [], this.apply();
			var n = It = [], r = [], i = Lt = [];
			for (let e of t) try {
				this.#h(e, n, r);
			} catch (t) {
				throw At(e), t;
			}
			if (F = null, i.length > 0) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (It = null, Lt = null, this.#f() || this.#p()) {
				this.#g(r), this.#g(n);
				for (let [e, t] of this.#l) kt(e, t);
			} else {
				this.#n.size === 0 && jt.delete(this), this.#s.clear(), this.#c.clear();
				for (let e of this.#e) e(this);
				this.#e.clear(), Tt(r), Tt(n), this.#i?.resolve();
			}
			var o = F;
			if (this.#a.length > 0) {
				let e = o ??= this;
				e.#a.push(...this.#a.filter((t) => !e.#a.includes(t)));
			}
			o !== null && (jt.add(o), o.#m()), jt.has(this) || this.#_();
		}
		#h(e, t, n) {
			e.f ^= b;
			for (var r = e.first; r !== null;) {
				var i = r.f, a = (i & 96) != 0;
				if (!(a && i & 1024 || i & 8192 || this.#l.has(r)) && r.fn !== null) {
					a ? r.f ^= b : i & 4 ? t.push(r) : We && i & 16777224 ? n.push(r) : kr(r) && (i & 16 && this.#c.add(r), Pr(r));
					var o = r.first;
					if (o !== null) {
						r = o;
						continue;
					}
				}
				for (; r !== null;) {
					var s = r.next;
					if (s !== null) {
						r = s;
						break;
					}
					r = r.parent;
				}
			}
		}
		#g(e) {
			for (var t = 0; t < e.length; t += 1) mt(e[t], this.#s, this.#c);
		}
		capture(e, t, n = !1) {
			t !== De && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), Mt?.set(e, e.v));
		}
		activate() {
			F = this;
		}
		deactivate() {
			F = null, Mt = null;
		}
		flush() {
			try {
				Ft = !0, F = this, this.#m();
			} finally {
				Rt = 0, Nt = null, It = null, Lt = null, Ft = !1, F = null, Mt = null, yn.clear();
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear(), jt.delete(this);
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		#_() {
			for (let l of jt) {
				var e = l.id < this.id, t = [];
				for (let [r, [i, a]] of this.current) {
					if (l.current.has(r)) {
						var n = l.current.get(r)[0];
						if (e && i !== n) l.current.set(r, [i, a]);
						else continue;
					}
					t.push(r);
				}
				var r = [...l.current.keys()].filter((e) => !this.current.has(e));
				if (r.length === 0) e && l.discard();
				else if (t.length > 0) {
					l.activate();
					var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
					for (var o of t) Et(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
					for (let e of this.#o) !(e.f & 155648) && Dt(e, s, a) && (e.f & 4194320 ? (lt(e, x), l.schedule(e)) : l.#s.add(e));
					if (l.#a.length > 0) {
						l.apply();
						for (var c of l.#a) l.#h(c, [], []);
						l.#a = [];
					}
					l.deactivate();
				}
			}
			for (let e of jt) e.#d.has(this) && (e.#d.delete(this), e.#d.size === 0 && !e.#f() && (e.activate(), e.#m()));
		}
		increment(e, t) {
			let n = this.#n.get(t) ?? 0;
			if (this.#n.set(t, n + 1), e) {
				let e = this.#r.get(t) ?? 0;
				this.#r.set(t, e + 1);
			}
		}
		decrement(e, t, n) {
			let r = this.#n.get(t) ?? 0;
			if (r === 1 ? this.#n.delete(t) : this.#n.set(t, r - 1), e) {
				let e = this.#r.get(t) ?? 0;
				e === 1 ? this.#r.delete(t) : this.#r.set(t, e - 1);
			}
			this.#u || n || (this.#u = !0, nt(() => {
				this.#u = !1, this.flush();
			}));
		}
		transfer_effects(e, t) {
			for (let t of e) this.#s.add(t);
			for (let e of t) this.#c.add(e);
			e.clear(), t.clear();
		}
		oncommit(e) {
			this.#e.add(e);
		}
		ondiscard(e) {
			this.#t.add(e);
		}
		settled() {
			return (this.#i ??= o()).promise;
		}
		static ensure() {
			if (F === null) {
				let t = F = new e();
				Ft || (jt.add(F), Pt || nt(() => {
					F === t && t.flush();
				}));
			}
			return F;
		}
		apply() {
			if (!We || !this.is_fork && jt.size === 1) {
				Mt = null;
				return;
			}
			Mt = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) Mt.set(e, t);
			for (let n of jt) if (!(n === this || n.is_fork)) {
				var e = !1, t = !1;
				if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
				if (e && t) this.#d.add(n);
				else for (let [e, t] of n.previous) Mt.has(e) || Mt.set(e, t);
			}
		}
		schedule(e) {
			if (Nt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (It !== null && t === K && (We || (G === null || !(G.f & 2)) && !yt)) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= b;
				}
			}
			this.#a.push(t);
		}
	}, Vt = null;
}));
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ut(e) {
	let t = 0, n = fn(0), r;
	return () => {
		Yn() && (H(n), ar(() => (t === 0 && (r = U(() => e(() => gn(n)))), t += 1, () => {
			nt(() => {
				--t, t === 0 && (r?.(), r = void 0, gn(n));
			});
		})));
	};
}
var Wt = e((() => {
	q(), V(), xn(), Je(), r(), at();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Gt(e, t, n, r) {
	new qt(e, t, n, r);
}
var Kt, qt, Jt = e((() => {
	k(), ke(), et(), ct(), V(), q(), N(), at(), Te(), Me(), r(), Ht(), xn(), Je(), Wt(), zn(), ht(), ft(), Kt = te | re, qt = class {
		parent;
		is_pending = !1;
		transform_error;
		#e;
		#t = j ? M : null;
		#n;
		#r;
		#i;
		#a = null;
		#o = null;
		#s = null;
		#c = null;
		#l = 0;
		#u = 0;
		#d = !1;
		#f = /* @__PURE__ */ new Set();
		#p = /* @__PURE__ */ new Set();
		#m = null;
		#h = Ut(() => (this.#m = fn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = K;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = sr(() => {
				if (j) {
					let e = this.#t;
					Fe();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Kt), j && (this.#e = M);
		}
		#g() {
			try {
				this.#a = cr(() => this.#r(this.#e));
			} catch (e) {
				this.error(e);
			}
		}
		#_(e) {
			let t = this.#n.failed;
			t && (this.#s = cr(() => {
				t(this.#e, () => e, () => () => {});
			}));
		}
		#v() {
			let e = this.#n.pending;
			e && (this.is_pending = !0, this.#o = cr(() => e(this.#e)), nt(() => {
				var e = this.#c = document.createDocumentFragment(), t = En();
				e.append(t), this.#a = this.#x(() => cr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, hr(this.#o, () => {
					this.#o = null;
				}), this.#b(F));
			}));
		}
		#y() {
			try {
				if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = cr(() => {
					this.#r(this.#e);
				}), this.#u > 0) {
					var e = this.#c = document.createDocumentFragment();
					yr(this.#a, e);
					let t = this.#n.pending;
					this.#o = cr(() => t(this.#e));
				} else this.#b(F);
			} catch (e) {
				this.error(e);
			}
		}
		#b(e) {
			this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
		}
		defer_effect(e) {
			mt(e, this.#f, this.#p);
		}
		is_rendered() {
			return !this.is_pending && (!this.parent || this.parent.is_rendered());
		}
		has_pending_snippet() {
			return !!this.#n.pending;
		}
		#x(e) {
			var t = K, n = G, r = P;
			wr(this.#i), Cr(this.#i), Xe(this.#i.ctx);
			try {
				return Bt.ensure(), e();
			} catch (e) {
				return ot(e), null;
			} finally {
				wr(t), Cr(n), Xe(r);
			}
		}
		#S(e, t) {
			if (!this.has_pending_snippet()) {
				this.parent && this.parent.#S(e, t);
				return;
			}
			this.#u += e, this.#u === 0 && (this.#b(t), this.#o && hr(this.#o, () => {
				this.#o = null;
			}), this.#c &&= (this.#e.before(this.#c), null));
		}
		update_pending_count(e, t) {
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, nt(() => {
				this.#d = !1, this.#m && mn(this.#m, this.#l);
			}));
		}
		get_effect_pending() {
			return this.#h(), H(this.#m);
		}
		error(e) {
			var t = this.#n.onerror;
			let n = this.#n.failed;
			if (!t && !n) throw e;
			this.#a &&= (fr(this.#a), null), this.#o &&= (fr(this.#o), null), this.#s &&= (fr(this.#s), null), j && (Pe(this.#t), Ie(), Pe(Le()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					je();
					return;
				}
				r = !0, i && we(), this.#s !== null && hr(this.#s, () => {
					this.#s = null;
				}), this.#x(() => {
					this.#y();
				});
			}, o = (e) => {
				try {
					i = !0, t?.(e, a), i = !1;
				} catch (e) {
					st(e, this.#i && this.#i.parent);
				}
				n && (this.#s = this.#x(() => {
					try {
						return cr(() => {
							var t = K;
							t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
						});
					} catch (e) {
						return st(e, this.#i.parent), null;
					}
				}));
			};
			nt(() => {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					st(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => st(e, this.#i && this.#i.parent)) : o(t);
			});
		}
	};
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Yt(e, t, n, r) {
	let i = $e() ? en : rn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = K, s = Xt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || st(e, o);
		}
		Zt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Qt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ tn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => st(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), Zt();
	}) : d();
}
function Xt() {
	var e = K, t = G, n = P, r = F;
	return function(i = !0) {
		wr(e), Cr(t), Xe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Zt(e = !0) {
	wr(null), Cr(null), Xe(null), e && F?.deactivate();
}
function Qt() {
	var e = K, t = e.b, n = F, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var $t = e((() => {
	k(), r(), et(), Jt(), ct(), q(), Ht(), dn(), V();
}));
/* @__NO_SIDE_EFFECTS__ */
function en(e) {
	var t = 2 | x, n = G !== null && G.f & 2 ? G : null;
	return K !== null && (K.f |= re), {
		ctx: P,
		deps: null,
		effects: null,
		equals: ze,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: De,
		wv: 0,
		parent: n ?? K,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function tn(e, t, n) {
	let r = K;
	r === null && me();
	var i = void 0, a = fn(De), s = !G, c = /* @__PURE__ */ new Map();
	return ir(() => {
		var t = K, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(Zt);
		} catch (e) {
			n.reject(e), Zt();
		}
		var l = F;
		if (s) {
			if (t.f & 32768) var u = Qt();
			if (r.b.is_rendered()) c.get(l)?.reject(ue), c.delete(l);
			else {
				for (let e of c.values()) e.reject(ue);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === ue), !(n === ue || t.f & 16384)) {
				if (l.activate(), n) a.f |= le, mn(a, n);
				else {
					a.f & 8388608 && (a.f ^= le), mn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(ue);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Xn(() => {
		for (let e of c.values()) e.reject(ue);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nn(e) {
	let t = /* @__PURE__ */ en(e);
	return We || Tr(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function rn(e) {
	let t = /* @__PURE__ */ en(e);
	return t.equals = Ve, t;
}
function an(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) fr(t[n]);
	}
}
function on(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function sn(e) {
	var t, n = K;
	wr(on(e));
	try {
		e.f &= ~oe, an(e), t = jr(e);
	} finally {
		wr(n);
	}
	return t;
}
function cn(e) {
	var t = e.v, n = sn(e);
	if (!e.equals(n) && (e.wv = Or(), (!F?.is_fork || e.deps === null) && (e.v = n, F?.capture(e, t, !0), e.deps === null))) {
		lt(e, b);
		return;
	}
	Br || (Mt === null ? ut(e) : (Yn() || F?.is_fork) && Mt.set(e, n));
}
function ln(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ue), t.teardown = v, t.ac = null, Nr(t, 0), ur(t));
}
function un(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Pr(t);
}
var dn = e((() => {
	r(), k(), q(), He(), Te(), Me(), V(), xn(), Ye(), Ke(), et(), ke(), Ht(), $t(), y(), ft();
}));
function fn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: ze,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function pn(e, t) {
	let n = fn(e, t);
	return Tr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t = !1, n = !0) {
	let r = fn(e);
	return t || (r.equals = Ve), Ge && n && P !== null && P.l !== null && (P.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return G !== null && (!Vr || G.f & 131072) && $e() && G.f & 4325394 && (Hr === null || !l.call(Hr, e)) && Ce(), mn(e, n ? Sn(t) : t, Lt);
}
function mn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Br ? yn.set(e, t) : yn.set(e, r), e.v = t;
		var i = Bt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && sn(t), Mt === null && ut(t);
		}
		e.wv = Or(), _n(e, x, n), $e() && K !== null && K.f & 1024 && !(K.f & 96) && (Gr === null ? Er([e]) : Gr.push(e)), !i.is_fork && vn.size > 0 && !bn && hn();
	}
	return t;
}
function hn() {
	bn = !1;
	for (let e of vn) e.f & 1024 && lt(e, S), kr(e) && Pr(e);
	vn.clear();
}
function gn(e) {
	L(e, e.v + 1);
}
function _n(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = $e(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & x) === 0;
			if (l && lt(s, t), c & 2) {
				var u = s;
				Mt?.delete(u), c & 65536 || (c & 512 && (s.f |= oe), _n(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Vt !== null && Vt.add(d), n === null ? Ot(d) : n.push(d);
			}
		}
	}
}
var vn, yn, bn, xn = e((() => {
	r(), q(), He(), k(), Te(), Ke(), y(), Je(), Ye(), et(), Ht(), Cn(), dn(), ft(), vn = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Map(), bn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function Sn(e) {
	if (typeof e != "object" || !e || E in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ pn(0), a = null, o = Jr, c = (e) => {
		if (Jr === o) return e();
		var t = G, n = Jr;
		Cr(null), Dr(o);
		var r = e();
		return Cr(t), Dr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ pn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && xe();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ pn(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ pn(De, a));
					n.set(t, e), gn(i);
				}
			} else L(r, De), gn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === E) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ pn(Sn(s ? t[r] : De), a)), n.set(r, o)), o !== void 0) {
				var l = H(o);
				return l === De ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = H(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== De) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === E) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== De || Reflect.has(e, t);
			return (r !== void 0 || K !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ pn(i ? Sn(e[t]) : De, a)), n.set(t, r)), H(r) === De) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ pn(De, a)), n.set(d + "", p)) : L(p, De);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ pn(void 0, a)), L(l, Sn(o)), n.set(t, l));
			else {
				u = l.v !== De;
				var m = c(() => Sn(o));
				L(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				gn(i);
			}
			return !0;
		},
		ownKeys(e) {
			H(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== De;
			});
			for (var [r, a] of n) a.v !== De && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Se();
		}
	});
}
var Cn = e((() => {
	r(), q(), y(), xn(), k(), ke(), Te(), Je(), Ye(), Ke(), new Set([
		"copyWithin",
		"fill",
		"pop",
		"push",
		"reverse",
		"shift",
		"sort",
		"splice",
		"unshift"
	]);
})), wn = e((() => {
	Me(), Cn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/operations.js
function Tn() {
	if (Pn === void 0) {
		Pn = window, Fn = document, In = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Ln = f(t, "firstChild").get, Rn = f(t, "nextSibling").get, _(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _(n) && (n.__t = void 0);
	}
}
function En(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Dn(e) {
	return Ln.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function On(e) {
	return Rn.call(e);
}
function R(e, t) {
	if (!j) return /* @__PURE__ */ Dn(e);
	var n = /* @__PURE__ */ Dn(M);
	if (n === null) n = M.appendChild(En());
	else if (t && n.nodeType !== 3) {
		var r = En();
		return n?.before(r), Pe(r), r;
	}
	return t && Nn(n), Pe(n), n;
}
function kn(e, t = !1) {
	if (!j) {
		var n = /* @__PURE__ */ Dn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ On(n) : n;
	}
	if (t) {
		if (M?.nodeType !== 3) {
			var r = En();
			return M?.before(r), Pe(r), r;
		}
		Nn(M);
	}
	return M;
}
function z(e, t = 1, n = !1) {
	let r = j ? M : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ On(r);
	if (!j) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = En();
			return r === null ? i?.after(a) : r.before(a), Pe(a), a;
		}
		Nn(r);
	}
	return Pe(r), r;
}
function An(e) {
	e.textContent = "";
}
function jn() {
	return !We || Vt !== null ? !1 : (K.f & T) !== 0;
}
function Mn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Nn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var Pn, Fn, In, Ln, Rn, zn = e((() => {
	N(), r(), wn(), y(), q(), Ke(), k(), Ht(), ke();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Bn(e) {
	j && /* @__PURE__ */ Dn(e) !== null && An(e);
}
function Vn() {
	Hn || (Hn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Hn, Un = e((() => {
	N(), zn(), at(), Hn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Wn(e) {
	var t = G, n = K;
	Cr(null), wr(null);
	try {
		return e();
	} finally {
		Cr(t), wr(n);
	}
}
var Gn = e((() => {
	V(), q(), Un();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Kn(e) {
	K === null && (G === null && ve(e), _e()), Br && ge(e);
}
function qn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Jn(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= C);
	var r = {
		ctx: P,
		deps: null,
		nodes: null,
		f: e | x | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	F?.register_created_effect(r);
	var i = r;
	if (e & 4) It === null ? Bt.ensure().schedule(r) : It.push(r);
	else if (t !== null) {
		try {
			Pr(r);
		} catch (e) {
			throw fr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= te));
	}
	if (i !== null && (i.parent = n, n !== null && qn(i, n), G !== null && G.f & 2 && !(e & 64))) {
		var a = G;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Yn() {
	return G !== null && !Vr;
}
function Xn(e) {
	let t = Jn(8, null);
	return lt(t, b), t.teardown = e, t;
}
function Zn(e) {
	Kn("$effect");
	var t = K.f;
	if (!G && t & 32 && !(t & 32768)) {
		var n = P;
		(n.e ??= []).push(e);
	} else return Qn(e);
}
function Qn(e) {
	return Jn(4 | ie, e);
}
function $n(e) {
	return Kn("$effect.pre"), Jn(8 | ie, e);
}
function er(e) {
	Bt.ensure();
	let t = Jn(64 | re, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? hr(t, () => {
			fr(t), n(void 0);
		}) : (fr(t), n(void 0));
	});
}
function tr(e) {
	return Jn(4, e);
}
function nr(e, t) {
	var n = P, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = ar(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = K;
			try {
				wr(n.parent), U(t);
			} finally {
				wr(n);
			}
		}
	});
}
function rr() {
	var e = P;
	ar(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && lt(n, S), kr(n) && Pr(n), t.ran = !1;
		}
	});
}
function ir(e) {
	return Jn(ce | re, e);
}
function ar(e, t = 0) {
	return Jn(8 | t, e);
}
function B(e, t = [], n = [], r = []) {
	Yt(r, t, n, (t) => {
		Jn(8, () => e(...t.map(H)));
	});
}
function or(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = Qt();
	Yt(r, t, n, (t) => {
		Jn(4, () => e(...t.map(H))), i && i();
	});
}
function sr(e, t = 0) {
	return Jn(16 | t, e);
}
function cr(e) {
	return Jn(32 | re, e);
}
function lr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Br, n = G;
		Sr(!0), Cr(null);
		try {
			t.call(null);
		} finally {
			Sr(e), Cr(n);
		}
	}
}
function ur(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Wn(() => {
			e.abort(ue);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : fr(n, t), n = r;
	}
}
function dr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || fr(t), t = n;
	}
}
function fr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (pr(e.nodes.start, e.nodes.end), n = !0), lt(e, ee), ur(e, t && !n), Nr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	lr(e), e.f ^= ee, e.f |= w;
	var i = e.parent;
	i !== null && i.first !== null && mr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function pr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ On(e);
		e.remove(), e = n;
	}
}
function mr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function hr(e, t, n = !0) {
	var r = [];
	gr(e, r, !0);
	var i = () => {
		n && fr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function gr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			gr(i, t, o ? n : !1), i = a;
		}
	}
}
function _r(e) {
	vr(e, !0);
}
function vr(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (lt(e, x), Bt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			vr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function yr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ On(n);
		t.append(n), n = i;
	}
}
var V = e((() => {
	q(), k(), Te(), r(), y(), zn(), et(), Ht(), $t(), Gn(), ft();
})), br, xr = e((() => {
	xn(), q(), br = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
function Sr(e) {
	Br = e;
}
function Cr(e) {
	G = e;
}
function wr(e) {
	K = e;
}
function Tr(e) {
	G !== null && (!We || G.f & 2) && (Hr === null ? Hr = [e] : Hr.push(e));
}
function Er(e) {
	Gr = e;
}
function Dr(e) {
	Jr = e;
}
function Or() {
	return ++Kr;
}
function kr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~oe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (kr(a) && cn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Mt === null && lt(e, b);
	}
	return !1;
}
function Ar(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!We && Hr !== null && l.call(Hr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Ar(a, t, !1) : t === a && (n ? lt(a, x) : a.f & 1024 && lt(a, S), Ot(a));
	}
}
function jr(e) {
	var t = Ur, n = Wr, r = Gr, i = G, a = Hr, o = P, s = Vr, c = Jr, l = e.f;
	Ur = null, Wr = 0, Gr = null, G = l & 96 ? null : e, Hr = null, Xe(e.ctx), Vr = !1, Jr = ++qr, e.ac !== null && (Wn(() => {
		e.ac.abort(ue);
	}), e.ac = null);
	try {
		e.f |= se;
		var u = e.fn, d = u();
		e.f |= T;
		var f = e.deps, p = F?.is_fork;
		if (Ur !== null) {
			var m;
			if (p || Nr(e, Wr), f !== null && Wr > 0) for (f.length = Wr + Ur.length, m = 0; m < Ur.length; m++) f[Wr + m] = Ur[m];
			else e.deps = f = Ur;
			if (Yn() && e.f & 512) for (m = Wr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Wr < f.length && (Nr(e, Wr), f.length = Wr);
		if ($e() && Gr !== null && !Vr && f !== null && !(e.f & 6146)) for (m = 0; m < Gr.length; m++) Ar(Gr[m], e);
		if (i !== null && i !== e) {
			if (qr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = qr;
			if (t !== null) for (let e of t) e.rv = qr;
			Gr !== null && (r === null ? r = Gr : r.push(...Gr));
		}
		return e.f & 8388608 && (e.f ^= le), d;
	} catch (e) {
		return ot(e);
	} finally {
		e.f ^= se, Ur = t, Wr = n, Gr = r, G = i, Hr = a, Xe(o), Vr = s, Jr = c;
	}
}
function Mr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = c.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Ur === null || !l.call(Ur, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~oe), ut(a), ln(a), Nr(a, 0);
	}
}
function Nr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Mr(e, n[r]);
}
function Pr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		lt(e, b);
		var n = K, r = zr;
		K = e, zr = !0;
		try {
			t & 16777232 ? dr(e) : ur(e), lr(e);
			var i = jr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Kr;
		} finally {
			zr = r, K = n;
		}
	}
}
async function Fr() {
	if (We) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), Ct();
}
function H(e) {
	var t = (e.f & 2) != 0;
	if (br?.add(e), G !== null && !Vr && !(K !== null && K.f & 16384) && (Hr === null || !l.call(Hr, e))) {
		var n = G.deps;
		if (G.f & 2097152) e.rv < qr && (e.rv = qr, Ur === null && n !== null && n[Wr] === e ? Wr++ : Ur === null ? Ur = [e] : Ur.push(e));
		else {
			(G.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [G] : l.call(r, G) || r.push(G);
		}
	}
	if (Br && yn.has(e)) return yn.get(e);
	if (t) {
		var i = e;
		if (Br) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Lr(i)) && (a = sn(i)), yn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Vr && G !== null && (zr || (G.f & 512) != 0), s = (i.f & T) === 0;
		kr(i) && (o && (i.f |= 512), cn(i)), o && !s && (un(i), Ir(i));
	}
	if (Mt?.has(e)) return Mt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Ir(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (un(t), Ir(t));
}
function Lr(e) {
	if (e.v === De) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (yn.has(t) || t.f & 2 && Lr(t)) return !0;
	return !1;
}
function U(e) {
	var t = Vr;
	try {
		return Vr = !0, e();
	} finally {
		Vr = t;
	}
}
function W(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (E in e) Rr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && E in n && Rr(n);
		}
	}
}
function Rr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Rr(e[n], t);
		} catch {}
		let n = g(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = p(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
var zr, Br, G, Vr, K, Hr, Ur, Wr, Gr, Kr, qr, Jr, q = e((() => {
	r(), y(), V(), k(), xn(), dn(), Ke(), Je(), Ye(), et(), Ht(), ct(), ke(), xr(), Gn(), ft(), Me(), zr = !1, Br = !1, G = null, Vr = !1, K = null, Hr = null, Ur = null, Wr = 0, Gr = null, Kr = 1, qr = 0, Jr = qr;
})), Yr = e((() => {
	Ya(), eo(), V();
}));
//#endregion
//#region node_modules/svelte/src/utils.js
function Xr(e) {
	return Qr.includes(e);
}
var Zr, Qr, $r, ei = e((() => {
	Zr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), [...Zr], Qr = ["touchstart", "touchmove"], $r = [
		"$state",
		"$state.raw",
		"$derived",
		"$derived.by"
	], [...$r];
})), ti = e((() => {
	k(), ei(), q();
})), ni = e((() => {
	k(), N(), et();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function ri(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ii.call(t, e), !e.cancelBubble) return Wn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function J(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = ri(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Xn(() => {
		t.removeEventListener(e, o, a);
	});
}
function ii(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ci = e;
	var o = 0, s = ci === e && e[ai];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[ai] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		d(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = G, f = K;
		Cr(null), wr(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[ai]?.[r];
					g != null && (!a.disabled || e.target === a) && g.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble || h === t || h === null) break;
				a = h;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[ai] = t, delete e.currentTarget, Cr(u), wr(f);
		}
	}
}
var ai, oi, si, ci, li = e((() => {
	V(), y(), N(), at(), q(), Gn(), ai = Symbol("events"), oi = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), ci = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function ui(e) {
	return fi?.createHTML(e) ?? e;
}
function di(e) {
	var t = Mn("template");
	return t.innerHTML = ui(e.replaceAll("<!>", "<!---->")), t.content;
}
var fi, pi = e((() => {
	zn(), fi = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function mi(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Y(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (j) return mi(M, null), M;
		i === void 0 && (i = di(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Dn(i)));
		var t = r || In ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Dn(t), s = t.lastChild;
			mi(o, s);
		} else mi(t, t);
		return t;
	};
}
function hi(e = "") {
	if (!j) {
		var t = En(e + "");
		return mi(t, t), t;
	}
	var n = M;
	return n.nodeType === 3 ? Nn(n) : (n.before(n = En()), Pe(n)), mi(n, n), n;
}
function gi() {
	if (j) return mi(M, null), M;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = En();
	return e.append(t, n), mi(t, n), e;
}
function X(e, t) {
	if (j) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = M), Fe();
		return;
	}
	e !== null && e.before(t);
}
var _i = e((() => {
	N(), zn(), pi(), q(), ke(), k();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
function Z(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function vi(e, t) {
	return yi(e, t);
}
function yi(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Tn();
	var c = void 0, l = er(() => {
		var l = n ?? t.appendChild(En());
		Gt(l, { pending: () => {} }, (t) => {
			Ze({});
			var n = P;
			if (a && (n.c = a), i && (r.$$events = i), j && mi(t, null), bi = o, c = e(t, r) || {}, bi = !0, j && (K.nodes.end = M, M === null || M.nodeType !== 8 || M.data !== "]")) throw Ae(), Ee;
			Qe();
		}, s);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = Xr(r);
					for (let e of [t, document]) {
						var a = xi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), xi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ii, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(u(oi)), si.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = xi.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, ii), r.delete(e), r.size === 0 && xi.delete(n)) : r.set(e, i);
			}
			si.delete(f), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return Si.set(c, l), c;
}
var bi, xi, Si, Ci = e((() => {
	r(), zn(), ke(), q(), et(), V(), N(), y(), li(), Me(), Te(), _i(), ei(), k(), Jt(), xi = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new WeakMap();
})), wi = e((() => {
	k(), N(), V(), xn(), Ci(), q();
})), Ti = e((() => {
	y(), k(), et(), ei();
})), Ei = e((() => {
	Te(), et();
})), Di = e((() => {
	qe(), V(), q(), Ye();
})), Oi = e((() => {
	$t(), q(), N();
})), ki = e((() => {
	Te();
})), Ai, ji = e((() => {
	Ht(), V(), N(), zn(), Ai = class {
		anchor;
		#e = /* @__PURE__ */ new Map();
		#t = /* @__PURE__ */ new Map();
		#n = /* @__PURE__ */ new Map();
		#r = /* @__PURE__ */ new Set();
		#i = !0;
		constructor(e, t = !0) {
			this.anchor = e, this.#i = t;
		}
		#a = (e) => {
			if (this.#e.has(e)) {
				var t = this.#e.get(e), n = this.#t.get(t);
				if (n) _r(n), this.#r.delete(t);
				else {
					var r = this.#n.get(t);
					r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
				}
				for (let [t, n] of this.#e) {
					if (this.#e.delete(t), t === e) break;
					let r = this.#n.get(n);
					r && (fr(r.effect), this.#n.delete(n));
				}
				for (let [e, r] of this.#t) {
					if (e === t || this.#r.has(e)) continue;
					let i = () => {
						if (Array.from(this.#e.values()).includes(e)) {
							var t = document.createDocumentFragment();
							yr(r, t), t.append(En()), this.#n.set(e, {
								effect: r,
								fragment: t
							});
						} else fr(r);
						this.#r.delete(e), this.#t.delete(e);
					};
					this.#i || !n ? (this.#r.add(e), hr(r, i, !1)) : i();
				}
			}
		};
		#o = (e) => {
			this.#e.delete(e);
			let t = Array.from(this.#e.values());
			for (let [e, n] of this.#n) t.includes(e) || (fr(n.effect), this.#n.delete(e));
		};
		ensure(e, t) {
			var n = F, r = jn();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = En();
				i.append(a), this.#n.set(e, {
					effect: cr(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, cr(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else j && (this.anchor = M), this.#a(n);
		}
	};
})), Mi = e((() => {
	y(), V(), xn(), N(), at(), et(), Ht(), ji(), $t();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Q(e, t, n = !1) {
	var r;
	j && (r = M, Fe());
	var i = new Ai(e), a = n ? te : 0;
	function o(e, t) {
		if (j) {
			var n = Re(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Le();
				Pe(a), i.anchor = a, Ne(!1), i.ensure(e, t), Ne(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	sr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Ni = e((() => {
	k(), N(), V(), ji();
})), Pi = e((() => {
	et(), V(), N(), ji();
})), Fi = e((() => {
	V(), N(), zn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ii(e, t) {
	return t;
}
function Li(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		hr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Ri(e, u(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, d = l.parentNode;
			An(d), d.append(l), e.items.clear();
		}
		Ri(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Ri(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ae, yr(a, document.createDocumentFragment())) : fr(t[i], n);
	}
}
function zi(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = j ? Pe(/* @__PURE__ */ Dn(l)) : l.appendChild(En());
	}
	j && Fe();
	var d = null, f = /* @__PURE__ */ rn(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Vi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ae, Ui(d, null, o)) : _r(d) : hr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: sr(() => {
			p = H(f);
			var e = p.length;
			let s = !1;
			j && Re(o) === "[!" != (e === 0) && (o = Le(), Pe(o), Ne(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = F, v = jn(), y = 0; y < e; y += 1) {
				j && M.nodeType === 8 && M.data === "]" && (o = M, s = !0, Ne(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && mn(S.v, b), S.i && mn(S.i, y), v && u.unskip_effect(S.e)) : (S = Hi(c, h ? o : Gi ??= En(), b, x, y, i, t, n), h || (S.e.f |= ae), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = cr(() => a(o)) : (d = cr(() => a(Gi ??= En())), d.f |= ae)), e > l.size && he("", "", ""), j && e > 0 && Pe(Le()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			s && Ne(!0), H(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, j && (o = M);
}
function Bi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Vi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Bi(e.effect.first), l, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (_r(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ae, _ === c) Ui(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Wi(e, d, _), Wi(e, _, y), Ui(_, y, n), d = _, p = [], m = [], c = Bi(d.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Ui(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					Wi(e, S.prev, C.next), Wi(e, d, S), Wi(e, C, b), c = b, d = C, --v, p = [], m = [];
				} else l.delete(_), Ui(_, c, n), Wi(e, _.prev, _.next), Wi(e, _, d === null ? e.effect.first : d.next), Wi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Bi(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = Bi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ri(e, u(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var w = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || w.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && w.push(c), c = Bi(c.next);
		var T = w.length;
		if (T > 0) {
			var ee = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Li(e, w, ee);
		}
	}
	a && nt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Hi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? fn(n) : /* @__PURE__ */ I(n, !1, !1) : null, l = o & 2 ? fn(i) : null;
	return {
		v: c,
		i: l,
		e: cr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ui(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ On(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Wi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var Gi, Ki = e((() => {
	ke(), N(), zn(), V(), xn(), y(), k(), at(), q(), r(), dn(), Ht(), Te();
})), qi = e((() => {
	V(), N(), _i(), ei(), et(), zn(), q(), k();
})), Ji = e((() => {
	N();
})), Yi = e((() => {
	ei();
})), Xi = e((() => {
	k(), V(), et(), N(), pi(), _i(), Te(), zn(), Yi(), ji();
})), Zi = e((() => {
	k(), V(), N(), ji();
})), Qi = e((() => {
	y();
})), $i = e((() => {
	Qi();
})), ea = e((() => {
	y(), V(), q(), $i(), Ci(), k(), at(), Gn();
})), ta = e((() => {
	N(), zn(), V(), Ci(), q(), et(), k(), _i(), ei(), ji(), ea();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function na(e, t) {
	let n = null, r = j;
	var i;
	if (j) {
		n = M;
		for (var a = /* @__PURE__ */ Dn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ On(a);
		if (a === null) Ne(!1);
		else {
			var o = /* @__PURE__ */ On(a);
			a.remove(), Pe(o);
		}
	}
	j || (i = document.head.appendChild(En()));
	try {
		sr(() => t(i), ne | re);
	} finally {
		r && (Ne(!0), Pe(n));
	}
}
var ra = e((() => {
	N(), zn(), V(), k();
})), ia = e((() => {
	V(), zn();
})), aa = e((() => {
	V(), q();
})), oa = e((() => {
	V();
}));
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function sa(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || ca.includes(r[o - 1])) && (s === r.length || ca.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
var ca, la = e((() => {
	y(), ca = [..." 	\n\r\f\xA0\v﻿"];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function ua(e, t, n, r, i, a) {
	var o = e.__className;
	if (j || o !== n || o === void 0) {
		var s = sa(n, r, a);
		(!j || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
var da = e((() => {
	la(), N();
})), fa = e((() => {
	la(), N();
})), pa = e((() => {
	V(), Gn(), Cn(), y(), Ht();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function ma(e) {
	if (j) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					_a(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					_a(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, nt(n), Vn();
	}
}
function ha(e, t) {
	var n = va(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== Ca) || (e.value = t ?? "");
}
function ga(e, t) {
	var n = va(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function _a(e, t, n, r) {
	var i = va(e);
	j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Sa) || i[t] !== (i[t] = n) && (t === "loading" && (e[O] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ya(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function va(e) {
	return e.__attributes ??= {
		[ba]: e.nodeName.includes("-"),
		[xa]: e.namespaceURI === Oe
	};
}
function ya(e) {
	var t = e.getAttribute("is") || e.nodeName, n = wa.get(t);
	if (n) return n;
	wa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && n.push(o);
		i = g(i);
	}
	return n;
}
var ba, xa, Sa, Ca, wa, Ta = e((() => {
	r(), N(), y(), li(), Un(), Me(), k(), at(), ei(), q(), oa(), la(), da(), fa(), ke(), V(), pa(), $t(), ba = Symbol("is custom element"), xa = Symbol("is html"), Sa = de ? "link" : "LINK", Ca = de ? "progress" : "PROGRESS", wa = /* @__PURE__ */ new Map();
})), Ea = e((() => {
	N(), zn(), pi(), oa();
})), Da = e((() => {
	Gn();
})), Oa = e((() => {
	V(), Gn(), Te(), Cn(), at(), N(), q(), et(), Ht();
})), ka = e((() => {
	V(), Gn();
})), Aa = e((() => {
	Gn();
})), ja = e((() => {
	V(), y();
})), Ma = e((() => {
	V(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Na(e, t) {
	return e === t || e?.[E] === t;
}
function Pa(e = {}, t, n, r) {
	var i = P.r, a = K;
	return tr(() => {
		var o, s;
		return ar(() => {
			o = s, s = r?.() || [], U(() => {
				e !== n(...s) && (t(e, ...s), o && Na(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Na(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
var Fa = e((() => {
	k(), et(), V(), q();
})), Ia = e((() => {
	V(), Gn();
})), La = e((() => {
	V(), Gn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function Ra(e) {
	return function(...t) {
		return t[0].preventDefault(), e?.apply(this, t);
	};
}
var za = e((() => {
	y(), V(), li();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ba(e = !1) {
	let t = P, n = t.l.u;
	if (!n) return;
	let r = () => W(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ en(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => H(i);
	}
	n.b.length && $n(() => {
		Va(t, r), a(n.b);
	}), Zn(() => {
		let e = U(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Zn(() => {
		Va(t, r), a(n.a);
	});
}
function Va(e, t) {
	if (e.l.s) for (let t of e.l.s) H(t);
	t();
}
var Ha = e((() => {
	y(), et(), dn(), V(), q();
})), Ua = e((() => {
	xn(), q(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !Ge || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? U(r) : r), s);
	let u;
	if (a) {
		var d = E in e || D in e;
		u = f(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = vt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = l(), u && (i && be(t), u(p)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? l() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (u) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || m) && u(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? en : rn)(() => (_ = !1, h()));
	a && H(v);
	var y = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? H(v) : i && a ? Sn(e) : e;
			return L(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Br && _ || y.f & 16384 ? v.v : H(v);
	});
}
var Wa = e((() => {
	r(), ke(), y(), xn(), dn(), q(), Te(), k(), Cn(), xt(), Ke(), V();
})), Ga = e((() => {
	et(), V(), xt(), $t();
})), Ka = e((() => {
	k(), V(), xn(), Ci(), q(), Ht(), y(), Te(), et(), Ke(), ft(), za();
})), qa = e((() => {
	Ka(), V(), _i(), y(), zn();
})), Ja = e((() => {
	k(), qe(), q();
})), Ya = e((() => {
	Yr(), et(), ti(), ni(), wi(), Ti(), Ei(), Je(), Di(), Oi(), ki(), Mi(), Ni(), Pi(), Fi(), Ki(), qi(), Ji(), Xi(), Zi(), ta(), ra(), ia(), aa(), oa(), Ta(), da(), li(), Un(), Ea(), fa(), ea(), Da(), Oa(), ka(), Aa(), ja(), pa(), Ma(), Fa(), Ia(), La(), N(), za(), Ha(), Ua(), _i(), $t(), Ht(), dn(), V(), xn(), Wa(), xt(), Jt(), xr(), Ci(), q(), Ga(), Qi(), Cn(), qa(), zn(), la(), qe(), y(), Yi(), wn(), Ja(), ct();
})), Xa = e((() => {
	N(), Te();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function Za(e) {
	P === null && fe("onMount"), Ge && P.l !== null ? $a(P).m.push(e) : Zn(() => {
		let t = U(e);
		if (typeof t == "function") return t;
	});
}
function Qa(e) {
	P === null && fe("onDestroy"), Za(() => () => U(e));
}
function $a(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var eo = e((() => {
	q(), y(), Ya(), Te(), Ke(), et(), r(), Ht(), Xa(), Ci(), Xi();
})), to = e((() => {})), no = e((() => {
	to(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), ro = e((() => {
	Ke(), Ue();
}));
//#endregion
//#region frontend/src/lib/app-shell.js
function io() {
	return typeof window > "u" ? "/buyer/home" : window.location.pathname;
}
function ao() {
	let e = io().match(/\/buyer\/products\/(\d+)/);
	return e ? Number(e[1]) : null;
}
function oo() {
	let e = io().match(/\/buyer\/orders\/(\d+)\/confirmation/);
	return e ? Number(e[1]) : null;
}
function so(e = io()) {
	return e.startsWith("/admin") ? "admin" : e.startsWith("/seller") ? "seller" : "buyer";
}
function co(e = io()) {
	return e === "/admin" ? "admin-home" : e === "/admin/sub" ? "admin-moderation" : e === "/admin/audit" ? "admin-audit" : e === "/seller/home" ? "seller-home" : e === "/seller/inventory" ? "seller-inventory" : e === "/seller/sales" ? "seller-sales" : e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : e === "/buyer/orders" ? "orders" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
}
function lo(e) {
	return xo[e] || xo.storefront;
}
function uo(e) {
	return lo(e).title;
}
function fo(e) {
	return e === "admin-moderation" ? "/admin/classic/sub" : e === "admin-audit" ? "/admin/classic/audit" : "/admin/classic";
}
function po(e, t) {
	return e === "admin" ? fo(t) : e === "seller" ? "/seller/classic/home" : "/buyer/classic/home";
}
function mo(e) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(e);
}
function ho(e) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(new Date(e));
}
function go(e) {
	return e === "demo_card" ? "Demo Credit Card" : e;
}
function _o(e, t) {
	return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
}
function vo(e) {
	return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
}
function yo(e) {
	return e.banned ? "Banned" : e.blocked ? "Blocked" : e.approved ? "Approved" : "Pending";
}
function bo(e) {
	return e ? e.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "";
}
var xo, So, Co = e((() => {
	xo = {
		"admin-home": {
			title: "Admin Home",
			kicker: "Administration",
			heading: "Administration home"
		},
		"admin-moderation": {
			title: "Admin Moderation",
			kicker: "Moderation center",
			heading: "Admin moderation"
		},
		"admin-audit": {
			title: "Admin Audit Log",
			kicker: "Activity records",
			heading: "Audit log"
		},
		"seller-home": {
			title: "Seller Home",
			kicker: "Seller workspace",
			heading: "Seller control center"
		},
		"seller-inventory": {
			title: "Seller Inventory",
			kicker: "Inventory management",
			heading: "Your listings"
		},
		"seller-sales": {
			title: "Seller Sales",
			kicker: "Sales records",
			heading: "Sales dashboard"
		},
		cart: {
			title: "Buyer Cart",
			kicker: "Cart summary",
			heading: "Your cart"
		},
		checkout: {
			title: "Checkout Review",
			kicker: "Checkout review",
			heading: "Review your order"
		},
		compare: {
			title: "Compare Products",
			kicker: "Side-by-side shortlist",
			heading: "Compare products"
		},
		confirmation: {
			title: "Order Confirmation",
			kicker: "Purchase complete",
			heading: "Order confirmation"
		},
		orders: {
			title: "Order History",
			kicker: "Buyer records",
			heading: "Order history"
		},
		product: {
			title: "Product Detail",
			kicker: "Product spotlight",
			heading: "Hardware details"
		},
		storefront: {
			title: "Buyer Storefront",
			kicker: "Live inventory",
			heading: "Available hardware"
		}
	}, So = {
		admin: [
			{
				href: "/admin",
				label: "Admin Home"
			},
			{
				href: "/admin/sub",
				label: "Moderation"
			},
			{
				href: "/admin/audit",
				label: "Audit"
			}
		],
		seller: [
			{
				href: "/seller/home",
				label: "Seller Home"
			},
			{
				href: "/seller/inventory",
				label: "Inventory"
			},
			{
				href: "/seller/sales",
				label: "Sales"
			}
		],
		buyer: [
			{
				href: "/buyer/home",
				label: "Storefront"
			},
			{
				href: "/buyer/cart",
				label: "Cart"
			},
			{
				href: "/buyer/orders",
				label: "Orders"
			},
			{
				href: "/buyer/compare",
				label: "Compare"
			}
		]
	};
}));
//#endregion
//#region frontend/src/components/AppHero.svelte
function wo(e, t) {
	Ze(t, !1);
	let n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I(), i = $(t, "appMode", 8), a = $(t, "currentPage", 8), o = $(t, "onLogout", 8), s = {
		admin: "Admin Workspace",
		seller: "Seller Workspace",
		buyer: "Buyer Workspace"
	};
	nr(() => W(i()), () => {
		L(n, So[i()] || So.buyer);
	}), nr(() => (W(i()), W(a())), () => {
		L(r, po(i(), a()));
	}), rr(), Ba();
	var c = Eo(), l = R(c), u = R(l), d = R(u, !0);
	A(u), Ie(2), A(l);
	var f = z(l, 2), p = R(f);
	zi(p, 1, () => H(n), Ii, (e, t) => {
		var n = To(), r = R(n, !0);
		A(n), B(() => {
			_a(n, "href", (H(t), U(() => H(t).href))), Z(r, (H(t), U(() => H(t).label)));
		}), X(e, n);
	});
	var m = z(p, 2), h = z(m, 2);
	A(f), A(c), B(() => {
		Z(d, (W(i()), U(() => s[i()] || s.buyer))), _a(m, "href", H(r));
	}), J("click", h, function(...e) {
		o()?.apply(this, e);
	}), X(e, c), Qe();
}
var To, Eo, Do = e((() => {
	no(), ro(), Ya(), Co(), To = /* @__PURE__ */ Y("<a class=\"action-link\"> </a>"), Eo = /* @__PURE__ */ Y("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function Oo(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = ko(), o = R(a), s = R(o), c = R(s, !0);
	A(s);
	var l = z(s, 2), u = R(l, !0);
	A(l), A(o);
	var d = z(o, 2);
	A(a), B(() => {
		Z(c, n()), Z(u, r());
	}), J("click", d, function(...e) {
		i()?.apply(this, e);
	}), X(e, a);
}
var ko, Ao = e((() => {
	no(), ro(), Ya(), ko = /* @__PURE__ */ Y("<div class=\"catalog-header\"><div><p class=\"section-kicker\"> </p> <h2> </h2></div> <button class=\"refresh-button\">Refresh</button></div>");
}));
//#endregion
//#region frontend/src/components/AdminAuditView.svelte
function jo(e, t) {
	Ze(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Ba();
	var a = gi(), o = kn(a), s = (e) => {
		X(e, Mo());
	}, c = (e) => {
		var t = Po(), a = z(R(t), 2);
		zi(a, 5, n, Ii, (e, t) => {
			var n = No(), a = R(n), o = R(a, !0);
			A(a);
			var s = z(a, 2), c = R(s, !0);
			A(s);
			var l = z(s, 2), u = R(l, !0);
			A(l);
			var d = z(l, 2), f = R(d, !0);
			A(d), A(n), B((e, n) => {
				Z(o, e), Z(c, (H(t), U(() => H(t).username))), Z(u, n), Z(f, (H(t), U(() => H(t).details)));
			}, [() => (W(i()), H(t), U(() => i()(H(t).createdAt))), () => (W(r()), H(t), U(() => r()(H(t).actionType)))]), X(e, n);
		}), A(a), A(t), X(e, t);
	};
	Q(o, (e) => {
		W(n()), U(() => n().length === 0) ? e(s) : e(c, -1);
	}), X(e, a), Qe();
}
var Mo, No, Po, Fo = e((() => {
	no(), ro(), Ya(), Mo = /* @__PURE__ */ Y("<div class=\"state-card\">No audit log entries yet.</div>"), No = /* @__PURE__ */ Y("<article class=\"admin-audit-row\"><p class=\"seller admin-audit-when\"> </p> <p class=\"admin-audit-user\"> </p> <p class=\"admin-audit-action\"> </p> <p class=\"admin-audit-details\"> </p></article>"), Po = /* @__PURE__ */ Y("<div class=\"panel admin-box\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent actions</p> <h3>Recorded system activity</h3></div></div> <div class=\"admin-audit-list\"></div></div>");
}));
//#endregion
//#region frontend/src/components/AdminHomeView.svelte
function Io(e) {
	X(e, Lo());
}
var Lo, Ro = e((() => {
	no(), ro(), Ya(), Lo = /* @__PURE__ */ Y("<div class=\"admin-columns admin-columns--two\"><article class=\"admin-region admin-region--products\"><p class=\"section-kicker\">Moderation</p> <h3>User and listing review</h3> <p class=\"detail-description\">Review pending registrations, approve or reject seller listings, and handle active account status changes.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/sub\">User management</a></div></article> <article class=\"admin-region\"><p class=\"section-kicker\">Audit</p> <h3>Recent platform activity</h3> <p class=\"detail-description\">Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/audit\">Open audit log</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/AdminModerationView.svelte
function zo(e, t) {
	Ze(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Ba();
	var x = Qo(), S = R(x), C = R(S), w = z(R(C), 2), T = R(w, !0);
	A(w), A(C);
	var ee = z(C, 2), te = (e) => {
		X(e, Bo());
	}, ne = (e) => {
		var t = Ho(), r = R(t), i = z(R(r));
		zi(i, 5, n, Ii, (e, t) => {
			var n = Vo(), r = R(n), i = R(r, !0);
			A(r);
			var a = z(r), o = R(a, !0);
			A(a);
			var s = z(a), u = R(s, !0);
			A(s);
			var d = z(s), f = R(d, !0);
			A(d);
			var p = z(d), m = R(p), h = R(m), g = z(h, 2);
			A(m), A(p), A(n), B((e, n) => {
				Z(i, (H(t), U(() => H(t).username))), Z(o, e), Z(u, (H(t), U(() => H(t).email))), Z(f, n);
			}, [() => (W(_()), H(t), U(() => _()(H(t).role))), () => (W(y()), H(t), U(() => y()(H(t).createdAt)))]), J("click", h, () => c()(H(t).id)), J("click", g, () => l()(H(t).id)), X(e, n);
		}), A(i), A(r), A(t), X(e, t);
	};
	Q(ee, (e) => {
		W(n()), U(() => n().length === 0) ? e(te) : e(ne, -1);
	}), A(S);
	var re = z(S, 2), ie = R(re), ae = z(R(ie), 2), oe = R(ae, !0);
	A(ae), A(ie);
	var se = z(ie, 2), ce = (e) => {
		X(e, Uo());
	}, le = (e) => {
		var t = Jo(), n = R(t), i = z(R(n));
		zi(i, 5, r, Ii, (e, t) => {
			var n = qo(), r = R(n), i = R(r, !0);
			A(r);
			var a = z(r), o = R(a, !0);
			A(a);
			var s = z(a), c = R(s, !0);
			A(s);
			var l = z(s), u = R(l, !0);
			A(l);
			var m = z(l), h = R(m, !0);
			A(m);
			var g = z(m), _ = R(g), y = (e) => {
				X(e, hi("Pending approval"));
			}, b = (e) => {
				X(e, hi("Rejected"));
			}, x = (e) => {
				X(e, hi("Listed"));
			}, S = (e) => {
				X(e, hi("Delisted"));
			};
			Q(_, (e) => {
				H(t), U(() => H(t).listingStatus === "pending") ? e(y) : (H(t), U(() => H(t).listingStatus === "rejected") ? e(b, 1) : (H(t), U(() => H(t).isListed) ? e(x, 2) : e(S, -1)));
			}), A(g);
			var C = z(g), w = R(C), T = (e) => {
				var n = Wo(), r = R(n), i = z(r, 2);
				A(n), J("click", r, () => d()(H(t).id)), J("click", i, () => f()(H(t).id)), X(e, n);
			}, ee = (e) => {
				var n = Go();
				J("click", n, () => p()(H(t).id)), X(e, n);
			}, te = (e) => {
				X(e, Ko());
			};
			Q(w, (e) => {
				H(t), U(() => H(t).listingStatus === "pending") ? e(T) : (H(t), U(() => H(t).isListed) ? e(ee, 1) : e(te, -1));
			}), A(C), A(n), B((e) => {
				Z(i, (H(t), U(() => H(t).name))), Z(o, (H(t), U(() => H(t).seller?.username || "Unknown seller"))), Z(c, (H(t), U(() => H(t).description || "No description provided."))), Z(u, e), Z(h, (H(t), U(() => H(t).stock)));
			}, [() => (W(v()), H(t), U(() => v()(H(t).price)))]), X(e, n);
		}), A(i), A(n), A(t), X(e, t);
	};
	Q(se, (e) => {
		W(r()), U(() => r().length === 0) ? e(ce) : e(le, -1);
	}), A(re);
	var E = z(re, 2), D = R(E), O = z(R(D), 2), ue = R(O);
	A(O), A(D);
	var de = z(D, 2), k = R(de);
	ma(k);
	var fe = z(k, 4);
	A(de);
	var pe = z(de, 2), me = (e) => {
		X(e, Yo());
	}, he = (e) => {
		var t = Zo(), n = R(t), r = z(R(n));
		zi(r, 5, i, Ii, (e, t) => {
			var n = Xo(), r = R(n), i = R(r, !0);
			A(r);
			var a = z(r), o = R(a, !0);
			A(a);
			var s = z(a), d = R(s, !0);
			A(s);
			var f = z(s), p = R(f, !0);
			A(f);
			var m = z(f), h = R(m), g = R(h), v = z(g, 2), x = z(v, 2);
			A(h), A(m), A(n), B((e, n, r) => {
				Z(i, (H(t), U(() => H(t).username))), Z(o, e), Z(d, n), Z(p, r);
			}, [
				() => (W(_()), H(t), U(() => _()(H(t).role))),
				() => (W(b()), H(t), U(() => b()(H(t)))),
				() => (W(y()), H(t), U(() => y()(H(t).createdAt)))
			]), J("click", g, () => c()(H(t).id)), J("click", v, () => l()(H(t).id)), J("click", x, () => u()(H(t).id)), X(e, n);
		}), A(r), A(n), A(t), X(e, t);
	};
	Q(pe, (e) => {
		W(i()), U(() => i().length === 0) ? e(me) : e(he, -1);
	});
	var ge = z(pe, 2), _e = R(ge), ve = z(_e, 2), ye = R(ve);
	A(ve);
	var be = z(ve, 2);
	A(ge), A(E), A(x), B(() => {
		Z(T, (W(n()), U(() => n().length))), Z(oe, (W(r()), U(() => r().length))), Z(ue, `${(W(a()), U(() => a().totalPages)) ?? ""} page${(W(a()), U(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), ha(k, o()), _e.disabled = (W(a()), U(() => !a().hasPreviousPage)), Z(ye, `Page ${(W(a()), U(() => a().page)) ?? ""} of ${(W(a()), U(() => a().totalPages)) ?? ""}`), be.disabled = (W(a()), U(() => !a().hasNextPage));
	}), J("input", k, function(...e) {
		s()?.apply(this, e);
	}), J("click", fe, function(...e) {
		h()?.apply(this, e);
	}), J("submit", de, Ra(function(...e) {
		m()?.apply(this, e);
	})), J("click", _e, () => g()(a().page - 1)), J("click", be, () => g()(a().page + 1)), X(e, x), Qe();
}
var Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o = e((() => {
	no(), ro(), Ya(), Bo = /* @__PURE__ */ Y("<div class=\"state-card\">No pending users right now.</div>"), Vo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), Ho = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Uo = /* @__PURE__ */ Y("<div class=\"state-card\">No seller listings are available for review.</div>"), Wo = /* @__PURE__ */ Y("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), Go = /* @__PURE__ */ Y("<button class=\"admin-button admin-button-danger\">Delist</button>"), Ko = /* @__PURE__ */ Y("<span class=\"seller\">No further action</span>"), qo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), Jo = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), Yo = /* @__PURE__ */ Y("<div class=\"state-card\">No users matched that search.</div>"), Xo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), Zo = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Qo = /* @__PURE__ */ Y("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function es(e, t) {
	Ze(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Ba();
	var a = is(), o = R(a), s = R(o), c = (e) => {
		X(e, ts());
	}, l = (e) => {
		var t = rs();
		zi(t, 5, () => (W(n()), U(() => n().items)), Ii, (e, t) => {
			var n = ns(), a = R(n), o = R(a), s = R(o, !0);
			A(o);
			var c = z(o, 2), l = R(c, !0);
			A(c);
			var u = z(c, 2), d = R(u);
			A(u), A(a);
			var f = z(a, 2), p = R(f), m = R(p, !0);
			A(p);
			var h = z(p, 2);
			A(f), A(n), B((e, n) => {
				Z(s, (H(t), U(() => H(t).product.seller.username))), Z(l, (H(t), U(() => H(t).product.name))), Z(d, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(m, n);
			}, [() => (W(i()), H(t), U(() => i()(H(t).product.price))), () => (W(i()), H(t), U(() => i()(H(t).product.price * H(t).quantity)))]), J("click", h, () => r()(H(t).id)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(s, (e) => {
		W(n()), U(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), A(o);
	var u = z(o, 2), d = z(R(u), 2), f = R(d, !0);
	A(d);
	var p = z(d, 4), m = R(p, !0);
	A(p);
	var h = z(p, 4), g = R(h, !0);
	A(h);
	var _ = z(h, 4), v = R(_, !0);
	A(_), Ie(2), A(u), A(a), B((e, t, n, r) => {
		Z(f, e), Z(m, t), Z(g, n), Z(v, r);
	}, [
		() => (W(i()), W(n()), U(() => i()(n().subtotal))),
		() => (W(i()), W(n()), U(() => i()(n().serviceFee || 0))),
		() => (W(i()), W(n()), U(() => i()(n().tax))),
		() => (W(i()), W(n()), U(() => i()(n().total)))
	]), X(e, a), Qe();
}
var ts, ns, rs, is, as = e((() => {
	no(), ro(), Ya(), ts = /* @__PURE__ */ Y("<div class=\"state-card\">Your cart is empty.</div>"), ns = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), rs = /* @__PURE__ */ Y("<div class=\"list-grid\"></div>"), is = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function os(e, t) {
	Ze(t, !1);
	let n = $(t, "cart", 8), r = $(t, "placeOrder", 8), i = $(t, "formatCurrency", 8), a = $(t, "shippingAddress", 8), o = $(t, "onShippingInput", 8);
	Ba();
	var s = us(), c = R(s), l = R(c), u = (e) => {
		X(e, ss());
	}, d = (e) => {
		var t = ls(), r = R(t), s = z(R(r), 2), c = z(R(s), 2);
		ma(c);
		var l = z(c, 4);
		ma(l);
		var u = z(l, 4);
		ma(u);
		var d = z(u, 4);
		ma(d);
		var f = z(d, 4);
		ma(f);
		var p = z(f, 4);
		ma(p), Ie(2), A(s), A(r);
		var m = z(r, 2);
		zi(m, 5, () => (W(n()), U(() => n().items)), Ii, (e, t) => {
			var n = cs(), r = R(n), a = R(r), o = R(a, !0);
			A(a);
			var s = z(a, 2), c = R(s, !0);
			A(s);
			var l = z(s, 2), u = R(l);
			A(l), A(r);
			var d = z(r, 2), f = R(d), p = R(f, !0);
			A(f), A(d), A(n), B((e, n) => {
				Z(o, (H(t), U(() => H(t).product.seller.username))), Z(c, (H(t), U(() => H(t).product.name))), Z(u, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(p, n);
			}, [() => (W(i()), H(t), U(() => i()(H(t).product.price))), () => (W(i()), H(t), U(() => i()(H(t).product.price * H(t).quantity)))]), X(e, n);
		}), A(m), A(t), B(() => {
			ha(c, (W(a()), U(() => a().name))), ha(l, (W(a()), U(() => a().line1))), ha(u, (W(a()), U(() => a().line2))), ha(d, (W(a()), U(() => a().city))), ha(f, (W(a()), U(() => a().state))), ha(p, (W(a()), U(() => a().postalCode)));
		}), J("input", c, (e) => o()("name", e)), J("input", l, (e) => o()("line1", e)), J("input", u, (e) => o()("line2", e)), J("input", d, (e) => o()("city", e)), J("input", f, (e) => o()("state", e)), J("input", p, (e) => o()("postalCode", e)), X(e, t);
	};
	Q(l, (e) => {
		W(n()), U(() => n().items.length === 0) ? e(u) : e(d, -1);
	}), A(c);
	var f = z(c, 2), p = z(R(f), 2), m = R(p, !0);
	A(p);
	var h = z(p, 4), g = R(h, !0);
	A(h);
	var _ = z(h, 4), v = R(_, !0);
	A(_);
	var y = z(_, 4), b = R(y, !0);
	A(y);
	var x = z(y, 4), S = R(x);
	Ie(2), A(x), A(f), A(s), B((e, t, r, i) => {
		Z(m, e), Z(g, t), Z(v, r), Z(b, i), S.disabled = (W(n()), U(() => n().items.length === 0));
	}, [
		() => (W(i()), W(n()), U(() => i()(n().subtotal))),
		() => (W(i()), W(n()), U(() => i()(n().serviceFee || 0))),
		() => (W(i()), W(n()), U(() => i()(n().tax))),
		() => (W(i()), W(n()), U(() => i()(n().total)))
	]), J("click", S, function(...e) {
		r()?.apply(this, e);
	}), X(e, s), Qe();
}
var ss, cs, ls, us, ds = e((() => {
	no(), ro(), Ya(), ss = /* @__PURE__ */ Y("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), cs = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ls = /* @__PURE__ */ Y("<div class=\"checkout-stack\"><div class=\"shipping-panel\"><p class=\"section-kicker\">Shipping address</p> <div class=\"stack-form\"><label for=\"ship-name\">Full name</label> <input id=\"ship-name\" type=\"text\" required=\"\"/> <label for=\"ship-line1\">Address line 1</label> <input id=\"ship-line1\" type=\"text\" required=\"\"/> <label for=\"ship-line2\">Address line 2</label> <input id=\"ship-line2\" type=\"text\"/> <label for=\"ship-city\">City</label> <input id=\"ship-city\" type=\"text\" required=\"\"/> <label for=\"ship-state\">State / region</label> <input id=\"ship-state\" type=\"text\" required=\"\"/> <label for=\"ship-postal\">Postal code</label> <input id=\"ship-postal\" type=\"text\" required=\"\"/> <p class=\"field-hint\">Shipping currently supports United States addresses only.</p></div></div> <div class=\"list-grid\"></div></div>"), us = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function fs(e, t) {
	Ze(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Ba();
	var s = gi(), c = kn(s), l = (e) => {
		X(e, ps());
	}, u = (e) => {
		var t = hs();
		zi(t, 5, n, Ii, (e, t) => {
			var n = ms(), s = R(n), c = z(R(s), 2), l = R(c, !0);
			A(c), A(s);
			var u = z(s, 2), d = R(u, !0);
			A(u);
			var f = z(u, 2), p = R(f, !0);
			A(f);
			var m = z(f, 2), h = R(m), g = R(h);
			A(h);
			var _ = z(h, 2), v = R(_), y = z(v, 2);
			A(_), A(m), A(n), B((e, n) => {
				Z(l, e), Z(d, (H(t), U(() => H(t).name))), Z(p, n), _a(g, "href", (H(t), U(() => `/buyer/products/${H(t).id}`)));
			}, [() => (W(a()), H(t), U(() => a()(H(t).price))), () => (W(o()), H(t), U(() => o()(H(t).description || "", 160)))]), J("click", v, () => r()(H(t).id)), J("click", y, () => i()(H(t).id)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(c, (e) => {
		W(n()), U(() => n().length === 0) ? e(l) : e(u, -1);
	}), X(e, s), Qe();
}
var ps, ms, hs, gs = e((() => {
	no(), ro(), Ya(), ps = /* @__PURE__ */ Y("<div class=\"state-card\">No products marked for comparison.</div>"), ms = /* @__PURE__ */ Y("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), hs = /* @__PURE__ */ Y("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function _s(e, t) {
	Ze(t, !1);
	let n = $(t, "order", 8), r = $(t, "formatCurrency", 8), i = $(t, "formatDate", 8), a = $(t, "formatPaymentMethod", 8);
	Ba();
	var o = Cs(), s = R(o), c = R(s), l = R(c), u = (e) => {
		var t = ys(), r = R(t), a = R(r), o = z(R(a), 2), s = R(o, !0);
		A(o);
		var c = z(o, 2), l = R(c);
		A(c), A(a);
		var u = z(a, 2), d = z(R(u), 2), f = R(d, !0);
		A(d), A(u), A(r);
		var p = z(r, 2);
		zi(p, 5, () => (W(n()), U(() => n().tracking.events)), Ii, (e, t) => {
			var r = vs();
			let a;
			var o = R(r), s = R(o, !0);
			A(o);
			var c = z(o, 2), l = R(c, !0);
			A(c);
			var u = z(c, 2), d = R(u, !0);
			A(u), A(r), B((e) => {
				a = ua(r, 1, "tracking-event", null, a, { active: H(t).status === n().tracking.status }), Z(s, e), Z(l, (H(t), U(() => H(t).label))), Z(d, (H(t), U(() => H(t).description)));
			}, [() => (W(i()), H(t), U(() => i()(H(t).occurredAt)))]), X(e, r);
		}), A(p), A(t), B((e) => {
			Z(s, (W(n()), U(() => n().tracking.statusLabel))), Z(l, `${(W(n()), U(() => n().tracking.shippingMethod)) ?? ""} - ${(W(n()), U(() => n().tracking.trackingNumber)) ?? ""}`), Z(f, e);
		}, [() => (W(i()), W(n()), U(() => i()(n().tracking.estimatedDeliveryAt)))]), X(e, t);
	};
	Q(l, (e) => {
		W(n()), U(() => n().tracking) && e(u);
	}), zi(z(l, 2), 1, () => (W(n()), U(() => n().items)), Ii, (e, t) => {
		var n = bs(), i = R(n), a = R(i), o = R(a);
		A(a);
		var s = z(a, 2), c = R(s, !0);
		A(s);
		var l = z(s, 2), u = R(l);
		A(l), A(i);
		var d = z(i, 2), f = R(d), p = R(f, !0);
		A(f), A(d), A(n), B((e, n) => {
			Z(o, `Seller ID ${(H(t), U(() => H(t).sellerId)) ?? ""}`), Z(c, (H(t), U(() => H(t).productName))), Z(u, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(p, n);
		}, [() => (W(r()), H(t), U(() => r()(H(t).unitPrice))), () => (W(r()), H(t), U(() => r()(H(t).lineTotal)))]), X(e, n);
	}), A(c), A(s);
	var d = z(s, 2), f = z(R(d), 2), p = R(f);
	A(f);
	var m = z(f, 4), h = R(m, !0);
	A(m);
	var g = z(m, 2), _ = (e) => {
		var t = xs(), r = z(kn(t), 2), i = R(r, !0);
		A(r);
		var a = z(r, 4), o = R(a, !0);
		A(a), B(() => {
			Z(i, (W(n()), U(() => n().tracking.trackingNumber))), Z(o, (W(n()), U(() => n().tracking.shippingMethod)));
		}), X(e, t);
	};
	Q(g, (e) => {
		W(n()), U(() => n().tracking) && e(_);
	});
	var v = z(g, 4), y = R(v, !0);
	A(v);
	var b = z(v, 4), x = R(b, !0);
	A(b);
	var S = z(b, 4), C = R(S, !0);
	A(S);
	var w = z(S, 2), T = R(w, !0);
	A(w);
	var ee = z(w, 2), te = (e) => {
		var t = Ss(), r = R(t, !0);
		A(t), B(() => Z(r, (W(n()), U(() => n().shipToLine2)))), X(e, t);
	};
	Q(ee, (e) => {
		W(n()), U(() => n().shipToLine2) && e(te);
	});
	var ne = z(ee, 2), re = R(ne);
	A(ne);
	var ie = z(ne, 2), ae = R(ie, !0);
	A(ie);
	var oe = z(ie, 4), se = R(oe, !0);
	A(oe);
	var ce = z(oe, 4), le = R(ce, !0);
	A(ce);
	var E = z(ce, 4), D = R(E, !0);
	A(E);
	var O = z(E, 4), ue = R(O, !0);
	A(O), Ie(2), A(d), A(o), B((e, t, r, i, a, o) => {
		Z(p, `#${(W(n()), U(() => n().id)) ?? ""}`), Z(h, (W(n()), U(() => n().tracking?.statusLabel || n().status))), Z(y, e), Z(x, t), Z(C, (W(n()), U(() => n().shipToName))), Z(T, (W(n()), U(() => n().shipToLine1))), Z(re, `${(W(n()), U(() => n().shipToCity)) ?? ""}, ${(W(n()), U(() => n().shipToState)) ?? ""} ${(W(n()), U(() => n().shipToPostalCode)) ?? ""}`), Z(ae, (W(n()), U(() => n().shipToCountry))), Z(se, r), Z(le, i), Z(D, a), Z(ue, o);
	}, [
		() => (W(a()), W(n()), U(() => a()(n().paymentMethod))),
		() => (W(i()), W(n()), U(() => i()(n().createdAt))),
		() => (W(r()), W(n()), U(() => r()(n().subtotal))),
		() => (W(r()), W(n()), U(() => r()(n().serviceFeeAmount || 0))),
		() => (W(r()), W(n()), U(() => r()(n().taxAmount))),
		() => (W(r()), W(n()), U(() => r()(n().total)))
	]), X(e, o), Qe();
}
var vs, ys, bs, xs, Ss, Cs, ws = e((() => {
	no(), ro(), Ya(), vs = /* @__PURE__ */ Y("<article><p class=\"seller\"> </p> <h4> </h4> <p> </p></article>"), ys = /* @__PURE__ */ Y("<article class=\"tracking-card\"><div class=\"tracking-header\"><div><p class=\"section-kicker\">Mock tracking</p> <h3> </h3> <p class=\"detail-description\"> </p></div> <div class=\"tracking-eta\"><p>Estimated delivery</p> <strong> </strong></div></div> <div class=\"tracking-timeline\"></div></article>"), bs = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), xs = /* @__PURE__ */ Y("<p>Tracking number</p> <strong> </strong> <p>Shipping method</p> <strong> </strong>", 1), Ss = /* @__PURE__ */ Y("<strong> </strong>"), Cs = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"><!> <!></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <!> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Ship to</p> <strong> </strong> <strong> </strong> <!> <strong> </strong> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a> <a class=\"checkout-link secondary-link\" href=\"/buyer/orders\">View order history</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/OrderHistoryView.svelte
function Ts(e, t) {
	Ze(t, !1);
	let n = $(t, "orders", 24, () => []), r = $(t, "pageInfo", 8), i = $(t, "goToOrderHistoryPage", 8), a = $(t, "formatCurrency", 8), o = $(t, "formatDate", 8), s = $(t, "formatPaymentMethod", 8);
	Ba();
	var c = gi(), l = kn(c), u = (e) => {
		X(e, Es());
	}, d = (e) => {
		var t = ks(), c = kn(t);
		zi(c, 5, n, Ii, (e, t) => {
			var n = Os(), r = R(n), i = R(r), c = R(i);
			A(i);
			var l = z(i, 2), u = R(l, !0);
			A(l);
			var d = z(l, 2), f = R(d);
			A(d);
			var p = z(d, 2), m = R(p);
			A(p);
			var h = z(p, 2), g = (e) => {
				var n = Ds(), r = R(n);
				A(n), B((e) => Z(r, `${(H(t), U(() => H(t).tracking.shippingMethod)) ?? ""} - ETA ${e ?? ""}`), [() => (W(o()), H(t), U(() => o()(H(t).tracking.estimatedDeliveryAt)))]), X(e, n);
			};
			Q(h, (e) => {
				H(t), U(() => H(t).tracking) && e(g);
			}), A(r);
			var _ = z(r, 2), v = R(_), y = R(v, !0);
			A(v);
			var b = z(v, 2);
			A(_), A(n), B((e, n, r) => {
				Z(c, `Order #${(H(t), U(() => H(t).id)) ?? ""}`), Z(u, e), Z(f, `${n ?? ""} - ${r ?? ""} - ${(H(t), U(() => H(t).items.length)) ?? ""} item${(H(t), U(() => H(t).items.length === 1 ? "" : "s")) ?? ""}`), Z(m, `Ship to ${(H(t), U(() => H(t).shipToCity)) ?? ""}, ${(H(t), U(() => H(t).shipToState)) ?? ""} ${(H(t), U(() => H(t).shipToPostalCode)) ?? ""}`), Z(y, (H(t), U(() => H(t).tracking?.statusLabel || H(t).status))), _a(b, "href", (H(t), U(() => `/buyer/orders/${H(t).id}/confirmation`)));
			}, [
				() => (W(a()), H(t), U(() => a()(H(t).total))),
				() => (W(o()), H(t), U(() => o()(H(t).createdAt))),
				() => (W(s()), H(t), U(() => s()(H(t).paymentMethod)))
			]), X(e, n);
		}), A(c);
		var l = z(c, 2), u = R(l), d = z(u, 2), f = R(d);
		A(d);
		var p = z(d, 2);
		A(l), B(() => {
			u.disabled = (W(r()), U(() => !r().hasPreviousPage)), Z(f, `Page ${(W(r()), U(() => r().page)) ?? ""} of ${(W(r()), U(() => r().totalPages)) ?? ""}`), p.disabled = (W(r()), U(() => !r().hasNextPage));
		}), J("click", u, () => i()(r().page - 1)), J("click", p, () => i()(r().page + 1)), X(e, t);
	};
	Q(l, (e) => {
		W(n()), U(() => n().length === 0) ? e(u) : e(d, -1);
	}), X(e, c), Qe();
}
var Es, Ds, Os, ks, As = e((() => {
	no(), ro(), Ya(), Es = /* @__PURE__ */ Y("<div class=\"state-card\">You have not placed any orders yet.</div>"), Ds = /* @__PURE__ */ Y("<p class=\"description\"> </p>"), Os = /* @__PURE__ */ Y("<article class=\"line-card order-history-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p> <!></div> <div class=\"line-actions\"><p class=\"price\"> </p> <a class=\"checkout-link secondary-link\">View details</a></div></article>"), ks = /* @__PURE__ */ Y("<div class=\"list-grid\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1);
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function js(e, t) {
	Ze(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ba();
	var o = Ms(), s = R(o), c = z(s, 2), l = R(c), u = R(l, !0);
	A(l);
	var d = z(l, 2), f = R(d);
	A(d), A(c);
	var p = z(c, 2), m = R(p), h = R(m), g = R(h, !0);
	A(h);
	var _ = z(h, 2), v = R(_, !0);
	A(_), A(m);
	var y = z(m, 2), b = R(y), x = z(b, 2);
	A(y), A(p);
	var S = z(p, 2), C = R(S, !0);
	A(S), Ie(2), A(o), B((e) => {
		_a(s, "src", (W(n()), U(() => n().imageUrl || "/images/product-placeholder.png"))), _a(s, "alt", (W(n()), U(() => n().name))), Z(u, (W(n()), U(() => n().seller.username))), Z(f, `${(W(n()), U(() => n().stock)) ?? ""} in stock`), Z(g, (W(n()), U(() => n().name))), Z(v, e), Z(C, (W(n()), U(() => n().description || "No description provided.")));
	}, [() => (W(a()), W(n()), U(() => a()(n().price)))]), J("click", b, () => r()(n().id)), J("click", x, () => i()(n().id)), X(e, o), Qe();
}
var Ms, Ns = e((() => {
	no(), ro(), Ya(), Ms = /* @__PURE__ */ Y("<article class=\"detail-card\"><img class=\"product-detail-image\"/> <div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function Ps(e, t) {
	Ze(t, !1);
	let n = $(t, "sellerWallet", 8), r = $(t, "sellerBankAccount", 8), i = $(t, "sellerPayouts", 24, () => []), a = $(t, "sellerBankForm", 8), o = $(t, "sellerPayoutForm", 8), s = $(t, "sellerWebhook", 8), c = $(t, "onSellerBankInput", 8), l = $(t, "onSellerPayoutInput", 8), u = $(t, "onSellerWebhookInput", 8), d = $(t, "saveSellerBankAccount", 8), f = $(t, "createSellerPayout", 8), p = $(t, "saveSellerWebhook", 8), m = $(t, "formatCurrency", 8), h = $(t, "formatDate", 8);
	Ba();
	var g = zs(), _ = z(R(g), 2), v = z(R(_), 4), y = R(v), b = z(R(y), 2), x = R(b, !0);
	A(b), A(y);
	var S = z(y, 2), C = z(R(S), 2), w = R(C, !0);
	A(C), A(S), A(v);
	var T = z(v, 2), ee = z(R(T), 2);
	ma(ee);
	var te = z(ee, 4);
	ma(te);
	var ne = z(te, 4);
	ma(ne);
	var re = z(ne, 4);
	ma(re), Ie(2), A(T);
	var ie = z(T, 2), ae = (e) => {
		var t = Fs(), n = R(t);
		A(t), B(() => Z(n, `Payouts route to ${(W(r()), U(() => r().bankName)) ?? ""} account ending ${(W(r()), U(() => r().accountLast4)) ?? ""}.`)), X(e, t);
	};
	Q(ie, (e) => {
		r() && e(ae);
	});
	var oe = z(ie, 2), se = z(R(oe), 2);
	ma(se);
	var ce = z(se, 4);
	ma(ce), Ie(2), A(oe);
	var le = z(oe, 2), E = (e) => {
		var t = Ls();
		zi(t, 5, i, Ii, (e, t) => {
			var n = Is(), r = R(n), i = R(r), a = R(i, !0);
			A(i);
			var o = z(i, 2), s = R(o, !0);
			A(o), A(r);
			var c = z(r, 2), l = R(c, !0);
			A(c), A(n), B((e, n) => {
				Z(a, e), Z(s, (H(t), U(() => H(t).note || "Mock payout"))), Z(l, n);
			}, [() => (W(h()), H(t), U(() => h()(H(t).createdAt))), () => (W(m()), H(t), U(() => m()(H(t).amount)))]), X(e, n);
		}), A(t), X(e, t);
	};
	Q(le, (e) => {
		W(i()), U(() => i().length > 0) && e(E);
	}), A(_);
	var D = z(_, 2), O = z(R(D), 6), ue = z(R(O), 2);
	ma(ue);
	var de = z(ue, 2), k = R(de);
	ma(k), Ie(), A(de), Ie(2), A(O);
	var fe = z(O, 2), pe = (e) => {
		var t = Rs(), n = z(R(t), 2), r = R(n, !0);
		A(n);
		var i = z(n, 4), a = R(i);
		A(i), A(t), B(() => {
			Z(r, (W(s()), U(() => s().signingSecret))), Z(a, `WEBHOOK_SECRET='${(W(s()), U(() => s().signingSecret)) ?? ""}' PORT=4010 node scripts/demo-webhook-receiver.js`);
		}), X(e, t);
	};
	Q(fe, (e) => {
		W(s()), U(() => s().signingSecret) && e(pe);
	}), A(D), A(g), B((e, t) => {
		Z(x, e), Z(w, t), ha(ee, (W(a()), U(() => a().accountHolder))), ha(te, (W(a()), U(() => a().bankName))), ha(ne, (W(a()), U(() => a().routingNumber))), ha(re, (W(a()), U(() => a().accountNumber))), ha(se, (W(o()), U(() => o().amount))), ha(ce, (W(o()), U(() => o().note))), ha(ue, (W(s()), U(() => s().endpointUrl))), ga(k, (W(s()), U(() => s().isActive)));
	}, [() => (W(m()), W(n()), U(() => m()(n().balance))), () => (W(m()), W(n()), U(() => m()(n().totalEarned)))]), J("input", ee, (e) => c()("accountHolder", e)), J("input", te, (e) => c()("bankName", e)), J("input", ne, (e) => c()("routingNumber", e)), J("input", re, (e) => c()("accountNumber", e)), J("submit", T, Ra(function(...e) {
		d()?.apply(this, e);
	})), J("input", se, (e) => l()("amount", e)), J("input", ce, (e) => l()("note", e)), J("submit", oe, Ra(function(...e) {
		f()?.apply(this, e);
	})), J("input", ue, (e) => u()("endpointUrl", e)), J("change", k, (e) => u()("isActive", e)), J("submit", O, Ra(function(...e) {
		p()?.apply(this, e);
	})), X(e, g), Qe();
}
var Fs, Is, Ls, Rs, zs, Bs = e((() => {
	no(), ro(), Ya(), Fs = /* @__PURE__ */ Y("<p class=\"seller-bank-summary\"> </p>"), Is = /* @__PURE__ */ Y("<article class=\"seller-payout-row\"><div><p class=\"seller\"> </p> <p> </p></div> <strong> </strong></article>"), Ls = /* @__PURE__ */ Y("<div class=\"seller-payout-list\"></div>"), Rs = /* @__PURE__ */ Y("<div class=\"webhook-secret\"><p class=\"seller\">Signing secret</p> <code> </code> <p class=\"detail-description\">Receiver command:</p> <code> </code></div>"), zs = /* @__PURE__ */ Y("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a> <a class=\"checkout-link secondary-link\" href=\"/seller/sales\">View sales</a></div></article> <article class=\"detail-card\"><p class=\"section-kicker\">Mock wallet</p> <h3>Seller funds</h3> <div class=\"seller-wallet-metrics\"><div><p>Available balance</p> <strong> </strong></div> <div><p>Total earned</p> <strong> </strong></div></div> <form class=\"stack-form bank-form\"><label for=\"bank-holder\">Account holder</label> <input id=\"bank-holder\" type=\"text\"/> <label for=\"bank-name\">Bank name</label> <input id=\"bank-name\" type=\"text\"/> <label for=\"bank-routing\">Demo routing number</label> <input id=\"bank-routing\" type=\"text\" inputmode=\"numeric\"/> <label for=\"bank-account\">Demo account number</label> <input id=\"bank-account\" type=\"text\" inputmode=\"numeric\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Save mock bank details</button></form> <!> <form class=\"stack-form payout-form\"><label for=\"payout-amount\">Payout amount</label> <input id=\"payout-amount\" type=\"number\" min=\"0.01\" step=\"0.01\"/> <label for=\"payout-note\">Note</label> <input id=\"payout-note\" type=\"text\" maxlength=\"120\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Send mock payout</button></form> <!></article> <article class=\"detail-card\"><p class=\"section-kicker\">Warehouse integration</p> <h3>Order webhook setup</h3> <p class=\"detail-description\">Send order notifications to warehouse software when buyers place orders for your products.</p> <form class=\"stack-form webhook-form\"><label for=\"webhook-url\">Receiver URL</label> <input id=\"webhook-url\" type=\"url\" placeholder=\"http://localhost:4010/seller-webhook\"/> <label class=\"checkbox-row\" for=\"webhook-active\"><input id=\"webhook-active\" type=\"checkbox\"/> Webhook active</label> <button class=\"checkout-link place-order-button\" type=\"submit\">Save webhook setup</button></form> <!></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function Vs(e, t) {
	Ze(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "onSellerImageInput", 8), c = $(t, "formatCurrency", 8);
	Ba();
	var l = Ks(), u = kn(l), d = R(u), f = R(d), p = z(R(f), 2);
	ma(p);
	var m = z(p, 4);
	Bn(m);
	var h = z(m, 4), g = z(h, 4), _ = (e) => {
		var t = Hs();
		B(() => _a(t, "src", (W(n()), U(() => n().imagePreviewUrl)))), X(e, t);
	};
	Q(g, (e) => {
		W(n()), U(() => n().imagePreviewUrl) && e(_);
	});
	var v = z(g, 4);
	ma(v);
	var y = z(v, 4);
	ma(y), Ie(2), A(f), Pa(f, (e) => i(e), () => i()), A(d);
	var b = z(d, 2), x = z(R(b), 2), S = R(x, !0);
	A(x), A(b), A(u);
	var C = z(u, 2), w = (e) => {
		X(e, Us());
	}, T = (e) => {
		var t = Gs();
		zi(t, 5, r, Ii, (e, t) => {
			var n = Ws(), r = R(n), i = z(r, 2), a = R(i), o = R(a), s = (e) => {
				X(e, hi("Pending approval"));
			}, l = (e) => {
				X(e, hi("Rejected"));
			}, u = (e) => {
				X(e, hi("Listed"));
			}, d = (e) => {
				X(e, hi("Delisted"));
			};
			Q(o, (e) => {
				H(t), U(() => H(t).listingStatus === "pending") ? e(s) : (H(t), U(() => H(t).listingStatus === "rejected") ? e(l, 1) : (H(t), U(() => H(t).isListed) ? e(u, 2) : e(d, -1)));
			}), A(a);
			var f = z(a, 2), p = R(f);
			A(f), A(i);
			var m = z(i, 2), h = R(m, !0);
			A(m);
			var g = z(m, 2), _ = R(g, !0);
			A(g);
			var v = z(g, 2), y = R(v), b = R(y), x = R(b, !0);
			A(b);
			var S = z(b, 2), C = R(S);
			A(S), A(y), A(v), A(n), B((e, n) => {
				_a(r, "src", (H(t), U(() => H(t).imageUrl || "/images/product-placeholder.png"))), _a(r, "alt", (H(t), U(() => H(t).name))), Z(p, `${(H(t), U(() => H(t).stock)) ?? ""} in stock`), Z(h, (H(t), U(() => H(t).name))), Z(_, (H(t), U(() => H(t).description || "No description provided."))), Z(x, e), Z(C, `Created ${n ?? ""}`);
			}, [() => (W(c()), H(t), U(() => c()(H(t).price))), () => (H(t), U(() => new Date(H(t).createdAt).toLocaleDateString()))]), X(e, n);
		}), A(t), X(e, t);
	};
	Q(C, (e) => {
		W(r()), U(() => r().length === 0) ? e(w) : e(T, -1);
	}), B(() => {
		ha(p, (W(n()), U(() => n().name))), ha(m, (W(n()), U(() => n().description))), ha(v, (W(n()), U(() => n().price))), ha(y, (W(n()), U(() => n().stock))), Z(S, (W(r()), U(() => r().length)));
	}), J("input", p, (e) => o()("name", e)), J("input", m, (e) => o()("description", e)), J("change", h, function(...e) {
		s()?.apply(this, e);
	}), J("input", v, (e) => o()("price", e)), J("input", y, (e) => o()("stock", e)), J("submit", f, Ra(function(...e) {
		a()?.apply(this, e);
	})), X(e, l), Qe();
}
var Hs, Us, Ws, Gs, Ks, qs = e((() => {
	no(), ro(), Ya(), Hs = /* @__PURE__ */ Y("<img class=\"product-image-preview\" alt=\"Selected product preview\"/>"), Us = /* @__PURE__ */ Y("<div class=\"state-card\">No listings yet.</div>"), Ws = /* @__PURE__ */ Y("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), Gs = /* @__PURE__ */ Y("<div class=\"product-grid inventory-grid\"></div>"), Ks = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-image\">Product image</label> <input id=\"seller-image\" type=\"file\" accept=\"image/jpeg,image/png\"/> <p class=\"field-hint\">Optional. JPEG or PNG up to 2 MB.</p> <!> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/SellerSalesView.svelte
function Js(e, t) {
	Ze(t, !1);
	let n = $(t, "sales", 24, () => []), r = $(t, "summary", 24, () => ({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	})), i = $(t, "pageInfo", 8), a = $(t, "goToSellerSalesPage", 8), o = $(t, "formatCurrency", 8), s = $(t, "formatDate", 8), c = $(t, "formatPaymentMethod", 8);
	Ba();
	var l = Qs(), u = kn(l), d = R(u), f = z(R(d), 2), p = R(f, !0);
	A(f), A(d);
	var m = z(d, 2), h = z(R(m), 2), g = R(h, !0);
	A(h), A(m);
	var _ = z(m, 2), v = z(R(_), 2), y = R(v, !0);
	A(v), A(_), A(u);
	var b = z(u, 2), x = (e) => {
		X(e, Ys());
	}, S = (e) => {
		var t = Zs(), r = kn(t);
		zi(r, 5, n, Ii, (e, t) => {
			var n = Xs(), r = R(n), i = R(r), a = R(i);
			A(i);
			var l = z(i, 2), u = R(l, !0);
			A(l);
			var d = z(l, 2), f = R(d);
			A(d);
			var p = z(d, 2), m = R(p);
			A(p), A(r);
			var h = z(r, 2), g = R(h), _ = R(g, !0);
			A(g);
			var v = z(g, 2), y = R(v, !0);
			A(v), A(h), A(n), B((e, n, r, i) => {
				Z(a, `Order #${(H(t), U(() => H(t).order.id)) ?? ""}`), Z(u, (H(t), U(() => H(t).productName))), Z(f, `${e ?? ""} - ${n ?? ""}`), Z(m, `${(H(t), U(() => H(t).quantity)) ?? ""} unit${(H(t), U(() => H(t).quantity === 1 ? "" : "s")) ?? ""} at ${r ?? ""}`), Z(_, i), Z(y, (H(t), U(() => H(t).order.status)));
			}, [
				() => (W(s()), H(t), U(() => s()(H(t).order.createdAt))),
				() => (W(c()), H(t), U(() => c()(H(t).order.paymentMethod))),
				() => (W(o()), H(t), U(() => o()(H(t).unitPrice))),
				() => (W(o()), H(t), U(() => o()(H(t).lineTotal)))
			]), X(e, n);
		}), A(r);
		var l = z(r, 2), u = R(l), d = z(u, 2), f = R(d);
		A(d);
		var p = z(d, 2);
		A(l), B(() => {
			u.disabled = (W(i()), U(() => !i().hasPreviousPage)), Z(f, `Page ${(W(i()), U(() => i().page)) ?? ""} of ${(W(i()), U(() => i().totalPages)) ?? ""}`), p.disabled = (W(i()), U(() => !i().hasNextPage));
		}), J("click", u, () => a()(i().page - 1)), J("click", p, () => a()(i().page + 1)), X(e, t);
	};
	Q(b, (e) => {
		W(n()), U(() => n().length === 0) ? e(x) : e(S, -1);
	}), B((e) => {
		Z(p, (W(r()), U(() => r().orderCount))), Z(g, (W(r()), U(() => r().unitsSold))), Z(y, e);
	}, [() => (W(o()), W(r()), U(() => o()(r().grossSales)))]), X(e, l), Qe();
}
var Ys, Xs, Zs, Qs, $s = e((() => {
	no(), ro(), Ya(), Ys = /* @__PURE__ */ Y("<div class=\"state-card\">No sales have been recorded yet.</div>"), Xs = /* @__PURE__ */ Y("<article class=\"line-card seller-sales-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p></div> <div class=\"line-actions seller-sales-actions\"><p class=\"price\"> </p> <p class=\"seller\"> </p></div></article>"), Zs = /* @__PURE__ */ Y("<div class=\"list-grid seller-sales-list\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1), Qs = /* @__PURE__ */ Y("<div class=\"seller-sales-summary\"><aside class=\"summary-panel\"><p>Orders</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Items sold</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Gross sales</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function ec(e, t) {
	Ze(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "productSearch", 8, ""), i = $(t, "addToCart", 8), a = $(t, "addToComparison", 8), o = $(t, "openRandomProduct", 8), s = $(t, "onProductSearchInput", 8), c = $(t, "searchProducts", 8), l = $(t, "clearProductSearch", 8), u = $(t, "formatCurrency", 8);
	Ba();
	var d = ac(), f = kn(d), p = R(f), m = z(R(p), 2), h = R(m);
	ma(h);
	var g = z(h, 4), _ = (e) => {
		var t = tc();
		J("click", t, function(...e) {
			l()?.apply(this, e);
		}), X(e, t);
	}, v = /* @__PURE__ */ nn(() => (W(r()), U(() => r().trim())));
	Q(g, (e) => {
		H(v) && e(_);
	}), A(m), A(p);
	var y = z(p, 2), b = R(y);
	A(y), A(f);
	var x = z(f, 2), S = (e) => {
		var t = nc(), n = R(t, !0);
		A(t), B((e) => Z(n, e), [() => (W(r()), U(() => r().trim() ? "No products match your search." : "No listed products are available right now."))]), X(e, t);
	}, C = (e) => {
		var t = ic();
		zi(t, 5, n, Ii, (e, t) => {
			var n = rc(), r = R(n), o = z(r, 2), s = R(o), c = R(s, !0);
			A(s);
			var l = z(s, 2), d = R(l);
			A(l), A(o);
			var f = z(o, 2), p = R(f, !0);
			A(f);
			var m = z(f, 2), h = R(m, !0);
			A(m);
			var g = z(m, 2), _ = R(g), v = R(_), y = R(v, !0);
			A(v);
			var b = z(v, 2);
			A(_);
			var x = z(_, 2), S = R(x), C = z(S, 2);
			A(x), A(g), A(n), B((e) => {
				_a(r, "src", (H(t), U(() => H(t).imageUrl || "/images/product-placeholder.png"))), _a(r, "alt", (H(t), U(() => H(t).name))), Z(c, (H(t), U(() => H(t).seller.username))), Z(d, `${(H(t), U(() => H(t).stock)) ?? ""} in stock`), Z(p, (H(t), U(() => H(t).name))), Z(h, (H(t), U(() => H(t).description || "No description provided."))), Z(y, e), _a(b, "href", (H(t), U(() => `/buyer/products/${H(t).id}`)));
			}, [() => (W(u()), H(t), U(() => u()(H(t).price)))]), J("click", S, () => i()(H(t).id)), J("click", C, () => a()(H(t).id)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(x, (e) => {
		W(n()), U(() => n().length === 0) ? e(S) : e(C, -1);
	}), B(() => ha(h, r())), J("input", h, function(...e) {
		s()?.apply(this, e);
	}), J("submit", p, Ra(function(...e) {
		c()?.apply(this, e);
	})), J("click", b, function(...e) {
		o()?.apply(this, e);
	}), X(e, d), Qe();
}
var tc, nc, rc, ic, ac, oc = e((() => {
	no(), ro(), Ya(), tc = /* @__PURE__ */ Y("<button class=\"secondary\" type=\"button\">Clear</button>"), nc = /* @__PURE__ */ Y("<div class=\"state-card\"> </div>"), rc = /* @__PURE__ */ Y("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), ic = /* @__PURE__ */ Y("<div class=\"product-grid\"></div>"), ac = /* @__PURE__ */ Y("<div class=\"storefront-tools\"><form class=\"storefront-search\"><label for=\"product-search\">Search products</label> <div class=\"storefront-search-row\"><input id=\"product-search\" type=\"search\" placeholder=\"Search by product name or description\"/> <button type=\"submit\">Search</button> <!></div></form> <div class=\"storefront-actions\"><button class=\"checkout-link random-product-button\" type=\"button\">Random product</button></div></div> <!>", 1);
}));
//#endregion
//#region frontend/src/App.svelte
function sc(e, t) {
	Ze(t, !1);
	let n = /* @__PURE__ */ I(), r = [
		{
			value: "accessible",
			label: "Winter Ice"
		},
		{
			value: "dark",
			label: "Dark Mode"
		},
		{
			value: "warm",
			label: "Warm"
		},
		{
			value: "terminal",
			label: "Terminal"
		},
		{
			value: "cool-grey",
			label: "Cool Grey"
		},
		{
			value: "accessible-dark",
			label: "Deep Blue"
		},
		{
			value: "accessible-blue-gold",
			label: "Honeycomb"
		},
		{
			value: "accessible-mono",
			label: "Monochrome"
		}
	], i = new Set(r.map((e) => e.value)), a = /* @__PURE__ */ I("buyer"), o = /* @__PURE__ */ I("storefront"), s = /* @__PURE__ */ I([]), c = /* @__PURE__ */ I(""), l = /* @__PURE__ */ I(null), u = /* @__PURE__ */ I([]), d = /* @__PURE__ */ I({
		items: [],
		subtotal: 0,
		serviceFee: 0,
		tax: 0,
		total: 0
	}), f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I([]), m = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1
	}), h = /* @__PURE__ */ I([]), g = /* @__PURE__ */ I([]), _ = /* @__PURE__ */ I({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	}), v = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1
	}), y = /* @__PURE__ */ I({
		balance: 0,
		totalEarned: 0
	}), b = /* @__PURE__ */ I(null), x = /* @__PURE__ */ I([]), S = /* @__PURE__ */ I({
		accountHolder: "",
		bankName: "",
		routingNumber: "",
		accountNumber: ""
	}), C = /* @__PURE__ */ I({
		amount: "",
		note: ""
	}), w = /* @__PURE__ */ I({
		endpointUrl: "",
		signingSecret: "",
		isActive: !1
	}), T = /* @__PURE__ */ I({
		name: "",
		description: "",
		imageDataUrl: "",
		imagePreviewUrl: "",
		price: "",
		stock: ""
	}), ee = /* @__PURE__ */ I(), te = /* @__PURE__ */ I([]), ne = /* @__PURE__ */ I([]), re = /* @__PURE__ */ I([]), ie = /* @__PURE__ */ I([]), ae = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), oe = /* @__PURE__ */ I(""), se = /* @__PURE__ */ I({
		name: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postalCode: "",
		country: "US"
	}), ce = /* @__PURE__ */ I("accessible-blue-gold"), le = /* @__PURE__ */ I(!1), E = /* @__PURE__ */ I(!0), D = /* @__PURE__ */ I(""), O = /* @__PURE__ */ I(""), ue = /* @__PURE__ */ I([]), de = /* @__PURE__ */ new Map();
	async function k(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function fe(e) {
		L(ce, i.has(e) ? e : "accessible-blue-gold"), typeof document < "u" && (document.documentElement.dataset.theme = H(ce)), typeof localStorage < "u" && localStorage.setItem("ram-theme", H(ce));
	}
	function pe() {
		L(le, !H(le));
	}
	function me(e) {
		fe(e), L(le, !1);
	}
	function he(e, t) {
		return {
			...e,
			...t
		};
	}
	function ge(e) {
		L(te, H(te).filter((t) => t.id !== e.id)), L(re, H(re).map((t) => t.id === e.id ? he(t, e) : t));
	}
	function _e(e) {
		L(ne, H(ne).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function ve(e = !1) {
		L(E, !0), L(D, ""), e && L(O, "");
		try {
			let e = H(c).trim();
			L(s, await k(e ? `/api/buyer/products?search=${encodeURIComponent(e)}` : "/api/buyer/products"));
		} catch (e) {
			L(D, e.message || "Could not load products.");
		} finally {
			L(E, !1);
		}
	}
	async function ye() {
		L(E, !0), L(D, ""), L(O, "");
		try {
			L(l, await k(`/api/buyer/products/${ao()}`));
		} catch (e) {
			L(D, e.message || "Could not load product.");
		} finally {
			L(E, !1);
		}
	}
	async function be() {
		L(E, !0), L(D, ""), L(O, "");
		try {
			L(d, await k("/api/buyer/cart"));
		} catch (e) {
			L(D, e.message || "Could not load cart.");
		} finally {
			L(E, !1);
		}
	}
	async function xe() {
		L(E, !0), L(D, ""), L(O, "");
		try {
			L(u, (await k("/api/buyer/compare")).items || []);
		} catch (e) {
			L(D, e.message || "Could not load comparison list.");
		} finally {
			L(E, !1);
		}
	}
	async function Se() {
		L(E, !0), L(D, "");
		try {
			L(h, await k("/api/seller/products"));
		} catch (e) {
			L(D, e.message || "Could not load seller inventory.");
		} finally {
			L(E, !1);
		}
	}
	function Ce(e) {
		L(y, {
			balance: e.wallet?.balance || 0,
			totalEarned: e.wallet?.totalEarned || 0
		}), L(b, e.bankAccount || null), L(x, e.payouts || []);
	}
	async function we() {
		L(E, !0), L(D, "");
		try {
			Ce(await k("/api/seller/wallet"));
		} catch (e) {
			L(D, e.message || "Could not load seller wallet.");
		} finally {
			L(E, !1);
		}
	}
	async function Te() {
		L(E, !0), L(D, "");
		try {
			let [e, t] = await Promise.all([k("/api/seller/webhook"), k("/api/seller/wallet")]);
			L(w, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), Ce(t);
		} catch (e) {
			L(D, e.message || "Could not load seller dashboard.");
		} finally {
			L(E, !1);
		}
	}
	async function Ee(e = 1) {
		L(E, !0), L(D, ""), L(O, "");
		try {
			let t = await k(`/api/seller/sales?page=${e}`);
			L(g, t.sales || []), L(_, t.summary || {
				grossSales: 0,
				unitsSold: 0,
				orderCount: 0
			}), L(v, {
				page: t.page,
				totalPages: t.totalPages,
				hasPreviousPage: t.hasPreviousPage,
				hasNextPage: t.hasNextPage
			});
		} catch (e) {
			L(D, e.message || "Could not load seller sales.");
		} finally {
			L(E, !1);
		}
	}
	async function De() {
		L(E, !0), L(D, "");
		try {
			L(ie, await k("/api/admin/audit-logs"));
		} catch (e) {
			L(D, e.message || "Could not load audit logs.");
		} finally {
			L(E, !1);
		}
	}
	async function Oe(e = 1, t = H(oe)) {
		L(E, !0), L(D, "");
		try {
			let [n, r, i] = await Promise.all([
				k("/api/admin/pending-users"),
				k("/api/admin/products"),
				k(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			L(te, n), L(ne, r), L(re, i.users), L(ae, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), L(oe, i.search || "");
		} catch (e) {
			L(D, e.message || "Could not load moderation data.");
		} finally {
			L(E, !1);
		}
	}
	async function ke() {
		L(E, !0), L(D, ""), L(O, "");
		try {
			L(f, await k(`/api/buyer/orders/${oo()}`)), L(O, "Your order has been placed successfully.");
		} catch (e) {
			L(D, e.message || "Could not load order confirmation.");
		} finally {
			L(E, !1);
		}
	}
	async function Ae(e = 1) {
		L(E, !0), L(D, ""), L(O, "");
		try {
			let t = await k(`/api/buyer/orders?page=${e}`);
			L(p, t.orders || []), L(m, {
				page: t.page,
				totalPages: t.totalPages,
				hasPreviousPage: t.hasPreviousPage,
				hasNextPage: t.hasNextPage
			});
		} catch (e) {
			L(D, e.message || "Could not load order history.");
		} finally {
			L(E, !1);
		}
	}
	async function je() {
		if (L(a, so()), L(o, co()), H(o) === "admin-home") {
			L(E, !1), L(D, "");
			return;
		}
		if (H(o) === "seller-home") {
			await Te();
			return;
		}
		if (H(o) === "admin-moderation") {
			await Oe();
			return;
		}
		if (H(o) === "admin-audit") {
			await De();
			return;
		}
		if (H(o) === "seller-inventory") {
			await Se();
			return;
		}
		if (H(o) === "seller-sales") {
			await Ee();
			return;
		}
		if (H(o) === "cart" || H(o) === "checkout") {
			await be();
			return;
		}
		if (H(o) === "compare") {
			await xe();
			return;
		}
		if (H(o) === "confirmation") {
			await ke();
			return;
		}
		if (H(o) === "orders") {
			await Ae();
			return;
		}
		if (H(o) === "product") {
			await ye();
			return;
		}
		await ve();
	}
	async function Me(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Fr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function Ne(e, t) {
		L(T, {
			...H(T),
			[e]: t.currentTarget.value
		});
	}
	function Pe(e, t) {
		L(w, {
			...H(w),
			[e]: e === "isActive" ? t.currentTarget.checked : t.currentTarget.value
		});
	}
	function Fe(e, t) {
		L(S, {
			...H(S),
			[e]: t.currentTarget.value
		});
	}
	function Ie(e, t) {
		L(C, {
			...H(C),
			[e]: t.currentTarget.value
		});
	}
	function Le(e) {
		let [t] = e.currentTarget.files || [];
		if (!t) {
			L(T, {
				...H(T),
				imageDataUrl: "",
				imagePreviewUrl: ""
			});
			return;
		}
		if (!["image/jpeg", "image/png"].includes(t.type)) {
			L(O, "Select a JPEG or PNG file for the product photo."), e.currentTarget.value = "";
			return;
		}
		if (t.size > 2 * 1024 * 1024) {
			L(O, "Product image must be 2 MB or smaller."), e.currentTarget.value = "";
			return;
		}
		let n = new FileReader();
		n.onload = () => {
			L(T, {
				...H(T),
				imageDataUrl: String(n.result || ""),
				imagePreviewUrl: String(n.result || "")
			}), L(O, "");
		}, n.onerror = () => {
			L(O, "Could not read selected image.");
		}, n.readAsDataURL(t);
	}
	function Re(e, t) {
		L(se, {
			...H(se),
			[e]: t.currentTarget.value
		});
	}
	function j(e) {
		L(oe, e.currentTarget.value);
	}
	async function M() {
		L(O, "");
		let e = String(H(T).price).trim(), t = String(H(T).stock).trim(), n = Number(e), r = Number(t);
		if (H(ee)?.reportValidity()) {
			if (e === "" || !Number.isFinite(n)) {
				L(O, "Enter a valid number for price.");
				return;
			}
			if (t === "" || !Number.isInteger(r)) {
				L(O, "Enter a whole number for stock.");
				return;
			}
			try {
				await k("/api/seller/products", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: H(T).name,
						description: H(T).description,
						imageDataUrl: H(T).imageDataUrl,
						price: n,
						stock: r
					})
				}), L(T, {
					name: "",
					description: "",
					imageDataUrl: "",
					imagePreviewUrl: "",
					price: "",
					stock: ""
				}), H(ee)?.reset(), L(O, "Listing submitted for admin approval."), await Se();
			} catch (e) {
				L(O, e.message || "Could not create listing.");
			}
		}
	}
	async function N() {
		L(O, "");
		try {
			let e = await k("/api/seller/webhook", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					endpointUrl: H(w).endpointUrl,
					isActive: H(w).isActive
				})
			});
			L(w, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), L(O, "Webhook setup saved.");
		} catch (e) {
			L(O, e.message || "Could not save webhook setup.");
		}
	}
	async function ze() {
		L(O, "");
		try {
			L(b, await k("/api/seller/wallet/bank-account", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(H(S))
			})), L(S, {
				accountHolder: "",
				bankName: "",
				routingNumber: "",
				accountNumber: ""
			}), L(O, "Mock bank details saved.");
		} catch (e) {
			L(O, e.message || "Could not save mock bank details.");
		}
	}
	async function Be() {
		L(O, "");
		try {
			let e = await k("/api/seller/wallet/payouts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(H(C))
			});
			L(y, {
				balance: e.wallet?.balance || 0,
				totalEarned: e.wallet?.totalEarned || H(y).totalEarned
			}), L(C, {
				amount: "",
				note: ""
			}), L(O, "Mock payout sent."), await we();
		} catch (e) {
			L(O, e.message || "Could not send mock payout.");
		}
	}
	async function Ve(e) {
		L(O, "");
		try {
			let t = await k(`/api/admin/approve-user/${e}`, { method: "POST" });
			L(O, "User approved."), ge(t);
		} catch (e) {
			L(O, e.message || "Could not approve user.");
		}
	}
	async function He(e) {
		L(O, "");
		try {
			let t = await k(`/api/admin/block-user/${e}`, { method: "POST" });
			L(O, "User blocked."), ge(t);
		} catch (e) {
			L(O, e.message || "Could not block user.");
		}
	}
	async function Ue(e) {
		L(O, "");
		try {
			let t = await k(`/api/admin/ban-user/${e}`, { method: "POST" });
			L(O, "User banned."), ge(t);
		} catch (e) {
			L(O, e.message || "Could not ban user.");
		}
	}
	async function We(e) {
		L(O, "");
		try {
			let t = await k(`/api/admin/products/${e}/approve`, { method: "POST" });
			L(O, "Product approved."), _e(t);
		} catch (e) {
			L(O, e.message || "Could not approve product.");
		}
	}
	async function Ge(e) {
		L(O, "");
		try {
			let t = await k(`/api/admin/products/${e}/reject`, { method: "POST" });
			L(O, "Product rejected."), _e(t);
		} catch (e) {
			L(O, e.message || "Could not reject product.");
		}
	}
	async function Ke(e) {
		L(O, "");
		try {
			let t = await k(`/api/admin/products/${e}/delist`, { method: "POST" });
			L(O, "Product delisted."), _e(t);
		} catch (e) {
			L(O, e.message || "Could not delist product.");
		}
	}
	async function qe() {
		await Me(() => Oe(1, H(oe)));
	}
	async function Je() {
		L(oe, ""), await Me(() => Oe(1, ""));
	}
	async function Ye(e) {
		e < 1 || e > H(ae).totalPages || await Me(() => Oe(e, H(ae).search));
	}
	function Xe(e) {
		L(c, e.target.value);
	}
	async function $e() {
		await Me(() => ve(!0));
	}
	async function P() {
		L(c, ""), await Me(() => ve(!0));
	}
	async function et(e) {
		e < 1 || e > H(m).totalPages || await Me(() => Ae(e));
	}
	async function tt(e) {
		e < 1 || e > H(v).totalPages || await Me(() => Ee(e));
	}
	function nt(e, t = "success") {
		let n = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
		L(ue, [...H(ue), {
			id: n,
			message: e,
			type: t
		}]);
		let r = setTimeout(() => {
			L(ue, H(ue).filter((e) => e.id !== n)), de.delete(n);
		}, 3200);
		de.set(n, r);
	}
	async function rt(e) {
		L(O, "");
		try {
			await k("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(O, "Item added to cart."), nt("Item added to cart.");
		} catch (e) {
			L(O, e.message || "Could not add item to cart."), nt(H(O), "error");
		}
	}
	async function it() {
		L(O, "");
		try {
			let e = await k("/api/buyer/random_access");
			typeof window < "u" && (window.location.href = `/buyer/products/${e.id}`);
		} catch (e) {
			L(O, e.message || "Could not load a random product.");
		}
	}
	async function at(e) {
		L(O, "");
		try {
			await k("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(O, "Item added to comparison list.");
		} catch (e) {
			L(O, e.message || "Could not add item to list.");
		}
	}
	async function ot(e) {
		L(O, "");
		try {
			await k(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(O, "Item removed from cart."), await be();
		} catch (e) {
			L(O, e.message || "Could not remove item.");
		}
	}
	async function st(e) {
		L(O, "");
		try {
			await k(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(O, "Item removed from comparison list."), await xe();
		} catch (e) {
			L(O, e.message || "Could not remove item.");
		}
	}
	async function ct() {
		L(O, "");
		try {
			let e = await k("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					paymentMethod: "demo_card",
					shippingAddress: H(se)
				})
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			L(O, e.message || "Checkout failed."), await be();
		}
	}
	async function lt() {
		L(O, "");
		try {
			await k("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(O, e.message || "Could not log out.");
		}
	}
	Za(async () => {
		fe((typeof localStorage > "u" ? null : localStorage.getItem("ram-theme")) || "accessible-blue-gold"), await je();
	}), Qa(() => {
		de.forEach((e) => clearTimeout(e)), de.clear();
	}), nr(() => H(o), () => {
		L(n, lo(H(o)));
	}), rr(), Ba();
	var ut = gc();
	na("13zv0lp", (e) => {
		or((e) => {
			Fn.title = e ?? "";
		}, [() => (W(uo), H(o), U(() => uo(H(o))))]);
	});
	var dt = R(ut);
	wo(dt, {
		get appMode() {
			return H(a);
		},
		get currentPage() {
			return H(o);
		},
		onLogout: lt
	});
	var ft = z(dt, 2), pt = R(ft);
	Oo(pt, {
		get kicker() {
			return H(n), U(() => H(n).kicker);
		},
		get heading() {
			return H(n), U(() => H(n).heading);
		},
		onRefresh: je
	});
	var mt = z(pt, 2), ht = (e) => {
		X(e, cc());
	}, gt = (e) => {
		var t = lc(), n = R(t, !0);
		A(t), B(() => Z(n, H(D))), X(e, t);
	}, _t = (e) => {
		Io(e, {});
	}, vt = (e) => {
		zo(e, {
			get adminPendingUsers() {
				return H(te);
			},
			get adminProducts() {
				return H(ne);
			},
			get adminUsers() {
				return H(re);
			},
			get adminUsersPageInfo() {
				return H(ae);
			},
			get adminUserSearch() {
				return H(oe);
			},
			onAdminUserSearchInput: j,
			approveUser: Ve,
			blockUser: He,
			banUser: Ue,
			approveProduct: We,
			rejectProduct: Ge,
			delistProduct: Ke,
			searchAdminUsers: qe,
			clearAdminUserSearch: Je,
			goToAdminUsersPage: Ye,
			get capitalizeRole() {
				return vo;
			},
			get formatCurrency() {
				return mo;
			},
			get formatDate() {
				return ho;
			},
			get getUserStatus() {
				return yo;
			}
		});
	}, yt = (e) => {
		jo(e, {
			get adminAuditLogs() {
				return H(ie);
			},
			get formatActionType() {
				return bo;
			},
			get formatDate() {
				return ho;
			}
		});
	}, bt = (e) => {
		Ps(e, {
			get sellerWallet() {
				return H(y);
			},
			get sellerBankAccount() {
				return H(b);
			},
			get sellerPayouts() {
				return H(x);
			},
			get sellerBankForm() {
				return H(S);
			},
			get sellerPayoutForm() {
				return H(C);
			},
			get sellerWebhook() {
				return H(w);
			},
			onSellerBankInput: Fe,
			onSellerPayoutInput: Ie,
			onSellerWebhookInput: Pe,
			saveSellerBankAccount: ze,
			createSellerPayout: Be,
			saveSellerWebhook: N,
			get formatCurrency() {
				return mo;
			},
			get formatDate() {
				return ho;
			}
		});
	}, xt = (e) => {
		Vs(e, {
			get sellerForm() {
				return H(T);
			},
			get sellerProducts() {
				return H(h);
			},
			createSellerListing: M,
			onSellerFormInput: Ne,
			onSellerImageInput: Le,
			get formatCurrency() {
				return mo;
			},
			get sellerListingForm() {
				return H(ee);
			},
			set sellerListingForm(e) {
				L(ee, e);
			},
			$$legacy: !0
		});
	}, St = (e) => {
		Js(e, {
			get sales() {
				return H(g);
			},
			get summary() {
				return H(_);
			},
			get pageInfo() {
				return H(v);
			},
			goToSellerSalesPage: tt,
			get formatCurrency() {
				return mo;
			},
			get formatDate() {
				return ho;
			},
			get formatPaymentMethod() {
				return go;
			}
		});
	}, Ct = (e) => {
		js(e, {
			get product() {
				return H(l);
			},
			addToCart: rt,
			addToComparison: at,
			get formatCurrency() {
				return mo;
			}
		});
	}, wt = (e) => {
		es(e, {
			get cart() {
				return H(d);
			},
			removeFromCart: ot,
			get formatCurrency() {
				return mo;
			}
		});
	}, Tt = (e) => {
		os(e, {
			get cart() {
				return H(d);
			},
			placeOrder: ct,
			get formatCurrency() {
				return mo;
			},
			get shippingAddress() {
				return H(se);
			},
			onShippingInput: Re
		});
	}, Et = (e) => {
		_s(e, {
			get order() {
				return H(f);
			},
			get formatCurrency() {
				return mo;
			},
			get formatDate() {
				return ho;
			},
			get formatPaymentMethod() {
				return go;
			}
		});
	}, Dt = (e) => {
		Ts(e, {
			get orders() {
				return H(p);
			},
			get pageInfo() {
				return H(m);
			},
			goToOrderHistoryPage: et,
			get formatCurrency() {
				return mo;
			},
			get formatDate() {
				return ho;
			},
			get formatPaymentMethod() {
				return go;
			}
		});
	}, Ot = (e) => {
		fs(e, {
			get compareItems() {
				return H(u);
			},
			addToCart: rt,
			removeFromCompare: st,
			get formatCurrency() {
				return mo;
			},
			get truncate() {
				return _o;
			}
		});
	}, kt = (e) => {
		ec(e, {
			get products() {
				return H(s);
			},
			get productSearch() {
				return H(c);
			},
			addToCart: rt,
			addToComparison: at,
			openRandomProduct: it,
			onProductSearchInput: Xe,
			searchProducts: $e,
			clearProductSearch: P,
			get formatCurrency() {
				return mo;
			}
		});
	};
	Q(mt, (e) => {
		H(E) ? e(ht) : H(D) ? e(gt, 1) : H(o) === "admin-home" ? e(_t, 2) : H(o) === "admin-moderation" ? e(vt, 3) : H(o) === "admin-audit" ? e(yt, 4) : H(o) === "seller-home" ? e(bt, 5) : H(o) === "seller-inventory" ? e(xt, 6) : H(o) === "seller-sales" ? e(St, 7) : H(o) === "product" && H(l) ? e(Ct, 8) : H(o) === "cart" ? e(wt, 9) : H(o) === "checkout" ? e(Tt, 10) : H(o) === "confirmation" && H(f) ? e(Et, 11) : H(o) === "orders" ? e(Dt, 12) : H(o) === "compare" ? e(Ot, 13) : e(kt, -1);
	});
	var At = z(mt, 2), jt = (e) => {
		var t = uc(), n = R(t, !0);
		A(t), B(() => Z(n, H(O))), X(e, t);
	};
	Q(At, (e) => {
		H(O) && e(jt);
	}), A(ft);
	var F = z(ft, 2), Mt = (e) => {
		var t = fc();
		zi(t, 5, () => H(ue), (e) => e.id, (e, t) => {
			var n = dc();
			let r;
			var i = R(n, !0);
			A(n), B(() => {
				r = ua(n, 1, "cart-toast", null, r, { error: H(t).type === "error" }), Z(i, (H(t), U(() => H(t).message)));
			}), X(e, n);
		}), A(t), X(e, t);
	};
	Q(F, (e) => {
		H(ue), U(() => H(ue).length > 0) && e(Mt);
	});
	var Nt = z(F, 2), Pt = R(Nt), Ft = (e) => {
		var t = hc();
		zi(t, 5, () => r, Ii, (e, t) => {
			var n = mc();
			let r;
			var i = R(n), a = R(i, !0);
			A(i);
			var o = z(i, 2), s = (e) => {
				X(e, pc());
			};
			Q(o, (e) => {
				H(ce), H(t), U(() => H(ce) === H(t).value) && e(s);
			}), A(n), B(() => {
				r = ua(n, 1, "theme-dock-option", null, r, { "active-theme": H(ce) === H(t).value }), _a(n, "aria-checked", (H(ce), H(t), U(() => H(ce) === H(t).value))), Z(a, (H(t), U(() => H(t).label)));
			}), J("click", n, () => me(H(t).value)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(Pt, (e) => {
		H(le) && e(Ft);
	});
	var It = z(Pt, 2);
	A(Nt), A(ut), B(() => {
		_a(ut, "data-page", H(o)), _a(It, "aria-expanded", H(le));
	}), J("click", It, pe), X(e, ut), Qe();
}
var cc, lc, uc, dc, fc, pc, mc, hc, gc, _c = e((() => {
	no(), ro(), Ya(), eo(), Do(), Ao(), Fo(), Ro(), $o(), as(), ds(), gs(), ws(), As(), Ns(), Bs(), qs(), $s(), oc(), Co(), cc = /* @__PURE__ */ Y("<div class=\"state-card\">Loading...</div>"), lc = /* @__PURE__ */ Y("<div class=\"state-card error\"> </div>"), uc = /* @__PURE__ */ Y("<p class=\"status-banner\"> </p>"), dc = /* @__PURE__ */ Y("<div role=\"status\"> </div>"), fc = /* @__PURE__ */ Y("<div class=\"cart-toast-stack\" aria-live=\"polite\" aria-label=\"Cart notifications\"></div>"), pc = /* @__PURE__ */ Y("<span class=\"theme-dock-check\">Current</span>"), mc = /* @__PURE__ */ Y("<button type=\"button\" role=\"menuitemradio\"><span> </span> <!></button>"), hc = /* @__PURE__ */ Y("<div class=\"theme-dock-menu\" role=\"menu\" aria-label=\"Theme picker\"></div>"), gc = /* @__PURE__ */ Y("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section> <!> <div class=\"theme-dock\"><!> <button class=\"theme-dock-toggle\" type=\"button\" aria-haspopup=\"menu\">Theme</button></div></div>");
})), vc = e((() => {})), yc = /* @__PURE__ */ t((() => {
	eo(), _c(), vc(), vi(sc, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default yc();
