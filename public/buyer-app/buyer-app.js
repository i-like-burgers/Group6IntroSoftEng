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
})), b, x, S, ee, te, ne, re, ie, ae, oe, se, ce, le, ue, de, fe, pe, me, he, ge, _e, C = e((() => {
	b = 1024, x = 2048, S = 4096, ee = 8192, te = 16384, ne = 32768, re = 1 << 25, ie = 65536, ae = 1 << 18, oe = 1 << 19, se = 1 << 20, ce = 1 << 25, le = 65536, ue = 1 << 21, de = 1 << 22, fe = 1 << 23, pe = Symbol("$state"), me = Symbol("legacy props"), he = Symbol(""), ge = new class extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}(), _e = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
}));
function ve(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ye = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function be() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function xe(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Se(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function we(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Te() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ee(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function De() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ke() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ae() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var w = e((() => {
	r(), ye();
})), je, T, Me, Ne = e((() => {
	je = {}, T = Symbol(), Me = "http://www.w3.org/1999/xhtml";
}));
function Pe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Fe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
var Ie = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
function Le(e) {
	D = e;
}
function Re(e) {
	if (e === null) throw Pe(), je;
	return O = e;
}
function ze() {
	return Re(/* @__PURE__ */ Dn(O));
}
function E(e) {
	if (D) {
		if (/* @__PURE__ */ Dn(O) !== null) throw Pe(), je;
		O = e;
	}
}
function Be(e = 1) {
	if (D) {
		for (var t = e, n = O; t--;) n = /* @__PURE__ */ Dn(n);
		O = n;
	}
}
function Ve(e = !0) {
	for (var t = 0, n = O;;) {
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
function He(e) {
	if (!e || e.nodeType !== 8) throw Pe(), je;
	return e.data;
}
var D, O, k = e((() => {
	C(), Ne(), Ie(), B(), D = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ue(e) {
	return e === this.v;
}
function We(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ge(e) {
	return !We(e, this.v);
}
var Ke = e((() => {}));
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
function qe() {
	Ye = !0;
}
var Je, Ye, Xe = e((() => {
	Je = !1, Ye = !1;
})), Ze = e((() => {
	y();
})), Qe = e((() => {
	Ze(), C(), H(), J();
})), $e = e((() => {
	r(), y(), ye();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
function et(e) {
	A = e;
}
function tt(e, t = !1, n) {
	A = {
		p: A,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l: Ye && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function nt(e) {
	var t = A, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Xn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, A = t.p, e ?? {};
}
function rt() {
	return !Ye || A !== null && A.l === null;
}
var A, j = e((() => {
	r(), w(), J(), H(), Xe(), C(), A = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function it() {
	var e = st;
	st = [], a(e);
}
function at(e) {
	if (st.length === 0 && !Ft) {
		var t = st;
		queueMicrotask(() => {
			t === st && it();
		});
	}
	st.push(e);
}
function ot() {
	for (; st.length > 0;) it();
}
var st, ct = e((() => {
	y(), F(), st = [];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/error-handling.js
function lt(e) {
	var t = q;
	if (t === null) return K.f |= fe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	ut(e, t);
}
function ut(e, t) {
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
var dt = e((() => {
	r(), Ne(), B(), C(), y(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function M(e, t) {
	e.f = e.f & pt | t;
}
function ft(e) {
	e.f & 512 || e.deps === null ? M(e, b) : M(e, S);
}
var pt, mt = e((() => {
	C(), pt = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function ht(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= le, ht(t.deps));
}
function gt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), ht(e.deps), M(e, b);
}
var _t = e((() => {
	C(), mt();
})), vt = e((() => {
	J(), y();
})), yt = e((() => {
	y(), vt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
function bt(e) {
	var t = St;
	try {
		return St = !1, [e(), St];
	} finally {
		St = t;
	}
}
var xt, St, Ct = e((() => {
	vt(), yt(), y(), J(), H(), bn(), xt = !1, St = !1;
})), wt = e((() => {
	C(), Ze(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
function Tt(e) {
	var t = Ft;
	Ft = !0;
	try {
		var n;
		for (e && (N !== null && !N.is_fork && N.flush(), n = e());;) {
			if (ot(), N === null) return n;
			N.flush();
		}
	} finally {
		Ft = t;
	}
}
function Et() {
	try {
		Te();
	} catch (e) {
		ut(e, Pt);
	}
}
function Dt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Dr(r) && (Ht = /* @__PURE__ */ new Set(), Mr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && fr(r), Ht?.size > 0)) {
				vn.clear();
				for (let e of Ht) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Ht.has(n) && (Ht.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Mr(n);
					}
				}
				Ht.clear();
			}
		}
		Ht = null;
	}
}
function Ot(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Ot(i, t, n, r) : e & 4194320 && !(e & 2048) && kt(i, t, r) && (M(i, x), At(i));
	}
}
function kt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && kt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function At(e) {
	N.schedule(e);
}
function jt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), M(e, b);
		for (var n = e.first; n !== null;) jt(n, t), n = n.next;
	}
}
function Mt(e) {
	M(e, b);
	for (var t = e.first; t !== null;) Mt(t), t = t.next;
}
var Nt, N, P, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, F = e((() => {
	C(), Xe(), y(), J(), w(), ct(), r(), dt(), bn(), H(), _t(), Ne(), mt(), Ct(), $e(), wt(), Nt = /* @__PURE__ */ new Set(), N = null, P = null, Pt = null, Ft = !1, It = !1, Lt = null, Rt = null, zt = 0, Bt = 1, Vt = class e {
		id = Bt++;
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
				for (var n of t.d) M(n, x), this.schedule(n);
				for (n of t.m) M(n, S), this.schedule(n);
			}
		}
		#m() {
			if (zt++ > 1e3 && (Nt.delete(this), Et()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), M(e, x), this.schedule(e);
				for (let e of this.#c) M(e, S), this.schedule(e);
			}
			let t = this.#a;
			this.#a = [], this.apply();
			var n = Lt = [], r = [], i = Rt = [];
			for (let e of t) try {
				this.#h(e, n, r);
			} catch (t) {
				throw Mt(e), t;
			}
			if (N = null, i.length > 0) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (Lt = null, Rt = null, this.#f() || this.#p()) {
				this.#g(r), this.#g(n);
				for (let [e, t] of this.#l) jt(e, t);
			} else {
				this.#n.size === 0 && Nt.delete(this), this.#s.clear(), this.#c.clear();
				for (let e of this.#e) e(this);
				this.#e.clear(), Dt(r), Dt(n), this.#i?.resolve();
			}
			var o = N;
			if (this.#a.length > 0) {
				let e = o ??= this;
				e.#a.push(...this.#a.filter((t) => !e.#a.includes(t)));
			}
			o !== null && (Nt.add(o), o.#m()), Nt.has(this) || this.#_();
		}
		#h(e, t, n) {
			e.f ^= b;
			for (var r = e.first; r !== null;) {
				var i = r.f, a = (i & 96) != 0;
				if (!(a && i & 1024 || i & 8192 || this.#l.has(r)) && r.fn !== null) {
					a ? r.f ^= b : i & 4 ? t.push(r) : Je && i & 16777224 ? n.push(r) : Dr(r) && (i & 16 && this.#c.add(r), Mr(r));
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
			for (var t = 0; t < e.length; t += 1) gt(e[t], this.#s, this.#c);
		}
		capture(e, t, n = !1) {
			t !== T && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), P?.set(e, e.v));
		}
		activate() {
			N = this;
		}
		deactivate() {
			N = null, P = null;
		}
		flush() {
			try {
				It = !0, N = this, this.#m();
			} finally {
				zt = 0, Pt = null, Lt = null, Rt = null, It = !1, N = null, P = null, vn.clear();
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear(), Nt.delete(this);
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		#_() {
			for (let l of Nt) {
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
					for (var o of t) Ot(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
					for (let e of this.#o) !(e.f & 155648) && kt(e, s, a) && (e.f & 4194320 ? (M(e, x), l.schedule(e)) : l.#s.add(e));
					if (l.#a.length > 0) {
						l.apply();
						for (var c of l.#a) l.#h(c, [], []);
						l.#a = [];
					}
					l.deactivate();
				}
			}
			for (let e of Nt) e.#d.has(this) && (e.#d.delete(this), e.#d.size === 0 && !e.#f() && (e.activate(), e.#m()));
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
			this.#u || n || (this.#u = !0, at(() => {
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
			if (N === null) {
				let t = N = new e();
				It || (Nt.add(N), Ft || at(() => {
					N === t && t.flush();
				}));
			}
			return N;
		}
		apply() {
			if (!Je || !this.is_fork && Nt.size === 1) {
				P = null;
				return;
			}
			P = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) P.set(e, t);
			for (let n of Nt) if (!(n === this || n.is_fork)) {
				var e = !1, t = !1;
				if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
				if (e && t) this.#d.add(n);
				else for (let [e, t] of n.previous) P.has(e) || P.set(e, t);
			}
		}
		schedule(e) {
			if (Pt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (Lt !== null && t === q && (Je || (K === null || !(K.f & 2)) && !xt)) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= b;
				}
			}
			this.#a.push(t);
		}
	}, Ht = null;
}));
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ut(e) {
	let t = 0, n = dn(0), r;
	return () => {
		qn() && (U(n), rr(() => (t === 0 && (r = W(() => e(() => hn(n)))), t += 1, () => {
			at(() => {
				--t, t === 0 && (r?.(), r = void 0, hn(n));
			});
		})));
	};
}
var Wt = e((() => {
	J(), H(), bn(), Qe(), r(), ct();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Gt(e, t, n, r) {
	new qt(e, t, n, r);
}
var Kt, qt, Jt = e((() => {
	C(), Ne(), j(), dt(), H(), J(), k(), ct(), w(), Ie(), r(), F(), bn(), Qe(), Wt(), B(), _t(), mt(), Kt = ie | oe, qt = class {
		parent;
		is_pending = !1;
		transform_error;
		#e;
		#t = D ? O : null;
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
		#h = Ut(() => (this.#m = dn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = q;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = ar(() => {
				if (D) {
					let e = this.#t;
					ze();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Kt), D && (this.#e = O);
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
			e && (this.is_pending = !0, this.#o = or(() => e(this.#e)), at(() => {
				var e = this.#c = document.createDocumentFragment(), t = Tn();
				e.append(t), this.#a = this.#x(() => or(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, pr(this.#o, () => {
					this.#o = null;
				}), this.#b(N));
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
				} else this.#b(N);
			} catch (e) {
				this.error(e);
			}
		}
		#b(e) {
			this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
		}
		defer_effect(e) {
			gt(e, this.#f, this.#p);
		}
		is_rendered() {
			return !this.is_pending && (!this.parent || this.parent.is_rendered());
		}
		has_pending_snippet() {
			return !!this.#n.pending;
		}
		#x(e) {
			var t = q, n = K, r = A;
			Sr(this.#i), xr(this.#i), et(this.#i.ctx);
			try {
				return Vt.ensure(), e();
			} catch (e) {
				return lt(e), null;
			} finally {
				Sr(t), xr(n), et(r);
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
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, at(() => {
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
			this.#a &&= (ur(this.#a), null), this.#o &&= (ur(this.#o), null), this.#s &&= (ur(this.#s), null), D && (Re(this.#t), Be(), Re(Ve()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Fe();
					return;
				}
				r = !0, i && Ae(), this.#s !== null && pr(this.#s, () => {
					this.#s = null;
				}), this.#x(() => {
					this.#y();
				});
			}, o = (e) => {
				try {
					i = !0, t?.(e, a), i = !1;
				} catch (e) {
					ut(e, this.#i && this.#i.parent);
				}
				n && (this.#s = this.#x(() => {
					try {
						return or(() => {
							var t = q;
							t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
						});
					} catch (e) {
						return ut(e, this.#i.parent), null;
					}
				}));
			};
			at(() => {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					ut(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => ut(e, this.#i && this.#i.parent)) : o(t);
			});
		}
	};
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Yt(e, t, n, r) {
	let i = rt() ? en : nn;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = q, s = Xt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || ut(e, o);
		}
		Zt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Qt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ tn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => ut(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), Zt();
	}) : d();
}
function Xt() {
	var e = q, t = K, n = A, r = N;
	return function(i = !0) {
		Sr(e), xr(t), et(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Zt(e = !0) {
	Sr(null), xr(null), et(null), e && N?.deactivate();
}
function Qt() {
	var e = q, t = e.b, n = N, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var $t = e((() => {
	C(), r(), j(), Jt(), dt(), J(), F(), un(), H();
}));
/* @__NO_SIDE_EFFECTS__ */
function en(e) {
	var t = 2 | x, n = K !== null && K.f & 2 ? K : null;
	return q !== null && (q.f |= oe), {
		ctx: A,
		deps: null,
		effects: null,
		equals: Ue,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: T,
		wv: 0,
		parent: n ?? q,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function tn(e, t, n) {
	let r = q;
	r === null && be();
	var i = void 0, a = dn(T), s = !K, c = /* @__PURE__ */ new Map();
	return nr(() => {
		var t = q, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(Zt);
		} catch (e) {
			n.reject(e), Zt();
		}
		var l = N;
		if (s) {
			if (t.f & 32768) var u = Qt();
			if (r.b.is_rendered()) c.get(l)?.reject(ge), c.delete(l);
			else {
				for (let e of c.values()) e.reject(ge);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === ge), !(n === ge || t.f & 16384)) {
				if (l.activate(), n) a.f |= fe, pn(a, n);
				else {
					a.f & 8388608 && (a.f ^= fe), pn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(ge);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Jn(() => {
		for (let e of c.values()) e.reject(ge);
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
	return t.equals = Ge, t;
}
function rn(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) ur(t[n]);
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
	Sr(an(e));
	try {
		e.f &= ~le, rn(e), t = kr(e);
	} finally {
		Sr(n);
	}
	return t;
}
function sn(e) {
	var t = e.v, n = on(e);
	if (!e.equals(n) && (e.wv = Er(), (!N?.is_fork || e.deps === null) && (e.v = n, N?.capture(e, t, !0), e.deps === null))) {
		M(e, b);
		return;
	}
	Rr || (P === null ? ft(e) : (qn() || N?.is_fork) && P.set(e, n));
}
function cn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ge), t.teardown = v, t.ac = null, jr(t, 0), cr(t));
}
function ln(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Mr(t);
}
var un = e((() => {
	r(), C(), J(), Ke(), w(), Ie(), H(), bn(), $e(), Xe(), j(), Ne(), F(), $t(), y(), mt();
}));
function dn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ue,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function fn(e, t) {
	let n = dn(e, t);
	return Cr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t = !1, n = !0) {
	let r = dn(e);
	return t || (r.equals = Ge), Ye && n && A !== null && A.l !== null && (A.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return K !== null && (!zr || K.f & 131072) && rt() && K.f & 4325394 && (Br === null || !l.call(Br, e)) && ke(), pn(e, n ? xn(t) : t, Rt);
}
function pn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Rr ? vn.set(e, t) : vn.set(e, r), e.v = t;
		var i = Vt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && on(t), P === null && ft(t);
		}
		e.wv = Er(), gn(e, x, n), rt() && q !== null && q.f & 1024 && !(q.f & 96) && (Ur === null ? wr([e]) : Ur.push(e)), !i.is_fork && _n.size > 0 && !yn && mn();
	}
	return t;
}
function mn() {
	yn = !1;
	for (let e of _n) e.f & 1024 && M(e, S), Dr(e) && Mr(e);
	_n.clear();
}
function hn(e) {
	L(e, e.v + 1);
}
function gn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = rt(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && M(s, t), c & 2) {
				var u = s;
				P?.delete(u), c & 65536 || (c & 512 && (s.f |= le), gn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Ht !== null && Ht.add(d), n === null ? At(d) : n.push(d);
			}
		}
	}
}
var _n, vn, yn, bn = e((() => {
	r(), J(), Ke(), C(), w(), Xe(), y(), Qe(), $e(), j(), F(), Sn(), un(), mt(), _n = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Map(), yn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function xn(e) {
	if (typeof e != "object" || !e || pe in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ fn(0), a = null, o = Kr, c = (e) => {
		if (Kr === o) return e();
		var t = K, n = Kr;
		xr(null), Tr(o);
		var r = e();
		return xr(t), Tr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ fn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && De();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ fn(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ fn(T, a));
					n.set(t, e), hn(i);
				}
			} else L(r, T), hn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === pe) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ fn(xn(s ? t[r] : T), a)), n.set(r, o)), o !== void 0) {
				var l = U(o);
				return l === T ? void 0 : l;
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
				if (a !== void 0 && o !== T) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === pe) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== T || Reflect.has(e, t);
			return (r !== void 0 || q !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ fn(i ? xn(e[t]) : T, a)), n.set(t, r)), U(r) === T) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ fn(T, a)), n.set(d + "", p)) : L(p, T);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ fn(void 0, a)), L(l, xn(o)), n.set(t, l));
			else {
				u = l.v !== T;
				var m = c(() => xn(o));
				L(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				hn(i);
			}
			return !0;
		},
		ownKeys(e) {
			U(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== T;
			});
			for (var [r, a] of n) a.v !== T && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Oe();
		}
	});
}
var Sn = e((() => {
	r(), J(), y(), bn(), C(), Ne(), w(), Qe(), $e(), Xe(), new Set([
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
	Ie(), Sn();
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
function R(e, t) {
	if (!D) return /* @__PURE__ */ En(e);
	var n = /* @__PURE__ */ En(O);
	if (n === null) n = O.appendChild(Tn());
	else if (t && n.nodeType !== 3) {
		var r = Tn();
		return n?.before(r), Re(r), r;
	}
	return t && Mn(n), Re(n), n;
}
function On(e, t = !1) {
	if (!D) {
		var n = /* @__PURE__ */ En(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Dn(n) : n;
	}
	if (t) {
		if (O?.nodeType !== 3) {
			var r = Tn();
			return O?.before(r), Re(r), r;
		}
		Mn(O);
	}
	return O;
}
function z(e, t = 1, n = !1) {
	let r = D ? O : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Dn(r);
	if (!D) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Tn();
			return r === null ? i?.after(a) : r.before(a), Re(a), a;
		}
		Mn(r);
	}
	return Re(r), r;
}
function kn(e) {
	e.textContent = "";
}
function An() {
	return !Je || Ht !== null ? !1 : (q.f & ne) !== 0;
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
var Nn, Pn, Fn, In, Ln, B = e((() => {
	k(), r(), Cn(), y(), J(), Xe(), C(), F(), Ne();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Rn(e) {
	D && /* @__PURE__ */ En(e) !== null && kn(e);
}
function zn() {
	Bn || (Bn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Bn, Vn = e((() => {
	k(), B(), ct(), Bn = !1;
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
	q === null && (K === null && we(e), Ce()), Rr && Se(e);
}
function Gn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Kn(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: A,
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
	N?.register_created_effect(r);
	var i = r;
	if (e & 4) Lt === null ? Vt.ensure().schedule(r) : Lt.push(r);
	else if (t !== null) {
		try {
			Mr(r);
		} catch (e) {
			throw ur(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ie));
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
	return M(t, b), t.teardown = e, t;
}
function Yn(e) {
	Wn("$effect");
	var t = q.f;
	if (!K && t & 32 && !(t & 32768)) {
		var n = A;
		(n.e ??= []).push(e);
	} else return Xn(e);
}
function Xn(e) {
	return Kn(4 | se, e);
}
function Zn(e) {
	return Wn("$effect.pre"), Kn(8 | se, e);
}
function Qn(e) {
	Vt.ensure();
	let t = Kn(64 | oe, e);
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
	var n = A, r = {
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
	var e = A;
	rr(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && M(n, S), Dr(n) && Mr(n), t.ran = !1;
		}
	});
}
function nr(e) {
	return Kn(de | oe, e);
}
function rr(e, t = 0) {
	return Kn(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	Yt(r, t, n, (t) => {
		Kn(8, () => e(...t.map(U)));
	});
}
function ir(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = Qt();
	Yt(r, t, n, (t) => {
		Kn(4, () => e(...t.map(U))), i && i();
	});
}
function ar(e, t = 0) {
	return Kn(16 | t, e);
}
function or(e) {
	return Kn(32 | oe, e);
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
			e.abort(ge);
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
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (dr(e.nodes.start, e.nodes.end), n = !0), M(e, re), cr(e, t && !n), jr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	sr(e), e.f ^= re, e.f |= te;
	var i = e.parent;
	i !== null && i.first !== null && fr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function dr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Dn(e);
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
		e.f ^= ee, e.f & 1024 || (M(e, x), Vt.ensure().schedule(e));
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
		var i = n === r ? null : /* @__PURE__ */ Dn(n);
		t.append(n), n = i;
	}
}
var H = e((() => {
	J(), C(), w(), r(), y(), B(), j(), F(), $t(), Un(), mt();
})), vr, yr = e((() => {
	bn(), J(), vr = null;
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
	K !== null && (!Je || K.f & 2) && (Br === null ? Br = [e] : Br.push(e));
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
	if (t & 2 && (e.f &= ~le), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Dr(a) && sn(a), a.wv > e.wv) return !0;
		}
		t & 512 && P === null && M(e, b);
	}
	return !1;
}
function Or(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Je && Br !== null && l.call(Br, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Or(a, t, !1) : t === a && (n ? M(a, x) : a.f & 1024 && M(a, S), At(a));
	}
}
function kr(e) {
	var t = Vr, n = Hr, r = Ur, i = K, a = Br, o = A, s = zr, c = Kr, l = e.f;
	Vr = null, Hr = 0, Ur = null, K = l & 96 ? null : e, Br = null, et(e.ctx), zr = !1, Kr = ++Gr, e.ac !== null && (Hn(() => {
		e.ac.abort(ge);
	}), e.ac = null);
	try {
		e.f |= ue;
		var u = e.fn, d = u();
		e.f |= ne;
		var f = e.deps, p = N?.is_fork;
		if (Vr !== null) {
			var m;
			if (p || jr(e, Hr), f !== null && Hr > 0) for (f.length = Hr + Vr.length, m = 0; m < Vr.length; m++) f[Hr + m] = Vr[m];
			else e.deps = f = Vr;
			if (qn() && e.f & 512) for (m = Hr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Hr < f.length && (jr(e, Hr), f.length = Hr);
		if (rt() && Ur !== null && !zr && f !== null && !(e.f & 6146)) for (m = 0; m < Ur.length; m++) Or(Ur[m], e);
		if (i !== null && i !== e) {
			if (Gr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Gr;
			if (t !== null) for (let e of t) e.rv = Gr;
			Ur !== null && (r === null ? r = Ur : r.push(...Ur));
		}
		return e.f & 8388608 && (e.f ^= fe), d;
	} catch (e) {
		return lt(e);
	} finally {
		e.f ^= ue, Vr = t, Hr = n, Ur = r, K = i, Br = a, et(o), zr = s, Kr = c;
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
		a.f & 512 && (a.f ^= 512, a.f &= ~le), ft(a), cn(a), jr(a, 0);
	}
}
function jr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Ar(e, n[r]);
}
function Mr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		M(e, b);
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
	if (Je) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), Tt();
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
	if (Rr && vn.has(e)) return vn.get(e);
	if (t) {
		var i = e;
		if (Rr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Fr(i)) && (a = on(i)), vn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !zr && K !== null && (Lr || (K.f & 512) != 0), s = (i.f & ne) === 0;
		Dr(i) && (o && (i.f |= 512), sn(i)), o && !s && (ln(i), Pr(i));
	}
	if (P?.has(e)) return P.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Pr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ln(t), Pr(t));
}
function Fr(e) {
	if (e.v === T) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (vn.has(t) || t.f & 2 && Fr(t)) return !0;
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
		if (pe in e) Ir(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && pe in n && Ir(n);
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
	r(), y(), H(), C(), bn(), un(), Xe(), Qe(), $e(), j(), F(), dt(), Ne(), yr(), Un(), mt(), Ie(), Lr = !1, Rr = !1, K = null, zr = !1, q = null, Br = null, Vr = null, Hr = 0, Ur = null, Wr = 1, Gr = 0, Kr = Gr;
})), qr = e((() => {
	Wa(), Ja(), H();
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
	C(), Qr(), J();
})), ei = e((() => {
	C(), k(), j();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function ti(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ni.call(t, e), !e.cancelBubble) return Hn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? at(() => {
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
	H(), y(), k(), ct(), J(), Un(), ri = Symbol("events"), ii = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), oi = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function ci(e) {
	return ui?.createHTML(e) ?? e;
}
function li(e) {
	var t = jn("template");
	return t.innerHTML = ci(e.replaceAll("<!>", "<!---->")), t.content;
}
var ui, di = e((() => {
	B(), ui = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
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
		if (D) return fi(O, null), O;
		i === void 0 && (i = li(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ En(i)));
		var t = r || Fn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ En(t), s = t.lastChild;
			fi(o, s);
		} else fi(t, t);
		return t;
	};
}
function pi(e = "") {
	if (!D) {
		var t = Tn(e + "");
		return fi(t, t), t;
	}
	var n = O;
	return n.nodeType === 3 ? Mn(n) : (n.before(n = Tn()), Re(n)), fi(n, n), n;
}
function mi() {
	if (D) return fi(O, null), O;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
	return e.append(t, n), fi(t, n), e;
}
function Z(e, t) {
	if (D) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = O), ze();
		return;
	}
	e !== null && e.before(t);
}
var hi = e((() => {
	k(), B(), di(), J(), Ne(), C();
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
	wn();
	var c = void 0, l = Qn(() => {
		var l = n ?? t.appendChild(Tn());
		Gt(l, { pending: () => {} }, (t) => {
			tt({});
			var n = A;
			if (a && (n.c = a), i && (r.$$events = i), D && fi(t, null), vi = o, c = e(t, r) || {}, vi = !0, D && (q.nodes.end = O, O === null || O.nodeType !== 8 || O.data !== "]")) throw Pe(), je;
			nt();
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
	r(), B(), Ne(), J(), j(), H(), k(), y(), si(), Ie(), w(), hi(), Qr(), C(), Jt(), yi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new WeakMap();
})), Si = e((() => {
	C(), k(), H(), bn(), xi(), J();
})), Ci = e((() => {
	y(), C(), j(), Qr();
})), wi = e((() => {
	w(), j();
})), Ti = e((() => {
	Ze(), H(), J(), $e();
})), Ei = e((() => {
	$t(), J(), k();
})), Di = e((() => {
	w();
})), Oi, ki = e((() => {
	F(), H(), k(), B(), Oi = class {
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
							_r(r, t), t.append(Tn()), this.#n.set(e, {
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
			var n = N, r = An();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = Tn();
				i.append(a), this.#n.set(e, {
					effect: or(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, or(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else D && (this.anchor = O), this.#a(n);
		}
	};
})), Ai = e((() => {
	y(), H(), bn(), k(), ct(), j(), F(), ki(), $t();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function ji(e, t, n = !1) {
	var r;
	D && (r = O, ze());
	var i = new Oi(e), a = n ? ie : 0;
	function o(e, t) {
		if (D) {
			var n = He(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ve();
				Re(a), i.anchor = a, Le(!1), i.ensure(e, t), Le(!0);
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
	C(), k(), H(), ki();
})), Ni = e((() => {
	j(), H(), k(), ki();
})), Pi = e((() => {
	H(), k(), B();
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
			kn(d), d.append(l), e.items.clear();
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
		r?.has(a) ? (a.f |= ce, _r(a, document.createDocumentFragment())) : ur(t[i], n);
	}
}
function Ri(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = D ? Re(/* @__PURE__ */ En(l)) : l.appendChild(Tn());
	}
	D && ze();
	var d = null, f = /* @__PURE__ */ nn(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Bi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ce, Hi(d, null, o)) : hr(d) : pr(d, () => {
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
			D && He(o) === "[!" != (e === 0) && (o = Ve(), Re(o), Le(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = N, v = An(), y = 0; y < e; y += 1) {
				D && O.nodeType === 8 && O.data === "]" && (o = O, s = !0, Le(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && pn(S.v, b), S.i && pn(S.i, y), v && u.unskip_effect(S.e)) : (S = Vi(c, h ? o : Wi ??= Tn(), b, x, y, i, t, n), h || (S.e.f |= ce), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = or(() => a(o)) : (d = or(() => a(Wi ??= Tn())), d.f |= ce)), e > l.size && xe("", "", ""), D && e > 0 && Re(Ve()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			s && Le(!0), U(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, D && (o = O);
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
		if (_.f & 8192 && (hr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ce, _ === c) Hi(_, null, n);
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
		var te = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || te.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && te.push(c), c = zi(c.next);
		var ne = te.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
			}
			Ii(e, te, re);
		}
	}
	a && at(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Vi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? dn(n) : /* @__PURE__ */ I(n, !1, !1) : null, l = o & 2 ? dn(i) : null;
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
		var o = /* @__PURE__ */ Dn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Ui(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var Wi, Gi = e((() => {
	Ne(), k(), B(), H(), bn(), y(), C(), ct(), J(), r(), un(), F(), w();
})), Ki = e((() => {
	H(), k(), hi(), Qr(), j(), B(), J(), C();
})), qi = e((() => {
	k();
})), Ji = e((() => {
	Qr();
})), Yi = e((() => {
	C(), H(), j(), k(), di(), hi(), w(), B(), Ji(), ki();
})), Xi = e((() => {
	C(), H(), k(), ki();
})), Zi = e((() => {
	y();
})), Qi = e((() => {
	Zi();
})), $i = e((() => {
	y(), H(), J(), Qi(), xi(), C(), ct(), Un();
})), ea = e((() => {
	k(), B(), H(), xi(), J(), j(), C(), hi(), Qr(), ki(), $i();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function ta(e, t) {
	let n = null, r = D;
	var i;
	if (D) {
		n = O;
		for (var a = /* @__PURE__ */ En(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Dn(a);
		if (a === null) Le(!1);
		else {
			var o = /* @__PURE__ */ Dn(a);
			a.remove(), Re(o);
		}
	}
	D || (i = document.head.appendChild(Tn()));
	try {
		ar(() => t(i), ae | oe);
	} finally {
		r && (Le(!0), Re(n));
	}
}
var na = e((() => {
	k(), B(), H(), C();
})), ra = e((() => {
	H(), B();
})), ia = e((() => {
	H(), J();
})), aa = e((() => {
	H();
})), oa = e((() => {
	y();
})), sa = e((() => {
	oa(), k();
})), ca = e((() => {
	oa(), k();
})), la = e((() => {
	H(), Un(), Sn(), y(), F();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function ua(e) {
	if (D) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					fa(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					fa(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, at(n), zn();
	}
}
function da(e, t) {
	var n = pa(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== va) || (e.value = t ?? "");
}
function fa(e, t, n, r) {
	var i = pa(e);
	D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === _a) || i[t] !== (i[t] = n) && (t === "loading" && (e[he] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ma(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pa(e) {
	return e.__attributes ??= {
		[ha]: e.nodeName.includes("-"),
		[ga]: e.namespaceURI === Me
	};
}
function ma(e) {
	var t = e.getAttribute("is") || e.nodeName, n = ya.get(t);
	if (n) return n;
	ya.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && n.push(o);
		i = g(i);
	}
	return n;
}
var ha, ga, _a, va, ya, ba = e((() => {
	r(), k(), y(), si(), Vn(), Ie(), C(), ct(), Qr(), J(), aa(), oa(), sa(), ca(), Ne(), H(), la(), $t(), ha = Symbol("is custom element"), ga = Symbol("is html"), _a = _e ? "link" : "LINK", va = _e ? "progress" : "PROGRESS", ya = /* @__PURE__ */ new Map();
})), xa = e((() => {
	k(), B(), di(), aa();
})), Sa = e((() => {
	Un();
})), Ca = e((() => {
	H(), Un(), w(), Sn(), ct(), k(), J(), j(), F();
})), wa = e((() => {
	H(), Un();
})), Ta = e((() => {
	Un();
})), Ea = e((() => {
	H(), y();
})), Da = e((() => {
	H(), J();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Oa(e, t) {
	return e === t || e?.[pe] === t;
}
function ka(e = {}, t, n, r) {
	var i = A.r, a = q;
	return $n(() => {
		var o, s;
		return rr(() => {
			o = s, s = r?.() || [], W(() => {
				e !== n(...s) && (t(e, ...s), o && Oa(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Oa(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
var Aa = e((() => {
	C(), j(), H(), J();
})), ja = e((() => {
	H(), Un();
})), Ma = e((() => {
	H(), Un();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function Na(e) {
	return function(...t) {
		return t[0].preventDefault(), e?.apply(this, t);
	};
}
var Pa = e((() => {
	y(), H(), si();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Fa(e = !1) {
	let t = A, n = t.l.u;
	if (!n) return;
	let r = () => G(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ en(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => U(i);
	}
	n.b.length && Zn(() => {
		Ia(t, r), a(n.b);
	}), Yn(() => {
		let e = W(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Yn(() => {
		Ia(t, r), a(n.a);
	});
}
function Ia(e, t) {
	if (e.l.s) for (let t of e.l.s) U(t);
	t();
}
var La = e((() => {
	y(), j(), un(), H(), J();
})), Ra = e((() => {
	bn(), J(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !Ye || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? W(r) : r), s);
	let u;
	if (a) {
		var d = pe in e || me in e;
		u = f(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = bt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = l(), u && (i && Ee(t), u(p)));
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
	var _ = !1, v = (n & 1 ? en : nn)(() => (_ = !1, h()));
	a && U(v);
	var y = q;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? U(v) : i && a ? xn(e) : e;
			return L(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Rr && _ || y.f & 16384 ? v.v : U(v);
	});
}
var za = e((() => {
	r(), Ne(), y(), bn(), un(), J(), w(), C(), Sn(), Ct(), Xe(), H();
})), Ba = e((() => {
	j(), H(), Ct(), $t();
})), Va = e((() => {
	C(), H(), bn(), xi(), J(), F(), y(), w(), j(), Xe(), mt(), Pa();
})), Ha = e((() => {
	Va(), H(), hi(), y(), B();
})), Ua = e((() => {
	C(), Ze(), J();
})), Wa = e((() => {
	qr(), j(), $r(), ei(), Si(), Ci(), wi(), Qe(), Ti(), Ei(), Di(), Ai(), Mi(), Ni(), Pi(), Gi(), Ki(), qi(), Yi(), Xi(), ea(), na(), ra(), ia(), aa(), ba(), sa(), si(), Vn(), xa(), ca(), $i(), Sa(), Ca(), wa(), Ta(), Ea(), la(), Da(), Aa(), ja(), Ma(), k(), Pa(), La(), Ra(), hi(), $t(), F(), un(), H(), bn(), za(), Ct(), Jt(), yr(), xi(), J(), Ba(), Zi(), Sn(), Ha(), B(), oa(), Ze(), y(), Ji(), Cn(), Ua(), dt();
})), Ga = e((() => {
	k(), w();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function Ka(e) {
	A === null && ve("onMount"), Ye && A.l !== null ? qa(A).m.push(e) : Yn(() => {
		let t = W(e);
		if (typeof t == "function") return t;
	});
}
function qa(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var Ja = e((() => {
	J(), y(), Wa(), w(), Xe(), j(), r(), F(), Ga(), xi(), Yi();
})), Ya = e((() => {})), Xa = e((() => {
	Ya(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), Za = e((() => {
	Xe(), qe();
}));
//#endregion
//#region frontend/src/lib/app-shell.js
function Qa() {
	return typeof window > "u" ? "/buyer/home" : window.location.pathname;
}
function $a() {
	let e = Qa().match(/\/buyer\/products\/(\d+)/);
	return e ? Number(e[1]) : null;
}
function eo() {
	let e = Qa().match(/\/buyer\/orders\/(\d+)\/confirmation/);
	return e ? Number(e[1]) : null;
}
function to(e = Qa()) {
	return e.startsWith("/admin") ? "admin" : e.startsWith("/seller") ? "seller" : "buyer";
}
function no(e = Qa()) {
	return e === "/admin" ? "admin-home" : e === "/admin/sub" ? "admin-moderation" : e === "/admin/audit" ? "admin-audit" : e === "/seller/home" ? "seller-home" : e === "/seller/inventory" ? "seller-inventory" : e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
}
function ro(e) {
	return ho[e] || ho.storefront;
}
function io(e) {
	return ro(e).title;
}
function ao(e) {
	return e === "admin-moderation" ? "/admin/classic/sub" : e === "admin-audit" ? "/admin/classic/audit" : "/admin/classic";
}
function oo(e, t) {
	return e === "admin" ? ao(t) : e === "seller" ? "/seller/classic/home" : "/buyer/classic/home";
}
function so(e) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(e);
}
function co(e) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(new Date(e));
}
function lo(e) {
	return e === "demo_card" ? "Demo Credit Card" : e;
}
function uo(e, t) {
	return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
}
function fo(e) {
	return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
}
function po(e) {
	return e.banned ? "Banned" : e.blocked ? "Blocked" : e.approved ? "Approved" : "Pending";
}
function mo(e) {
	return e ? e.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "";
}
var ho, go, _o = e((() => {
	ho = {
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
	}, go = {
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
function vo(e, t) {
	tt(t, !1);
	let n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I(), i = $(t, "appMode", 8), a = $(t, "currentPage", 8), o = $(t, "onLogout", 8), s = {
		admin: "Admin Workspace",
		seller: "Seller Workspace",
		buyer: "Buyer Workspace"
	};
	er(() => G(i()), () => {
		L(n, go[i()] || go.buyer);
	}), er(() => (G(i()), G(a())), () => {
		L(r, oo(i(), a()));
	}), tr(), Fa();
	var c = bo(), l = R(c), u = R(l), d = R(u, !0);
	E(u), Be(2), E(l);
	var f = z(l, 2), p = R(f);
	Ri(p, 1, () => U(n), Fi, (e, t) => {
		var n = yo(), r = R(n, !0);
		E(n), V(() => {
			fa(n, "href", (U(t), W(() => U(t).href))), Q(r, (U(t), W(() => U(t).label)));
		}), Z(e, n);
	});
	var m = z(p, 2), h = z(m, 2);
	E(f), E(c), V(() => {
		Q(d, (G(i()), W(() => s[i()] || s.buyer))), fa(m, "href", U(r));
	}), Y("click", h, function(...e) {
		o()?.apply(this, e);
	}), Z(e, c), nt();
}
var yo, bo, xo = e((() => {
	Xa(), Za(), Wa(), _o(), yo = /* @__PURE__ */ X("<a class=\"action-link\"> </a>"), bo = /* @__PURE__ */ X("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function So(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = Co(), o = R(a), s = R(o), c = R(s, !0);
	E(s);
	var l = z(s, 2), u = R(l, !0);
	E(l), E(o);
	var d = z(o, 2);
	E(a), V(() => {
		Q(c, n()), Q(u, r());
	}), Y("click", d, function(...e) {
		i()?.apply(this, e);
	}), Z(e, a);
}
var Co, wo = e((() => {
	Xa(), Za(), Wa(), Co = /* @__PURE__ */ X("<div class=\"catalog-header\"><div><p class=\"section-kicker\"> </p> <h2> </h2></div> <button class=\"refresh-button\">Refresh</button></div>");
}));
//#endregion
//#region frontend/src/components/AdminAuditView.svelte
function To(e, t) {
	tt(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Fa();
	var a = mi(), o = On(a), s = (e) => {
		Z(e, Eo());
	}, c = (e) => {
		var t = Oo(), a = z(R(t), 2);
		Ri(a, 5, n, Fi, (e, t) => {
			var n = Do(), a = R(n), o = R(a, !0);
			E(a);
			var s = z(a, 2), c = R(s, !0);
			E(s);
			var l = z(s, 2), u = R(l, !0);
			E(l);
			var d = z(l, 2), f = R(d, !0);
			E(d), E(n), V((e, n) => {
				Q(o, e), Q(c, (U(t), W(() => U(t).username))), Q(u, n), Q(f, (U(t), W(() => U(t).details)));
			}, [() => (G(i()), U(t), W(() => i()(U(t).createdAt))), () => (G(r()), U(t), W(() => r()(U(t).actionType)))]), Z(e, n);
		}), E(a), E(t), Z(e, t);
	};
	ji(o, (e) => {
		G(n()), W(() => n().length === 0) ? e(s) : e(c, -1);
	}), Z(e, a), nt();
}
var Eo, Do, Oo, ko = e((() => {
	Xa(), Za(), Wa(), Eo = /* @__PURE__ */ X("<div class=\"state-card\">No audit log entries yet.</div>"), Do = /* @__PURE__ */ X("<article class=\"admin-audit-row\"><p class=\"seller admin-audit-when\"> </p> <p class=\"admin-audit-user\"> </p> <p class=\"admin-audit-action\"> </p> <p class=\"admin-audit-details\"> </p></article>"), Oo = /* @__PURE__ */ X("<div class=\"panel admin-box\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent actions</p> <h3>Recorded system activity</h3></div></div> <div class=\"admin-audit-list\"></div></div>");
}));
//#endregion
//#region frontend/src/components/AdminHomeView.svelte
function Ao(e) {
	Z(e, jo());
}
var jo, Mo = e((() => {
	Xa(), Za(), Wa(), jo = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--two\"><article class=\"admin-region admin-region--products\"><p class=\"section-kicker\">Moderation</p> <h3>User and listing review</h3> <p class=\"detail-description\">Review pending registrations, approve or reject seller listings, and handle active account status changes.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/sub\">User management</a></div></article> <article class=\"admin-region\"><p class=\"section-kicker\">Audit</p> <h3>Recent platform activity</h3> <p class=\"detail-description\">Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/audit\">Open audit log</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/AdminModerationView.svelte
function No(e, t) {
	tt(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Fa();
	var x = Ko(), S = R(x), ee = R(S), te = z(R(ee), 2), ne = R(te, !0);
	E(te), E(ee);
	var re = z(ee, 2), ie = (e) => {
		Z(e, Po());
	}, ae = (e) => {
		var t = Io(), r = R(t), i = z(R(r));
		Ri(i, 5, n, Fi, (e, t) => {
			var n = Fo(), r = R(n), i = R(r, !0);
			E(r);
			var a = z(r), o = R(a, !0);
			E(a);
			var s = z(a), u = R(s, !0);
			E(s);
			var d = z(s), f = R(d, !0);
			E(d);
			var p = z(d), m = R(p), h = R(m), g = z(h, 2);
			E(m), E(p), E(n), V((e, n) => {
				Q(i, (U(t), W(() => U(t).username))), Q(o, e), Q(u, (U(t), W(() => U(t).email))), Q(f, n);
			}, [() => (G(_()), U(t), W(() => _()(U(t).role))), () => (G(y()), U(t), W(() => y()(U(t).createdAt)))]), Y("click", h, () => c()(U(t).id)), Y("click", g, () => l()(U(t).id)), Z(e, n);
		}), E(i), E(r), E(t), Z(e, t);
	};
	ji(re, (e) => {
		G(n()), W(() => n().length === 0) ? e(ie) : e(ae, -1);
	}), E(S);
	var oe = z(S, 2), se = R(oe), ce = z(R(se), 2), le = R(ce, !0);
	E(ce), E(se);
	var ue = z(se, 2), de = (e) => {
		Z(e, Lo());
	}, fe = (e) => {
		var t = Ho(), n = R(t), i = z(R(n));
		Ri(i, 5, r, Fi, (e, t) => {
			var n = Vo(), r = R(n), i = R(r, !0);
			E(r);
			var a = z(r), o = R(a, !0);
			E(a);
			var s = z(a), c = R(s, !0);
			E(s);
			var l = z(s), u = R(l, !0);
			E(l);
			var m = z(l), h = R(m, !0);
			E(m);
			var g = z(m), _ = R(g), y = (e) => {
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
			}), E(g);
			var ee = z(g), te = R(ee), ne = (e) => {
				var n = Ro(), r = R(n), i = z(r, 2);
				E(n), Y("click", r, () => d()(U(t).id)), Y("click", i, () => f()(U(t).id)), Z(e, n);
			}, re = (e) => {
				var n = zo();
				Y("click", n, () => p()(U(t).id)), Z(e, n);
			}, ie = (e) => {
				Z(e, Bo());
			};
			ji(te, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(ne) : (U(t), W(() => U(t).isListed) ? e(re, 1) : e(ie, -1));
			}), E(ee), E(n), V((e) => {
				Q(i, (U(t), W(() => U(t).name))), Q(o, (U(t), W(() => U(t).seller?.username || "Unknown seller"))), Q(c, (U(t), W(() => U(t).description || "No description provided."))), Q(u, e), Q(h, (U(t), W(() => U(t).stock)));
			}, [() => (G(v()), U(t), W(() => v()(U(t).price)))]), Z(e, n);
		}), E(i), E(n), E(t), Z(e, t);
	};
	ji(ue, (e) => {
		G(r()), W(() => r().length === 0) ? e(de) : e(fe, -1);
	}), E(oe);
	var pe = z(oe, 2), me = R(pe), he = z(R(me), 2), ge = R(he);
	E(he), E(me);
	var _e = z(me, 2), C = R(_e);
	ua(C);
	var ve = z(C, 4);
	E(_e);
	var ye = z(_e, 2), be = (e) => {
		Z(e, Uo());
	}, xe = (e) => {
		var t = Go(), n = R(t), r = z(R(n));
		Ri(r, 5, i, Fi, (e, t) => {
			var n = Wo(), r = R(n), i = R(r, !0);
			E(r);
			var a = z(r), o = R(a, !0);
			E(a);
			var s = z(a), d = R(s, !0);
			E(s);
			var f = z(s), p = R(f, !0);
			E(f);
			var m = z(f), h = R(m), g = R(h), v = z(g, 2), x = z(v, 2);
			E(h), E(m), E(n), V((e, n, r) => {
				Q(i, (U(t), W(() => U(t).username))), Q(o, e), Q(d, n), Q(p, r);
			}, [
				() => (G(_()), U(t), W(() => _()(U(t).role))),
				() => (G(b()), U(t), W(() => b()(U(t)))),
				() => (G(y()), U(t), W(() => y()(U(t).createdAt)))
			]), Y("click", g, () => c()(U(t).id)), Y("click", v, () => l()(U(t).id)), Y("click", x, () => u()(U(t).id)), Z(e, n);
		}), E(r), E(n), E(t), Z(e, t);
	};
	ji(ye, (e) => {
		G(i()), W(() => i().length === 0) ? e(be) : e(xe, -1);
	});
	var Se = z(ye, 2), Ce = R(Se), we = z(Ce, 2), Te = R(we);
	E(we);
	var Ee = z(we, 2);
	E(Se), E(pe), E(x), V(() => {
		Q(ne, (G(n()), W(() => n().length))), Q(le, (G(r()), W(() => r().length))), Q(ge, `${(G(a()), W(() => a().totalPages)) ?? ""} page${(G(a()), W(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), da(C, o()), Ce.disabled = (G(a()), W(() => !a().hasPreviousPage)), Q(Te, `Page ${(G(a()), W(() => a().page)) ?? ""} of ${(G(a()), W(() => a().totalPages)) ?? ""}`), Ee.disabled = (G(a()), W(() => !a().hasNextPage));
	}), Y("input", C, function(...e) {
		s()?.apply(this, e);
	}), Y("click", ve, function(...e) {
		h()?.apply(this, e);
	}), Y("submit", _e, Na(function(...e) {
		m()?.apply(this, e);
	})), Y("click", Ce, () => g()(a().page - 1)), Y("click", Ee, () => g()(a().page + 1)), Z(e, x), nt();
}
var Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo = e((() => {
	Xa(), Za(), Wa(), Po = /* @__PURE__ */ X("<div class=\"state-card\">No pending users right now.</div>"), Fo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), Io = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Lo = /* @__PURE__ */ X("<div class=\"state-card\">No seller listings are available for review.</div>"), Ro = /* @__PURE__ */ X("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), zo = /* @__PURE__ */ X("<button class=\"admin-button admin-button-danger\">Delist</button>"), Bo = /* @__PURE__ */ X("<span class=\"seller\">No further action</span>"), Vo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), Ho = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), Uo = /* @__PURE__ */ X("<div class=\"state-card\">No users matched that search.</div>"), Wo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), Go = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Ko = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function Jo(e, t) {
	tt(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Fa();
	var a = Qo(), o = R(a), s = R(o), c = (e) => {
		Z(e, Yo());
	}, l = (e) => {
		var t = Zo();
		Ri(t, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
			var n = Xo(), a = R(n), o = R(a), s = R(o, !0);
			E(o);
			var c = z(o, 2), l = R(c, !0);
			E(c);
			var u = z(c, 2), d = R(u);
			E(u), E(a);
			var f = z(a, 2), p = R(f), m = R(p, !0);
			E(p);
			var h = z(p, 2);
			E(f), E(n), V((e, n) => {
				Q(s, (U(t), W(() => U(t).product.seller.username))), Q(l, (U(t), W(() => U(t).product.name))), Q(d, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(m, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Y("click", h, () => r()(U(t).id)), Z(e, n);
		}), E(t), Z(e, t);
	};
	ji(s, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), E(o);
	var u = z(o, 2), d = z(R(u), 2), f = R(d, !0);
	E(d);
	var p = z(d, 4), m = R(p, !0);
	E(p);
	var h = z(p, 4), g = R(h, !0);
	E(h), Be(2), E(u), E(a), V((e, t, n) => {
		Q(f, e), Q(m, t), Q(g, n);
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Z(e, a), nt();
}
var Yo, Xo, Zo, Qo, $o = e((() => {
	Xa(), Za(), Wa(), Yo = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty.</div>"), Xo = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), Zo = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), Qo = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function es(e, t) {
	tt(t, !1);
	let n = $(t, "cart", 8), r = $(t, "placeOrder", 8), i = $(t, "formatCurrency", 8);
	Fa();
	var a = is(), o = R(a), s = R(o), c = (e) => {
		Z(e, ts());
	}, l = (e) => {
		var t = rs();
		Ri(t, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
			var n = ns(), r = R(n), a = R(r), o = R(a, !0);
			E(a);
			var s = z(a, 2), c = R(s, !0);
			E(s);
			var l = z(s, 2), u = R(l);
			E(l), E(r);
			var d = z(r, 2), f = R(d), p = R(f, !0);
			E(f), E(d), E(n), V((e, n) => {
				Q(o, (U(t), W(() => U(t).product.seller.username))), Q(c, (U(t), W(() => U(t).product.name))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Z(e, n);
		}), E(t), Z(e, t);
	};
	ji(s, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), E(o);
	var u = z(o, 2), d = z(R(u), 2), f = R(d, !0);
	E(d);
	var p = z(d, 4), m = R(p, !0);
	E(p);
	var h = z(p, 4), g = R(h, !0);
	E(h);
	var _ = z(h, 4), v = R(_);
	Be(2), E(_), E(u), E(a), V((e, t, r) => {
		Q(f, e), Q(m, t), Q(g, r), v.disabled = (G(n()), W(() => n().items.length === 0));
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Y("click", v, function(...e) {
		r()?.apply(this, e);
	}), Z(e, a), nt();
}
var ts, ns, rs, is, as = e((() => {
	Xa(), Za(), Wa(), ts = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), ns = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), rs = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), is = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function os(e, t) {
	tt(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Fa();
	var s = mi(), c = On(s), l = (e) => {
		Z(e, ss());
	}, u = (e) => {
		var t = ls();
		Ri(t, 5, n, Fi, (e, t) => {
			var n = cs(), s = R(n), c = z(R(s), 2), l = R(c, !0);
			E(c), E(s);
			var u = z(s, 2), d = R(u, !0);
			E(u);
			var f = z(u, 2), p = R(f, !0);
			E(f);
			var m = z(f, 2), h = R(m), g = R(h);
			E(h);
			var _ = z(h, 2), v = R(_), y = z(v, 2);
			E(_), E(m), E(n), V((e, n) => {
				Q(l, e), Q(d, (U(t), W(() => U(t).name))), Q(p, n), fa(g, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(a()), U(t), W(() => a()(U(t).price))), () => (G(o()), U(t), W(() => o()(U(t).description || "", 160)))]), Y("click", v, () => r()(U(t).id)), Y("click", y, () => i()(U(t).id)), Z(e, n);
		}), E(t), Z(e, t);
	};
	ji(c, (e) => {
		G(n()), W(() => n().length === 0) ? e(l) : e(u, -1);
	}), Z(e, s), nt();
}
var ss, cs, ls, us = e((() => {
	Xa(), Za(), Wa(), ss = /* @__PURE__ */ X("<div class=\"state-card\">No products marked for comparison.</div>"), cs = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), ls = /* @__PURE__ */ X("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function ds(e, t) {
	tt(t, !1);
	let n = $(t, "order", 8), r = $(t, "formatCurrency", 8), i = $(t, "formatDate", 8), a = $(t, "formatPaymentMethod", 8);
	Fa();
	var o = ps(), s = R(o), c = R(s);
	Ri(c, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
		var n = fs(), i = R(n), a = R(i), o = R(a);
		E(a);
		var s = z(a, 2), c = R(s, !0);
		E(s);
		var l = z(s, 2), u = R(l);
		E(l), E(i);
		var d = z(i, 2), f = R(d), p = R(f, !0);
		E(f), E(d), E(n), V((e, n) => {
			Q(o, `Seller ID ${(U(t), W(() => U(t).sellerId)) ?? ""}`), Q(c, (U(t), W(() => U(t).productName))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
		}, [() => (G(r()), U(t), W(() => r()(U(t).unitPrice))), () => (G(r()), U(t), W(() => r()(U(t).lineTotal)))]), Z(e, n);
	}), E(c), E(s);
	var l = z(s, 2), u = z(R(l), 2), d = R(u);
	E(u);
	var f = z(u, 4), p = R(f, !0);
	E(f);
	var m = z(f, 4), h = R(m, !0);
	E(m);
	var g = z(m, 4), _ = R(g, !0);
	E(g);
	var v = z(g, 4), y = R(v, !0);
	E(v);
	var b = z(v, 4), x = R(b, !0);
	E(b);
	var S = z(b, 4), ee = R(S, !0);
	E(S), Be(2), E(l), E(o), V((e, t, r, i, a) => {
		Q(d, `#${(G(n()), W(() => n().id)) ?? ""}`), Q(p, (G(n()), W(() => n().status))), Q(h, e), Q(_, t), Q(y, r), Q(x, i), Q(ee, a);
	}, [
		() => (G(a()), G(n()), W(() => a()(n().paymentMethod))),
		() => (G(i()), G(n()), W(() => i()(n().createdAt))),
		() => (G(r()), G(n()), W(() => r()(n().subtotal))),
		() => (G(r()), G(n()), W(() => r()(n().taxAmount))),
		() => (G(r()), G(n()), W(() => r()(n().total)))
	]), Z(e, o), nt();
}
var fs, ps, ms = e((() => {
	Xa(), Za(), Wa(), fs = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ps = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function hs(e, t) {
	tt(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Fa();
	var o = gs(), s = R(o), c = R(s), l = R(c, !0);
	E(c);
	var u = z(c, 2), d = R(u);
	E(u), E(s);
	var f = z(s, 2), p = R(f), m = R(p), h = R(m, !0);
	E(m);
	var g = z(m, 2), _ = R(g, !0);
	E(g), E(p);
	var v = z(p, 2), y = R(v), b = z(y, 2);
	E(v), E(f);
	var x = z(f, 2), S = R(x, !0);
	E(x), Be(2), E(o), V((e) => {
		Q(l, (G(n()), W(() => n().seller.username))), Q(d, `${(G(n()), W(() => n().stock)) ?? ""} in stock`), Q(h, (G(n()), W(() => n().name))), Q(_, e), Q(S, (G(n()), W(() => n().description || "No description provided.")));
	}, [() => (G(a()), G(n()), W(() => a()(n().price)))]), Y("click", y, () => r()(n().id)), Y("click", b, () => i()(n().id)), Z(e, o), nt();
}
var gs, _s = e((() => {
	Xa(), Za(), Wa(), gs = /* @__PURE__ */ X("<article class=\"detail-card\"><div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function vs(e) {
	Z(e, ys());
}
var ys, bs = e((() => {
	Xa(), Za(), Wa(), ys = /* @__PURE__ */ X("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function xs(e, t) {
	tt(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "formatCurrency", 8);
	Fa();
	var c = Ts(), l = On(c), u = R(l), d = R(u), f = z(R(d), 2);
	ua(f);
	var p = z(f, 4);
	Rn(p);
	var m = z(p, 4);
	ua(m);
	var h = z(m, 4);
	ua(h), Be(2), E(d), ka(d, (e) => i(e), () => i()), E(u);
	var g = z(u, 2), _ = z(R(g), 2), v = R(_, !0);
	E(_), E(g), E(l);
	var y = z(l, 2), b = (e) => {
		Z(e, Ss());
	}, x = (e) => {
		var t = ws();
		Ri(t, 5, r, Fi, (e, t) => {
			var n = Cs(), r = R(n), i = R(r), a = R(i), o = (e) => {
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
			}), E(i);
			var d = z(i, 2), f = R(d);
			E(d), E(r);
			var p = z(r, 2), m = R(p, !0);
			E(p);
			var h = z(p, 2), g = R(h, !0);
			E(h);
			var _ = z(h, 2), v = R(_), y = R(v), b = R(y, !0);
			E(y);
			var x = z(y, 2), S = R(x);
			E(x), E(v), E(_), E(n), V((e, n) => {
				Q(f, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(m, (U(t), W(() => U(t).name))), Q(g, (U(t), W(() => U(t).description || "No description provided."))), Q(b, e), Q(S, `Created ${n ?? ""}`);
			}, [() => (G(s()), U(t), W(() => s()(U(t).price))), () => (U(t), W(() => new Date(U(t).createdAt).toLocaleDateString()))]), Z(e, n);
		}), E(t), Z(e, t);
	};
	ji(y, (e) => {
		G(r()), W(() => r().length === 0) ? e(b) : e(x, -1);
	}), V(() => {
		da(f, (G(n()), W(() => n().name))), da(p, (G(n()), W(() => n().description))), da(m, (G(n()), W(() => n().price))), da(h, (G(n()), W(() => n().stock))), Q(v, (G(r()), W(() => r().length)));
	}), Y("input", f, (e) => o()("name", e)), Y("input", p, (e) => o()("description", e)), Y("input", m, (e) => o()("price", e)), Y("input", h, (e) => o()("stock", e)), Y("submit", d, Na(function(...e) {
		a()?.apply(this, e);
	})), Z(e, c), nt();
}
var Ss, Cs, ws, Ts, Es = e((() => {
	Xa(), Za(), Wa(), Ss = /* @__PURE__ */ X("<div class=\"state-card\">No listings yet.</div>"), Cs = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), ws = /* @__PURE__ */ X("<div class=\"product-grid inventory-grid\"></div>"), Ts = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function Ds(e, t) {
	tt(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Fa();
	var o = mi(), s = On(o), c = (e) => {
		Z(e, Os());
	}, l = (e) => {
		var t = As();
		Ri(t, 5, n, Fi, (e, t) => {
			var n = ks(), o = R(n), s = R(o), c = R(s, !0);
			E(s);
			var l = z(s, 2), u = R(l);
			E(l), E(o);
			var d = z(o, 2), f = R(d, !0);
			E(d);
			var p = z(d, 2), m = R(p, !0);
			E(p);
			var h = z(p, 2), g = R(h), _ = R(g), v = R(_, !0);
			E(_);
			var y = z(_, 2);
			E(g);
			var b = z(g, 2), x = R(b), S = z(x, 2);
			E(b), E(h), E(n), V((e) => {
				Q(c, (U(t), W(() => U(t).seller.username))), Q(u, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(f, (U(t), W(() => U(t).name))), Q(m, (U(t), W(() => U(t).description || "No description provided."))), Q(v, e), fa(y, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(a()), U(t), W(() => a()(U(t).price)))]), Y("click", x, () => r()(U(t).id)), Y("click", S, () => i()(U(t).id)), Z(e, n);
		}), E(t), Z(e, t);
	};
	ji(s, (e) => {
		G(n()), W(() => n().length === 0) ? e(c) : e(l, -1);
	}), Z(e, o), nt();
}
var Os, ks, As, js = e((() => {
	Xa(), Za(), Wa(), Os = /* @__PURE__ */ X("<div class=\"state-card\">No listed products are available right now.</div>"), ks = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), As = /* @__PURE__ */ X("<div class=\"product-grid\"></div>");
}));
//#endregion
//#region frontend/src/App.svelte
function Ms(e, t) {
	tt(t, !1);
	let n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I("buyer"), i = /* @__PURE__ */ I("storefront"), a = /* @__PURE__ */ I([]), o = /* @__PURE__ */ I(null), s = /* @__PURE__ */ I([]), c = /* @__PURE__ */ I({
		items: [],
		subtotal: 0,
		tax: 0,
		total: 0
	}), l = /* @__PURE__ */ I(null), u = /* @__PURE__ */ I([]), d = /* @__PURE__ */ I({
		name: "",
		description: "",
		price: "",
		stock: ""
	}), f = /* @__PURE__ */ I(), p = /* @__PURE__ */ I([]), m = /* @__PURE__ */ I([]), h = /* @__PURE__ */ I([]), g = /* @__PURE__ */ I([]), _ = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), v = /* @__PURE__ */ I(""), y = /* @__PURE__ */ I(!0), b = /* @__PURE__ */ I(""), x = /* @__PURE__ */ I("");
	async function S(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function ee(e, t) {
		return {
			...e,
			...t
		};
	}
	function te(e) {
		L(p, U(p).filter((t) => t.id !== e.id)), L(h, U(h).map((t) => t.id === e.id ? ee(t, e) : t));
	}
	function ne(e) {
		L(m, U(m).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function re(e = !1) {
		L(y, !0), L(b, ""), e && L(x, "");
		try {
			L(a, await S("/api/buyer/products"));
		} catch (e) {
			L(b, e.message || "Could not load products.");
		} finally {
			L(y, !1);
		}
	}
	async function ie() {
		L(y, !0), L(b, ""), L(x, "");
		try {
			L(o, await S(`/api/buyer/products/${$a()}`));
		} catch (e) {
			L(b, e.message || "Could not load product.");
		} finally {
			L(y, !1);
		}
	}
	async function ae() {
		L(y, !0), L(b, ""), L(x, "");
		try {
			L(c, await S("/api/buyer/cart"));
		} catch (e) {
			L(b, e.message || "Could not load cart.");
		} finally {
			L(y, !1);
		}
	}
	async function oe() {
		L(y, !0), L(b, ""), L(x, "");
		try {
			L(s, (await S("/api/buyer/compare")).items || []);
		} catch (e) {
			L(b, e.message || "Could not load comparison list.");
		} finally {
			L(y, !1);
		}
	}
	async function se() {
		L(y, !0), L(b, "");
		try {
			L(u, await S("/api/seller/products"));
		} catch (e) {
			L(b, e.message || "Could not load seller inventory.");
		} finally {
			L(y, !1);
		}
	}
	async function ce() {
		L(y, !0), L(b, "");
		try {
			L(g, await S("/api/admin/audit-logs"));
		} catch (e) {
			L(b, e.message || "Could not load audit logs.");
		} finally {
			L(y, !1);
		}
	}
	async function le(e = 1, t = U(v)) {
		L(y, !0), L(b, "");
		try {
			let [n, r, i] = await Promise.all([
				S("/api/admin/pending-users"),
				S("/api/admin/products"),
				S(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			L(p, n), L(m, r), L(h, i.users), L(_, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), L(v, i.search || "");
		} catch (e) {
			L(b, e.message || "Could not load moderation data.");
		} finally {
			L(y, !1);
		}
	}
	async function ue() {
		L(y, !0), L(b, ""), L(x, "");
		try {
			L(l, await S(`/api/buyer/orders/${eo()}`)), L(x, "Your order has been placed successfully.");
		} catch (e) {
			L(b, e.message || "Could not load order confirmation.");
		} finally {
			L(y, !1);
		}
	}
	async function de() {
		if (L(r, to()), L(i, no()), U(i) === "admin-home" || U(i) === "seller-home") {
			L(y, !1), L(b, "");
			return;
		}
		if (U(i) === "admin-moderation") {
			await le();
			return;
		}
		if (U(i) === "admin-audit") {
			await ce();
			return;
		}
		if (U(i) === "seller-inventory") {
			await se();
			return;
		}
		if (U(i) === "cart" || U(i) === "checkout") {
			await ae();
			return;
		}
		if (U(i) === "compare") {
			await oe();
			return;
		}
		if (U(i) === "confirmation") {
			await ue();
			return;
		}
		if (U(i) === "product") {
			await ie();
			return;
		}
		await re();
	}
	async function fe(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Nr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function pe(e, t) {
		L(d, {
			...U(d),
			[e]: t.currentTarget.value
		});
	}
	function me(e) {
		L(v, e.currentTarget.value);
	}
	async function he() {
		L(x, "");
		let e = String(U(d).price).trim(), t = String(U(d).stock).trim(), n = Number(e), r = Number(t);
		if (U(f)?.reportValidity()) {
			if (e === "" || !Number.isFinite(n)) {
				L(x, "Enter a valid number for price.");
				return;
			}
			if (t === "" || !Number.isInteger(r)) {
				L(x, "Enter a whole number for stock.");
				return;
			}
			try {
				await S("/api/seller/products", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: U(d).name,
						description: U(d).description,
						price: n,
						stock: r
					})
				}), L(d, {
					name: "",
					description: "",
					price: "",
					stock: ""
				}), L(x, "Listing submitted for admin approval."), await se();
			} catch (e) {
				L(x, e.message || "Could not create listing.");
			}
		}
	}
	async function ge(e) {
		L(x, "");
		try {
			let t = await S(`/api/admin/approve-user/${e}`, { method: "POST" });
			L(x, "User approved."), te(t);
		} catch (e) {
			L(x, e.message || "Could not approve user.");
		}
	}
	async function _e(e) {
		L(x, "");
		try {
			let t = await S(`/api/admin/block-user/${e}`, { method: "POST" });
			L(x, "User blocked."), te(t);
		} catch (e) {
			L(x, e.message || "Could not block user.");
		}
	}
	async function C(e) {
		L(x, "");
		try {
			let t = await S(`/api/admin/ban-user/${e}`, { method: "POST" });
			L(x, "User banned."), te(t);
		} catch (e) {
			L(x, e.message || "Could not ban user.");
		}
	}
	async function ve(e) {
		L(x, "");
		try {
			let t = await S(`/api/admin/products/${e}/approve`, { method: "POST" });
			L(x, "Product approved."), ne(t);
		} catch (e) {
			L(x, e.message || "Could not approve product.");
		}
	}
	async function ye(e) {
		L(x, "");
		try {
			let t = await S(`/api/admin/products/${e}/reject`, { method: "POST" });
			L(x, "Product rejected."), ne(t);
		} catch (e) {
			L(x, e.message || "Could not reject product.");
		}
	}
	async function be(e) {
		L(x, "");
		try {
			let t = await S(`/api/admin/products/${e}/delist`, { method: "POST" });
			L(x, "Product delisted."), ne(t);
		} catch (e) {
			L(x, e.message || "Could not delist product.");
		}
	}
	async function xe() {
		await fe(() => le(1, U(v)));
	}
	async function Se() {
		L(v, ""), await fe(() => le(1, ""));
	}
	async function Ce(e) {
		e < 1 || e > U(_).totalPages || await fe(() => le(e, U(_).search));
	}
	async function we(e) {
		L(x, "");
		try {
			await S("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(x, "Item added to cart.");
		} catch (e) {
			L(x, e.message || "Could not add item to cart.");
		}
	}
	async function Te(e) {
		L(x, "");
		try {
			await S("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(x, "Item added to comparison list.");
		} catch (e) {
			L(x, e.message || "Could not add item to list.");
		}
	}
	async function Ee(e) {
		L(x, "");
		try {
			await S(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(x, "Item removed from cart."), await ae();
		} catch (e) {
			L(x, e.message || "Could not remove item.");
		}
	}
	async function De(e) {
		L(x, "");
		try {
			await S(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(x, "Item removed from comparison list."), await oe();
		} catch (e) {
			L(x, e.message || "Could not remove item.");
		}
	}
	async function Oe() {
		L(x, "");
		try {
			let e = await S("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ paymentMethod: "demo_card" })
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			L(x, e.message || "Checkout failed."), await ae();
		}
	}
	async function ke() {
		L(x, "");
		try {
			await S("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(x, e.message || "Could not log out.");
		}
	}
	Ka(async () => {
		await de();
	}), er(() => U(i), () => {
		L(n, ro(U(i)));
	}), tr(), Fa();
	var Ae = Is();
	ta("13zv0lp", (e) => {
		ir((e) => {
			Pn.title = e ?? "";
		}, [() => (G(io), U(i), W(() => io(U(i))))]);
	});
	var w = R(Ae);
	vo(w, {
		get appMode() {
			return U(r);
		},
		get currentPage() {
			return U(i);
		},
		onLogout: ke
	});
	var je = z(w, 2), T = R(je);
	So(T, {
		get kicker() {
			return U(n), W(() => U(n).kicker);
		},
		get heading() {
			return U(n), W(() => U(n).heading);
		},
		onRefresh: de
	});
	var Me = z(T, 2), Ne = (e) => {
		Z(e, Ns());
	}, Pe = (e) => {
		var t = Ps(), n = R(t, !0);
		E(t), V(() => Q(n, U(b))), Z(e, t);
	}, Fe = (e) => {
		Ao(e, {});
	}, Ie = (e) => {
		No(e, {
			get adminPendingUsers() {
				return U(p);
			},
			get adminProducts() {
				return U(m);
			},
			get adminUsers() {
				return U(h);
			},
			get adminUsersPageInfo() {
				return U(_);
			},
			get adminUserSearch() {
				return U(v);
			},
			onAdminUserSearchInput: me,
			approveUser: ge,
			blockUser: _e,
			banUser: C,
			approveProduct: ve,
			rejectProduct: ye,
			delistProduct: be,
			searchAdminUsers: xe,
			clearAdminUserSearch: Se,
			goToAdminUsersPage: Ce,
			get capitalizeRole() {
				return fo;
			},
			get formatCurrency() {
				return so;
			},
			get formatDate() {
				return co;
			},
			get getUserStatus() {
				return po;
			}
		});
	}, Le = (e) => {
		To(e, {
			get adminAuditLogs() {
				return U(g);
			},
			get formatActionType() {
				return mo;
			},
			get formatDate() {
				return co;
			}
		});
	}, Re = (e) => {
		vs(e, {});
	}, ze = (e) => {
		xs(e, {
			get sellerForm() {
				return U(d);
			},
			get sellerProducts() {
				return U(u);
			},
			createSellerListing: he,
			onSellerFormInput: pe,
			get formatCurrency() {
				return so;
			},
			get sellerListingForm() {
				return U(f);
			},
			set sellerListingForm(e) {
				L(f, e);
			},
			$$legacy: !0
		});
	}, Be = (e) => {
		hs(e, {
			get product() {
				return U(o);
			},
			addToCart: we,
			addToComparison: Te,
			get formatCurrency() {
				return so;
			}
		});
	}, Ve = (e) => {
		Jo(e, {
			get cart() {
				return U(c);
			},
			removeFromCart: Ee,
			get formatCurrency() {
				return so;
			}
		});
	}, He = (e) => {
		es(e, {
			get cart() {
				return U(c);
			},
			placeOrder: Oe,
			get formatCurrency() {
				return so;
			}
		});
	}, D = (e) => {
		ds(e, {
			get order() {
				return U(l);
			},
			get formatCurrency() {
				return so;
			},
			get formatDate() {
				return co;
			},
			get formatPaymentMethod() {
				return lo;
			}
		});
	}, O = (e) => {
		os(e, {
			get compareItems() {
				return U(s);
			},
			addToCart: we,
			removeFromCompare: De,
			get formatCurrency() {
				return so;
			},
			get truncate() {
				return uo;
			}
		});
	}, k = (e) => {
		Ds(e, {
			get products() {
				return U(a);
			},
			addToCart: we,
			addToComparison: Te,
			get formatCurrency() {
				return so;
			}
		});
	};
	ji(Me, (e) => {
		U(y) ? e(Ne) : U(b) ? e(Pe, 1) : U(i) === "admin-home" ? e(Fe, 2) : U(i) === "admin-moderation" ? e(Ie, 3) : U(i) === "admin-audit" ? e(Le, 4) : U(i) === "seller-home" ? e(Re, 5) : U(i) === "seller-inventory" ? e(ze, 6) : U(i) === "product" && U(o) ? e(Be, 7) : U(i) === "cart" ? e(Ve, 8) : U(i) === "checkout" ? e(He, 9) : U(i) === "confirmation" && U(l) ? e(D, 10) : U(i) === "compare" ? e(O, 11) : e(k, -1);
	});
	var Ue = z(Me, 2), We = (e) => {
		var t = Fs(), n = R(t, !0);
		E(t), V(() => Q(n, U(x))), Z(e, t);
	};
	ji(Ue, (e) => {
		U(x) && e(We);
	}), E(je), E(Ae), V(() => fa(Ae, "data-page", U(i))), Z(e, Ae), nt();
}
var Ns, Ps, Fs, Is, Ls = e((() => {
	Xa(), Za(), Wa(), Ja(), xo(), wo(), ko(), Mo(), qo(), $o(), as(), us(), ms(), _s(), bs(), Es(), js(), _o(), Ns = /* @__PURE__ */ X("<div class=\"state-card\">Loading...</div>"), Ps = /* @__PURE__ */ X("<div class=\"state-card error\"> </div>"), Fs = /* @__PURE__ */ X("<p class=\"status-banner\"> </p>"), Is = /* @__PURE__ */ X("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section></div>");
})), Rs = e((() => {})), zs = /* @__PURE__ */ t((() => {
	Ja(), Ls(), Rs(), gi(Ms, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default zs();
