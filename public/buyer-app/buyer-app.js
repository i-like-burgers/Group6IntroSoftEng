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
	return E(/* @__PURE__ */ Cn(k));
}
function D(e) {
	if (O) {
		if (/* @__PURE__ */ Cn(k) !== null) throw Me(), ke;
		k = e;
	}
}
function Le(e = 1) {
	if (O) {
		for (var t = e, n = k; t--;) n = /* @__PURE__ */ Cn(n);
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
		var i = /* @__PURE__ */ Cn(n);
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
	Je(), C(), W(), Y();
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
		for (var r of n) qn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, j = t.p, e ?? {};
}
function et() {
	return !Ke || j !== null && j.l === null;
}
var j, M = e((() => {
	r(), w(), Y(), W(), qe(), C(), j = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
function tt() {
	var e = it;
	it = [], a(e);
}
function nt(e) {
	if (it.length === 0 && !jt) {
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
	y(), I(), it = [];
}));
//#endregion
//#region node_modules/svelte/src/internal/client/error-handling.js
function ot(e) {
	var t = q;
	if (t === null) return K.f |= fe, e;
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
	r(), je(), H(), C(), y(), Y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
function N(e, t) {
	e.f = e.f & ut | t;
}
function lt(e) {
	e.f & 512 || e.deps === null ? N(e, b) : N(e, S);
}
var ut, dt = e((() => {
	C(), ut = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function ft(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= le, ft(t.deps));
}
function pt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), ft(e.deps), N(e, b);
}
var mt = e((() => {
	C(), dt();
})), ht = e((() => {
	Y(), y();
})), gt = e((() => {
	y(), ht();
})), _t, vt = e((() => {
	ht(), gt(), y(), Y(), W(), R(), _t = !1;
})), yt = e((() => {
	C(), Je(), Y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
function bt(e) {
	var t = jt;
	jt = !0;
	try {
		var n;
		for (e && (P !== null && !P.is_fork && P.flush(), n = e());;) {
			if (rt(), P === null) return n;
			P.flush();
		}
	} finally {
		jt = t;
	}
}
function xt() {
	try {
		we();
	} catch (e) {
		st(e, At);
	}
}
function St(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && xr(r) && (Rt = /* @__PURE__ */ new Set(), Er(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && or(r), Rt?.size > 0)) {
				gn.clear();
				for (let e of Rt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Rt.has(n) && (Rt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Er(n);
					}
				}
				Rt.clear();
			}
		}
		Rt = null;
	}
}
function Ct(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Ct(i, t, n, r) : e & 4194320 && !(e & 2048) && wt(i, t, r) && (N(i, x), Tt(i));
	}
}
function wt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (l.call(t, r)) return !0;
		if (r.f & 2 && wt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Tt(e) {
	P.schedule(e);
}
function Et(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), N(e, b);
		for (var n = e.first; n !== null;) Et(n, t), n = n.next;
	}
}
function Dt(e) {
	N(e, b);
	for (var t = e.first; t !== null;) Dt(t), t = t.next;
}
var Ot, P, kt, F, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, I = e((() => {
	C(), qe(), y(), Y(), w(), at(), r(), ct(), R(), W(), mt(), je(), dt(), vt(), Xe(), yt(), Ot = /* @__PURE__ */ new Set(), P = null, kt = null, F = null, At = null, jt = !1, Mt = !1, Nt = null, Pt = null, Ft = 0, It = 1, Lt = class e {
		id = It++;
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
			if (Ft++ > 1e3 && (Ot.delete(this), xt()), !this.#f()) {
				for (let e of this.#s) this.#c.delete(e), N(e, x), this.schedule(e);
				for (let e of this.#c) N(e, S), this.schedule(e);
			}
			let t = this.#a;
			this.#a = [], this.apply();
			var n = Nt = [], r = [], i = Pt = [];
			for (let e of t) try {
				this.#h(e, n, r);
			} catch (t) {
				throw Dt(e), t;
			}
			if (P = null, i.length > 0) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (Nt = null, Pt = null, this.#f() || this.#p()) {
				this.#g(r), this.#g(n);
				for (let [e, t] of this.#l) Et(e, t);
			} else {
				this.#n.size === 0 && Ot.delete(this), this.#s.clear(), this.#c.clear();
				for (let e of this.#e) e(this);
				this.#e.clear(), kt = this, St(r), St(n), kt = null, this.#i?.resolve();
			}
			var o = P;
			if (this.#a.length > 0) {
				let e = o ??= this;
				e.#a.push(...this.#a.filter((t) => !e.#a.includes(t)));
			}
			o !== null && (Ot.add(o), o.#m()), Ot.has(this) || this.#_();
		}
		#h(e, t, n) {
			e.f ^= b;
			for (var r = e.first; r !== null;) {
				var i = r.f, a = (i & 96) != 0;
				if (!(a && i & 1024 || i & 8192 || this.#l.has(r)) && r.fn !== null) {
					a ? r.f ^= b : i & 4 ? t.push(r) : Ge && i & 16777224 ? n.push(r) : xr(r) && (i & 16 && this.#c.add(r), Er(r));
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
				Mt = !0, P = this, this.#m();
			} finally {
				Ft = 0, At = null, Nt = null, Pt = null, Mt = !1, P = null, F = null, gn.clear();
			}
		}
		discard() {
			for (let e of this.#t) e(this);
			this.#t.clear(), Ot.delete(this);
		}
		register_created_effect(e) {
			this.#o.push(e);
		}
		#_() {
			for (let l of Ot) {
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
					for (var o of t) Ct(o, r, i, a);
					a = /* @__PURE__ */ new Map();
					var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
					for (let e of this.#o) !(e.f & 155648) && wt(e, s, a) && (e.f & 4194320 ? (N(e, x), l.schedule(e)) : l.#s.add(e));
					if (l.#a.length > 0) {
						l.apply();
						for (var c of l.#a) l.#h(c, [], []);
						l.#a = [];
					}
					l.deactivate();
				}
			}
			for (let e of Ot) e.#d.has(this) && (e.#d.delete(this), e.#d.size === 0 && !e.#f() && (e.activate(), e.#m()));
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
				Mt || (Ot.add(P), jt || nt(() => {
					P === t && t.flush();
				}));
			}
			return P;
		}
		apply() {
			if (!Ge || !this.is_fork && Ot.size === 1) {
				F = null;
				return;
			}
			F = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) F.set(e, t);
			for (let n of Ot) if (!(n === this || n.is_fork)) {
				var e = !1, t = !1;
				if (n.id < this.id) for (let [r, [, i]] of n.current) i || (e ||= this.current.has(r), t ||= !this.current.has(r));
				if (e && t) this.#d.add(n);
				else for (let [e, t] of n.previous) F.has(e) || F.set(e, t);
			}
		}
		schedule(e) {
			if (At = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (Nt !== null && t === q && (Ge || (K === null || !(K.f & 2)) && !_t)) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= b;
				}
			}
			this.#a.push(t);
		}
	}, Rt = null;
}));
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function zt(e) {
	let t = 0, n = sn(0), r;
	return () => {
		Wn() && (G(n), Zn(() => (t === 0 && (r = Ar(() => e(() => pn(n)))), t += 1, () => {
			nt(() => {
				--t, t === 0 && (r?.(), r = void 0, pn(n));
			});
		})));
	};
}
var Bt = e((() => {
	Y(), W(), R(), Ye(), r(), at();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Vt(e, t, n, r) {
	new Ut(e, t, n, r);
}
var Ht, Ut, Wt = e((() => {
	C(), je(), M(), ct(), W(), Y(), A(), at(), w(), Pe(), r(), I(), R(), Ye(), Bt(), H(), mt(), dt(), Ht = ie | oe, Ut = class {
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
		#h = zt(() => (this.#m = sn(this.#l), () => {
			this.#m = null;
		}));
		constructor(e, t, n, r) {
			this.#e = e, this.#n = t, this.#r = (e) => {
				var t = q;
				t.b = this, t.f |= 128, n(e);
			}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = $n(() => {
				if (O) {
					let e = this.#t;
					Ie();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Ht), O && (this.#e = k);
		}
		#g() {
			try {
				this.#a = er(() => this.#r(this.#e));
			} catch (e) {
				this.error(e);
			}
		}
		#_(e) {
			let t = this.#n.failed;
			t && (this.#s = er(() => {
				t(this.#e, () => e, () => () => {});
			}));
		}
		#v() {
			let e = this.#n.pending;
			e && (this.is_pending = !0, this.#o = er(() => e(this.#e)), nt(() => {
				var e = this.#c = document.createDocumentFragment(), t = z();
				e.append(t), this.#a = this.#x(() => er(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, sr(this.#o, () => {
					this.#o = null;
				}), this.#b(P));
			}));
		}
		#y() {
			try {
				if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = er(() => {
					this.#r(this.#e);
				}), this.#u > 0) {
					var e = this.#c = document.createDocumentFragment();
					dr(this.#a, e);
					let t = this.#n.pending;
					this.#o = er(() => t(this.#e));
				} else this.#b(P);
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
			var t = q, n = K, r = j;
			gr(this.#i), hr(this.#i), Ze(this.#i.ctx);
			try {
				return Lt.ensure(), e();
			} catch (e) {
				return ot(e), null;
			} finally {
				gr(t), hr(n), Ze(r);
			}
		}
		#S(e, t) {
			if (!this.has_pending_snippet()) {
				this.parent && this.parent.#S(e, t);
				return;
			}
			this.#u += e, this.#u === 0 && (this.#b(t), this.#o && sr(this.#o, () => {
				this.#o = null;
			}), this.#c &&= (this.#e.before(this.#c), null));
		}
		update_pending_count(e, t) {
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, nt(() => {
				this.#d = !1, this.#m && dn(this.#m, this.#l);
			}));
		}
		get_effect_pending() {
			return this.#h(), G(this.#m);
		}
		error(e) {
			var t = this.#n.onerror;
			let n = this.#n.failed;
			if (!t && !n) throw e;
			this.#a &&= (ir(this.#a), null), this.#o &&= (ir(this.#o), null), this.#s &&= (ir(this.#s), null), O && (E(this.#t), Le(), E(Re()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Ne();
					return;
				}
				r = !0, i && Oe(), this.#s !== null && sr(this.#s, () => {
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
						return er(() => {
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
function Gt(e, t, n, r) {
	let i = et() ? Xt : Qt;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = q, s = Kt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || st(e, o);
		}
		qt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = Jt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ Zt(e))).then((e) => l([...t.map(i), ...e])).catch((e) => st(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), qt();
	}) : d();
}
function Kt() {
	var e = q, t = K, n = j, r = P;
	return function(i = !0) {
		gr(e), hr(t), Ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function qt(e = !0) {
	gr(null), hr(null), Ze(null), e && P?.deactivate();
}
function Jt() {
	var e = q, t = e.b, n = P, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var Yt = e((() => {
	C(), r(), M(), Wt(), ct(), Y(), I(), on(), W();
}));
/* @__NO_SIDE_EFFECTS__ */
function Xt(e) {
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
function Zt(e, t, n) {
	let r = q;
	r === null && ye();
	var i = void 0, a = sn(T), s = !K, c = /* @__PURE__ */ new Map();
	return Xn(() => {
		var t = q, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(qt);
		} catch (e) {
			n.reject(e), qt();
		}
		var l = P;
		if (s) {
			if (t.f & 32768) var u = Jt();
			if (r.b.is_rendered()) c.get(l)?.reject(he), c.delete(l);
			else {
				for (let e of c.values()) e.reject(he);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === he), !(n === he || t.f & 16384)) {
				if (l.activate(), n) a.f |= fe, dn(a, n);
				else {
					a.f & 8388608 && (a.f ^= fe), dn(a, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === l) break;
						t.reject(he);
					}
				}
				l.deactivate();
			}
		};
		n.promise.then(d, (e) => d(null, e || "unknown"));
	}), Gn(() => {
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
function Qt(e) {
	let t = /* @__PURE__ */ Xt(e);
	return t.equals = He, t;
}
function $t(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) ir(t[n]);
	}
}
function en(e) {
	for (var t = e.parent; t !== null;) {
		if (!(t.f & 2)) return t.f & 16384 ? null : t;
		t = t.parent;
	}
	return null;
}
function tn(e) {
	var t, n = q;
	gr(en(e));
	try {
		e.f &= ~le, $t(e), t = Cr(e);
	} finally {
		gr(n);
	}
	return t;
}
function nn(e) {
	var t = e.v, n = tn(e);
	if (!e.equals(n) && (e.wv = br(), (!P?.is_fork || e.deps === null) && (e.v = n, P?.capture(e, t, !0), e.deps === null))) {
		N(e, b);
		return;
	}
	Pr || (F === null ? lt(e) : (Wn() || P?.is_fork) && F.set(e, n));
}
function rn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(he), t.teardown = v, t.ac = null, Tr(t, 0), nr(t));
}
function an(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Er(t);
}
var on = e((() => {
	r(), C(), Y(), Ue(), w(), Pe(), W(), R(), Xe(), qe(), M(), je(), I(), Yt(), y(), dt();
}));
function sn(e, t) {
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
function cn(e, t) {
	let n = sn(e, t);
	return _r(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function ln(e, t = !1, n = !0) {
	let r = sn(e);
	return t || (r.equals = He), Ke && n && j !== null && j.l !== null && (j.l.s ??= []).push(r), r;
}
function un(e, t) {
	return L(e, Ar(() => G(e))), t;
}
function L(e, t, n = !1) {
	return K !== null && (!Fr || K.f & 131072) && et() && K.f & 4325394 && (Ir === null || !l.call(Ir, e)) && De(), dn(e, n ? vn(t) : t, Pt);
}
function dn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Pr ? gn.set(e, t) : gn.set(e, r), e.v = t;
		var i = Lt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && tn(t), F === null && lt(t);
		}
		e.wv = br(), mn(e, x, n), et() && q !== null && q.f & 1024 && !(q.f & 96) && (Rr === null ? vr([e]) : Rr.push(e)), !i.is_fork && hn.size > 0 && !_n && fn();
	}
	return t;
}
function fn() {
	_n = !1;
	for (let e of hn) e.f & 1024 && N(e, S), xr(e) && Er(e);
	hn.clear();
}
function pn(e) {
	L(e, e.v + 1);
}
function mn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = et(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && N(s, t), c & 2) {
				var u = s;
				F?.delete(u), c & 65536 || (c & 512 && (s.f |= le), mn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Rt !== null && Rt.add(d), n === null ? Tt(d) : n.push(d);
			}
		}
	}
}
var hn, gn, _n, R = e((() => {
	r(), Y(), Ue(), C(), w(), qe(), y(), Ye(), Xe(), M(), I(), yn(), on(), dt(), hn = /* @__PURE__ */ new Set(), gn = /* @__PURE__ */ new Map(), _n = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function vn(e) {
	if (typeof e != "object" || !e || pe in e) return e;
	let t = g(e);
	if (t !== m && t !== h) return e;
	var n = /* @__PURE__ */ new Map(), r = s(e), i = /* @__PURE__ */ cn(0), a = null, o = Vr, c = (e) => {
		if (Vr === o) return e();
		var t = K, n = Vr;
		hr(null), yr(o);
		var r = e();
		return hr(t), yr(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ cn(e.length, a)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Te();
			var i = n.get(t);
			return i === void 0 ? c(() => {
				var e = /* @__PURE__ */ cn(r.value, a);
				return n.set(t, e), e;
			}) : L(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = c(() => /* @__PURE__ */ cn(T, a));
					n.set(t, e), pn(i);
				}
			} else L(r, T), pn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === pe) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ cn(vn(s ? t[r] : T), a)), n.set(r, o)), o !== void 0) {
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
			return (r !== void 0 || q !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ cn(i ? vn(e[t]) : T, a)), n.set(t, r)), G(r) === T) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ cn(T, a)), n.set(d + "", p)) : L(p, T);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ cn(void 0, a)), L(l, vn(o)), n.set(t, l));
			else {
				u = l.v !== T;
				var m = c(() => vn(o));
				L(l, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, o), !u) {
				if (r && typeof t == "string") {
					var g = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				pn(i);
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
var yn = e((() => {
	r(), Y(), y(), R(), C(), je(), w(), Ye(), Xe(), qe(), new Set([
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
})), bn = e((() => {
	Pe(), yn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/operations.js
function xn() {
	if (kn === void 0) {
		kn = window, An = document, jn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Mn = f(t, "firstChild").get, Nn = f(t, "nextSibling").get, _(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _(n) && (n.__t = void 0);
	}
}
function z(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Sn(e) {
	return Mn.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Cn(e) {
	return Nn.call(e);
}
function B(e, t) {
	if (!O) return /* @__PURE__ */ Sn(e);
	var n = /* @__PURE__ */ Sn(k);
	if (n === null) n = k.appendChild(z());
	else if (t && n.nodeType !== 3) {
		var r = z();
		return n?.before(r), E(r), r;
	}
	return t && On(n), E(n), n;
}
function wn(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ Sn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Cn(n) : n;
	}
	if (t) {
		if (k?.nodeType !== 3) {
			var r = z();
			return k?.before(r), E(r), r;
		}
		On(k);
	}
	return k;
}
function V(e, t = 1, n = !1) {
	let r = O ? k : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Cn(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = z();
			return r === null ? i?.after(a) : r.before(a), E(a), a;
		}
		On(r);
	}
	return E(r), r;
}
function Tn(e) {
	e.textContent = "";
}
function En() {
	return !Ge || Rt !== null ? !1 : (q.f & ne) !== 0;
}
function Dn(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function On(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
var kn, An, jn, Mn, Nn, H = e((() => {
	A(), r(), bn(), y(), Y(), qe(), C(), I(), je();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Pn(e) {
	O && /* @__PURE__ */ Sn(e) !== null && Tn(e);
}
function Fn() {
	In || (In = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var In, Ln = e((() => {
	A(), H(), at(), In = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Rn(e) {
	var t = K, n = q;
	hr(null), gr(null);
	try {
		return e();
	} finally {
		hr(t), gr(n);
	}
}
function zn(e, t, n, r = n) {
	e.addEventListener(t, () => Rn(n));
	let i = e.__on_r;
	i ? e.__on_r = () => {
		i(), r(!0);
	} : e.__on_r = () => r(!0), Fn();
}
var Bn = e((() => {
	W(), Y(), Ln();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Vn(e) {
	q === null && (K === null && Ce(e), Se()), Pr && xe(e);
}
function Hn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Un(e, t) {
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
	if (e & 4) Nt === null ? Lt.ensure().schedule(r) : Nt.push(r);
	else if (t !== null) {
		try {
			Er(r);
		} catch (e) {
			throw ir(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ie));
	}
	if (i !== null && (i.parent = n, n !== null && Hn(i, n), K !== null && K.f & 2 && !(e & 64))) {
		var a = K;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Wn() {
	return K !== null && !Fr;
}
function Gn(e) {
	let t = Un(8, null);
	return N(t, b), t.teardown = e, t;
}
function Kn(e) {
	Vn("$effect");
	var t = q.f;
	if (!K && t & 32 && !(t & 32768)) {
		var n = j;
		(n.e ??= []).push(e);
	} else return qn(e);
}
function qn(e) {
	return Un(4 | se, e);
}
function Jn(e) {
	return Vn("$effect.pre"), Un(8 | se, e);
}
function Yn(e) {
	Lt.ensure();
	let t = Un(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? sr(t, () => {
			ir(t), n(void 0);
		}) : (ir(t), n(void 0));
	});
}
function Xn(e) {
	return Un(de | oe, e);
}
function Zn(e, t = 0) {
	return Un(8 | t, e);
}
function U(e, t = [], n = [], r = []) {
	Gt(r, t, n, (t) => {
		Un(8, () => e(...t.map(G)));
	});
}
function Qn(e, t = [], n = [], r = []) {
	if (n.length > 0 || r.length > 0) var i = Jt();
	Gt(r, t, n, (t) => {
		Un(4, () => e(...t.map(G))), i && i();
	});
}
function $n(e, t = 0) {
	return Un(16 | t, e);
}
function er(e) {
	return Un(32 | oe, e);
}
function tr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Pr, n = K;
		mr(!0), hr(null);
		try {
			t.call(null);
		} finally {
			mr(e), hr(n);
		}
	}
}
function nr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Rn(() => {
			e.abort(he);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : ir(n, t), n = r;
	}
}
function rr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || ir(t), t = n;
	}
}
function ir(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (ar(e.nodes.start, e.nodes.end), n = !0), N(e, re), nr(e, t && !n), Tr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	tr(e), e.f ^= re, e.f |= te;
	var i = e.parent;
	i !== null && i.first !== null && or(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ar(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Cn(e);
		e.remove(), e = n;
	}
}
function or(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function sr(e, t, n = !0) {
	var r = [];
	cr(e, r, !0);
	var i = () => {
		n && ir(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function cr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next, o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
			cr(i, t, o ? n : !1), i = a;
		}
	}
}
function lr(e) {
	ur(e, !0);
}
function ur(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (N(e, x), Lt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			ur(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function dr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Cn(n);
		t.append(n), n = i;
	}
}
var W = e((() => {
	Y(), C(), w(), r(), y(), H(), M(), I(), Yt(), Bn(), dt();
})), fr, pr = e((() => {
	R(), Y(), fr = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/runtime.js
function mr(e) {
	Pr = e;
}
function hr(e) {
	K = e;
}
function gr(e) {
	q = e;
}
function _r(e) {
	K !== null && (!Ge || K.f & 2) && (Ir === null ? Ir = [e] : Ir.push(e));
}
function vr(e) {
	Rr = e;
}
function yr(e) {
	Vr = e;
}
function br() {
	return ++zr;
}
function xr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~le), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (xr(a) && nn(a), a.wv > e.wv) return !0;
		}
		t & 512 && F === null && N(e, b);
	}
	return !1;
}
function Sr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ge && Ir !== null && l.call(Ir, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Sr(a, t, !1) : t === a && (n ? N(a, x) : a.f & 1024 && N(a, S), Tt(a));
	}
}
function Cr(e) {
	var t = J, n = Lr, r = Rr, i = K, a = Ir, o = j, s = Fr, c = Vr, l = e.f;
	J = null, Lr = 0, Rr = null, K = l & 96 ? null : e, Ir = null, Ze(e.ctx), Fr = !1, Vr = ++Br, e.ac !== null && (Rn(() => {
		e.ac.abort(he);
	}), e.ac = null);
	try {
		e.f |= ue;
		var u = e.fn, d = u();
		e.f |= ne;
		var f = e.deps, p = P?.is_fork;
		if (J !== null) {
			var m;
			if (p || Tr(e, Lr), f !== null && Lr > 0) for (f.length = Lr + J.length, m = 0; m < J.length; m++) f[Lr + m] = J[m];
			else e.deps = f = J;
			if (Wn() && e.f & 512) for (m = Lr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Lr < f.length && (Tr(e, Lr), f.length = Lr);
		if (et() && Rr !== null && !Fr && f !== null && !(e.f & 6146)) for (m = 0; m < Rr.length; m++) Sr(Rr[m], e);
		if (i !== null && i !== e) {
			if (Br++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Br;
			if (t !== null) for (let e of t) e.rv = Br;
			Rr !== null && (r === null ? r = Rr : r.push(...Rr));
		}
		return e.f & 8388608 && (e.f ^= fe), d;
	} catch (e) {
		return ot(e);
	} finally {
		e.f ^= ue, J = t, Lr = n, Rr = r, K = i, Ir = a, Ze(o), Fr = s, Vr = c;
	}
}
function wr(e, t) {
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
		a.f & 512 && (a.f ^= 512, a.f &= ~le), lt(a), rn(a), Tr(a, 0);
	}
}
function Tr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) wr(e, n[r]);
}
function Er(e) {
	var t = e.f;
	if (!(t & 16384)) {
		N(e, b);
		var n = q, r = Nr;
		q = e, Nr = !0;
		try {
			t & 16777232 ? rr(e) : nr(e), tr(e);
			var i = Cr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = zr;
		} finally {
			Nr = r, q = n;
		}
	}
}
async function Dr() {
	if (Ge) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), bt();
}
function G(e) {
	var t = (e.f & 2) != 0;
	if (fr?.add(e), K !== null && !Fr && !(q !== null && q.f & 16384) && (Ir === null || !l.call(Ir, e))) {
		var n = K.deps;
		if (K.f & 2097152) e.rv < Br && (e.rv = Br, J === null && n !== null && n[Lr] === e ? Lr++ : J === null ? J = [e] : J.push(e));
		else {
			(K.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [K] : l.call(r, K) || r.push(K);
		}
	}
	if (Pr && gn.has(e)) return gn.get(e);
	if (t) {
		var i = e;
		if (Pr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || kr(i)) && (a = tn(i)), gn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !Fr && K !== null && (Nr || (K.f & 512) != 0), s = (i.f & ne) === 0;
		xr(i) && (o && (i.f |= 512), nn(i)), o && !s && (an(i), Or(i));
	}
	if (F?.has(e)) return F.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Or(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (an(t), Or(t));
}
function kr(e) {
	if (e.v === T) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (gn.has(t) || t.f & 2 && kr(t)) return !0;
	return !1;
}
function Ar(e) {
	var t = Fr;
	try {
		return Fr = !0, e();
	} finally {
		Fr = t;
	}
}
function jr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (pe in e) Mr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && pe in n && Mr(n);
		}
	}
}
function Mr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Mr(e[n], t);
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
var Nr, Pr, K, Fr, q, Ir, J, Lr, Rr, zr, Br, Vr, Y = e((() => {
	r(), y(), W(), C(), R(), on(), qe(), Ye(), Xe(), M(), I(), ct(), je(), pr(), Bn(), dt(), Pe(), Nr = !1, Pr = !1, K = null, Fr = !1, q = null, Ir = null, J = null, Lr = 0, Rr = null, zr = 1, Br = 0, Vr = Br;
})), Hr = e((() => {
	La(), Va(), W();
}));
//#endregion
//#region node_modules/svelte/src/utils.js
function Ur(e) {
	return Gr.includes(e);
}
var Wr, Gr, Kr, qr = e((() => {
	Wr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), [...Wr], Gr = ["touchstart", "touchmove"], Kr = [
		"$state",
		"$state.raw",
		"$derived",
		"$derived.by"
	], [...Kr];
})), Jr = e((() => {
	C(), qr(), Y();
})), Yr = e((() => {
	C(), A(), M();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function Xr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Qr.call(t, e), !e.cancelBubble) return Rn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nt(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Zr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Xr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Gn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Qr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ni = e;
	var o = 0, s = ni === e && e[$r];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[$r] = t;
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
		hr(null), gr(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[$r]?.[r];
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
			e[$r] = t, delete e.currentTarget, hr(u), gr(f);
		}
	}
}
var $r, ei, ti, ni, ri = e((() => {
	W(), y(), A(), at(), Y(), Bn(), $r = Symbol("events"), ei = /* @__PURE__ */ new Set(), ti = /* @__PURE__ */ new Set(), ni = null;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
function ii(e) {
	return oi?.createHTML(e) ?? e;
}
function ai(e) {
	var t = Dn("template");
	return t.innerHTML = ii(e.replaceAll("<!>", "<!---->")), t.content;
}
var oi, si = e((() => {
	H(), oi = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ci(e, t) {
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
		if (O) return ci(k, null), k;
		i === void 0 && (i = ai(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Sn(i)));
		var t = r || jn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Sn(t), s = t.lastChild;
			ci(o, s);
		} else ci(t, t);
		return t;
	};
}
function Z(e = "") {
	if (!O) {
		var t = z(e + "");
		return ci(t, t), t;
	}
	var n = k;
	return n.nodeType === 3 ? On(n) : (n.before(n = z()), E(n)), ci(n, n), n;
}
function li() {
	if (O) return ci(k, null), k;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = z();
	return e.append(t, n), ci(t, n), e;
}
function Q(e, t) {
	if (O) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = k), Ie();
		return;
	}
	e !== null && e.before(t);
}
var ui = e((() => {
	A(), H(), si(), Y(), je(), C();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
function $(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function di(e, t) {
	return fi(e, t);
}
function fi(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }) {
	xn();
	var c = void 0, l = Yn(() => {
		var l = n ?? t.appendChild(z());
		Vt(l, { pending: () => {} }, (t) => {
			Qe({});
			var n = j;
			if (a && (n.c = a), i && (r.$$events = i), O && ci(t, null), pi = o, c = e(t, r) || {}, pi = !0, O && (q.nodes.end = k, k === null || k.nodeType !== 8 || k.data !== "]")) throw Me(), ke;
			$e();
		}, s);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = Ur(r);
					for (let e of [t, document]) {
						var a = mi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), mi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Qr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(u(ei)), ti.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = mi.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Qr), r.delete(e), r.size === 0 && mi.delete(n)) : r.set(e, i);
			}
			ti.delete(f), l !== n && l.parentNode?.removeChild(l);
		};
	});
	return hi.set(c, l), c;
}
var pi, mi, hi, gi = e((() => {
	r(), H(), je(), Y(), M(), W(), A(), y(), ri(), Pe(), w(), ui(), qr(), C(), Wt(), mi = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new WeakMap();
})), _i = e((() => {
	C(), A(), W(), R(), gi(), Y();
})), vi = e((() => {
	y(), C(), M(), qr();
})), yi = e((() => {
	w(), M();
})), bi = e((() => {
	Je(), W(), Y(), Xe();
})), xi = e((() => {
	Yt(), Y(), A();
})), Si = e((() => {
	w();
})), Ci, wi = e((() => {
	I(), W(), A(), H(), Ci = class {
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
				if (n) lr(n), this.#r.delete(t);
				else {
					var r = this.#n.get(t);
					r && (this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
				}
				for (let [t, n] of this.#e) {
					if (this.#e.delete(t), t === e) break;
					let r = this.#n.get(n);
					r && (ir(r.effect), this.#n.delete(n));
				}
				for (let [e, r] of this.#t) {
					if (e === t || this.#r.has(e)) continue;
					let i = () => {
						if (Array.from(this.#e.values()).includes(e)) {
							var t = document.createDocumentFragment();
							dr(r, t), t.append(z()), this.#n.set(e, {
								effect: r,
								fragment: t
							});
						} else ir(r);
						this.#r.delete(e), this.#t.delete(e);
					};
					this.#i || !n ? (this.#r.add(e), sr(r, i, !1)) : i();
				}
			}
		};
		#o = (e) => {
			this.#e.delete(e);
			let t = Array.from(this.#e.values());
			for (let [e, n] of this.#n) t.includes(e) || (ir(n.effect), this.#n.delete(e));
		};
		ensure(e, t) {
			var n = P, r = En();
			if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
				var i = document.createDocumentFragment(), a = z();
				i.append(a), this.#n.set(e, {
					effect: er(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, er(() => t(this.anchor)));
			if (this.#e.set(n, e), r) {
				for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
				for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
				n.oncommit(this.#a), n.ondiscard(this.#o);
			} else O && (this.anchor = k), this.#a(n);
		}
	};
})), Ti = e((() => {
	y(), W(), R(), A(), at(), M(), I(), wi(), Yt();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Ei(e, t, n = !1) {
	var r;
	O && (r = k, Ie());
	var i = new Ci(e), a = n ? ie : 0;
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
	$n(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
var Di = e((() => {
	C(), A(), W(), wi();
})), Oi = e((() => {
	M(), W(), A(), wi();
})), ki = e((() => {
	W(), A(), H();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ai(e, t) {
	return t;
}
function ji(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		sr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Mi(e, u(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n, d = l.parentNode;
			Tn(d), d.append(l), e.items.clear();
		}
		Mi(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Mi(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ce, dr(a, document.createDocumentFragment())) : ir(t[i], n);
	}
}
function Ni(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = O ? E(/* @__PURE__ */ Sn(l)) : l.appendChild(z());
	}
	O && Ie();
	var d = null, f = /* @__PURE__ */ Qt(() => {
		var e = n();
		return s(e) ? e : e == null ? [] : u(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Fi(v, p, o, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ce, Li(d, null, o)) : lr(d) : sr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: $n(() => {
			p = G(f);
			var e = p.length;
			let s = !1;
			O && ze(o) === "[!" != (e === 0) && (o = Re(), E(o), Fe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = P, v = En(), y = 0; y < e; y += 1) {
				O && k.nodeType === 8 && k.data === "]" && (o = k, s = !0, Fe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && dn(S.v, b), S.i && dn(S.i, y), v && u.unskip_effect(S.e)) : (S = Ii(c, h ? o : zi ??= z(), b, x, y, i, t, n), h || (S.e.f |= ce), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = er(() => a(o)) : (d = er(() => a(zi ??= z())), d.f |= ce)), e > l.size && be("", "", ""), O && e > 0 && E(Re()), !h) if (m.set(u, l), v) {
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
function Pi(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Fi(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Pi(e.effect.first), l, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (lr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ce, _ === c) Li(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Ri(e, d, _), Ri(e, _, y), Li(_, y, n), d = _, p = [], m = [], c = Pi(d.next);
			continue;
		}
		if (_ !== c) {
			if (l !== void 0 && l.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Li(p[x], b, n);
					for (x = 0; x < m.length; x += 1) l.delete(m[x]);
					Ri(e, S.prev, ee.next), Ri(e, d, S), Ri(e, ee, b), c = b, d = ee, --v, p = [], m = [];
				} else l.delete(_), Li(_, c, n), Ri(e, _.prev, _.next), Ri(e, _, d === null ? e.effect.first : d.next), Ri(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (l ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Pi(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = Pi(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Mi(e, u(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var te = [];
		if (l !== void 0) for (_ of l) _.f & 8192 || te.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && te.push(c), c = Pi(c.next);
		var ne = te.length;
		if (ne > 0) {
			var re = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) te[v].nodes?.a?.fix();
			}
			ji(e, te, re);
		}
	}
	a && nt(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Ii(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? sn(n) : /* @__PURE__ */ ln(n, !1, !1) : null, l = o & 2 ? sn(i) : null;
	return {
		v: c,
		i: l,
		e: er(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Li(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Cn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Ri(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
var zi, Bi = e((() => {
	je(), A(), H(), W(), R(), y(), C(), at(), Y(), r(), on(), I(), w();
})), Vi = e((() => {
	W(), A(), ui(), qr(), M(), H(), Y(), C();
})), Hi = e((() => {
	A();
})), Ui = e((() => {
	qr();
})), Wi = e((() => {
	C(), W(), M(), A(), si(), ui(), w(), H(), Ui(), wi();
})), Gi = e((() => {
	C(), W(), A(), wi();
})), Ki = e((() => {
	y();
})), qi = e((() => {
	Ki();
})), Ji = e((() => {
	y(), W(), Y(), qi(), gi(), C(), at(), Bn();
})), Yi = e((() => {
	A(), H(), W(), gi(), Y(), M(), C(), ui(), qr(), wi(), Ji();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function Xi(e, t) {
	let n = null, r = O;
	var i;
	if (O) {
		n = k;
		for (var a = /* @__PURE__ */ Sn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Cn(a);
		if (a === null) Fe(!1);
		else {
			var o = /* @__PURE__ */ Cn(a);
			a.remove(), E(o);
		}
	}
	O || (i = document.head.appendChild(z()));
	try {
		$n(() => t(i), ae | oe);
	} finally {
		r && (Fe(!0), E(n));
	}
}
var Zi = e((() => {
	A(), H(), W(), C();
})), Qi = e((() => {
	W(), H();
})), $i = e((() => {
	W(), Y();
})), ea = e((() => {
	W();
})), ta = e((() => {
	y();
})), na = e((() => {
	ta(), A();
})), ra = e((() => {
	ta(), A();
})), ia = e((() => {
	W(), Bn(), yn(), y(), I();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function aa(e) {
	if (O) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					oa(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					oa(e, "checked", null), e.checked = r;
				}
			}
		};
		e.__on_r = n, nt(n), Fn();
	}
}
function oa(e, t, n, r) {
	var i = sa(e);
	O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === da) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ca(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function sa(e) {
	return e.__attributes ??= {
		[la]: e.nodeName.includes("-"),
		[ua]: e.namespaceURI === Ae
	};
}
function ca(e) {
	var t = e.getAttribute("is") || e.nodeName, n = fa.get(t);
	if (n) return n;
	fa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && n.push(o);
		i = g(i);
	}
	return n;
}
var la, ua, da, fa, pa = e((() => {
	r(), A(), y(), ri(), Ln(), Pe(), C(), at(), qr(), Y(), ea(), ta(), na(), ra(), je(), W(), ia(), Yt(), la = Symbol("is custom element"), ua = Symbol("is html"), da = ge ? "link" : "LINK", fa = /* @__PURE__ */ new Map();
})), ma = e((() => {
	A(), H(), si(), ea();
})), ha = e((() => {
	Bn();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function ga(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	zn(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = _a(e) ? va(a) : a, n(a), P !== null && r.add(P), await Dr(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (O && e.defaultValue !== e.value || Ar(t) == null && e.value) && (n(_a(e) ? va(e.value) : e.value), P !== null && r.add(P)), Zn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = Ge ? kt : P;
			if (r.has(i)) return;
		}
		_a(e) && n === va(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function _a(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function va(e) {
	return e === "" ? null : +e;
}
var ya = e((() => {
	r(), W(), Bn(), w(), yn(), at(), A(), Y(), M(), I(), qe();
})), ba = e((() => {
	W(), Bn();
})), xa = e((() => {
	Bn();
})), Sa = e((() => {
	W(), y();
})), Ca = e((() => {
	W(), Y();
})), wa = e((() => {
	C(), M(), W(), Y();
})), Ta = e((() => {
	W(), Bn();
})), Ea = e((() => {
	W(), Bn();
})), Da = e((() => {
	y(), W(), ri();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Oa(e = !1) {
	let t = j, n = t.l.u;
	if (!n) return;
	let r = () => jr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Xt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => G(i);
	}
	n.b.length && Jn(() => {
		ka(t, r), a(n.b);
	}), Kn(() => {
		let e = Ar(() => n.m.map(i));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Kn(() => {
		ka(t, r), a(n.a);
	});
}
function ka(e, t) {
	if (e.l.s) for (let t of e.l.s) G(t);
	t();
}
var Aa = e((() => {
	y(), M(), on(), W(), Y();
})), ja = e((() => {
	R(), Y(), y();
})), Ma = e((() => {
	y(), R(), on(), Y(), w(), C(), yn(), vt(), W();
})), Na = e((() => {
	M(), W(), vt(), Yt();
})), Pa = e((() => {
	C(), W(), R(), gi(), Y(), I(), y(), w(), M(), qe(), dt(), Da();
})), Fa = e((() => {
	Pa(), W(), ui(), y(), H();
})), Ia = e((() => {
	C(), Je(), Y();
})), La = e((() => {
	Hr(), M(), Jr(), Yr(), _i(), vi(), yi(), Ye(), bi(), xi(), Si(), Ti(), Di(), Oi(), ki(), Bi(), Vi(), Hi(), Wi(), Gi(), Yi(), Zi(), Qi(), $i(), ea(), pa(), na(), ri(), Ln(), ma(), ra(), Ji(), ha(), ya(), ba(), xa(), Sa(), ia(), Ca(), wa(), Ta(), Ea(), A(), Da(), Aa(), ja(), ui(), Yt(), I(), on(), W(), R(), Ma(), vt(), Wt(), pr(), gi(), Y(), Na(), Ki(), yn(), Fa(), H(), ta(), Je(), y(), Ui(), bn(), Ia(), ct();
})), Ra = e((() => {
	A(), w();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function za(e) {
	j === null && _e("onMount"), Ke && j.l !== null ? Ba(j).m.push(e) : Kn(() => {
		let t = Ar(e);
		if (typeof t == "function") return t;
	});
}
function Ba(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var Va = e((() => {
	Y(), y(), La(), w(), qe(), M(), r(), I(), Ra(), gi(), Wi();
})), Ha = e((() => {})), Ua = e((() => {
	Ha(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), Wa = e((() => {
	qe(), We();
}));
//#endregion
//#region frontend/src/App.svelte
function Ga(e, t) {
	Qe(t, !1);
	let n = /* @__PURE__ */ ln("buyer"), r = /* @__PURE__ */ ln("storefront"), i = /* @__PURE__ */ ln([]), a = /* @__PURE__ */ ln(null), o = /* @__PURE__ */ ln([]), s = /* @__PURE__ */ ln({
		items: [],
		subtotal: 0,
		tax: 0,
		total: 0
	}), c = /* @__PURE__ */ ln(null), l = /* @__PURE__ */ ln([]), u = /* @__PURE__ */ ln({
		name: "",
		description: "",
		price: "",
		stock: ""
	}), d = /* @__PURE__ */ ln(!0), f = /* @__PURE__ */ ln(""), p = /* @__PURE__ */ ln("");
	function m() {
		return typeof window > "u" ? "/buyer/home" : window.location.pathname;
	}
	function h() {
		let e = m().match(/\/buyer\/products\/(\d+)/);
		return e ? Number(e[1]) : null;
	}
	function g() {
		let e = m().match(/\/buyer\/orders\/(\d+)\/confirmation/);
		return e ? Number(e[1]) : null;
	}
	function _(e = m()) {
		return e.startsWith("/seller") ? "seller" : "buyer";
	}
	function v() {
		let e = m();
		return e === "/seller/home" ? "seller-home" : e === "/seller/inventory" ? "seller-inventory" : e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
	}
	function y() {
		return G(r) === "seller-home" ? "Seller Home" : G(r) === "seller-inventory" ? "Seller Inventory" : G(r) === "cart" ? "Buyer Cart" : G(r) === "checkout" ? "Checkout Review" : G(r) === "compare" ? "Compare Products" : G(r) === "confirmation" ? "Order Confirmation" : G(r) === "product" ? "Product Detail" : "Buyer Storefront";
	}
	async function b(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function x(e) {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD"
		}).format(e);
	}
	function S(e) {
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "medium",
			timeStyle: "short"
		}).format(new Date(e));
	}
	function ee(e) {
		return e === "demo_card" ? "Demo Credit Card" : e;
	}
	function te(e, t) {
		return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
	}
	async function ne(e = !1) {
		L(d, !0), L(f, ""), e && L(p, "");
		try {
			L(i, await b("/api/buyer/products"));
		} catch (e) {
			L(f, e.message || "Could not load products.");
		} finally {
			L(d, !1);
		}
	}
	async function re() {
		L(d, !0), L(f, ""), L(p, "");
		try {
			L(a, await b(`/api/buyer/products/${h()}`));
		} catch (e) {
			L(f, e.message || "Could not load product.");
		} finally {
			L(d, !1);
		}
	}
	async function ie() {
		L(d, !0), L(f, ""), L(p, "");
		try {
			L(s, await b("/api/buyer/cart"));
		} catch (e) {
			L(f, e.message || "Could not load cart.");
		} finally {
			L(d, !1);
		}
	}
	async function ae() {
		L(d, !0), L(f, ""), L(p, "");
		try {
			L(o, (await b("/api/buyer/compare")).items || []);
		} catch (e) {
			L(f, e.message || "Could not load comparison list.");
		} finally {
			L(d, !1);
		}
	}
	async function oe() {
		L(d, !0), L(f, "");
		try {
			L(l, await b("/api/seller/products"));
		} catch (e) {
			L(f, e.message || "Could not load seller inventory.");
		} finally {
			L(d, !1);
		}
	}
	async function se() {
		L(d, !0), L(f, ""), L(p, "");
		try {
			L(c, await b(`/api/buyer/orders/${g()}`)), L(p, "Your order has been placed successfully.");
		} catch (e) {
			L(f, e.message || "Could not load order confirmation.");
		} finally {
			L(d, !1);
		}
	}
	async function ce() {
		if (L(n, _()), L(r, v()), G(r) === "seller-home") {
			L(d, !1), L(f, "");
			return;
		}
		if (G(r) === "seller-inventory") {
			await oe();
			return;
		}
		if (G(r) === "cart") {
			await ie();
			return;
		}
		if (G(r) === "checkout") {
			await ie();
			return;
		}
		if (G(r) === "compare") {
			await ae();
			return;
		}
		if (G(r) === "confirmation") {
			await se();
			return;
		}
		if (G(r) === "product") {
			await re();
			return;
		}
		await ne();
	}
	async function le() {
		L(p, "");
		try {
			await b("/api/seller/products", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: G(u).name,
					description: G(u).description,
					price: G(u).price,
					stock: G(u).stock
				})
			}), L(u, {
				name: "",
				description: "",
				price: "",
				stock: ""
			}), L(p, "Listing submitted for admin approval."), await oe();
		} catch (e) {
			L(p, e.message || "Could not create listing.");
		}
	}
	async function ue(e) {
		L(p, "");
		try {
			await b("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(p, "Item added to cart.");
		} catch (e) {
			L(p, e.message || "Could not add item to cart.");
		}
	}
	async function de(e) {
		L(p, "");
		try {
			await b("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(p, "Item added to comparison list.");
		} catch (e) {
			L(p, e.message || "Could not add item to list.");
		}
	}
	async function fe(e) {
		L(p, "");
		try {
			await b(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(p, "Item removed from cart."), await ie();
		} catch (e) {
			L(p, e.message || "Could not remove item.");
		}
	}
	async function pe(e) {
		L(p, "");
		try {
			await b(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(p, "Item removed from comparison list."), await ae();
		} catch (e) {
			L(p, e.message || "Could not remove item.");
		}
	}
	async function me() {
		L(p, "");
		try {
			let e = await b("/api/buyer/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ paymentMethod: "demo_card" })
			});
			window.location.href = `/buyer/orders/${e.order.id}/confirmation`;
		} catch (e) {
			L(p, e.message || "Checkout failed."), await ie();
		}
	}
	async function he() {
		L(p, "");
		try {
			await b("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(p, e.message || "Could not log out.");
		}
	}
	za(async () => {
		await ce();
	}), Oa();
	var ge = bo();
	Xi("13zv0lp", (e) => {
		Qn((e) => {
			An.title = e ?? "";
		}, [() => y()]);
	});
	var C = B(ge), _e = B(C), ve = B(_e), ye = B(ve, !0);
	D(ve), Le(2), D(_e);
	var be = V(_e, 2), xe = B(be), Se = (e) => {
		var t = Ka();
		Le(4), Q(e, t);
	}, Ce = (e) => {
		var t = qa();
		Le(6), Q(e, t);
	};
	Ei(xe, (e) => {
		G(n) === "seller" ? e(Se) : e(Ce, -1);
	});
	var we = V(xe, 2);
	D(be), D(C);
	var Te = V(C, 2), Ee = B(Te), De = B(Ee), Oe = B(De), w = B(Oe), ke = (e) => {
		Q(e, Z("Seller workspace"));
	}, T = (e) => {
		Q(e, Z("Inventory management"));
	}, Ae = (e) => {
		Q(e, Z("Cart summary"));
	}, je = (e) => {
		Q(e, Z("Side-by-side shortlist"));
	}, Me = (e) => {
		Q(e, Z("Checkout review"));
	}, Ne = (e) => {
		Q(e, Z("Purchase complete"));
	}, Pe = (e) => {
		Q(e, Z("Product spotlight"));
	}, Fe = (e) => {
		Q(e, Z("Live inventory"));
	};
	Ei(w, (e) => {
		G(r) === "seller-home" ? e(ke) : G(r) === "seller-inventory" ? e(T, 1) : G(r) === "cart" ? e(Ae, 2) : G(r) === "compare" ? e(je, 3) : G(r) === "checkout" ? e(Me, 4) : G(r) === "confirmation" ? e(Ne, 5) : G(r) === "product" ? e(Pe, 6) : e(Fe, -1);
	}), D(Oe);
	var E = V(Oe, 2), Ie = B(E), Re = (e) => {
		Q(e, Z("Seller control center"));
	}, ze = (e) => {
		Q(e, Z("Your listings"));
	}, O = (e) => {
		Q(e, Z("Your cart"));
	}, k = (e) => {
		Q(e, Z("Compare products"));
	}, A = (e) => {
		Q(e, Z("Review your order"));
	}, Be = (e) => {
		Q(e, Z("Order confirmation"));
	}, Ve = (e) => {
		Q(e, Z("Hardware details"));
	}, He = (e) => {
		Q(e, Z("Available hardware"));
	};
	Ei(Ie, (e) => {
		G(r) === "seller-home" ? e(Re) : G(r) === "seller-inventory" ? e(ze, 1) : G(r) === "cart" ? e(O, 2) : G(r) === "compare" ? e(k, 3) : G(r) === "checkout" ? e(A, 4) : G(r) === "confirmation" ? e(Be, 5) : G(r) === "product" ? e(Ve, 6) : e(He, -1);
	}), D(E), D(De);
	var Ue = V(De, 2);
	D(Ee);
	var We = V(Ee, 2), Ge = (e) => {
		Q(e, Ja());
	}, Ke = (e) => {
		var t = Ya(), n = B(t, !0);
		D(t), U(() => $(n, G(f))), Q(e, t);
	}, qe = (e) => {
		Q(e, Xa());
	}, Je = (e) => {
		var t = eo(), n = wn(t), r = B(n), i = B(r), a = V(B(i), 2);
		aa(a);
		var o = V(a, 4);
		Pn(o);
		var s = V(o, 4);
		aa(s);
		var c = V(s, 4);
		aa(c);
		var d = V(c, 2);
		D(i), D(r);
		var f = V(r, 2), p = V(B(f), 2), m = B(p, !0);
		D(p), D(f), D(n);
		var h = V(n, 2), g = (e) => {
			Q(e, Za());
		}, _ = (e) => {
			var t = $a();
			Ni(t, 5, () => G(l), Ai, (e, t) => {
				var n = Qa(), r = B(n), i = B(r), a = B(i), o = (e) => {
					Q(e, Z("Pending approval"));
				}, s = (e) => {
					Q(e, Z("Rejected"));
				}, c = (e) => {
					Q(e, Z("Listed"));
				}, l = (e) => {
					Q(e, Z("Delisted"));
				};
				Ei(a, (e) => {
					G(t).listingStatus === "pending" ? e(o) : G(t).listingStatus === "rejected" ? e(s, 1) : G(t).isListed ? e(c, 2) : e(l, -1);
				}), D(i);
				var u = V(i, 2), d = B(u);
				D(u), D(r);
				var f = V(r, 2), p = B(f, !0);
				D(f);
				var m = V(f, 2), h = B(m, !0);
				D(m);
				var g = V(m, 2), _ = B(g), v = B(_), y = B(v, !0);
				D(v);
				var b = V(v, 2), S = B(b);
				D(b), D(_), D(g), D(n), U((e, n) => {
					$(d, `${G(t).stock ?? ""} in stock`), $(p, G(t).name), $(h, G(t).description || "No description provided."), $(y, e), $(S, `Created ${n ?? ""}`);
				}, [() => x(G(t).price), () => new Date(G(t).createdAt).toLocaleDateString()]), Q(e, n);
			}), D(t), Q(e, t);
		};
		Ei(h, (e) => {
			G(l).length === 0 ? e(g) : e(_, -1);
		}), U(() => $(m, G(l).length)), ga(a, () => G(u).name, (e) => un(u, G(u).name = e)), ga(o, () => G(u).description, (e) => un(u, G(u).description = e)), ga(s, () => G(u).price, (e) => un(u, G(u).price = e)), ga(c, () => G(u).stock, (e) => un(u, G(u).stock = e)), Zr("click", d, le), Q(e, t);
	}, Ye = (e) => {
		Q(e, to());
	}, Xe = (e) => {
		var t = no(), n = B(t), r = B(n), i = B(r, !0);
		D(r);
		var o = V(r, 2), s = B(o);
		D(o), D(n);
		var c = V(n, 2), l = B(c), u = B(l), d = B(u, !0);
		D(u);
		var f = V(u, 2), p = B(f, !0);
		D(f), D(l);
		var m = V(l, 2), h = B(m), g = V(h, 2);
		D(m), D(c);
		var _ = V(c, 2), v = B(_, !0);
		D(_), Le(2), D(t), U((e) => {
			$(i, G(a).seller.username), $(s, `${G(a).stock ?? ""} in stock`), $(d, G(a).name), $(p, e), $(v, G(a).description || "No description provided.");
		}, [() => x(G(a).price)]), Zr("click", h, () => ue(G(a).id)), Zr("click", g, () => de(G(a).id)), Q(e, t);
	}, Ze = (e) => {
		var t = oo(), n = B(t), r = B(n), i = (e) => {
			Q(e, ro());
		}, a = (e) => {
			var t = ao();
			Ni(t, 5, () => G(s).items, Ai, (e, t) => {
				var n = io(), r = B(n), i = B(r), a = B(i, !0);
				D(i);
				var o = V(i, 2), s = B(o, !0);
				D(o);
				var c = V(o, 2), l = B(c);
				D(c), D(r);
				var u = V(r, 2), d = B(u), f = B(d, !0);
				D(d);
				var p = V(d, 2);
				D(u), D(n), U((e, n) => {
					$(a, G(t).product.seller.username), $(s, G(t).product.name), $(l, `Quantity ${G(t).quantity ?? ""} at ${e ?? ""} each`), $(f, n);
				}, [() => x(G(t).product.price), () => x(G(t).product.price * G(t).quantity)]), Zr("click", p, () => fe(G(t).id)), Q(e, n);
			}), D(t), Q(e, t);
		};
		Ei(r, (e) => {
			G(s).items.length === 0 ? e(i) : e(a, -1);
		}), D(n);
		var o = V(n, 2), c = V(B(o), 2), l = B(c, !0);
		D(c);
		var u = V(c, 4), d = B(u, !0);
		D(u);
		var f = V(u, 4), p = B(f, !0);
		D(f), Le(2), D(o), D(t), U((e, t, n) => {
			$(l, e), $(d, t), $(p, n);
		}, [
			() => x(G(s).subtotal),
			() => x(G(s).tax),
			() => x(G(s).total)
		]), Q(e, t);
	}, et = (e) => {
		var t = uo(), n = B(t), r = B(n), i = (e) => {
			Q(e, so());
		}, a = (e) => {
			var t = lo();
			Ni(t, 5, () => G(s).items, Ai, (e, t) => {
				var n = co(), r = B(n), i = B(r), a = B(i, !0);
				D(i);
				var o = V(i, 2), s = B(o, !0);
				D(o);
				var c = V(o, 2), l = B(c);
				D(c), D(r);
				var u = V(r, 2), d = B(u), f = B(d, !0);
				D(d), D(u), D(n), U((e, n) => {
					$(a, G(t).product.seller.username), $(s, G(t).product.name), $(l, `Quantity ${G(t).quantity ?? ""} at ${e ?? ""} each`), $(f, n);
				}, [() => x(G(t).product.price), () => x(G(t).product.price * G(t).quantity)]), Q(e, n);
			}), D(t), Q(e, t);
		};
		Ei(r, (e) => {
			G(s).items.length === 0 ? e(i) : e(a, -1);
		}), D(n);
		var o = V(n, 2), c = V(B(o), 2), l = B(c, !0);
		D(c);
		var u = V(c, 4), d = B(u, !0);
		D(u);
		var f = V(u, 4), p = B(f, !0);
		D(f);
		var m = V(f, 4), h = B(m);
		Le(2), D(m), D(o), D(t), U((e, t, n) => {
			$(l, e), $(d, t), $(p, n), h.disabled = G(s).items.length === 0;
		}, [
			() => x(G(s).subtotal),
			() => x(G(s).tax),
			() => x(G(s).total)
		]), Zr("click", h, me), Q(e, t);
	}, j = (e) => {
		var t = po(), n = B(t), r = B(n);
		Ni(r, 5, () => G(c).items, Ai, (e, t) => {
			var n = fo(), r = B(n), i = B(r), a = B(i);
			D(i);
			var o = V(i, 2), s = B(o, !0);
			D(o);
			var c = V(o, 2), l = B(c);
			D(c), D(r);
			var u = V(r, 2), d = B(u), f = B(d, !0);
			D(d), D(u), D(n), U((e, n) => {
				$(a, `Seller ID ${G(t).sellerId ?? ""}`), $(s, G(t).productName), $(l, `Quantity ${G(t).quantity ?? ""} at ${e ?? ""} each`), $(f, n);
			}, [() => x(G(t).unitPrice), () => x(G(t).lineTotal)]), Q(e, n);
		}), D(r), D(n);
		var i = V(n, 2), a = V(B(i), 2), o = B(a);
		D(a);
		var s = V(a, 4), l = B(s, !0);
		D(s);
		var u = V(s, 4), d = B(u, !0);
		D(u);
		var f = V(u, 4), p = B(f, !0);
		D(f);
		var m = V(f, 4), h = B(m, !0);
		D(m);
		var g = V(m, 4), _ = B(g, !0);
		D(g);
		var v = V(g, 4), y = B(v, !0);
		D(v), Le(2), D(i), D(t), U((e, t, n, r, i) => {
			$(o, `#${G(c).id ?? ""}`), $(l, G(c).status), $(d, e), $(p, t), $(h, n), $(_, r), $(y, i);
		}, [
			() => ee(G(c).paymentMethod),
			() => S(G(c).createdAt),
			() => x(G(c).subtotal),
			() => x(G(c).taxAmount),
			() => x(G(c).total)
		]), Q(e, t);
	}, M = (e) => {
		var t = li(), n = wn(t), r = (e) => {
			Q(e, mo());
		}, i = (e) => {
			var t = go();
			Ni(t, 5, () => G(o), Ai, (e, t) => {
				var n = ho(), r = B(n), i = V(B(r), 2), a = B(i, !0);
				D(i), D(r);
				var o = V(r, 2), s = B(o, !0);
				D(o);
				var c = V(o, 2), l = B(c, !0);
				D(c);
				var u = V(c, 2), d = B(u), f = B(d);
				D(d);
				var p = V(d, 2), m = B(p), h = V(m, 2);
				D(p), D(u), D(n), U((e, n) => {
					$(a, e), $(s, G(t).name), $(l, n), oa(f, "href", `/buyer/products/${G(t).id}`);
				}, [() => x(G(t).price), () => te(G(t).description || "", 160)]), Zr("click", m, () => ue(G(t).id)), Zr("click", h, () => pe(G(t).id)), Q(e, n);
			}), D(t), Q(e, t);
		};
		Ei(n, (e) => {
			G(o).length === 0 ? e(r) : e(i, -1);
		}), Q(e, t);
	}, tt = (e) => {
		var t = vo();
		Ni(t, 5, () => G(i), Ai, (e, t, n, r) => {
			var i = _o(), a = B(i), o = B(a), s = B(o, !0);
			D(o);
			var c = V(o, 2), l = B(c);
			D(c), D(a);
			var u = V(a, 2), d = B(u, !0);
			D(u);
			var f = V(u, 2), p = B(f, !0);
			D(f);
			var m = V(f, 2), h = B(m), g = B(h), _ = B(g, !0);
			D(g);
			var v = V(g, 2);
			D(h);
			var y = V(h, 2), b = B(y), S = V(b, 2);
			D(y), D(m), D(i), U((e) => {
				$(s, G(t).seller.username), $(l, `${G(t).stock ?? ""} in stock`), $(d, G(t).name), $(p, G(t).description || "No description provided."), $(_, e), oa(v, "href", `/buyer/products/${G(t).id}`);
			}, [() => x(G(t).price)]), Zr("click", b, () => ue(G(t).id)), Zr("click", S, () => de(G(t).id)), Q(e, i);
		}), D(t), Q(e, t);
	};
	Ei(We, (e) => {
		G(d) ? e(Ge) : G(f) ? e(Ke, 1) : G(r) === "seller-home" ? e(qe, 2) : G(r) === "seller-inventory" ? e(Je, 3) : G(r) === "storefront" && G(i).length === 0 ? e(Ye, 4) : G(r) === "product" && G(a) ? e(Xe, 5) : G(r) === "cart" ? e(Ze, 6) : G(r) === "checkout" ? e(et, 7) : G(r) === "confirmation" && G(c) ? e(j, 8) : G(r) === "compare" ? e(M, 9) : e(tt, -1);
	});
	var nt = V(We, 2), rt = (e) => {
		var t = yo(), n = B(t, !0);
		D(t), U(() => $(n, G(p))), Q(e, t);
	};
	Ei(nt, (e) => {
		G(p) && e(rt);
	}), D(Te), D(ge), U(() => {
		oa(ge, "data-page", G(r)), $(ye, G(n) === "seller" ? "Seller Workspace" : "Buyer Workspace");
	}), Zr("click", we, he), Zr("click", Ue, ce), Q(e, ge), $e();
}
var Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo = e((() => {
	Ua(), Wa(), La(), Va(), Ka = /* @__PURE__ */ X("<a href=\"/seller/home\" class=\"action-link\">Seller Home</a> <a href=\"/seller/inventory\" class=\"action-link\">Inventory</a> <a href=\"/seller/classic/home\" class=\"action-link secondary\">Classic UI</a>", 1), qa = /* @__PURE__ */ X("<a href=\"/buyer/home\" class=\"action-link\">Storefront</a> <a href=\"/buyer/cart\" class=\"action-link\">Cart</a> <a href=\"/buyer/compare\" class=\"action-link\">Compare</a> <a href=\"/buyer/classic/home\" class=\"action-link secondary\">Classic UI</a>", 1), Ja = /* @__PURE__ */ X("<div class=\"state-card\">Loading products...</div>"), Ya = /* @__PURE__ */ X("<div class=\"state-card error\"> </div>"), Xa = /* @__PURE__ */ X("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your hardware storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a> <a class=\"checkout-link secondary-link\" href=\"/seller/classic/home\">Classic seller home</a></div></article> <article class=\"detail-card\"><p class=\"section-kicker\">Workflow</p> <h3>What this modern seller view currently covers</h3> <p class=\"detail-description\">Listing creation and inventory review are already connected to the existing Express seller APIs. This keeps the frontend modern while preserving the current backend and approval flow.</p></article></div>"), Za = /* @__PURE__ */ X("<div class=\"state-card\">No listings yet.</div>"), Qa = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), $a = /* @__PURE__ */ X("<div class=\"product-grid inventory-grid\"></div>"), eo = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\"/> <button class=\"checkout-link place-order-button\">Create listing</button></div></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1), to = /* @__PURE__ */ X("<div class=\"state-card\">No listed products are available right now.</div>"), no = /* @__PURE__ */ X("<article class=\"detail-card\"><div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>"), ro = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty.</div>"), io = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), ao = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), oo = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>"), so = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), co = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), lo = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), uo = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>"), fo = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), po = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a></div></aside></div>"), mo = /* @__PURE__ */ X("<div class=\"state-card\">No products marked for comparison.</div>"), ho = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), go = /* @__PURE__ */ X("<div class=\"product-grid compare-grid\"></div>"), _o = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), vo = /* @__PURE__ */ X("<div class=\"product-grid\"></div>"), yo = /* @__PURE__ */ X("<p class=\"status-banner\"> </p>"), bo = /* @__PURE__ */ X("<div class=\"page-shell\"><section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <button class=\"action-link logout-button\">Log Out</button></div></section> <section class=\"catalog\"><div class=\"catalog-header\"><div><p class=\"section-kicker\"><!></p> <h2><!></h2></div> <button class=\"refresh-button\">Refresh</button></div> <!> <!></section></div>");
})), So = e((() => {})), Co = /* @__PURE__ */ t((() => {
	Va(), xo(), So(), di(Ga, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default Co();
