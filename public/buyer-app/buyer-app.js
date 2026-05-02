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
})), b, x, S, C, ee, te, ne, w, re, ie, ae, oe, se, ce, le, ue, de, fe, T, E, D, O = e((() => {
	b = 1024, x = 2048, S = 4096, C = 8192, ee = 16384, te = 32768, ne = 1 << 25, w = 65536, re = 1 << 18, ie = 1 << 19, ae = 1 << 20, oe = 1 << 25, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, de = Symbol("$state"), fe = Symbol("legacy props"), T = Symbol(""), E = new class extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}(), D = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
}));
function pe(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
var k = e((() => {
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
	r(), k();
})), Ee, De, Oe, ke = e((() => {
	Ee = {}, De = Symbol(), Oe = "http://www.w3.org/1999/xhtml";
}));
function Ae(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function je() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
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
	j = e;
}
function Fe(e) {
	if (e === null) throw Ae(), Ee;
	return M = e;
}
function Ie() {
	return Fe(/* @__PURE__ */ jn(M));
}
function A(e) {
	if (j) {
		if (/* @__PURE__ */ jn(M) !== null) throw Ae(), Ee;
		M = e;
	}
}
function Le(e = 1) {
	if (j) {
		for (var t = e, n = M; t--;) n = /* @__PURE__ */ jn(n);
		M = n;
	}
}
function Re(e = !0) {
	for (var t = 0, n = M;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ jn(n);
		e && n.remove(), n = i;
	}
}
function ze(e) {
	if (!e || e.nodeType !== 8) throw Ae(), Ee;
	return e.data;
}
var j, M, N = e((() => {
	O(), ke(), Ne(), Hn(), j = !1;
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
	Je(), O(), V(), q();
})), Xe = e((() => {
	r(), y(), k();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
function Ze(e) {
	P = e;
}
function Qe(e, t = !1, n) {
	P = {
		p: P,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: Ke && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function $e(e) {
	var t = P, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) tr(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, P = t.p, e ?? {};
}
function et() {
	return !Ke || P !== null && P.l === null;
}
var P, tt = e((() => {
	r(), Te(), q(), V(), qe(), O(), P = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function nt() {
	var e = at;
	at = [], a(e);
}
function rt(e) {
	if (at.length === 0 && !Ft) {
		var t = at;
		queueMicrotask(() => {
			t === at && nt();
		});
	}
	at.push(e);
}
function it() {
	for (; at.length > 0;) nt();
}
var at, ot = e((() => {
	y(), Ut(), at = [];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/error-handling.js
function st(e) {
	var t = K;
	if (t === null) return G.f |= ue, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	ct(e, t);
}
function ct(e, t) {
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
var lt = e((() => {
	r(), ke(), Hn(), O(), y(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function ut(e, t) {
	e.f = e.f & ft | t;
}
function dt(e) {
	e.f & 512 || e.deps === null ? ut(e, b) : ut(e, S);
}
var ft, pt = e((() => {
	O(), ft = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function mt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= se, mt(t.deps));
}
function ht(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), mt(e.deps), ut(e, b);
}
var gt = e((() => {
	O(), pt();
})), _t = e((() => {
	q(), y();
})), vt = e((() => {
	y(), _t();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
function yt(e) {
	var t = xt;
	try {
		return xt = !1, [e(), xt];
	} finally {
		xt = t;
	}
}
var bt, xt, St = e((() => {
	_t(), vt(), y(), q(), V(), Sn(), bt = !1, xt = !1;
})), Ct = e((() => {
	O(), Je(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
function wt(e) {
	var t = Ft;
	Ft = !0;
	try {
		var n;
		for (e && (F !== null && !F.is_fork && F.flush(), n = e());;) {
			if (it(), F === null) return n;
			F.flush();
		}
	} finally {
		Ft = t;
	}
}
function Tt() {
	try {
		ye();
	} catch (e) {
		ct(e, Pt);
	}
}
function Et(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Mr(r) && (Ht = /* @__PURE__ */ new Set(), Lr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && _r(r), Ht?.size > 0)) {
				bn.clear();
				for (let e of Ht) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Ht.has(n) && (Ht.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Lr(n);
					}
				}
				Ht.clear();
			}
		}
		Ht = null;
	}
}
function Dt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Dt(i, t, n, r) : e & 4194320 && !(e & 2048) && Ot(i, t, r) && (ut(i, x), kt(i));
	}
}
function Ot(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && Ot(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function kt(e) {
	F.schedule(e);
}
function At(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), ut(e, b);
		for (var n = e.first; n !== null;) At(n, t), n = n.next;
	}
}
function jt(e) {
	ut(e, b);
	for (var t = e.first; t !== null;) jt(t), t = t.next;
}
var Mt, F, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut = e((() => {
	O(), qe(), y(), q(), Te(), ot(), r(), lt(), Sn(), V(), gt(), ke(), pt(), St(), Xe(), Ct(), Mt = /* @__PURE__ */ new Set(), F = null, Nt = null, Pt = null, Ft = !1, It = !1, Lt = null, Rt = null, zt = 0, Bt = 1, Vt = class e {
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
				for (var n of t.d) ut(n, x), this.schedule(n);
				for (n of t.m) ut(n, S), this.schedule(n);
			}
		}
		#m() {
			if (zt++ > 1e3 && (Mt.delete(this), Tt()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), ut(e, x), this.schedule(e);
				for (let e of this.#c) ut(e, S), this.schedule(e);
			}
			let t = this.#a;
			this.#a = [], this.apply();
			var n = Lt = [], r = [], i = Rt = [];
			for (let e of t) try {
				this.#h(e, n, r);
			} catch (t) {
				throw jt(e), t;
			}
			if (F = null, i.length > 0) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (Lt = null, Rt = null, this.#f() || this.#p()) {
				this.#g(r), this.#g(n);
				for (let [e, t] of this.#l) At(e, t);
			} else {
				this.#n.size === 0 && Mt.delete(this), this.#s.clear(), this.#c.clear();
				for (let e of this.#e) e(this);
				this.#e.clear(), Et(r), Et(n), this.#i?.resolve();
			}
			var o = F;
			if (this.#a.length > 0) {
				let e = o ??= this;
				e.#a.push(...this.#a.filter((t) => !e.#a.includes(t)));
			}
			o !== null && (Mt.add(o), o.#m()), Mt.has(this) || this.#_();
		}
		#h(e, t, n) {
			e.f ^= b;
			for (var r = e.first; r !== null;) {
				var i = r.f, a = (i & 96) != 0;
				if (!(a && i & 1024 || i & 8192 || this.#l.has(r)) && r.fn !== null) {
					a ? r.f ^= b : i & 4 ? t.push(r) : Ge && i & 16777224 ? n.push(r) : Mr(r) && (i & 16 && this.#c.add(r), Lr(r));
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
			for (var t = 0; t < e.length; t += 1) ht(e[t], this.#s, this.#c);
		}
		capture(e, t, n = !1) {
			t !== De && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), Nt?.set(e, e.v));
		}
		activate() {
			F = this;
		}
		deactivate() {
			F = null, Nt = null;
		}
		flush() {
			try {
				It = !0, F = this, this.#m();
			} finally {
				zt = 0, Pt = null, Lt = null, Rt = null, It = !1, F = null, Nt = null, bn.clear();
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear(), Mt.delete(this);
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		#_() {
			for (let l of Mt) {
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
					for (var o of t) Dt(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
					for (let e of this.#o) !(e.f & 155648) && Ot(e, s, a) && (e.f & 4194320 ? (ut(e, x), l.schedule(e)) : l.#s.add(e));
					if (l.#a.length > 0) {
						l.apply();
						for (var c of l.#a) l.#h(c, [], []);
						l.#a = [];
					}
					l.deactivate();
				}
			}
			for (let e of Mt) e.#d.has(this) && (e.#d.delete(this), e.#d.size === 0 && !e.#f() && (e.activate(), e.#m()));
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
			this.#u || n || (this.#u = !0, rt(() => {
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
				It || (Mt.add(F), Ft || rt(() => {
					F === t && t.flush();
				}));
			}
			return F;
		}
		apply() {
			if (!Ge || !this.is_fork && Mt.size === 1) {
				Nt = null;
				return;
			}
			Nt = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) Nt.set(e, t);
			for (let n of Mt) if (!(n === this || n.is_fork)) {
				var e = !1, t = !1;
				if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
				if (e && t) this.#d.add(n);
				else for (let [e, t] of n.previous) Nt.has(e) || Nt.set(e, t);
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
				if (Lt !== null && t === K && (Ge || (G === null || !(G.f & 2)) && !bt)) return;
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
function Wt(e) {
	let t = 0, n = pn(0), r;
	return () => {
		Qn() && (H(n), cr(() => (t === 0 && (r = U(() => e(() => _n(n)))), t += 1, () => {
			rt(() => {
				--t, t === 0 && (r?.(), r = void 0, _n(n));
			});
		})));
	};
}
var Gt = e((() => {
	q(), V(), Sn(), Ye(), r(), ot();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Kt(e, t, n, r) {
	new Jt(e, t, n, r);
}
var qt, Jt, Yt = e((() => {
	O(), ke(), tt(), lt(), V(), q(), N(), ot(), Te(), Ne(), r(), Ut(), Sn(), Ye(), Gt(), Hn(), gt(), pt(), qt = w | ie, Jt = class {
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
		#h = Wt(() => (this.#m = pn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = K;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = ur(() => {
				if (j) {
					let e = this.#t;
					Ie();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, qt), j && (this.#e = M);
		}
		#g() {
			try {
				this.#a = dr(() => this.#r(this.#e));
			} catch (e) {
				this.error(e);
			}
		}
		#_(e) {
			let t = this.#n.failed;
			t && (this.#s = dr(() => {
				t(this.#e, () => e, () => () => {});
			}));
		}
		#v() {
			let e = this.#n.pending;
			e && (this.is_pending = !0, this.#o = dr(() => e(this.#e)), rt(() => {
				var e = this.#c = document.createDocumentFragment(), t = kn();
				e.append(t), this.#a = this.#x(() => dr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, vr(this.#o, () => {
					this.#o = null;
				}), this.#b(F));
			}));
		}
		#y() {
			try {
				if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = dr(() => {
					this.#r(this.#e);
				}), this.#u > 0) {
					var e = this.#c = document.createDocumentFragment();
					Sr(this.#a, e);
					let t = this.#n.pending;
					this.#o = dr(() => t(this.#e));
				} else this.#b(F);
			} catch (e) {
				this.error(e);
			}
		}
		#b(e) {
			this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
		}
		defer_effect(e) {
			ht(e, this.#f, this.#p);
		}
		is_rendered() {
			return !this.is_pending && (!this.parent || this.parent.is_rendered());
		}
		has_pending_snippet() {
			return !!this.#n.pending;
		}
		#x(e) {
			var t = K, n = G, r = P;
			Dr(this.#i), Er(this.#i), Ze(this.#i.ctx);
			try {
				return Vt.ensure(), e();
			} catch (e) {
				return st(e), null;
			} finally {
				Dr(t), Er(n), Ze(r);
			}
		}
		#S(e, t) {
			if (!this.has_pending_snippet()) {
				this.parent && this.parent.#S(e, t);
				return;
			}
			this.#u += e, this.#u === 0 && (this.#b(t), this.#o && vr(this.#o, () => {
				this.#o = null;
			}), this.#c &&= (this.#e.before(this.#c), null));
		}
		update_pending_count(e, t) {
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, rt(() => {
				this.#d = !1, this.#m && hn(this.#m, this.#l);
			}));
		}
		get_effect_pending() {
			return this.#h(), H(this.#m);
		}
		error(e) {
			var t = this.#n.onerror;
			let n = this.#n.failed;
			if (!t && !n) throw e;
			this.#a &&= (hr(this.#a), null), this.#o &&= (hr(this.#o), null), this.#s &&= (hr(this.#s), null), j && (Fe(this.#t), Le(), Fe(Re()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Me();
					return;
				}
				r = !0, i && we(), this.#s !== null && vr(this.#s, () => {
					this.#s = null;
				}), this.#x(() => {
					this.#y();
				});
			}, o = (e) => {
				try {
					i = !0, t?.(e, a), i = !1;
				} catch (e) {
					ct(e, this.#i && this.#i.parent);
				}
				n && (this.#s = this.#x(() => {
					try {
						return dr(() => {
							var t = K;
							t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
						});
					} catch (e) {
						return ct(e, this.#i.parent), null;
					}
				}));
			};
			rt(() => {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					ct(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => ct(e, this.#i && this.#i.parent)) : o(t);
			});
		}
	};
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Xt(e, t, n, r) {
	let i = et() ? tn : an;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = K, s = Zt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || ct(e, o);
		}
		Qt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = $t();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ nn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => ct(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), Qt();
	}) : d();
}
function Zt() {
	var e = K, t = G, n = P, r = F;
	return function(i = !0) {
		Dr(e), Er(t), Ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Qt(e = !0) {
	Dr(null), Er(null), Ze(null), e && F?.deactivate();
}
function $t() {
	var e = K, t = e.b, n = F, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var en = e((() => {
	O(), r(), tt(), Yt(), lt(), q(), Ut(), fn(), V();
}));
/* @__NO_SIDE_EFFECTS__ */
function tn(e) {
	var t = 2 | x, n = G !== null && G.f & 2 ? G : null;
	return K !== null && (K.f |= ie), {
		ctx: P,
		deps: null,
		effects: null,
		equals: Be,
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
function nn(e, t, n) {
	let r = K;
	r === null && me();
	var i = void 0, a = pn(De), s = !G, c = /* @__PURE__ */ new Map();
	return sr(() => {
		var t = K, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(Qt);
		} catch (e) {
			n.reject(e), Qt();
		}
		var l = F;
		if (s) {
			if (t.f & 32768) var u = $t();
			if (r.b.is_rendered()) c.get(l)?.reject(E), c.delete(l);
			else {
				for (let e of c.values()) e.reject(E);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === E), !(n === E || t.f & 16384)) {
				if (l.activate(), n) a.f |= ue, hn(a, n);
				else {
					a.f & 8388608 && (a.f ^= ue), hn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(E);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), $n(() => {
		for (let e of c.values()) e.reject(E);
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
function rn(e) {
	let t = /* @__PURE__ */ tn(e);
	return Ge || Or(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function an(e) {
	let t = /* @__PURE__ */ tn(e);
	return t.equals = He, t;
}
function on(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) hr(t[n]);
	}
}
function sn(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function cn(e) {
	var t, n = K;
	Dr(sn(e));
	try {
		e.f &= ~se, on(e), t = Pr(e);
	} finally {
		Dr(n);
	}
	return t;
}
function ln(e) {
	var t = e.v, n = cn(e);
	if (!e.equals(n) && (e.wv = jr(), (!F?.is_fork || e.deps === null) && (e.v = n, F?.capture(e, t, !0), e.deps === null))) {
		ut(e, b);
		return;
	}
	Ur || (Nt === null ? dt(e) : (Qn() || F?.is_fork) && Nt.set(e, n));
}
function un(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(E), t.teardown = v, t.ac = null, Ir(t, 0), pr(t));
}
function dn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Lr(t);
}
var fn = e((() => {
	r(), O(), q(), Ue(), Te(), Ne(), V(), Sn(), Xe(), qe(), tt(), ke(), Ut(), en(), y(), pt();
}));
function pn(e, t) {
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
function mn(e, t) {
	let n = pn(e, t);
	return Or(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t = !1, n = !0) {
	let r = pn(e);
	return t || (r.equals = He), Ke && n && P !== null && P.l !== null && (P.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return G !== null && (!Wr || G.f & 131072) && et() && G.f & 4325394 && (Gr === null || !l.call(Gr, e)) && Ce(), hn(e, n ? Cn(t) : t, Rt);
}
function hn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Ur ? bn.set(e, t) : bn.set(e, r), e.v = t;
		var i = Vt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && cn(t), Nt === null && dt(t);
		}
		e.wv = jr(), vn(e, x, n), et() && K !== null && K.f & 1024 && !(K.f & 96) && (Jr === null ? kr([e]) : Jr.push(e)), !i.is_fork && yn.size > 0 && !xn && gn();
	}
	return t;
}
function gn() {
	xn = !1;
	for (let e of yn) e.f & 1024 && ut(e, S), Mr(e) && Lr(e);
	yn.clear();
}
function _n(e) {
	L(e, e.v + 1);
}
function vn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = et(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & x) === 0;
			if (l && ut(s, t), c & 2) {
				var u = s;
				Nt?.delete(u), c & 65536 || (c & 512 && (s.f |= se), vn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Ht !== null && Ht.add(d), n === null ? kt(d) : n.push(d);
			}
		}
	}
}
var yn, bn, xn, Sn = e((() => {
	r(), q(), Ue(), O(), Te(), qe(), y(), Ye(), Xe(), tt(), Ut(), En(), fn(), pt(), yn = /* @__PURE__ */ new Set(), bn = /* @__PURE__ */ new Map(), xn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function Cn(e) {
	if (typeof e != "object" || !e || de in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ mn(0), a = null, o = Zr, c = (e) => {
		if (Zr === o) return e();
		var t = G, n = Zr;
		Er(null), Ar(o);
		var r = e();
		return Er(t), Ar(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ mn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && xe();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ mn(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ mn(De, a));
					n.set(t, e), _n(i);
				}
			} else L(r, De), _n(i);
			return !0;
		},
		get(t, r, i) {
			if (r === de) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ mn(Cn(s ? t[r] : De), a)), n.set(r, o)), o !== void 0) {
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
			if (t === de) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== De || Reflect.has(e, t);
			return (r !== void 0 || K !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ mn(i ? Cn(e[t]) : De, a)), n.set(t, r)), H(r) === De) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ mn(De, a)), n.set(d + "", p)) : L(p, De);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ mn(void 0, a)), L(l, Cn(o)), n.set(t, l));
			else {
				u = l.v !== De;
				var m = c(() => Cn(o));
				L(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				_n(i);
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
function wn(e) {
	try {
		if (typeof e == "object" && e && de in e) return e[de];
	} catch {}
	return e;
}
function Tn(e, t) {
	return Object.is(wn(e), wn(t));
}
var En = e((() => {
	r(), q(), y(), Sn(), O(), ke(), Te(), Ye(), Xe(), qe(), new Set([
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
})), Dn = e((() => {
	Ne(), En();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/operations.js
function On() {
	if (Ln === void 0) {
		Ln = window, Rn = document, zn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Bn = f(t, "firstChild").get, Vn = f(t, "nextSibling").get, _(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _(n) && (n.__t = void 0);
	}
}
function kn(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function An(e) {
	return Bn.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function jn(e) {
	return Vn.call(e);
}
function R(e, t) {
	if (!j) return /* @__PURE__ */ An(e);
	var n = /* @__PURE__ */ An(M);
	if (n === null) n = M.appendChild(kn());
	else if (t && n.nodeType !== 3) {
		var r = kn();
		return n?.before(r), Fe(r), r;
	}
	return t && In(n), Fe(n), n;
}
function Mn(e, t = !1) {
	if (!j) {
		var n = /* @__PURE__ */ An(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ jn(n) : n;
	}
	if (t) {
		if (M?.nodeType !== 3) {
			var r = kn();
			return M?.before(r), Fe(r), r;
		}
		In(M);
	}
	return M;
}
function z(e, t = 1, n = !1) {
	let r = j ? M : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ jn(r);
	if (!j) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = kn();
			return r === null ? i?.after(a) : r.before(a), Fe(a), a;
		}
		In(r);
	}
	return Fe(r), r;
}
function Nn(e) {
	e.textContent = "";
}
function Pn() {
	return !Ge || Ht !== null ? !1 : (K.f & te) !== 0;
}
function Fn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function In(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var Ln, Rn, zn, Bn, Vn, Hn = e((() => {
	N(), r(), Dn(), y(), q(), qe(), O(), Ut(), ke();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Un(e) {
	j && /* @__PURE__ */ An(e) !== null && Nn(e);
}
function Wn() {
	Gn || (Gn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Gn, Kn = e((() => {
	N(), Hn(), ot(), Gn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function qn(e) {
	var t = G, n = K;
	Er(null), Dr(null);
	try {
		return e();
	} finally {
		Er(t), Dr(n);
	}
}
var Jn = e((() => {
	V(), q(), Kn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Yn(e) {
	K === null && (G === null && ve(e), _e()), Ur && ge(e);
}
function Xn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Zn(e, t) {
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
	if (e & 4) Lt === null ? Vt.ensure().schedule(r) : Lt.push(r);
	else if (t !== null) {
		try {
			Lr(r);
		} catch (e) {
			throw hr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= w));
	}
	if (i !== null && (i.parent = n, n !== null && Xn(i, n), G !== null && G.f & 2 && !(e & 64))) {
		var a = G;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Qn() {
	return G !== null && !Wr;
}
function $n(e) {
	let t = Zn(8, null);
	return ut(t, b), t.teardown = e, t;
}
function er(e) {
	Yn("$effect");
	var t = K.f;
	if (!G && t & 32 && !(t & 32768)) {
		var n = P;
		(n.e ??= []).push(e);
	} else return tr(e);
}
function tr(e) {
	return Zn(4 | ae, e);
}
function nr(e) {
	return Yn("$effect.pre"), Zn(8 | ae, e);
}
function rr(e) {
	Vt.ensure();
	let t = Zn(64 | ie, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? vr(t, () => {
			hr(t), n(void 0);
		}) : (hr(t), n(void 0));
	});
}
function ir(e) {
	return Zn(4, e);
}
function ar(e, t) {
	var n = P, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = cr(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = K;
			try {
				Dr(n.parent), U(t);
			} finally {
				Dr(n);
			}
		}
	});
}
function or() {
	var e = P;
	cr(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && ut(n, S), Mr(n) && Lr(n), t.ran = !1;
		}
	});
}
function sr(e) {
	return Zn(le | ie, e);
}
function cr(e, t = 0) {
	return Zn(8 | t, e);
}
function B(e, t = [], n = [], r = []) {
	Xt(r, t, n, (t) => {
		Zn(8, () => e(...t.map(H)));
	});
}
function lr(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = $t();
	Xt(r, t, n, (t) => {
		Zn(4, () => e(...t.map(H))), i && i();
	});
}
function ur(e, t = 0) {
	return Zn(16 | t, e);
}
function dr(e) {
	return Zn(32 | ie, e);
}
function fr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Ur, n = G;
		Tr(!0), Er(null);
		try {
			t.call(null);
		} finally {
			Tr(e), Er(n);
		}
	}
}
function pr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && qn(() => {
			e.abort(E);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : hr(n, t), n = r;
	}
}
function mr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || hr(t), t = n;
	}
}
function hr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (gr(e.nodes.start, e.nodes.end), n = !0), ut(e, ne), pr(e, t && !n), Ir(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	fr(e), e.f ^= ne, e.f |= ee;
	var i = e.parent;
	i !== null && i.first !== null && _r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function gr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ jn(e);
		e.remove(), e = n;
	}
}
function _r(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function vr(e, t, n = !0) {
	var r = [];
	yr(e, r, !0);
	var i = () => {
		n && hr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function yr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= C;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			yr(i, t, o ? n : !1), i = a;
		}
	}
}
function br(e) {
	xr(e, !0);
}
function xr(e, t) {
	if (e.f & 8192) {
		e.f ^= C, e.f & 1024 || (ut(e, x), Vt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			xr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Sr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ jn(n);
		t.append(n), n = i;
	}
}
var V = e((() => {
	q(), O(), Te(), r(), y(), Hn(), tt(), Ut(), en(), Jn(), pt();
})), Cr, wr = e((() => {
	Sn(), q(), Cr = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
function Tr(e) {
	Ur = e;
}
function Er(e) {
	G = e;
}
function Dr(e) {
	K = e;
}
function Or(e) {
	G !== null && (!Ge || G.f & 2) && (Gr === null ? Gr = [e] : Gr.push(e));
}
function kr(e) {
	Jr = e;
}
function Ar(e) {
	Zr = e;
}
function jr() {
	return ++Yr;
}
function Mr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~se), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Mr(a) && ln(a), a.wv > e.wv) return !0;
		}
		t & 512 && Nt === null && ut(e, b);
	}
	return !1;
}
function Nr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ge && Gr !== null && l.call(Gr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Nr(a, t, !1) : t === a && (n ? ut(a, x) : a.f & 1024 && ut(a, S), kt(a));
	}
}
function Pr(e) {
	var t = Kr, n = qr, r = Jr, i = G, a = Gr, o = P, s = Wr, c = Zr, l = e.f;
	Kr = null, qr = 0, Jr = null, G = l & 96 ? null : e, Gr = null, Ze(e.ctx), Wr = !1, Zr = ++Xr, e.ac !== null && (qn(() => {
		e.ac.abort(E);
	}), e.ac = null);
	try {
		e.f |= ce;
		var u = e.fn, d = u();
		e.f |= te;
		var f = e.deps, p = F?.is_fork;
		if (Kr !== null) {
			var m;
			if (p || Ir(e, qr), f !== null && qr > 0) for (f.length = qr + Kr.length, m = 0; m < Kr.length; m++) f[qr + m] = Kr[m];
			else e.deps = f = Kr;
			if (Qn() && e.f & 512) for (m = qr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && qr < f.length && (Ir(e, qr), f.length = qr);
		if (et() && Jr !== null && !Wr && f !== null && !(e.f & 6146)) for (m = 0; m < Jr.length; m++) Nr(Jr[m], e);
		if (i !== null && i !== e) {
			if (Xr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Xr;
			if (t !== null) for (let e of t) e.rv = Xr;
			Jr !== null && (r === null ? r = Jr : r.push(...Jr));
		}
		return e.f & 8388608 && (e.f ^= ue), d;
	} catch (e) {
		return st(e);
	} finally {
		e.f ^= ce, Kr = t, qr = n, Jr = r, G = i, Gr = a, Ze(o), Wr = s, Zr = c;
	}
}
function Fr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = c.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (Kr === null || !l.call(Kr, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~se), dt(a), un(a), Ir(a, 0);
	}
}
function Ir(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Fr(e, n[r]);
}
function Lr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		ut(e, b);
		var n = K, r = Hr;
		K = e, Hr = !0;
		try {
			t & 16777232 ? mr(e) : pr(e), fr(e);
			var i = Pr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Yr;
		} finally {
			Hr = r, K = n;
		}
	}
}
async function Rr() {
	if (Ge) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), wt();
}
function H(e) {
	var t = (e.f & 2) != 0;
	if (Cr?.add(e), G !== null && !Wr && !(K !== null && K.f & 16384) && (Gr === null || !l.call(Gr, e))) {
		var n = G.deps;
		if (G.f & 2097152) e.rv < Xr && (e.rv = Xr, Kr === null && n !== null && n[qr] === e ? qr++ : Kr === null ? Kr = [e] : Kr.push(e));
		else {
			(G.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [G] : l.call(r, G) || r.push(G);
		}
	}
	if (Ur && bn.has(e)) return bn.get(e);
	if (t) {
		var i = e;
		if (Ur) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Br(i)) && (a = cn(i)), bn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Wr && G !== null && (Hr || (G.f & 512) != 0), s = (i.f & te) === 0;
		Mr(i) && (o && (i.f |= 512), ln(i)), o && !s && (dn(i), zr(i));
	}
	if (Nt?.has(e)) return Nt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function zr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (dn(t), zr(t));
}
function Br(e) {
	if (e.v === De) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (bn.has(t) || t.f & 2 && Br(t)) return !0;
	return !1;
}
function U(e) {
	var t = Wr;
	try {
		return Wr = !0, e();
	} finally {
		Wr = t;
	}
}
function W(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (de in e) Vr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && de in n && Vr(n);
		}
	}
}
function Vr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Vr(e[n], t);
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
var Hr, Ur, G, Wr, K, Gr, Kr, qr, Jr, Yr, Xr, Zr, q = e((() => {
	r(), y(), V(), O(), Sn(), fn(), qe(), Ye(), Xe(), tt(), Ut(), lt(), ke(), wr(), Jn(), pt(), Ne(), Hr = !1, Ur = !1, G = null, Wr = !1, K = null, Gr = null, Kr = null, qr = 0, Jr = null, Yr = 1, Xr = 0, Zr = Xr;
})), Qr = e((() => {
	to(), oo(), V();
}));
//#endregion
//#region node_modules/svelte/src/utils.js
function $r(e) {
	return ti.includes(e);
}
var ei, ti, ni, ri = e((() => {
	ei = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), [...ei], ti = ["touchstart", "touchmove"], ni = [
		"$state",
		"$state.raw",
		"$derived",
		"$derived.by"
	], [...ni];
})), ii = e((() => {
	O(), ri(), q();
})), ai = e((() => {
	O(), N(), tt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function oi(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || si.call(t, e), !e.cancelBubble) return qn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function J(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = oi(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && $n(() => {
		t.removeEventListener(e, o, a);
	});
}
function si(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	di = e;
	var o = 0, s = di === e && e[ci];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[ci] = t;
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
		Er(null), Dr(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[ci]?.[r];
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
			e[ci] = t, delete e.currentTarget, Er(u), Dr(f);
		}
	}
}
var ci, li, ui, di, fi = e((() => {
	V(), y(), N(), ot(), q(), Jn(), ci = Symbol("events"), li = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set(), di = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function pi(e) {
	return hi?.createHTML(e) ?? e;
}
function mi(e) {
	var t = Fn("template");
	return t.innerHTML = pi(e.replaceAll("<!>", "<!---->")), t.content;
}
var hi, gi = e((() => {
	Hn(), hi = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function _i(e, t) {
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
		if (j) return _i(M, null), M;
		i === void 0 && (i = mi(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ An(i)));
		var t = r || zn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ An(t), s = t.lastChild;
			_i(o, s);
		} else _i(t, t);
		return t;
	};
}
function vi(e = "") {
	if (!j) {
		var t = kn(e + "");
		return _i(t, t), t;
	}
	var n = M;
	return n.nodeType === 3 ? In(n) : (n.before(n = kn()), Fe(n)), _i(n, n), n;
}
function yi() {
	if (j) return _i(M, null), M;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = kn();
	return e.append(t, n), _i(t, n), e;
}
function X(e, t) {
	if (j) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = M), Ie();
		return;
	}
	e !== null && e.before(t);
}
var bi = e((() => {
	N(), Hn(), gi(), q(), ke(), O();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
function Z(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function xi(e, t) {
	return Si(e, t);
}
function Si(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	On();
	var c = void 0, l = rr(() => {
		var l = n ?? t.appendChild(kn());
		Kt(l, { pending: () => {} }, (t) => {
			Qe({});
			var n = P;
			if (a && (n.c = a), i && (r.$$events = i), j && _i(t, null), Ci = o, c = e(t, r) || {}, Ci = !0, j && (K.nodes.end = M, M === null || M.nodeType !== 8 || M.data !== "]")) throw Ae(), Ee;
			$e();
		}, s);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = $r(r);
					for (let e of [t, document]) {
						var a = wi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), wi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, si, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(u(li)), ui.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = wi.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, si), r.delete(e), r.size === 0 && wi.delete(n)) : r.set(e, i);
			}
			ui.delete(f), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return Ti.set(c, l), c;
}
var Ci, wi, Ti, Ei = e((() => {
	r(), Hn(), ke(), q(), tt(), V(), N(), y(), fi(), Ne(), Te(), bi(), ri(), O(), Yt(), wi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new WeakMap();
})), Di = e((() => {
	O(), N(), V(), Sn(), Ei(), q();
})), Oi = e((() => {
	y(), O(), tt(), ri();
})), ki = e((() => {
	Te(), tt();
})), Ai = e((() => {
	Je(), V(), q(), Xe();
})), ji = e((() => {
	en(), q(), N();
})), Mi = e((() => {
	Te();
})), Ni, Pi = e((() => {
	Ut(), V(), N(), Hn(), Ni = class {
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
				if (n) br(n), this.#r.delete(t);
				else {
					var r = this.#n.get(t);
					r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
				}
				for (let [t, n] of this.#e) {
					if (this.#e.delete(t), t === e) break;
					let r = this.#n.get(n);
					r && (hr(r.effect), this.#n.delete(n));
				}
				for (let [e, r] of this.#t) {
					if (e === t || this.#r.has(e)) continue;
					let i = () => {
						if (Array.from(this.#e.values()).includes(e)) {
							var t = document.createDocumentFragment();
							Sr(r, t), t.append(kn()), this.#n.set(e, {
								effect: r,
								fragment: t
							});
						} else hr(r);
						this.#r.delete(e), this.#t.delete(e);
					};
					this.#i || !n ? (this.#r.add(e), vr(r, i, !1)) : i();
				}
			}
		};
		#o = (e) => {
			this.#e.delete(e);
			let t = Array.from(this.#e.values());
			for (let [e, n] of this.#n) t.includes(e) || (hr(n.effect), this.#n.delete(e));
		};
		ensure(e, t) {
			var n = F, r = Pn();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = kn();
				i.append(a), this.#n.set(e, {
					effect: dr(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, dr(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else j && (this.anchor = M), this.#a(n);
		}
	};
})), Fi = e((() => {
	y(), V(), Sn(), N(), ot(), tt(), Ut(), Pi(), en();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Q(e, t, n = !1) {
	var r;
	j && (r = M, Ie());
	var i = new Ni(e), a = n ? w : 0;
	function o(e, t) {
		if (j) {
			var n = ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Re();
				Fe(a), i.anchor = a, Pe(!1), i.ensure(e, t), Pe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	ur(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Ii = e((() => {
	O(), N(), V(), Pi();
})), Li = e((() => {
	tt(), V(), N(), Pi();
})), Ri = e((() => {
	V(), N(), Hn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function zi(e, t) {
	return t;
}
function Bi(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		vr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Vi(e, u(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, d = l.parentNode;
			Nn(d), d.append(l), e.items.clear();
		}
		Vi(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Vi(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= oe, Sr(a, document.createDocumentFragment())) : hr(t[i], n);
	}
}
function Hi(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = j ? Fe(/* @__PURE__ */ An(l)) : l.appendChild(kn());
	}
	j && Ie();
	var d = null, f = /* @__PURE__ */ an(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Wi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= oe, Ki(d, null, o)) : br(d) : vr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: ur(() => {
			p = H(f);
			var e = p.length;
			let s = !1;
			j && ze(o) === "[!" != (e === 0) && (o = Re(), Fe(o), Pe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = F, v = Pn(), y = 0; y < e; y += 1) {
				j && M.nodeType === 8 && M.data === "]" && (o = M, s = !0, Pe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && hn(S.v, b), S.i && hn(S.i, y), v && u.unskip_effect(S.e)) : (S = Gi(c, h ? o : Ji ??= kn(), b, x, y, i, t, n), h || (S.e.f |= oe), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = dr(() => a(o)) : (d = dr(() => a(Ji ??= kn())), d.f |= oe)), e > l.size && he("", "", ""), j && e > 0 && Fe(Re()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			s && Pe(!0), H(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, j && (o = M);
}
function Ui(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Wi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Ui(e.effect.first), l, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (br(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= oe, _ === c) Ki(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), qi(e, d, _), qi(e, _, y), Ki(_, y, n), d = _, p = [], m = [], c = Ui(d.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Ki(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					qi(e, S.prev, C.next), qi(e, d, S), qi(e, C, b), c = b, d = C, --v, p = [], m = [];
				} else l.delete(_), Ki(_, c, n), qi(e, _.prev, _.next), qi(e, _, d === null ? e.effect.first : d.next), qi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Ui(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = Ui(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Vi(e, u(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var ee = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || ee.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = Ui(c.next);
		var te = ee.length;
		if (te > 0) {
			var ne = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < te; v += 1) ee[v].nodes?.a?.measure();
				for (v = 0; v < te; v += 1) ee[v].nodes?.a?.fix();
			}
			Bi(e, ee, ne);
		}
	}
	a && rt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Gi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? pn(n) : /* @__PURE__ */ I(n, !1, !1) : null, l = o & 2 ? pn(i) : null;
	return {
		v: c,
		i: l,
		e: dr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ki(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ jn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function qi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var Ji, Yi = e((() => {
	ke(), N(), Hn(), V(), Sn(), y(), O(), ot(), q(), r(), fn(), Ut(), Te();
})), Xi = e((() => {
	V(), N(), bi(), ri(), tt(), Hn(), q(), O();
})), Zi = e((() => {
	N();
})), Qi = e((() => {
	ri();
})), $i = e((() => {
	O(), V(), tt(), N(), gi(), bi(), Te(), Hn(), Qi(), Pi();
})), ea = e((() => {
	O(), V(), N(), Pi();
})), ta = e((() => {
	y();
})), na = e((() => {
	ta();
})), ra = e((() => {
	y(), V(), q(), na(), Ei(), O(), ot(), Jn();
})), ia = e((() => {
	N(), Hn(), V(), Ei(), q(), tt(), O(), bi(), ri(), Pi(), ra();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function aa(e, t) {
	let n = null, r = j;
	var i;
	if (j) {
		n = M;
		for (var a = /* @__PURE__ */ An(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ jn(a);
		if (a === null) Pe(!1);
		else {
			var o = /* @__PURE__ */ jn(a);
			a.remove(), Fe(o);
		}
	}
	j || (i = document.head.appendChild(kn()));
	try {
		ur(() => t(i), re | ie);
	} finally {
		r && (Pe(!0), Fe(n));
	}
}
var oa = e((() => {
	N(), Hn(), V(), O();
})), sa = e((() => {
	V(), Hn();
})), ca = e((() => {
	V(), q();
})), la = e((() => {
	V();
}));
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function ua(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || da.includes(r[o - 1])) && (s === r.length || da.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
var da, fa = e((() => {
	y(), da = [..." 	\n\r\f\xA0\v﻿"];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function pa(e, t, n, r, i, a) {
	var o = e.__className;
	if (j || o !== n || o === void 0) {
		var s = ua(n, r, a);
		(!j || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
var ma = e((() => {
	fa(), N();
})), ha = e((() => {
	fa(), N();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function ga(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!s(t)) return je();
		for (var r of e.options) r.selected = t.includes(va(r));
		return;
	}
	for (r of e.options) if (Tn(va(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function _a(e) {
	var t = new MutationObserver(() => {
		ga(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), $n(() => {
		t.disconnect();
	});
}
function va(e) {
	return "__value" in e ? e.__value : e.value;
}
var ya = e((() => {
	V(), Jn(), En(), y(), Ne(), Ut();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function ba(e) {
	if (j) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Ca(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Ca(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, rt(n), Wn();
	}
}
function xa(e, t) {
	var n = wa(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== ka) || (e.value = t ?? "");
}
function Sa(e, t) {
	var n = wa(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Ca(e, t, n, r) {
	var i = wa(e);
	j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Oa) || i[t] !== (i[t] = n) && (t === "loading" && (e[T] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ta(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function wa(e) {
	return e.__attributes ??= {
		[Ea]: e.nodeName.includes("-"),
		[Da]: e.namespaceURI === Oe
	};
}
function Ta(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Aa.get(t);
	if (n) return n;
	Aa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && n.push(o);
		i = g(i);
	}
	return n;
}
var Ea, Da, Oa, ka, Aa, ja = e((() => {
	r(), N(), y(), fi(), Kn(), Ne(), O(), ot(), ri(), q(), la(), fa(), ma(), ha(), ke(), V(), ya(), en(), Ea = Symbol("is custom element"), Da = Symbol("is html"), Oa = D ? "link" : "LINK", ka = D ? "progress" : "PROGRESS", Aa = /* @__PURE__ */ new Map();
})), Ma = e((() => {
	N(), Hn(), gi(), la();
})), Na = e((() => {
	Jn();
})), Pa = e((() => {
	V(), Jn(), Te(), En(), ot(), N(), q(), tt(), Ut();
})), Fa = e((() => {
	V(), Jn();
})), Ia = e((() => {
	Jn();
})), La = e((() => {
	V(), y();
})), Ra = e((() => {
	V(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function za(e, t) {
	return e === t || e?.[de] === t;
}
function Ba(e = {}, t, n, r) {
	var i = P.r, a = K;
	return ir(() => {
		var o, s;
		return cr(() => {
			o = s, s = r?.() || [], U(() => {
				e !== n(...s) && (t(e, ...s), o && za(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && za(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
var Va = e((() => {
	O(), tt(), V(), q();
})), Ha = e((() => {
	V(), Jn();
})), Ua = e((() => {
	V(), Jn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function Wa(e) {
	return function(...t) {
		return t[0].preventDefault(), e?.apply(this, t);
	};
}
var Ga = e((() => {
	y(), V(), fi();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Ka(e = !1) {
	let t = P, n = t.l.u;
	if (!n) return;
	let r = () => W(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ tn(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => H(i);
	}
	n.b.length && nr(() => {
		qa(t, r), a(n.b);
	}), er(() => {
		let e = U(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && er(() => {
		qa(t, r), a(n.a);
	});
}
function qa(e, t) {
	if (e.l.s) for (let t of e.l.s) H(t);
	t();
}
var Ja = e((() => {
	y(), tt(), fn(), V(), q();
})), Ya = e((() => {
	Sn(), q(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !Ke || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? U(r) : r), s);
	let u;
	if (a) {
		var d = de in e || fe in e;
		u = f(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = yt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = l(), u && (i && be(t), u(p)));
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
	var _ = !1, v = (n & 1 ? tn : an)(() => (_ = !1, h()));
	a && H(v);
	var y = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? H(v) : i && a ? Cn(e) : e;
			return L(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return Ur && _ || y.f & 16384 ? v.v : H(v);
	});
}
var Xa = e((() => {
	r(), ke(), y(), Sn(), fn(), q(), Te(), O(), En(), St(), qe(), V();
})), Za = e((() => {
	tt(), V(), St(), en();
})), Qa = e((() => {
	O(), V(), Sn(), Ei(), q(), Ut(), y(), Te(), tt(), qe(), pt(), Ga();
})), $a = e((() => {
	Qa(), V(), bi(), y(), Hn();
})), eo = e((() => {
	O(), Je(), q();
})), to = e((() => {
	Qr(), tt(), ii(), ai(), Di(), Oi(), ki(), Ye(), Ai(), ji(), Mi(), Fi(), Ii(), Li(), Ri(), Yi(), Xi(), Zi(), $i(), ea(), ia(), oa(), sa(), ca(), la(), ja(), ma(), fi(), Kn(), Ma(), ha(), ra(), Na(), Pa(), Fa(), Ia(), La(), ya(), Ra(), Va(), Ha(), Ua(), N(), Ga(), Ja(), Ya(), bi(), en(), Ut(), fn(), V(), Sn(), Xa(), St(), Yt(), wr(), Ei(), q(), Za(), ta(), En(), $a(), Hn(), fa(), Je(), y(), Qi(), Dn(), eo(), lt();
})), no = e((() => {
	N(), Te();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function ro(e) {
	P === null && pe("onMount"), Ke && P.l !== null ? ao(P).m.push(e) : er(() => {
		let t = U(e);
		if (typeof t == "function") return t;
	});
}
function io(e) {
	P === null && pe("onDestroy"), ro(() => () => U(e));
}
function ao(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var oo = e((() => {
	q(), y(), to(), Te(), qe(), tt(), r(), Ut(), no(), Ei(), $i();
})), so = e((() => {})), co = e((() => {
	so(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), lo = e((() => {
	qe(), We();
}));
//#endregion
//#region frontend/src/lib/app-shell.js
function uo() {
	return typeof window > "u" ? "/buyer/home" : window.location.pathname;
}
function fo() {
	let e = uo().match(/\/buyer\/products\/(\d+)/);
	return e ? Number(e[1]) : null;
}
function po() {
	let e = uo().match(/\/buyer\/orders\/(\d+)\/confirmation/);
	return e ? Number(e[1]) : null;
}
function mo(e = uo()) {
	return e.startsWith("/admin") ? "admin" : e.startsWith("/seller") ? "seller" : "buyer";
}
function ho(e = uo()) {
	return e === "/admin" ? "admin-home" : e === "/admin/sub" ? "admin-moderation" : e === "/admin/audit" ? "admin-audit" : e === "/seller/home" ? "seller-home" : e === "/seller/inventory" ? "seller-inventory" : e === "/seller/sales" ? "seller-sales" : e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : e === "/buyer/orders" ? "orders" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
}
function go(e) {
	return Do[e] || Do.storefront;
}
function _o(e) {
	return go(e).title;
}
function vo(e) {
	return e === "admin-moderation" ? "/admin/classic/sub" : e === "admin-audit" ? "/admin/classic/audit" : "/admin/classic";
}
function yo(e, t) {
	return e === "admin" ? vo(t) : e === "seller" ? "/seller/classic/home" : "/buyer/classic/home";
}
function bo(e) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(e);
}
function xo(e) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(new Date(e));
}
function So(e) {
	return e === "demo_card" ? "Demo Credit Card" : e;
}
function Co(e, t) {
	return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
}
function wo(e) {
	return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
}
function To(e) {
	return e.banned ? "Banned" : e.blocked ? "Blocked" : e.approved ? "Approved" : "Pending";
}
function Eo(e) {
	return e ? e.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "";
}
var Do, Oo, ko = e((() => {
	Do = {
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
	}, Oo = {
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
function Ao(e, t) {
	Qe(t, !1);
	let n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I(), i = $(t, "appMode", 8), a = $(t, "currentPage", 8), o = $(t, "onLogout", 8), s = {
		admin: "Admin Workspace",
		seller: "Seller Workspace",
		buyer: "Buyer Workspace"
	};
	ar(() => W(i()), () => {
		L(n, Oo[i()] || Oo.buyer);
	}), ar(() => (W(i()), W(a())), () => {
		L(r, yo(i(), a()));
	}), or(), Ka();
	var c = Mo(), l = R(c), u = R(l), d = R(u, !0);
	A(u), Le(2), A(l);
	var f = z(l, 2), p = R(f);
	Hi(p, 1, () => H(n), zi, (e, t) => {
		var n = jo(), r = R(n, !0);
		A(n), B(() => {
			Ca(n, "href", (H(t), U(() => H(t).href))), Z(r, (H(t), U(() => H(t).label)));
		}), X(e, n);
	});
	var m = z(p, 2), h = z(m, 2);
	A(f), A(c), B(() => {
		Z(d, (W(i()), U(() => s[i()] || s.buyer))), Ca(m, "href", H(r));
	}), J("click", h, function(...e) {
		o()?.apply(this, e);
	}), X(e, c), $e();
}
var jo, Mo, No = e((() => {
	co(), lo(), to(), ko(), jo = /* @__PURE__ */ Y("<a class=\"action-link\"> </a>"), Mo = /* @__PURE__ */ Y("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function Po(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = Fo(), o = R(a), s = R(o), c = R(s, !0);
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
var Fo, Io = e((() => {
	co(), lo(), to(), Fo = /* @__PURE__ */ Y("<div class=\"catalog-header\"><div><p class=\"section-kicker\"> </p> <h2> </h2></div> <button class=\"refresh-button\">Refresh</button></div>");
}));
//#endregion
//#region frontend/src/components/AdminAuditView.svelte
function Lo(e, t) {
	Qe(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Ka();
	var a = yi(), o = Mn(a), s = (e) => {
		X(e, Ro());
	}, c = (e) => {
		var t = Bo(), a = z(R(t), 2);
		Hi(a, 5, n, zi, (e, t) => {
			var n = zo(), a = R(n), o = R(a, !0);
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
	}), X(e, a), $e();
}
var Ro, zo, Bo, Vo = e((() => {
	co(), lo(), to(), Ro = /* @__PURE__ */ Y("<div class=\"state-card\">No audit log entries yet.</div>"), zo = /* @__PURE__ */ Y("<article class=\"admin-audit-row\"><p class=\"seller admin-audit-when\"> </p> <p class=\"admin-audit-user\"> </p> <p class=\"admin-audit-action\"> </p> <p class=\"admin-audit-details\"> </p></article>"), Bo = /* @__PURE__ */ Y("<div class=\"panel admin-box\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent actions</p> <h3>Recorded system activity</h3></div></div> <div class=\"admin-audit-list\"></div></div>");
}));
//#endregion
//#region frontend/src/components/AdminHomeView.svelte
function Ho(e) {
	X(e, Uo());
}
var Uo, Wo = e((() => {
	co(), lo(), to(), Uo = /* @__PURE__ */ Y("<div class=\"admin-columns admin-columns--two\"><article class=\"admin-region admin-region--products\"><p class=\"section-kicker\">Moderation</p> <h3>User and listing review</h3> <p class=\"detail-description\">Review pending registrations, approve or reject seller listings, and handle active account status changes.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/sub\">User management</a></div></article> <article class=\"admin-region\"><p class=\"section-kicker\">Audit</p> <h3>Recent platform activity</h3> <p class=\"detail-description\">Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/audit\">Open audit log</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/AdminModerationView.svelte
function Go(e, t) {
	Qe(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Ka();
	var x = is(), S = R(x), C = R(S), ee = z(R(C), 2), te = R(ee, !0);
	A(ee), A(C);
	var ne = z(C, 2), w = (e) => {
		X(e, Ko());
	}, re = (e) => {
		var t = Jo(), r = R(t), i = z(R(r));
		Hi(i, 5, n, zi, (e, t) => {
			var n = qo(), r = R(n), i = R(r, !0);
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
	Q(ne, (e) => {
		W(n()), U(() => n().length === 0) ? e(w) : e(re, -1);
	}), A(S);
	var ie = z(S, 2), ae = R(ie), oe = z(R(ae), 2), se = R(oe, !0);
	A(oe), A(ae);
	var ce = z(ae, 2), le = (e) => {
		X(e, Yo());
	}, ue = (e) => {
		var t = es(), n = R(t), i = z(R(n));
		Hi(i, 5, r, zi, (e, t) => {
			var n = $o(), r = R(n), i = R(r, !0);
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
				X(e, vi("Pending approval"));
			}, b = (e) => {
				X(e, vi("Rejected"));
			}, x = (e) => {
				X(e, vi("Listed"));
			}, S = (e) => {
				X(e, vi("Delisted"));
			};
			Q(_, (e) => {
				H(t), U(() => H(t).listingStatus === "pending") ? e(y) : (H(t), U(() => H(t).listingStatus === "rejected") ? e(b, 1) : (H(t), U(() => H(t).isListed) ? e(x, 2) : e(S, -1)));
			}), A(g);
			var C = z(g), ee = R(C), te = (e) => {
				var n = Xo(), r = R(n), i = z(r, 2);
				A(n), J("click", r, () => d()(H(t).id)), J("click", i, () => f()(H(t).id)), X(e, n);
			}, ne = (e) => {
				var n = Zo();
				J("click", n, () => p()(H(t).id)), X(e, n);
			}, w = (e) => {
				X(e, Qo());
			};
			Q(ee, (e) => {
				H(t), U(() => H(t).listingStatus === "pending") ? e(te) : (H(t), U(() => H(t).isListed) ? e(ne, 1) : e(w, -1));
			}), A(C), A(n), B((e) => {
				Z(i, (H(t), U(() => H(t).name))), Z(o, (H(t), U(() => H(t).seller?.username || "Unknown seller"))), Z(c, (H(t), U(() => H(t).description || "No description provided."))), Z(u, e), Z(h, (H(t), U(() => H(t).stock)));
			}, [() => (W(v()), H(t), U(() => v()(H(t).price)))]), X(e, n);
		}), A(i), A(n), A(t), X(e, t);
	};
	Q(ce, (e) => {
		W(r()), U(() => r().length === 0) ? e(le) : e(ue, -1);
	}), A(ie);
	var de = z(ie, 2), fe = R(de), T = z(R(fe), 2), E = R(T);
	A(T), A(fe);
	var D = z(fe, 2), O = R(D);
	ba(O);
	var pe = z(O, 4);
	A(D);
	var k = z(D, 2), me = (e) => {
		X(e, ts());
	}, he = (e) => {
		var t = rs(), n = R(t), r = z(R(n));
		Hi(r, 5, i, zi, (e, t) => {
			var n = ns(), r = R(n), i = R(r, !0);
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
	Q(k, (e) => {
		W(i()), U(() => i().length === 0) ? e(me) : e(he, -1);
	});
	var ge = z(k, 2), _e = R(ge), ve = z(_e, 2), ye = R(ve);
	A(ve);
	var be = z(ve, 2);
	A(ge), A(de), A(x), B(() => {
		Z(te, (W(n()), U(() => n().length))), Z(se, (W(r()), U(() => r().length))), Z(E, `${(W(a()), U(() => a().totalPages)) ?? ""} page${(W(a()), U(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), xa(O, o()), _e.disabled = (W(a()), U(() => !a().hasPreviousPage)), Z(ye, `Page ${(W(a()), U(() => a().page)) ?? ""} of ${(W(a()), U(() => a().totalPages)) ?? ""}`), be.disabled = (W(a()), U(() => !a().hasNextPage));
	}), J("input", O, function(...e) {
		s()?.apply(this, e);
	}), J("click", pe, function(...e) {
		h()?.apply(this, e);
	}), J("submit", D, Wa(function(...e) {
		m()?.apply(this, e);
	})), J("click", _e, () => g()(a().page - 1)), J("click", be, () => g()(a().page + 1)), X(e, x), $e();
}
var Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as = e((() => {
	co(), lo(), to(), Ko = /* @__PURE__ */ Y("<div class=\"state-card\">No pending users right now.</div>"), qo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), Jo = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Yo = /* @__PURE__ */ Y("<div class=\"state-card\">No seller listings are available for review.</div>"), Xo = /* @__PURE__ */ Y("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), Zo = /* @__PURE__ */ Y("<button class=\"admin-button admin-button-danger\">Delist</button>"), Qo = /* @__PURE__ */ Y("<span class=\"seller\">No further action</span>"), $o = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), es = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), ts = /* @__PURE__ */ Y("<div class=\"state-card\">No users matched that search.</div>"), ns = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), rs = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), is = /* @__PURE__ */ Y("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function os(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Ka();
	var a = us(), o = R(a), s = R(o), c = (e) => {
		X(e, ss());
	}, l = (e) => {
		var t = ls();
		Hi(t, 5, () => (W(n()), U(() => n().items)), zi, (e, t) => {
			var n = cs(), a = R(n), o = R(a), s = R(o, !0);
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
	A(_), Le(2), A(u), A(a), B((e, t, n, r) => {
		Z(f, e), Z(m, t), Z(g, n), Z(v, r);
	}, [
		() => (W(i()), W(n()), U(() => i()(n().subtotal))),
		() => (W(i()), W(n()), U(() => i()(n().serviceFee || 0))),
		() => (W(i()), W(n()), U(() => i()(n().tax))),
		() => (W(i()), W(n()), U(() => i()(n().total)))
	]), X(e, a), $e();
}
var ss, cs, ls, us, ds = e((() => {
	co(), lo(), to(), ss = /* @__PURE__ */ Y("<div class=\"state-card\">Your cart is empty.</div>"), cs = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), ls = /* @__PURE__ */ Y("<div class=\"list-grid\"></div>"), us = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function fs(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "placeOrder", 8), i = $(t, "formatCurrency", 8), a = $(t, "shippingAddress", 8), o = $(t, "onShippingInput", 8);
	Ka();
	var s = gs(), c = R(s), l = R(c), u = (e) => {
		X(e, ps());
	}, d = (e) => {
		var t = hs(), r = R(t), s = z(R(r), 2), c = z(R(s), 2);
		ba(c);
		var l = z(c, 4);
		ba(l);
		var u = z(l, 4);
		ba(u);
		var d = z(u, 4);
		ba(d);
		var f = z(d, 4);
		ba(f);
		var p = z(f, 4);
		ba(p), Le(2), A(s), A(r);
		var m = z(r, 2);
		Hi(m, 5, () => (W(n()), U(() => n().items)), zi, (e, t) => {
			var n = ms(), r = R(n), a = R(r), o = R(a, !0);
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
			xa(c, (W(a()), U(() => a().name))), xa(l, (W(a()), U(() => a().line1))), xa(u, (W(a()), U(() => a().line2))), xa(d, (W(a()), U(() => a().city))), xa(f, (W(a()), U(() => a().state))), xa(p, (W(a()), U(() => a().postalCode)));
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
	Le(2), A(x), A(f), A(s), B((e, t, r, i) => {
		Z(m, e), Z(g, t), Z(v, r), Z(b, i), S.disabled = (W(n()), U(() => n().items.length === 0));
	}, [
		() => (W(i()), W(n()), U(() => i()(n().subtotal))),
		() => (W(i()), W(n()), U(() => i()(n().serviceFee || 0))),
		() => (W(i()), W(n()), U(() => i()(n().tax))),
		() => (W(i()), W(n()), U(() => i()(n().total)))
	]), J("click", S, function(...e) {
		r()?.apply(this, e);
	}), X(e, s), $e();
}
var ps, ms, hs, gs, _s = e((() => {
	co(), lo(), to(), ps = /* @__PURE__ */ Y("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), ms = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), hs = /* @__PURE__ */ Y("<div class=\"checkout-stack\"><div class=\"shipping-panel\"><p class=\"section-kicker\">Shipping address</p> <div class=\"stack-form\"><label for=\"ship-name\">Full name</label> <input id=\"ship-name\" type=\"text\" required=\"\"/> <label for=\"ship-line1\">Address line 1</label> <input id=\"ship-line1\" type=\"text\" required=\"\"/> <label for=\"ship-line2\">Address line 2</label> <input id=\"ship-line2\" type=\"text\"/> <label for=\"ship-city\">City</label> <input id=\"ship-city\" type=\"text\" required=\"\"/> <label for=\"ship-state\">State / region</label> <input id=\"ship-state\" type=\"text\" required=\"\"/> <label for=\"ship-postal\">Postal code</label> <input id=\"ship-postal\" type=\"text\" required=\"\"/> <p class=\"field-hint\">Shipping currently supports United States addresses only.</p></div></div> <div class=\"list-grid\"></div></div>"), gs = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function vs(e, t) {
	Qe(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Ka();
	var s = yi(), c = Mn(s), l = (e) => {
		X(e, ys());
	}, u = (e) => {
		var t = xs();
		Hi(t, 5, n, zi, (e, t) => {
			var n = bs(), s = R(n), c = z(R(s), 2), l = R(c, !0);
			A(c), A(s);
			var u = z(s, 2), d = R(u, !0);
			A(u);
			var f = z(u, 2), p = R(f, !0);
			A(f);
			var m = z(f, 2), h = R(m), g = R(h);
			A(h);
			var _ = z(h, 2), v = R(_), y = z(v, 2);
			A(_), A(m), A(n), B((e, n) => {
				Z(l, e), Z(d, (H(t), U(() => H(t).name))), Z(p, n), Ca(g, "href", (H(t), U(() => `/buyer/products/${H(t).id}`)));
			}, [() => (W(a()), H(t), U(() => a()(H(t).price))), () => (W(o()), H(t), U(() => o()(H(t).description || "", 160)))]), J("click", v, () => r()(H(t).id)), J("click", y, () => i()(H(t).id)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(c, (e) => {
		W(n()), U(() => n().length === 0) ? e(l) : e(u, -1);
	}), X(e, s), $e();
}
var ys, bs, xs, Ss = e((() => {
	co(), lo(), to(), ys = /* @__PURE__ */ Y("<div class=\"state-card\">No products marked for comparison.</div>"), bs = /* @__PURE__ */ Y("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), xs = /* @__PURE__ */ Y("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function Cs(e, t) {
	Qe(t, !1);
	let n = $(t, "order", 8), r = $(t, "returnForms", 24, () => ({})), i = $(t, "onReturnFormInput", 8), a = $(t, "submitReturnRequest", 8), o = $(t, "formatCurrency", 8), s = $(t, "formatDate", 8), c = $(t, "formatPaymentMethod", 8), l = [
		{
			value: "wrong_item",
			label: "Wrong item"
		},
		{
			value: "damaged",
			label: "Damaged"
		},
		{
			value: "not_as_described",
			label: "Not as described"
		},
		{
			value: "changed_mind",
			label: "Changed mind"
		},
		{
			value: "other",
			label: "Other"
		}
	];
	Ka();
	var u = Ms(), d = R(u), f = R(d), p = R(f), m = (e) => {
		var t = Ts(), r = R(t), i = R(r), a = z(R(i), 2), o = R(a, !0);
		A(a);
		var c = z(a, 2), l = R(c);
		A(c), A(i);
		var u = z(i, 2), d = z(R(u), 2), f = R(d, !0);
		A(d), A(u), A(r);
		var p = z(r, 2);
		Hi(p, 5, () => (W(n()), U(() => n().tracking.events)), zi, (e, t) => {
			var r = ws();
			let i;
			var a = R(r), o = R(a, !0);
			A(a);
			var c = z(a, 2), l = R(c, !0);
			A(c);
			var u = z(c, 2), d = R(u, !0);
			A(u), A(r), B((e) => {
				i = pa(r, 1, "tracking-event", null, i, { active: H(t).status === n().tracking.status }), Z(o, e), Z(l, (H(t), U(() => H(t).label))), Z(d, (H(t), U(() => H(t).description)));
			}, [() => (W(s()), H(t), U(() => s()(H(t).occurredAt)))]), X(e, r);
		}), A(p), A(t), B((e) => {
			Z(o, (W(n()), U(() => n().tracking.statusLabel))), Z(l, `${(W(n()), U(() => n().tracking.shippingMethod)) ?? ""} - ${(W(n()), U(() => n().tracking.trackingNumber)) ?? ""}`), Z(f, e);
		}, [() => (W(s()), W(n()), U(() => s()(n().tracking.estimatedDeliveryAt)))]), X(e, t);
	};
	Q(p, (e) => {
		W(n()), U(() => n().tracking) && e(m);
	}), Hi(z(p, 2), 1, () => (W(n()), U(() => n().items)), zi, (e, t) => {
		var n = ks(), s = R(n), c = R(s), u = R(c);
		A(c);
		var d = z(c, 2), f = R(d, !0);
		A(d);
		var p = z(d, 2), m = R(p);
		A(p), A(s);
		var h = z(s, 2), g = R(h), _ = R(g, !0);
		A(g), A(h);
		var v = z(h, 2), y = R(v), b = (e) => {
			var n = Es(), r = R(n);
			A(n), B(() => Z(r, `Return request status: ${(H(t), U(() => H(t).returnRequests[0].status)) ?? ""}`)), X(e, n);
		}, x = (e) => {
			var n = Os(), o = R(n), s = z(o, 2), c = R(s);
			c.value = c.__value = "", Hi(z(c), 1, () => l, zi, (e, t) => {
				var n = Ds(), r = R(n, !0);
				A(n);
				var i = {};
				B(() => {
					Z(r, (H(t), U(() => H(t).label))), i !== (i = (H(t), U(() => H(t).value))) && (n.value = (n.__value = (H(t), U(() => H(t).value))) ?? "");
				}), X(e, n);
			}), A(s);
			var u;
			_a(s);
			var d = z(s, 2), f = z(d, 2);
			Un(f), Le(2), A(n), B(() => {
				Ca(o, "for", (H(t), U(() => `return-reason-${H(t).id}`))), Ca(s, "id", (H(t), U(() => `return-reason-${H(t).id}`))), u !== (u = (W(r()), H(t), U(() => r()[H(t).id]?.reason || ""))) && (s.value = (s.__value = (W(r()), H(t), U(() => r()[H(t).id]?.reason || ""))) ?? "", ga(s, (W(r()), H(t), U(() => r()[H(t).id]?.reason || "")))), Ca(d, "for", (H(t), U(() => `return-details-${H(t).id}`))), Ca(f, "id", (H(t), U(() => `return-details-${H(t).id}`))), xa(f, (W(r()), H(t), U(() => r()[H(t).id]?.details || "")));
			}), J("change", s, (e) => i()(H(t).id, "reason", e)), J("input", f, (e) => i()(H(t).id, "details", e)), J("submit", n, Wa(() => a()(H(t).id))), X(e, n);
		};
		Q(y, (e) => {
			H(t), U(() => H(t).returnRequests && H(t).returnRequests.length > 0) ? e(b) : e(x, -1);
		}), A(v), A(n), B((e, n) => {
			Z(u, `Seller ID ${(H(t), U(() => H(t).sellerId)) ?? ""}`), Z(f, (H(t), U(() => H(t).productName))), Z(m, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(_, n);
		}, [() => (W(o()), H(t), U(() => o()(H(t).unitPrice))), () => (W(o()), H(t), U(() => o()(H(t).lineTotal)))]), X(e, n);
	}), A(f), A(d);
	var h = z(d, 2), g = z(R(h), 2), _ = R(g);
	A(g);
	var v = z(g, 4), y = R(v, !0);
	A(v);
	var b = z(v, 2), x = (e) => {
		var t = As(), r = z(Mn(t), 2), i = R(r, !0);
		A(r);
		var a = z(r, 4), o = R(a, !0);
		A(a), B(() => {
			Z(i, (W(n()), U(() => n().tracking.trackingNumber))), Z(o, (W(n()), U(() => n().tracking.shippingMethod)));
		}), X(e, t);
	};
	Q(b, (e) => {
		W(n()), U(() => n().tracking) && e(x);
	});
	var S = z(b, 4), C = R(S, !0);
	A(S);
	var ee = z(S, 4), te = R(ee, !0);
	A(ee);
	var ne = z(ee, 4), w = R(ne, !0);
	A(ne);
	var re = z(ne, 2), ie = R(re, !0);
	A(re);
	var ae = z(re, 2), oe = (e) => {
		var t = js(), r = R(t, !0);
		A(t), B(() => Z(r, (W(n()), U(() => n().shipToLine2)))), X(e, t);
	};
	Q(ae, (e) => {
		W(n()), U(() => n().shipToLine2) && e(oe);
	});
	var se = z(ae, 2), ce = R(se);
	A(se);
	var le = z(se, 2), ue = R(le, !0);
	A(le);
	var de = z(le, 4), fe = R(de, !0);
	A(de);
	var T = z(de, 4), E = R(T, !0);
	A(T);
	var D = z(T, 4), O = R(D, !0);
	A(D);
	var pe = z(D, 4), k = R(pe, !0);
	A(pe), Le(2), A(h), A(u), B((e, t, r, i, a, o) => {
		Z(_, `#${(W(n()), U(() => n().id)) ?? ""}`), Z(y, (W(n()), U(() => n().tracking?.statusLabel || n().status))), Z(C, e), Z(te, t), Z(w, (W(n()), U(() => n().shipToName))), Z(ie, (W(n()), U(() => n().shipToLine1))), Z(ce, `${(W(n()), U(() => n().shipToCity)) ?? ""}, ${(W(n()), U(() => n().shipToState)) ?? ""} ${(W(n()), U(() => n().shipToPostalCode)) ?? ""}`), Z(ue, (W(n()), U(() => n().shipToCountry))), Z(fe, r), Z(E, i), Z(O, a), Z(k, o);
	}, [
		() => (W(c()), W(n()), U(() => c()(n().paymentMethod))),
		() => (W(s()), W(n()), U(() => s()(n().createdAt))),
		() => (W(o()), W(n()), U(() => o()(n().subtotal))),
		() => (W(o()), W(n()), U(() => o()(n().serviceFeeAmount || 0))),
		() => (W(o()), W(n()), U(() => o()(n().taxAmount))),
		() => (W(o()), W(n()), U(() => o()(n().total)))
	]), X(e, u), $e();
}
var ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns = e((() => {
	co(), lo(), to(), ws = /* @__PURE__ */ Y("<article><p class=\"seller\"> </p> <h4> </h4> <p> </p></article>"), Ts = /* @__PURE__ */ Y("<article class=\"tracking-card\"><div class=\"tracking-header\"><div><p class=\"section-kicker\">Mock tracking</p> <h3> </h3> <p class=\"detail-description\"> </p></div> <div class=\"tracking-eta\"><p>Estimated delivery</p> <strong> </strong></div></div> <div class=\"tracking-timeline\"></div></article>"), Es = /* @__PURE__ */ Y("<p class=\"status-banner compact-status\"> </p>"), Ds = /* @__PURE__ */ Y("<option> </option>"), Os = /* @__PURE__ */ Y("<form class=\"stack-form return-form\"><label>Return reason</label> <select required=\"\"><option>Select a reason</option><!></select> <label>Details</label> <textarea rows=\"3\" maxlength=\"500\"></textarea> <button class=\"checkout-link place-order-button\" type=\"submit\">Submit return</button></form>"), ks = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div> <div class=\"return-panel\"><!></div></article>"), As = /* @__PURE__ */ Y("<p>Tracking number</p> <strong> </strong> <p>Shipping method</p> <strong> </strong>", 1), js = /* @__PURE__ */ Y("<strong> </strong>"), Ms = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"><!> <!></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <!> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Ship to</p> <strong> </strong> <strong> </strong> <!> <strong> </strong> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a> <a class=\"checkout-link secondary-link\" href=\"/buyer/orders\">View order history</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/OrderHistoryView.svelte
function Ps(e, t) {
	Qe(t, !1);
	let n = $(t, "orders", 24, () => []), r = $(t, "pageInfo", 8), i = $(t, "goToOrderHistoryPage", 8), a = $(t, "formatCurrency", 8), o = $(t, "formatDate", 8), s = $(t, "formatPaymentMethod", 8);
	Ka();
	var c = yi(), l = Mn(c), u = (e) => {
		X(e, Fs());
	}, d = (e) => {
		var t = Rs(), c = Mn(t);
		Hi(c, 5, n, zi, (e, t) => {
			var n = Ls(), r = R(n), i = R(r), c = R(i);
			A(i);
			var l = z(i, 2), u = R(l, !0);
			A(l);
			var d = z(l, 2), f = R(d);
			A(d);
			var p = z(d, 2), m = R(p);
			A(p);
			var h = z(p, 2), g = (e) => {
				var n = Is(), r = R(n);
				A(n), B((e) => Z(r, `${(H(t), U(() => H(t).tracking.shippingMethod)) ?? ""} - ETA ${e ?? ""}`), [() => (W(o()), H(t), U(() => o()(H(t).tracking.estimatedDeliveryAt)))]), X(e, n);
			};
			Q(h, (e) => {
				H(t), U(() => H(t).tracking) && e(g);
			}), A(r);
			var _ = z(r, 2), v = R(_), y = R(v, !0);
			A(v);
			var b = z(v, 2);
			A(_), A(n), B((e, n, r) => {
				Z(c, `Order #${(H(t), U(() => H(t).id)) ?? ""}`), Z(u, e), Z(f, `${n ?? ""} - ${r ?? ""} - ${(H(t), U(() => H(t).items.length)) ?? ""} item${(H(t), U(() => H(t).items.length === 1 ? "" : "s")) ?? ""}`), Z(m, `Ship to ${(H(t), U(() => H(t).shipToCity)) ?? ""}, ${(H(t), U(() => H(t).shipToState)) ?? ""} ${(H(t), U(() => H(t).shipToPostalCode)) ?? ""}`), Z(y, (H(t), U(() => H(t).tracking?.statusLabel || H(t).status))), Ca(b, "href", (H(t), U(() => `/buyer/orders/${H(t).id}/confirmation`)));
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
	}), X(e, c), $e();
}
var Fs, Is, Ls, Rs, zs = e((() => {
	co(), lo(), to(), Fs = /* @__PURE__ */ Y("<div class=\"state-card\">You have not placed any orders yet.</div>"), Is = /* @__PURE__ */ Y("<p class=\"description\"> </p>"), Ls = /* @__PURE__ */ Y("<article class=\"line-card order-history-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p> <!></div> <div class=\"line-actions\"><p class=\"price\"> </p> <a class=\"checkout-link secondary-link\">View details</a></div></article>"), Rs = /* @__PURE__ */ Y("<div class=\"list-grid\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1);
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function Bs(e, t) {
	Qe(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ka();
	var o = Vs(), s = R(o), c = z(s, 2), l = R(c), u = R(l, !0);
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
	A(S), Le(2), A(o), B((e) => {
		Ca(s, "src", (W(n()), U(() => n().imageUrl || "/images/product-placeholder.png"))), Ca(s, "alt", (W(n()), U(() => n().name))), Z(u, (W(n()), U(() => n().seller.username))), Z(f, `${(W(n()), U(() => n().stock)) ?? ""} in stock`), Z(g, (W(n()), U(() => n().name))), Z(v, e), Z(C, (W(n()), U(() => n().description || "No description provided.")));
	}, [() => (W(a()), W(n()), U(() => a()(n().price)))]), J("click", b, () => r()(n().id)), J("click", x, () => i()(n().id)), X(e, o), $e();
}
var Vs, Hs = e((() => {
	co(), lo(), to(), Vs = /* @__PURE__ */ Y("<article class=\"detail-card\"><img class=\"product-detail-image\"/> <div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function Us(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerWallet", 8), r = $(t, "sellerBankAccount", 8), i = $(t, "sellerPayouts", 24, () => []), a = $(t, "sellerBankForm", 8), o = $(t, "sellerPayoutForm", 8), s = $(t, "sellerWebhook", 8), c = $(t, "onSellerBankInput", 8), l = $(t, "onSellerPayoutInput", 8), u = $(t, "onSellerWebhookInput", 8), d = $(t, "saveSellerBankAccount", 8), f = $(t, "createSellerPayout", 8), p = $(t, "saveSellerWebhook", 8), m = $(t, "formatCurrency", 8), h = $(t, "formatDate", 8);
	Ka();
	var g = Js(), _ = z(R(g), 2), v = z(R(_), 4), y = R(v), b = z(R(y), 2), x = R(b, !0);
	A(b), A(y);
	var S = z(y, 2), C = z(R(S), 2), ee = R(C, !0);
	A(C), A(S), A(v);
	var te = z(v, 2), ne = z(R(te), 2);
	ba(ne);
	var w = z(ne, 4);
	ba(w);
	var re = z(w, 4);
	ba(re);
	var ie = z(re, 4);
	ba(ie), Le(2), A(te);
	var ae = z(te, 2), oe = (e) => {
		var t = Ws(), n = R(t);
		A(t), B(() => Z(n, `Payouts route to ${(W(r()), U(() => r().bankName)) ?? ""} account ending ${(W(r()), U(() => r().accountLast4)) ?? ""}.`)), X(e, t);
	};
	Q(ae, (e) => {
		r() && e(oe);
	});
	var se = z(ae, 2), ce = z(R(se), 2);
	ba(ce);
	var le = z(ce, 4);
	ba(le), Le(2), A(se);
	var ue = z(se, 2), de = (e) => {
		var t = Ks();
		Hi(t, 5, i, zi, (e, t) => {
			var n = Gs(), r = R(n), i = R(r), a = R(i, !0);
			A(i);
			var o = z(i, 2), s = R(o, !0);
			A(o), A(r);
			var c = z(r, 2), l = R(c, !0);
			A(c), A(n), B((e, n) => {
				Z(a, e), Z(s, (H(t), U(() => H(t).note || "Mock payout"))), Z(l, n);
			}, [() => (W(h()), H(t), U(() => h()(H(t).createdAt))), () => (W(m()), H(t), U(() => m()(H(t).amount)))]), X(e, n);
		}), A(t), X(e, t);
	};
	Q(ue, (e) => {
		W(i()), U(() => i().length > 0) && e(de);
	}), A(_);
	var fe = z(_, 2), T = z(R(fe), 6), E = z(R(T), 2);
	ba(E);
	var D = z(E, 2), O = R(D);
	ba(O), Le(), A(D), Le(2), A(T);
	var pe = z(T, 2), k = (e) => {
		var t = qs(), n = z(R(t), 2), r = R(n, !0);
		A(n);
		var i = z(n, 4), a = R(i);
		A(i), A(t), B(() => {
			Z(r, (W(s()), U(() => s().signingSecret))), Z(a, `WEBHOOK_SECRET='${(W(s()), U(() => s().signingSecret)) ?? ""}' PORT=4010 node scripts/demo-webhook-receiver.js`);
		}), X(e, t);
	};
	Q(pe, (e) => {
		W(s()), U(() => s().signingSecret) && e(k);
	}), A(fe), A(g), B((e, t) => {
		Z(x, e), Z(ee, t), xa(ne, (W(a()), U(() => a().accountHolder))), xa(w, (W(a()), U(() => a().bankName))), xa(re, (W(a()), U(() => a().routingNumber))), xa(ie, (W(a()), U(() => a().accountNumber))), xa(ce, (W(o()), U(() => o().amount))), xa(le, (W(o()), U(() => o().note))), xa(E, (W(s()), U(() => s().endpointUrl))), Sa(O, (W(s()), U(() => s().isActive)));
	}, [() => (W(m()), W(n()), U(() => m()(n().balance))), () => (W(m()), W(n()), U(() => m()(n().totalEarned)))]), J("input", ne, (e) => c()("accountHolder", e)), J("input", w, (e) => c()("bankName", e)), J("input", re, (e) => c()("routingNumber", e)), J("input", ie, (e) => c()("accountNumber", e)), J("submit", te, Wa(function(...e) {
		d()?.apply(this, e);
	})), J("input", ce, (e) => l()("amount", e)), J("input", le, (e) => l()("note", e)), J("submit", se, Wa(function(...e) {
		f()?.apply(this, e);
	})), J("input", E, (e) => u()("endpointUrl", e)), J("change", O, (e) => u()("isActive", e)), J("submit", T, Wa(function(...e) {
		p()?.apply(this, e);
	})), X(e, g), $e();
}
var Ws, Gs, Ks, qs, Js, Ys = e((() => {
	co(), lo(), to(), Ws = /* @__PURE__ */ Y("<p class=\"seller-bank-summary\"> </p>"), Gs = /* @__PURE__ */ Y("<article class=\"seller-payout-row\"><div><p class=\"seller\"> </p> <p> </p></div> <strong> </strong></article>"), Ks = /* @__PURE__ */ Y("<div class=\"seller-payout-list\"></div>"), qs = /* @__PURE__ */ Y("<div class=\"webhook-secret\"><p class=\"seller\">Signing secret</p> <code> </code> <p class=\"detail-description\">Receiver command:</p> <code> </code></div>"), Js = /* @__PURE__ */ Y("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a> <a class=\"checkout-link secondary-link\" href=\"/seller/sales\">View sales</a></div></article> <article class=\"detail-card\"><p class=\"section-kicker\">Mock wallet</p> <h3>Seller funds</h3> <div class=\"seller-wallet-metrics\"><div><p>Available balance</p> <strong> </strong></div> <div><p>Total earned</p> <strong> </strong></div></div> <form class=\"stack-form bank-form\"><label for=\"bank-holder\">Account holder</label> <input id=\"bank-holder\" type=\"text\"/> <label for=\"bank-name\">Bank name</label> <input id=\"bank-name\" type=\"text\"/> <label for=\"bank-routing\">Demo routing number</label> <input id=\"bank-routing\" type=\"text\" inputmode=\"numeric\"/> <label for=\"bank-account\">Demo account number</label> <input id=\"bank-account\" type=\"text\" inputmode=\"numeric\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Save mock bank details</button></form> <!> <form class=\"stack-form payout-form\"><label for=\"payout-amount\">Payout amount</label> <input id=\"payout-amount\" type=\"number\" min=\"0.01\" step=\"0.01\"/> <label for=\"payout-note\">Note</label> <input id=\"payout-note\" type=\"text\" maxlength=\"120\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Send mock payout</button></form> <!></article> <article class=\"detail-card\"><p class=\"section-kicker\">Warehouse integration</p> <h3>Order webhook setup</h3> <p class=\"detail-description\">Send order notifications to warehouse software when buyers place orders for your products.</p> <form class=\"stack-form webhook-form\"><label for=\"webhook-url\">Receiver URL</label> <input id=\"webhook-url\" type=\"url\" placeholder=\"http://localhost:4010/seller-webhook\"/> <label class=\"checkbox-row\" for=\"webhook-active\"><input id=\"webhook-active\" type=\"checkbox\"/> Webhook active</label> <button class=\"checkout-link place-order-button\" type=\"submit\">Save webhook setup</button></form> <!></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function Xs(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "onSellerImageInput", 8), c = $(t, "formatCurrency", 8);
	Ka();
	var l = tc(), u = Mn(l), d = R(u), f = R(d), p = z(R(f), 2);
	ba(p);
	var m = z(p, 4);
	Un(m);
	var h = z(m, 4), g = z(h, 4), _ = (e) => {
		var t = Zs();
		B(() => Ca(t, "src", (W(n()), U(() => n().imagePreviewUrl)))), X(e, t);
	};
	Q(g, (e) => {
		W(n()), U(() => n().imagePreviewUrl) && e(_);
	});
	var v = z(g, 4);
	ba(v);
	var y = z(v, 4);
	ba(y), Le(2), A(f), Ba(f, (e) => i(e), () => i()), A(d);
	var b = z(d, 2), x = z(R(b), 2), S = R(x, !0);
	A(x), A(b), A(u);
	var C = z(u, 2), ee = (e) => {
		X(e, Qs());
	}, te = (e) => {
		var t = ec();
		Hi(t, 5, r, zi, (e, t) => {
			var n = $s(), r = R(n), i = z(r, 2), a = R(i), o = R(a), s = (e) => {
				X(e, vi("Pending approval"));
			}, l = (e) => {
				X(e, vi("Rejected"));
			}, u = (e) => {
				X(e, vi("Listed"));
			}, d = (e) => {
				X(e, vi("Delisted"));
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
				Ca(r, "src", (H(t), U(() => H(t).imageUrl || "/images/product-placeholder.png"))), Ca(r, "alt", (H(t), U(() => H(t).name))), Z(p, `${(H(t), U(() => H(t).stock)) ?? ""} in stock`), Z(h, (H(t), U(() => H(t).name))), Z(_, (H(t), U(() => H(t).description || "No description provided."))), Z(x, e), Z(C, `Created ${n ?? ""}`);
			}, [() => (W(c()), H(t), U(() => c()(H(t).price))), () => (H(t), U(() => new Date(H(t).createdAt).toLocaleDateString()))]), X(e, n);
		}), A(t), X(e, t);
	};
	Q(C, (e) => {
		W(r()), U(() => r().length === 0) ? e(ee) : e(te, -1);
	}), B(() => {
		xa(p, (W(n()), U(() => n().name))), xa(m, (W(n()), U(() => n().description))), xa(v, (W(n()), U(() => n().price))), xa(y, (W(n()), U(() => n().stock))), Z(S, (W(r()), U(() => r().length)));
	}), J("input", p, (e) => o()("name", e)), J("input", m, (e) => o()("description", e)), J("change", h, function(...e) {
		s()?.apply(this, e);
	}), J("input", v, (e) => o()("price", e)), J("input", y, (e) => o()("stock", e)), J("submit", f, Wa(function(...e) {
		a()?.apply(this, e);
	})), X(e, l), $e();
}
var Zs, Qs, $s, ec, tc, nc = e((() => {
	co(), lo(), to(), Zs = /* @__PURE__ */ Y("<img class=\"product-image-preview\" alt=\"Selected product preview\"/>"), Qs = /* @__PURE__ */ Y("<div class=\"state-card\">No listings yet.</div>"), $s = /* @__PURE__ */ Y("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), ec = /* @__PURE__ */ Y("<div class=\"product-grid inventory-grid\"></div>"), tc = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-image\">Product image</label> <input id=\"seller-image\" type=\"file\" accept=\"image/jpeg,image/png\"/> <p class=\"field-hint\">Optional. JPEG or PNG up to 2 MB.</p> <!> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/SellerSalesView.svelte
function rc(e, t) {
	Qe(t, !1);
	let n = $(t, "sales", 24, () => []), r = $(t, "returnRequests", 24, () => []), i = $(t, "summary", 24, () => ({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	})), a = $(t, "pageInfo", 8), o = $(t, "goToSellerSalesPage", 8), s = $(t, "updateSellerReturnStatus", 8), c = $(t, "formatCurrency", 8), l = $(t, "formatDate", 8), u = $(t, "formatPaymentMethod", 8);
	Ka();
	var d = fc(), f = Mn(d), p = R(f), m = z(R(p), 2), h = R(m, !0);
	A(m), A(p);
	var g = z(p, 2), _ = z(R(g), 2), v = R(_, !0);
	A(_), A(g);
	var y = z(g, 2), b = z(R(y), 2), x = R(b, !0);
	A(b), A(y), A(f);
	var S = z(f, 2), C = R(S), ee = z(R(C), 2), te = R(ee);
	A(ee), A(C);
	var ne = z(C, 2), w = (e) => {
		X(e, ic());
	}, re = (e) => {
		var t = cc();
		Hi(t, 5, r, zi, (e, t) => {
			var n = sc(), r = R(n), i = R(r), a = R(i);
			A(i);
			var o = z(i, 2), c = R(o, !0);
			A(o);
			var u = z(o, 2), d = R(u);
			A(u);
			var f = z(u, 2), p = (e) => {
				var n = ac(), r = R(n, !0);
				A(n), B(() => Z(r, (H(t), U(() => H(t).details)))), X(e, n);
			};
			Q(f, (e) => {
				H(t), U(() => H(t).details) && e(p);
			});
			var m = z(f, 2), h = R(m);
			A(m), A(r);
			var g = z(r, 2), _ = R(g), v = R(_, !0);
			A(_);
			var y = z(_, 2), b = (e) => {
				var n = oc(), r = Mn(n), i = z(r, 2);
				J("click", r, () => s()(H(t).id, "approved")), J("click", i, () => s()(H(t).id, "rejected")), X(e, n);
			};
			Q(y, (e) => {
				H(t), U(() => H(t).status === "submitted") && e(b);
			}), A(g), A(n), B((e, n) => {
				Z(a, `Order #${(H(t), U(() => H(t).orderItem.order.id)) ?? ""} - ${(H(t), U(() => H(t).buyer.username)) ?? ""}`), Z(c, (H(t), U(() => H(t).orderItem.productName))), Z(d, `Reason: ${e ?? ""}`), Z(h, `Submitted ${n ?? ""}`), Z(v, (H(t), U(() => H(t).status)));
			}, [() => (H(t), U(() => H(t).reason.replaceAll("_", " "))), () => (W(l()), H(t), U(() => l()(H(t).createdAt)))]), X(e, n);
		}), A(t), X(e, t);
	};
	Q(ne, (e) => {
		W(r()), U(() => r().length === 0) ? e(w) : e(re, -1);
	}), A(S);
	var ie = z(S, 2), ae = (e) => {
		X(e, lc());
	}, oe = (e) => {
		var t = dc(), r = Mn(t);
		Hi(r, 5, n, zi, (e, t) => {
			var n = uc(), r = R(n), i = R(r), a = R(i);
			A(i);
			var o = z(i, 2), s = R(o, !0);
			A(o);
			var d = z(o, 2), f = R(d);
			A(d);
			var p = z(d, 2), m = R(p);
			A(p), A(r);
			var h = z(r, 2), g = R(h), _ = R(g, !0);
			A(g);
			var v = z(g, 2), y = R(v, !0);
			A(v), A(h), A(n), B((e, n, r, i) => {
				Z(a, `Order #${(H(t), U(() => H(t).order.id)) ?? ""}`), Z(s, (H(t), U(() => H(t).productName))), Z(f, `${e ?? ""} - ${n ?? ""}`), Z(m, `${(H(t), U(() => H(t).quantity)) ?? ""} unit${(H(t), U(() => H(t).quantity === 1 ? "" : "s")) ?? ""} at ${r ?? ""}`), Z(_, i), Z(y, (H(t), U(() => H(t).order.status)));
			}, [
				() => (W(l()), H(t), U(() => l()(H(t).order.createdAt))),
				() => (W(u()), H(t), U(() => u()(H(t).order.paymentMethod))),
				() => (W(c()), H(t), U(() => c()(H(t).unitPrice))),
				() => (W(c()), H(t), U(() => c()(H(t).lineTotal)))
			]), X(e, n);
		}), A(r);
		var i = z(r, 2), s = R(i), d = z(s, 2), f = R(d);
		A(d);
		var p = z(d, 2);
		A(i), B(() => {
			s.disabled = (W(a()), U(() => !a().hasPreviousPage)), Z(f, `Page ${(W(a()), U(() => a().page)) ?? ""} of ${(W(a()), U(() => a().totalPages)) ?? ""}`), p.disabled = (W(a()), U(() => !a().hasNextPage));
		}), J("click", s, () => o()(a().page - 1)), J("click", p, () => o()(a().page + 1)), X(e, t);
	};
	Q(ie, (e) => {
		W(n()), U(() => n().length === 0) ? e(ae) : e(oe, -1);
	}), B((e) => {
		Z(h, (W(i()), U(() => i().orderCount))), Z(v, (W(i()), U(() => i().unitsSold))), Z(x, e), Z(te, `${(W(r()), U(() => r().length)) ?? ""} request${(W(r()), U(() => r().length === 1 ? "" : "s")) ?? ""}`);
	}, [() => (W(c()), W(i()), U(() => c()(i().grossSales)))]), X(e, d), $e();
}
var ic, ac, oc, sc, cc, lc, uc, dc, fc, pc = e((() => {
	co(), lo(), to(), ic = /* @__PURE__ */ Y("<div class=\"state-card\">No return requests for your sold items.</div>"), ac = /* @__PURE__ */ Y("<p class=\"description\"> </p>"), oc = /* @__PURE__ */ Y("<button type=\"button\" class=\"secondary\">Approve</button> <button type=\"button\" class=\"secondary\">Reject</button>", 1), sc = /* @__PURE__ */ Y("<article class=\"line-card return-review-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <!> <p class=\"seller\"> </p></div> <div class=\"line-actions seller-sales-actions\"><p class=\"price\"> </p> <!></div></article>"), cc = /* @__PURE__ */ Y("<div class=\"list-grid\"></div>"), lc = /* @__PURE__ */ Y("<div class=\"state-card\">No sales have been recorded yet.</div>"), uc = /* @__PURE__ */ Y("<article class=\"line-card seller-sales-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p></div> <div class=\"line-actions seller-sales-actions\"><p class=\"price\"> </p> <p class=\"seller\"> </p></div></article>"), dc = /* @__PURE__ */ Y("<div class=\"list-grid seller-sales-list\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1), fc = /* @__PURE__ */ Y("<div class=\"seller-sales-summary\"><aside class=\"summary-panel\"><p>Orders</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Items sold</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Gross sales</p> <strong> </strong></aside></div> <section class=\"seller-returns-panel\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Return requests</p> <h3>Seller review queue</h3></div> <p class=\"admin-count\"> </p></div> <!></section> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function mc(e, t) {
	Qe(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "productSearch", 8, ""), i = $(t, "addToCart", 8), a = $(t, "addToComparison", 8), o = $(t, "openRandomProduct", 8), s = $(t, "onProductSearchInput", 8), c = $(t, "searchProducts", 8), l = $(t, "clearProductSearch", 8), u = $(t, "formatCurrency", 8);
	Ka();
	var d = yc(), f = Mn(d), p = R(f), m = z(R(p), 2), h = R(m);
	ba(h);
	var g = z(h, 4), _ = (e) => {
		var t = hc();
		J("click", t, function(...e) {
			l()?.apply(this, e);
		}), X(e, t);
	}, v = /* @__PURE__ */ rn(() => (W(r()), U(() => r().trim())));
	Q(g, (e) => {
		H(v) && e(_);
	}), A(m), A(p);
	var y = z(p, 2), b = R(y);
	A(y), A(f);
	var x = z(f, 2), S = (e) => {
		var t = gc(), n = R(t, !0);
		A(t), B((e) => Z(n, e), [() => (W(r()), U(() => r().trim() ? "No products match your search." : "No listed products are available right now."))]), X(e, t);
	}, C = (e) => {
		var t = vc();
		Hi(t, 5, n, zi, (e, t) => {
			var n = _c(), r = R(n), o = z(r, 2), s = R(o), c = R(s, !0);
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
				Ca(r, "src", (H(t), U(() => H(t).imageUrl || "/images/product-placeholder.png"))), Ca(r, "alt", (H(t), U(() => H(t).name))), Z(c, (H(t), U(() => H(t).seller.username))), Z(d, `${(H(t), U(() => H(t).stock)) ?? ""} in stock`), Z(p, (H(t), U(() => H(t).name))), Z(h, (H(t), U(() => H(t).description || "No description provided."))), Z(y, e), Ca(b, "href", (H(t), U(() => `/buyer/products/${H(t).id}`)));
			}, [() => (W(u()), H(t), U(() => u()(H(t).price)))]), J("click", S, () => i()(H(t).id)), J("click", C, () => a()(H(t).id)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(x, (e) => {
		W(n()), U(() => n().length === 0) ? e(S) : e(C, -1);
	}), B(() => xa(h, r())), J("input", h, function(...e) {
		s()?.apply(this, e);
	}), J("submit", p, Wa(function(...e) {
		c()?.apply(this, e);
	})), J("click", b, function(...e) {
		o()?.apply(this, e);
	}), X(e, d), $e();
}
var hc, gc, _c, vc, yc, bc = e((() => {
	co(), lo(), to(), hc = /* @__PURE__ */ Y("<button class=\"secondary\" type=\"button\">Clear</button>"), gc = /* @__PURE__ */ Y("<div class=\"state-card\"> </div>"), _c = /* @__PURE__ */ Y("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), vc = /* @__PURE__ */ Y("<div class=\"product-grid\"></div>"), yc = /* @__PURE__ */ Y("<div class=\"storefront-tools\"><form class=\"storefront-search\"><label for=\"product-search\">Search products</label> <div class=\"storefront-search-row\"><input id=\"product-search\" type=\"search\" placeholder=\"Search by product name or description\"/> <button type=\"submit\">Search</button> <!></div></form> <div class=\"storefront-actions\"><button class=\"checkout-link random-product-button\" type=\"button\">Random product</button></div></div> <!>", 1);
}));
//#endregion
//#region frontend/src/App.svelte
function xc(e, t) {
	Qe(t, !1);
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
	}), f = /* @__PURE__ */ I(null), p = /* @__PURE__ */ I({}), m = /* @__PURE__ */ I([]), h = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1
	}), g = /* @__PURE__ */ I([]), _ = /* @__PURE__ */ I([]), v = /* @__PURE__ */ I({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	}), y = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1
	}), b = /* @__PURE__ */ I([]), x = /* @__PURE__ */ I({
		balance: 0,
		totalEarned: 0
	}), S = /* @__PURE__ */ I(null), C = /* @__PURE__ */ I([]), ee = /* @__PURE__ */ I({
		accountHolder: "",
		bankName: "",
		routingNumber: "",
		accountNumber: ""
	}), te = /* @__PURE__ */ I({
		amount: "",
		note: ""
	}), ne = /* @__PURE__ */ I({
		endpointUrl: "",
		signingSecret: "",
		isActive: !1
	}), w = /* @__PURE__ */ I({
		name: "",
		description: "",
		imageDataUrl: "",
		imagePreviewUrl: "",
		price: "",
		stock: ""
	}), re = /* @__PURE__ */ I(), ie = /* @__PURE__ */ I([]), ae = /* @__PURE__ */ I([]), oe = /* @__PURE__ */ I([]), se = /* @__PURE__ */ I([]), ce = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), le = /* @__PURE__ */ I(""), ue = /* @__PURE__ */ I({
		name: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postalCode: "",
		country: "US"
	}), de = /* @__PURE__ */ I("accessible-blue-gold"), fe = /* @__PURE__ */ I(!1), T = /* @__PURE__ */ I(!0), E = /* @__PURE__ */ I(""), D = /* @__PURE__ */ I(""), O = /* @__PURE__ */ I([]), pe = /* @__PURE__ */ new Map();
	async function k(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function me(e) {
		L(de, i.has(e) ? e : "accessible-blue-gold"), typeof document < "u" && (document.documentElement.dataset.theme = H(de)), typeof localStorage < "u" && localStorage.setItem("ram-theme", H(de));
	}
	function he() {
		L(fe, !H(fe));
	}
	function ge(e) {
		me(e), L(fe, !1);
	}
	function _e(e, t) {
		return {
			...e,
			...t
		};
	}
	function ve(e) {
		L(ie, H(ie).filter((t) => t.id !== e.id)), L(oe, H(oe).map((t) => t.id === e.id ? _e(t, e) : t));
	}
	function ye(e) {
		L(ae, H(ae).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function be(e = !1) {
		L(T, !0), L(E, ""), e && L(D, "");
		try {
			let e = H(c).trim();
			L(s, await k(e ? `/api/buyer/products?search=${encodeURIComponent(e)}` : "/api/buyer/products"));
		} catch (e) {
			L(E, e.message || "Could not load products.");
		} finally {
			L(T, !1);
		}
	}
	async function xe() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(l, await k(`/api/buyer/products/${fo()}`));
		} catch (e) {
			L(E, e.message || "Could not load product.");
		} finally {
			L(T, !1);
		}
	}
	async function Se() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(d, await k("/api/buyer/cart"));
		} catch (e) {
			L(E, e.message || "Could not load cart.");
		} finally {
			L(T, !1);
		}
	}
	async function Ce() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(u, (await k("/api/buyer/compare")).items || []);
		} catch (e) {
			L(E, e.message || "Could not load comparison list.");
		} finally {
			L(T, !1);
		}
	}
	async function we() {
		L(T, !0), L(E, "");
		try {
			L(g, await k("/api/seller/products"));
		} catch (e) {
			L(E, e.message || "Could not load seller inventory.");
		} finally {
			L(T, !1);
		}
	}
	function Te(e) {
		L(x, {
			balance: e.wallet?.balance || 0,
			totalEarned: e.wallet?.totalEarned || 0
		}), L(S, e.bankAccount || null), L(C, e.payouts || []);
	}
	async function Ee() {
		L(T, !0), L(E, "");
		try {
			Te(await k("/api/seller/wallet"));
		} catch (e) {
			L(E, e.message || "Could not load seller wallet.");
		} finally {
			L(T, !1);
		}
	}
	async function De() {
		L(T, !0), L(E, "");
		try {
			let [e, t] = await Promise.all([k("/api/seller/webhook"), k("/api/seller/wallet")]);
			L(ne, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), Te(t);
		} catch (e) {
			L(E, e.message || "Could not load seller dashboard.");
		} finally {
			L(T, !1);
		}
	}
	async function Oe(e = 1) {
		L(T, !0), L(E, ""), L(D, "");
		try {
			let [t, n] = await Promise.all([k(`/api/seller/sales?page=${e}`), k("/api/seller/returns")]);
			L(_, t.sales || []), L(b, n || []), L(v, t.summary || {
				grossSales: 0,
				unitsSold: 0,
				orderCount: 0
			}), L(y, {
				page: t.page,
				totalPages: t.totalPages,
				hasPreviousPage: t.hasPreviousPage,
				hasNextPage: t.hasNextPage
			});
		} catch (e) {
			L(E, e.message || "Could not load seller sales.");
		} finally {
			L(T, !1);
		}
	}
	async function ke(e, t) {
		L(D, "");
		try {
			await k(`/api/seller/returns/${e}/status`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ status: t })
			}), L(D, `Return request ${t}.`), await Oe(H(y).page);
		} catch (e) {
			L(D, e.message || "Could not update return request.");
		}
	}
	async function Ae() {
		L(T, !0), L(E, "");
		try {
			L(se, await k("/api/admin/audit-logs"));
		} catch (e) {
			L(E, e.message || "Could not load audit logs.");
		} finally {
			L(T, !1);
		}
	}
	async function je(e = 1, t = H(le)) {
		L(T, !0), L(E, "");
		try {
			let [n, r, i] = await Promise.all([
				k("/api/admin/pending-users"),
				k("/api/admin/products"),
				k(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			L(ie, n), L(ae, r), L(oe, i.users), L(ce, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), L(le, i.search || "");
		} catch (e) {
			L(E, e.message || "Could not load moderation data.");
		} finally {
			L(T, !1);
		}
	}
	async function Me() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(f, await k(`/api/buyer/orders/${po()}`)), L(D, "Your order has been placed successfully.");
		} catch (e) {
			L(E, e.message || "Could not load order confirmation.");
		} finally {
			L(T, !1);
		}
	}
	async function Ne(e = 1) {
		L(T, !0), L(E, ""), L(D, "");
		try {
			let t = await k(`/api/buyer/orders?page=${e}`);
			L(m, t.orders || []), L(h, {
				page: t.page,
				totalPages: t.totalPages,
				hasPreviousPage: t.hasPreviousPage,
				hasNextPage: t.hasNextPage
			});
		} catch (e) {
			L(E, e.message || "Could not load order history.");
		} finally {
			L(T, !1);
		}
	}
	async function Pe() {
		if (L(a, mo()), L(o, ho()), H(o) === "admin-home") {
			L(T, !1), L(E, "");
			return;
		}
		if (H(o) === "seller-home") {
			await De();
			return;
		}
		if (H(o) === "admin-moderation") {
			await je();
			return;
		}
		if (H(o) === "admin-audit") {
			await Ae();
			return;
		}
		if (H(o) === "seller-inventory") {
			await we();
			return;
		}
		if (H(o) === "seller-sales") {
			await Oe();
			return;
		}
		if (H(o) === "cart" || H(o) === "checkout") {
			await Se();
			return;
		}
		if (H(o) === "compare") {
			await Ce();
			return;
		}
		if (H(o) === "confirmation") {
			await Me();
			return;
		}
		if (H(o) === "orders") {
			await Ne();
			return;
		}
		if (H(o) === "product") {
			await xe();
			return;
		}
		await be();
	}
	async function Fe(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Rr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function Ie(e, t) {
		L(w, {
			...H(w),
			[e]: t.currentTarget.value
		});
	}
	function Le(e, t) {
		L(ne, {
			...H(ne),
			[e]: e === "isActive" ? t.currentTarget.checked : t.currentTarget.value
		});
	}
	function Re(e, t) {
		L(ee, {
			...H(ee),
			[e]: t.currentTarget.value
		});
	}
	function ze(e, t) {
		L(te, {
			...H(te),
			[e]: t.currentTarget.value
		});
	}
	function j(e) {
		let [t] = e.currentTarget.files || [];
		if (!t) {
			L(w, {
				...H(w),
				imageDataUrl: "",
				imagePreviewUrl: ""
			});
			return;
		}
		if (!["image/jpeg", "image/png"].includes(t.type)) {
			L(D, "Select a JPEG or PNG file for the product photo."), e.currentTarget.value = "";
			return;
		}
		if (t.size > 2 * 1024 * 1024) {
			L(D, "Product image must be 2 MB or smaller."), e.currentTarget.value = "";
			return;
		}
		let n = new FileReader();
		n.onload = () => {
			L(w, {
				...H(w),
				imageDataUrl: String(n.result || ""),
				imagePreviewUrl: String(n.result || "")
			}), L(D, "");
		}, n.onerror = () => {
			L(D, "Could not read selected image.");
		}, n.readAsDataURL(t);
	}
	function M(e, t) {
		L(ue, {
			...H(ue),
			[e]: t.currentTarget.value
		});
	}
	function N(e, t, n) {
		L(p, {
			...H(p),
			[e]: {
				...H(p)[e] || {},
				[t]: n.currentTarget.value
			}
		});
	}
	function Be(e) {
		L(le, e.currentTarget.value);
	}
	async function Ve() {
		L(D, "");
		let e = String(H(w).price).trim(), t = String(H(w).stock).trim(), n = Number(e), r = Number(t);
		if (H(re)?.reportValidity()) {
			if (e === "" || !Number.isFinite(n)) {
				L(D, "Enter a valid number for price.");
				return;
			}
			if (t === "" || !Number.isInteger(r)) {
				L(D, "Enter a whole number for stock.");
				return;
			}
			try {
				await k("/api/seller/products", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: H(w).name,
						description: H(w).description,
						imageDataUrl: H(w).imageDataUrl,
						price: n,
						stock: r
					})
				}), L(w, {
					name: "",
					description: "",
					imageDataUrl: "",
					imagePreviewUrl: "",
					price: "",
					stock: ""
				}), H(re)?.reset(), L(D, "Listing submitted for admin approval."), await we();
			} catch (e) {
				L(D, e.message || "Could not create listing.");
			}
		}
	}
	async function He() {
		L(D, "");
		try {
			let e = await k("/api/seller/webhook", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					endpointUrl: H(ne).endpointUrl,
					isActive: H(ne).isActive
				})
			});
			L(ne, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), L(D, "Webhook setup saved.");
		} catch (e) {
			L(D, e.message || "Could not save webhook setup.");
		}
	}
	async function Ue() {
		L(D, "");
		try {
			L(S, await k("/api/seller/wallet/bank-account", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(H(ee))
			})), L(ee, {
				accountHolder: "",
				bankName: "",
				routingNumber: "",
				accountNumber: ""
			}), L(D, "Mock bank details saved.");
		} catch (e) {
			L(D, e.message || "Could not save mock bank details.");
		}
	}
	async function We() {
		L(D, "");
		try {
			let e = await k("/api/seller/wallet/payouts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(H(te))
			});
			L(x, {
				balance: e.wallet?.balance || 0,
				totalEarned: e.wallet?.totalEarned || H(x).totalEarned
			}), L(te, {
				amount: "",
				note: ""
			}), L(D, "Mock payout sent."), await Ee();
		} catch (e) {
			L(D, e.message || "Could not send mock payout.");
		}
	}
	async function Ge(e) {
		L(D, "");
		try {
			let t = await k(`/api/admin/approve-user/${e}`, { method: "POST" });
			L(D, "User approved."), ve(t);
		} catch (e) {
			L(D, e.message || "Could not approve user.");
		}
	}
	async function Ke(e) {
		L(D, "");
		try {
			let t = await k(`/api/admin/block-user/${e}`, { method: "POST" });
			L(D, "User blocked."), ve(t);
		} catch (e) {
			L(D, e.message || "Could not block user.");
		}
	}
	async function qe(e) {
		L(D, "");
		try {
			let t = await k(`/api/admin/ban-user/${e}`, { method: "POST" });
			L(D, "User banned."), ve(t);
		} catch (e) {
			L(D, e.message || "Could not ban user.");
		}
	}
	async function Je(e) {
		L(D, "");
		try {
			let t = await k(`/api/admin/products/${e}/approve`, { method: "POST" });
			L(D, "Product approved."), ye(t);
		} catch (e) {
			L(D, e.message || "Could not approve product.");
		}
	}
	async function Ye(e) {
		L(D, "");
		try {
			let t = await k(`/api/admin/products/${e}/reject`, { method: "POST" });
			L(D, "Product rejected."), ye(t);
		} catch (e) {
			L(D, e.message || "Could not reject product.");
		}
	}
	async function Xe(e) {
		L(D, "");
		try {
			let t = await k(`/api/admin/products/${e}/delist`, { method: "POST" });
			L(D, "Product delisted."), ye(t);
		} catch (e) {
			L(D, e.message || "Could not delist product.");
		}
	}
	async function Ze() {
		await Fe(() => je(1, H(le)));
	}
	async function et() {
		L(le, ""), await Fe(() => je(1, ""));
	}
	async function P(e) {
		e < 1 || e > H(ce).totalPages || await Fe(() => je(e, H(ce).search));
	}
	function tt(e) {
		L(c, e.target.value);
	}
	async function nt() {
		await Fe(() => be(!0));
	}
	async function rt() {
		L(c, ""), await Fe(() => be(!0));
	}
	async function it(e) {
		e < 1 || e > H(h).totalPages || await Fe(() => Ne(e));
	}
	async function at(e) {
		e < 1 || e > H(y).totalPages || await Fe(() => Oe(e));
	}
	function ot(e, t = "success") {
		let n = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
		L(O, [...H(O), {
			id: n,
			message: e,
			type: t
		}]);
		let r = setTimeout(() => {
			L(O, H(O).filter((e) => e.id !== n)), pe.delete(n);
		}, 3200);
		pe.set(n, r);
	}
	async function st(e) {
		L(D, "");
		try {
			await k("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(D, "Item added to cart."), ot("Item added to cart.");
		} catch (e) {
			L(D, e.message || "Could not add item to cart."), ot(H(D), "error");
		}
	}
	async function ct() {
		L(D, "");
		try {
			let e = await k("/api/buyer/random_access");
			typeof window < "u" && (window.location.href = `/buyer/products/${e.id}`);
		} catch (e) {
			L(D, e.message || "Could not load a random product.");
		}
	}
	async function lt(e) {
		L(D, "");
		try {
			await k("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(D, "Item added to comparison list.");
		} catch (e) {
			L(D, e.message || "Could not add item to list.");
		}
	}
	async function ut(e) {
		L(D, "");
		try {
			await k(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(D, "Item removed from cart."), await Se();
		} catch (e) {
			L(D, e.message || "Could not remove item.");
		}
	}
	async function dt(e) {
		L(D, "");
		try {
			await k(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(D, "Item removed from comparison list."), await Ce();
		} catch (e) {
			L(D, e.message || "Could not remove item.");
		}
	}
	async function ft() {
		L(D, "");
		try {
			let e = await k("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					paymentMethod: "demo_card",
					shippingAddress: H(ue)
				})
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			L(D, e.message || "Checkout failed."), await Se();
		}
	}
	async function pt(e) {
		L(D, "");
		let t = H(p)[e] || {};
		try {
			await k(`/api/buyer/orders/${H(f).id}/items/${e}/returns`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					reason: t.reason,
					details: t.details
				})
			}), L(p, {
				...H(p),
				[e]: {
					reason: "",
					details: ""
				}
			}), L(D, "Return request submitted."), await Me();
		} catch (e) {
			L(D, e.message || "Could not submit return request.");
		}
	}
	async function mt() {
		L(D, "");
		try {
			await k("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(D, e.message || "Could not log out.");
		}
	}
	ro(async () => {
		me((typeof localStorage > "u" ? null : localStorage.getItem("ram-theme")) || "accessible-blue-gold"), await Pe();
	}), io(() => {
		pe.forEach((e) => clearTimeout(e)), pe.clear();
	}), ar(() => H(o), () => {
		L(n, go(H(o)));
	}), or(), Ka();
	var ht = Ac();
	aa("13zv0lp", (e) => {
		lr((e) => {
			Rn.title = e ?? "";
		}, [() => (W(_o), H(o), U(() => _o(H(o))))]);
	});
	var gt = R(ht);
	Ao(gt, {
		get appMode() {
			return H(a);
		},
		get currentPage() {
			return H(o);
		},
		onLogout: mt
	});
	var _t = z(gt, 2), vt = R(_t);
	Po(vt, {
		get kicker() {
			return H(n), U(() => H(n).kicker);
		},
		get heading() {
			return H(n), U(() => H(n).heading);
		},
		onRefresh: Pe
	});
	var yt = z(vt, 2), bt = (e) => {
		X(e, Sc());
	}, xt = (e) => {
		var t = Cc(), n = R(t, !0);
		A(t), B(() => Z(n, H(E))), X(e, t);
	}, St = (e) => {
		Ho(e, {});
	}, Ct = (e) => {
		Go(e, {
			get adminPendingUsers() {
				return H(ie);
			},
			get adminProducts() {
				return H(ae);
			},
			get adminUsers() {
				return H(oe);
			},
			get adminUsersPageInfo() {
				return H(ce);
			},
			get adminUserSearch() {
				return H(le);
			},
			onAdminUserSearchInput: Be,
			approveUser: Ge,
			blockUser: Ke,
			banUser: qe,
			approveProduct: Je,
			rejectProduct: Ye,
			delistProduct: Xe,
			searchAdminUsers: Ze,
			clearAdminUserSearch: et,
			goToAdminUsersPage: P,
			get capitalizeRole() {
				return wo;
			},
			get formatCurrency() {
				return bo;
			},
			get formatDate() {
				return xo;
			},
			get getUserStatus() {
				return To;
			}
		});
	}, wt = (e) => {
		Lo(e, {
			get adminAuditLogs() {
				return H(se);
			},
			get formatActionType() {
				return Eo;
			},
			get formatDate() {
				return xo;
			}
		});
	}, Tt = (e) => {
		Us(e, {
			get sellerWallet() {
				return H(x);
			},
			get sellerBankAccount() {
				return H(S);
			},
			get sellerPayouts() {
				return H(C);
			},
			get sellerBankForm() {
				return H(ee);
			},
			get sellerPayoutForm() {
				return H(te);
			},
			get sellerWebhook() {
				return H(ne);
			},
			onSellerBankInput: Re,
			onSellerPayoutInput: ze,
			onSellerWebhookInput: Le,
			saveSellerBankAccount: Ue,
			createSellerPayout: We,
			saveSellerWebhook: He,
			get formatCurrency() {
				return bo;
			},
			get formatDate() {
				return xo;
			}
		});
	}, Et = (e) => {
		Xs(e, {
			get sellerForm() {
				return H(w);
			},
			get sellerProducts() {
				return H(g);
			},
			createSellerListing: Ve,
			onSellerFormInput: Ie,
			onSellerImageInput: j,
			get formatCurrency() {
				return bo;
			},
			get sellerListingForm() {
				return H(re);
			},
			set sellerListingForm(e) {
				L(re, e);
			},
			$$legacy: !0
		});
	}, Dt = (e) => {
		rc(e, {
			get sales() {
				return H(_);
			},
			get returnRequests() {
				return H(b);
			},
			get summary() {
				return H(v);
			},
			get pageInfo() {
				return H(y);
			},
			goToSellerSalesPage: at,
			updateSellerReturnStatus: ke,
			get formatCurrency() {
				return bo;
			},
			get formatDate() {
				return xo;
			},
			get formatPaymentMethod() {
				return So;
			}
		});
	}, Ot = (e) => {
		Bs(e, {
			get product() {
				return H(l);
			},
			addToCart: st,
			addToComparison: lt,
			get formatCurrency() {
				return bo;
			}
		});
	}, kt = (e) => {
		os(e, {
			get cart() {
				return H(d);
			},
			removeFromCart: ut,
			get formatCurrency() {
				return bo;
			}
		});
	}, At = (e) => {
		fs(e, {
			get cart() {
				return H(d);
			},
			placeOrder: ft,
			get formatCurrency() {
				return bo;
			},
			get shippingAddress() {
				return H(ue);
			},
			onShippingInput: M
		});
	}, jt = (e) => {
		Cs(e, {
			get order() {
				return H(f);
			},
			get returnForms() {
				return H(p);
			},
			onReturnFormInput: N,
			submitReturnRequest: pt,
			get formatCurrency() {
				return bo;
			},
			get formatDate() {
				return xo;
			},
			get formatPaymentMethod() {
				return So;
			}
		});
	}, Mt = (e) => {
		Ps(e, {
			get orders() {
				return H(m);
			},
			get pageInfo() {
				return H(h);
			},
			goToOrderHistoryPage: it,
			get formatCurrency() {
				return bo;
			},
			get formatDate() {
				return xo;
			},
			get formatPaymentMethod() {
				return So;
			}
		});
	}, F = (e) => {
		vs(e, {
			get compareItems() {
				return H(u);
			},
			addToCart: st,
			removeFromCompare: dt,
			get formatCurrency() {
				return bo;
			},
			get truncate() {
				return Co;
			}
		});
	}, Nt = (e) => {
		mc(e, {
			get products() {
				return H(s);
			},
			get productSearch() {
				return H(c);
			},
			addToCart: st,
			addToComparison: lt,
			openRandomProduct: ct,
			onProductSearchInput: tt,
			searchProducts: nt,
			clearProductSearch: rt,
			get formatCurrency() {
				return bo;
			}
		});
	};
	Q(yt, (e) => {
		H(T) ? e(bt) : H(E) ? e(xt, 1) : H(o) === "admin-home" ? e(St, 2) : H(o) === "admin-moderation" ? e(Ct, 3) : H(o) === "admin-audit" ? e(wt, 4) : H(o) === "seller-home" ? e(Tt, 5) : H(o) === "seller-inventory" ? e(Et, 6) : H(o) === "seller-sales" ? e(Dt, 7) : H(o) === "product" && H(l) ? e(Ot, 8) : H(o) === "cart" ? e(kt, 9) : H(o) === "checkout" ? e(At, 10) : H(o) === "confirmation" && H(f) ? e(jt, 11) : H(o) === "orders" ? e(Mt, 12) : H(o) === "compare" ? e(F, 13) : e(Nt, -1);
	});
	var Pt = z(yt, 2), Ft = (e) => {
		var t = wc(), n = R(t, !0);
		A(t), B(() => Z(n, H(D))), X(e, t);
	};
	Q(Pt, (e) => {
		H(D) && e(Ft);
	}), A(_t);
	var It = z(_t, 2), Lt = (e) => {
		var t = Ec();
		Hi(t, 5, () => H(O), (e) => e.id, (e, t) => {
			var n = Tc();
			let r;
			var i = R(n, !0);
			A(n), B(() => {
				r = pa(n, 1, "cart-toast", null, r, { error: H(t).type === "error" }), Z(i, (H(t), U(() => H(t).message)));
			}), X(e, n);
		}), A(t), X(e, t);
	};
	Q(It, (e) => {
		H(O), U(() => H(O).length > 0) && e(Lt);
	});
	var Rt = z(It, 2), zt = R(Rt), Bt = (e) => {
		var t = kc();
		Hi(t, 5, () => r, zi, (e, t) => {
			var n = Oc();
			let r;
			var i = R(n), a = R(i, !0);
			A(i);
			var o = z(i, 2), s = (e) => {
				X(e, Dc());
			};
			Q(o, (e) => {
				H(de), H(t), U(() => H(de) === H(t).value) && e(s);
			}), A(n), B(() => {
				r = pa(n, 1, "theme-dock-option", null, r, { "active-theme": H(de) === H(t).value }), Ca(n, "aria-checked", (H(de), H(t), U(() => H(de) === H(t).value))), Z(a, (H(t), U(() => H(t).label)));
			}), J("click", n, () => ge(H(t).value)), X(e, n);
		}), A(t), X(e, t);
	};
	Q(zt, (e) => {
		H(fe) && e(Bt);
	});
	var Vt = z(zt, 2);
	A(Rt), A(ht), B(() => {
		Ca(ht, "data-page", H(o)), Ca(Vt, "aria-expanded", H(fe));
	}), J("click", Vt, he), X(e, ht), $e();
}
var Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, jc = e((() => {
	co(), lo(), to(), oo(), No(), Io(), Vo(), Wo(), as(), ds(), _s(), Ss(), Ns(), zs(), Hs(), Ys(), nc(), pc(), bc(), ko(), Sc = /* @__PURE__ */ Y("<div class=\"state-card\">Loading...</div>"), Cc = /* @__PURE__ */ Y("<div class=\"state-card error\"> </div>"), wc = /* @__PURE__ */ Y("<p class=\"status-banner\"> </p>"), Tc = /* @__PURE__ */ Y("<div role=\"status\"> </div>"), Ec = /* @__PURE__ */ Y("<div class=\"cart-toast-stack\" aria-live=\"polite\" aria-label=\"Cart notifications\"></div>"), Dc = /* @__PURE__ */ Y("<span class=\"theme-dock-check\">Current</span>"), Oc = /* @__PURE__ */ Y("<button type=\"button\" role=\"menuitemradio\"><span> </span> <!></button>"), kc = /* @__PURE__ */ Y("<div class=\"theme-dock-menu\" role=\"menu\" aria-label=\"Theme picker\"></div>"), Ac = /* @__PURE__ */ Y("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section> <!> <div class=\"theme-dock\"><!> <button class=\"theme-dock-toggle\" type=\"button\" aria-haspopup=\"menu\">Theme</button></div></div>");
})), Mc = e((() => {})), Nc = /* @__PURE__ */ t((() => {
	oo(), jc(), Mc(), xi(xc, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default Nc();
