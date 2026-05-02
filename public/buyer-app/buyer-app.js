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
})), b, x, S, C, ee, w, te, ne, re, ie, ae, oe, se, ce, le, ue, T, E, D, de, fe, O = e((() => {
	b = 1024, x = 2048, S = 4096, C = 8192, ee = 16384, w = 32768, te = 1 << 25, ne = 65536, re = 1 << 18, ie = 1 << 19, ae = 1 << 20, oe = 1 << 25, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, T = Symbol("$state"), E = Symbol("legacy props"), D = Symbol(""), de = new class extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}(), fe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
}));
function pe(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
var me = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function he() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ge(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function _e(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ve() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ye(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function be() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Se() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ce() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function we() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Te() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var Ee = e((() => {
	r(), me();
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
	return Fe(/* @__PURE__ */ On(j));
}
function k(e) {
	if (A) {
		if (/* @__PURE__ */ On(j) !== null) throw je(), De;
		j = e;
	}
}
function Le(e = 1) {
	if (A) {
		for (var t = e, n = j; t--;) n = /* @__PURE__ */ On(n);
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
		var i = /* @__PURE__ */ On(n);
		e && n.remove(), n = i;
	}
}
function ze(e) {
	if (!e || e.nodeType !== 8) throw je(), De;
	return e.data;
}
var A, j, M = e((() => {
	O(), Ae(), Ne(), zn(), A = !1;
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
	r(), y(), me();
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
		r: K,
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
		for (var r of n) Qn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, N = t.p, e ?? {};
}
function et() {
	return !Ke || N !== null && N.l === null;
}
var N, tt = e((() => {
	r(), Ee(), q(), V(), qe(), O(), N = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function nt() {
	var e = at;
	at = [], a(e);
}
function rt(e) {
	if (at.length === 0 && !Pt) {
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
	y(), Ht(), at = [];
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
	r(), Ae(), zn(), O(), y(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function P(e, t) {
	e.f = e.f & dt | t;
}
function ut(e) {
	e.f & 512 || e.deps === null ? P(e, b) : P(e, S);
}
var dt, ft = e((() => {
	O(), dt = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function pt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= se, pt(t.deps));
}
function mt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), pt(e.deps), P(e, b);
}
var ht = e((() => {
	O(), ft();
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
	O(), Je(), q();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
function Ct(e) {
	var t = Pt;
	Pt = !0;
	try {
		var n;
		for (e && (F !== null && !F.is_fork && F.flush(), n = e());;) {
			if (it(), F === null) return n;
			F.flush();
		}
	} finally {
		Pt = t;
	}
}
function wt() {
	try {
		be();
	} catch (e) {
		ct(e, Nt);
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
		e & 2 ? Et(i, t, n, r) : e & 4194320 && !(e & 2048) && Dt(i, t, r) && (P(i, x), Ot(i));
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
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), P(e, b);
		for (var n = e.first; n !== null;) kt(n, t), n = n.next;
	}
}
function At(e) {
	P(e, b);
	for (var t = e.first; t !== null;) At(t), t = t.next;
}
var jt, F, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht = e((() => {
	O(), qe(), y(), q(), Ee(), ot(), r(), lt(), xn(), V(), ht(), Ae(), ft(), xt(), Xe(), St(), jt = /* @__PURE__ */ new Set(), F = null, Mt = null, Nt = null, Pt = !1, Ft = !1, It = null, Lt = null, Rt = 0, zt = 1, Bt = class e {
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
				for (var n of t.d) P(n, x), this.schedule(n);
				for (n of t.m) P(n, S), this.schedule(n);
			}
		}
		#m() {
			if (Rt++ > 1e3 && (jt.delete(this), wt()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), P(e, x), this.schedule(e);
				for (let e of this.#c) P(e, S), this.schedule(e);
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
					a ? r.f ^= b : i & 4 ? t.push(r) : Ge && i & 16777224 ? n.push(r) : kr(r) && (i & 16 && this.#c.add(r), Pr(r));
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
			t !== Oe && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), Mt?.set(e, e.v));
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
					for (let e of this.#o) !(e.f & 155648) && Dt(e, s, a) && (e.f & 4194320 ? (P(e, x), l.schedule(e)) : l.#s.add(e));
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
				Ft || (jt.add(F), Pt || rt(() => {
					F === t && t.flush();
				}));
			}
			return F;
		}
		apply() {
			if (!Ge || !this.is_fork && jt.size === 1) {
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
				if (It !== null && t === K && (Ge || (G === null || !(G.f & 2)) && !yt)) return;
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
			rt(() => {
				--t, t === 0 && (r?.(), r = void 0, gn(n));
			});
		})));
	};
}
var Wt = e((() => {
	q(), V(), xn(), Ye(), r(), ot();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Gt(e, t, n, r) {
	new qt(e, t, n, r);
}
var Kt, qt, Jt = e((() => {
	O(), Ae(), tt(), lt(), V(), q(), M(), ot(), Ee(), Ne(), r(), Ht(), xn(), Ye(), Wt(), zn(), ht(), ft(), Kt = ne | ie, qt = class {
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
		#h = Ut(() => (this.#m = fn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = K;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = sr(() => {
				if (A) {
					let e = this.#t;
					Ie();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Kt), A && (this.#e = j);
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
			e && (this.is_pending = !0, this.#o = cr(() => e(this.#e)), rt(() => {
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
			var t = K, n = G, r = N;
			wr(this.#i), Cr(this.#i), Ze(this.#i.ctx);
			try {
				return Bt.ensure(), e();
			} catch (e) {
				return st(e), null;
			} finally {
				wr(t), Cr(n), Ze(r);
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
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, rt(() => {
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
			this.#a &&= (fr(this.#a), null), this.#o &&= (fr(this.#o), null), this.#s &&= (fr(this.#s), null), A && (Fe(this.#t), Le(), Fe(Re()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Me();
					return;
				}
				r = !0, i && Te(), this.#s !== null && hr(this.#s, () => {
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
						return cr(() => {
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
function Yt(e, t, n, r) {
	let i = et() ? en : rn;
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
			o.f & 16384 || ct(e, o);
		}
		Zt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Qt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ tn(e))).then((e) => l([...t.map(i), ...e])).catch((e) => ct(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), Zt();
	}) : d();
}
function Xt() {
	var e = K, t = G, n = N, r = F;
	return function(i = !0) {
		wr(e), Cr(t), Ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Zt(e = !0) {
	wr(null), Cr(null), Ze(null), e && F?.deactivate();
}
function Qt() {
	var e = K, t = e.b, n = F, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var $t = e((() => {
	O(), r(), tt(), Jt(), lt(), q(), Ht(), dn(), V();
}));
/* @__NO_SIDE_EFFECTS__ */
function en(e) {
	var t = 2 | x, n = G !== null && G.f & 2 ? G : null;
	return K !== null && (K.f |= ie), {
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
		parent: n ?? K,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function tn(e, t, n) {
	let r = K;
	r === null && he();
	var i = void 0, a = fn(Oe), s = !G, c = /* @__PURE__ */ new Map();
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
			if (r.b.is_rendered()) c.get(l)?.reject(de), c.delete(l);
			else {
				for (let e of c.values()) e.reject(de);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === de), !(n === de || t.f & 16384)) {
				if (l.activate(), n) a.f |= ue, mn(a, n);
				else {
					a.f & 8388608 && (a.f ^= ue), mn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(de);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Xn(() => {
		for (let e of c.values()) e.reject(de);
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
	return Ge || Tr(t), t;
}
/* @__NO_SIDE_EFFECTS__ */
function rn(e) {
	let t = /* @__PURE__ */ en(e);
	return t.equals = He, t;
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
		e.f &= ~se, an(e), t = jr(e);
	} finally {
		wr(n);
	}
	return t;
}
function cn(e) {
	var t = e.v, n = sn(e);
	if (!e.equals(n) && (e.wv = Or(), (!F?.is_fork || e.deps === null) && (e.v = n, F?.capture(e, t, !0), e.deps === null))) {
		P(e, b);
		return;
	}
	Br || (Mt === null ? ut(e) : (Yn() || F?.is_fork) && Mt.set(e, n));
}
function ln(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(de), t.teardown = v, t.ac = null, Nr(t, 0), ur(t));
}
function un(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Pr(t);
}
var dn = e((() => {
	r(), O(), q(), Ue(), Ee(), Ne(), V(), xn(), Xe(), qe(), tt(), Ae(), Ht(), $t(), y(), ft();
}));
function fn(e, t) {
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
function pn(e, t) {
	let n = fn(e, t);
	return Tr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t = !1, n = !0) {
	let r = fn(e);
	return t || (r.equals = He), Ke && n && N !== null && N.l !== null && (N.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return G !== null && (!Vr || G.f & 131072) && et() && G.f & 4325394 && (Hr === null || !l.call(Hr, e)) && we(), mn(e, n ? Sn(t) : t, Lt);
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
		e.wv = Or(), _n(e, x, n), et() && K !== null && K.f & 1024 && !(K.f & 96) && (Gr === null ? Er([e]) : Gr.push(e)), !i.is_fork && vn.size > 0 && !bn && hn();
	}
	return t;
}
function hn() {
	bn = !1;
	for (let e of vn) e.f & 1024 && P(e, S), kr(e) && Pr(e);
	vn.clear();
}
function gn(e) {
	L(e, e.v + 1);
}
function _n(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = et(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & x) === 0;
			if (l && P(s, t), c & 2) {
				var u = s;
				Mt?.delete(u), c & 65536 || (c & 512 && (s.f |= se), _n(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Vt !== null && Vt.add(d), n === null ? Ot(d) : n.push(d);
			}
		}
	}
}
var vn, yn, bn, xn = e((() => {
	r(), q(), Ue(), O(), Ee(), qe(), y(), Ye(), Xe(), tt(), Ht(), Cn(), dn(), ft(), vn = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Map(), bn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function Sn(e) {
	if (typeof e != "object" || !e || T in e) return e;
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
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Se();
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
					let e = c(() => /* @__PURE__ */ pn(Oe, a));
					n.set(t, e), gn(i);
				}
			} else L(r, Oe), gn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === T) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ pn(Sn(s ? t[r] : Oe), a)), n.set(r, o)), o !== void 0) {
				var l = H(o);
				return l === Oe ? void 0 : l;
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
			if (t === T) return !0;
			var r = n.get(t), i = r !== void 0 && r.v !== Oe || Reflect.has(e, t);
			return (r !== void 0 || K !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ pn(i ? Sn(e[t]) : Oe, a)), n.set(t, r)), H(r) === Oe) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ pn(Oe, a)), n.set(d + "", p)) : L(p, Oe);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ pn(void 0, a)), L(l, Sn(o)), n.set(t, l));
			else {
				u = l.v !== Oe;
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
				return t === void 0 || t.v !== Oe;
			});
			for (var [r, a] of n) a.v !== Oe && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Ce();
		}
	});
}
var Cn = e((() => {
	r(), q(), y(), xn(), O(), Ae(), Ee(), Ye(), Xe(), qe(), new Set([
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
	Ne(), Cn();
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
	if (!A) return /* @__PURE__ */ Dn(e);
	var n = /* @__PURE__ */ Dn(j);
	if (n === null) n = j.appendChild(En());
	else if (t && n.nodeType !== 3) {
		var r = En();
		return n?.before(r), Fe(r), r;
	}
	return t && Nn(n), Fe(n), n;
}
function kn(e, t = !1) {
	if (!A) {
		var n = /* @__PURE__ */ Dn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ On(n) : n;
	}
	if (t) {
		if (j?.nodeType !== 3) {
			var r = En();
			return j?.before(r), Fe(r), r;
		}
		Nn(j);
	}
	return j;
}
function z(e, t = 1, n = !1) {
	let r = A ? j : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ On(r);
	if (!A) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = En();
			return r === null ? i?.after(a) : r.before(a), Fe(a), a;
		}
		Nn(r);
	}
	return Fe(r), r;
}
function An(e) {
	e.textContent = "";
}
function jn() {
	return !Ge || Vt !== null ? !1 : (K.f & w) !== 0;
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
	M(), r(), wn(), y(), q(), qe(), O(), Ht(), Ae();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Bn(e) {
	A && /* @__PURE__ */ Dn(e) !== null && An(e);
}
function Vn() {
	Hn || (Hn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Hn, Un = e((() => {
	M(), zn(), ot(), Hn = !1;
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
	K === null && (G === null && ye(e), ve()), Br && _e(e);
}
function qn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Jn(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= C);
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
	F?.register_created_effect(r);
	var i = r;
	if (e & 4) It === null ? Bt.ensure().schedule(r) : It.push(r);
	else if (t !== null) {
		try {
			Pr(r);
		} catch (e) {
			throw fr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ne));
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
	return P(t, b), t.teardown = e, t;
}
function Zn(e) {
	Kn("$effect");
	var t = K.f;
	if (!G && t & 32 && !(t & 32768)) {
		var n = N;
		(n.e ??= []).push(e);
	} else return Qn(e);
}
function Qn(e) {
	return Jn(4 | ae, e);
}
function $n(e) {
	return Kn("$effect.pre"), Jn(8 | ae, e);
}
function er(e) {
	Bt.ensure();
	let t = Jn(64 | ie, e);
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
	var n = N, r = {
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
	var e = N;
	ar(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && P(n, S), kr(n) && Pr(n), t.ran = !1;
		}
	});
}
function ir(e) {
	return Jn(le | ie, e);
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
	return Jn(32 | ie, e);
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
			e.abort(de);
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
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (pr(e.nodes.start, e.nodes.end), n = !0), P(e, te), ur(e, t && !n), Nr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	lr(e), e.f ^= te, e.f |= ee;
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
		e.f ^= C, e.f & 1024 || (P(e, x), Bt.ensure().schedule(e));
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
	q(), O(), Ee(), r(), y(), zn(), tt(), Ht(), $t(), Gn(), ft();
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
	G !== null && (!Ge || G.f & 2) && (Hr === null ? Hr = [e] : Hr.push(e));
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
	if (t & 2 && (e.f &= ~se), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (kr(a) && cn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Mt === null && P(e, b);
	}
	return !1;
}
function Ar(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ge && Hr !== null && l.call(Hr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Ar(a, t, !1) : t === a && (n ? P(a, x) : a.f & 1024 && P(a, S), Ot(a));
	}
}
function jr(e) {
	var t = Ur, n = Wr, r = Gr, i = G, a = Hr, o = N, s = Vr, c = Jr, l = e.f;
	Ur = null, Wr = 0, Gr = null, G = l & 96 ? null : e, Hr = null, Ze(e.ctx), Vr = !1, Jr = ++qr, e.ac !== null && (Wn(() => {
		e.ac.abort(de);
	}), e.ac = null);
	try {
		e.f |= ce;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = F?.is_fork;
		if (Ur !== null) {
			var m;
			if (p || Nr(e, Wr), f !== null && Wr > 0) for (f.length = Wr + Ur.length, m = 0; m < Ur.length; m++) f[Wr + m] = Ur[m];
			else e.deps = f = Ur;
			if (Yn() && e.f & 512) for (m = Wr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Wr < f.length && (Nr(e, Wr), f.length = Wr);
		if (et() && Gr !== null && !Vr && f !== null && !(e.f & 6146)) for (m = 0; m < Gr.length; m++) Ar(Gr[m], e);
		if (i !== null && i !== e) {
			if (qr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = qr;
			if (t !== null) for (let e of t) e.rv = qr;
			Gr !== null && (r === null ? r = Gr : r.push(...Gr));
		}
		return e.f & 8388608 && (e.f ^= ue), d;
	} catch (e) {
		return st(e);
	} finally {
		e.f ^= ce, Ur = t, Wr = n, Gr = r, G = i, Hr = a, Ze(o), Vr = s, Jr = c;
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
		a.f & 512 && (a.f ^= 512, a.f &= ~se), ut(a), ln(a), Nr(a, 0);
	}
}
function Nr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Mr(e, n[r]);
}
function Pr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		P(e, b);
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
	if (Ge) return new Promise((e) => {
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
		var o = (i.f & 512) == 0 && !Vr && G !== null && (zr || (G.f & 512) != 0), s = (i.f & w) === 0;
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
	if (e.v === Oe) return !0;
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
		if (T in e) Rr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && T in n && Rr(n);
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
	r(), y(), V(), O(), xn(), dn(), qe(), Ye(), Xe(), tt(), Ht(), lt(), Ae(), xr(), Gn(), ft(), Ne(), zr = !1, Br = !1, G = null, Vr = !1, K = null, Hr = null, Ur = null, Wr = 0, Gr = null, Kr = 1, qr = 0, Jr = qr;
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
	O(), ei(), q();
})), ni = e((() => {
	O(), M(), tt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function ri(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ii.call(t, e), !e.cancelBubble) return Wn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rt(() => {
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
	V(), y(), M(), ot(), q(), Gn(), ai = Symbol("events"), oi = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), ci = null;
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
		if (A) return mi(j, null), j;
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
	if (!A) {
		var t = En(e + "");
		return mi(t, t), t;
	}
	var n = j;
	return n.nodeType === 3 ? Nn(n) : (n.before(n = En()), Fe(n)), mi(n, n), n;
}
function gi() {
	if (A) return mi(j, null), j;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = En();
	return e.append(t, n), mi(t, n), e;
}
function X(e, t) {
	if (A) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = j), Ie();
		return;
	}
	e !== null && e.before(t);
}
var _i = e((() => {
	M(), zn(), pi(), q(), Ae(), O();
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
			Qe({});
			var n = N;
			if (a && (n.c = a), i && (r.$$events = i), A && mi(t, null), bi = o, c = e(t, r) || {}, bi = !0, A && (K.nodes.end = j, j === null || j.nodeType !== 8 || j.data !== "]")) throw je(), De;
			$e();
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
	r(), zn(), Ae(), q(), tt(), V(), M(), y(), li(), Ne(), Ee(), _i(), ei(), O(), Jt(), xi = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new WeakMap();
})), wi = e((() => {
	O(), M(), V(), xn(), Ci(), q();
})), Ti = e((() => {
	y(), O(), tt(), ei();
})), Ei = e((() => {
	Ee(), tt();
})), Di = e((() => {
	Je(), V(), q(), Xe();
})), Oi = e((() => {
	$t(), q(), M();
})), ki = e((() => {
	Ee();
})), Ai, ji = e((() => {
	Ht(), V(), M(), zn(), Ai = class {
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
			} else A && (this.anchor = j), this.#a(n);
		}
	};
})), Mi = e((() => {
	y(), V(), xn(), M(), ot(), tt(), Ht(), ji(), $t();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Q(e, t, n = !1) {
	var r;
	A && (r = j, Ie());
	var i = new Ai(e), a = n ? ne : 0;
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
	sr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Ni = e((() => {
	O(), M(), V(), ji();
})), Pi = e((() => {
	tt(), V(), M(), ji();
})), Fi = e((() => {
	V(), M(), zn();
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
		r?.has(a) ? (a.f |= oe, yr(a, document.createDocumentFragment())) : fr(t[i], n);
	}
}
function zi(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = A ? Fe(/* @__PURE__ */ Dn(l)) : l.appendChild(En());
	}
	A && Ie();
	var d = null, f = /* @__PURE__ */ rn(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Vi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= oe, Ui(d, null, o)) : _r(d) : hr(d, () => {
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
			A && ze(o) === "[!" != (e === 0) && (o = Re(), Fe(o), Pe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = F, v = jn(), y = 0; y < e; y += 1) {
				A && j.nodeType === 8 && j.data === "]" && (o = j, s = !0, Pe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && mn(S.v, b), S.i && mn(S.i, y), v && u.unskip_effect(S.e)) : (S = Hi(c, h ? o : Gi ??= En(), b, x, y, i, t, n), h || (S.e.f |= oe), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = cr(() => a(o)) : (d = cr(() => a(Gi ??= En())), d.f |= oe)), e > l.size && ge("", "", ""), A && e > 0 && Fe(Re()), !h) if (m.set(u, l), v) {
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
		if (_.f & 8192 && (_r(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= oe, _ === c) Ui(_, null, n);
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
		var ee = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || ee.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = Bi(c.next);
		var w = ee.length;
		if (w > 0) {
			var te = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < w; v += 1) ee[v].nodes?.a?.measure();
				for (v = 0; v < w; v += 1) ee[v].nodes?.a?.fix();
			}
			Li(e, ee, te);
		}
	}
	a && rt(() => {
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
	Ae(), M(), zn(), V(), xn(), y(), O(), ot(), q(), r(), dn(), Ht(), Ee();
})), qi = e((() => {
	V(), M(), _i(), ei(), tt(), zn(), q(), O();
})), Ji = e((() => {
	M();
})), Yi = e((() => {
	ei();
})), Xi = e((() => {
	O(), V(), tt(), M(), pi(), _i(), Ee(), zn(), Yi(), ji();
})), Zi = e((() => {
	O(), V(), M(), ji();
})), Qi = e((() => {
	y();
})), $i = e((() => {
	Qi();
})), ea = e((() => {
	y(), V(), q(), $i(), Ci(), O(), ot(), Gn();
})), ta = e((() => {
	M(), zn(), V(), Ci(), q(), tt(), O(), _i(), ei(), ji(), ea();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function na(e, t) {
	let n = null, r = A;
	var i;
	if (A) {
		n = j;
		for (var a = /* @__PURE__ */ Dn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ On(a);
		if (a === null) Pe(!1);
		else {
			var o = /* @__PURE__ */ On(a);
			a.remove(), Fe(o);
		}
	}
	A || (i = document.head.appendChild(En()));
	try {
		sr(() => t(i), re | ie);
	} finally {
		r && (Pe(!0), Fe(n));
	}
}
var ra = e((() => {
	M(), zn(), V(), O();
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
	V(), Gn(), Cn(), y(), Ht();
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
		e.__on_r = n, rt(n), Vn();
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
	A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Sa) || i[t] !== (i[t] = n) && (t === "loading" && (e[D] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ya(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
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
	r(), M(), y(), li(), Un(), Ne(), O(), ot(), ei(), q(), oa(), la(), da(), fa(), Ae(), V(), pa(), $t(), ba = Symbol("is custom element"), xa = Symbol("is html"), Sa = fe ? "link" : "LINK", Ca = fe ? "progress" : "PROGRESS", wa = /* @__PURE__ */ new Map();
})), Ea = e((() => {
	M(), zn(), pi(), oa();
})), Da = e((() => {
	Gn();
})), Oa = e((() => {
	V(), Gn(), Ee(), Cn(), ot(), M(), q(), tt(), Ht();
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
	return e === t || e?.[T] === t;
}
function Pa(e = {}, t, n, r) {
	var i = N.r, a = K;
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
	O(), tt(), V(), q();
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
	let t = N, n = t.l.u;
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
	y(), tt(), dn(), V(), q();
})), Ua = e((() => {
	xn(), q(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !Ke || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? U(r) : r), s);
	let u;
	if (a) {
		var d = T in e || E in e;
		u = f(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = vt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = l(), u && (i && xe(t), u(p)));
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
	r(), Ae(), y(), xn(), dn(), q(), Ee(), O(), Cn(), xt(), qe(), V();
})), Ga = e((() => {
	tt(), V(), xt(), $t();
})), Ka = e((() => {
	O(), V(), xn(), Ci(), q(), Ht(), y(), Ee(), tt(), qe(), ft(), za();
})), qa = e((() => {
	Ka(), V(), _i(), y(), zn();
})), Ja = e((() => {
	O(), Je(), q();
})), Ya = e((() => {
	Yr(), tt(), ti(), ni(), wi(), Ti(), Ei(), Ye(), Di(), Oi(), ki(), Mi(), Ni(), Pi(), Fi(), Ki(), qi(), Ji(), Xi(), Zi(), ta(), ra(), ia(), aa(), oa(), Ta(), da(), li(), Un(), Ea(), fa(), ea(), Da(), Oa(), ka(), Aa(), ja(), pa(), Ma(), Fa(), Ia(), La(), M(), za(), Ha(), Ua(), _i(), $t(), Ht(), dn(), V(), xn(), Wa(), xt(), Jt(), xr(), Ci(), q(), Ga(), Qi(), Cn(), qa(), zn(), la(), Je(), y(), Yi(), wn(), Ja(), lt();
})), Xa = e((() => {
	M(), Ee();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function Za(e) {
	N === null && pe("onMount"), Ke && N.l !== null ? $a(N).m.push(e) : Zn(() => {
		let t = U(e);
		if (typeof t == "function") return t;
	});
}
function Qa(e) {
	N === null && pe("onDestroy"), Za(() => () => U(e));
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
	q(), y(), Ya(), Ee(), qe(), tt(), r(), Ht(), Xa(), Ci(), Xi();
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
	k(u), Le(2), k(l);
	var f = z(l, 2), p = R(f);
	zi(p, 1, () => H(n), Ii, (e, t) => {
		var n = To(), r = R(n, !0);
		k(n), B(() => {
			_a(n, "href", (H(t), U(() => H(t).href))), Z(r, (H(t), U(() => H(t).label)));
		}), X(e, n);
	});
	var m = z(p, 2), h = z(m, 2);
	k(f), k(c), B(() => {
		Z(d, (W(i()), U(() => s[i()] || s.buyer))), _a(m, "href", H(r));
	}), J("click", h, function(...e) {
		o()?.apply(this, e);
	}), X(e, c), $e();
}
var To, Eo, Do = e((() => {
	no(), ro(), Ya(), Co(), To = /* @__PURE__ */ Y("<a class=\"action-link\"> </a>"), Eo = /* @__PURE__ */ Y("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function Oo(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = ko(), o = R(a), s = R(o), c = R(s, !0);
	k(s);
	var l = z(s, 2), u = R(l, !0);
	k(l), k(o);
	var d = z(o, 2);
	k(a), B(() => {
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
	Qe(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Ba();
	var a = gi(), o = kn(a), s = (e) => {
		X(e, Mo());
	}, c = (e) => {
		var t = Po(), a = z(R(t), 2);
		zi(a, 5, n, Ii, (e, t) => {
			var n = No(), a = R(n), o = R(a, !0);
			k(a);
			var s = z(a, 2), c = R(s, !0);
			k(s);
			var l = z(s, 2), u = R(l, !0);
			k(l);
			var d = z(l, 2), f = R(d, !0);
			k(d), k(n), B((e, n) => {
				Z(o, e), Z(c, (H(t), U(() => H(t).username))), Z(u, n), Z(f, (H(t), U(() => H(t).details)));
			}, [() => (W(i()), H(t), U(() => i()(H(t).createdAt))), () => (W(r()), H(t), U(() => r()(H(t).actionType)))]), X(e, n);
		}), k(a), k(t), X(e, t);
	};
	Q(o, (e) => {
		W(n()), U(() => n().length === 0) ? e(s) : e(c, -1);
	}), X(e, a), $e();
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
	Qe(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Ba();
	var x = Qo(), S = R(x), C = R(S), ee = z(R(C), 2), w = R(ee, !0);
	k(ee), k(C);
	var te = z(C, 2), ne = (e) => {
		X(e, Bo());
	}, re = (e) => {
		var t = Ho(), r = R(t), i = z(R(r));
		zi(i, 5, n, Ii, (e, t) => {
			var n = Vo(), r = R(n), i = R(r, !0);
			k(r);
			var a = z(r), o = R(a, !0);
			k(a);
			var s = z(a), u = R(s, !0);
			k(s);
			var d = z(s), f = R(d, !0);
			k(d);
			var p = z(d), m = R(p), h = R(m), g = z(h, 2);
			k(m), k(p), k(n), B((e, n) => {
				Z(i, (H(t), U(() => H(t).username))), Z(o, e), Z(u, (H(t), U(() => H(t).email))), Z(f, n);
			}, [() => (W(_()), H(t), U(() => _()(H(t).role))), () => (W(y()), H(t), U(() => y()(H(t).createdAt)))]), J("click", h, () => c()(H(t).id)), J("click", g, () => l()(H(t).id)), X(e, n);
		}), k(i), k(r), k(t), X(e, t);
	};
	Q(te, (e) => {
		W(n()), U(() => n().length === 0) ? e(ne) : e(re, -1);
	}), k(S);
	var ie = z(S, 2), ae = R(ie), oe = z(R(ae), 2), se = R(oe, !0);
	k(oe), k(ae);
	var ce = z(ae, 2), le = (e) => {
		X(e, Uo());
	}, ue = (e) => {
		var t = Jo(), n = R(t), i = z(R(n));
		zi(i, 5, r, Ii, (e, t) => {
			var n = qo(), r = R(n), i = R(r, !0);
			k(r);
			var a = z(r), o = R(a, !0);
			k(a);
			var s = z(a), c = R(s, !0);
			k(s);
			var l = z(s), u = R(l, !0);
			k(l);
			var m = z(l), h = R(m, !0);
			k(m);
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
			}), k(g);
			var C = z(g), ee = R(C), w = (e) => {
				var n = Wo(), r = R(n), i = z(r, 2);
				k(n), J("click", r, () => d()(H(t).id)), J("click", i, () => f()(H(t).id)), X(e, n);
			}, te = (e) => {
				var n = Go();
				J("click", n, () => p()(H(t).id)), X(e, n);
			}, ne = (e) => {
				X(e, Ko());
			};
			Q(ee, (e) => {
				H(t), U(() => H(t).listingStatus === "pending") ? e(w) : (H(t), U(() => H(t).isListed) ? e(te, 1) : e(ne, -1));
			}), k(C), k(n), B((e) => {
				Z(i, (H(t), U(() => H(t).name))), Z(o, (H(t), U(() => H(t).seller?.username || "Unknown seller"))), Z(c, (H(t), U(() => H(t).description || "No description provided."))), Z(u, e), Z(h, (H(t), U(() => H(t).stock)));
			}, [() => (W(v()), H(t), U(() => v()(H(t).price)))]), X(e, n);
		}), k(i), k(n), k(t), X(e, t);
	};
	Q(ce, (e) => {
		W(r()), U(() => r().length === 0) ? e(le) : e(ue, -1);
	}), k(ie);
	var T = z(ie, 2), E = R(T), D = z(R(E), 2), de = R(D);
	k(D), k(E);
	var fe = z(E, 2), O = R(fe);
	ma(O);
	var pe = z(O, 4);
	k(fe);
	var me = z(fe, 2), he = (e) => {
		X(e, Yo());
	}, ge = (e) => {
		var t = Zo(), n = R(t), r = z(R(n));
		zi(r, 5, i, Ii, (e, t) => {
			var n = Xo(), r = R(n), i = R(r, !0);
			k(r);
			var a = z(r), o = R(a, !0);
			k(a);
			var s = z(a), d = R(s, !0);
			k(s);
			var f = z(s), p = R(f, !0);
			k(f);
			var m = z(f), h = R(m), g = R(h), v = z(g, 2), x = z(v, 2);
			k(h), k(m), k(n), B((e, n, r) => {
				Z(i, (H(t), U(() => H(t).username))), Z(o, e), Z(d, n), Z(p, r);
			}, [
				() => (W(_()), H(t), U(() => _()(H(t).role))),
				() => (W(b()), H(t), U(() => b()(H(t)))),
				() => (W(y()), H(t), U(() => y()(H(t).createdAt)))
			]), J("click", g, () => c()(H(t).id)), J("click", v, () => l()(H(t).id)), J("click", x, () => u()(H(t).id)), X(e, n);
		}), k(r), k(n), k(t), X(e, t);
	};
	Q(me, (e) => {
		W(i()), U(() => i().length === 0) ? e(he) : e(ge, -1);
	});
	var _e = z(me, 2), ve = R(_e), ye = z(ve, 2), be = R(ye);
	k(ye);
	var xe = z(ye, 2);
	k(_e), k(T), k(x), B(() => {
		Z(w, (W(n()), U(() => n().length))), Z(se, (W(r()), U(() => r().length))), Z(de, `${(W(a()), U(() => a().totalPages)) ?? ""} page${(W(a()), U(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), ha(O, o()), ve.disabled = (W(a()), U(() => !a().hasPreviousPage)), Z(be, `Page ${(W(a()), U(() => a().page)) ?? ""} of ${(W(a()), U(() => a().totalPages)) ?? ""}`), xe.disabled = (W(a()), U(() => !a().hasNextPage));
	}), J("input", O, function(...e) {
		s()?.apply(this, e);
	}), J("click", pe, function(...e) {
		h()?.apply(this, e);
	}), J("submit", fe, Ra(function(...e) {
		m()?.apply(this, e);
	})), J("click", ve, () => g()(a().page - 1)), J("click", xe, () => g()(a().page + 1)), X(e, x), $e();
}
var Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o = e((() => {
	no(), ro(), Ya(), Bo = /* @__PURE__ */ Y("<div class=\"state-card\">No pending users right now.</div>"), Vo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), Ho = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Uo = /* @__PURE__ */ Y("<div class=\"state-card\">No seller listings are available for review.</div>"), Wo = /* @__PURE__ */ Y("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), Go = /* @__PURE__ */ Y("<button class=\"admin-button admin-button-danger\">Delist</button>"), Ko = /* @__PURE__ */ Y("<span class=\"seller\">No further action</span>"), qo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), Jo = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), Yo = /* @__PURE__ */ Y("<div class=\"state-card\">No users matched that search.</div>"), Xo = /* @__PURE__ */ Y("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), Zo = /* @__PURE__ */ Y("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Qo = /* @__PURE__ */ Y("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function es(e, t) {
	Qe(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Ba();
	var a = is(), o = R(a), s = R(o), c = (e) => {
		X(e, ts());
	}, l = (e) => {
		var t = rs();
		zi(t, 5, () => (W(n()), U(() => n().items)), Ii, (e, t) => {
			var n = ns(), a = R(n), o = R(a), s = R(o, !0);
			k(o);
			var c = z(o, 2), l = R(c, !0);
			k(c);
			var u = z(c, 2), d = R(u);
			k(u), k(a);
			var f = z(a, 2), p = R(f), m = R(p, !0);
			k(p);
			var h = z(p, 2);
			k(f), k(n), B((e, n) => {
				Z(s, (H(t), U(() => H(t).product.seller.username))), Z(l, (H(t), U(() => H(t).product.name))), Z(d, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(m, n);
			}, [() => (W(i()), H(t), U(() => i()(H(t).product.price))), () => (W(i()), H(t), U(() => i()(H(t).product.price * H(t).quantity)))]), J("click", h, () => r()(H(t).id)), X(e, n);
		}), k(t), X(e, t);
	};
	Q(s, (e) => {
		W(n()), U(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), k(o);
	var u = z(o, 2), d = z(R(u), 2), f = R(d, !0);
	k(d);
	var p = z(d, 4), m = R(p, !0);
	k(p);
	var h = z(p, 4), g = R(h, !0);
	k(h);
	var _ = z(h, 4), v = R(_, !0);
	k(_), Le(2), k(u), k(a), B((e, t, n, r) => {
		Z(f, e), Z(m, t), Z(g, n), Z(v, r);
	}, [
		() => (W(i()), W(n()), U(() => i()(n().subtotal))),
		() => (W(i()), W(n()), U(() => i()(n().serviceFee || 0))),
		() => (W(i()), W(n()), U(() => i()(n().tax))),
		() => (W(i()), W(n()), U(() => i()(n().total)))
	]), X(e, a), $e();
}
var ts, ns, rs, is, as = e((() => {
	no(), ro(), Ya(), ts = /* @__PURE__ */ Y("<div class=\"state-card\">Your cart is empty.</div>"), ns = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), rs = /* @__PURE__ */ Y("<div class=\"list-grid\"></div>"), is = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function os(e, t) {
	Qe(t, !1);
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
		ma(p), Le(2), k(s), k(r);
		var m = z(r, 2);
		zi(m, 5, () => (W(n()), U(() => n().items)), Ii, (e, t) => {
			var n = cs(), r = R(n), a = R(r), o = R(a, !0);
			k(a);
			var s = z(a, 2), c = R(s, !0);
			k(s);
			var l = z(s, 2), u = R(l);
			k(l), k(r);
			var d = z(r, 2), f = R(d), p = R(f, !0);
			k(f), k(d), k(n), B((e, n) => {
				Z(o, (H(t), U(() => H(t).product.seller.username))), Z(c, (H(t), U(() => H(t).product.name))), Z(u, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(p, n);
			}, [() => (W(i()), H(t), U(() => i()(H(t).product.price))), () => (W(i()), H(t), U(() => i()(H(t).product.price * H(t).quantity)))]), X(e, n);
		}), k(m), k(t), B(() => {
			ha(c, (W(a()), U(() => a().name))), ha(l, (W(a()), U(() => a().line1))), ha(u, (W(a()), U(() => a().line2))), ha(d, (W(a()), U(() => a().city))), ha(f, (W(a()), U(() => a().state))), ha(p, (W(a()), U(() => a().postalCode)));
		}), J("input", c, (e) => o()("name", e)), J("input", l, (e) => o()("line1", e)), J("input", u, (e) => o()("line2", e)), J("input", d, (e) => o()("city", e)), J("input", f, (e) => o()("state", e)), J("input", p, (e) => o()("postalCode", e)), X(e, t);
	};
	Q(l, (e) => {
		W(n()), U(() => n().items.length === 0) ? e(u) : e(d, -1);
	}), k(c);
	var f = z(c, 2), p = z(R(f), 2), m = R(p, !0);
	k(p);
	var h = z(p, 4), g = R(h, !0);
	k(h);
	var _ = z(h, 4), v = R(_, !0);
	k(_);
	var y = z(_, 4), b = R(y, !0);
	k(y);
	var x = z(y, 4), S = R(x);
	Le(2), k(x), k(f), k(s), B((e, t, r, i) => {
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
var ss, cs, ls, us, ds = e((() => {
	no(), ro(), Ya(), ss = /* @__PURE__ */ Y("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), cs = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ls = /* @__PURE__ */ Y("<div class=\"checkout-stack\"><div class=\"shipping-panel\"><p class=\"section-kicker\">Shipping address</p> <div class=\"stack-form\"><label for=\"ship-name\">Full name</label> <input id=\"ship-name\" type=\"text\" required=\"\"/> <label for=\"ship-line1\">Address line 1</label> <input id=\"ship-line1\" type=\"text\" required=\"\"/> <label for=\"ship-line2\">Address line 2</label> <input id=\"ship-line2\" type=\"text\"/> <label for=\"ship-city\">City</label> <input id=\"ship-city\" type=\"text\" required=\"\"/> <label for=\"ship-state\">State / region</label> <input id=\"ship-state\" type=\"text\" required=\"\"/> <label for=\"ship-postal\">Postal code</label> <input id=\"ship-postal\" type=\"text\" required=\"\"/> <p class=\"field-hint\">Shipping currently supports United States addresses only.</p></div></div> <div class=\"list-grid\"></div></div>"), us = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function fs(e, t) {
	Qe(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Ba();
	var s = gi(), c = kn(s), l = (e) => {
		X(e, ps());
	}, u = (e) => {
		var t = hs();
		zi(t, 5, n, Ii, (e, t) => {
			var n = ms(), s = R(n), c = z(R(s), 2), l = R(c, !0);
			k(c), k(s);
			var u = z(s, 2), d = R(u, !0);
			k(u);
			var f = z(u, 2), p = R(f, !0);
			k(f);
			var m = z(f, 2), h = R(m), g = R(h);
			k(h);
			var _ = z(h, 2), v = R(_), y = z(v, 2);
			k(_), k(m), k(n), B((e, n) => {
				Z(l, e), Z(d, (H(t), U(() => H(t).name))), Z(p, n), _a(g, "href", (H(t), U(() => `/buyer/products/${H(t).id}`)));
			}, [() => (W(a()), H(t), U(() => a()(H(t).price))), () => (W(o()), H(t), U(() => o()(H(t).description || "", 160)))]), J("click", v, () => r()(H(t).id)), J("click", y, () => i()(H(t).id)), X(e, n);
		}), k(t), X(e, t);
	};
	Q(c, (e) => {
		W(n()), U(() => n().length === 0) ? e(l) : e(u, -1);
	}), X(e, s), $e();
}
var ps, ms, hs, gs = e((() => {
	no(), ro(), Ya(), ps = /* @__PURE__ */ Y("<div class=\"state-card\">No products marked for comparison.</div>"), ms = /* @__PURE__ */ Y("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), hs = /* @__PURE__ */ Y("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function _s(e, t) {
	Qe(t, !1);
	let n = $(t, "order", 8), r = $(t, "formatCurrency", 8), i = $(t, "formatDate", 8), a = $(t, "formatPaymentMethod", 8);
	Ba();
	var o = bs(), s = R(o), c = R(s);
	zi(c, 5, () => (W(n()), U(() => n().items)), Ii, (e, t) => {
		var n = vs(), i = R(n), a = R(i), o = R(a);
		k(a);
		var s = z(a, 2), c = R(s, !0);
		k(s);
		var l = z(s, 2), u = R(l);
		k(l), k(i);
		var d = z(i, 2), f = R(d), p = R(f, !0);
		k(f), k(d), k(n), B((e, n) => {
			Z(o, `Seller ID ${(H(t), U(() => H(t).sellerId)) ?? ""}`), Z(c, (H(t), U(() => H(t).productName))), Z(u, `Quantity ${(H(t), U(() => H(t).quantity)) ?? ""} at ${e ?? ""} each`), Z(p, n);
		}, [() => (W(r()), H(t), U(() => r()(H(t).unitPrice))), () => (W(r()), H(t), U(() => r()(H(t).lineTotal)))]), X(e, n);
	}), k(c), k(s);
	var l = z(s, 2), u = z(R(l), 2), d = R(u);
	k(u);
	var f = z(u, 4), p = R(f, !0);
	k(f);
	var m = z(f, 4), h = R(m, !0);
	k(m);
	var g = z(m, 4), _ = R(g, !0);
	k(g);
	var v = z(g, 4), y = R(v, !0);
	k(v);
	var b = z(v, 2), x = R(b, !0);
	k(b);
	var S = z(b, 2), C = (e) => {
		var t = ys(), r = R(t, !0);
		k(t), B(() => Z(r, (W(n()), U(() => n().shipToLine2)))), X(e, t);
	};
	Q(S, (e) => {
		W(n()), U(() => n().shipToLine2) && e(C);
	});
	var ee = z(S, 2), w = R(ee);
	k(ee);
	var te = z(ee, 2), ne = R(te, !0);
	k(te);
	var re = z(te, 4), ie = R(re, !0);
	k(re);
	var ae = z(re, 4), oe = R(ae, !0);
	k(ae);
	var se = z(ae, 4), ce = R(se, !0);
	k(se);
	var le = z(se, 4), ue = R(le, !0);
	k(le), Le(2), k(l), k(o), B((e, t, r, i, a, o) => {
		Z(d, `#${(W(n()), U(() => n().id)) ?? ""}`), Z(p, (W(n()), U(() => n().status))), Z(h, e), Z(_, t), Z(y, (W(n()), U(() => n().shipToName))), Z(x, (W(n()), U(() => n().shipToLine1))), Z(w, `${(W(n()), U(() => n().shipToCity)) ?? ""}, ${(W(n()), U(() => n().shipToState)) ?? ""} ${(W(n()), U(() => n().shipToPostalCode)) ?? ""}`), Z(ne, (W(n()), U(() => n().shipToCountry))), Z(ie, r), Z(oe, i), Z(ce, a), Z(ue, o);
	}, [
		() => (W(a()), W(n()), U(() => a()(n().paymentMethod))),
		() => (W(i()), W(n()), U(() => i()(n().createdAt))),
		() => (W(r()), W(n()), U(() => r()(n().subtotal))),
		() => (W(r()), W(n()), U(() => r()(n().serviceFeeAmount || 0))),
		() => (W(r()), W(n()), U(() => r()(n().taxAmount))),
		() => (W(r()), W(n()), U(() => r()(n().total)))
	]), X(e, o), $e();
}
var vs, ys, bs, xs = e((() => {
	no(), ro(), Ya(), vs = /* @__PURE__ */ Y("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ys = /* @__PURE__ */ Y("<strong> </strong>"), bs = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Ship to</p> <strong> </strong> <strong> </strong> <!> <strong> </strong> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Service fee</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a> <a class=\"checkout-link secondary-link\" href=\"/buyer/orders\">View order history</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/OrderHistoryView.svelte
function Ss(e, t) {
	Qe(t, !1);
	let n = $(t, "orders", 24, () => []), r = $(t, "pageInfo", 8), i = $(t, "goToOrderHistoryPage", 8), a = $(t, "formatCurrency", 8), o = $(t, "formatDate", 8), s = $(t, "formatPaymentMethod", 8);
	Ba();
	var c = gi(), l = kn(c), u = (e) => {
		X(e, Cs());
	}, d = (e) => {
		var t = Ts(), c = kn(t);
		zi(c, 5, n, Ii, (e, t) => {
			var n = ws(), r = R(n), i = R(r), c = R(i);
			k(i);
			var l = z(i, 2), u = R(l, !0);
			k(l);
			var d = z(l, 2), f = R(d);
			k(d);
			var p = z(d, 2), m = R(p);
			k(p), k(r);
			var h = z(r, 2), g = R(h), _ = R(g, !0);
			k(g);
			var v = z(g, 2);
			k(h), k(n), B((e, n, r) => {
				Z(c, `Order #${(H(t), U(() => H(t).id)) ?? ""}`), Z(u, e), Z(f, `${n ?? ""} - ${r ?? ""} - ${(H(t), U(() => H(t).items.length)) ?? ""} item${(H(t), U(() => H(t).items.length === 1 ? "" : "s")) ?? ""}`), Z(m, `Ship to ${(H(t), U(() => H(t).shipToCity)) ?? ""}, ${(H(t), U(() => H(t).shipToState)) ?? ""} ${(H(t), U(() => H(t).shipToPostalCode)) ?? ""}`), Z(_, (H(t), U(() => H(t).status))), _a(v, "href", (H(t), U(() => `/buyer/orders/${H(t).id}/confirmation`)));
			}, [
				() => (W(a()), H(t), U(() => a()(H(t).total))),
				() => (W(o()), H(t), U(() => o()(H(t).createdAt))),
				() => (W(s()), H(t), U(() => s()(H(t).paymentMethod)))
			]), X(e, n);
		}), k(c);
		var l = z(c, 2), u = R(l), d = z(u, 2), f = R(d);
		k(d);
		var p = z(d, 2);
		k(l), B(() => {
			u.disabled = (W(r()), U(() => !r().hasPreviousPage)), Z(f, `Page ${(W(r()), U(() => r().page)) ?? ""} of ${(W(r()), U(() => r().totalPages)) ?? ""}`), p.disabled = (W(r()), U(() => !r().hasNextPage));
		}), J("click", u, () => i()(r().page - 1)), J("click", p, () => i()(r().page + 1)), X(e, t);
	};
	Q(l, (e) => {
		W(n()), U(() => n().length === 0) ? e(u) : e(d, -1);
	}), X(e, c), $e();
}
var Cs, ws, Ts, Es = e((() => {
	no(), ro(), Ya(), Cs = /* @__PURE__ */ Y("<div class=\"state-card\">You have not placed any orders yet.</div>"), ws = /* @__PURE__ */ Y("<article class=\"line-card order-history-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <a class=\"checkout-link secondary-link\">View details</a></div></article>"), Ts = /* @__PURE__ */ Y("<div class=\"list-grid\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1);
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function Ds(e, t) {
	Qe(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ba();
	var o = Os(), s = R(o), c = z(s, 2), l = R(c), u = R(l, !0);
	k(l);
	var d = z(l, 2), f = R(d);
	k(d), k(c);
	var p = z(c, 2), m = R(p), h = R(m), g = R(h, !0);
	k(h);
	var _ = z(h, 2), v = R(_, !0);
	k(_), k(m);
	var y = z(m, 2), b = R(y), x = z(b, 2);
	k(y), k(p);
	var S = z(p, 2), C = R(S, !0);
	k(S), Le(2), k(o), B((e) => {
		_a(s, "src", (W(n()), U(() => n().imageUrl || "/images/product-placeholder.png"))), _a(s, "alt", (W(n()), U(() => n().name))), Z(u, (W(n()), U(() => n().seller.username))), Z(f, `${(W(n()), U(() => n().stock)) ?? ""} in stock`), Z(g, (W(n()), U(() => n().name))), Z(v, e), Z(C, (W(n()), U(() => n().description || "No description provided.")));
	}, [() => (W(a()), W(n()), U(() => a()(n().price)))]), J("click", b, () => r()(n().id)), J("click", x, () => i()(n().id)), X(e, o), $e();
}
var Os, ks = e((() => {
	no(), ro(), Ya(), Os = /* @__PURE__ */ Y("<article class=\"detail-card\"><img class=\"product-detail-image\"/> <div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function As(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerWallet", 8), r = $(t, "sellerBankAccount", 8), i = $(t, "sellerPayouts", 24, () => []), a = $(t, "sellerBankForm", 8), o = $(t, "sellerPayoutForm", 8), s = $(t, "sellerWebhook", 8), c = $(t, "onSellerBankInput", 8), l = $(t, "onSellerPayoutInput", 8), u = $(t, "onSellerWebhookInput", 8), d = $(t, "saveSellerBankAccount", 8), f = $(t, "createSellerPayout", 8), p = $(t, "saveSellerWebhook", 8), m = $(t, "formatCurrency", 8), h = $(t, "formatDate", 8);
	Ba();
	var g = Fs(), _ = z(R(g), 2), v = z(R(_), 4), y = R(v), b = z(R(y), 2), x = R(b, !0);
	k(b), k(y);
	var S = z(y, 2), C = z(R(S), 2), ee = R(C, !0);
	k(C), k(S), k(v);
	var w = z(v, 2), te = z(R(w), 2);
	ma(te);
	var ne = z(te, 4);
	ma(ne);
	var re = z(ne, 4);
	ma(re);
	var ie = z(re, 4);
	ma(ie), Le(2), k(w);
	var ae = z(w, 2), oe = (e) => {
		var t = js(), n = R(t);
		k(t), B(() => Z(n, `Payouts route to ${(W(r()), U(() => r().bankName)) ?? ""} account ending ${(W(r()), U(() => r().accountLast4)) ?? ""}.`)), X(e, t);
	};
	Q(ae, (e) => {
		r() && e(oe);
	});
	var se = z(ae, 2), ce = z(R(se), 2);
	ma(ce);
	var le = z(ce, 4);
	ma(le), Le(2), k(se);
	var ue = z(se, 2), T = (e) => {
		var t = Ns();
		zi(t, 5, i, Ii, (e, t) => {
			var n = Ms(), r = R(n), i = R(r), a = R(i, !0);
			k(i);
			var o = z(i, 2), s = R(o, !0);
			k(o), k(r);
			var c = z(r, 2), l = R(c, !0);
			k(c), k(n), B((e, n) => {
				Z(a, e), Z(s, (H(t), U(() => H(t).note || "Mock payout"))), Z(l, n);
			}, [() => (W(h()), H(t), U(() => h()(H(t).createdAt))), () => (W(m()), H(t), U(() => m()(H(t).amount)))]), X(e, n);
		}), k(t), X(e, t);
	};
	Q(ue, (e) => {
		W(i()), U(() => i().length > 0) && e(T);
	}), k(_);
	var E = z(_, 2), D = z(R(E), 6), de = z(R(D), 2);
	ma(de);
	var fe = z(de, 2), O = R(fe);
	ma(O), Le(), k(fe), Le(2), k(D);
	var pe = z(D, 2), me = (e) => {
		var t = Ps(), n = z(R(t), 2), r = R(n, !0);
		k(n);
		var i = z(n, 4), a = R(i);
		k(i), k(t), B(() => {
			Z(r, (W(s()), U(() => s().signingSecret))), Z(a, `WEBHOOK_SECRET='${(W(s()), U(() => s().signingSecret)) ?? ""}' PORT=4010 node scripts/demo-webhook-receiver.js`);
		}), X(e, t);
	};
	Q(pe, (e) => {
		W(s()), U(() => s().signingSecret) && e(me);
	}), k(E), k(g), B((e, t) => {
		Z(x, e), Z(ee, t), ha(te, (W(a()), U(() => a().accountHolder))), ha(ne, (W(a()), U(() => a().bankName))), ha(re, (W(a()), U(() => a().routingNumber))), ha(ie, (W(a()), U(() => a().accountNumber))), ha(ce, (W(o()), U(() => o().amount))), ha(le, (W(o()), U(() => o().note))), ha(de, (W(s()), U(() => s().endpointUrl))), ga(O, (W(s()), U(() => s().isActive)));
	}, [() => (W(m()), W(n()), U(() => m()(n().balance))), () => (W(m()), W(n()), U(() => m()(n().totalEarned)))]), J("input", te, (e) => c()("accountHolder", e)), J("input", ne, (e) => c()("bankName", e)), J("input", re, (e) => c()("routingNumber", e)), J("input", ie, (e) => c()("accountNumber", e)), J("submit", w, Ra(function(...e) {
		d()?.apply(this, e);
	})), J("input", ce, (e) => l()("amount", e)), J("input", le, (e) => l()("note", e)), J("submit", se, Ra(function(...e) {
		f()?.apply(this, e);
	})), J("input", de, (e) => u()("endpointUrl", e)), J("change", O, (e) => u()("isActive", e)), J("submit", D, Ra(function(...e) {
		p()?.apply(this, e);
	})), X(e, g), $e();
}
var js, Ms, Ns, Ps, Fs, Is = e((() => {
	no(), ro(), Ya(), js = /* @__PURE__ */ Y("<p class=\"seller-bank-summary\"> </p>"), Ms = /* @__PURE__ */ Y("<article class=\"seller-payout-row\"><div><p class=\"seller\"> </p> <p> </p></div> <strong> </strong></article>"), Ns = /* @__PURE__ */ Y("<div class=\"seller-payout-list\"></div>"), Ps = /* @__PURE__ */ Y("<div class=\"webhook-secret\"><p class=\"seller\">Signing secret</p> <code> </code> <p class=\"detail-description\">Receiver command:</p> <code> </code></div>"), Fs = /* @__PURE__ */ Y("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a> <a class=\"checkout-link secondary-link\" href=\"/seller/sales\">View sales</a></div></article> <article class=\"detail-card\"><p class=\"section-kicker\">Mock wallet</p> <h3>Seller funds</h3> <div class=\"seller-wallet-metrics\"><div><p>Available balance</p> <strong> </strong></div> <div><p>Total earned</p> <strong> </strong></div></div> <form class=\"stack-form bank-form\"><label for=\"bank-holder\">Account holder</label> <input id=\"bank-holder\" type=\"text\"/> <label for=\"bank-name\">Bank name</label> <input id=\"bank-name\" type=\"text\"/> <label for=\"bank-routing\">Demo routing number</label> <input id=\"bank-routing\" type=\"text\" inputmode=\"numeric\"/> <label for=\"bank-account\">Demo account number</label> <input id=\"bank-account\" type=\"text\" inputmode=\"numeric\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Save mock bank details</button></form> <!> <form class=\"stack-form payout-form\"><label for=\"payout-amount\">Payout amount</label> <input id=\"payout-amount\" type=\"number\" min=\"0.01\" step=\"0.01\"/> <label for=\"payout-note\">Note</label> <input id=\"payout-note\" type=\"text\" maxlength=\"120\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Send mock payout</button></form> <!></article> <article class=\"detail-card\"><p class=\"section-kicker\">Warehouse integration</p> <h3>Order webhook setup</h3> <p class=\"detail-description\">Send order notifications to warehouse software when buyers place orders for your products.</p> <form class=\"stack-form webhook-form\"><label for=\"webhook-url\">Receiver URL</label> <input id=\"webhook-url\" type=\"url\" placeholder=\"http://localhost:4010/seller-webhook\"/> <label class=\"checkbox-row\" for=\"webhook-active\"><input id=\"webhook-active\" type=\"checkbox\"/> Webhook active</label> <button class=\"checkout-link place-order-button\" type=\"submit\">Save webhook setup</button></form> <!></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function Ls(e, t) {
	Qe(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "onSellerImageInput", 8), c = $(t, "formatCurrency", 8);
	Ba();
	var l = Hs(), u = kn(l), d = R(u), f = R(d), p = z(R(f), 2);
	ma(p);
	var m = z(p, 4);
	Bn(m);
	var h = z(m, 4), g = z(h, 4), _ = (e) => {
		var t = Rs();
		B(() => _a(t, "src", (W(n()), U(() => n().imagePreviewUrl)))), X(e, t);
	};
	Q(g, (e) => {
		W(n()), U(() => n().imagePreviewUrl) && e(_);
	});
	var v = z(g, 4);
	ma(v);
	var y = z(v, 4);
	ma(y), Le(2), k(f), Pa(f, (e) => i(e), () => i()), k(d);
	var b = z(d, 2), x = z(R(b), 2), S = R(x, !0);
	k(x), k(b), k(u);
	var C = z(u, 2), ee = (e) => {
		X(e, zs());
	}, w = (e) => {
		var t = Vs();
		zi(t, 5, r, Ii, (e, t) => {
			var n = Bs(), r = R(n), i = z(r, 2), a = R(i), o = R(a), s = (e) => {
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
			}), k(a);
			var f = z(a, 2), p = R(f);
			k(f), k(i);
			var m = z(i, 2), h = R(m, !0);
			k(m);
			var g = z(m, 2), _ = R(g, !0);
			k(g);
			var v = z(g, 2), y = R(v), b = R(y), x = R(b, !0);
			k(b);
			var S = z(b, 2), C = R(S);
			k(S), k(y), k(v), k(n), B((e, n) => {
				_a(r, "src", (H(t), U(() => H(t).imageUrl || "/images/product-placeholder.png"))), _a(r, "alt", (H(t), U(() => H(t).name))), Z(p, `${(H(t), U(() => H(t).stock)) ?? ""} in stock`), Z(h, (H(t), U(() => H(t).name))), Z(_, (H(t), U(() => H(t).description || "No description provided."))), Z(x, e), Z(C, `Created ${n ?? ""}`);
			}, [() => (W(c()), H(t), U(() => c()(H(t).price))), () => (H(t), U(() => new Date(H(t).createdAt).toLocaleDateString()))]), X(e, n);
		}), k(t), X(e, t);
	};
	Q(C, (e) => {
		W(r()), U(() => r().length === 0) ? e(ee) : e(w, -1);
	}), B(() => {
		ha(p, (W(n()), U(() => n().name))), ha(m, (W(n()), U(() => n().description))), ha(v, (W(n()), U(() => n().price))), ha(y, (W(n()), U(() => n().stock))), Z(S, (W(r()), U(() => r().length)));
	}), J("input", p, (e) => o()("name", e)), J("input", m, (e) => o()("description", e)), J("change", h, function(...e) {
		s()?.apply(this, e);
	}), J("input", v, (e) => o()("price", e)), J("input", y, (e) => o()("stock", e)), J("submit", f, Ra(function(...e) {
		a()?.apply(this, e);
	})), X(e, l), $e();
}
var Rs, zs, Bs, Vs, Hs, Us = e((() => {
	no(), ro(), Ya(), Rs = /* @__PURE__ */ Y("<img class=\"product-image-preview\" alt=\"Selected product preview\"/>"), zs = /* @__PURE__ */ Y("<div class=\"state-card\">No listings yet.</div>"), Bs = /* @__PURE__ */ Y("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), Vs = /* @__PURE__ */ Y("<div class=\"product-grid inventory-grid\"></div>"), Hs = /* @__PURE__ */ Y("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-image\">Product image</label> <input id=\"seller-image\" type=\"file\" accept=\"image/jpeg,image/png\"/> <p class=\"field-hint\">Optional. JPEG or PNG up to 2 MB.</p> <!> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/SellerSalesView.svelte
function Ws(e, t) {
	Qe(t, !1);
	let n = $(t, "sales", 24, () => []), r = $(t, "summary", 24, () => ({
		grossSales: 0,
		unitsSold: 0,
		orderCount: 0
	})), i = $(t, "pageInfo", 8), a = $(t, "goToSellerSalesPage", 8), o = $(t, "formatCurrency", 8), s = $(t, "formatDate", 8), c = $(t, "formatPaymentMethod", 8);
	Ba();
	var l = Js(), u = kn(l), d = R(u), f = z(R(d), 2), p = R(f, !0);
	k(f), k(d);
	var m = z(d, 2), h = z(R(m), 2), g = R(h, !0);
	k(h), k(m);
	var _ = z(m, 2), v = z(R(_), 2), y = R(v, !0);
	k(v), k(_), k(u);
	var b = z(u, 2), x = (e) => {
		X(e, Gs());
	}, S = (e) => {
		var t = qs(), r = kn(t);
		zi(r, 5, n, Ii, (e, t) => {
			var n = Ks(), r = R(n), i = R(r), a = R(i);
			k(i);
			var l = z(i, 2), u = R(l, !0);
			k(l);
			var d = z(l, 2), f = R(d);
			k(d);
			var p = z(d, 2), m = R(p);
			k(p), k(r);
			var h = z(r, 2), g = R(h), _ = R(g, !0);
			k(g);
			var v = z(g, 2), y = R(v, !0);
			k(v), k(h), k(n), B((e, n, r, i) => {
				Z(a, `Order #${(H(t), U(() => H(t).order.id)) ?? ""}`), Z(u, (H(t), U(() => H(t).productName))), Z(f, `${e ?? ""} - ${n ?? ""}`), Z(m, `${(H(t), U(() => H(t).quantity)) ?? ""} unit${(H(t), U(() => H(t).quantity === 1 ? "" : "s")) ?? ""} at ${r ?? ""}`), Z(_, i), Z(y, (H(t), U(() => H(t).order.status)));
			}, [
				() => (W(s()), H(t), U(() => s()(H(t).order.createdAt))),
				() => (W(c()), H(t), U(() => c()(H(t).order.paymentMethod))),
				() => (W(o()), H(t), U(() => o()(H(t).unitPrice))),
				() => (W(o()), H(t), U(() => o()(H(t).lineTotal)))
			]), X(e, n);
		}), k(r);
		var l = z(r, 2), u = R(l), d = z(u, 2), f = R(d);
		k(d);
		var p = z(d, 2);
		k(l), B(() => {
			u.disabled = (W(i()), U(() => !i().hasPreviousPage)), Z(f, `Page ${(W(i()), U(() => i().page)) ?? ""} of ${(W(i()), U(() => i().totalPages)) ?? ""}`), p.disabled = (W(i()), U(() => !i().hasNextPage));
		}), J("click", u, () => a()(i().page - 1)), J("click", p, () => a()(i().page + 1)), X(e, t);
	};
	Q(b, (e) => {
		W(n()), U(() => n().length === 0) ? e(x) : e(S, -1);
	}), B((e) => {
		Z(p, (W(r()), U(() => r().orderCount))), Z(g, (W(r()), U(() => r().unitsSold))), Z(y, e);
	}, [() => (W(o()), W(r()), U(() => o()(r().grossSales)))]), X(e, l), $e();
}
var Gs, Ks, qs, Js, Ys = e((() => {
	no(), ro(), Ya(), Gs = /* @__PURE__ */ Y("<div class=\"state-card\">No sales have been recorded yet.</div>"), Ks = /* @__PURE__ */ Y("<article class=\"line-card seller-sales-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p> <p class=\"description\"> </p></div> <div class=\"line-actions seller-sales-actions\"><p class=\"price\"> </p> <p class=\"seller\"> </p></div></article>"), qs = /* @__PURE__ */ Y("<div class=\"list-grid seller-sales-list\"></div> <div class=\"history-pagination\"><button class=\"secondary\" type=\"button\">Previous page</button> <span> </span> <button class=\"secondary\" type=\"button\">Next page</button></div>", 1), Js = /* @__PURE__ */ Y("<div class=\"seller-sales-summary\"><aside class=\"summary-panel\"><p>Orders</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Items sold</p> <strong> </strong></aside> <aside class=\"summary-panel\"><p>Gross sales</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function Xs(e, t) {
	Qe(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "productSearch", 8, ""), i = $(t, "addToCart", 8), a = $(t, "addToComparison", 8), o = $(t, "openRandomProduct", 8), s = $(t, "onProductSearchInput", 8), c = $(t, "searchProducts", 8), l = $(t, "clearProductSearch", 8), u = $(t, "formatCurrency", 8);
	Ba();
	var d = tc(), f = kn(d), p = R(f), m = z(R(p), 2), h = R(m);
	ma(h);
	var g = z(h, 4), _ = (e) => {
		var t = Zs();
		J("click", t, function(...e) {
			l()?.apply(this, e);
		}), X(e, t);
	}, v = /* @__PURE__ */ nn(() => (W(r()), U(() => r().trim())));
	Q(g, (e) => {
		H(v) && e(_);
	}), k(m), k(p);
	var y = z(p, 2), b = R(y);
	k(y), k(f);
	var x = z(f, 2), S = (e) => {
		var t = Qs(), n = R(t, !0);
		k(t), B((e) => Z(n, e), [() => (W(r()), U(() => r().trim() ? "No products match your search." : "No listed products are available right now."))]), X(e, t);
	}, C = (e) => {
		var t = ec();
		zi(t, 5, n, Ii, (e, t) => {
			var n = $s(), r = R(n), o = z(r, 2), s = R(o), c = R(s, !0);
			k(s);
			var l = z(s, 2), d = R(l);
			k(l), k(o);
			var f = z(o, 2), p = R(f, !0);
			k(f);
			var m = z(f, 2), h = R(m, !0);
			k(m);
			var g = z(m, 2), _ = R(g), v = R(_), y = R(v, !0);
			k(v);
			var b = z(v, 2);
			k(_);
			var x = z(_, 2), S = R(x), C = z(S, 2);
			k(x), k(g), k(n), B((e) => {
				_a(r, "src", (H(t), U(() => H(t).imageUrl || "/images/product-placeholder.png"))), _a(r, "alt", (H(t), U(() => H(t).name))), Z(c, (H(t), U(() => H(t).seller.username))), Z(d, `${(H(t), U(() => H(t).stock)) ?? ""} in stock`), Z(p, (H(t), U(() => H(t).name))), Z(h, (H(t), U(() => H(t).description || "No description provided."))), Z(y, e), _a(b, "href", (H(t), U(() => `/buyer/products/${H(t).id}`)));
			}, [() => (W(u()), H(t), U(() => u()(H(t).price)))]), J("click", S, () => i()(H(t).id)), J("click", C, () => a()(H(t).id)), X(e, n);
		}), k(t), X(e, t);
	};
	Q(x, (e) => {
		W(n()), U(() => n().length === 0) ? e(S) : e(C, -1);
	}), B(() => ha(h, r())), J("input", h, function(...e) {
		s()?.apply(this, e);
	}), J("submit", p, Ra(function(...e) {
		c()?.apply(this, e);
	})), J("click", b, function(...e) {
		o()?.apply(this, e);
	}), X(e, d), $e();
}
var Zs, Qs, $s, ec, tc, nc = e((() => {
	no(), ro(), Ya(), Zs = /* @__PURE__ */ Y("<button class=\"secondary\" type=\"button\">Clear</button>"), Qs = /* @__PURE__ */ Y("<div class=\"state-card\"> </div>"), $s = /* @__PURE__ */ Y("<article class=\"product-card\"><img class=\"product-card-image\" loading=\"lazy\"/> <div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), ec = /* @__PURE__ */ Y("<div class=\"product-grid\"></div>"), tc = /* @__PURE__ */ Y("<div class=\"storefront-tools\"><form class=\"storefront-search\"><label for=\"product-search\">Search products</label> <div class=\"storefront-search-row\"><input id=\"product-search\" type=\"search\" placeholder=\"Search by product name or description\"/> <button type=\"submit\">Search</button> <!></div></form> <div class=\"storefront-actions\"><button class=\"checkout-link random-product-button\" type=\"button\">Random product</button></div></div> <!>", 1);
}));
//#endregion
//#region frontend/src/App.svelte
function rc(e, t) {
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
	}), ee = /* @__PURE__ */ I({
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
	}), te = /* @__PURE__ */ I(), ne = /* @__PURE__ */ I([]), re = /* @__PURE__ */ I([]), ie = /* @__PURE__ */ I([]), ae = /* @__PURE__ */ I([]), oe = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), se = /* @__PURE__ */ I(""), ce = /* @__PURE__ */ I({
		name: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postalCode: "",
		country: "US"
	}), le = /* @__PURE__ */ I("accessible-blue-gold"), ue = /* @__PURE__ */ I(!1), T = /* @__PURE__ */ I(!0), E = /* @__PURE__ */ I(""), D = /* @__PURE__ */ I(""), de = /* @__PURE__ */ I([]), fe = /* @__PURE__ */ new Map();
	async function O(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function pe(e) {
		L(le, i.has(e) ? e : "accessible-blue-gold"), typeof document < "u" && (document.documentElement.dataset.theme = H(le)), typeof localStorage < "u" && localStorage.setItem("ram-theme", H(le));
	}
	function me() {
		L(ue, !H(ue));
	}
	function he(e) {
		pe(e), L(ue, !1);
	}
	function ge(e, t) {
		return {
			...e,
			...t
		};
	}
	function _e(e) {
		L(ne, H(ne).filter((t) => t.id !== e.id)), L(ie, H(ie).map((t) => t.id === e.id ? ge(t, e) : t));
	}
	function ve(e) {
		L(re, H(re).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function ye(e = !1) {
		L(T, !0), L(E, ""), e && L(D, "");
		try {
			let e = H(c).trim();
			L(s, await O(e ? `/api/buyer/products?search=${encodeURIComponent(e)}` : "/api/buyer/products"));
		} catch (e) {
			L(E, e.message || "Could not load products.");
		} finally {
			L(T, !1);
		}
	}
	async function be() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(l, await O(`/api/buyer/products/${ao()}`));
		} catch (e) {
			L(E, e.message || "Could not load product.");
		} finally {
			L(T, !1);
		}
	}
	async function xe() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(d, await O("/api/buyer/cart"));
		} catch (e) {
			L(E, e.message || "Could not load cart.");
		} finally {
			L(T, !1);
		}
	}
	async function Se() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(u, (await O("/api/buyer/compare")).items || []);
		} catch (e) {
			L(E, e.message || "Could not load comparison list.");
		} finally {
			L(T, !1);
		}
	}
	async function Ce() {
		L(T, !0), L(E, "");
		try {
			L(h, await O("/api/seller/products"));
		} catch (e) {
			L(E, e.message || "Could not load seller inventory.");
		} finally {
			L(T, !1);
		}
	}
	function we(e) {
		L(y, {
			balance: e.wallet?.balance || 0,
			totalEarned: e.wallet?.totalEarned || 0
		}), L(b, e.bankAccount || null), L(x, e.payouts || []);
	}
	async function Te() {
		L(T, !0), L(E, "");
		try {
			we(await O("/api/seller/wallet"));
		} catch (e) {
			L(E, e.message || "Could not load seller wallet.");
		} finally {
			L(T, !1);
		}
	}
	async function Ee() {
		L(T, !0), L(E, "");
		try {
			let [e, t] = await Promise.all([O("/api/seller/webhook"), O("/api/seller/wallet")]);
			L(ee, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), we(t);
		} catch (e) {
			L(E, e.message || "Could not load seller dashboard.");
		} finally {
			L(T, !1);
		}
	}
	async function De(e = 1) {
		L(T, !0), L(E, ""), L(D, "");
		try {
			let t = await O(`/api/seller/sales?page=${e}`);
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
			L(E, e.message || "Could not load seller sales.");
		} finally {
			L(T, !1);
		}
	}
	async function Oe() {
		L(T, !0), L(E, "");
		try {
			L(ae, await O("/api/admin/audit-logs"));
		} catch (e) {
			L(E, e.message || "Could not load audit logs.");
		} finally {
			L(T, !1);
		}
	}
	async function ke(e = 1, t = H(se)) {
		L(T, !0), L(E, "");
		try {
			let [n, r, i] = await Promise.all([
				O("/api/admin/pending-users"),
				O("/api/admin/products"),
				O(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			L(ne, n), L(re, r), L(ie, i.users), L(oe, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), L(se, i.search || "");
		} catch (e) {
			L(E, e.message || "Could not load moderation data.");
		} finally {
			L(T, !1);
		}
	}
	async function Ae() {
		L(T, !0), L(E, ""), L(D, "");
		try {
			L(f, await O(`/api/buyer/orders/${oo()}`)), L(D, "Your order has been placed successfully.");
		} catch (e) {
			L(E, e.message || "Could not load order confirmation.");
		} finally {
			L(T, !1);
		}
	}
	async function je(e = 1) {
		L(T, !0), L(E, ""), L(D, "");
		try {
			let t = await O(`/api/buyer/orders?page=${e}`);
			L(p, t.orders || []), L(m, {
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
	async function Me() {
		if (L(a, so()), L(o, co()), H(o) === "admin-home") {
			L(T, !1), L(E, "");
			return;
		}
		if (H(o) === "seller-home") {
			await Ee();
			return;
		}
		if (H(o) === "admin-moderation") {
			await ke();
			return;
		}
		if (H(o) === "admin-audit") {
			await Oe();
			return;
		}
		if (H(o) === "seller-inventory") {
			await Ce();
			return;
		}
		if (H(o) === "seller-sales") {
			await De();
			return;
		}
		if (H(o) === "cart" || H(o) === "checkout") {
			await xe();
			return;
		}
		if (H(o) === "compare") {
			await Se();
			return;
		}
		if (H(o) === "confirmation") {
			await Ae();
			return;
		}
		if (H(o) === "orders") {
			await je();
			return;
		}
		if (H(o) === "product") {
			await be();
			return;
		}
		await ye();
	}
	async function Ne(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Fr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function Pe(e, t) {
		L(w, {
			...H(w),
			[e]: t.currentTarget.value
		});
	}
	function Fe(e, t) {
		L(ee, {
			...H(ee),
			[e]: e === "isActive" ? t.currentTarget.checked : t.currentTarget.value
		});
	}
	function Ie(e, t) {
		L(S, {
			...H(S),
			[e]: t.currentTarget.value
		});
	}
	function Le(e, t) {
		L(C, {
			...H(C),
			[e]: t.currentTarget.value
		});
	}
	function Re(e) {
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
	function ze(e, t) {
		L(ce, {
			...H(ce),
			[e]: t.currentTarget.value
		});
	}
	function A(e) {
		L(se, e.currentTarget.value);
	}
	async function j() {
		L(D, "");
		let e = String(H(w).price).trim(), t = String(H(w).stock).trim(), n = Number(e), r = Number(t);
		if (H(te)?.reportValidity()) {
			if (e === "" || !Number.isFinite(n)) {
				L(D, "Enter a valid number for price.");
				return;
			}
			if (t === "" || !Number.isInteger(r)) {
				L(D, "Enter a whole number for stock.");
				return;
			}
			try {
				await O("/api/seller/products", {
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
				}), H(te)?.reset(), L(D, "Listing submitted for admin approval."), await Ce();
			} catch (e) {
				L(D, e.message || "Could not create listing.");
			}
		}
	}
	async function M() {
		L(D, "");
		try {
			let e = await O("/api/seller/webhook", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					endpointUrl: H(ee).endpointUrl,
					isActive: H(ee).isActive
				})
			});
			L(ee, {
				endpointUrl: e.endpointUrl || "",
				signingSecret: e.signingSecret || "",
				isActive: !!e.isActive
			}), L(D, "Webhook setup saved.");
		} catch (e) {
			L(D, e.message || "Could not save webhook setup.");
		}
	}
	async function Be() {
		L(D, "");
		try {
			L(b, await O("/api/seller/wallet/bank-account", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(H(S))
			})), L(S, {
				accountHolder: "",
				bankName: "",
				routingNumber: "",
				accountNumber: ""
			}), L(D, "Mock bank details saved.");
		} catch (e) {
			L(D, e.message || "Could not save mock bank details.");
		}
	}
	async function Ve() {
		L(D, "");
		try {
			let e = await O("/api/seller/wallet/payouts", {
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
			}), L(D, "Mock payout sent."), await Te();
		} catch (e) {
			L(D, e.message || "Could not send mock payout.");
		}
	}
	async function He(e) {
		L(D, "");
		try {
			let t = await O(`/api/admin/approve-user/${e}`, { method: "POST" });
			L(D, "User approved."), _e(t);
		} catch (e) {
			L(D, e.message || "Could not approve user.");
		}
	}
	async function Ue(e) {
		L(D, "");
		try {
			let t = await O(`/api/admin/block-user/${e}`, { method: "POST" });
			L(D, "User blocked."), _e(t);
		} catch (e) {
			L(D, e.message || "Could not block user.");
		}
	}
	async function We(e) {
		L(D, "");
		try {
			let t = await O(`/api/admin/ban-user/${e}`, { method: "POST" });
			L(D, "User banned."), _e(t);
		} catch (e) {
			L(D, e.message || "Could not ban user.");
		}
	}
	async function Ge(e) {
		L(D, "");
		try {
			let t = await O(`/api/admin/products/${e}/approve`, { method: "POST" });
			L(D, "Product approved."), ve(t);
		} catch (e) {
			L(D, e.message || "Could not approve product.");
		}
	}
	async function Ke(e) {
		L(D, "");
		try {
			let t = await O(`/api/admin/products/${e}/reject`, { method: "POST" });
			L(D, "Product rejected."), ve(t);
		} catch (e) {
			L(D, e.message || "Could not reject product.");
		}
	}
	async function qe(e) {
		L(D, "");
		try {
			let t = await O(`/api/admin/products/${e}/delist`, { method: "POST" });
			L(D, "Product delisted."), ve(t);
		} catch (e) {
			L(D, e.message || "Could not delist product.");
		}
	}
	async function Je() {
		await Ne(() => ke(1, H(se)));
	}
	async function Ye() {
		L(se, ""), await Ne(() => ke(1, ""));
	}
	async function Xe(e) {
		e < 1 || e > H(oe).totalPages || await Ne(() => ke(e, H(oe).search));
	}
	function Ze(e) {
		L(c, e.target.value);
	}
	async function et() {
		await Ne(() => ye(!0));
	}
	async function N() {
		L(c, ""), await Ne(() => ye(!0));
	}
	async function tt(e) {
		e < 1 || e > H(m).totalPages || await Ne(() => je(e));
	}
	async function nt(e) {
		e < 1 || e > H(v).totalPages || await Ne(() => De(e));
	}
	function rt(e, t = "success") {
		let n = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
		L(de, [...H(de), {
			id: n,
			message: e,
			type: t
		}]);
		let r = setTimeout(() => {
			L(de, H(de).filter((e) => e.id !== n)), fe.delete(n);
		}, 3200);
		fe.set(n, r);
	}
	async function it(e) {
		L(D, "");
		try {
			await O("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(D, "Item added to cart."), rt("Item added to cart.");
		} catch (e) {
			L(D, e.message || "Could not add item to cart."), rt(H(D), "error");
		}
	}
	async function at() {
		L(D, "");
		try {
			let e = await O("/api/buyer/random_access");
			typeof window < "u" && (window.location.href = `/buyer/products/${e.id}`);
		} catch (e) {
			L(D, e.message || "Could not load a random product.");
		}
	}
	async function ot(e) {
		L(D, "");
		try {
			await O("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(D, "Item added to comparison list.");
		} catch (e) {
			L(D, e.message || "Could not add item to list.");
		}
	}
	async function st(e) {
		L(D, "");
		try {
			await O(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(D, "Item removed from cart."), await xe();
		} catch (e) {
			L(D, e.message || "Could not remove item.");
		}
	}
	async function ct(e) {
		L(D, "");
		try {
			await O(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(D, "Item removed from comparison list."), await Se();
		} catch (e) {
			L(D, e.message || "Could not remove item.");
		}
	}
	async function lt() {
		L(D, "");
		try {
			let e = await O("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					paymentMethod: "demo_card",
					shippingAddress: H(ce)
				})
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			L(D, e.message || "Checkout failed."), await xe();
		}
	}
	async function P() {
		L(D, "");
		try {
			await O("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(D, e.message || "Could not log out.");
		}
	}
	Za(async () => {
		pe((typeof localStorage > "u" ? null : localStorage.getItem("ram-theme")) || "accessible-blue-gold"), await Me();
	}), Qa(() => {
		fe.forEach((e) => clearTimeout(e)), fe.clear();
	}), nr(() => H(o), () => {
		L(n, lo(H(o)));
	}), rr(), Ba();
	var ut = fc();
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
		onLogout: P
	});
	var ft = z(dt, 2), pt = R(ft);
	Oo(pt, {
		get kicker() {
			return H(n), U(() => H(n).kicker);
		},
		get heading() {
			return H(n), U(() => H(n).heading);
		},
		onRefresh: Me
	});
	var mt = z(pt, 2), ht = (e) => {
		X(e, ic());
	}, gt = (e) => {
		var t = ac(), n = R(t, !0);
		k(t), B(() => Z(n, H(E))), X(e, t);
	}, _t = (e) => {
		Io(e, {});
	}, vt = (e) => {
		zo(e, {
			get adminPendingUsers() {
				return H(ne);
			},
			get adminProducts() {
				return H(re);
			},
			get adminUsers() {
				return H(ie);
			},
			get adminUsersPageInfo() {
				return H(oe);
			},
			get adminUserSearch() {
				return H(se);
			},
			onAdminUserSearchInput: A,
			approveUser: He,
			blockUser: Ue,
			banUser: We,
			approveProduct: Ge,
			rejectProduct: Ke,
			delistProduct: qe,
			searchAdminUsers: Je,
			clearAdminUserSearch: Ye,
			goToAdminUsersPage: Xe,
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
				return H(ae);
			},
			get formatActionType() {
				return bo;
			},
			get formatDate() {
				return ho;
			}
		});
	}, bt = (e) => {
		As(e, {
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
				return H(ee);
			},
			onSellerBankInput: Ie,
			onSellerPayoutInput: Le,
			onSellerWebhookInput: Fe,
			saveSellerBankAccount: Be,
			createSellerPayout: Ve,
			saveSellerWebhook: M,
			get formatCurrency() {
				return mo;
			},
			get formatDate() {
				return ho;
			}
		});
	}, xt = (e) => {
		Ls(e, {
			get sellerForm() {
				return H(w);
			},
			get sellerProducts() {
				return H(h);
			},
			createSellerListing: j,
			onSellerFormInput: Pe,
			onSellerImageInput: Re,
			get formatCurrency() {
				return mo;
			},
			get sellerListingForm() {
				return H(te);
			},
			set sellerListingForm(e) {
				L(te, e);
			},
			$$legacy: !0
		});
	}, St = (e) => {
		Ws(e, {
			get sales() {
				return H(g);
			},
			get summary() {
				return H(_);
			},
			get pageInfo() {
				return H(v);
			},
			goToSellerSalesPage: nt,
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
		Ds(e, {
			get product() {
				return H(l);
			},
			addToCart: it,
			addToComparison: ot,
			get formatCurrency() {
				return mo;
			}
		});
	}, wt = (e) => {
		es(e, {
			get cart() {
				return H(d);
			},
			removeFromCart: st,
			get formatCurrency() {
				return mo;
			}
		});
	}, Tt = (e) => {
		os(e, {
			get cart() {
				return H(d);
			},
			placeOrder: lt,
			get formatCurrency() {
				return mo;
			},
			get shippingAddress() {
				return H(ce);
			},
			onShippingInput: ze
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
		Ss(e, {
			get orders() {
				return H(p);
			},
			get pageInfo() {
				return H(m);
			},
			goToOrderHistoryPage: tt,
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
			addToCart: it,
			removeFromCompare: ct,
			get formatCurrency() {
				return mo;
			},
			get truncate() {
				return _o;
			}
		});
	}, kt = (e) => {
		Xs(e, {
			get products() {
				return H(s);
			},
			get productSearch() {
				return H(c);
			},
			addToCart: it,
			addToComparison: ot,
			openRandomProduct: at,
			onProductSearchInput: Ze,
			searchProducts: et,
			clearProductSearch: N,
			get formatCurrency() {
				return mo;
			}
		});
	};
	Q(mt, (e) => {
		H(T) ? e(ht) : H(E) ? e(gt, 1) : H(o) === "admin-home" ? e(_t, 2) : H(o) === "admin-moderation" ? e(vt, 3) : H(o) === "admin-audit" ? e(yt, 4) : H(o) === "seller-home" ? e(bt, 5) : H(o) === "seller-inventory" ? e(xt, 6) : H(o) === "seller-sales" ? e(St, 7) : H(o) === "product" && H(l) ? e(Ct, 8) : H(o) === "cart" ? e(wt, 9) : H(o) === "checkout" ? e(Tt, 10) : H(o) === "confirmation" && H(f) ? e(Et, 11) : H(o) === "orders" ? e(Dt, 12) : H(o) === "compare" ? e(Ot, 13) : e(kt, -1);
	});
	var At = z(mt, 2), jt = (e) => {
		var t = oc(), n = R(t, !0);
		k(t), B(() => Z(n, H(D))), X(e, t);
	};
	Q(At, (e) => {
		H(D) && e(jt);
	}), k(ft);
	var F = z(ft, 2), Mt = (e) => {
		var t = cc();
		zi(t, 5, () => H(de), (e) => e.id, (e, t) => {
			var n = sc();
			let r;
			var i = R(n, !0);
			k(n), B(() => {
				r = ua(n, 1, "cart-toast", null, r, { error: H(t).type === "error" }), Z(i, (H(t), U(() => H(t).message)));
			}), X(e, n);
		}), k(t), X(e, t);
	};
	Q(F, (e) => {
		H(de), U(() => H(de).length > 0) && e(Mt);
	});
	var Nt = z(F, 2), Pt = R(Nt), Ft = (e) => {
		var t = dc();
		zi(t, 5, () => r, Ii, (e, t) => {
			var n = uc();
			let r;
			var i = R(n), a = R(i, !0);
			k(i);
			var o = z(i, 2), s = (e) => {
				X(e, lc());
			};
			Q(o, (e) => {
				H(le), H(t), U(() => H(le) === H(t).value) && e(s);
			}), k(n), B(() => {
				r = ua(n, 1, "theme-dock-option", null, r, { "active-theme": H(le) === H(t).value }), _a(n, "aria-checked", (H(le), H(t), U(() => H(le) === H(t).value))), Z(a, (H(t), U(() => H(t).label)));
			}), J("click", n, () => he(H(t).value)), X(e, n);
		}), k(t), X(e, t);
	};
	Q(Pt, (e) => {
		H(ue) && e(Ft);
	});
	var It = z(Pt, 2);
	k(Nt), k(ut), B(() => {
		_a(ut, "data-page", H(o)), _a(It, "aria-expanded", H(ue));
	}), J("click", It, me), X(e, ut), $e();
}
var ic, ac, oc, sc, cc, lc, uc, dc, fc, pc = e((() => {
	no(), ro(), Ya(), eo(), Do(), Ao(), Fo(), Ro(), $o(), as(), ds(), gs(), xs(), Es(), ks(), Is(), Us(), Ys(), nc(), Co(), ic = /* @__PURE__ */ Y("<div class=\"state-card\">Loading...</div>"), ac = /* @__PURE__ */ Y("<div class=\"state-card error\"> </div>"), oc = /* @__PURE__ */ Y("<p class=\"status-banner\"> </p>"), sc = /* @__PURE__ */ Y("<div role=\"status\"> </div>"), cc = /* @__PURE__ */ Y("<div class=\"cart-toast-stack\" aria-live=\"polite\" aria-label=\"Cart notifications\"></div>"), lc = /* @__PURE__ */ Y("<span class=\"theme-dock-check\">Current</span>"), uc = /* @__PURE__ */ Y("<button type=\"button\" role=\"menuitemradio\"><span> </span> <!></button>"), dc = /* @__PURE__ */ Y("<div class=\"theme-dock-menu\" role=\"menu\" aria-label=\"Theme picker\"></div>"), fc = /* @__PURE__ */ Y("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section> <!> <div class=\"theme-dock\"><!> <button class=\"theme-dock-toggle\" type=\"button\" aria-haspopup=\"menu\">Theme</button></div></div>");
})), mc = e((() => {})), hc = /* @__PURE__ */ t((() => {
	eo(), pc(), mc(), vi(rc, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default hc();
