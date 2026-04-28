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
})), b, x, S, ee, C, w, T, E, te, ne, re, ie, ae, oe, se, ce, le, ue, de, fe, pe, D = e((() => {
	b = 1024, x = 2048, S = 4096, ee = 8192, C = 16384, w = 32768, T = 1 << 25, E = 65536, te = 1 << 18, ne = 1 << 19, re = 1 << 20, ie = 1 << 25, ae = 65536, oe = 1 << 21, se = 1 << 22, ce = 1 << 23, le = Symbol("$state"), ue = Symbol("legacy props"), de = Symbol(""), fe = new class extends Error {
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
var De = e((() => {
	r(), he();
})), Oe, O, ke, Ae = e((() => {
	Oe = {}, O = Symbol(), ke = "http://www.w3.org/1999/xhtml";
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
	if (e === null) throw je(), Oe;
	return j = e;
}
function Ie() {
	return Fe(/* @__PURE__ */ En(j));
}
function k(e) {
	if (A) {
		if (/* @__PURE__ */ En(j) !== null) throw je(), Oe;
		j = e;
	}
}
function Le(e = 1) {
	if (A) {
		for (var t = e, n = j; t--;) n = /* @__PURE__ */ En(n);
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
		var i = /* @__PURE__ */ En(n);
		e && n.remove(), n = i;
	}
}
function ze(e) {
	if (!e || e.nodeType !== 8) throw je(), Oe;
	return e.data;
}
var A, j, M = e((() => {
	D(), Ae(), Ne(), Ln(), A = !1;
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
		for (var r of n) Xn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, N = t.p, e ?? {};
}
function et() {
	return !Ke || N !== null && N.l === null;
}
var N, P = e((() => {
	r(), De(), J(), H(), qe(), D(), N = null;
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
	if (t === null) return K.f |= ce, e;
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
	r(), Ae(), Ln(), D(), y(), J();
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
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ae, ft(t.deps));
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
	ht(), gt(), y(), J(), H(), yn(), vt = !1, yt = !1;
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
			if (!(r.f & 24576) && Dr(r) && (Bt = /* @__PURE__ */ new Set(), Mr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && fr(r), Bt?.size > 0)) {
				_n.clear();
				for (let e of Bt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Bt.has(n) && (Bt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Mr(n);
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
	D(), qe(), y(), J(), De(), at(), r(), ct(), yn(), H(), mt(), Ae(), dt(), bt(), Xe(), xt(), At = /* @__PURE__ */ new Set(), I = null, jt = null, Mt = null, Nt = !1, Pt = !1, Ft = null, It = null, Lt = 0, Rt = 1, zt = class e {
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
					a ? r.f ^= b : i & 4 ? t.push(r) : Ge && i & 16777224 ? n.push(r) : Dr(r) && (i & 16 && this.#c.add(r), Mr(r));
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
			t !== O && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), jt?.set(e, e.v));
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
				Lt = 0, Mt = null, Ft = null, It = null, Pt = !1, I = null, jt = null, _n.clear();
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
	let t = 0, n = un(0), r;
	return () => {
		qn() && (U(n), rr(() => (t === 0 && (r = W(() => e(() => mn(n)))), t += 1, () => {
			nt(() => {
				--t, t === 0 && (r?.(), r = void 0, mn(n));
			});
		})));
	};
}
var Ut = e((() => {
	J(), H(), yn(), Ye(), r(), at();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Wt(e, t, n, r) {
	new Kt(e, t, n, r);
}
var Gt, Kt, qt = e((() => {
	D(), Ae(), P(), ct(), H(), J(), M(), at(), De(), Ne(), r(), Vt(), yn(), Ye(), Ut(), Ln(), mt(), dt(), Gt = E | ne, Kt = class {
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
		#h = Ht(() => (this.#m = un(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = q;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = ar(() => {
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
				this.#a = or(() => this.#r(this.#e));
			} catch (e) {
				this.error(e);
			}
		}
		#_(e) {
			let t = this.#n.failed;
			t && (this.#s = or(() => {
				t(this.#e, () => e, () => () => {});
			}));
		}
		#v() {
			let e = this.#n.pending;
			e && (this.is_pending = !0, this.#o = or(() => e(this.#e)), nt(() => {
				var e = this.#c = document.createDocumentFragment(), t = wn();
				e.append(t), this.#a = this.#x(() => or(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, pr(this.#o, () => {
					this.#o = null;
				}), this.#b(I));
			}));
		}
		#y() {
			try {
				if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = or(() => {
					this.#r(this.#e);
				}), this.#u > 0) {
					var e = this.#c = document.createDocumentFragment();
					_r(this.#a, e);
					let t = this.#n.pending;
					this.#o = or(() => t(this.#e));
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
			Sr(this.#i), xr(this.#i), Ze(this.#i.ctx);
			try {
				return zt.ensure(), e();
			} catch (e) {
				return ot(e), null;
			} finally {
				Sr(t), xr(n), Ze(r);
			}
		}
		#S(e, t) {
			if (!this.has_pending_snippet()) {
				this.parent && this.parent.#S(e, t);
				return;
			}
			this.#u += e, this.#u === 0 && (this.#b(t), this.#o && pr(this.#o, () => {
				this.#o = null;
			}), this.#c &&= (this.#e.before(this.#c), null));
		}
		update_pending_count(e, t) {
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, nt(() => {
				this.#d = !1, this.#m && fn(this.#m, this.#l);
			}));
		}
		get_effect_pending() {
			return this.#h(), U(this.#m);
		}
		error(e) {
			var t = this.#n.onerror;
			let n = this.#n.failed;
			if (!t && !n) throw e;
			this.#a &&= (ur(this.#a), null), this.#o &&= (ur(this.#o), null), this.#s &&= (ur(this.#s), null), A && (Fe(this.#t), Le(), Fe(Re()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Me();
					return;
				}
				r = !0, i && Ee(), this.#s !== null && pr(this.#s, () => {
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
						return or(() => {
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
	let i = et() ? $t : tn;
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
		Sr(e), xr(t), Ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Xt(e = !0) {
	Sr(null), xr(null), Ze(null), e && I?.deactivate();
}
function Zt() {
	var e = q, t = e.b, n = I, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var Qt = e((() => {
	D(), r(), P(), qt(), ct(), J(), Vt(), ln(), H();
}));
/* @__NO_SIDE_EFFECTS__ */
function $t(e) {
	var t = 2 | x, n = K !== null && K.f & 2 ? K : null;
	return q !== null && (q.f |= ne), {
		ctx: N,
		deps: null,
		effects: null,
		equals: Be,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: O,
		wv: 0,
		parent: n ?? q,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function en(e, t, n) {
	let r = q;
	r === null && ge();
	var i = void 0, a = un(O), s = !K, c = /* @__PURE__ */ new Map();
	return nr(() => {
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
				if (l.activate(), n) a.f |= ce, fn(a, n);
				else {
					a.f & 8388608 && (a.f ^= ce), fn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(fe);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Jn(() => {
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
	return t.equals = He, t;
}
function nn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) ur(t[n]);
	}
}
function rn(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function an(e) {
	var t, n = q;
	Sr(rn(e));
	try {
		e.f &= ~ae, nn(e), t = kr(e);
	} finally {
		Sr(n);
	}
	return t;
}
function on(e) {
	var t = e.v, n = an(e);
	if (!e.equals(n) && (e.wv = Er(), (!I?.is_fork || e.deps === null) && (e.v = n, I?.capture(e, t, !0), e.deps === null))) {
		F(e, b);
		return;
	}
	Rr || (jt === null ? lt(e) : (qn() || I?.is_fork) && jt.set(e, n));
}
function sn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(fe), t.teardown = v, t.ac = null, jr(t, 0), cr(t));
}
function cn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Mr(t);
}
var ln = e((() => {
	r(), D(), J(), Ue(), De(), Ne(), H(), yn(), Xe(), qe(), P(), Ae(), Vt(), Qt(), y(), dt();
}));
function un(e, t) {
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
function dn(e, t) {
	let n = un(e, t);
	return Cr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function L(e, t = !1, n = !0) {
	let r = un(e);
	return t || (r.equals = He), Ke && n && N !== null && N.l !== null && (N.l.s ??= []).push(r), r;
}
function R(e, t, n = !1) {
	return K !== null && (!zr || K.f & 131072) && et() && K.f & 4325394 && (Br === null || !l.call(Br, e)) && Te(), fn(e, n ? bn(t) : t, It);
}
function fn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Rr ? _n.set(e, t) : _n.set(e, r), e.v = t;
		var i = zt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && an(t), jt === null && lt(t);
		}
		e.wv = Er(), hn(e, x, n), et() && q !== null && q.f & 1024 && !(q.f & 96) && (Ur === null ? wr([e]) : Ur.push(e)), !i.is_fork && gn.size > 0 && !vn && pn();
	}
	return t;
}
function pn() {
	vn = !1;
	for (let e of gn) e.f & 1024 && F(e, S), Dr(e) && Mr(e);
	gn.clear();
}
function mn(e) {
	R(e, e.v + 1);
}
function hn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = et(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && F(s, t), c & 2) {
				var u = s;
				jt?.delete(u), c & 65536 || (c & 512 && (s.f |= ae), hn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Bt !== null && Bt.add(d), n === null ? Dt(d) : n.push(d);
			}
		}
	}
}
var gn, _n, vn, yn = e((() => {
	r(), J(), Ue(), D(), De(), qe(), y(), Ye(), Xe(), P(), Vt(), xn(), ln(), dt(), gn = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Map(), vn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function bn(e) {
	if (typeof e != "object" || !e || le in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ dn(0), a = null, o = Kr, c = (e) => {
		if (Kr === o) return e();
		var t = K, n = Kr;
		xr(null), Tr(o);
		var r = e();
		return xr(t), Tr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ dn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ce();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ dn(r.value, a);
				return n.set(t, e), e;
			}) : R(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ dn(O, a));
					n.set(t, e), mn(i);
				}
			} else R(r, O), mn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === le) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ dn(bn(s ? t[r] : O), a)), n.set(r, o)), o !== void 0) {
				var l = U(o);
				return l === O ? void 0 : l;
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
				if (a !== void 0 && o !== O) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === le) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== O || Reflect.has(e, t);
			return (r !== void 0 || q !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ dn(i ? bn(e[t]) : O, a)), n.set(t, r)), U(r) === O) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ dn(O, a)), n.set(d + "", p)) : R(p, O);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ dn(void 0, a)), R(l, bn(o)), n.set(t, l));
			else {
				u = l.v !== O;
				var m = c(() => bn(o));
				R(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && R(g, _ + 1);
				}
				mn(i);
			}
			return !0;
		},
		ownKeys(e) {
			U(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== O;
			});
			for (var [r, a] of n) a.v !== O && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			we();
		}
	});
}
var xn = e((() => {
	r(), J(), y(), yn(), D(), Ae(), De(), Ye(), Xe(), qe(), new Set([
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
})), Sn = e((() => {
	Ne(), xn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/operations.js
function Cn() {
	if (Mn === void 0) {
		Mn = window, Nn = document, Pn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Fn = f(t, "firstChild").get, In = f(t, "nextSibling").get, _(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _(n) && (n.__t = void 0);
	}
}
function wn(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Tn(e) {
	return Fn.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function En(e) {
	return In.call(e);
}
function z(e, t) {
	if (!A) return /* @__PURE__ */ Tn(e);
	var n = /* @__PURE__ */ Tn(j);
	if (n === null) n = j.appendChild(wn());
	else if (t && n.nodeType !== 3) {
		var r = wn();
		return n?.before(r), Fe(r), r;
	}
	return t && jn(n), Fe(n), n;
}
function Dn(e, t = !1) {
	if (!A) {
		var n = /* @__PURE__ */ Tn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
	}
	if (t) {
		if (j?.nodeType !== 3) {
			var r = wn();
			return j?.before(r), Fe(r), r;
		}
		jn(j);
	}
	return j;
}
function B(e, t = 1, n = !1) {
	let r = A ? j : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ En(r);
	if (!A) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = wn();
			return r === null ? i?.after(a) : r.before(a), Fe(a), a;
		}
		jn(r);
	}
	return Fe(r), r;
}
function On(e) {
	e.textContent = "";
}
function kn() {
	return !Ge || Bt !== null ? !1 : (q.f & w) !== 0;
}
function An(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function jn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var Mn, Nn, Pn, Fn, In, Ln = e((() => {
	M(), r(), Sn(), y(), J(), qe(), D(), Vt(), Ae();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Rn(e) {
	A && /* @__PURE__ */ Tn(e) !== null && On(e);
}
function zn() {
	Bn || (Bn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Bn, Vn = e((() => {
	M(), Ln(), at(), Bn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Hn(e) {
	var t = K, n = q;
	xr(null), Sr(null);
	try {
		return e();
	} finally {
		xr(t), Sr(n);
	}
}
var Un = e((() => {
	H(), J(), Vn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Wn(e) {
	q === null && (K === null && be(e), ye()), Rr && ve(e);
}
function Gn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Kn(e, t) {
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
			Mr(r);
		} catch (e) {
			throw ur(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= E));
	}
	if (i !== null && (i.parent = n, n !== null && Gn(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function qn() {
	return K !== null && !zr;
}
function Jn(e) {
	let t = Kn(8, null);
	return F(t, b), t.teardown = e, t;
}
function Yn(e) {
	Wn("$effect");
	var t = q.f;
	if (!K && t & 32 && !(t & 32768)) {
		var n = N;
		(n.e ??= []).push(e);
	} else return Xn(e);
}
function Xn(e) {
	return Kn(4 | re, e);
}
function Zn(e) {
	return Wn("$effect.pre"), Kn(8 | re, e);
}
function Qn(e) {
	zt.ensure();
	let t = Kn(64 | ne, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? pr(t, () => {
			ur(t), n(void 0);
		}) : (ur(t), n(void 0));
	});
}
function $n(e) {
	return Kn(4, e);
}
function er(e, t) {
	var n = N, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = rr(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = q;
			try {
				Sr(n.parent), W(t);
			} finally {
				Sr(n);
			}
		}
	});
}
function tr() {
	var e = N;
	rr(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && F(n, S), Dr(n) && Mr(n), t.ran = !1;
		}
	});
}
function nr(e) {
	return Kn(se | ne, e);
}
function rr(e, t = 0) {
	return Kn(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	Jt(r, t, n, (t) => {
		Kn(8, () => e(...t.map(U)));
	});
}
function ir(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = Zt();
	Jt(r, t, n, (t) => {
		Kn(4, () => e(...t.map(U))), i && i();
	});
}
function ar(e, t = 0) {
	return Kn(16 | t, e);
}
function or(e) {
	return Kn(32 | ne, e);
}
function sr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Rr, n = K;
		br(!0), xr(null);
		try {
			t.call(null);
		} finally {
			br(e), xr(n);
		}
	}
}
function cr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Hn(() => {
			e.abort(fe);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : ur(n, t), n = r;
	}
}
function lr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || ur(t), t = n;
	}
}
function ur(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (dr(e.nodes.start, e.nodes.end), n = !0), F(e, T), cr(e, t && !n), jr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	sr(e), e.f ^= T, e.f |= C;
	var i = e.parent;
	i !== null && i.first !== null && fr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function dr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ En(e);
		e.remove(), e = n;
	}
}
function fr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pr(e, t, n = !0) {
	var r = [];
	mr(e, r, !0);
	var i = () => {
		n && ur(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function mr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			mr(i, t, o ? n : !1), i = a;
		}
	}
}
function hr(e) {
	gr(e, !0);
}
function gr(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (F(e, x), zt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			gr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function _r(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ En(n);
		t.append(n), n = i;
	}
}
var H = e((() => {
	J(), D(), De(), r(), y(), Ln(), P(), Vt(), Qt(), Un(), dt();
})), vr, yr = e((() => {
	yn(), J(), vr = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
function br(e) {
	Rr = e;
}
function xr(e) {
	K = e;
}
function Sr(e) {
	q = e;
}
function Cr(e) {
	K !== null && (!Ge || K.f & 2) && (Br === null ? Br = [e] : Br.push(e));
}
function wr(e) {
	Ur = e;
}
function Tr(e) {
	Kr = e;
}
function Er() {
	return ++Wr;
}
function Dr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ae), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Dr(a) && on(a), a.wv > e.wv) return !0;
		}
		t & 512 && jt === null && F(e, b);
	}
	return !1;
}
function Or(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ge && Br !== null && l.call(Br, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Or(a, t, !1) : t === a && (n ? F(a, x) : a.f & 1024 && F(a, S), Dt(a));
	}
}
function kr(e) {
	var t = Vr, n = Hr, r = Ur, i = K, a = Br, o = N, s = zr, c = Kr, l = e.f;
	Vr = null, Hr = 0, Ur = null, K = l & 96 ? null : e, Br = null, Ze(e.ctx), zr = !1, Kr = ++Gr, e.ac !== null && (Hn(() => {
		e.ac.abort(fe);
	}), e.ac = null);
	try {
		e.f |= oe;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = I?.is_fork;
		if (Vr !== null) {
			var m;
			if (p || jr(e, Hr), f !== null && Hr > 0) for (f.length = Hr + Vr.length, m = 0; m < Vr.length; m++) f[Hr + m] = Vr[m];
			else e.deps = f = Vr;
			if (qn() && e.f & 512) for (m = Hr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Hr < f.length && (jr(e, Hr), f.length = Hr);
		if (et() && Ur !== null && !zr && f !== null && !(e.f & 6146)) for (m = 0; m < Ur.length; m++) Or(Ur[m], e);
		if (i !== null && i !== e) {
			if (Gr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Gr;
			if (t !== null) for (let e of t) e.rv = Gr;
			Ur !== null && (r === null ? r = Ur : r.push(...Ur));
		}
		return e.f & 8388608 && (e.f ^= ce), d;
	} catch (e) {
		return ot(e);
	} finally {
		e.f ^= oe, Vr = t, Hr = n, Ur = r, K = i, Br = a, Ze(o), zr = s, Kr = c;
	}
}
function Ar(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = c.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Vr === null || !l.call(Vr, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~ae), lt(a), sn(a), jr(a, 0);
	}
}
function jr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Ar(e, n[r]);
}
function Mr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		F(e, b);
		var n = q, r = Lr;
		q = e, Lr = !0;
		try {
			t & 16777232 ? lr(e) : cr(e), sr(e);
			var i = kr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Wr;
		} finally {
			Lr = r, q = n;
		}
	}
}
async function Nr() {
	if (Ge) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), St();
}
function U(e) {
	var t = (e.f & 2) != 0;
	if (vr?.add(e), K !== null && !zr && !(q !== null && q.f & 16384) && (Br === null || !l.call(Br, e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Gr && (e.rv = Gr, Vr === null && n !== null && n[Hr] === e ? Hr++ : Vr === null ? Vr = [e] : Vr.push(e));
		else {
			(K.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : l.call(r, K) || r.push(K);
		}
	}
	if (Rr && _n.has(e)) return _n.get(e);
	if (t) {
		var i = e;
		if (Rr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Fr(i)) && (a = an(i)), _n.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !zr && K !== null && (Lr || (K.f & 512) != 0), s = (i.f & w) === 0;
		Dr(i) && (o && (i.f |= 512), on(i)), o && !s && (cn(i), Pr(i));
	}
	if (jt?.has(e)) return jt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Pr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (cn(t), Pr(t));
}
function Fr(e) {
	if (e.v === O) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (_n.has(t) || t.f & 2 && Fr(t)) return !0;
	return !1;
}
function W(e) {
	var t = zr;
	try {
		return zr = !0, e();
	} finally {
		zr = t;
	}
}
function G(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (le in e) Ir(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && le in n && Ir(n);
		}
	}
}
function Ir(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Ir(e[n], t);
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
var Lr, Rr, K, zr, q, Br, Vr, Hr, Ur, Wr, Gr, Kr, J = e((() => {
	r(), y(), H(), D(), yn(), ln(), qe(), Ye(), Xe(), P(), Vt(), ct(), Ae(), yr(), Un(), dt(), Ne(), Lr = !1, Rr = !1, K = null, zr = !1, q = null, Br = null, Vr = null, Hr = 0, Ur = null, Wr = 1, Gr = 0, Kr = Gr;
})), qr = e((() => {
	qa(), Za(), H();
}));
//#endregion
//#region node_modules/svelte/src/utils.js
function Jr(e) {
	return Xr.includes(e);
}
var Yr, Xr, Zr, Qr = e((() => {
	Yr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), [...Yr], Xr = ["touchstart", "touchmove"], Zr = [
		"$state",
		"$state.raw",
		"$derived",
		"$derived.by"
	], [...Zr];
})), $r = e((() => {
	D(), Qr(), J();
})), ei = e((() => {
	D(), M(), P();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function ti(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ni.call(t, e), !e.cancelBubble) return Hn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Y(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = ti(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Jn(() => {
		t.removeEventListener(e, o, a);
	});
}
function ni(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	oi = e;
	var o = 0, s = oi === e && e[ri];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[ri] = t;
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
		xr(null), Sr(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[ri]?.[r];
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
			e[ri] = t, delete e.currentTarget, xr(u), Sr(f);
		}
	}
}
var ri, ii, ai, oi, si = e((() => {
	H(), y(), M(), at(), J(), Un(), ri = Symbol("events"), ii = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), oi = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function ci(e) {
	return ui?.createHTML(e) ?? e;
}
function li(e) {
	var t = An("template");
	return t.innerHTML = ci(e.replaceAll("<!>", "<!---->")), t.content;
}
var ui, di = e((() => {
	Ln(), ui = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function fi(e, t) {
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
		if (A) return fi(j, null), j;
		i === void 0 && (i = li(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Tn(i)));
		var t = r || Pn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Tn(t), s = t.lastChild;
			fi(o, s);
		} else fi(t, t);
		return t;
	};
}
function pi(e = "") {
	if (!A) {
		var t = wn(e + "");
		return fi(t, t), t;
	}
	var n = j;
	return n.nodeType === 3 ? jn(n) : (n.before(n = wn()), Fe(n)), fi(n, n), n;
}
function mi() {
	if (A) return fi(j, null), j;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = wn();
	return e.append(t, n), fi(t, n), e;
}
function Z(e, t) {
	if (A) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = j), Ie();
		return;
	}
	e !== null && e.before(t);
}
var hi = e((() => {
	M(), Ln(), di(), J(), Ae(), D();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
function Q(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function gi(e, t) {
	return _i(e, t);
}
function _i(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	Cn();
	var c = void 0, l = Qn(() => {
		var l = n ?? t.appendChild(wn());
		Wt(l, { pending: () => {} }, (t) => {
			Qe({});
			var n = N;
			if (a && (n.c = a), i && (r.$$events = i), A && fi(t, null), vi = o, c = e(t, r) || {}, vi = !0, A && (q.nodes.end = j, j === null || j.nodeType !== 8 || j.data !== "]")) throw je(), Oe;
			$e();
		}, s);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = Jr(r);
					for (let e of [t, document]) {
						var a = yi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), yi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ni, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(u(ii)), ai.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = yi.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, ni), r.delete(e), r.size === 0 && yi.delete(n)) : r.set(e, i);
			}
			ai.delete(f), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return bi.set(c, l), c;
}
var vi, yi, bi, xi = e((() => {
	r(), Ln(), Ae(), J(), P(), H(), M(), y(), si(), Ne(), De(), hi(), Qr(), D(), qt(), yi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new WeakMap();
})), Si = e((() => {
	D(), M(), H(), yn(), xi(), J();
})), Ci = e((() => {
	y(), D(), P(), Qr();
})), wi = e((() => {
	De(), P();
})), Ti = e((() => {
	Je(), H(), J(), Xe();
})), Ei = e((() => {
	Qt(), J(), M();
})), Di = e((() => {
	De();
})), Oi, ki = e((() => {
	Vt(), H(), M(), Ln(), Oi = class {
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
				if (n) hr(n), this.#r.delete(t);
				else {
					var r = this.#n.get(t);
					r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
				}
				for (let [t, n] of this.#e) {
					if (this.#e.delete(t), t === e) break;
					let r = this.#n.get(n);
					r && (ur(r.effect), this.#n.delete(n));
				}
				for (let [e, r] of this.#t) {
					if (e === t || this.#r.has(e)) continue;
					let i = () => {
						if (Array.from(this.#e.values()).includes(e)) {
							var t = document.createDocumentFragment();
							_r(r, t), t.append(wn()), this.#n.set(e, {
								effect: r,
								fragment: t
							});
						} else ur(r);
						this.#r.delete(e), this.#t.delete(e);
					};
					this.#i || !n ? (this.#r.add(e), pr(r, i, !1)) : i();
				}
			}
		};
		#o = (e) => {
			this.#e.delete(e);
			let t = Array.from(this.#e.values());
			for (let [e, n] of this.#n) t.includes(e) || (ur(n.effect), this.#n.delete(e));
		};
		ensure(e, t) {
			var n = I, r = kn();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = wn();
				i.append(a), this.#n.set(e, {
					effect: or(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, or(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else A && (this.anchor = j), this.#a(n);
		}
	};
})), Ai = e((() => {
	y(), H(), yn(), M(), at(), P(), Vt(), ki(), Qt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function ji(e, t, n = !1) {
	var r;
	A && (r = j, Ie());
	var i = new Oi(e), a = n ? E : 0;
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
	ar(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Mi = e((() => {
	D(), M(), H(), ki();
})), Ni = e((() => {
	P(), H(), M(), ki();
})), Pi = e((() => {
	H(), M(), Ln();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Fi(e, t) {
	return t;
}
function Ii(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		pr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Li(e, u(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, d = l.parentNode;
			On(d), d.append(l), e.items.clear();
		}
		Li(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Li(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ie, _r(a, document.createDocumentFragment())) : ur(t[i], n);
	}
}
function Ri(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = A ? Fe(/* @__PURE__ */ Tn(l)) : l.appendChild(wn());
	}
	A && Ie();
	var d = null, f = /* @__PURE__ */ tn(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Bi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ie, Hi(d, null, o)) : hr(d) : pr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: ar(() => {
			p = U(f);
			var e = p.length;
			let s = !1;
			A && ze(o) === "[!" != (e === 0) && (o = Re(), Fe(o), Pe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = I, v = kn(), y = 0; y < e; y += 1) {
				A && j.nodeType === 8 && j.data === "]" && (o = j, s = !0, Pe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && fn(S.v, b), S.i && fn(S.i, y), v && u.unskip_effect(S.e)) : (S = Vi(c, h ? o : Wi ??= wn(), b, x, y, i, t, n), h || (S.e.f |= ie), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = or(() => a(o)) : (d = or(() => a(Wi ??= wn())), d.f |= ie)), e > l.size && _e("", "", ""), A && e > 0 && Fe(Re()), !h) if (m.set(u, l), v) {
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
function zi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Bi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = zi(e.effect.first), l, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (hr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ie, _ === c) Hi(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Ui(e, d, _), Ui(e, _, y), Hi(_, y, n), d = _, p = [], m = [], c = zi(d.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Hi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					Ui(e, S.prev, ee.next), Ui(e, d, S), Ui(e, ee, b), c = b, d = ee, --v, p = [], m = [];
				} else l.delete(_), Hi(_, c, n), Ui(e, _.prev, _.next), Ui(e, _, d === null ? e.effect.first : d.next), Ui(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = zi(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = zi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Li(e, u(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var C = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || C.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && C.push(c), c = zi(c.next);
		var w = C.length;
		if (w > 0) {
			var T = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < w; v += 1) C[v].nodes?.a?.fix();
			}
			Ii(e, C, T);
		}
	}
	a && nt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Vi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? un(n) : /* @__PURE__ */ L(n, !1, !1) : null, l = o & 2 ? un(i) : null;
	return {
		v: c,
		i: l,
		e: or(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Hi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ En(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Ui(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var Wi, Gi = e((() => {
	Ae(), M(), Ln(), H(), yn(), y(), D(), at(), J(), r(), ln(), Vt(), De();
})), Ki = e((() => {
	H(), M(), hi(), Qr(), P(), Ln(), J(), D();
})), qi = e((() => {
	M();
})), Ji = e((() => {
	Qr();
})), Yi = e((() => {
	D(), H(), P(), M(), di(), hi(), De(), Ln(), Ji(), ki();
})), Xi = e((() => {
	D(), H(), M(), ki();
})), Zi = e((() => {
	y();
})), Qi = e((() => {
	Zi();
})), $i = e((() => {
	y(), H(), J(), Qi(), xi(), D(), at(), Un();
})), ea = e((() => {
	M(), Ln(), H(), xi(), J(), P(), D(), hi(), Qr(), ki(), $i();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function ta(e, t) {
	let n = null, r = A;
	var i;
	if (A) {
		n = j;
		for (var a = /* @__PURE__ */ Tn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ En(a);
		if (a === null) Pe(!1);
		else {
			var o = /* @__PURE__ */ En(a);
			a.remove(), Fe(o);
		}
	}
	A || (i = document.head.appendChild(wn()));
	try {
		ar(() => t(i), te | ne);
	} finally {
		r && (Pe(!0), Fe(n));
	}
}
var na = e((() => {
	M(), Ln(), H(), D();
})), ra = e((() => {
	H(), Ln();
})), ia = e((() => {
	H(), J();
})), aa = e((() => {
	H();
}));
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function oa(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || sa.includes(r[o - 1])) && (s === r.length || sa.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
var sa, ca = e((() => {
	y(), sa = [..." 	\n\r\f\xA0\v﻿"];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function la(e, t, n, r, i, a) {
	var o = e.__className;
	if (A || o !== n || o === void 0) {
		var s = oa(n, r, a);
		(!A || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
var ua = e((() => {
	ca(), M();
})), da = e((() => {
	ca(), M();
})), fa = e((() => {
	H(), Un(), xn(), y(), Vt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function pa(e) {
	if (A) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					ha(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					ha(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, nt(n), zn();
	}
}
function ma(e, t) {
	var n = ga(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== xa) || (e.value = t ?? "");
}
function ha(e, t, n, r) {
	var i = ga(e);
	A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ba) || i[t] !== (i[t] = n) && (t === "loading" && (e[de] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _a(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ga(e) {
	return e.__attributes ??= {
		[va]: e.nodeName.includes("-"),
		[ya]: e.namespaceURI === ke
	};
}
function _a(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Sa.get(t);
	if (n) return n;
	Sa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && n.push(o);
		i = g(i);
	}
	return n;
}
var va, ya, ba, xa, Sa, Ca = e((() => {
	r(), M(), y(), si(), Vn(), Ne(), D(), at(), Qr(), J(), aa(), ca(), ua(), da(), Ae(), H(), fa(), Qt(), va = Symbol("is custom element"), ya = Symbol("is html"), ba = pe ? "link" : "LINK", xa = pe ? "progress" : "PROGRESS", Sa = /* @__PURE__ */ new Map();
})), wa = e((() => {
	M(), Ln(), di(), aa();
})), Ta = e((() => {
	Un();
})), Ea = e((() => {
	H(), Un(), De(), xn(), at(), M(), J(), P(), Vt();
})), Da = e((() => {
	H(), Un();
})), Oa = e((() => {
	Un();
})), ka = e((() => {
	H(), y();
})), Aa = e((() => {
	H(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function ja(e, t) {
	return e === t || e?.[le] === t;
}
function Ma(e = {}, t, n, r) {
	var i = N.r, a = q;
	return $n(() => {
		var o, s;
		return rr(() => {
			o = s, s = r?.() || [], W(() => {
				e !== n(...s) && (t(e, ...s), o && ja(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && ja(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
var Na = e((() => {
	D(), P(), H(), J();
})), Pa = e((() => {
	H(), Un();
})), Fa = e((() => {
	H(), Un();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function Ia(e) {
	return function(...t) {
		return t[0].preventDefault(), e?.apply(this, t);
	};
}
var La = e((() => {
	y(), H(), si();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ra(e = !1) {
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
	n.b.length && Zn(() => {
		za(t, r), a(n.b);
	}), Yn(() => {
		let e = W(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Yn(() => {
		za(t, r), a(n.a);
	});
}
function za(e, t) {
	if (e.l.s) for (let t of e.l.s) U(t);
	t();
}
var Ba = e((() => {
	y(), P(), ln(), H(), J();
})), Va = e((() => {
	yn(), J(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !Ke || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? W(r) : r), s);
	let u;
	if (a) {
		var d = le in e || ue in e;
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
	var _ = !1, v = (n & 1 ? $t : tn)(() => (_ = !1, h()));
	a && U(v);
	var y = q;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? U(v) : i && a ? bn(e) : e;
			return R(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Rr && _ || y.f & 16384 ? v.v : U(v);
	});
}
var Ha = e((() => {
	r(), Ae(), y(), yn(), ln(), J(), De(), D(), xn(), bt(), qe(), H();
})), Ua = e((() => {
	P(), H(), bt(), Qt();
})), Wa = e((() => {
	D(), H(), yn(), xi(), J(), Vt(), y(), De(), P(), qe(), dt(), La();
})), Ga = e((() => {
	Wa(), H(), hi(), y(), Ln();
})), Ka = e((() => {
	D(), Je(), J();
})), qa = e((() => {
	qr(), P(), $r(), ei(), Si(), Ci(), wi(), Ye(), Ti(), Ei(), Di(), Ai(), Mi(), Ni(), Pi(), Gi(), Ki(), qi(), Yi(), Xi(), ea(), na(), ra(), ia(), aa(), Ca(), ua(), si(), Vn(), wa(), da(), $i(), Ta(), Ea(), Da(), Oa(), ka(), fa(), Aa(), Na(), Pa(), Fa(), M(), La(), Ba(), Va(), hi(), Qt(), Vt(), ln(), H(), yn(), Ha(), bt(), qt(), yr(), xi(), J(), Ua(), Zi(), xn(), Ga(), Ln(), ca(), Je(), y(), Ji(), Sn(), Ka(), ct();
})), Ja = e((() => {
	M(), De();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function Ya(e) {
	N === null && me("onMount"), Ke && N.l !== null ? Xa(N).m.push(e) : Yn(() => {
		let t = W(e);
		if (typeof t == "function") return t;
	});
}
function Xa(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var Za = e((() => {
	J(), y(), qa(), De(), qe(), P(), r(), Vt(), Ja(), xi(), Yi();
})), Qa = e((() => {})), $a = e((() => {
	Qa(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), eo = e((() => {
	qe(), We();
}));
//#endregion
//#region frontend/src/lib/app-shell.js
function to() {
	return typeof window > "u" ? "/buyer/home" : window.location.pathname;
}
function no() {
	let e = to().match(/\/buyer\/products\/(\d+)/);
	return e ? Number(e[1]) : null;
}
function ro() {
	let e = to().match(/\/buyer\/orders\/(\d+)\/confirmation/);
	return e ? Number(e[1]) : null;
}
function io(e = to()) {
	return e.startsWith("/admin") ? "admin" : e.startsWith("/seller") ? "seller" : "buyer";
}
function ao(e = to()) {
	return e === "/admin" ? "admin-home" : e === "/admin/sub" ? "admin-moderation" : e === "/admin/audit" ? "admin-audit" : e === "/seller/home" ? "seller-home" : e === "/seller/inventory" ? "seller-inventory" : e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
}
function oo(e) {
	return vo[e] || vo.storefront;
}
function so(e) {
	return oo(e).title;
}
function co(e) {
	return e === "admin-moderation" ? "/admin/classic/sub" : e === "admin-audit" ? "/admin/classic/audit" : "/admin/classic";
}
function lo(e, t) {
	return e === "admin" ? co(t) : e === "seller" ? "/seller/classic/home" : "/buyer/classic/home";
}
function uo(e) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(e);
}
function fo(e) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(new Date(e));
}
function po(e) {
	return e === "demo_card" ? "Demo Credit Card" : e;
}
function mo(e, t) {
	return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
}
function ho(e) {
	return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
}
function go(e) {
	return e.banned ? "Banned" : e.blocked ? "Blocked" : e.approved ? "Approved" : "Pending";
}
function _o(e) {
	return e ? e.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "";
}
var vo, yo, bo = e((() => {
	vo = {
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
	}, yo = {
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
		seller: [{
			href: "/seller/home",
			label: "Seller Home"
		}, {
			href: "/seller/inventory",
			label: "Inventory"
		}],
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
				href: "/buyer/compare",
				label: "Compare"
			}
		]
	};
}));
//#endregion
//#region frontend/src/components/AppHero.svelte
function xo(e, t) {
	Qe(t, !1);
	let n = /* @__PURE__ */ L(), r = /* @__PURE__ */ L(), i = $(t, "appMode", 8), a = $(t, "currentPage", 8), o = $(t, "onLogout", 8), s = {
		admin: "Admin Workspace",
		seller: "Seller Workspace",
		buyer: "Buyer Workspace"
	};
	er(() => G(i()), () => {
		R(n, yo[i()] || yo.buyer);
	}), er(() => (G(i()), G(a())), () => {
		R(r, lo(i(), a()));
	}), tr(), Ra();
	var c = Co(), l = z(c), u = z(l), d = z(u, !0);
	k(u), Le(2), k(l);
	var f = B(l, 2), p = z(f);
	Ri(p, 1, () => U(n), Fi, (e, t) => {
		var n = So(), r = z(n, !0);
		k(n), V(() => {
			ha(n, "href", (U(t), W(() => U(t).href))), Q(r, (U(t), W(() => U(t).label)));
		}), Z(e, n);
	});
	var m = B(p, 2), h = B(m, 2);
	k(f), k(c), V(() => {
		Q(d, (G(i()), W(() => s[i()] || s.buyer))), ha(m, "href", U(r));
	}), Y("click", h, function(...e) {
		o()?.apply(this, e);
	}), Z(e, c), $e();
}
var So, Co, wo = e((() => {
	$a(), eo(), qa(), bo(), So = /* @__PURE__ */ X("<a class=\"action-link\"> </a>"), Co = /* @__PURE__ */ X("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function To(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = Eo(), o = z(a), s = z(o), c = z(s, !0);
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
var Eo, Do = e((() => {
	$a(), eo(), qa(), Eo = /* @__PURE__ */ X("<div class=\"catalog-header\"><div><p class=\"section-kicker\"> </p> <h2> </h2></div> <button class=\"refresh-button\">Refresh</button></div>");
}));
//#endregion
//#region frontend/src/components/AdminAuditView.svelte
function Oo(e, t) {
	Qe(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Ra();
	var a = mi(), o = Dn(a), s = (e) => {
		Z(e, ko());
	}, c = (e) => {
		var t = jo(), a = B(z(t), 2);
		Ri(a, 5, n, Fi, (e, t) => {
			var n = Ao(), a = z(n), o = z(a, !0);
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
	ji(o, (e) => {
		G(n()), W(() => n().length === 0) ? e(s) : e(c, -1);
	}), Z(e, a), $e();
}
var ko, Ao, jo, Mo = e((() => {
	$a(), eo(), qa(), ko = /* @__PURE__ */ X("<div class=\"state-card\">No audit log entries yet.</div>"), Ao = /* @__PURE__ */ X("<article class=\"admin-audit-row\"><p class=\"seller admin-audit-when\"> </p> <p class=\"admin-audit-user\"> </p> <p class=\"admin-audit-action\"> </p> <p class=\"admin-audit-details\"> </p></article>"), jo = /* @__PURE__ */ X("<div class=\"panel admin-box\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent actions</p> <h3>Recorded system activity</h3></div></div> <div class=\"admin-audit-list\"></div></div>");
}));
//#endregion
//#region frontend/src/components/AdminHomeView.svelte
function No(e) {
	Z(e, Po());
}
var Po, Fo = e((() => {
	$a(), eo(), qa(), Po = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--two\"><article class=\"admin-region admin-region--products\"><p class=\"section-kicker\">Moderation</p> <h3>User and listing review</h3> <p class=\"detail-description\">Review pending registrations, approve or reject seller listings, and handle active account status changes.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/sub\">User management</a></div></article> <article class=\"admin-region\"><p class=\"section-kicker\">Audit</p> <h3>Recent platform activity</h3> <p class=\"detail-description\">Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/audit\">Open audit log</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/AdminModerationView.svelte
function Io(e, t) {
	Qe(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Ra();
	var x = Yo(), S = z(x), ee = z(S), C = B(z(ee), 2), w = z(C, !0);
	k(C), k(ee);
	var T = B(ee, 2), E = (e) => {
		Z(e, Lo());
	}, te = (e) => {
		var t = zo(), r = z(t), i = B(z(r));
		Ri(i, 5, n, Fi, (e, t) => {
			var n = Ro(), r = z(n), i = z(r, !0);
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
	ji(T, (e) => {
		G(n()), W(() => n().length === 0) ? e(E) : e(te, -1);
	}), k(S);
	var ne = B(S, 2), re = z(ne), ie = B(z(re), 2), ae = z(ie, !0);
	k(ie), k(re);
	var oe = B(re, 2), se = (e) => {
		Z(e, Bo());
	}, ce = (e) => {
		var t = Go(), n = z(t), i = B(z(n));
		Ri(i, 5, r, Fi, (e, t) => {
			var n = Wo(), r = z(n), i = z(r, !0);
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
				Z(e, pi("Pending approval"));
			}, b = (e) => {
				Z(e, pi("Rejected"));
			}, x = (e) => {
				Z(e, pi("Listed"));
			}, S = (e) => {
				Z(e, pi("Delisted"));
			};
			ji(_, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(y) : (U(t), W(() => U(t).listingStatus === "rejected") ? e(b, 1) : (U(t), W(() => U(t).isListed) ? e(x, 2) : e(S, -1)));
			}), k(g);
			var ee = B(g), C = z(ee), w = (e) => {
				var n = Vo(), r = z(n), i = B(r, 2);
				k(n), Y("click", r, () => d()(U(t).id)), Y("click", i, () => f()(U(t).id)), Z(e, n);
			}, T = (e) => {
				var n = Ho();
				Y("click", n, () => p()(U(t).id)), Z(e, n);
			}, E = (e) => {
				Z(e, Uo());
			};
			ji(C, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(w) : (U(t), W(() => U(t).isListed) ? e(T, 1) : e(E, -1));
			}), k(ee), k(n), V((e) => {
				Q(i, (U(t), W(() => U(t).name))), Q(o, (U(t), W(() => U(t).seller?.username || "Unknown seller"))), Q(c, (U(t), W(() => U(t).description || "No description provided."))), Q(u, e), Q(h, (U(t), W(() => U(t).stock)));
			}, [() => (G(v()), U(t), W(() => v()(U(t).price)))]), Z(e, n);
		}), k(i), k(n), k(t), Z(e, t);
	};
	ji(oe, (e) => {
		G(r()), W(() => r().length === 0) ? e(se) : e(ce, -1);
	}), k(ne);
	var le = B(ne, 2), ue = z(le), de = B(z(ue), 2), fe = z(de);
	k(de), k(ue);
	var pe = B(ue, 2), D = z(pe);
	pa(D);
	var me = B(D, 4);
	k(pe);
	var he = B(pe, 2), ge = (e) => {
		Z(e, Ko());
	}, _e = (e) => {
		var t = Jo(), n = z(t), r = B(z(n));
		Ri(r, 5, i, Fi, (e, t) => {
			var n = qo(), r = z(n), i = z(r, !0);
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
	ji(he, (e) => {
		G(i()), W(() => i().length === 0) ? e(ge) : e(_e, -1);
	});
	var ve = B(he, 2), ye = z(ve), be = B(ye, 2), xe = z(be);
	k(be);
	var Se = B(be, 2);
	k(ve), k(le), k(x), V(() => {
		Q(w, (G(n()), W(() => n().length))), Q(ae, (G(r()), W(() => r().length))), Q(fe, `${(G(a()), W(() => a().totalPages)) ?? ""} page${(G(a()), W(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), ma(D, o()), ye.disabled = (G(a()), W(() => !a().hasPreviousPage)), Q(xe, `Page ${(G(a()), W(() => a().page)) ?? ""} of ${(G(a()), W(() => a().totalPages)) ?? ""}`), Se.disabled = (G(a()), W(() => !a().hasNextPage));
	}), Y("input", D, function(...e) {
		s()?.apply(this, e);
	}), Y("click", me, function(...e) {
		h()?.apply(this, e);
	}), Y("submit", pe, Ia(function(...e) {
		m()?.apply(this, e);
	})), Y("click", ye, () => g()(a().page - 1)), Y("click", Se, () => g()(a().page + 1)), Z(e, x), $e();
}
var Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo = e((() => {
	$a(), eo(), qa(), Lo = /* @__PURE__ */ X("<div class=\"state-card\">No pending users right now.</div>"), Ro = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), zo = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Bo = /* @__PURE__ */ X("<div class=\"state-card\">No seller listings are available for review.</div>"), Vo = /* @__PURE__ */ X("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), Ho = /* @__PURE__ */ X("<button class=\"admin-button admin-button-danger\">Delist</button>"), Uo = /* @__PURE__ */ X("<span class=\"seller\">No further action</span>"), Wo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), Go = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), Ko = /* @__PURE__ */ X("<div class=\"state-card\">No users matched that search.</div>"), qo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), Jo = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Yo = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function Zo(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Ra();
	var a = ts(), o = z(a), s = z(o), c = (e) => {
		Z(e, Qo());
	}, l = (e) => {
		var t = es();
		Ri(t, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
			var n = $o(), a = z(n), o = z(a), s = z(o, !0);
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
	ji(s, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), k(o);
	var u = B(o, 2), d = B(z(u), 2), f = z(d, !0);
	k(d);
	var p = B(d, 4), m = z(p, !0);
	k(p);
	var h = B(p, 4), g = z(h, !0);
	k(h), Le(2), k(u), k(a), V((e, t, n) => {
		Q(f, e), Q(m, t), Q(g, n);
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Z(e, a), $e();
}
var Qo, $o, es, ts, ns = e((() => {
	$a(), eo(), qa(), Qo = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty.</div>"), $o = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), es = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), ts = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function rs(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "placeOrder", 8), i = $(t, "formatCurrency", 8), a = $(t, "shippingAddress", 8), o = $(t, "onShippingInput", 8);
	Ra();
	var s = ss(), c = z(s), l = z(c), u = (e) => {
		Z(e, is());
	}, d = (e) => {
		var t = os(), r = z(t), s = B(z(r), 2), c = B(z(s), 2);
		pa(c);
		var l = B(c, 4);
		pa(l);
		var u = B(l, 4);
		pa(u);
		var d = B(u, 4);
		pa(d);
		var f = B(d, 4);
		pa(f);
		var p = B(f, 4);
		pa(p);
		var m = B(p, 4);
		pa(m), k(s), k(r);
		var h = B(r, 2);
		Ri(h, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
			var n = as(), r = z(n), a = z(r), o = z(a, !0);
			k(a);
			var s = B(a, 2), c = z(s, !0);
			k(s);
			var l = B(s, 2), u = z(l);
			k(l), k(r);
			var d = B(r, 2), f = z(d), p = z(f, !0);
			k(f), k(d), k(n), V((e, n) => {
				Q(o, (U(t), W(() => U(t).product.seller.username))), Q(c, (U(t), W(() => U(t).product.name))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Z(e, n);
		}), k(h), k(t), V(() => {
			ma(c, (G(a()), W(() => a().name))), ma(l, (G(a()), W(() => a().line1))), ma(u, (G(a()), W(() => a().line2))), ma(d, (G(a()), W(() => a().city))), ma(f, (G(a()), W(() => a().state))), ma(p, (G(a()), W(() => a().postalCode))), ma(m, (G(a()), W(() => a().country)));
		}), Y("input", c, (e) => o()("name", e)), Y("input", l, (e) => o()("line1", e)), Y("input", u, (e) => o()("line2", e)), Y("input", d, (e) => o()("city", e)), Y("input", f, (e) => o()("state", e)), Y("input", p, (e) => o()("postalCode", e)), Y("input", m, (e) => o()("country", e)), Z(e, t);
	};
	ji(l, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(u) : e(d, -1);
	}), k(c);
	var f = B(c, 2), p = B(z(f), 2), m = z(p, !0);
	k(p);
	var h = B(p, 4), g = z(h, !0);
	k(h);
	var _ = B(h, 4), v = z(_, !0);
	k(_);
	var y = B(_, 4), b = z(y);
	Le(2), k(y), k(f), k(s), V((e, t, r) => {
		Q(m, e), Q(g, t), Q(v, r), b.disabled = (G(n()), W(() => n().items.length === 0));
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Y("click", b, function(...e) {
		r()?.apply(this, e);
	}), Z(e, s), $e();
}
var is, as, os, ss, cs = e((() => {
	$a(), eo(), qa(), is = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), as = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), os = /* @__PURE__ */ X("<div class=\"checkout-stack\"><div class=\"shipping-panel\"><p class=\"section-kicker\">Shipping address</p> <div class=\"stack-form\"><label for=\"ship-name\">Full name</label> <input id=\"ship-name\" type=\"text\" required=\"\"/> <label for=\"ship-line1\">Address line 1</label> <input id=\"ship-line1\" type=\"text\" required=\"\"/> <label for=\"ship-line2\">Address line 2</label> <input id=\"ship-line2\" type=\"text\"/> <label for=\"ship-city\">City</label> <input id=\"ship-city\" type=\"text\" required=\"\"/> <label for=\"ship-state\">State / region</label> <input id=\"ship-state\" type=\"text\" required=\"\"/> <label for=\"ship-postal\">Postal code</label> <input id=\"ship-postal\" type=\"text\" required=\"\"/> <label for=\"ship-country\">Country</label> <input id=\"ship-country\" type=\"text\" required=\"\"/></div></div> <div class=\"list-grid\"></div></div>"), ss = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function ls(e, t) {
	Qe(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Ra();
	var s = mi(), c = Dn(s), l = (e) => {
		Z(e, us());
	}, u = (e) => {
		var t = fs();
		Ri(t, 5, n, Fi, (e, t) => {
			var n = ds(), s = z(n), c = B(z(s), 2), l = z(c, !0);
			k(c), k(s);
			var u = B(s, 2), d = z(u, !0);
			k(u);
			var f = B(u, 2), p = z(f, !0);
			k(f);
			var m = B(f, 2), h = z(m), g = z(h);
			k(h);
			var _ = B(h, 2), v = z(_), y = B(v, 2);
			k(_), k(m), k(n), V((e, n) => {
				Q(l, e), Q(d, (U(t), W(() => U(t).name))), Q(p, n), ha(g, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(a()), U(t), W(() => a()(U(t).price))), () => (G(o()), U(t), W(() => o()(U(t).description || "", 160)))]), Y("click", v, () => r()(U(t).id)), Y("click", y, () => i()(U(t).id)), Z(e, n);
		}), k(t), Z(e, t);
	};
	ji(c, (e) => {
		G(n()), W(() => n().length === 0) ? e(l) : e(u, -1);
	}), Z(e, s), $e();
}
var us, ds, fs, ps = e((() => {
	$a(), eo(), qa(), us = /* @__PURE__ */ X("<div class=\"state-card\">No products marked for comparison.</div>"), ds = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), fs = /* @__PURE__ */ X("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function ms(e, t) {
	Qe(t, !1);
	let n = $(t, "order", 8), r = $(t, "formatCurrency", 8), i = $(t, "formatDate", 8), a = $(t, "formatPaymentMethod", 8);
	Ra();
	var o = _s(), s = z(o), c = z(s);
	Ri(c, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
		var n = hs(), i = z(n), a = z(i), o = z(a);
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
		var t = gs(), r = z(t, !0);
		k(t), V(() => Q(r, (G(n()), W(() => n().shipToLine2)))), Z(e, t);
	};
	ji(S, (e) => {
		G(n()), W(() => n().shipToLine2) && e(ee);
	});
	var C = B(S, 2), w = z(C);
	k(C);
	var T = B(C, 2), E = z(T, !0);
	k(T);
	var te = B(T, 4), ne = z(te, !0);
	k(te);
	var re = B(te, 4), ie = z(re, !0);
	k(re);
	var ae = B(re, 4), oe = z(ae, !0);
	k(ae), Le(2), k(l), k(o), V((e, t, r, i, a) => {
		Q(d, `#${(G(n()), W(() => n().id)) ?? ""}`), Q(p, (G(n()), W(() => n().status))), Q(h, e), Q(_, t), Q(y, (G(n()), W(() => n().shipToName))), Q(x, (G(n()), W(() => n().shipToLine1))), Q(w, `${(G(n()), W(() => n().shipToCity)) ?? ""}, ${(G(n()), W(() => n().shipToState)) ?? ""} ${(G(n()), W(() => n().shipToPostalCode)) ?? ""}`), Q(E, (G(n()), W(() => n().shipToCountry))), Q(ne, r), Q(ie, i), Q(oe, a);
	}, [
		() => (G(a()), G(n()), W(() => a()(n().paymentMethod))),
		() => (G(i()), G(n()), W(() => i()(n().createdAt))),
		() => (G(r()), G(n()), W(() => r()(n().subtotal))),
		() => (G(r()), G(n()), W(() => r()(n().taxAmount))),
		() => (G(r()), G(n()), W(() => r()(n().total)))
	]), Z(e, o), $e();
}
var hs, gs, _s, vs = e((() => {
	$a(), eo(), qa(), hs = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), gs = /* @__PURE__ */ X("<strong> </strong>"), _s = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Ship to</p> <strong> </strong> <strong> </strong> <!> <strong> </strong> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function ys(e, t) {
	Qe(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ra();
	var o = bs(), s = z(o), c = z(s), l = z(c, !0);
	k(c);
	var u = B(c, 2), d = z(u);
	k(u), k(s);
	var f = B(s, 2), p = z(f), m = z(p), h = z(m, !0);
	k(m);
	var g = B(m, 2), _ = z(g, !0);
	k(g), k(p);
	var v = B(p, 2), y = z(v), b = B(y, 2);
	k(v), k(f);
	var x = B(f, 2), S = z(x, !0);
	k(x), Le(2), k(o), V((e) => {
		Q(l, (G(n()), W(() => n().seller.username))), Q(d, `${(G(n()), W(() => n().stock)) ?? ""} in stock`), Q(h, (G(n()), W(() => n().name))), Q(_, e), Q(S, (G(n()), W(() => n().description || "No description provided.")));
	}, [() => (G(a()), G(n()), W(() => a()(n().price)))]), Y("click", y, () => r()(n().id)), Y("click", b, () => i()(n().id)), Z(e, o), $e();
}
var bs, xs = e((() => {
	$a(), eo(), qa(), bs = /* @__PURE__ */ X("<article class=\"detail-card\"><div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function Ss(e) {
	Z(e, Cs());
}
var Cs, ws = e((() => {
	$a(), eo(), qa(), Cs = /* @__PURE__ */ X("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function Ts(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "formatCurrency", 8);
	Ra();
	var c = ks(), l = Dn(c), u = z(l), d = z(u), f = B(z(d), 2);
	pa(f);
	var p = B(f, 4);
	Rn(p);
	var m = B(p, 4);
	pa(m);
	var h = B(m, 4);
	pa(h), Le(2), k(d), Ma(d, (e) => i(e), () => i()), k(u);
	var g = B(u, 2), _ = B(z(g), 2), v = z(_, !0);
	k(_), k(g), k(l);
	var y = B(l, 2), b = (e) => {
		Z(e, Es());
	}, x = (e) => {
		var t = Os();
		Ri(t, 5, r, Fi, (e, t) => {
			var n = Ds(), r = z(n), i = z(r), a = z(i), o = (e) => {
				Z(e, pi("Pending approval"));
			}, c = (e) => {
				Z(e, pi("Rejected"));
			}, l = (e) => {
				Z(e, pi("Listed"));
			}, u = (e) => {
				Z(e, pi("Delisted"));
			};
			ji(a, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(o) : (U(t), W(() => U(t).listingStatus === "rejected") ? e(c, 1) : (U(t), W(() => U(t).isListed) ? e(l, 2) : e(u, -1)));
			}), k(i);
			var d = B(i, 2), f = z(d);
			k(d), k(r);
			var p = B(r, 2), m = z(p, !0);
			k(p);
			var h = B(p, 2), g = z(h, !0);
			k(h);
			var _ = B(h, 2), v = z(_), y = z(v), b = z(y, !0);
			k(y);
			var x = B(y, 2), S = z(x);
			k(x), k(v), k(_), k(n), V((e, n) => {
				Q(f, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(m, (U(t), W(() => U(t).name))), Q(g, (U(t), W(() => U(t).description || "No description provided."))), Q(b, e), Q(S, `Created ${n ?? ""}`);
			}, [() => (G(s()), U(t), W(() => s()(U(t).price))), () => (U(t), W(() => new Date(U(t).createdAt).toLocaleDateString()))]), Z(e, n);
		}), k(t), Z(e, t);
	};
	ji(y, (e) => {
		G(r()), W(() => r().length === 0) ? e(b) : e(x, -1);
	}), V(() => {
		ma(f, (G(n()), W(() => n().name))), ma(p, (G(n()), W(() => n().description))), ma(m, (G(n()), W(() => n().price))), ma(h, (G(n()), W(() => n().stock))), Q(v, (G(r()), W(() => r().length)));
	}), Y("input", f, (e) => o()("name", e)), Y("input", p, (e) => o()("description", e)), Y("input", m, (e) => o()("price", e)), Y("input", h, (e) => o()("stock", e)), Y("submit", d, Ia(function(...e) {
		a()?.apply(this, e);
	})), Z(e, c), $e();
}
var Es, Ds, Os, ks, As = e((() => {
	$a(), eo(), qa(), Es = /* @__PURE__ */ X("<div class=\"state-card\">No listings yet.</div>"), Ds = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), Os = /* @__PURE__ */ X("<div class=\"product-grid inventory-grid\"></div>"), ks = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function js(e, t) {
	Qe(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ra();
	var o = mi(), s = Dn(o), c = (e) => {
		Z(e, Ms());
	}, l = (e) => {
		var t = Ps();
		Ri(t, 5, n, Fi, (e, t) => {
			var n = Ns(), o = z(n), s = z(o), c = z(s, !0);
			k(s);
			var l = B(s, 2), u = z(l);
			k(l), k(o);
			var d = B(o, 2), f = z(d, !0);
			k(d);
			var p = B(d, 2), m = z(p, !0);
			k(p);
			var h = B(p, 2), g = z(h), _ = z(g), v = z(_, !0);
			k(_);
			var y = B(_, 2);
			k(g);
			var b = B(g, 2), x = z(b), S = B(x, 2);
			k(b), k(h), k(n), V((e) => {
				Q(c, (U(t), W(() => U(t).seller.username))), Q(u, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(f, (U(t), W(() => U(t).name))), Q(m, (U(t), W(() => U(t).description || "No description provided."))), Q(v, e), ha(y, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(a()), U(t), W(() => a()(U(t).price)))]), Y("click", x, () => r()(U(t).id)), Y("click", S, () => i()(U(t).id)), Z(e, n);
		}), k(t), Z(e, t);
	};
	ji(s, (e) => {
		G(n()), W(() => n().length === 0) ? e(c) : e(l, -1);
	}), Z(e, o), $e();
}
var Ms, Ns, Ps, Fs = e((() => {
	$a(), eo(), qa(), Ms = /* @__PURE__ */ X("<div class=\"state-card\">No listed products are available right now.</div>"), Ns = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), Ps = /* @__PURE__ */ X("<div class=\"product-grid\"></div>");
}));
//#endregion
//#region frontend/src/App.svelte
function Is(e, t) {
	Qe(t, !1);
	let n = /* @__PURE__ */ L(), r = [
		{
			value: "accessible",
			label: "Winter Ice"
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
	], i = new Set(r.map((e) => e.value)), a = /* @__PURE__ */ L("buyer"), o = /* @__PURE__ */ L("storefront"), s = /* @__PURE__ */ L([]), c = /* @__PURE__ */ L(null), l = /* @__PURE__ */ L([]), u = /* @__PURE__ */ L({
		items: [],
		subtotal: 0,
		tax: 0,
		total: 0
	}), d = /* @__PURE__ */ L(null), f = /* @__PURE__ */ L([]), p = /* @__PURE__ */ L({
		name: "",
		description: "",
		price: "",
		stock: ""
	}), m = /* @__PURE__ */ L(), h = /* @__PURE__ */ L([]), g = /* @__PURE__ */ L([]), _ = /* @__PURE__ */ L([]), v = /* @__PURE__ */ L([]), y = /* @__PURE__ */ L({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), b = /* @__PURE__ */ L(""), x = /* @__PURE__ */ L({
		name: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postalCode: "",
		country: "US"
	}), S = /* @__PURE__ */ L("accessible"), ee = /* @__PURE__ */ L(!1), C = /* @__PURE__ */ L(!0), w = /* @__PURE__ */ L(""), T = /* @__PURE__ */ L("");
	async function E(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function te(e) {
		R(S, i.has(e) ? e : "accessible"), typeof document < "u" && (document.documentElement.dataset.theme = U(S)), typeof localStorage < "u" && localStorage.setItem("ram-theme", U(S));
	}
	function ne() {
		R(ee, !U(ee));
	}
	function re(e) {
		te(e), R(ee, !1);
	}
	function ie(e, t) {
		return {
			...e,
			...t
		};
	}
	function ae(e) {
		R(h, U(h).filter((t) => t.id !== e.id)), R(_, U(_).map((t) => t.id === e.id ? ie(t, e) : t));
	}
	function oe(e) {
		R(g, U(g).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function se(e = !1) {
		R(C, !0), R(w, ""), e && R(T, "");
		try {
			R(s, await E("/api/buyer/products"));
		} catch (e) {
			R(w, e.message || "Could not load products.");
		} finally {
			R(C, !1);
		}
	}
	async function ce() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(c, await E(`/api/buyer/products/${no()}`));
		} catch (e) {
			R(w, e.message || "Could not load product.");
		} finally {
			R(C, !1);
		}
	}
	async function le() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(u, await E("/api/buyer/cart"));
		} catch (e) {
			R(w, e.message || "Could not load cart.");
		} finally {
			R(C, !1);
		}
	}
	async function ue() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(l, (await E("/api/buyer/compare")).items || []);
		} catch (e) {
			R(w, e.message || "Could not load comparison list.");
		} finally {
			R(C, !1);
		}
	}
	async function de() {
		R(C, !0), R(w, "");
		try {
			R(f, await E("/api/seller/products"));
		} catch (e) {
			R(w, e.message || "Could not load seller inventory.");
		} finally {
			R(C, !1);
		}
	}
	async function fe() {
		R(C, !0), R(w, "");
		try {
			R(v, await E("/api/admin/audit-logs"));
		} catch (e) {
			R(w, e.message || "Could not load audit logs.");
		} finally {
			R(C, !1);
		}
	}
	async function pe(e = 1, t = U(b)) {
		R(C, !0), R(w, "");
		try {
			let [n, r, i] = await Promise.all([
				E("/api/admin/pending-users"),
				E("/api/admin/products"),
				E(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			R(h, n), R(g, r), R(_, i.users), R(y, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), R(b, i.search || "");
		} catch (e) {
			R(w, e.message || "Could not load moderation data.");
		} finally {
			R(C, !1);
		}
	}
	async function D() {
		R(C, !0), R(w, ""), R(T, "");
		try {
			R(d, await E(`/api/buyer/orders/${ro()}`)), R(T, "Your order has been placed successfully.");
		} catch (e) {
			R(w, e.message || "Could not load order confirmation.");
		} finally {
			R(C, !1);
		}
	}
	async function me() {
		if (R(a, io()), R(o, ao()), U(o) === "admin-home" || U(o) === "seller-home") {
			R(C, !1), R(w, "");
			return;
		}
		if (U(o) === "admin-moderation") {
			await pe();
			return;
		}
		if (U(o) === "admin-audit") {
			await fe();
			return;
		}
		if (U(o) === "seller-inventory") {
			await de();
			return;
		}
		if (U(o) === "cart" || U(o) === "checkout") {
			await le();
			return;
		}
		if (U(o) === "compare") {
			await ue();
			return;
		}
		if (U(o) === "confirmation") {
			await D();
			return;
		}
		if (U(o) === "product") {
			await ce();
			return;
		}
		await se();
	}
	async function he(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Nr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function ge(e, t) {
		R(p, {
			...U(p),
			[e]: t.currentTarget.value
		});
	}
	function _e(e, t) {
		R(x, {
			...U(x),
			[e]: t.currentTarget.value
		});
	}
	function ve(e) {
		R(b, e.currentTarget.value);
	}
	async function ye() {
		R(T, "");
		let e = String(U(p).price).trim(), t = String(U(p).stock).trim(), n = Number(e), r = Number(t);
		if (U(m)?.reportValidity()) {
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
						name: U(p).name,
						description: U(p).description,
						price: n,
						stock: r
					})
				}), R(p, {
					name: "",
					description: "",
					price: "",
					stock: ""
				}), R(T, "Listing submitted for admin approval."), await de();
			} catch (e) {
				R(T, e.message || "Could not create listing.");
			}
		}
	}
	async function be(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/approve-user/${e}`, { method: "POST" });
			R(T, "User approved."), ae(t);
		} catch (e) {
			R(T, e.message || "Could not approve user.");
		}
	}
	async function xe(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/block-user/${e}`, { method: "POST" });
			R(T, "User blocked."), ae(t);
		} catch (e) {
			R(T, e.message || "Could not block user.");
		}
	}
	async function Se(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/ban-user/${e}`, { method: "POST" });
			R(T, "User banned."), ae(t);
		} catch (e) {
			R(T, e.message || "Could not ban user.");
		}
	}
	async function Ce(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/approve`, { method: "POST" });
			R(T, "Product approved."), oe(t);
		} catch (e) {
			R(T, e.message || "Could not approve product.");
		}
	}
	async function we(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/reject`, { method: "POST" });
			R(T, "Product rejected."), oe(t);
		} catch (e) {
			R(T, e.message || "Could not reject product.");
		}
	}
	async function Te(e) {
		R(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/delist`, { method: "POST" });
			R(T, "Product delisted."), oe(t);
		} catch (e) {
			R(T, e.message || "Could not delist product.");
		}
	}
	async function Ee() {
		await he(() => pe(1, U(b)));
	}
	async function De() {
		R(b, ""), await he(() => pe(1, ""));
	}
	async function Oe(e) {
		e < 1 || e > U(y).totalPages || await he(() => pe(e, U(y).search));
	}
	async function O(e) {
		R(T, "");
		try {
			await E("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), R(T, "Item added to cart.");
		} catch (e) {
			R(T, e.message || "Could not add item to cart.");
		}
	}
	async function ke(e) {
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
	async function Ae(e) {
		R(T, "");
		try {
			await E(`/api/buyer/cart/${e}/remove`, { method: "POST" }), R(T, "Item removed from cart."), await le();
		} catch (e) {
			R(T, e.message || "Could not remove item.");
		}
	}
	async function je(e) {
		R(T, "");
		try {
			await E(`/api/buyer/compare/${e}/remove`, { method: "POST" }), R(T, "Item removed from comparison list."), await ue();
		} catch (e) {
			R(T, e.message || "Could not remove item.");
		}
	}
	async function Me() {
		R(T, "");
		try {
			let e = await E("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					paymentMethod: "demo_card",
					shippingAddress: U(x)
				})
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			R(T, e.message || "Checkout failed."), await le();
		}
	}
	async function Ne() {
		R(T, "");
		try {
			await E("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			R(T, e.message || "Could not log out.");
		}
	}
	Ya(async () => {
		te((typeof localStorage > "u" ? null : localStorage.getItem("ram-theme")) || "accessible"), await me();
	}), er(() => U(o), () => {
		R(n, oo(U(o)));
	}), tr(), Ra();
	var Pe = Us();
	ta("13zv0lp", (e) => {
		ir((e) => {
			Nn.title = e ?? "";
		}, [() => (G(so), U(o), W(() => so(U(o))))]);
	});
	var Fe = z(Pe);
	xo(Fe, {
		get appMode() {
			return U(a);
		},
		get currentPage() {
			return U(o);
		},
		onLogout: Ne
	});
	var Ie = B(Fe, 2), Le = z(Ie);
	To(Le, {
		get kicker() {
			return U(n), W(() => U(n).kicker);
		},
		get heading() {
			return U(n), W(() => U(n).heading);
		},
		onRefresh: me
	});
	var Re = B(Le, 2), ze = (e) => {
		Z(e, Ls());
	}, A = (e) => {
		var t = Rs(), n = z(t, !0);
		k(t), V(() => Q(n, U(w))), Z(e, t);
	}, j = (e) => {
		No(e, {});
	}, M = (e) => {
		Io(e, {
			get adminPendingUsers() {
				return U(h);
			},
			get adminProducts() {
				return U(g);
			},
			get adminUsers() {
				return U(_);
			},
			get adminUsersPageInfo() {
				return U(y);
			},
			get adminUserSearch() {
				return U(b);
			},
			onAdminUserSearchInput: ve,
			approveUser: be,
			blockUser: xe,
			banUser: Se,
			approveProduct: Ce,
			rejectProduct: we,
			delistProduct: Te,
			searchAdminUsers: Ee,
			clearAdminUserSearch: De,
			goToAdminUsersPage: Oe,
			get capitalizeRole() {
				return ho;
			},
			get formatCurrency() {
				return uo;
			},
			get formatDate() {
				return fo;
			},
			get getUserStatus() {
				return go;
			}
		});
	}, Be = (e) => {
		Oo(e, {
			get adminAuditLogs() {
				return U(v);
			},
			get formatActionType() {
				return _o;
			},
			get formatDate() {
				return fo;
			}
		});
	}, Ve = (e) => {
		Ss(e, {});
	}, He = (e) => {
		Ts(e, {
			get sellerForm() {
				return U(p);
			},
			get sellerProducts() {
				return U(f);
			},
			createSellerListing: ye,
			onSellerFormInput: ge,
			get formatCurrency() {
				return uo;
			},
			get sellerListingForm() {
				return U(m);
			},
			set sellerListingForm(e) {
				R(m, e);
			},
			$$legacy: !0
		});
	}, Ue = (e) => {
		ys(e, {
			get product() {
				return U(c);
			},
			addToCart: O,
			addToComparison: ke,
			get formatCurrency() {
				return uo;
			}
		});
	}, We = (e) => {
		Zo(e, {
			get cart() {
				return U(u);
			},
			removeFromCart: Ae,
			get formatCurrency() {
				return uo;
			}
		});
	}, Ge = (e) => {
		rs(e, {
			get cart() {
				return U(u);
			},
			placeOrder: Me,
			get formatCurrency() {
				return uo;
			},
			get shippingAddress() {
				return U(x);
			},
			onShippingInput: _e
		});
	}, Ke = (e) => {
		ms(e, {
			get order() {
				return U(d);
			},
			get formatCurrency() {
				return uo;
			},
			get formatDate() {
				return fo;
			},
			get formatPaymentMethod() {
				return po;
			}
		});
	}, qe = (e) => {
		ls(e, {
			get compareItems() {
				return U(l);
			},
			addToCart: O,
			removeFromCompare: je,
			get formatCurrency() {
				return uo;
			},
			get truncate() {
				return mo;
			}
		});
	}, Je = (e) => {
		js(e, {
			get products() {
				return U(s);
			},
			addToCart: O,
			addToComparison: ke,
			get formatCurrency() {
				return uo;
			}
		});
	};
	ji(Re, (e) => {
		U(C) ? e(ze) : U(w) ? e(A, 1) : U(o) === "admin-home" ? e(j, 2) : U(o) === "admin-moderation" ? e(M, 3) : U(o) === "admin-audit" ? e(Be, 4) : U(o) === "seller-home" ? e(Ve, 5) : U(o) === "seller-inventory" ? e(He, 6) : U(o) === "product" && U(c) ? e(Ue, 7) : U(o) === "cart" ? e(We, 8) : U(o) === "checkout" ? e(Ge, 9) : U(o) === "confirmation" && U(d) ? e(Ke, 10) : U(o) === "compare" ? e(qe, 11) : e(Je, -1);
	});
	var Ye = B(Re, 2), Xe = (e) => {
		var t = zs(), n = z(t, !0);
		k(t), V(() => Q(n, U(T))), Z(e, t);
	};
	ji(Ye, (e) => {
		U(T) && e(Xe);
	}), k(Ie);
	var Ze = B(Ie, 2), et = z(Ze), N = (e) => {
		var t = Hs();
		Ri(t, 5, () => r, Fi, (e, t) => {
			var n = Vs();
			let r;
			var i = z(n), a = z(i, !0);
			k(i);
			var o = B(i, 2), s = (e) => {
				Z(e, Bs());
			};
			ji(o, (e) => {
				U(S), U(t), W(() => U(S) === U(t).value) && e(s);
			}), k(n), V(() => {
				r = la(n, 1, "theme-dock-option", null, r, { "active-theme": U(S) === U(t).value }), ha(n, "aria-checked", (U(S), U(t), W(() => U(S) === U(t).value))), Q(a, (U(t), W(() => U(t).label)));
			}), Y("click", n, () => re(U(t).value)), Z(e, n);
		}), k(t), Z(e, t);
	};
	ji(et, (e) => {
		U(ee) && e(N);
	});
	var P = B(et, 2);
	k(Ze), k(Pe), V(() => {
		ha(Pe, "data-page", U(o)), ha(P, "aria-expanded", U(ee));
	}), Y("click", P, ne), Z(e, Pe), $e();
}
var Ls, Rs, zs, Bs, Vs, Hs, Us, Ws = e((() => {
	$a(), eo(), qa(), Za(), wo(), Do(), Mo(), Fo(), Xo(), ns(), cs(), ps(), vs(), xs(), ws(), As(), Fs(), bo(), Ls = /* @__PURE__ */ X("<div class=\"state-card\">Loading...</div>"), Rs = /* @__PURE__ */ X("<div class=\"state-card error\"> </div>"), zs = /* @__PURE__ */ X("<p class=\"status-banner\"> </p>"), Bs = /* @__PURE__ */ X("<span class=\"theme-dock-check\">Current</span>"), Vs = /* @__PURE__ */ X("<button type=\"button\" role=\"menuitemradio\"><span> </span> <!></button>"), Hs = /* @__PURE__ */ X("<div class=\"theme-dock-menu\" role=\"menu\" aria-label=\"Theme picker\"></div>"), Us = /* @__PURE__ */ X("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section> <div class=\"theme-dock\"><!> <button class=\"theme-dock-toggle\" type=\"button\" aria-haspopup=\"menu\">Theme</button></div></div>");
})), Gs = e((() => {})), Ks = /* @__PURE__ */ t((() => {
	Za(), Ws(), Gs(), gi(Is, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default Ks();
