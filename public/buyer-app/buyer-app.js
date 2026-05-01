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
})), b, x, S, ee, te, ne, re, ie, ae, oe, se, C, w, T, ce, le, E, ue, de, fe, pe, D = e((() => {
	b = 1024, x = 2048, S = 4096, ee = 8192, te = 16384, ne = 32768, re = 1 << 25, ie = 65536, ae = 1 << 18, oe = 1 << 19, se = 1 << 20, C = 1 << 25, w = 65536, T = 1 << 21, ce = 1 << 22, le = 1 << 23, E = Symbol("$state"), ue = Symbol("legacy props"), de = Symbol(""), fe = new class extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}(), pe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
}));
function me(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
var he = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ge() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function _e(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ve(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ye() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function be(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function xe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Se(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ce() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function we() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Te() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ee() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var O = e((() => {
	r(), he();
})), De, Oe, ke, Ae = e((() => {
	De = {}, Oe = Symbol(), ke = "http://www.w3.org/1999/xhtml";
}));
function je(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Me() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
var Ne = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
function Pe(e) {
	A = e;
}
function Fe(e) {
	if (e === null) throw je(), De;
	return j = e;
}
function Ie() {
	return Fe(/* @__PURE__ */ Dn(j));
}
function k(e) {
	if (A) {
		if (/* @__PURE__ */ Dn(j) !== null) throw je(), De;
		j = e;
	}
}
function Le(e = 1) {
	if (A) {
		for (var t = e, n = j; t--;) n = /* @__PURE__ */ Dn(n);
		j = n;
	}
}
function Re(e = !0) {
	for (var t = 0, n = j;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Dn(n);
		e && n.remove(), n = i;
	}
}
function ze(e) {
	if (!e || e.nodeType !== 8) throw je(), De;
	return e.data;
}
var A, j, M = e((() => {
	D(), Ae(), Ne(), Rn(), A = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Be(e) {
	return e === this.v;
}
function Ve(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function He(e) {
	return !Ve(e, this.v);
}
var Ue = e((() => {}));
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
function We() {
	Ke = !0;
}
var Ge, Ke, qe = e((() => {
	Ge = !1, Ke = !1;
})), Je = e((() => {
	y();
})), Ye = e((() => {
	Je(), D(), H(), J();
})), Xe = e((() => {
	r(), y(), he();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
function Ze(e) {
	N = e;
}
function Qe(e, t = !1, n) {
	N = {
		p: N,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l: Ke && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function $e(e) {
	var t = N, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Zn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, N = t.p, e ?? {};
}
function et() {
	return !Ke || N !== null && N.l === null;
}
var N, P = e((() => {
	r(), O(), J(), H(), qe(), D(), N = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function tt() {
	var e = it;
	it = [], a(e);
}
function nt(e) {
	if (it.length === 0 && !Nt) {
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
	y(), Vt(), it = [];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/error-handling.js
function ot(e) {
	var t = q;
	if (t === null) return K.f |= le, e;
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
	r(), Ae(), Rn(), D(), y(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function F(e, t) {
	e.f = e.f & ut | t;
}
function lt(e) {
	e.f & 512 || e.deps === null ? F(e, b) : F(e, S);
}
var ut, dt = e((() => {
	D(), ut = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function ft(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= w, ft(t.deps));
}
function pt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), ft(e.deps), F(e, b);
}
var mt = e((() => {
	D(), dt();
})), ht = e((() => {
	J(), y();
})), gt = e((() => {
	y(), ht();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
function _t(e) {
	var t = yt;
	try {
		return yt = !1, [e(), yt];
	} finally {
		yt = t;
	}
}
var vt, yt, bt = e((() => {
	ht(), gt(), y(), J(), H(), bn(), vt = !1, yt = !1;
})), xt = e((() => {
	D(), Je(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
function St(e) {
	var t = Nt;
	Nt = !0;
	try {
		var n;
		for (e && (I !== null && !I.is_fork && I.flush(), n = e());;) {
			if (rt(), I === null) return n;
			I.flush();
		}
	} finally {
		Nt = t;
	}
}
function Ct() {
	try {
		xe();
	} catch (e) {
		st(e, Mt);
	}
}
function wt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Or(r) && (Bt = /* @__PURE__ */ new Set(), Nr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && pr(r), Bt?.size > 0)) {
				vn.clear();
				for (let e of Bt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Bt.has(n) && (Bt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Nr(n);
					}
				}
				Bt.clear();
			}
		}
		Bt = null;
	}
}
function Tt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Tt(i, t, n, r) : e & 4194320 && !(e & 2048) && Et(i, t, r) && (F(i, x), Dt(i));
	}
}
function Et(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && Et(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Dt(e) {
	I.schedule(e);
}
function Ot(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), F(e, b);
		for (var n = e.first; n !== null;) Ot(n, t), n = n.next;
	}
}
function kt(e) {
	F(e, b);
	for (var t = e.first; t !== null;) kt(t), t = t.next;
}
var At, I, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt = e((() => {
	D(), qe(), y(), J(), O(), at(), r(), ct(), bn(), H(), mt(), Ae(), dt(), bt(), Xe(), xt(), At = /* @__PURE__ */ new Set(), I = null, jt = null, Mt = null, Nt = !1, Pt = !1, Ft = null, It = null, Lt = 0, Rt = 1, zt = class e {
		id = Rt++;
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
				for (var n of t.d) F(n, x), this.schedule(n);
				for (n of t.m) F(n, S), this.schedule(n);
			}
		}
		#m() {
			if (Lt++ > 1e3 && (At.delete(this), Ct()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), F(e, x), this.schedule(e);
				for (let e of this.#c) F(e, S), this.schedule(e);
			}
			let t = this.#a;
			this.#a = [], this.apply();
			var n = Ft = [], r = [], i = It = [];
			for (let e of t) try {
				this.#h(e, n, r);
			} catch (t) {
				throw kt(e), t;
			}
			if (I = null, i.length > 0) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (Ft = null, It = null, this.#f() || this.#p()) {
				this.#g(r), this.#g(n);
				for (let [e, t] of this.#l) Ot(e, t);
			} else {
				this.#n.size === 0 && At.delete(this), this.#s.clear(), this.#c.clear();
				for (let e of this.#e) e(this);
				this.#e.clear(), wt(r), wt(n), this.#i?.resolve();
			}
			var o = I;
			if (this.#a.length > 0) {
				let e = o ??= this;
				e.#a.push(...this.#a.filter((t) => !e.#a.includes(t)));
			}
			o !== null && (At.add(o), o.#m()), At.has(this) || this.#_();
		}
		#h(e, t, n) {
			e.f ^= b;
			for (var r = e.first; r !== null;) {
				var i = r.f, a = (i & 96) != 0;
				if (!(a && i & 1024 || i & 8192 || this.#l.has(r)) && r.fn !== null) {
					a ? r.f ^= b : i & 4 ? t.push(r) : Ge && i & 16777224 ? n.push(r) : Or(r) && (i & 16 && this.#c.add(r), Nr(r));
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
			for (var t = 0; t < e.length; t += 1) pt(e[t], this.#s, this.#c);
		}
		capture(e, t, n = !1) {
			t !== Oe && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), jt?.set(e, e.v));
		}
		activate() {
			I = this;
		}
		deactivate() {
			I = null, jt = null;
		}
		flush() {
			try {
				Pt = !0, I = this, this.#m();
			} finally {
				Lt = 0, Mt = null, Ft = null, It = null, Pt = !1, I = null, jt = null, vn.clear();
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear(), At.delete(this);
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		#_() {
			for (let l of At) {
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
					for (var o of t) Tt(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
					for (let e of this.#o) !(e.f & 155648) && Et(e, s, a) && (e.f & 4194320 ? (F(e, x), l.schedule(e)) : l.#s.add(e));
					if (l.#a.length > 0) {
						l.apply();
						for (var c of l.#a) l.#h(c, [], []);
						l.#a = [];
					}
					l.deactivate();
				}
			}
			for (let e of At) e.#d.has(this) && (e.#d.delete(this), e.#d.size === 0 && !e.#f() && (e.activate(), e.#m()));
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
			if (I === null) {
				let t = I = new e();
				Pt || (At.add(I), Nt || nt(() => {
					I === t && t.flush();
				}));
			}
			return I;
		}
		apply() {
			if (!Ge || !this.is_fork && At.size === 1) {
				jt = null;
				return;
			}
			jt = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) jt.set(e, t);
			for (let n of At) if (!(n === this || n.is_fork)) {
				var e = !1, t = !1;
				if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
				if (e && t) this.#d.add(n);
				else for (let [e, t] of n.previous) jt.has(e) || jt.set(e, t);
			}
		}
		schedule(e) {
			if (Mt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (Ft !== null && t === q && (Ge || (K === null || !(K.f & 2)) && !vt)) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= b;
				}
			}
			this.#a.push(t);
		}
	}, Bt = null;
}));
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ht(e) {
	let t = 0, n = dn(0), r;
	return () => {
		Jn() && (U(n), ir(() => (t === 0 && (r = W(() => e(() => hn(n)))), t += 1, () => {
			nt(() => {
				--t, t === 0 && (r?.(), r = void 0, hn(n));
			});
		})));
	};
}
var Ut = e((() => {
	J(), H(), bn(), Ye(), r(), at();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Wt(e, t, n, r) {
	new Kt(e, t, n, r);
}
var Gt, Kt, qt = e((() => {
	D(), Ae(), P(), ct(), H(), J(), M(), at(), O(), Ne(), r(), Vt(), bn(), Ye(), Ut(), Rn(), mt(), dt(), Gt = ie | oe, Kt = class {
		parent;
		is_pending = !1;
		transform_error;
		#e;
		#t = A ? j : null;
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
		#h = Ht(() => (this.#m = dn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = q;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = or(() => {
				if (A) {
					let e = this.#t;
					Ie();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Gt), A && (this.#e = j);
		}
		#g() {
			try {
				this.#a = sr(() => this.#r(this.#e));
			} catch (e) {
				this.error(e);
			}
		}
		#_(e) {
			let t = this.#n.failed;
			t && (this.#s = sr(() => {
				t(this.#e, () => e, () => () => {});
			}));
		}
		#v() {
			let e = this.#n.pending;
			e && (this.is_pending = !0, this.#o = sr(() => e(this.#e)), nt(() => {
				var e = this.#c = document.createDocumentFragment(), t = Tn();
				e.append(t), this.#a = this.#x(() => sr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, mr(this.#o, () => {
					this.#o = null;
				}), this.#b(I));
			}));
		}
		#y() {
			try {
				if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = sr(() => {
					this.#r(this.#e);
				}), this.#u > 0) {
					var e = this.#c = document.createDocumentFragment();
					vr(this.#a, e);
					let t = this.#n.pending;
					this.#o = sr(() => t(this.#e));
				} else this.#b(I);
			} catch (e) {
				this.error(e);
			}
		}
		#b(e) {
			this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
		}
		defer_effect(e) {
			pt(e, this.#f, this.#p);
		}
		is_rendered() {
			return !this.is_pending && (!this.parent || this.parent.is_rendered());
		}
		has_pending_snippet() {
			return !!this.#n.pending;
		}
		#x(e) {
			var t = q, n = K, r = N;
			Cr(this.#i), Sr(this.#i), Ze(this.#i.ctx);
			try {
				return zt.ensure(), e();
			} catch (e) {
				return ot(e), null;
			} finally {
				Cr(t), Sr(n), Ze(r);
			}
		}
		#S(e, t) {
			if (!this.has_pending_snippet()) {
				this.parent && this.parent.#S(e, t);
				return;
			}
			this.#u += e, this.#u === 0 && (this.#b(t), this.#o && mr(this.#o, () => {
				this.#o = null;
			}), this.#c &&= (this.#e.before(this.#c), null));
		}
		update_pending_count(e, t) {
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, nt(() => {
				this.#d = !1, this.#m && pn(this.#m, this.#l);
			}));
		}
		get_effect_pending() {
			return this.#h(), U(this.#m);
		}
		error(e) {
			var t = this.#n.onerror;
			let n = this.#n.failed;
			if (!t && !n) throw e;
			this.#a &&= (dr(this.#a), null), this.#o &&= (dr(this.#o), null), this.#s &&= (dr(this.#s), null), A && (Fe(this.#t), Le(), Fe(Re()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Me();
					return;
				}
				r = !0, i && Ee(), this.#s !== null && mr(this.#s, () => {
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
						return sr(() => {
							var t = q;
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
function Jt(e, t, n, r) {
	let i = et() ? $t : nn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = q, s = Yt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || st(e, o);
		}
		Xt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Zt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ en(e))).then((e) => l([...t.map(i), ...e])).catch((e) => st(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), Xt();
	}) : d();
}
function Yt() {
	var e = q, t = K, n = N, r = I;
	return function(i = !0) {
		Cr(e), Sr(t), Ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Xt(e = !0) {
	Cr(null), Sr(null), Ze(null), e && I?.deactivate();
}
function Zt() {
	var e = q, t = e.b, n = I, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var Qt = e((() => {
	D(), r(), P(), qt(), ct(), J(), Vt(), un(), H();
}));
/* @__NO_SIDE_EFFECTS__ */
function $t(e) {
	var t = 2 | x, n = K !== null && K.f & 2 ? K : null;
	return q !== null && (q.f |= oe), {
		ctx: N,
		deps: null,
		effects: null,
		equals: Be,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: Oe,
		wv: 0,
		parent: n ?? q,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function en(e, t, n) {
	let r = q;
	r === null && ge();
	var i = void 0, a = dn(Oe), s = !K, c = /* @__PURE__ */ new Map();
	return rr(() => {
		var t = q, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(Xt);
		} catch (e) {
			n.reject(e), Xt();
		}
		var l = I;
		if (s) {
			if (t.f & 32768) var u = Zt();
			if (r.b.is_rendered()) c.get(l)?.reject(fe), c.delete(l);
			else {
				for (let e of c.values()) e.reject(fe);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === fe), !(n === fe || t.f & 16384)) {
				if (l.activate(), n) a.f |= le, pn(a, n);
				else {
					a.f & 8388608 && (a.f ^= le), pn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(fe);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Yn(() => {
		for (let e of c.values()) e.reject(fe);
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
function tn(e) {
	let t = /* @__PURE__ */ $t(e);
	return Ge || wr(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function nn(e) {
	let t = /* @__PURE__ */ $t(e);
	return t.equals = He, t;
}
function rn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) dr(t[n]);
	}
}
function an(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function on(e) {
	var t, n = q;
	Cr(an(e));
	try {
		e.f &= ~w, rn(e), t = Ar(e);
	} finally {
		Cr(n);
	}
	return t;
}
function sn(e) {
	var t = e.v, n = on(e);
	if (!e.equals(n) && (e.wv = Dr(), (!I?.is_fork || e.deps === null) && (e.v = n, I?.capture(e, t, !0), e.deps === null))) {
		F(e, b);
		return;
	}
	zr || (jt === null ? lt(e) : (Jn() || I?.is_fork) && jt.set(e, n));
}
function cn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(fe), t.teardown = v, t.ac = null, Mr(t, 0), lr(t));
}
function ln(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Nr(t);
}
var un = e((() => {
	r(), D(), J(), Ue(), O(), Ne(), H(), bn(), Xe(), qe(), P(), Ae(), Vt(), Qt(), y(), dt();
}));
function dn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Be,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function fn(e, t) {
	let n = dn(e, t);
	return wr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function L(e, t = !1, n = !0) {
	let r = dn(e);
	return t || (r.equals = He), Ke && n && N !== null && N.l !== null && (N.l.s ??= []).push(r), r;
}
function R(e, t, n = !1) {
	return K !== null && (!Br || K.f & 131072) && et() && K.f & 4325394 && (Vr === null || !l.call(Vr, e)) && Te(), pn(e, n ? xn(t) : t, It);
}
function pn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		zr ? vn.set(e, t) : vn.set(e, r), e.v = t;
		var i = zt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && on(t), jt === null && lt(t);
		}
		e.wv = Dr(), gn(e, x, n), et() && q !== null && q.f & 1024 && !(q.f & 96) && (Wr === null ? Tr([e]) : Wr.push(e)), !i.is_fork && _n.size > 0 && !yn && mn();
	}
	return t;
}
function mn() {
	yn = !1;
	for (let e of _n) e.f & 1024 && F(e, S), Or(e) && Nr(e);
	_n.clear();
}
function hn(e) {
	R(e, e.v + 1);
}
function gn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = et(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && F(s, t), c & 2) {
				var u = s;
				jt?.delete(u), c & 65536 || (c & 512 && (s.f |= w), gn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Bt !== null && Bt.add(d), n === null ? Dt(d) : n.push(d);
			}
		}
	}
}
var _n, vn, yn, bn = e((() => {
	r(), J(), Ue(), D(), O(), qe(), y(), Ye(), Xe(), P(), Vt(), Sn(), un(), dt(), _n = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Map(), yn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function xn(e) {
	if (typeof e != "object" || !e || E in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ fn(0), a = null, o = qr, c = (e) => {
		if (qr === o) return e();
		var t = K, n = qr;
		Sr(null), Er(o);
		var r = e();
		return Sr(t), Er(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ fn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ce();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ fn(r.value, a);
				return n.set(t, e), e;
			}) : R(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ fn(Oe, a));
					n.set(t, e), hn(i);
				}
			} else R(r, Oe), hn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === E) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ fn(xn(s ? t[r] : Oe), a)), n.set(r, o)), o !== void 0) {
				var l = U(o);
				return l === Oe ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = U(i));
			} else if (r === void 0) {
				var a = n.get(t), o = a?.v;
				if (a !== void 0 && o !== Oe) return {
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
			var r = n.get(t), i = r !== void 0 && r.v !== Oe || Reflect.has(e, t);
			return (r !== void 0 || q !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ fn(i ? xn(e[t]) : Oe, a)), n.set(t, r)), U(r) === Oe) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ fn(Oe, a)), n.set(d + "", p)) : R(p, Oe);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ fn(void 0, a)), R(l, xn(o)), n.set(t, l));
			else {
				u = l.v !== Oe;
				var m = c(() => xn(o));
				R(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && R(g, _ + 1);
				}
				hn(i);
			}
			return !0;
		},
		ownKeys(e) {
			U(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== Oe;
			});
			for (var [r, a] of n) a.v !== Oe && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			we();
		}
	});
}
var Sn = e((() => {
	r(), J(), y(), bn(), D(), Ae(), O(), Ye(), Xe(), qe(), new Set([
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
})), Cn = e((() => {
	Ne(), Sn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/operations.js
function wn() {
	if (Nn === void 0) {
		Nn = window, Pn = document, Fn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		In = f(t, "firstChild").get, Ln = f(t, "nextSibling").get, _(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _(n) && (n.__t = void 0);
	}
}
function Tn(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function En(e) {
	return In.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Dn(e) {
	return Ln.call(e);
}
function z(e, t) {
	if (!A) return /* @__PURE__ */ En(e);
	var n = /* @__PURE__ */ En(j);
	if (n === null) n = j.appendChild(Tn());
	else if (t && n.nodeType !== 3) {
		var r = Tn();
		return n?.before(r), Fe(r), r;
	}
	return t && Mn(n), Fe(n), n;
}
function On(e, t = !1) {
	if (!A) {
		var n = /* @__PURE__ */ En(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Dn(n) : n;
	}
	if (t) {
		if (j?.nodeType !== 3) {
			var r = Tn();
			return j?.before(r), Fe(r), r;
		}
		Mn(j);
	}
	return j;
}
function B(e, t = 1, n = !1) {
	let r = A ? j : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Dn(r);
	if (!A) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Tn();
			return r === null ? i?.after(a) : r.before(a), Fe(a), a;
		}
		Mn(r);
	}
	return Fe(r), r;
}
function kn(e) {
	e.textContent = "";
}
function An() {
	return !Ge || Bt !== null ? !1 : (q.f & ne) !== 0;
}
function jn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Mn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var Nn, Pn, Fn, In, Ln, Rn = e((() => {
	M(), r(), Cn(), y(), J(), qe(), D(), Vt(), Ae();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function zn(e) {
	A && /* @__PURE__ */ En(e) !== null && kn(e);
}
function Bn() {
	Vn || (Vn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Vn, Hn = e((() => {
	M(), Rn(), at(), Vn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Un(e) {
	var t = K, n = q;
	Sr(null), Cr(null);
	try {
		return e();
	} finally {
		Sr(t), Cr(n);
	}
}
var Wn = e((() => {
	H(), J(), Hn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Gn(e) {
	q === null && (K === null && be(e), ye()), zr && ve(e);
}
function Kn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function qn(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: N,
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
	I?.register_created_effect(r);
	var i = r;
	if (e & 4) Ft === null ? zt.ensure().schedule(r) : Ft.push(r);
	else if (t !== null) {
		try {
			Nr(r);
		} catch (e) {
			throw dr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ie));
	}
	if (i !== null && (i.parent = n, n !== null && Kn(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Jn() {
	return K !== null && !Br;
}
function Yn(e) {
	let t = qn(8, null);
	return F(t, b), t.teardown = e, t;
}
function Xn(e) {
	Gn("$effect");
	var t = q.f;
	if (!K && t & 32 && !(t & 32768)) {
		var n = N;
		(n.e ??= []).push(e);
	} else return Zn(e);
}
function Zn(e) {
	return qn(4 | se, e);
}
function Qn(e) {
	return Gn("$effect.pre"), qn(8 | se, e);
}
function $n(e) {
	zt.ensure();
	let t = qn(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? mr(t, () => {
			dr(t), n(void 0);
		}) : (dr(t), n(void 0));
	});
}
function er(e) {
	return qn(4, e);
}
function tr(e, t) {
	var n = N, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = ir(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = q;
			try {
				Cr(n.parent), W(t);
			} finally {
				Cr(n);
			}
		}
	});
}
function nr() {
	var e = N;
	ir(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && F(n, S), Or(n) && Nr(n), t.ran = !1;
		}
	});
}
function rr(e) {
	return qn(ce | oe, e);
}
function ir(e, t = 0) {
	return qn(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	Jt(r, t, n, (t) => {
		qn(8, () => e(...t.map(U)));
	});
}
function ar(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = Zt();
	Jt(r, t, n, (t) => {
		qn(4, () => e(...t.map(U))), i && i();
	});
}
function or(e, t = 0) {
	return qn(16 | t, e);
}
function sr(e) {
	return qn(32 | oe, e);
}
function cr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = zr, n = K;
		xr(!0), Sr(null);
		try {
			t.call(null);
		} finally {
			xr(e), Sr(n);
		}
	}
}
function lr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Un(() => {
			e.abort(fe);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : dr(n, t), n = r;
	}
}
function ur(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || dr(t), t = n;
	}
}
function dr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (fr(e.nodes.start, e.nodes.end), n = !0), F(e, re), lr(e, t && !n), Mr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	cr(e), e.f ^= re, e.f |= te;
	var i = e.parent;
	i !== null && i.first !== null && pr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function fr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Dn(e);
		e.remove(), e = n;
	}
}
function pr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function mr(e, t, n = !0) {
	var r = [];
	hr(e, r, !0);
	var i = () => {
		n && dr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function hr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			hr(i, t, o ? n : !1), i = a;
		}
	}
}
function gr(e) {
	_r(e, !0);
}
function _r(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (F(e, x), zt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			_r(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function vr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Dn(n);
		t.append(n), n = i;
	}
}
var H = e((() => {
	J(), D(), O(), r(), y(), Rn(), P(), Vt(), Qt(), Wn(), dt();
})), yr, br = e((() => {
	bn(), J(), yr = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
function xr(e) {
	zr = e;
}
function Sr(e) {
	K = e;
}
function Cr(e) {
	q = e;
}
function wr(e) {
	K !== null && (!Ge || K.f & 2) && (Vr === null ? Vr = [e] : Vr.push(e));
}
function Tr(e) {
	Wr = e;
}
function Er(e) {
	qr = e;
}
function Dr() {
	return ++Gr;
}
function Or(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~w), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Or(a) && sn(a), a.wv > e.wv) return !0;
		}
		t & 512 && jt === null && F(e, b);
	}
	return !1;
}
function kr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ge && Vr !== null && l.call(Vr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? kr(a, t, !1) : t === a && (n ? F(a, x) : a.f & 1024 && F(a, S), Dt(a));
	}
}
function Ar(e) {
	var t = Hr, n = Ur, r = Wr, i = K, a = Vr, o = N, s = Br, c = qr, l = e.f;
	Hr = null, Ur = 0, Wr = null, K = l & 96 ? null : e, Vr = null, Ze(e.ctx), Br = !1, qr = ++Kr, e.ac !== null && (Un(() => {
		e.ac.abort(fe);
	}), e.ac = null);
	try {
		e.f |= T;
		var u = e.fn, d = u();
		e.f |= ne;
		var f = e.deps, p = I?.is_fork;
		if (Hr !== null) {
			var m;
			if (p || Mr(e, Ur), f !== null && Ur > 0) for (f.length = Ur + Hr.length, m = 0; m < Hr.length; m++) f[Ur + m] = Hr[m];
			else e.deps = f = Hr;
			if (Jn() && e.f & 512) for (m = Ur; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Ur < f.length && (Mr(e, Ur), f.length = Ur);
		if (et() && Wr !== null && !Br && f !== null && !(e.f & 6146)) for (m = 0; m < Wr.length; m++) kr(Wr[m], e);
		if (i !== null && i !== e) {
			if (Kr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Kr;
			if (t !== null) for (let e of t) e.rv = Kr;
			Wr !== null && (r === null ? r = Wr : r.push(...Wr));
		}
		return e.f & 8388608 && (e.f ^= le), d;
	} catch (e) {
		return ot(e);
	} finally {
		e.f ^= T, Hr = t, Ur = n, Wr = r, K = i, Vr = a, Ze(o), Br = s, qr = c;
	}
}
function jr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = c.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Hr === null || !l.call(Hr, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~w), lt(a), cn(a), Mr(a, 0);
	}
}
function Mr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) jr(e, n[r]);
}
function Nr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		F(e, b);
		var n = q, r = Rr;
		q = e, Rr = !0;
		try {
			t & 16777232 ? ur(e) : lr(e), cr(e);
			var i = Ar(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Gr;
		} finally {
			Rr = r, q = n;
		}
	}
}
async function Pr() {
	if (Ge) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), St();
}
function U(e) {
	var t = (e.f & 2) != 0;
	if (yr?.add(e), K !== null && !Br && !(q !== null && q.f & 16384) && (Vr === null || !l.call(Vr, e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Kr && (e.rv = Kr, Hr === null && n !== null && n[Ur] === e ? Ur++ : Hr === null ? Hr = [e] : Hr.push(e));
		else {
			(K.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : l.call(r, K) || r.push(K);
		}
	}
	if (zr && vn.has(e)) return vn.get(e);
	if (t) {
		var i = e;
		if (zr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Ir(i)) && (a = on(i)), vn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Br && K !== null && (Rr || (K.f & 512) != 0), s = (i.f & ne) === 0;
		Or(i) && (o && (i.f |= 512), sn(i)), o && !s && (ln(i), Fr(i));
	}
	if (jt?.has(e)) return jt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Fr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ln(t), Fr(t));
}
function Ir(e) {
	if (e.v === Oe) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (vn.has(t) || t.f & 2 && Ir(t)) return !0;
	return !1;
}
function W(e) {
	var t = Br;
	try {
		return Br = !0, e();
	} finally {
		Br = t;
	}
}
function G(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (E in e) Lr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && E in n && Lr(n);
		}
	}
}
function Lr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Lr(e[n], t);
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
var Rr, zr, K, Br, q, Vr, Hr, Ur, Wr, Gr, Kr, qr, J = e((() => {
	r(), y(), H(), D(), bn(), un(), qe(), Ye(), Xe(), P(), Vt(), ct(), Ae(), br(), Wn(), dt(), Ne(), Rr = !1, zr = !1, K = null, Br = !1, q = null, Vr = null, Hr = null, Ur = 0, Wr = null, Gr = 1, Kr = 0, qr = Kr;
})), Jr = e((() => {
	Ya(), eo(), H();
}));
//#endregion
//#region node_modules/svelte/src/utils.js
function Yr(e) {
	return Zr.includes(e);
}
var Xr, Zr, Qr, $r = e((() => {
	Xr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), [...Xr], Zr = ["touchstart", "touchmove"], Qr = [
		"$state",
		"$state.raw",
		"$derived",
		"$derived.by"
	], [...Qr];
})), ei = e((() => {
	D(), $r(), J();
})), ti = e((() => {
	D(), M(), P();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function ni(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ri.call(t, e), !e.cancelBubble) return Un(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Y(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = ni(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Yn(() => {
		t.removeEventListener(e, o, a);
	});
}
function ri(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	si = e;
	var o = 0, s = si === e && e[ii];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[ii] = t;
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
		var u = K, f = q;
		Sr(null), Cr(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[ii]?.[r];
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
			e[ii] = t, delete e.currentTarget, Sr(u), Cr(f);
		}
	}
}
var ii, ai, oi, si, ci = e((() => {
	H(), y(), M(), at(), J(), Wn(), ii = Symbol("events"), ai = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), si = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function li(e) {
	return di?.createHTML(e) ?? e;
}
function ui(e) {
	var t = jn("template");
	return t.innerHTML = li(e.replaceAll("<!>", "<!---->")), t.content;
}
var di, fi = e((() => {
	Rn(), di = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function pi(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function X(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (A) return pi(j, null), j;
		i === void 0 && (i = ui(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ En(i)));
		var t = r || Fn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ En(t), s = t.lastChild;
			pi(o, s);
		} else pi(t, t);
		return t;
	};
}
function mi(e = "") {
	if (!A) {
		var t = Tn(e + "");
		return pi(t, t), t;
	}
	var n = j;
	return n.nodeType === 3 ? Mn(n) : (n.before(n = Tn()), Fe(n)), pi(n, n), n;
}
function hi() {
	if (A) return pi(j, null), j;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
	return e.append(t, n), pi(t, n), e;
}
function Z(e, t) {
	if (A) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = j), Ie();
		return;
	}
	e !== null && e.before(t);
}
var gi = e((() => {
	M(), Rn(), fi(), J(), Ae(), D();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
function Q(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function _i(e, t) {
	return vi(e, t);
}
function vi(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	wn();
	var c = void 0, l = $n(() => {
		var l = n ?? t.appendChild(Tn());
		Wt(l, { pending: () => {} }, (t) => {
			Qe({});
			var n = N;
			if (a && (n.c = a), i && (r.$$events = i), A && pi(t, null), yi = o, c = e(t, r) || {}, yi = !0, A && (q.nodes.end = j, j === null || j.nodeType !== 8 || j.data !== "]")) throw je(), De;
			$e();
		}, s);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = Yr(r);
					for (let e of [t, document]) {
						var a = bi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), bi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ri, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(u(ai)), oi.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = bi.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, ri), r.delete(e), r.size === 0 && bi.delete(n)) : r.set(e, i);
			}
			oi.delete(f), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return xi.set(c, l), c;
}
var yi, bi, xi, Si = e((() => {
	r(), Rn(), Ae(), J(), P(), H(), M(), y(), ci(), Ne(), O(), gi(), $r(), D(), qt(), bi = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new WeakMap();
})), Ci = e((() => {
	D(), M(), H(), bn(), Si(), J();
})), wi = e((() => {
	y(), D(), P(), $r();
})), Ti = e((() => {
	O(), P();
})), Ei = e((() => {
	Je(), H(), J(), Xe();
})), Di = e((() => {
	Qt(), J(), M();
})), Oi = e((() => {
	O();
})), ki, Ai = e((() => {
	Vt(), H(), M(), Rn(), ki = class {
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
				if (n) gr(n), this.#r.delete(t);
				else {
					var r = this.#n.get(t);
					r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
				}
				for (let [t, n] of this.#e) {
					if (this.#e.delete(t), t === e) break;
					let r = this.#n.get(n);
					r && (dr(r.effect), this.#n.delete(n));
				}
				for (let [e, r] of this.#t) {
					if (e === t || this.#r.has(e)) continue;
					let i = () => {
						if (Array.from(this.#e.values()).includes(e)) {
							var t = document.createDocumentFragment();
							vr(r, t), t.append(Tn()), this.#n.set(e, {
								effect: r,
								fragment: t
							});
						} else dr(r);
						this.#r.delete(e), this.#t.delete(e);
					};
					this.#i || !n ? (this.#r.add(e), mr(r, i, !1)) : i();
				}
			}
		};
		#o = (e) => {
			this.#e.delete(e);
			let t = Array.from(this.#e.values());
			for (let [e, n] of this.#n) t.includes(e) || (dr(n.effect), this.#n.delete(e));
		};
		ensure(e, t) {
			var n = I, r = An();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = Tn();
				i.append(a), this.#n.set(e, {
					effect: sr(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, sr(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else A && (this.anchor = j), this.#a(n);
		}
	};
})), ji = e((() => {
	y(), H(), bn(), M(), at(), P(), Vt(), Ai(), Qt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Mi(e, t, n = !1) {
	var r;
	A && (r = j, Ie());
	var i = new ki(e), a = n ? ie : 0;
	function o(e, t) {
		if (A) {
			var n = ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Re();
				Fe(a), i.anchor = a, Pe(!1), i.ensure(e, t), Pe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	or(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Ni = e((() => {
	D(), M(), H(), Ai();
})), Pi = e((() => {
	P(), H(), M(), Ai();
})), Fi = e((() => {
	H(), M(), Rn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ii(e, t) {
	return t;
}
function Li(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		mr(n, () => {
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
			kn(d), d.append(l), e.items.clear();
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
		r?.has(a) ? (a.f |= C, vr(a, document.createDocumentFragment())) : dr(t[i], n);
	}
}
function zi(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = A ? Fe(/* @__PURE__ */ En(l)) : l.appendChild(Tn());
	}
	A && Ie();
	var d = null, f = /* @__PURE__ */ nn(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Vi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= C, Ui(d, null, o)) : gr(d) : mr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: or(() => {
			p = U(f);
			var e = p.length;
			let s = !1;
			A && ze(o) === "[!" != (e === 0) && (o = Re(), Fe(o), Pe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = I, v = An(), y = 0; y < e; y += 1) {
				A && j.nodeType === 8 && j.data === "]" && (o = j, s = !0, Pe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && pn(S.v, b), S.i && pn(S.i, y), v && u.unskip_effect(S.e)) : (S = Hi(c, h ? o : Gi ??= Tn(), b, x, y, i, t, n), h || (S.e.f |= C), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = sr(() => a(o)) : (d = sr(() => a(Gi ??= Tn())), d.f |= C)), e > l.size && _e("", "", ""), A && e > 0 && Fe(Re()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			s && Pe(!0), U(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, A && (o = j);
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
		if (_.f & 8192 && (gr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= C, _ === c) Ui(_, null, n);
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
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Ui(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					Wi(e, S.prev, ee.next), Wi(e, d, S), Wi(e, ee, b), c = b, d = ee, --v, p = [], m = [];
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
		var te = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || te.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && te.push(c), c = Bi(c.next);
		var ne = te.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
			}
			Li(e, te, re);
		}
	}
	a && nt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Hi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? dn(n) : /* @__PURE__ */ L(n, !1, !1) : null, l = o & 2 ? dn(i) : null;
	return {
		v: c,
		i: l,
		e: sr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ui(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Dn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Wi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var Gi, Ki = e((() => {
	Ae(), M(), Rn(), H(), bn(), y(), D(), at(), J(), r(), un(), Vt(), O();
})), qi = e((() => {
	H(), M(), gi(), $r(), P(), Rn(), J(), D();
})), Ji = e((() => {
	M();
})), Yi = e((() => {
	$r();
})), Xi = e((() => {
	D(), H(), P(), M(), fi(), gi(), O(), Rn(), Yi(), Ai();
})), Zi = e((() => {
	D(), H(), M(), Ai();
})), Qi = e((() => {
	y();
})), $i = e((() => {
	Qi();
})), ea = e((() => {
	y(), H(), J(), $i(), Si(), D(), at(), Wn();
})), ta = e((() => {
	M(), Rn(), H(), Si(), J(), P(), D(), gi(), $r(), Ai(), ea();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function na(e, t) {
	let n = null, r = A;
	var i;
	if (A) {
		n = j;
		for (var a = /* @__PURE__ */ En(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Dn(a);
		if (a === null) Pe(!1);
		else {
			var o = /* @__PURE__ */ Dn(a);
			a.remove(), Fe(o);
		}
	}
	A || (i = document.head.appendChild(Tn()));
	try {
		or(() => t(i), ae | oe);
	} finally {
		r && (Pe(!0), Fe(n));
	}
}
var ra = e((() => {
	M(), Rn(), H(), D();
})), ia = e((() => {
	H(), Rn();
})), aa = e((() => {
	H(), J();
})), oa = e((() => {
	H();
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
	if (A || o !== n || o === void 0) {
		var s = sa(n, r, a);
		(!A || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
var da = e((() => {
	la(), M();
})), fa = e((() => {
	la(), M();
})), pa = e((() => {
	H(), Wn(), Sn(), y(), Vt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function ma(e) {
	if (A) {
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
		e.__on_r = n, nt(n), Bn();
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
	A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Sa) || i[t] !== (i[t] = n) && (t === "loading" && (e[de] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ya(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function va(e) {
	return e.__attributes ??= {
		[ba]: e.nodeName.includes("-"),
		[xa]: e.namespaceURI === ke
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
	r(), M(), y(), ci(), Hn(), Ne(), D(), at(), $r(), J(), oa(), la(), da(), fa(), Ae(), H(), pa(), Qt(), ba = Symbol("is custom element"), xa = Symbol("is html"), Sa = pe ? "link" : "LINK", Ca = pe ? "progress" : "PROGRESS", wa = /* @__PURE__ */ new Map();
})), Ea = e((() => {
	M(), Rn(), fi(), oa();
})), Da = e((() => {
	Wn();
})), Oa = e((() => {
	H(), Wn(), O(), Sn(), at(), M(), J(), P(), Vt();
})), ka = e((() => {
	H(), Wn();
})), Aa = e((() => {
	Wn();
})), ja = e((() => {
	H(), y();
})), Ma = e((() => {
	H(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Na(e, t) {
	return e === t || e?.[E] === t;
}
function Pa(e = {}, t, n, r) {
	var i = N.r, a = q;
	return er(() => {
		var o, s;
		return ir(() => {
			o = s, s = r?.() || [], W(() => {
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
	D(), P(), H(), J();
})), Ia = e((() => {
	H(), Wn();
})), La = e((() => {
	H(), Wn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function Ra(e) {
	return function(...t) {
		return t[0].preventDefault(), e?.apply(this, t);
	};
}
var za = e((() => {
	y(), H(), ci();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ba(e = !1) {
	let t = N, n = t.l.u;
	if (!n) return;
	let r = () => G(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ $t(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => U(i);
	}
	n.b.length && Qn(() => {
		Va(t, r), a(n.b);
	}), Xn(() => {
		let e = W(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Xn(() => {
		Va(t, r), a(n.a);
	});
}
function Va(e, t) {
	if (e.l.s) for (let t of e.l.s) U(t);
	t();
}
var Ha = e((() => {
	y(), P(), un(), H(), J();
})), Ua = e((() => {
	bn(), J(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !Ke || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? W(r) : r), s);
	let u;
	if (a) {
		var d = E in e || ue in e;
		u = f(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = _t(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = l(), u && (i && Se(t), u(p)));
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
	var _ = !1, v = (n & 1 ? $t : nn)(() => (_ = !1, h()));
	a && U(v);
	var y = q;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? U(v) : i && a ? xn(e) : e;
			return R(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return zr && _ || y.f & 16384 ? v.v : U(v);
	});
}
var Wa = e((() => {
	r(), Ae(), y(), bn(), un(), J(), O(), D(), Sn(), bt(), qe(), H();
})), Ga = e((() => {
	P(), H(), bt(), Qt();
})), Ka = e((() => {
	D(), H(), bn(), Si(), J(), Vt(), y(), O(), P(), qe(), dt(), za();
})), qa = e((() => {
	Ka(), H(), gi(), y(), Rn();
})), Ja = e((() => {
	D(), Je(), J();
})), Ya = e((() => {
	Jr(), P(), ei(), ti(), Ci(), wi(), Ti(), Ye(), Ei(), Di(), Oi(), ji(), Ni(), Pi(), Fi(), Ki(), qi(), Ji(), Xi(), Zi(), ta(), ra(), ia(), aa(), oa(), Ta(), da(), ci(), Hn(), Ea(), fa(), ea(), Da(), Oa(), ka(), Aa(), ja(), pa(), Ma(), Fa(), Ia(), La(), M(), za(), Ha(), Ua(), gi(), Qt(), Vt(), un(), H(), bn(), Wa(), bt(), qt(), br(), Si(), J(), Ga(), Qi(), Sn(), qa(), Rn(), la(), Je(), y(), Yi(), Cn(), Ja(), ct();
})), Xa = e((() => {
	M(), O();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function Za(e) {
	N === null && me("onMount"), Ke && N.l !== null ? $a(N).m.push(e) : Xn(() => {
		let t = W(e);
		if (typeof t == "function") return t;
	});
}
function Qa(e) {
	N === null && me("onDestroy"), Za(() => () => W(e));
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
	J(), y(), Ya(), O(), qe(), P(), r(), Vt(), Xa(), Si(), Xi();
})), to = e((() => {})), no = e((() => {
	to(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), ro = e((() => {
	qe(), We();
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
	Qe(t, !1);
	let n = /* @__PURE__ */ L(), r = /* @__PURE__ */ L(), i = $(t, "appMode", 8), a = $(t, "currentPage", 8), o = $(t, "onLogout", 8), s = {
		admin: "Admin Workspace",
		seller: "Seller Workspace",
		buyer: "Buyer Workspace"
	};
	tr(() => G(i()), () => {
		R(n, So[i()] || So.buyer);
	}), tr(() => (G(i()), G(a())), () => {
		R(r, po(i(), a()));
	}), nr(), Ba();
	var c = Eo(), l = z(c), u = z(l), d = z(u, !0);
	k(u), Le(2), k(l);
	var f = B(l, 2), p = z(f);
	zi(p, 1, () => U(n), Ii, (e, t) => {
		var n = To(), r = z(n, !0);
		k(n), V(() => {
			_a(n, "href", (U(t), W(() => U(t).href))), Q(r, (U(t), W(() => U(t).label)));
		}), Z(e, n);
	});
	var m = B(p, 2), h = B(m, 2);
	k(f), k(c), V(() => {
		Q(d, (G(i()), W(() => s[i()] || s.buyer))), _a(m, "href", U(r));
	}), Y("click", h, function(...e) {
		o()?.apply(this, e);
	}), Z(e, c), $e();
}
var To, Eo, Do = e((() => {
	no(), ro(), Ya(), Co(), To = /* @__PURE__ */ X("<a class=\"action-link\"> </a>"), Eo = /* @__PURE__ */ X("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function Oo(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = ko(), o = z(a), s = z(o), c = z(s, !0);
	k(s);
	var l = B(s, 2), u = z(l, !0);
	k(l), k(o);
	var d = B(o, 2);
	k(a), V(() => {
		Q(c, n()), Q(u, r());
	}), Y("click", d, function(...e) {
		i()?.apply(this, e);
	}), Z(e, a);
}
var ko, Ao = e((() => {
	no(), ro(), Ya(), ko = /* @__PURE__ */ X("<div class=\"catalog-header\"><div><p class=\"section-kicker\"> </p> <h2> </h2></div> <button class=\"refresh-button\">Refresh</button></div>");
}));
//#endregion
//#region frontend/src/components/AdminAuditView.svelte
function jo(e, t) {
	Qe(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Ba();
	var a = hi(), o = On(a), s = (e) => {
		Z(e, Mo());
	}, c = (e) => {
		var t = Po(), a = B(z(t), 2);
		zi(a, 5, n, Ii, (e, t) => {
			var n = No(), a = z(n), o = z(a, !0);
			k(a);
			var s = B(a, 2), c = z(s, !0);
			k(s);
			var l = B(s, 2), u = z(l, !0);
			k(l);
			var d = B(l, 2), f = z(d, !0);
			k(d), k(n), V((e, n) => {
				Q(o, e), Q(c, (U(t), W(() => U(t).username))), Q(u, n), Q(f, (U(t), W(() => U(t).details)));
			}, [() => (G(i()), U(t), W(() => i()(U(t).createdAt))), () => (G(r()), U(t), W(() => r()(U(t).actionType)))]), Z(e, n);
		}), k(a), k(t), Z(e, t);
	};
	Mi(o, (e) => {
		G(n()), W(() => n().length === 0) ? e(s) : e(c, -1);
	}), Z(e, a), $e();
}
var Mo, No, Po, Fo = e((() => {
	no(), ro(), Ya(), Mo = /* @__PURE__ */ X("<div class=\"state-card\">No audit log entries yet.</div>"), No = /* @__PURE__ */ X("<article class=\"admin-audit-row\"><p class=\"seller admin-audit-when\"> </p> <p class=\"admin-audit-user\"> </p> <p class=\"admin-audit-action\"> </p> <p class=\"admin-audit-details\"> </p></article>"), Po = /* @__PURE__ */ X("<div class=\"panel admin-box\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent actions</p> <h3>Recorded system activity</h3></div></div> <div class=\"admin-audit-list\"></div></div>");
}));
//#endregion
//#region frontend/src/components/AdminHomeView.svelte
function Io(e) {
	Z(e, Lo());
}
var Lo, Ro = e((() => {
	no(), ro(), Ya(), Lo = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--two\"><article class=\"admin-region admin-region--products\"><p class=\"section-kicker\">Moderation</p> <h3>User and listing review</h3> <p class=\"detail-description\">Review pending registrations, approve or reject seller listings, and handle active account status changes.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/sub\">User management</a></div></article> <article class=\"admin-region\"><p class=\"section-kicker\">Audit</p> <h3>Recent platform activity</h3> <p class=\"detail-description\">Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/audit\">Open audit log</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/AdminModerationView.svelte
function zo(e, t) {
	Qe(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Ba();
	var x = Qo(), S = z(x), ee = z(S), te = B(z(ee), 2), ne = z(te, !0);
	k(te), k(ee);
	var re = B(ee, 2), ie = (e) => {
		Z(e, Bo());
	}, ae = (e) => {
		var t = Ho(), r = z(t), i = B(z(r));
		zi(i, 5, n, Ii, (e, t) => {
			var n = Vo(), r = z(n), i = z(r, !0);
			k(r);
			var a = B(r), o = z(a, !0);
			k(a);
			var s = B(a), u = z(s, !0);
			k(s);
			var d = B(s), f = z(d, !0);
			k(d);
			var p = B(d), m = z(p), h = z(m), g = B(h, 2);
			k(m), k(p), k(n), V((e, n) => {
				Q(i, (U(t), W(() => U(t).username))), Q(o, e), Q(u, (U(t), W(() => U(t).email))), Q(f, n);
			}, [() => (G(_()), U(t), W(() => _()(U(t).role))), () => (G(y()), U(t), W(() => y()(U(t).createdAt)))]), Y("click", h, () => c()(U(t).id)), Y("click", g, () => l()(U(t).id)), Z(e, n);
		}), k(i), k(r), k(t), Z(e, t);
	};
	Mi(re, (e) => {
		G(n()), W(() => n().length === 0) ? e(ie) : e(ae, -1);
	}), k(S);
	var oe = B(S, 2), se = z(oe), C = B(z(se), 2), w = z(C, !0);
	k(C), k(se);
	var T = B(se, 2), ce = (e) => {
		Z(e, Uo());
	}, le = (e) => {
		var t = Jo(), n = z(t), i = B(z(n));
		zi(i, 5, r, Ii, (e, t) => {
			var n = qo(), r = z(n), i = z(r, !0);
			k(r);
			var a = B(r), o = z(a, !0);
			k(a);
			var s = B(a), c = z(s, !0);
			k(s);
			var l = B(s), u = z(l, !0);
			k(l);
			var m = B(l), h = z(m, !0);
			k(m);
			var g = B(m), _ = z(g), y = (e) => {
				Z(e, mi("Pending approval"));
			}, b = (e) => {
				Z(e, mi("Rejected"));
			}, x = (e) => {
				Z(e, mi("Listed"));
			}, S = (e) => {
				Z(e, mi("Delisted"));
			};
			Mi(_, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(y) : (U(t), W(() => U(t).listingStatus === "rejected") ? e(b, 1) : (U(t), W(() => U(t).isListed) ? e(x, 2) : e(S, -1)));
			}), k(g);
			var ee = B(g), te = z(ee), ne = (e) => {
				var n = Wo(), r = z(n), i = B(r, 2);
				k(n), Y("click", r, () => d()(U(t).id)), Y("click", i, () => f()(U(t).id)), Z(e, n);
			}, re = (e) => {
				var n = Go();
				Y("click", n, () => p()(U(t).id)), Z(e, n);
			}, ie = (e) => {
				Z(e, Ko());
			};
			Mi(te, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(ne) : (U(t), W(() => U(t).isListed) ? e(re, 1) : e(ie, -1));
			}), k(ee), k(n), V((e) => {
				Q(i, (U(t), W(() => U(t).name))), Q(o, (U(t), W(() => U(t).seller?.username || "Unknown seller"))), Q(c, (U(t), W(() => U(t).description || "No description provided."))), Q(u, e), Q(h, (U(t), W(() => U(t).stock)));
			}, [() => (G(v()), U(t), W(() => v()(U(t).price)))]), Z(e, n);
		}), k(i), k(n), k(t), Z(e, t);
	};
	Mi(T, (e) => {
		G(r()), W(() => r().length === 0) ? e(ce) : e(le, -1);
	}), k(oe);
	var E = B(oe, 2), ue = z(E), de = B(z(ue), 2), fe = z(de);
	k(de), k(ue);
	var pe = B(ue, 2), D = z(pe);
	ma(D);
	var me = B(D, 4);
	k(pe);
	var he = B(pe, 2), ge = (e) => {
		Z(e, Yo());
	}, _e = (e) => {
		var t = Zo(), n = z(t), r = B(z(n));
		zi(r, 5, i, Ii, (e, t) => {
			var n = Xo(), r = z(n), i = z(r, !0);
			k(r);
			var a = B(r), o = z(a, !0);
			k(a);
			var s = B(a), d = z(s, !0);
			k(s);
			var f = B(s), p = z(f, !0);
			k(f);
			var m = B(f), h = z(m), g = z(h), v = B(g, 2), x = B(v, 2);
			k(h), k(m), k(n), V((e, n, r) => {
				Q(i, (U(t), W(() => U(t).username))), Q(o, e), Q(d, n), Q(p, r);
			}, [
				() => (G(_()), U(t), W(() => _()(U(t).role))),
				() => (G(b()), U(t), W(() => b()(U(t)))),
				() => (G(y()), U(t), W(() => y()(U(t).createdAt)))
			]), Y("click", g, () => c()(U(t).id)), Y("click", v, () => l()(U(t).id)), Y("click", x, () => u()(U(t).id)), Z(e, n);
		}), k(r), k(n), k(t), Z(e, t);
	};
	Mi(he, (e) => {
		G(i()), W(() => i().length === 0) ? e(ge) : e(_e, -1);
	});
	var ve = B(he, 2), ye = z(ve), be = B(ye, 2), xe = z(be);
	k(be);
	var Se = B(be, 2);
	k(ve), k(E), k(x), V(() => {
		Q(ne, (G(n()), W(() => n().length))), Q(w, (G(r()), W(() => r().length))), Q(fe, `${(G(a()), W(() => a().totalPages)) ?? ""} page${(G(a()), W(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), ha(D, o()), ye.disabled = (G(a()), W(() => !a().hasPreviousPage)), Q(xe, `Page ${(G(a()), W(() => a().page)) ?? ""} of ${(G(a()), W(() => a().totalPages)) ?? ""}`), Se.disabled = (G(a()), W(() => !a().hasNextPage));
	}), Y("input", D, function(...e) {
		s()?.apply(this, e);
	}), Y("click", me, function(...e) {
		h()?.apply(this, e);
	}), Y("submit", pe, Ra(function(...e) {
		m()?.apply(this, e);
	})), Y("click", ye, () => g()(a().page - 1)), Y("click", Se, () => g()(a().page + 1)), Z(e, x), $e();
}
var Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o = e((() => {
	no(), ro(), Ya(), Bo = /* @__PURE__ */ X("<div class=\"state-card\">No pending users right now.</div>"), Vo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), Ho = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Uo = /* @__PURE__ */ X("<div class=\"state-card\">No seller listings are available for review.</div>"), Wo = /* @__PURE__ */ X("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), Go = /* @__PURE__ */ X("<button class=\"admin-button admin-button-danger\">Delist</button>"), Ko = /* @__PURE__ */ X("<span class=\"seller\">No further action</span>"), qo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), Jo = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), Yo = /* @__PURE__ */ X("<div class=\"state-card\">No users matched that search.</div>"), Xo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), Zo = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Qo = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function es(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Ba();
	var a = is(), o = z(a), s = z(o), c = (e) => {
		Z(e, ts());
	}, l = (e) => {
		var t = rs();
		zi(t, 5, () => (G(n()), W(() => n().items)), Ii, (e, t) => {
			var n = ns(), a = z(n), o = z(a), s = z(o, !0);
			k(o);
			var c = B(o, 2), l = z(c, !0);
			k(c);
			var u = B(c, 2), d = z(u);
			k(u), k(a);
			var f = B(a, 2), p = z(f), m = z(p, !0);
			k(p);
			var h = B(p, 2);
			k(f), k(n), V((e, n) => {
				Q(s, (U(t), W(() => U(t).product.seller.username))), Q(l, (U(t), W(() => U(t).product.name))), Q(d, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(m, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Y("click", h, () => r()(U(t).id)), Z(e, n);
		}), k(t), Z(e, t);
	};
	Mi(s, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), k(o);
	var u = B(o, 2), d = B(z(u), 2), f = z(d, !0);
	k(d);
	var p = B(d, 4), m = z(p, !0);
	k(p);
	var h = B(p, 4), g = z(h, !0);
	k(h);
	var _ = B(h, 4), v = z(_, !0);
	k(_), Le(2), k(u), k(a), V((e, t, n, r) => {
		Q(f, e), Q(m, t), Q(g, n), Q(v, r);
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().serviceFee || 0))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Z(e, a), $e();
}
var ts, ns, rs, is, as = e((() => {
	no(), ro(), Ya(), ts = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty.</div>"), ns = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), rs = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), is = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function os(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "placeOrder", 8), i = $(t, "formatCurrency", 8), a = $(t, "shippingAddress", 8), o = $(t, "onShippingInput", 8);
	Ba();
	var s = us(), c = z(s), l = z(c), u = (e) => {
		Z(e, ss());
	}, d = (e) => {
		var t = ls(), r = z(t), s = B(z(r), 2), c = B(z(s), 2);
		ma(c);
		var l = B(c, 4);
		ma(l);
		var u = B(l, 4);
		ma(u);
		var d = B(u, 4);
		ma(d);
		var f = B(d, 4);
		ma(f);
		var p = B(f, 4);
		ma(p), Le(2), k(s), k(r);
		var m = B(r, 2);
		zi(m, 5, () => (G(n()), W(() => n().items)), Ii, (e, t) => {
			var n = cs(), r = z(n), a = z(r), o = z(a, !0);
			k(a);
			var s = B(a, 2), c = z(s, !0);
			k(s);
			var l = B(s, 2), u = z(l);
			k(l), k(r);
			var d = B(r, 2), f = z(d), p = z(f, !0);
			k(f), k(d), k(n), V((e, n) => {
				Q(o, (U(t), W(() => U(t).product.seller.username))), Q(c, (U(t), W(() => U(t).product.name))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Z(e, n);
		}), k(m), k(t), V(() => {
			ha(c, (G(a()), W(() => a().name))), ha(l, (G(a()), W(() => a().line1))), ha(u, (G(a()), W(() => a().line2))), ha(d, (G(a()), W(() => a().city))), ha(f, (G(a()), W(() => a().state))), ha(p, (G(a()), W(() => a().postalCode)));
		}), Y("input", c, (e) => o()("name", e)), Y("input", l, (e) => o()("line1", e)), Y("input", u, (e) => o()("line2", e)), Y("input", d, (e) => o()("city", e)), Y("input", f, (e) => o()("state", e)), Y("input", p, (e) => o()("postalCode", e)), Z(e, t);
	};
	Mi(l, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(u) : e(d, -1);
	}), k(c);
	var f = B(c, 2), p = B(z(f), 2), m = z(p, !0);
	k(p);
	var h = B(p, 4), g = z(h, !0);
	k(h);
	var _ = B(h, 4), v = z(_, !0);
	k(_);
	var y = B(_, 4), b = z(y, !0);
	k(y);
	var x = B(y, 4), S = z(x);
	Le(2), k(x), k(f), k(s), V((e, t, r, i) => {
		Q(m, e), Q(g, t), Q(v, r), Q(b, i), S.disabled = (G(n()), W(() => n().items.length === 0));
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().serviceFee || 0))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Y("click", S, function(...e) {
		r()?.apply(this, e);
	}), Z(e, s), $e();
}
var ss, cs, ls, us, ds = e((() => {
	no(), ro(), Ya(), ss = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), cs = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ls = /* @__PURE__ */ X("<div class=\"checkout-stack\"><div class=\"shipping-panel\"><p class=\"section-kicker\">Shipping address</p> <div class=\"stack-form\"><label for=\"ship-name\">Full name</label> <input id=\"ship-name\" type=\"text\" required=\"\"/> <label for=\"ship-line1\">Address line 1</label> <input id=\"ship-line1\" type=\"text\" required=\"\"/> <label for=\"ship-line2\">Address line 2</label> <input id=\"ship-line2\" type=\"text\"/> <label for=\"ship-city\">City</label> <input id=\"ship-city\" type=\"text\" required=\"\"/> <label for=\"ship-state\">State / region</label> <input id=\"ship-state\" type=\"text\" required=\"\"/> <label for=\"ship-postal\">Postal code</label> <input id=\"ship-postal\" type=\"text\" required=\"\"/> <p class=\"field-hint\">Shipping currently supports United States addresses only.</p></div></div> <div class=\"list-grid\"></div></div>"), us = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function fs(e, t) {
	Qe(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Ba();
	var s = hi(), c = On(s), l = (e) => {
		Z(e, ps());
	}, u = (e) => {
		var t = hs();
		zi(t, 5, n, Ii, (e, t) => {
			var n = ms(), s = z(n), c = B(z(s), 2), l = z(c, !0);
			k(c), k(s);
			var u = B(s, 2), d = z(u, !0);
			k(u);
			var f = B(u, 2), p = z(f, !0);
			k(f);
			var m = B(f, 2), h = z(m), g = z(h);
			k(h);
			var _ = B(h, 2), v = z(_), y = B(v, 2);
			k(_), k(m), k(n), V((e, n) => {
				Q(l, e), Q(d, (U(t), W(() => U(t).name))), Q(p, n), _a(g, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(a()), U(t), W(() => a()(U(t).price))), () => (G(o()), U(t), W(() => o()(U(t).description || "", 160)))]), Y("click", v, () => r()(U(t).id)), Y("click", y, () => i()(U(t).id)), Z(e, n);
		}), k(t), Z(e, t);
	};
	Mi(c, (e) => {
		G(n()), W(() => n().length === 0) ? e(l) : e(u, -1);
	}), Z(e, s), $e();
}
var ps, ms, hs, gs = e((() => {
	no(), ro(), Ya(), ps = /* @__PURE__ */ X("<div class=\"state-card\">No products marked for comparison.</div>"), ms = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), hs = /* @__PURE__ */ X("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function _s(e, t) {
	Qe(t, !1);
	let n = $(t, "order", 8), r = $(t, "formatCurrency", 8), i = $(t, "formatDate", 8), a = $(t, "formatPaymentMethod", 8);
	Ba();
	var o = bs(), s = z(o), c = z(s);
	zi(c, 5, () => (G(n()), W(() => n().items)), Ii, (e, t) => {
		var n = vs(), i = z(n), a = z(i), o = z(a);
		k(a);
		var s = B(a, 2), c = z(s, !0);
		k(s);
		var l = B(s, 2), u = z(l);
		k(l), k(i);
		var d = B(i, 2), f = z(d), p = z(f, !0);
		k(f), k(d), k(n), V((e, n) => {
			Q(o, `Seller ID ${(U(t), W(() => U(t).sellerId)) ?? ""}`), Q(c, (U(t), W(() => U(t).productName))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
		}, [() => (G(r()), U(t), W(() => r()(U(t).unitPrice))), () => (G(r()), U(t), W(() => r()(U(t).lineTotal)))]), Z(e, n);
	}), k(c), k(s);
	var l = B(s, 2), u = B(z(l), 2), d = z(u);
	k(u);
	var f = B(u, 4), p = z(f, !0);
	k(f);
	var m = B(f, 4), h = z(m, !0);
	k(m);
	var g = B(m, 4), _ = z(g, !0);
	k(g);
	var v = B(g, 4), y = z(v, !0);
	k(v);
	var b = B(v, 2), x = z(b, !0);
	k(b);
	var S = B(b, 2), ee = (e) => {
		var t = ys(), r = z(t, !0);
		k(t), V(() => Q(r, (G(n()), W(() => n().shipToLine2)))), Z(e, t);
	};
	Mi(S, (e) => {
		G(n()), W(() => n().shipToLine2) && e(ee);
	});
	var te = B(S, 2), ne = z(te);
	k(te);
	var re = B(te, 2), ie = z(re, !0);
	k(re);
	var ae = B(re, 4), oe = z(ae, !0);
	k(ae);
	var se = B(ae, 4), C = z(se, !0);
	k(se);
	var w = B(se, 4), T = z(w, !0);
	k(w);
	var ce = B(w, 4), le = z(ce, !0);
	k(ce), Le(2), k(l), k(o), V((e, t, r, i, a, o) => {
		Q(d, `#${(G(n()), W(() => n().id)) ?? ""}`), Q(p, (G(n()), W(() => n().status))), Q(h, e), Q(_, t), Q(y, (G(n()), W(() => n().shipToName))), Q(x, (G(n()), W(() => n().shipToLine1))), Q(ne, `${(G(n()), W(() => n().shipToCity)) ?? ""}, ${(G(n()), W(() => n().shipToState)) ?? ""} ${(G(n()), W(() => n().shipToPostalCode)) ?? ""}`), Q(ie, (G(n()), W(() => n().shipToCountry))), Q(oe, r), Q(C, i), Q(T, a), Q(le, o);
	}, [
		() => (G(a()), G(n()), W(() => a()(n().paymentMethod))),
		() => (G(i()), G(n()), W(() => i()(n().createdAt))),
		() => (G(r()), G(n()), W(() => r()(n().subtotal))),
		() => (G(r()), G(n()), W(() => r()(n().serviceFeeAmount || 0))),
		() => (G(r()), G(n()), W(() => r()(n().taxAmount))),
		() => (G(r()), G(n()), W(() => r()(n().total)))
	]), Z(e, o), $e();
}
var vs, ys, bs, xs = e((() => {
	no(), ro(), Ya(), vs = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ys = /* @__PURE__ */ X("<strong> </strong>"), bs = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Ship to</p> <strong> </strong> <strong> </strong> <!> <strong> </strong> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a> <a class=\"checkout-link secondary-link\" href=\"/buyer/orders\">View order history</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/OrderHistoryView.svelte
function Ss(e, t) {
	Qe(t, !1);
	let n = $(t, "orders", 24, () => []), r = $(t, "pageInfo", 8), i = $(t, "goToOrderHistoryPage", 8), a = $(t, "formatCurrency", 8), o = $(t, "formatDate", 8), s = $(t, "formatPaymentMethod", 8);
	Ba();
	var c = hi(), l = On(c), u = (e) => {
		Z(e, Cs());
	}, d = (e) => {
		var t = Ts(), c = On(t);
		zi(c, 5, n, Ii, (e, t) => {
			var n = ws(), r = z(n), i = z(r), c = z(i);
			k(i);
			var l = B(i, 2), u = z(l, !0);
			k(l);
			var d = B(l, 2), f = z(d);
			k(d);
			var p = B(d, 2), m = z(p);
			k(p), k(r);
			var h = B(r, 2), g = z(h), _ = z(g, !0);
			k(g);
			var v = B(g, 2);
			k(h), k(n), V((e, n, r) => {
				Q(c, `Order #${(U(t), W(() => U(t).id)) ?? ""}`), Q(u, e), Q(f, `${n ?? ""} - ${r ?? ""} - ${(U(t), W(() => U(t).items.length)) ?? ""} item${(U(t), W(() => U(t).items.length === 1 ? "" : "s")) ?? ""}`), Q(m, `Ship to ${(U(t), W(() => U(t).shipToCity)) ?? ""}, ${(U(t), W(() => U(t).shipToState)) ?? ""} ${(U(t), W(() => U(t).shipToPostalCode)) ?? ""}`), Q(_, (U(t), W(() => U(t).status))), _a(v, "href", (U(t), W(() => `/buyer/orders/${U(t).id}/confirmation`)));
			}, [
				() => (G(a()), U(t), W(() => a()(U(t).total))),
				() => (G(o()), U(t), W(() => o()(U(t).createdAt))),
				() => (G(s()), U(t), W(() => s()(U(t).paymentMethod)))
			]), Z(e, n);
		}), k(c);
		var l = B(c, 2), u = z(l), d = B(u, 2), f = z(d);
		k(d);
		var p = B(d, 2);
		k(l), V(() => {
			u.disabled = (G(r()), W(() => !r().hasPreviousPage)), Q(f, `Page ${(G(r()), W(() => r().page)) ?? ""} of ${(G(r()), W(() => r().totalPages)) ?? ""}`), p.disabled = (G(r()), W(() => !r().hasNextPage));
		}), Y("click", u, () => i()(r().page - 1)), Y("click", p, () => i()(r().page + 1)), Z(e, t);
	};
	Mi(l, (e) => {
		G(n()), W(() => n().length === 0) ? e(u) : e(d, -1);
	}), Z(e, c), $e();
}
var Cs, ws, Ts, Es = e((() => {
	no(), ro(), Ya(), Cs = /* @__PURE__ */ X("<div class=\"state-card\">You have not placed any orders yet.</div>"), ws = /* @__PURE__ */ X("<article class=\"line-card order-history-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <a class=\"checkout-link secondary-link\">View details</a></div></article>"), Ts = /* @__PURE__ */ X("<div class=\"list-grid\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1);
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function Ds(e, t) {
	Qe(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ba();
	var o = Os(), s = z(o), c = B(s, 2), l = z(c), u = z(l, !0);
	k(l);
	var d = B(l, 2), f = z(d);
	k(d), k(c);
	var p = B(c, 2), m = z(p), h = z(m), g = z(h, !0);
	k(h);
	var _ = B(h, 2), v = z(_, !0);
	k(_), k(m);
	var y = B(m, 2), b = z(y), x = B(b, 2);
	k(y), k(p);
	var S = B(p, 2), ee = z(S, !0);
	k(S), Le(2), k(o), V((e) => {
		_a(s, "src", (G(n()), W(() => n().imageUrl || "/images/product-placeholder.png"))), _a(s, "alt", (G(n()), W(() => n().name))), Q(u, (G(n()), W(() => n().seller.username))), Q(f, `${(G(n()), W(() => n().stock)) ?? ""} in stock`), Q(g, (G(n()), W(() => n().name))), Q(v, e), Q(ee, (G(n()), W(() => n().description || "No description provided.")));
	}, [() => (G(a()), G(n()), W(() => a()(n().price)))]), Y("click", b, () => r()(n().id)), Y("click", x, () => i()(n().id)), Z(e, o), $e();
}
var Os, ks = e((() => {
	no(), ro(), Ya(), Os = /* @__PURE__ */ X("<article class=\"detail-card\"><img class=\"product-detail-image\"/> <div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function As(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerWebhook", 8), r = $(t, "onSellerWebhookInput", 8), i = $(t, "saveSellerWebhook", 8);
	Ba();
	var a = Ms(), o = B(z(a), 2), s = B(z(o), 6), c = B(z(s), 2);
	ma(c);
	var l = B(c, 2), u = z(l);
	ma(u), Le(), k(l), Le(2), k(s);
	var d = B(s, 2), f = (e) => {
		var t = js(), r = B(z(t), 2), i = z(r, !0);
		k(r);
		var a = B(r, 4), o = z(a);
		k(a), k(t), V(() => {
			Q(i, (G(n()), W(() => n().signingSecret))), Q(o, `WEBHOOK_SECRET='${(G(n()), W(() => n().signingSecret)) ?? ""}' PORT=4010 node scripts/demo-webhook-receiver.js`);
		}), Z(e, t);
	};
	Mi(d, (e) => {
		G(n()), W(() => n().signingSecret) && e(f);
	}), k(o), k(a), V(() => {
		ha(c, (G(n()), W(() => n().endpointUrl))), ga(u, (G(n()), W(() => n().isActive)));
	}), Y("input", c, (e) => r()("endpointUrl", e)), Y("change", u, (e) => r()("isActive", e)), Y("submit", s, Ra(function(...e) {
		i()?.apply(this, e);
	})), Z(e, a), $e();
}
var js, Ms, Ns = e((() => {
	no(), ro(), Ya(), js = /* @__PURE__ */ X("<div class=\"webhook-secret\"><p class=\"seller\">Signing secret</p> <code> </code> <p class=\"detail-description\">Receiver command:</p> <code> </code></div>"), Ms = /* @__PURE__ */ X("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a> <a class=\"checkout-link secondary-link\" href=\"/seller/sales\">View sales</a></div></article> <article class=\"detail-card\"><p class=\"section-kicker\">Warehouse integration</p> <h3>Order webhook setup</h3> <p class=\"detail-description\">Send order notifications to warehouse software when buyers place orders for your products.</p> <form class=\"stack-form webhook-form\"><label for=\"webhook-url\">Receiver URL</label> <input id=\"webhook-url\" type=\"url\" placeholder=\"http://localhost:4010/seller-webhook\"/> <label class=\"checkbox-row\" for=\"webhook-active\"><input id=\"webhook-active\" type=\"checkbox\"/> Webhook active</label> <button class=\"checkout-link place-order-button\" type=\"submit\">Save webhook setup</button></form> <!></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function Ps(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "onSellerImageInput", 8), c = $(t, "formatCurrency", 8);
	Ba();
	var l = zs(), u = On(l), d = z(u), f = z(d), p = B(z(f), 2);
	ma(p);
	var m = B(p, 4);
	zn(m);
	var h = B(m, 4), g = B(h, 4), _ = (e) => {
		var t = Fs();
		V(() => _a(t, "src", (G(n()), W(() => n().imagePreviewUrl)))), Z(e, t);
	};
	Mi(g, (e) => {
		G(n()), W(() => n().imagePreviewUrl) && e(_);
	});
	var v = B(g, 4);
	ma(v);
	var y = B(v, 4);
	ma(y), Le(2), k(f), Pa(f, (e) => i(e), () => i()), k(d);
	var b = B(d, 2), x = B(z(b), 2), S = z(x, !0);
	k(x), k(b), k(u);
	var ee = B(u, 2), te = (e) => {
		Z(e, Is());
	}, ne = (e) => {
		var t = Rs();
		zi(t, 5, r, Ii, (e, t) => {
			var n = Ls(), r = z(n), i = B(r, 2), a = z(i), o = z(a), s = (e) => {
				Z(e, mi("Pending approval"));
			}, l = (e) => {
				Z(e, mi("Rejected"));
			}, u = (e) => {
				Z(e, mi("Listed"));
			}, d = (e) => {
				Z(e, mi("Delisted"));
			};
			Mi(o, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(s) : (U(t), W(() => U(t).listingStatus === "rejected") ? e(l, 1) : (U(t), W(() => U(t).isListed) ? e(u, 2) : e(d, -1)));
			}), k(a);
			var f = B(a, 2), p = z(f);
			k(f), k(i);
			var m = B(i, 2), h = z(m, !0);
			k(m);
			var g = B(m, 2), _ = z(g, !0);
			k(g);
			var v = B(g, 2), y = z(v), b = z(y), x = z(b, !0);
			k(b);
			var S = B(b, 2), ee = z(S);
			k(S), k(y), k(v), k(n), V((e, n) => {
				_a(r, "src", (U(t), W(() => U(t).imageUrl || "/images/product-placeholder.png"))), _a(r, "alt", (U(t), W(() => U(t).name))), Q(p, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(h, (U(t), W(() => U(t).name))), Q(_, (U(t), W(() => U(t).description || "No description provided."))), Q(x, e), Q(ee, `Created ${n ?? ""}`);
			}, [() => (G(c()), U(t), W(() => c()(U(t).price))), () => (U(t), W(() => new Date(U(t).createdAt).toLocaleDateString()))]), Z(e, n);
		}), k(t), Z(e, t);
	};
	Mi(ee, (e) => {
		G(r()), W(() => r().length === 0) ? e(te) : e(ne, -1);
	}), V(() => {
		ha(p, (G(n()), W(() => n().name))), ha(m, (G(n()), W(() => n().description))), ha(v, (G(n()), W(() => n().price))), ha(y, (G(n()), W(() => n().stock))), Q(S, (G(r()), W(() => r().length)));
	}), Y("input", p, (e) => o()("name", e)), Y("input", m, (e) => o()("description", e)), Y("change", h, function(...e) {
		s()?.apply(this, e);
	}), Y("input", v, (e) => o()("price", e)), Y("input", y, (e) => o()("stock", e)), Y("submit", f, Ra(function(...e) {
		a()?.apply(this, e);
	})), Z(e, l), $e();
}
var Fs, Is, Ls, Rs, zs, Bs = e((() => {
	no(), ro(), Ya(), Fs = /* @__PURE__ */ X("<img class=\"product-image-preview\" alt=\"Selected product preview\"/>"), Is = /* @__PURE__ */ X("<div class=\"state-card\">No listings yet.</div>"), Ls = /* @__PURE__ */ X("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), Rs = /* @__PURE__ */ X("<div class=\"product-grid inventory-grid\"></div>"), zs = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-image\">Product image</label> <input id=\"seller-image\" type=\"file\" accept=\"image/jpeg,image/png\"/> <p class=\"field-hint\">Optional. JPEG or PNG up to 2 MB.</p> <!> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/SellerSalesView.svelte
function Vs(e, t) {
	Qe(t, !1);
	let n = $(t, "sales", 24, () => []), r = $(t, "summary", 24, () => ({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	})), i = $(t, "pageInfo", 8), a = $(t, "goToSellerSalesPage", 8), o = $(t, "formatCurrency", 8), s = $(t, "formatDate", 8), c = $(t, "formatPaymentMethod", 8);
	Ba();
	var l = Gs(), u = On(l), d = z(u), f = B(z(d), 2), p = z(f, !0);
	k(f), k(d);
	var m = B(d, 2), h = B(z(m), 2), g = z(h, !0);
	k(h), k(m);
	var _ = B(m, 2), v = B(z(_), 2), y = z(v, !0);
	k(v), k(_), k(u);
	var b = B(u, 2), x = (e) => {
		Z(e, Hs());
	}, S = (e) => {
		var t = Ws(), r = On(t);
		zi(r, 5, n, Ii, (e, t) => {
			var n = Us(), r = z(n), i = z(r), a = z(i);
			k(i);
			var l = B(i, 2), u = z(l, !0);
			k(l);
			var d = B(l, 2), f = z(d);
			k(d);
			var p = B(d, 2), m = z(p);
			k(p), k(r);
			var h = B(r, 2), g = z(h), _ = z(g, !0);
			k(g);
			var v = B(g, 2), y = z(v, !0);
			k(v), k(h), k(n), V((e, n, r, i) => {
				Q(a, `Order #${(U(t), W(() => U(t).order.id)) ?? ""}`), Q(u, (U(t), W(() => U(t).productName))), Q(f, `${e ?? ""} - ${n ?? ""}`), Q(m, `${(U(t), W(() => U(t).quantity)) ?? ""} unit${(U(t), W(() => U(t).quantity === 1 ? "" : "s")) ?? ""} at ${r ?? ""}`), Q(_, i), Q(y, (U(t), W(() => U(t).order.status)));
			}, [
				() => (G(s()), U(t), W(() => s()(U(t).order.createdAt))),
				() => (G(c()), U(t), W(() => c()(U(t).order.paymentMethod))),
				() => (G(o()), U(t), W(() => o()(U(t).unitPrice))),
				() => (G(o()), U(t), W(() => o()(U(t).lineTotal)))
			]), Z(e, n);
		}), k(r);
		var l = B(r, 2), u = z(l), d = B(u, 2), f = z(d);
		k(d);
		var p = B(d, 2);
		k(l), V(() => {
			u.disabled = (G(i()), W(() => !i().hasPreviousPage)), Q(f, `Page ${(G(i()), W(() => i().page)) ?? ""} of ${(G(i()), W(() => i().totalPages)) ?? ""}`), p.disabled = (G(i()), W(() => !i().hasNextPage));
		}), Y("click", u, () => a()(i().page - 1)), Y("click", p, () => a()(i().page + 1)), Z(e, t);
	};
	Mi(b, (e) => {
		G(n()), W(() => n().length === 0) ? e(x) : e(S, -1);
	}), V((e) => {
		Q(p, (G(r()), W(() => r().orderCount))), Q(g, (G(r()), W(() => r().unitsSold))), Q(y, e);
	}, [() => (G(o()), G(r()), W(() => o()(r().grossSales)))]), Z(e, l), $e();
}
var Hs, Us, Ws, Gs, Ks = e((() => {
	no(), ro(), Ya(), Hs = /* @__PURE__ */ X("<div class=\"state-card\">No sales have been recorded yet.</div>"), Us = /* @__PURE__ */ X("<article class=\"line-card seller-sales-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p></div> <div class=\"line-actions seller-sales-actions\"><p class=\"price\"> </p> <p class=\"seller\"> </p></div></article>"), Ws = /* @__PURE__ */ X("<div class=\"list-grid seller-sales-list\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1), Gs = /* @__PURE__ */ X("<div class=\"seller-sales-summary\"><aside class=\"summary-panel\"><p>Orders</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Items sold</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Gross sales</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function qs(e, t) {
	Qe(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "productSearch", 8, ""), i = $(t, "addToCart", 8), a = $(t, "addToComparison", 8), o = $(t, "openRandomProduct", 8), s = $(t, "onProductSearchInput", 8), c = $(t, "searchProducts", 8), l = $(t, "clearProductSearch", 8), u = $(t, "formatCurrency", 8);
	Ba();
	var d = Qs(), f = On(d), p = z(f), m = B(z(p), 2), h = z(m);
	ma(h);
	var g = B(h, 4), _ = (e) => {
		var t = Js();
		Y("click", t, function(...e) {
			l()?.apply(this, e);
		}), Z(e, t);
	}, v = /* @__PURE__ */ tn(() => (G(r()), W(() => r().trim())));
	Mi(g, (e) => {
		U(v) && e(_);
	}), k(m), k(p);
	var y = B(p, 2), b = z(y);
	k(y), k(f);
	var x = B(f, 2), S = (e) => {
		var t = Ys(), n = z(t, !0);
		k(t), V((e) => Q(n, e), [() => (G(r()), W(() => r().trim() ? "No products match your search." : "No listed products are available right now."))]), Z(e, t);
	}, ee = (e) => {
		var t = Zs();
		zi(t, 5, n, Ii, (e, t) => {
			var n = Xs(), r = z(n), o = B(r, 2), s = z(o), c = z(s, !0);
			k(s);
			var l = B(s, 2), d = z(l);
			k(l), k(o);
			var f = B(o, 2), p = z(f, !0);
			k(f);
			var m = B(f, 2), h = z(m, !0);
			k(m);
			var g = B(m, 2), _ = z(g), v = z(_), y = z(v, !0);
			k(v);
			var b = B(v, 2);
			k(_);
			var x = B(_, 2), S = z(x), ee = B(S, 2);
			k(x), k(g), k(n), V((e) => {
				_a(r, "src", (U(t), W(() => U(t).imageUrl || "/images/product-placeholder.png"))), _a(r, "alt", (U(t), W(() => U(t).name))), Q(c, (U(t), W(() => U(t).seller.username))), Q(d, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(p, (U(t), W(() => U(t).name))), Q(h, (U(t), W(() => U(t).description || "No description provided."))), Q(y, e), _a(b, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(u()), U(t), W(() => u()(U(t).price)))]), Y("click", S, () => i()(U(t).id)), Y("click", ee, () => a()(U(t).id)), Z(e, n);
		}), k(t), Z(e, t);
	};
	Mi(x, (e) => {
		G(n()), W(() => n().length === 0) ? e(S) : e(ee, -1);
	}), V(() => ha(h, r())), Y("input", h, function(...e) {
		s()?.apply(this, e);
	}), Y("submit", p, Ra(function(...e) {
		c()?.apply(this, e);
	})), Y("click", b, function(...e) {
		o()?.apply(this, e);
	}), Z(e, d), $e();
}
var Js, Ys, Xs, Zs, Qs, $s = e((() => {
	no(), ro(), Ya(), Js = /* @__PURE__ */ X("<button class=\"secondary\" type=\"button\">Clear</button>"), Ys = /* @__PURE__ */ X("<div class=\"state-card\"> </div>"), Xs = /* @__PURE__ */ X("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), Zs = /* @__PURE__ */ X("<div class=\"product-grid\"></div>"), Qs = /* @__PURE__ */ X("<div class=\"storefront-tools\"><form class=\"storefront-search\"><label for=\"product-search\">Search products</label> <div class=\"storefront-search-row\"><input id=\"product-search\" type=\"search\" placeholder=\"Search by product name or description\"/> <button type=\"submit\">Search</button> <!></div></form> <div class=\"storefront-actions\"><button class=\"checkout-link random-product-button\" type=\"button\">Random product</button></div></div> <!>", 1);
}));
//#endregion
//#region frontend/src/App.svelte
function ec(e, t) {
	Qe(t, !1);
	let n = /* @__PURE__ */ L(), r = [
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
	], i = new Set(r.map((e) => e.value)), a = /* @__PURE__ */ L("buyer"), o = /* @__PURE__ */ L("storefront"), s = /* @__PURE__ */ L([]), c = /* @__PURE__ */ L(""), l = /* @__PURE__ */ L(null), u = /* @__PURE__ */ L([]), d = /* @__PURE__ */ L({
		items: [],
		subtotal: 0,
		serviceFee: 0,
		tax: 0,
		total: 0
	}), f = /* @__PURE__ */ L(null), p = /* @__PURE__ */ L([]), m = /* @__PURE__ */ L({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1
	}), h = /* @__PURE__ */ L([]), g = /* @__PURE__ */ L([]), _ = /* @__PURE__ */ L({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	}), v = /* @__PURE__ */ L({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1
	}), y = /* @__PURE__ */ L({
		endpointUrl: "",
		signingSecret: "",
		isActive: !1
	}), b = /* @__PURE__ */ L({
		name: "",
		description: "",
		imageDataUrl: "",
		imagePreviewUrl: "",
		price: "",
		stock: ""
	}), x = /* @__PURE__ */ L(), S = /* @__PURE__ */ L([]), ee = /* @__PURE__ */ L([]), te = /* @__PURE__ */ L([]), ne = /* @__PURE__ */ L([]), re = /* @__PURE__ */ L({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), ie = /* @__PURE__ */ L(""), ae = /* @__PURE__ */ L({
		name: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postalCode: "",
		country: "US"
	}), oe = /* @__PURE__ */ L("accessible-blue-gold"), se = /* @__PURE__ */ L(!1), C = /* @__PURE__ */ L(!0), w = /* @__PURE__ */ L(""), T = /* @__PURE__ */ L(""), ce = /* @__PURE__ */ L([]), le = /* @__PURE__ */ new Map();
	async function E(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function ue(e) {
		R(oe, i.has(e) ? e : "accessible-blue-gold"), typeof document < "u" && (document.documentElement.dataset.theme = U(oe)), typeof localStorage < "u" && localStorage.setItem("ram-theme", U(oe));
	}
	function de() {
		R(se, !U(se));
	}
	function fe(e) {
		ue(e), R(se, !1);
	}
	function pe(e, t) {
		return {
			...e,
			...t
		};
	}
	function D(e) {
		R(S, U(S).filter((t) => t.id !== e.id)), R(te, U(te).map((t) => t.id === e.id ? pe(t, e) : t));
	}
	function me(e) {
		R(ee, U(ee).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function he(e = !1) {
		R(C, !0), R(w, ""), e && R(T, "");
		try {
			let e = U(c).trim();
			R(s, await E(e ? `/api/buyer/products?search=${encodeURIComponent(e)}` : "/api/buyer/products"));
		} catch (e) {
			R(w, e.message || "Could not load products.");
		} finally {
			R(C, !1);
		}
	}
	async function ge() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(l, await E(`/api/buyer/products/${ao()}`));
		} catch (e) {
			R(w, e.message || "Could not load product.");
		} finally {
			R(C, !1);
		}
	}
	async function _e() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(d, await E("/api/buyer/cart"));
		} catch (e) {
			R(w, e.message || "Could not load cart.");
		} finally {
			R(C, !1);
		}
	}
	async function ve() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(u, (await E("/api/buyer/compare")).items || []);
		} catch (e) {
			R(w, e.message || "Could not load comparison list.");
		} finally {
			R(C, !1);
		}
	}
	async function ye() {
		R(C, !0), R(w, "");
		try {
			R(h, await E("/api/seller/products"));
		} catch (e) {
			R(w, e.message || "Could not load seller inventory.");
		} finally {
			R(C, !1);
		}
	}
	async function be() {
		R(C, !0), R(w, "");
		try {
			let e = await E("/api/seller/webhook");
			R(y, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			});
		} catch (e) {
			R(w, e.message || "Could not load webhook setup.");
		} finally {
			R(C, !1);
		}
	}
	async function xe(e = 1) {
		R(C, !0), R(w, ""), R(T, "");
		try {
			let t = await E(`/api/seller/sales?page=${e}`);
			R(g, t.sales || []), R(_, t.summary || {
				grossSales: 0,
				unitsSold: 0,
				orderCount: 0
			}), R(v, {
				page: t.page,
				totalPages: t.totalPages,
				hasPreviousPage: t.hasPreviousPage,
				hasNextPage: t.hasNextPage
			});
		} catch (e) {
			R(w, e.message || "Could not load seller sales.");
		} finally {
			R(C, !1);
		}
	}
	async function Se() {
		R(C, !0), R(w, "");
		try {
			R(ne, await E("/api/admin/audit-logs"));
		} catch (e) {
			R(w, e.message || "Could not load audit logs.");
		} finally {
			R(C, !1);
		}
	}
	async function Ce(e = 1, t = U(ie)) {
		R(C, !0), R(w, "");
		try {
			let [n, r, i] = await Promise.all([
				E("/api/admin/pending-users"),
				E("/api/admin/products"),
				E(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			R(S, n), R(ee, r), R(te, i.users), R(re, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), R(ie, i.search || "");
		} catch (e) {
			R(w, e.message || "Could not load moderation data.");
		} finally {
			R(C, !1);
		}
	}
	async function we() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(f, await E(`/api/buyer/orders/${oo()}`)), R(T, "Your order has been placed successfully.");
		} catch (e) {
			R(w, e.message || "Could not load order confirmation.");
		} finally {
			R(C, !1);
		}
	}
	async function Te(e = 1) {
		R(C, !0), R(w, ""), R(T, "");
		try {
			let t = await E(`/api/buyer/orders?page=${e}`);
			R(p, t.orders || []), R(m, {
				page: t.page,
				totalPages: t.totalPages,
				hasPreviousPage: t.hasPreviousPage,
				hasNextPage: t.hasNextPage
			});
		} catch (e) {
			R(w, e.message || "Could not load order history.");
		} finally {
			R(C, !1);
		}
	}
	async function Ee() {
		if (R(a, so()), R(o, co()), U(o) === "admin-home") {
			R(C, !1), R(w, "");
			return;
		}
		if (U(o) === "seller-home") {
			await be();
			return;
		}
		if (U(o) === "admin-moderation") {
			await Ce();
			return;
		}
		if (U(o) === "admin-audit") {
			await Se();
			return;
		}
		if (U(o) === "seller-inventory") {
			await ye();
			return;
		}
		if (U(o) === "seller-sales") {
			await xe();
			return;
		}
		if (U(o) === "cart" || U(o) === "checkout") {
			await _e();
			return;
		}
		if (U(o) === "compare") {
			await ve();
			return;
		}
		if (U(o) === "confirmation") {
			await we();
			return;
		}
		if (U(o) === "orders") {
			await Te();
			return;
		}
		if (U(o) === "product") {
			await ge();
			return;
		}
		await he();
	}
	async function O(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Pr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function De(e, t) {
		R(b, {
			...U(b),
			[e]: t.currentTarget.value
		});
	}
	function Oe(e, t) {
		R(y, {
			...U(y),
			[e]: e === "isActive" ? t.currentTarget.checked : t.currentTarget.value
		});
	}
	function ke(e) {
		let [t] = e.currentTarget.files || [];
		if (!t) {
			R(b, {
				...U(b),
				imageDataUrl: "",
				imagePreviewUrl: ""
			});
			return;
		}
		if (!["image/jpeg", "image/png"].includes(t.type)) {
			R(T, "Select a JPEG or PNG file for the product photo."), e.currentTarget.value = "";
			return;
		}
		if (t.size > 2 * 1024 * 1024) {
			R(T, "Product image must be 2 MB or smaller."), e.currentTarget.value = "";
			return;
		}
		let n = new FileReader();
		n.onload = () => {
			R(b, {
				...U(b),
				imageDataUrl: String(n.result || ""),
				imagePreviewUrl: String(n.result || "")
			}), R(T, "");
		}, n.onerror = () => {
			R(T, "Could not read selected image.");
		}, n.readAsDataURL(t);
	}
	function Ae(e, t) {
		R(ae, {
			...U(ae),
			[e]: t.currentTarget.value
		});
	}
	function je(e) {
		R(ie, e.currentTarget.value);
	}
	async function Me() {
		R(T, "");
		let e = String(U(b).price).trim(), t = String(U(b).stock).trim(), n = Number(e), r = Number(t);
		if (U(x)?.reportValidity()) {
			if (e === "" || !Number.isFinite(n)) {
				R(T, "Enter a valid number for price.");
				return;
			}
			if (t === "" || !Number.isInteger(r)) {
				R(T, "Enter a whole number for stock.");
				return;
			}
			try {
				await E("/api/seller/products", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: U(b).name,
						description: U(b).description,
						imageDataUrl: U(b).imageDataUrl,
						price: n,
						stock: r
					})
				}), R(b, {
					name: "",
					description: "",
					imageDataUrl: "",
					imagePreviewUrl: "",
					price: "",
					stock: ""
				}), U(x)?.reset(), R(T, "Listing submitted for admin approval."), await ye();
			} catch (e) {
				R(T, e.message || "Could not create listing.");
			}
		}
	}
	async function Ne() {
		R(T, "");
		try {
			let e = await E("/api/seller/webhook", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					endpointUrl: U(y).endpointUrl,
					isActive: U(y).isActive
				})
			});
			R(y, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), R(T, "Webhook setup saved.");
		} catch (e) {
			R(T, e.message || "Could not save webhook setup.");
		}
	}
	async function Pe(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/approve-user/${e}`, { method: "POST" });
			R(T, "User approved."), D(t);
		} catch (e) {
			R(T, e.message || "Could not approve user.");
		}
	}
	async function Fe(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/block-user/${e}`, { method: "POST" });
			R(T, "User blocked."), D(t);
		} catch (e) {
			R(T, e.message || "Could not block user.");
		}
	}
	async function Ie(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/ban-user/${e}`, { method: "POST" });
			R(T, "User banned."), D(t);
		} catch (e) {
			R(T, e.message || "Could not ban user.");
		}
	}
	async function Le(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/approve`, { method: "POST" });
			R(T, "Product approved."), me(t);
		} catch (e) {
			R(T, e.message || "Could not approve product.");
		}
	}
	async function Re(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/reject`, { method: "POST" });
			R(T, "Product rejected."), me(t);
		} catch (e) {
			R(T, e.message || "Could not reject product.");
		}
	}
	async function ze(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/delist`, { method: "POST" });
			R(T, "Product delisted."), me(t);
		} catch (e) {
			R(T, e.message || "Could not delist product.");
		}
	}
	async function A() {
		await O(() => Ce(1, U(ie)));
	}
	async function j() {
		R(ie, ""), await O(() => Ce(1, ""));
	}
	async function M(e) {
		e < 1 || e > U(re).totalPages || await O(() => Ce(e, U(re).search));
	}
	function Be(e) {
		R(c, e.target.value);
	}
	async function Ve() {
		await O(() => he(!0));
	}
	async function He() {
		R(c, ""), await O(() => he(!0));
	}
	async function Ue(e) {
		e < 1 || e > U(m).totalPages || await O(() => Te(e));
	}
	async function We(e) {
		e < 1 || e > U(v).totalPages || await O(() => xe(e));
	}
	function Ge(e, t = "success") {
		let n = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
		R(ce, [...U(ce), {
			id: n,
			message: e,
			type: t
		}]);
		let r = setTimeout(() => {
			R(ce, U(ce).filter((e) => e.id !== n)), le.delete(n);
		}, 3200);
		le.set(n, r);
	}
	async function Ke(e) {
		R(T, "");
		try {
			await E("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), R(T, "Item added to cart."), Ge("Item added to cart.");
		} catch (e) {
			R(T, e.message || "Could not add item to cart."), Ge(U(T), "error");
		}
	}
	async function qe() {
		R(T, "");
		try {
			let e = await E("/api/buyer/random_access");
			typeof window < "u" && (window.location.href = `/buyer/products/${e.id}`);
		} catch (e) {
			R(T, e.message || "Could not load a random product.");
		}
	}
	async function Je(e) {
		R(T, "");
		try {
			await E("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), R(T, "Item added to comparison list.");
		} catch (e) {
			R(T, e.message || "Could not add item to list.");
		}
	}
	async function Ye(e) {
		R(T, "");
		try {
			await E(`/api/buyer/cart/${e}/remove`, { method: "POST" }), R(T, "Item removed from cart."), await _e();
		} catch (e) {
			R(T, e.message || "Could not remove item.");
		}
	}
	async function Xe(e) {
		R(T, "");
		try {
			await E(`/api/buyer/compare/${e}/remove`, { method: "POST" }), R(T, "Item removed from comparison list."), await ve();
		} catch (e) {
			R(T, e.message || "Could not remove item.");
		}
	}
	async function Ze() {
		R(T, "");
		try {
			let e = await E("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					paymentMethod: "demo_card",
					shippingAddress: U(ae)
				})
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			R(T, e.message || "Checkout failed."), await _e();
		}
	}
	async function et() {
		R(T, "");
		try {
			await E("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			R(T, e.message || "Could not log out.");
		}
	}
	Za(async () => {
		ue((typeof localStorage > "u" ? null : localStorage.getItem("ram-theme")) || "accessible-blue-gold"), await Ee();
	}), Qa(() => {
		le.forEach((e) => clearTimeout(e)), le.clear();
	}), tr(() => U(o), () => {
		R(n, lo(U(o)));
	}), nr(), Ba();
	var N = lc();
	na("13zv0lp", (e) => {
		ar((e) => {
			Pn.title = e ?? "";
		}, [() => (G(uo), U(o), W(() => uo(U(o))))]);
	});
	var P = z(N);
	wo(P, {
		get appMode() {
			return U(a);
		},
		get currentPage() {
			return U(o);
		},
		onLogout: et
	});
	var tt = B(P, 2), nt = z(tt);
	Oo(nt, {
		get kicker() {
			return U(n), W(() => U(n).kicker);
		},
		get heading() {
			return U(n), W(() => U(n).heading);
		},
		onRefresh: Ee
	});
	var rt = B(nt, 2), it = (e) => {
		Z(e, tc());
	}, at = (e) => {
		var t = nc(), n = z(t, !0);
		k(t), V(() => Q(n, U(w))), Z(e, t);
	}, ot = (e) => {
		Io(e, {});
	}, st = (e) => {
		zo(e, {
			get adminPendingUsers() {
				return U(S);
			},
			get adminProducts() {
				return U(ee);
			},
			get adminUsers() {
				return U(te);
			},
			get adminUsersPageInfo() {
				return U(re);
			},
			get adminUserSearch() {
				return U(ie);
			},
			onAdminUserSearchInput: je,
			approveUser: Pe,
			blockUser: Fe,
			banUser: Ie,
			approveProduct: Le,
			rejectProduct: Re,
			delistProduct: ze,
			searchAdminUsers: A,
			clearAdminUserSearch: j,
			goToAdminUsersPage: M,
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
	}, ct = (e) => {
		jo(e, {
			get adminAuditLogs() {
				return U(ne);
			},
			get formatActionType() {
				return bo;
			},
			get formatDate() {
				return ho;
			}
		});
	}, F = (e) => {
		As(e, {
			get sellerWebhook() {
				return U(y);
			},
			onSellerWebhookInput: Oe,
			saveSellerWebhook: Ne
		});
	}, lt = (e) => {
		Ps(e, {
			get sellerForm() {
				return U(b);
			},
			get sellerProducts() {
				return U(h);
			},
			createSellerListing: Me,
			onSellerFormInput: De,
			onSellerImageInput: ke,
			get formatCurrency() {
				return mo;
			},
			get sellerListingForm() {
				return U(x);
			},
			set sellerListingForm(e) {
				R(x, e);
			},
			$$legacy: !0
		});
	}, ut = (e) => {
		Vs(e, {
			get sales() {
				return U(g);
			},
			get summary() {
				return U(_);
			},
			get pageInfo() {
				return U(v);
			},
			goToSellerSalesPage: We,
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
	}, dt = (e) => {
		Ds(e, {
			get product() {
				return U(l);
			},
			addToCart: Ke,
			addToComparison: Je,
			get formatCurrency() {
				return mo;
			}
		});
	}, ft = (e) => {
		es(e, {
			get cart() {
				return U(d);
			},
			removeFromCart: Ye,
			get formatCurrency() {
				return mo;
			}
		});
	}, pt = (e) => {
		os(e, {
			get cart() {
				return U(d);
			},
			placeOrder: Ze,
			get formatCurrency() {
				return mo;
			},
			get shippingAddress() {
				return U(ae);
			},
			onShippingInput: Ae
		});
	}, mt = (e) => {
		_s(e, {
			get order() {
				return U(f);
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
	}, ht = (e) => {
		Ss(e, {
			get orders() {
				return U(p);
			},
			get pageInfo() {
				return U(m);
			},
			goToOrderHistoryPage: Ue,
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
	}, gt = (e) => {
		fs(e, {
			get compareItems() {
				return U(u);
			},
			addToCart: Ke,
			removeFromCompare: Xe,
			get formatCurrency() {
				return mo;
			},
			get truncate() {
				return _o;
			}
		});
	}, _t = (e) => {
		qs(e, {
			get products() {
				return U(s);
			},
			get productSearch() {
				return U(c);
			},
			addToCart: Ke,
			addToComparison: Je,
			openRandomProduct: qe,
			onProductSearchInput: Be,
			searchProducts: Ve,
			clearProductSearch: He,
			get formatCurrency() {
				return mo;
			}
		});
	};
	Mi(rt, (e) => {
		U(C) ? e(it) : U(w) ? e(at, 1) : U(o) === "admin-home" ? e(ot, 2) : U(o) === "admin-moderation" ? e(st, 3) : U(o) === "admin-audit" ? e(ct, 4) : U(o) === "seller-home" ? e(F, 5) : U(o) === "seller-inventory" ? e(lt, 6) : U(o) === "seller-sales" ? e(ut, 7) : U(o) === "product" && U(l) ? e(dt, 8) : U(o) === "cart" ? e(ft, 9) : U(o) === "checkout" ? e(pt, 10) : U(o) === "confirmation" && U(f) ? e(mt, 11) : U(o) === "orders" ? e(ht, 12) : U(o) === "compare" ? e(gt, 13) : e(_t, -1);
	});
	var vt = B(rt, 2), yt = (e) => {
		var t = rc(), n = z(t, !0);
		k(t), V(() => Q(n, U(T))), Z(e, t);
	};
	Mi(vt, (e) => {
		U(T) && e(yt);
	}), k(tt);
	var bt = B(tt, 2), xt = (e) => {
		var t = ac();
		zi(t, 5, () => U(ce), (e) => e.id, (e, t) => {
			var n = ic();
			let r;
			var i = z(n, !0);
			k(n), V(() => {
				r = ua(n, 1, "cart-toast", null, r, { error: U(t).type === "error" }), Q(i, (U(t), W(() => U(t).message)));
			}), Z(e, n);
		}), k(t), Z(e, t);
	};
	Mi(bt, (e) => {
		U(ce), W(() => U(ce).length > 0) && e(xt);
	});
	var St = B(bt, 2), Ct = z(St), wt = (e) => {
		var t = cc();
		zi(t, 5, () => r, Ii, (e, t) => {
			var n = sc();
			let r;
			var i = z(n), a = z(i, !0);
			k(i);
			var o = B(i, 2), s = (e) => {
				Z(e, oc());
			};
			Mi(o, (e) => {
				U(oe), U(t), W(() => U(oe) === U(t).value) && e(s);
			}), k(n), V(() => {
				r = ua(n, 1, "theme-dock-option", null, r, { "active-theme": U(oe) === U(t).value }), _a(n, "aria-checked", (U(oe), U(t), W(() => U(oe) === U(t).value))), Q(a, (U(t), W(() => U(t).label)));
			}), Y("click", n, () => fe(U(t).value)), Z(e, n);
		}), k(t), Z(e, t);
	};
	Mi(Ct, (e) => {
		U(se) && e(wt);
	});
	var Tt = B(Ct, 2);
	k(St), k(N), V(() => {
		_a(N, "data-page", U(o)), _a(Tt, "aria-expanded", U(se));
	}), Y("click", Tt, de), Z(e, N), $e();
}
var tc, nc, rc, ic, ac, oc, sc, cc, lc, uc = e((() => {
	no(), ro(), Ya(), eo(), Do(), Ao(), Fo(), Ro(), $o(), as(), ds(), gs(), xs(), Es(), ks(), Ns(), Bs(), Ks(), $s(), Co(), tc = /* @__PURE__ */ X("<div class=\"state-card\">Loading...</div>"), nc = /* @__PURE__ */ X("<div class=\"state-card error\"> </div>"), rc = /* @__PURE__ */ X("<p class=\"status-banner\"> </p>"), ic = /* @__PURE__ */ X("<div role=\"status\"> </div>"), ac = /* @__PURE__ */ X("<div class=\"cart-toast-stack\" aria-live=\"polite\" aria-label=\"Cart notifications\"></div>"), oc = /* @__PURE__ */ X("<span class=\"theme-dock-check\">Current</span>"), sc = /* @__PURE__ */ X("<button type=\"button\" role=\"menuitemradio\"><span> </span> <!></button>"), cc = /* @__PURE__ */ X("<div class=\"theme-dock-menu\" role=\"menu\" aria-label=\"Theme picker\"></div>"), lc = /* @__PURE__ */ X("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section> <!> <div class=\"theme-dock\"><!> <button class=\"theme-dock-toggle\" type=\"button\" aria-haspopup=\"menu\">Theme</button></div></div>");
})), dc = e((() => {})), fc = /* @__PURE__ */ t((() => {
	eo(), uc(), dc(), _i(ec, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default fc();
