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
})), b, x, S, ee, te, ne, re, ie, ae, oe, se, ce, le, ue, de, fe, pe, me, he, ge, C = e((() => {
	b = 1024, x = 2048, S = 4096, ee = 8192, te = 16384, ne = 32768, re = 1 << 25, ie = 65536, ae = 1 << 18, oe = 1 << 19, se = 1 << 20, ce = 1 << 25, le = 65536, ue = 1 << 21, de = 1 << 22, fe = 1 << 23, pe = Symbol("$state"), me = Symbol(""), he = new class extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}(), ge = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
}));
function _e(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ve = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ye() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function be(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function xe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function we() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Te() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
var w = e((() => {
	r(), ve();
})), ke, T, Ae, je = e((() => {
	ke = {}, T = Symbol(), Ae = "http://www.w3.org/1999/xhtml";
}));
function Me(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ne() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
var Pe = e((() => {
	r();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
function Fe(e) {
	O = e;
}
function E(e) {
	if (e === null) throw Me(), ke;
	return k = e;
}
function Ie() {
	return E(/* @__PURE__ */ yn(k));
}
function D(e) {
	if (O) {
		if (/* @__PURE__ */ yn(k) !== null) throw Me(), ke;
		k = e;
	}
}
function Le(e = 1) {
	if (O) {
		for (var t = e, n = k; t--;) n = /* @__PURE__ */ yn(n);
		k = n;
	}
}
function Re(e = !0) {
	for (var t = 0, n = k;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ yn(n);
		e && n.remove(), n = i;
	}
}
function ze(e) {
	if (!e || e.nodeType !== 8) throw Me(), ke;
	return e.data;
}
var O, k, A = e((() => {
	C(), je(), Pe(), H(), O = !1;
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
	Je(), C(), W(), X();
})), Xe = e((() => {
	r(), y(), ve();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
function Ze(e) {
	j = e;
}
function Qe(e, t = !1, n) {
	j = {
		p: j,
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
	var t = j, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) zn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, j = t.p, e ?? {};
}
function et() {
	return !Ke || j !== null && j.l === null;
}
var j, M = e((() => {
	r(), w(), X(), W(), qe(), C(), j = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function tt() {
	var e = rt;
	rt = [], a(e);
}
function nt(e) {
	if (rt.length === 0 && !Ot) {
		var t = rt;
		queueMicrotask(() => {
			t === rt && tt();
		});
	}
	rt.push(e);
}
var rt, it = e((() => {
	y(), I(), rt = [];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/error-handling.js
function at(e) {
	var t = q;
	if (t === null) return K.f |= fe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	ot(e, t);
}
function ot(e, t) {
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
var st = e((() => {
	r(), je(), H(), C(), y(), X();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function N(e, t) {
	e.f = e.f & lt | t;
}
function ct(e) {
	e.f & 512 || e.deps === null ? N(e, b) : N(e, S);
}
var lt, ut = e((() => {
	C(), lt = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function dt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= le, dt(t.deps));
}
function ft(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), dt(e.deps), N(e, b);
}
var pt = e((() => {
	C(), ut();
})), mt = e((() => {
	X(), y();
})), ht = e((() => {
	y(), mt();
})), gt, _t = e((() => {
	mt(), ht(), y(), X(), W(), R(), gt = !1;
})), vt = e((() => {
	C(), Je(), X();
}));
function yt() {
	try {
		we();
	} catch (e) {
		ot(e, Dt);
	}
}
function bt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && pr(r) && (Ft = /* @__PURE__ */ new Set(), vr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qn(r), Ft?.size > 0)) {
				fn.clear();
				for (let e of Ft) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Ft.has(n) && (Ft.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || vr(n);
					}
				}
				Ft.clear();
			}
		}
		Ft = null;
	}
}
function xt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? xt(i, t, n, r) : e & 4194320 && !(e & 2048) && St(i, t, r) && (N(i, x), Ct(i));
	}
}
function St(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && St(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Ct(e) {
	P.schedule(e);
}
function wt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), N(e, b);
		for (var n = e.first; n !== null;) wt(n, t), n = n.next;
	}
}
function Tt(e) {
	N(e, b);
	for (var t = e.first; t !== null;) Tt(t), t = t.next;
}
var Et, P, F, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, I = e((() => {
	C(), qe(), y(), X(), w(), it(), r(), st(), R(), W(), pt(), je(), ut(), _t(), Xe(), vt(), Et = /* @__PURE__ */ new Set(), P = null, F = null, Dt = null, Ot = !1, kt = !1, At = null, jt = null, Mt = 0, Nt = 1, Pt = class e {
		id = Nt++;
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
				for (var n of t.d) N(n, x), this.schedule(n);
				for (n of t.m) N(n, S), this.schedule(n);
			}
		}
		#m() {
			if (Mt++ > 1e3 && (Et.delete(this), yt()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), N(e, x), this.schedule(e);
				for (let e of this.#c) N(e, S), this.schedule(e);
			}
			let t = this.#a;
			this.#a = [], this.apply();
			var n = At = [], r = [], i = jt = [];
			for (let e of t) try {
				this.#h(e, n, r);
			} catch (t) {
				throw Tt(e), t;
			}
			if (P = null, i.length > 0) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (At = null, jt = null, this.#f() || this.#p()) {
				this.#g(r), this.#g(n);
				for (let [e, t] of this.#l) wt(e, t);
			} else {
				this.#n.size === 0 && Et.delete(this), this.#s.clear(), this.#c.clear();
				for (let e of this.#e) e(this);
				this.#e.clear(), bt(r), bt(n), this.#i?.resolve();
			}
			var o = P;
			if (this.#a.length > 0) {
				let e = o ??= this;
				e.#a.push(...this.#a.filter((t) => !e.#a.includes(t)));
			}
			o !== null && (Et.add(o), o.#m()), Et.has(this) || this.#_();
		}
		#h(e, t, n) {
			e.f ^= b;
			for (var r = e.first; r !== null;) {
				var i = r.f, a = (i & 96) != 0;
				if (!(a && i & 1024 || i & 8192 || this.#l.has(r)) && r.fn !== null) {
					a ? r.f ^= b : i & 4 ? t.push(r) : Ge && i & 16777224 ? n.push(r) : pr(r) && (i & 16 && this.#c.add(r), vr(r));
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
			for (var t = 0; t < e.length; t += 1) ft(e[t], this.#s, this.#c);
		}
		capture(e, t, n = !1) {
			t !== T && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), F?.set(e, e.v));
		}
		activate() {
			P = this;
		}
		deactivate() {
			P = null, F = null;
		}
		flush() {
			try {
				kt = !0, P = this, this.#m();
			} finally {
				Mt = 0, Dt = null, At = null, jt = null, kt = !1, P = null, F = null, fn.clear();
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear(), Et.delete(this);
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		#_() {
			for (let l of Et) {
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
					for (var o of t) xt(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
					for (let e of this.#o) !(e.f & 155648) && St(e, s, a) && (e.f & 4194320 ? (N(e, x), l.schedule(e)) : l.#s.add(e));
					if (l.#a.length > 0) {
						l.apply();
						for (var c of l.#a) l.#h(c, [], []);
						l.#a = [];
					}
					l.deactivate();
				}
			}
			for (let e of Et) e.#d.has(this) && (e.#d.delete(this), e.#d.size === 0 && !e.#f() && (e.activate(), e.#m()));
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
			if (P === null) {
				let t = P = new e();
				kt || (Et.add(P), Ot || nt(() => {
					P === t && t.flush();
				}));
			}
			return P;
		}
		apply() {
			if (!Ge || !this.is_fork && Et.size === 1) {
				F = null;
				return;
			}
			F = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) F.set(e, t);
			for (let n of Et) if (!(n === this || n.is_fork)) {
				var e = !1, t = !1;
				if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
				if (e && t) this.#d.add(n);
				else for (let [e, t] of n.previous) F.has(e) || F.set(e, t);
			}
		}
		schedule(e) {
			if (Dt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (At !== null && t === q && (Ge || (K === null || !(K.f & 2)) && !gt)) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= b;
				}
			}
			this.#a.push(t);
		}
	}, Ft = null;
}));
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function It(e) {
	let t = 0, n = rn(0), r;
	return () => {
		In() && (G(n), Un(() => (t === 0 && (r = xr(() => e(() => ln(n)))), t += 1, () => {
			nt(() => {
				--t, t === 0 && (r?.(), r = void 0, ln(n));
			});
		})));
	};
}
var Lt = e((() => {
	X(), W(), R(), Ye(), r(), it();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Rt(e, t, n, r) {
	new Bt(e, t, n, r);
}
var zt, Bt, Vt = e((() => {
	C(), je(), M(), st(), W(), X(), A(), it(), w(), Pe(), r(), I(), R(), Ye(), Lt(), H(), pt(), ut(), zt = ie | oe, Bt = class {
		parent;
		is_pending = !1;
		transform_error;
		#e;
		#t = O ? k : null;
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
		#h = It(() => (this.#m = rn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = q;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Kn(() => {
				if (O) {
					let e = this.#t;
					Ie();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, zt), O && (this.#e = k);
		}
		#g() {
			try {
				this.#a = qn(() => this.#r(this.#e));
			} catch (e) {
				this.error(e);
			}
		}
		#_(e) {
			let t = this.#n.failed;
			t && (this.#s = qn(() => {
				t(this.#e, () => e, () => () => {});
			}));
		}
		#v() {
			let e = this.#n.pending;
			e && (this.is_pending = !0, this.#o = qn(() => e(this.#e)), nt(() => {
				var e = this.#c = document.createDocumentFragment(), t = z();
				e.append(t), this.#a = this.#x(() => qn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, $n(this.#o, () => {
					this.#o = null;
				}), this.#b(P));
			}));
		}
		#y() {
			try {
				if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = qn(() => {
					this.#r(this.#e);
				}), this.#u > 0) {
					var e = this.#c = document.createDocumentFragment();
					rr(this.#a, e);
					let t = this.#n.pending;
					this.#o = qn(() => t(this.#e));
				} else this.#b(P);
			} catch (e) {
				this.error(e);
			}
		}
		#b(e) {
			this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
		}
		defer_effect(e) {
			ft(e, this.#f, this.#p);
		}
		is_rendered() {
			return !this.is_pending && (!this.parent || this.parent.is_rendered());
		}
		has_pending_snippet() {
			return !!this.#n.pending;
		}
		#x(e) {
			var t = q, n = K, r = j;
			cr(this.#i), sr(this.#i), Ze(this.#i.ctx);
			try {
				return Pt.ensure(), e();
			} catch (e) {
				return at(e), null;
			} finally {
				cr(t), sr(n), Ze(r);
			}
		}
		#S(e, t) {
			if (!this.has_pending_snippet()) {
				this.parent && this.parent.#S(e, t);
				return;
			}
			this.#u += e, this.#u === 0 && (this.#b(t), this.#o && $n(this.#o, () => {
				this.#o = null;
			}), this.#c &&= (this.#e.before(this.#c), null));
		}
		update_pending_count(e, t) {
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, nt(() => {
				this.#d = !1, this.#m && sn(this.#m, this.#l);
			}));
		}
		get_effect_pending() {
			return this.#h(), G(this.#m);
		}
		error(e) {
			var t = this.#n.onerror;
			let n = this.#n.failed;
			if (!t && !n) throw e;
			this.#a &&= (U(this.#a), null), this.#o &&= (U(this.#o), null), this.#s &&= (U(this.#s), null), O && (E(this.#t), Le(), E(Re()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Ne();
					return;
				}
				r = !0, i && Oe(), this.#s !== null && $n(this.#s, () => {
					this.#s = null;
				}), this.#x(() => {
					this.#y();
				});
			}, o = (e) => {
				try {
					i = !0, t?.(e, a), i = !1;
				} catch (e) {
					ot(e, this.#i && this.#i.parent);
				}
				n && (this.#s = this.#x(() => {
					try {
						return qn(() => {
							var t = q;
							t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
						});
					} catch (e) {
						return ot(e, this.#i.parent), null;
					}
				}));
			};
			nt(() => {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					ot(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => ot(e, this.#i && this.#i.parent)) : o(t);
			});
		}
	};
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Ht(e, t, n, r) {
	let i = et() ? qt : Yt;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = q, s = Ut(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || ot(e, o);
		}
		Wt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Gt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ Jt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => ot(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), Wt();
	}) : d();
}
function Ut() {
	var e = q, t = K, n = j, r = P;
	return function(i = !0) {
		cr(e), sr(t), Ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Wt(e = !0) {
	cr(null), sr(null), Ze(null), e && P?.deactivate();
}
function Gt() {
	var e = q, t = e.b, n = P, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var Kt = e((() => {
	C(), r(), M(), Vt(), st(), X(), I(), nn(), W();
}));
/* @__NO_SIDE_EFFECTS__ */
function qt(e) {
	var t = 2 | x, n = K !== null && K.f & 2 ? K : null;
	return q !== null && (q.f |= oe), {
		ctx: j,
		deps: null,
		effects: null,
		equals: Be,
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
function Jt(e, t, n) {
	let r = q;
	r === null && ye();
	var i = void 0, a = rn(T), s = !K, c = /* @__PURE__ */ new Map();
	return Hn(() => {
		var t = q, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(Wt);
		} catch (e) {
			n.reject(e), Wt();
		}
		var l = P;
		if (s) {
			if (t.f & 32768) var u = Gt();
			if (r.b.is_rendered()) c.get(l)?.reject(he), c.delete(l);
			else {
				for (let e of c.values()) e.reject(he);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === he), !(n === he || t.f & 16384)) {
				if (l.activate(), n) a.f |= fe, sn(a, n);
				else {
					a.f & 8388608 && (a.f ^= fe), sn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(he);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Ln(() => {
		for (let e of c.values()) e.reject(he);
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
function Yt(e) {
	let t = /* @__PURE__ */ qt(e);
	return t.equals = He, t;
}
function Xt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) U(t[n]);
	}
}
function Zt(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function Qt(e) {
	var t, n = q;
	cr(Zt(e));
	try {
		e.f &= ~le, Xt(e), t = hr(e);
	} finally {
		cr(n);
	}
	return t;
}
function $t(e) {
	var t = e.v, n = Qt(e);
	if (!e.equals(n) && (e.wv = fr(), (!P?.is_fork || e.deps === null) && (e.v = n, P?.capture(e, t, !0), e.deps === null))) {
		N(e, b);
		return;
	}
	Tr || (F === null ? ct(e) : (In() || P?.is_fork) && F.set(e, n));
}
function en(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(he), t.teardown = v, t.ac = null, _r(t, 0), Yn(t));
}
function tn(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && vr(t);
}
var nn = e((() => {
	r(), C(), X(), Ue(), w(), Pe(), W(), R(), Xe(), qe(), M(), je(), I(), Kt(), y(), ut();
}));
function rn(e, t) {
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
function an(e, t) {
	let n = rn(e, t);
	return lr(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function on(e, t = !1, n = !0) {
	let r = rn(e);
	return t || (r.equals = He), Ke && n && j !== null && j.l !== null && (j.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return K !== null && (!Er || K.f & 131072) && et() && K.f & 4325394 && (Dr === null || !l.call(Dr, e)) && De(), sn(e, n ? mn(t) : t, jt);
}
function sn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Tr ? fn.set(e, t) : fn.set(e, r), e.v = t;
		var i = Pt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && Qt(t), F === null && ct(t);
		}
		e.wv = fr(), un(e, x, n), et() && q !== null && q.f & 1024 && !(q.f & 96) && (Or === null ? ur([e]) : Or.push(e)), !i.is_fork && dn.size > 0 && !pn && cn();
	}
	return t;
}
function cn() {
	pn = !1;
	for (let e of dn) e.f & 1024 && N(e, S), pr(e) && vr(e);
	dn.clear();
}
function ln(e) {
	L(e, e.v + 1);
}
function un(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = et(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && N(s, t), c & 2) {
				var u = s;
				F?.delete(u), c & 65536 || (c & 512 && (s.f |= le), un(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Ft !== null && Ft.add(d), n === null ? Ct(d) : n.push(d);
			}
		}
	}
}
var dn, fn, pn, R = e((() => {
	r(), X(), Ue(), C(), w(), qe(), y(), Ye(), Xe(), M(), I(), hn(), nn(), ut(), dn = /* @__PURE__ */ new Set(), fn = /* @__PURE__ */ new Map(), pn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function mn(e) {
	if (typeof e != "object" || !e || pe in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ an(0), a = null, o = jr, c = (e) => {
		if (jr === o) return e();
		var t = K, n = jr;
		sr(null), dr(o);
		var r = e();
		return sr(t), dr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ an(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Te();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ an(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ an(T, a));
					n.set(t, e), ln(i);
				}
			} else L(r, T), ln(i);
			return !0;
		},
		get(t, r, i) {
			if (r === pe) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ an(mn(s ? t[r] : T), a)), n.set(r, o)), o !== void 0) {
				var l = G(o);
				return l === T ? void 0 : l;
			}
			return Reflect.get(t, r, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var i = n.get(t);
				i && (r.value = G(i));
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
			return (r !== void 0 || q !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ an(i ? mn(e[t]) : T, a)), n.set(t, r)), G(r) === T) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ an(T, a)), n.set(d + "", p)) : L(p, T);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ an(void 0, a)), L(l, mn(o)), n.set(t, l));
			else {
				u = l.v !== T;
				var m = c(() => mn(o));
				L(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				ln(i);
			}
			return !0;
		},
		ownKeys(e) {
			G(i);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== T;
			});
			for (var [r, a] of n) a.v !== T && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Ee();
		}
	});
}
var hn = e((() => {
	r(), X(), y(), R(), C(), je(), w(), Ye(), Xe(), qe(), new Set([
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
})), gn = e((() => {
	Pe(), hn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/operations.js
function _n() {
	if (Tn === void 0) {
		Tn = window, En = document, Dn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		On = f(t, "firstChild").get, kn = f(t, "nextSibling").get, _(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _(n) && (n.__t = void 0);
	}
}
function z(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function vn(e) {
	return On.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function yn(e) {
	return kn.call(e);
}
function B(e, t) {
	if (!O) return /* @__PURE__ */ vn(e);
	var n = /* @__PURE__ */ vn(k);
	if (n === null) n = k.appendChild(z());
	else if (t && n.nodeType !== 3) {
		var r = z();
		return n?.before(r), E(r), r;
	}
	return t && wn(n), E(n), n;
}
function bn(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ vn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ yn(n) : n;
	}
	if (t) {
		if (k?.nodeType !== 3) {
			var r = z();
			return k?.before(r), E(r), r;
		}
		wn(k);
	}
	return k;
}
function V(e, t = 1, n = !1) {
	let r = O ? k : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ yn(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = z();
			return r === null ? i?.after(a) : r.before(a), E(a), a;
		}
		wn(r);
	}
	return E(r), r;
}
function xn(e) {
	e.textContent = "";
}
function Sn() {
	return !Ge || Ft !== null ? !1 : (q.f & ne) !== 0;
}
function Cn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function wn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var Tn, En, Dn, On, kn, H = e((() => {
	A(), r(), gn(), y(), X(), qe(), C(), I(), je();
})), An = e((() => {
	A(), H(), it();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function jn(e) {
	var t = K, n = q;
	sr(null), cr(null);
	try {
		return e();
	} finally {
		sr(t), cr(n);
	}
}
var Mn = e((() => {
	W(), X(), An();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Nn(e) {
	q === null && (K === null && Ce(e), Se()), Tr && xe(e);
}
function Pn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Fn(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: j,
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
	P?.register_created_effect(r);
	var i = r;
	if (e & 4) At === null ? Pt.ensure().schedule(r) : At.push(r);
	else if (t !== null) {
		try {
			vr(r);
		} catch (e) {
			throw U(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ie));
	}
	if (i !== null && (i.parent = n, n !== null && Pn(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function In() {
	return K !== null && !Er;
}
function Ln(e) {
	let t = Fn(8, null);
	return N(t, b), t.teardown = e, t;
}
function Rn(e) {
	Nn("$effect");
	var t = q.f;
	if (!K && t & 32 && !(t & 32768)) {
		var n = j;
		(n.e ??= []).push(e);
	} else return zn(e);
}
function zn(e) {
	return Fn(4 | se, e);
}
function Bn(e) {
	return Nn("$effect.pre"), Fn(8 | se, e);
}
function Vn(e) {
	Pt.ensure();
	let t = Fn(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? $n(t, () => {
			U(t), n(void 0);
		}) : (U(t), n(void 0));
	});
}
function Hn(e) {
	return Fn(de | oe, e);
}
function Un(e, t = 0) {
	return Fn(8 | t, e);
}
function Wn(e, t = [], n = [], r = []) {
	Ht(r, t, n, (t) => {
		Fn(8, () => e(...t.map(G)));
	});
}
function Gn(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = Gt();
	Ht(r, t, n, (t) => {
		Fn(4, () => e(...t.map(G))), i && i();
	});
}
function Kn(e, t = 0) {
	return Fn(16 | t, e);
}
function qn(e) {
	return Fn(32 | oe, e);
}
function Jn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Tr, n = K;
		or(!0), sr(null);
		try {
			t.call(null);
		} finally {
			or(e), sr(n);
		}
	}
}
function Yn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && jn(() => {
			e.abort(he);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : U(n, t), n = r;
	}
}
function Xn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || U(t), t = n;
	}
}
function U(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Zn(e.nodes.start, e.nodes.end), n = !0), N(e, re), Yn(e, t && !n), _r(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Jn(e), e.f ^= re, e.f |= te;
	var i = e.parent;
	i !== null && i.first !== null && Qn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Zn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ yn(e);
		e.remove(), e = n;
	}
}
function Qn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function $n(e, t, n = !0) {
	var r = [];
	er(e, r, !0);
	var i = () => {
		n && U(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function er(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			er(i, t, o ? n : !1), i = a;
		}
	}
}
function tr(e) {
	nr(e, !0);
}
function nr(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (N(e, x), Pt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			nr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function rr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ yn(n);
		t.append(n), n = i;
	}
}
var W = e((() => {
	X(), C(), w(), r(), y(), H(), M(), I(), Kt(), Mn(), ut();
})), ir, ar = e((() => {
	R(), X(), ir = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
function or(e) {
	Tr = e;
}
function sr(e) {
	K = e;
}
function cr(e) {
	q = e;
}
function lr(e) {
	K !== null && (!Ge || K.f & 2) && (Dr === null ? Dr = [e] : Dr.push(e));
}
function ur(e) {
	Or = e;
}
function dr(e) {
	jr = e;
}
function fr() {
	return ++kr;
}
function pr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~le), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (pr(a) && $t(a), a.wv > e.wv) return !0;
		}
		t & 512 && F === null && N(e, b);
	}
	return !1;
}
function mr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ge && Dr !== null && l.call(Dr, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? mr(a, t, !1) : t === a && (n ? N(a, x) : a.f & 1024 && N(a, S), Ct(a));
	}
}
function hr(e) {
	var t = J, n = Y, r = Or, i = K, a = Dr, o = j, s = Er, c = jr, l = e.f;
	J = null, Y = 0, Or = null, K = l & 96 ? null : e, Dr = null, Ze(e.ctx), Er = !1, jr = ++Ar, e.ac !== null && (jn(() => {
		e.ac.abort(he);
	}), e.ac = null);
	try {
		e.f |= ue;
		var u = e.fn, d = u();
		e.f |= ne;
		var f = e.deps, p = P?.is_fork;
		if (J !== null) {
			var m;
			if (p || _r(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (In() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (_r(e, Y), f.length = Y);
		if (et() && Or !== null && !Er && f !== null && !(e.f & 6146)) for (m = 0; m < Or.length; m++) mr(Or[m], e);
		if (i !== null && i !== e) {
			if (Ar++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Ar;
			if (t !== null) for (let e of t) e.rv = Ar;
			Or !== null && (r === null ? r = Or : r.push(...Or));
		}
		return e.f & 8388608 && (e.f ^= fe), d;
	} catch (e) {
		return at(e);
	} finally {
		e.f ^= ue, J = t, Y = n, Or = r, K = i, Dr = a, Ze(o), Er = s, jr = c;
	}
}
function gr(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = c.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
		}
	}
	if (n === null && t.f & 2 && (J === null || !l.call(J, t))) {
		var a = t;
		a.f & 512 && (a.f ^= 512, a.f &= ~le), ct(a), en(a), _r(a, 0);
	}
}
function _r(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) gr(e, n[r]);
}
function vr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		N(e, b);
		var n = q, r = wr;
		q = e, wr = !0;
		try {
			t & 16777232 ? Xn(e) : Yn(e), Jn(e);
			var i = hr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = kr;
		} finally {
			wr = r, q = n;
		}
	}
}
function G(e) {
	var t = (e.f & 2) != 0;
	if (ir?.add(e), K !== null && !Er && !(q !== null && q.f & 16384) && (Dr === null || !l.call(Dr, e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Ar && (e.rv = Ar, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			(K.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : l.call(r, K) || r.push(K);
		}
	}
	if (Tr && fn.has(e)) return fn.get(e);
	if (t) {
		var i = e;
		if (Tr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || br(i)) && (a = Qt(i)), fn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Er && K !== null && (wr || (K.f & 512) != 0), s = (i.f & ne) === 0;
		pr(i) && (o && (i.f |= 512), $t(i)), o && !s && (tn(i), yr(i));
	}
	if (F?.has(e)) return F.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function yr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (tn(t), yr(t));
}
function br(e) {
	if (e.v === T) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (fn.has(t) || t.f & 2 && br(t)) return !0;
	return !1;
}
function xr(e) {
	var t = Er;
	try {
		return Er = !0, e();
	} finally {
		Er = t;
	}
}
function Sr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (pe in e) Cr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && pe in n && Cr(n);
		}
	}
}
function Cr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Cr(e[n], t);
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
var wr, Tr, K, Er, q, Dr, J, Y, Or, kr, Ar, jr, X = e((() => {
	r(), y(), W(), C(), R(), nn(), qe(), Ye(), Xe(), M(), I(), st(), je(), ar(), Mn(), ut(), Pe(), wr = !1, Tr = !1, K = null, Er = !1, q = null, Dr = null, J = null, Y = 0, Or = null, kr = 1, Ar = 0, jr = Ar;
})), Mr = e((() => {
	Da(), ja(), W();
}));
//#endregion
//#region node_modules/svelte/src/utils.js
function Nr(e) {
	return Fr.includes(e);
}
var Pr, Fr, Ir, Lr = e((() => {
	Pr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), [...Pr], Fr = ["touchstart", "touchmove"], Ir = [
		"$state",
		"$state.raw",
		"$derived",
		"$derived.by"
	], [...Ir];
})), Rr = e((() => {
	C(), Lr(), X();
})), zr = e((() => {
	C(), A(), M();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function Br(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Hr.call(t, e), !e.cancelBubble) return jn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Vr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Br(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Ln(() => {
		t.removeEventListener(e, o, a);
	});
}
function Hr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Kr = e;
	var o = 0, s = Kr === e && e[Ur];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Ur] = t;
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
		sr(null), cr(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[Ur]?.[r];
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
			e[Ur] = t, delete e.currentTarget, sr(u), cr(f);
		}
	}
}
var Ur, Wr, Gr, Kr, qr = e((() => {
	W(), y(), A(), it(), X(), Mn(), Ur = Symbol("events"), Wr = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Set(), Kr = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function Jr(e) {
	return Xr?.createHTML(e) ?? e;
}
function Yr(e) {
	var t = Cn("template");
	return t.innerHTML = Jr(e.replaceAll("<!>", "<!---->")), t.content;
}
var Xr, Zr = e((() => {
	H(), Xr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Qr(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Z(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (O) return Qr(k, null), k;
		i === void 0 && (i = Yr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ vn(i)));
		var t = r || Dn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ vn(t), s = t.lastChild;
			Qr(o, s);
		} else Qr(t, t);
		return t;
	};
}
function $r(e = "") {
	if (!O) {
		var t = z(e + "");
		return Qr(t, t), t;
	}
	var n = k;
	return n.nodeType === 3 ? wn(n) : (n.before(n = z()), E(n)), Qr(n, n), n;
}
function ei() {
	if (O) return Qr(k, null), k;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = z();
	return e.append(t, n), Qr(t, n), e;
}
function Q(e, t) {
	if (O) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = k), Ie();
		return;
	}
	e !== null && e.before(t);
}
var ti = e((() => {
	A(), H(), Zr(), X(), je(), C();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
function $(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function ni(e, t) {
	return ri(e, t);
}
function ri(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	_n();
	var c = void 0, l = Vn(() => {
		var l = n ?? t.appendChild(z());
		Rt(l, { pending: () => {} }, (t) => {
			Qe({});
			var n = j;
			if (a && (n.c = a), i && (r.$$events = i), O && Qr(t, null), ii = o, c = e(t, r) || {}, ii = !0, O && (q.nodes.end = k, k === null || k.nodeType !== 8 || k.data !== "]")) throw Me(), ke;
			$e();
		}, s);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = Nr(r);
					for (let e of [t, document]) {
						var a = ai.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), ai.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Hr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(u(Wr)), Gr.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = ai.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Hr), r.delete(e), r.size === 0 && ai.delete(n)) : r.set(e, i);
			}
			Gr.delete(f), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return oi.set(c, l), c;
}
var ii, ai, oi, si = e((() => {
	r(), H(), je(), X(), M(), W(), A(), y(), qr(), Pe(), w(), ti(), Lr(), C(), Vt(), ai = /* @__PURE__ */ new Map(), oi = /* @__PURE__ */ new WeakMap();
})), ci = e((() => {
	C(), A(), W(), R(), si(), X();
})), li = e((() => {
	y(), C(), M(), Lr();
})), ui = e((() => {
	w(), M();
})), di = e((() => {
	Je(), W(), X(), Xe();
})), fi = e((() => {
	Kt(), X(), A();
})), pi = e((() => {
	w();
})), mi, hi = e((() => {
	I(), W(), A(), H(), mi = class {
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
				if (n) tr(n), this.#r.delete(t);
				else {
					var r = this.#n.get(t);
					r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
				}
				for (let [t, n] of this.#e) {
					if (this.#e.delete(t), t === e) break;
					let r = this.#n.get(n);
					r && (U(r.effect), this.#n.delete(n));
				}
				for (let [e, r] of this.#t) {
					if (e === t || this.#r.has(e)) continue;
					let i = () => {
						if (Array.from(this.#e.values()).includes(e)) {
							var t = document.createDocumentFragment();
							rr(r, t), t.append(z()), this.#n.set(e, {
								effect: r,
								fragment: t
							});
						} else U(r);
						this.#r.delete(e), this.#t.delete(e);
					};
					this.#i || !n ? (this.#r.add(e), $n(r, i, !1)) : i();
				}
			}
		};
		#o = (e) => {
			this.#e.delete(e);
			let t = Array.from(this.#e.values());
			for (let [e, n] of this.#n) t.includes(e) || (U(n.effect), this.#n.delete(e));
		};
		ensure(e, t) {
			var n = P, r = Sn();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = z();
				i.append(a), this.#n.set(e, {
					effect: qn(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, qn(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else O && (this.anchor = k), this.#a(n);
		}
	};
})), gi = e((() => {
	y(), W(), R(), A(), it(), M(), I(), hi(), Kt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function _i(e, t, n = !1) {
	var r;
	O && (r = k, Ie());
	var i = new mi(e), a = n ? ie : 0;
	function o(e, t) {
		if (O) {
			var n = ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Re();
				E(a), i.anchor = a, Fe(!1), i.ensure(e, t), Fe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Kn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var vi = e((() => {
	C(), A(), W(), hi();
})), yi = e((() => {
	M(), W(), A(), hi();
})), bi = e((() => {
	W(), A(), H();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function xi(e, t) {
	return t;
}
function Si(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		$n(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Ci(e, u(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, d = l.parentNode;
			xn(d), d.append(l), e.items.clear();
		}
		Ci(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Ci(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ce, rr(a, document.createDocumentFragment())) : U(t[i], n);
	}
}
function wi(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = O ? E(/* @__PURE__ */ vn(l)) : l.appendChild(z());
	}
	O && Ie();
	var d = null, f = /* @__PURE__ */ Yt(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Ei(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ce, Oi(d, null, o)) : tr(d) : $n(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: Kn(() => {
			p = G(f);
			var e = p.length;
			let s = !1;
			O && ze(o) === "[!" != (e === 0) && (o = Re(), E(o), Fe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = P, v = Sn(), y = 0; y < e; y += 1) {
				O && k.nodeType === 8 && k.data === "]" && (o = k, s = !0, Fe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && sn(S.v, b), S.i && sn(S.i, y), v && u.unskip_effect(S.e)) : (S = Di(c, h ? o : Ai ??= z(), b, x, y, i, t, n), h || (S.e.f |= ce), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = qn(() => a(o)) : (d = qn(() => a(Ai ??= z())), d.f |= ce)), e > l.size && be("", "", ""), O && e > 0 && E(Re()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			s && Fe(!0), G(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, O && (o = k);
}
function Ti(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Ei(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Ti(e.effect.first), l, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (tr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ce, _ === c) Oi(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), ki(e, d, _), ki(e, _, y), Oi(_, y, n), d = _, p = [], m = [], c = Ti(d.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Oi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					ki(e, S.prev, ee.next), ki(e, d, S), ki(e, ee, b), c = b, d = ee, --v, p = [], m = [];
				} else l.delete(_), Oi(_, c, n), ki(e, _.prev, _.next), ki(e, _, d === null ? e.effect.first : d.next), ki(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Ti(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = Ti(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ci(e, u(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var te = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || te.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && te.push(c), c = Ti(c.next);
		var ne = te.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
			}
			Si(e, te, re);
		}
	}
	a && nt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Di(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? rn(n) : /* @__PURE__ */ on(n, !1, !1) : null, l = o & 2 ? rn(i) : null;
	return {
		v: c,
		i: l,
		e: qn(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Oi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ yn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function ki(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var Ai, ji = e((() => {
	je(), A(), H(), W(), R(), y(), C(), it(), X(), r(), nn(), I(), w();
})), Mi = e((() => {
	W(), A(), ti(), Lr(), M(), H(), X(), C();
})), Ni = e((() => {
	A();
})), Pi = e((() => {
	Lr();
})), Fi = e((() => {
	C(), W(), M(), A(), Zr(), ti(), w(), H(), Pi(), hi();
})), Ii = e((() => {
	C(), W(), A(), hi();
})), Li = e((() => {
	y();
})), Ri = e((() => {
	Li();
})), zi = e((() => {
	y(), W(), X(), Ri(), si(), C(), it(), Mn();
})), Bi = e((() => {
	A(), H(), W(), si(), X(), M(), C(), ti(), Lr(), hi(), zi();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function Vi(e, t) {
	let n = null, r = O;
	var i;
	if (O) {
		n = k;
		for (var a = /* @__PURE__ */ vn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ yn(a);
		if (a === null) Fe(!1);
		else {
			var o = /* @__PURE__ */ yn(a);
			a.remove(), E(o);
		}
	}
	O || (i = document.head.appendChild(z()));
	try {
		Kn(() => t(i), ae | oe);
	} finally {
		r && (Fe(!0), E(n));
	}
}
var Hi = e((() => {
	A(), H(), W(), C();
})), Ui = e((() => {
	W(), H();
})), Wi = e((() => {
	W(), X();
})), Gi = e((() => {
	W();
}));
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Ki(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || qi.includes(r[o - 1])) && (s === r.length || qi.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
var qi, Ji = e((() => {
	y(), qi = [..." 	\n\r\f\xA0\v﻿"];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Yi(e, t, n, r, i, a) {
	var o = e.__className;
	if (O || o !== n || o === void 0) {
		var s = Ki(n, r, a);
		(!O || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
var Xi = e((() => {
	Ji(), A();
})), Zi = e((() => {
	Ji(), A();
})), Qi = e((() => {
	W(), Mn(), hn(), y(), I();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function $i(e, t, n, r) {
	var i = ea(e);
	O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ia) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ta(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ea(e) {
	return e.__attributes ??= {
		[na]: e.nodeName.includes("-"),
		[ra]: e.namespaceURI === Ae
	};
}
function ta(e) {
	var t = e.getAttribute("is") || e.nodeName, n = aa.get(t);
	if (n) return n;
	aa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && n.push(o);
		i = g(i);
	}
	return n;
}
var na, ra, ia, aa, oa = e((() => {
	r(), A(), y(), qr(), An(), Pe(), C(), it(), Lr(), X(), Gi(), Ji(), Xi(), Zi(), je(), W(), Qi(), Kt(), na = Symbol("is custom element"), ra = Symbol("is html"), ia = ge ? "link" : "LINK", aa = /* @__PURE__ */ new Map();
})), sa = e((() => {
	A(), H(), Zr(), Gi();
})), ca = e((() => {
	Mn();
})), la = e((() => {
	W(), Mn(), w(), hn(), it(), A(), X(), M(), I();
})), ua = e((() => {
	W(), Mn();
})), da = e((() => {
	Mn();
})), fa = e((() => {
	W(), y();
})), pa = e((() => {
	W(), X();
})), ma = e((() => {
	C(), M(), W(), X();
})), ha = e((() => {
	W(), Mn();
})), ga = e((() => {
	W(), Mn();
})), _a = e((() => {
	y(), W(), qr();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function va(e = !1) {
	let t = j, n = t.l.u;
	if (!n) return;
	let r = () => Sr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ qt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => G(i);
	}
	n.b.length && Bn(() => {
		ya(t, r), a(n.b);
	}), Rn(() => {
		let e = xr(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Rn(() => {
		ya(t, r), a(n.a);
	});
}
function ya(e, t) {
	if (e.l.s) for (let t of e.l.s) G(t);
	t();
}
var ba = e((() => {
	y(), M(), nn(), W(), X();
})), xa = e((() => {
	R(), X(), y();
})), Sa = e((() => {
	y(), R(), nn(), X(), w(), C(), hn(), _t(), W();
})), Ca = e((() => {
	M(), W(), _t(), Kt();
})), wa = e((() => {
	C(), W(), R(), si(), X(), I(), y(), w(), M(), qe(), ut(), _a();
})), Ta = e((() => {
	wa(), W(), ti(), y(), H();
})), Ea = e((() => {
	C(), Je(), X();
})), Da = e((() => {
	Mr(), M(), Rr(), zr(), ci(), li(), ui(), Ye(), di(), fi(), pi(), gi(), vi(), yi(), bi(), ji(), Mi(), Ni(), Fi(), Ii(), Bi(), Hi(), Ui(), Wi(), Gi(), oa(), Xi(), qr(), An(), sa(), Zi(), zi(), ca(), la(), ua(), da(), fa(), Qi(), pa(), ma(), ha(), ga(), A(), _a(), ba(), xa(), ti(), Kt(), I(), nn(), W(), R(), Sa(), _t(), Vt(), ar(), si(), X(), Ca(), Li(), hn(), Ta(), H(), Ji(), Je(), y(), Pi(), gn(), Ea(), st();
})), Oa = e((() => {
	A(), w();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function ka(e) {
	j === null && _e("onMount"), Ke && j.l !== null ? Aa(j).m.push(e) : Rn(() => {
		let t = xr(e);
		if (typeof t == "function") return t;
	});
}
function Aa(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var ja = e((() => {
	X(), y(), Da(), w(), qe(), M(), r(), I(), Oa(), si(), Fi();
})), Ma = e((() => {})), Na = e((() => {
	Ma(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), Pa = e((() => {
	qe(), We();
}));
//#endregion
//#region frontend/src/App.svelte
function Fa(e, t) {
	Qe(t, !1);
	let n = /* @__PURE__ */ on("storefront"), r = /* @__PURE__ */ on([]), i = /* @__PURE__ */ on(null), a = /* @__PURE__ */ on([]), o = /* @__PURE__ */ on({
		items: [],
		subtotal: 0,
		tax: 0,
		total: 0
	}), s = /* @__PURE__ */ on(null), c = /* @__PURE__ */ on("demo_card"), l = /* @__PURE__ */ on(!0), u = /* @__PURE__ */ on(""), d = /* @__PURE__ */ on("");
	function f() {
		return typeof window > "u" ? "/buyer/home" : window.location.pathname;
	}
	function p() {
		let e = f().match(/\/buyer\/products\/(\d+)/);
		return e ? Number(e[1]) : null;
	}
	function m() {
		let e = f().match(/\/buyer\/orders\/(\d+)\/confirmation/);
		return e ? Number(e[1]) : null;
	}
	function h() {
		let e = f();
		return e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
	}
	function g() {
		return G(n) === "cart" ? "Buyer Cart" : G(n) === "checkout" ? "Checkout Review" : G(n) === "compare" ? "Compare Products" : G(n) === "confirmation" ? "Order Confirmation" : G(n) === "product" ? "Product Detail" : "Buyer Storefront";
	}
	async function _(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function v(e) {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD"
		}).format(e);
	}
	function y(e) {
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "medium",
			timeStyle: "short"
		}).format(new Date(e));
	}
	function b(e) {
		return e === "demo_card" ? "Demo Credit Card" : e;
	}
	function x(e, t) {
		return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
	}
	async function S(e = !1) {
		L(l, !0), L(u, ""), e && L(d, "");
		try {
			L(r, await _("/api/buyer/products"));
		} catch (e) {
			L(u, e.message || "Could not load products.");
		} finally {
			L(l, !1);
		}
	}
	async function ee() {
		L(l, !0), L(u, ""), L(d, "");
		try {
			L(i, await _(`/api/buyer/products/${p()}`));
		} catch (e) {
			L(u, e.message || "Could not load product.");
		} finally {
			L(l, !1);
		}
	}
	async function te() {
		L(l, !0), L(u, ""), L(d, "");
		try {
			L(o, await _("/api/buyer/cart"));
		} catch (e) {
			L(u, e.message || "Could not load cart.");
		} finally {
			L(l, !1);
		}
	}
	async function ne() {
		L(l, !0), L(u, ""), L(d, "");
		try {
			L(a, (await _("/api/buyer/compare")).items || []);
		} catch (e) {
			L(u, e.message || "Could not load comparison list.");
		} finally {
			L(l, !1);
		}
	}
	async function re() {
		L(l, !0), L(u, ""), L(d, "");
		try {
			L(s, await _(`/api/buyer/orders/${m()}`)), L(d, "Your order has been placed successfully.");
		} catch (e) {
			L(u, e.message || "Could not load order confirmation.");
		} finally {
			L(l, !1);
		}
	}
	async function ie() {
		if (L(n, h()), G(n) === "cart") {
			await te();
			return;
		}
		if (G(n) === "checkout") {
			await te();
			return;
		}
		if (G(n) === "compare") {
			await ne();
			return;
		}
		if (G(n) === "confirmation") {
			await re();
			return;
		}
		if (G(n) === "product") {
			await ee();
			return;
		}
		await S();
	}
	async function ae(e) {
		L(d, "");
		try {
			await _("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(d, "Item added to cart.");
		} catch (e) {
			L(d, e.message || "Could not add item to cart.");
		}
	}
	async function oe(e) {
		L(d, "");
		try {
			await _("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(d, "Item added to comparison list.");
		} catch (e) {
			L(d, e.message || "Could not add item to list.");
		}
	}
	async function se(e) {
		L(d, "");
		try {
			await _(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(d, "Item removed from cart."), await te();
		} catch (e) {
			L(d, e.message || "Could not remove item.");
		}
	}
	async function ce(e) {
		L(d, "");
		try {
			await _(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(d, "Item removed from comparison list."), await ne();
		} catch (e) {
			L(d, e.message || "Could not remove item.");
		}
	}
	async function le() {
		L(d, "");
		try {
			let e = await _("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ paymentMethod: G(c) })
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			L(d, e.message || "Checkout failed."), await te();
		}
	}
	async function ue() {
		L(d, "");
		try {
			await _("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(d, e.message || "Could not log out.");
		}
	}
	ka(async () => {
		await ie();
	}), va();
	var de = no();
	Vi("13zv0lp", (e) => {
		Gn((e) => {
			En.title = e ?? "";
		}, [() => g()]);
	});
	var fe = B(de), pe = V(B(fe), 2), me = V(B(pe), 10);
	D(pe), D(fe);
	var he = V(fe, 2), ge = B(he), C = B(ge), _e = B(C), ve = B(_e), ye = (e) => {
		Q(e, $r("Cart summary"));
	}, be = (e) => {
		Q(e, $r("Side-by-side shortlist"));
	}, xe = (e) => {
		Q(e, $r("Checkout review"));
	}, Se = (e) => {
		Q(e, $r("Purchase complete"));
	}, Ce = (e) => {
		Q(e, $r("Product spotlight"));
	}, we = (e) => {
		Q(e, $r("Live inventory"));
	};
	_i(ve, (e) => {
		G(n) === "cart" ? e(ye) : G(n) === "compare" ? e(be, 1) : G(n) === "checkout" ? e(xe, 2) : G(n) === "confirmation" ? e(Se, 3) : G(n) === "product" ? e(Ce, 4) : e(we, -1);
	}), D(_e);
	var Te = V(_e, 2), Ee = B(Te), De = (e) => {
		Q(e, $r("Your cart"));
	}, Oe = (e) => {
		Q(e, $r("Compare products"));
	}, w = (e) => {
		Q(e, $r("Review your order"));
	}, ke = (e) => {
		Q(e, $r("Order confirmation"));
	}, T = (e) => {
		Q(e, $r("Hardware details"));
	}, Ae = (e) => {
		Q(e, $r("Available hardware"));
	};
	_i(Ee, (e) => {
		G(n) === "cart" ? e(De) : G(n) === "compare" ? e(Oe, 1) : G(n) === "checkout" ? e(w, 2) : G(n) === "confirmation" ? e(ke, 3) : G(n) === "product" ? e(T, 4) : e(Ae, -1);
	}), D(Te), D(C);
	var je = V(C, 2);
	D(ge);
	var Me = V(ge, 2), Ne = (e) => {
		Q(e, Ia());
	}, Pe = (e) => {
		var t = La(), n = B(t, !0);
		D(t), Wn(() => $(n, G(u))), Q(e, t);
	}, Fe = (e) => {
		Q(e, Ra());
	}, E = (e) => {
		var t = za(), n = B(t), r = B(n), a = B(r, !0);
		D(r);
		var o = V(r, 2), s = B(o);
		D(o), D(n);
		var c = V(n, 2), l = B(c), u = B(l), d = B(u, !0);
		D(u);
		var f = V(u, 2), p = B(f, !0);
		D(f), D(l);
		var m = V(l, 2), h = B(m), g = V(h, 2);
		D(m), D(c);
		var _ = V(c, 2), y = B(_, !0);
		D(_), Le(2), D(t), Wn((e) => {
			$(a, G(i).seller.username), $(s, `${G(i).stock ?? ""} in stock`), $(d, G(i).name), $(p, e), $(y, G(i).description || "No description provided.");
		}, [() => v(G(i).price)]), Vr("click", h, () => ae(G(i).id)), Vr("click", g, () => oe(G(i).id)), Q(e, t);
	}, Ie = (e) => {
		var t = Ua(), n = B(t), r = B(n), i = (e) => {
			Q(e, Ba());
		}, a = (e) => {
			var t = Ha();
			wi(t, 5, () => G(o).items, xi, (e, t) => {
				var n = Va(), r = B(n), i = B(r), a = B(i, !0);
				D(i);
				var o = V(i, 2), s = B(o, !0);
				D(o);
				var c = V(o, 2), l = B(c);
				D(c), D(r);
				var u = V(r, 2), d = B(u), f = B(d, !0);
				D(d);
				var p = V(d, 2);
				D(u), D(n), Wn((e, n) => {
					$(a, G(t).product.seller.username), $(s, G(t).product.name), $(l, `Quantity ${G(t).quantity ?? ""} at ${e ?? ""} each`), $(f, n);
				}, [() => v(G(t).product.price), () => v(G(t).product.price * G(t).quantity)]), Vr("click", p, () => se(G(t).id)), Q(e, n);
			}), D(t), Q(e, t);
		};
		_i(r, (e) => {
			G(o).items.length === 0 ? e(i) : e(a, -1);
		}), D(n);
		var s = V(n, 2), c = V(B(s), 2), l = B(c, !0);
		D(c);
		var u = V(c, 4), d = B(u, !0);
		D(u);
		var f = V(u, 4), p = B(f, !0);
		D(f), Le(2), D(s), D(t), Wn((e, t, n) => {
			$(l, e), $(d, t), $(p, n);
		}, [
			() => v(G(o).subtotal),
			() => v(G(o).tax),
			() => v(G(o).total)
		]), Q(e, t);
	}, Re = (e) => {
		var t = qa(), n = B(t), r = B(n), i = (e) => {
			Q(e, Wa());
		}, a = (e) => {
			var t = Ka();
			wi(t, 5, () => G(o).items, xi, (e, t) => {
				var n = Ga(), r = B(n), i = B(r), a = B(i, !0);
				D(i);
				var o = V(i, 2), s = B(o, !0);
				D(o);
				var c = V(o, 2), l = B(c);
				D(c), D(r);
				var u = V(r, 2), d = B(u), f = B(d, !0);
				D(d), D(u), D(n), Wn((e, n) => {
					$(a, G(t).product.seller.username), $(s, G(t).product.name), $(l, `Quantity ${G(t).quantity ?? ""} at ${e ?? ""} each`), $(f, n);
				}, [() => v(G(t).product.price), () => v(G(t).product.price * G(t).quantity)]), Q(e, n);
			}), D(t), Q(e, t);
		};
		_i(r, (e) => {
			G(o).items.length === 0 ? e(i) : e(a, -1);
		}), D(n);
		var s = V(n, 2), l = V(B(s), 2), u = B(l, !0);
		D(l);
		var f = V(l, 4), p = B(f, !0);
		D(f);
		var m = V(f, 4), h = B(m, !0);
		D(m);
		var g = V(m, 2), _ = V(B(g), 2);
		let y;
		D(g);
		var b = V(g, 2), x = B(b);
		Le(4), D(b), D(s), D(t), Wn((e, t, n) => {
			$(u, e), $(p, t), $(h, n), y = Yi(_, 1, "payment-choice", null, y, { selected: G(c) === "demo_card" }), x.disabled = G(o).items.length === 0;
		}, [
			() => v(G(o).subtotal),
			() => v(G(o).tax),
			() => v(G(o).total)
		]), Vr("click", _, () => {
			L(c, "demo_card"), L(d, "Demo credit card selected.");
		}), Vr("click", x, le), Q(e, t);
	}, ze = (e) => {
		var t = Ya(), n = B(t), r = B(n);
		wi(r, 5, () => G(s).items, xi, (e, t) => {
			var n = Ja(), r = B(n), i = B(r), a = B(i);
			D(i);
			var o = V(i, 2), s = B(o, !0);
			D(o);
			var c = V(o, 2), l = B(c);
			D(c), D(r);
			var u = V(r, 2), d = B(u), f = B(d, !0);
			D(d), D(u), D(n), Wn((e, n) => {
				$(a, `Seller ID ${G(t).sellerId ?? ""}`), $(s, G(t).productName), $(l, `Quantity ${G(t).quantity ?? ""} at ${e ?? ""} each`), $(f, n);
			}, [() => v(G(t).unitPrice), () => v(G(t).lineTotal)]), Q(e, n);
		}), D(r), D(n);
		var i = V(n, 2), a = V(B(i), 2), o = B(a);
		D(a);
		var c = V(a, 4), l = B(c, !0);
		D(c);
		var u = V(c, 4), d = B(u, !0);
		D(u);
		var f = V(u, 4), p = B(f, !0);
		D(f);
		var m = V(f, 4), h = B(m, !0);
		D(m);
		var g = V(m, 4), _ = B(g, !0);
		D(g);
		var x = V(g, 4), S = B(x, !0);
		D(x);
		var ee = V(x, 2), te = V(B(ee), 2);
		D(ee), D(i), D(t), Wn((e, t, n, r, i) => {
			$(o, `#${G(s).id ?? ""}`), $(l, G(s).status), $(d, e), $(p, t), $(h, n), $(_, r), $(S, i), $i(te, "href", `/buyer/classic/orders/${G(s).id}/confirmation`);
		}, [
			() => b(G(s).paymentMethod),
			() => y(G(s).createdAt),
			() => v(G(s).subtotal),
			() => v(G(s).taxAmount),
			() => v(G(s).total)
		]), Q(e, t);
	}, O = (e) => {
		var t = ei(), n = bn(t), r = (e) => {
			Q(e, Xa());
		}, i = (e) => {
			var t = Qa();
			wi(t, 5, () => G(a), xi, (e, t) => {
				var n = Za(), r = B(n), i = V(B(r), 2), a = B(i, !0);
				D(i), D(r);
				var o = V(r, 2), s = B(o, !0);
				D(o);
				var c = V(o, 2), l = B(c, !0);
				D(c);
				var u = V(c, 2), d = B(u), f = B(d);
				D(d);
				var p = V(d, 2), m = B(p), h = V(m, 2);
				D(p), D(u), D(n), Wn((e, n) => {
					$(a, e), $(s, G(t).name), $(l, n), $i(f, "href", `/buyer/products/${G(t).id}`);
				}, [() => v(G(t).price), () => x(G(t).description || "", 160)]), Vr("click", m, () => ae(G(t).id)), Vr("click", h, () => ce(G(t).id)), Q(e, n);
			}), D(t), Q(e, t);
		};
		_i(n, (e) => {
			G(a).length === 0 ? e(r) : e(i, -1);
		}), Q(e, t);
	}, k = (e) => {
		var t = eo();
		wi(t, 5, () => G(r), xi, (e, t, n, r) => {
			var i = $a(), a = B(i), o = B(a), s = B(o, !0);
			D(o);
			var c = V(o, 2), l = B(c);
			D(c), D(a);
			var u = V(a, 2), d = B(u, !0);
			D(u);
			var f = V(u, 2), p = B(f, !0);
			D(f);
			var m = V(f, 2), h = B(m), g = B(h), _ = B(g, !0);
			D(g);
			var y = V(g, 2);
			D(h);
			var b = V(h, 2), x = B(b), S = V(x, 2);
			D(b), D(m), D(i), Wn((e) => {
				$(s, G(t).seller.username), $(l, `${G(t).stock ?? ""} in stock`), $(d, G(t).name), $(p, G(t).description || "No description provided."), $(_, e), $i(y, "href", `/buyer/products/${G(t).id}`);
			}, [() => v(G(t).price)]), Vr("click", x, () => ae(G(t).id)), Vr("click", S, () => oe(G(t).id)), Q(e, i);
		}), D(t), Q(e, t);
	};
	_i(Me, (e) => {
		G(l) ? e(Ne) : G(u) ? e(Pe, 1) : G(n) === "storefront" && G(r).length === 0 ? e(Fe, 2) : G(n) === "product" && G(i) ? e(E, 3) : G(n) === "cart" ? e(Ie, 4) : G(n) === "checkout" ? e(Re, 5) : G(n) === "confirmation" && G(s) ? e(ze, 6) : G(n) === "compare" ? e(O, 7) : e(k, -1);
	});
	var A = V(Me, 2), Be = (e) => {
		var t = to(), n = B(t, !0);
		D(t), Wn(() => $(n, G(d))), Q(e, t);
	};
	_i(A, (e) => {
		G(d) && e(Be);
	}), D(he), D(de), Wn(() => $i(de, "data-page", G(n))), Vr("click", me, ue), Vr("click", je, ie), Q(e, de), $e();
}
var Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro = e((() => {
	Na(), Pa(), Da(), ja(), Ia = /* @__PURE__ */ Z("<div class=\"state-card\">Loading products...</div>"), La = /* @__PURE__ */ Z("<div class=\"state-card error\"> </div>"), Ra = /* @__PURE__ */ Z("<div class=\"state-card\">No listed products are available right now.</div>"), za = /* @__PURE__ */ Z("<article class=\"detail-card\"><div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>"), Ba = /* @__PURE__ */ Z("<div class=\"state-card\">Your cart is empty.</div>"), Va = /* @__PURE__ */ Z("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), Ha = /* @__PURE__ */ Z("<div class=\"list-grid\"></div>"), Ua = /* @__PURE__ */ Z("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Review checkout</a></aside></div>"), Wa = /* @__PURE__ */ Z("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), Ga = /* @__PURE__ */ Z("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), Ka = /* @__PURE__ */ Z("<div class=\"list-grid\"></div>"), qa = /* @__PURE__ */ Z("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <button>Demo credit card ending in 4242</button></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a> <a class=\"checkout-link secondary-link\" href=\"/buyer/classic/checkout\">Classic checkout</a></div></aside></div>"), Ja = /* @__PURE__ */ Z("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), Ya = /* @__PURE__ */ Z("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a> <a class=\"checkout-link secondary-link\">Classic confirmation</a></div></aside></div>"), Xa = /* @__PURE__ */ Z("<div class=\"state-card\">No products marked for comparison.</div>"), Za = /* @__PURE__ */ Z("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), Qa = /* @__PURE__ */ Z("<div class=\"product-grid compare-grid\"></div>"), $a = /* @__PURE__ */ Z("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), eo = /* @__PURE__ */ Z("<div class=\"product-grid\"></div>"), to = /* @__PURE__ */ Z("<p class=\"status-banner\"> </p>"), no = /* @__PURE__ */ Z("<div class=\"page-shell\"><section class=\"hero\"><div><p class=\"eyebrow\">Buyer Frontend Preview</p> <h1>Random Access Market</h1> <p class=\"intro\">A Svelte-powered buyer interface running on top of the existing Express, Prisma, and MySQL stack.</p></div> <div class=\"hero-actions\"><a href=\"/buyer/home\" class=\"action-link\">Storefront</a> <a href=\"/buyer/cart\" class=\"action-link\">Cart</a> <a href=\"/buyer/checkout\" class=\"action-link\">Checkout</a> <a href=\"/buyer/compare\" class=\"action-link\">Compare</a> <a href=\"/buyer/classic/home\" class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section> <section class=\"catalog\"><div class=\"catalog-header\"><div><p class=\"section-kicker\"><!></p> <h2><!></h2></div> <button class=\"refresh-button\">Refresh</button></div> <!> <!></section></div>");
})), io = e((() => {})), ao = /* @__PURE__ */ t((() => {
	ja(), ro(), io(), ni(Fa, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default ao();
