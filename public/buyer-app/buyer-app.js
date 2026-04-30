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
})), b, x, S, ee, C, w, T, te, ne, E, re, ie, ae, oe, se, ce, le, ue, de, fe, pe, D = e((() => {
	b = 1024, x = 2048, S = 4096, ee = 8192, C = 16384, w = 32768, T = 1 << 25, te = 65536, ne = 1 << 18, E = 1 << 19, re = 1 << 20, ie = 1 << 25, ae = 65536, oe = 1 << 21, se = 1 << 22, ce = 1 << 23, le = Symbol("$state"), ue = Symbol("legacy props"), de = Symbol(""), fe = new class extends Error {
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
})), Oe, ke, Ae, je = e((() => {
	Oe = {}, ke = Symbol(), Ae = "http://www.w3.org/1999/xhtml";
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
	k = e;
}
function Ie(e) {
	if (e === null) throw Me(), Oe;
	return A = e;
}
function Le() {
	return Ie(/* @__PURE__ */ Dn(A));
}
function O(e) {
	if (k) {
		if (/* @__PURE__ */ Dn(A) !== null) throw Me(), Oe;
		A = e;
	}
}
function Re(e = 1) {
	if (k) {
		for (var t = e, n = A; t--;) n = /* @__PURE__ */ Dn(n);
		A = n;
	}
}
function ze(e = !0) {
	for (var t = 0, n = A;;) {
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
function Be(e) {
	if (!e || e.nodeType !== 8) throw Me(), Oe;
	return e.data;
}
var k, A, j = e((() => {
	D(), je(), Pe(), B(), k = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ve(e) {
	return e === this.v;
}
function He(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ue(e) {
	return !He(e, this.v);
}
var We = e((() => {}));
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
function Ge() {
	qe = !0;
}
var Ke, qe, Je = e((() => {
	Ke = !1, qe = !1;
})), Ye = e((() => {
	y();
})), Xe = e((() => {
	Ye(), D(), H(), J();
})), Ze = e((() => {
	r(), y(), he();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
function Qe(e) {
	M = e;
}
function $e(e, t = !1, n) {
	M = {
		p: M,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l: qe && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function et(e) {
	var t = M, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Xn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, M = t.p, e ?? {};
}
function tt() {
	return !qe || M !== null && M.l === null;
}
var M, N = e((() => {
	r(), De(), J(), H(), Je(), D(), M = null;
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
	var t = q;
	if (t === null) return K.f |= ce, e;
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
	r(), je(), B(), D(), y(), J();
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
	D(), dt = ~(x | S | b);
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function pt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ae, pt(t.deps));
}
function mt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), pt(e.deps), P(e, b);
}
var ht = e((() => {
	D(), ft();
})), gt = e((() => {
	J(), y();
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
	gt(), _t(), y(), J(), H(), bn(), yt = !1, bt = !1;
})), St = e((() => {
	D(), Ye(), J();
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
		xe();
	} catch (e) {
		ct(e, Nt);
	}
}
function Tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Dr(r) && (Vt = /* @__PURE__ */ new Set(), Mr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && fr(r), Vt?.size > 0)) {
				vn.clear();
				for (let e of Vt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Vt.has(n) && (Vt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Mr(n);
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
	D(), Je(), y(), J(), De(), ot(), r(), lt(), bn(), H(), ht(), je(), ft(), xt(), Ze(), St(), jt = /* @__PURE__ */ new Set(), F = null, Mt = null, Nt = null, Pt = !1, Ft = !1, It = null, Lt = null, Rt = 0, zt = 1, Bt = class e {
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
					a ? r.f ^= b : i & 4 ? t.push(r) : Ke && i & 16777224 ? n.push(r) : Dr(r) && (i & 16 && this.#c.add(r), Mr(r));
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
			t !== ke && !this.previous.has(e) && this.previous.set(e, t), e.f & 8388608 || (this.current.set(e, [e.v, n]), Mt?.set(e, e.v));
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
				Rt = 0, Nt = null, It = null, Lt = null, Ft = !1, F = null, Mt = null, vn.clear();
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
			if (!Ke || !this.is_fork && jt.size === 1) {
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
				if (It !== null && t === q && (Ke || (K === null || !(K.f & 2)) && !yt)) return;
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
	let t = 0, n = dn(0), r;
	return () => {
		qn() && (U(n), rr(() => (t === 0 && (r = W(() => e(() => hn(n)))), t += 1, () => {
			rt(() => {
				--t, t === 0 && (r?.(), r = void 0, hn(n));
			});
		})));
	};
}
var Wt = e((() => {
	J(), H(), bn(), Xe(), r(), ot();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
function Gt(e, t, n, r) {
	new qt(e, t, n, r);
}
var Kt, qt, Jt = e((() => {
	D(), je(), N(), lt(), H(), J(), j(), ot(), De(), Pe(), r(), Ht(), bn(), Xe(), Wt(), B(), ht(), ft(), Kt = te | E, qt = class {
		parent;
		is_pending = !1;
		transform_error;
		#e;
		#t = k ? A : null;
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
				if (k) {
					let e = this.#t;
					Le();
					let t = e.data === "[!";
					if (e.data.startsWith("[?")) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Kt), k && (this.#e = A);
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
			e && (this.is_pending = !0, this.#o = or(() => e(this.#e)), rt(() => {
				var e = this.#c = document.createDocumentFragment(), t = Tn();
				e.append(t), this.#a = this.#x(() => or(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, pr(this.#o, () => {
					this.#o = null;
				}), this.#b(F));
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
			var t = q, n = K, r = M;
			Sr(this.#i), xr(this.#i), Qe(this.#i.ctx);
			try {
				return Bt.ensure(), e();
			} catch (e) {
				return st(e), null;
			} finally {
				Sr(t), xr(n), Qe(r);
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
			this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, rt(() => {
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
			this.#a &&= (ur(this.#a), null), this.#o &&= (ur(this.#o), null), this.#s &&= (ur(this.#s), null), k && (Ie(this.#t), Re(), Ie(ze()));
			var r = !1, i = !1;
			let a = () => {
				if (r) {
					Ne();
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
					ct(e, this.#i && this.#i.parent);
				}
				n && (this.#s = this.#x(() => {
					try {
						return or(() => {
							var t = q;
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
	let i = tt() ? en : nn;
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
	var e = q, t = K, n = M, r = F;
	return function(i = !0) {
		Sr(e), xr(t), Qe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Zt(e = !0) {
	Sr(null), xr(null), Qe(null), e && F?.deactivate();
}
function Qt() {
	var e = q, t = e.b, n = F, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
var $t = e((() => {
	D(), r(), N(), Jt(), lt(), J(), Ht(), un(), H();
}));
/* @__NO_SIDE_EFFECTS__ */
function en(e) {
	var t = 2 | x, n = K !== null && K.f & 2 ? K : null;
	return q !== null && (q.f |= E), {
		ctx: M,
		deps: null,
		effects: null,
		equals: Ve,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: ke,
		wv: 0,
		parent: n ?? q,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function tn(e, t, n) {
	let r = q;
	r === null && ge();
	var i = void 0, a = dn(ke), s = !K, c = /* @__PURE__ */ new Map();
	return nr(() => {
		var t = q, n = o();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(Zt);
		} catch (e) {
			n.reject(e), Zt();
		}
		var l = F;
		if (s) {
			if (t.f & 32768) var u = Qt();
			if (r.b.is_rendered()) c.get(l)?.reject(fe), c.delete(l);
			else {
				for (let e of c.values()) e.reject(fe);
				c.clear();
			}
			c.set(l, n);
		}
		let d = (e, n = void 0) => {
			if (u && u(n === fe), !(n === fe || t.f & 16384)) {
				if (l.activate(), n) a.f |= ce, pn(a, n);
				else {
					a.f & 8388608 && (a.f ^= ce), pn(a, e);
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
function nn(e) {
	let t = /* @__PURE__ */ en(e);
	return t.equals = Ue, t;
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
		e.f &= ~ae, rn(e), t = kr(e);
	} finally {
		Sr(n);
	}
	return t;
}
function sn(e) {
	var t = e.v, n = on(e);
	if (!e.equals(n) && (e.wv = Er(), (!F?.is_fork || e.deps === null) && (e.v = n, F?.capture(e, t, !0), e.deps === null))) {
		P(e, b);
		return;
	}
	Rr || (Mt === null ? ut(e) : (qn() || F?.is_fork) && Mt.set(e, n));
}
function cn(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(fe), t.teardown = v, t.ac = null, jr(t, 0), cr(t));
}
function ln(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Mr(t);
}
var un = e((() => {
	r(), D(), J(), We(), De(), Pe(), H(), bn(), Ze(), Je(), N(), je(), Ht(), $t(), y(), ft();
}));
function dn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ve,
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
	return t || (r.equals = Ue), qe && n && M !== null && M.l !== null && (M.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return K !== null && (!zr || K.f & 131072) && tt() && K.f & 4325394 && (Br === null || !l.call(Br, e)) && Te(), pn(e, n ? xn(t) : t, Lt);
}
function pn(e, t, n = null) {
	if (!e.equals(t)) {
		var r = e.v;
		Rr ? vn.set(e, t) : vn.set(e, r), e.v = t;
		var i = Bt.ensure();
		if (i.capture(e, r), e.f & 2) {
			let t = e;
			e.f & 2048 && on(t), Mt === null && ut(t);
		}
		e.wv = Er(), gn(e, x, n), tt() && q !== null && q.f & 1024 && !(q.f & 96) && (Ur === null ? wr([e]) : Ur.push(e)), !i.is_fork && _n.size > 0 && !yn && mn();
	}
	return t;
}
function mn() {
	yn = !1;
	for (let e of _n) e.f & 1024 && P(e, S), Dr(e) && Mr(e);
	_n.clear();
}
function hn(e) {
	L(e, e.v + 1);
}
function gn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = tt(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & x) === 0;
			if (l && P(s, t), c & 2) {
				var u = s;
				Mt?.delete(u), c & 65536 || (c & 512 && (s.f |= ae), gn(u, S, n));
			} else if (l) {
				var d = s;
				c & 16 && Vt !== null && Vt.add(d), n === null ? Ot(d) : n.push(d);
			}
		}
	}
}
var _n, vn, yn, bn = e((() => {
	r(), J(), We(), D(), De(), Je(), y(), Xe(), Ze(), N(), Ht(), Sn(), un(), ft(), _n = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Map(), yn = !1;
}));
//#endregion
//#region node_modules/svelte/src/internal/client/proxy.js
function xn(e) {
	if (typeof e != "object" || !e || le in e) return e;
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
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Ce();
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
					let e = c(() => /* @__PURE__ */ fn(ke, a));
					n.set(t, e), hn(i);
				}
			} else L(r, ke), hn(i);
			return !0;
		},
		get(t, r, i) {
			if (r === le) return e;
			var o = n.get(r), s = r in t;
			if (o === void 0 && (!s || f(t, r)?.writable) && (o = c(() => /* @__PURE__ */ fn(xn(s ? t[r] : ke), a)), n.set(r, o)), o !== void 0) {
				var l = U(o);
				return l === ke ? void 0 : l;
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
				if (a !== void 0 && o !== ke) return {
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
			var r = n.get(t), i = r !== void 0 && r.v !== ke || Reflect.has(e, t);
			return (r !== void 0 || q !== null && (!i || f(e, t)?.writable)) && (r === void 0 && (r = c(() => /* @__PURE__ */ fn(i ? xn(e[t]) : ke, a)), n.set(t, r)), U(r) === ke) ? !1 : i;
		},
		set(e, t, o, s) {
			var l = n.get(t), u = t in e;
			if (r && t === "length") for (var d = o; d < l.v; d += 1) {
				var p = n.get(d + "");
				p === void 0 ? d in e && (p = c(() => /* @__PURE__ */ fn(ke, a)), n.set(d + "", p)) : L(p, ke);
			}
			if (l === void 0) (!u || f(e, t)?.writable) && (l = c(() => /* @__PURE__ */ fn(void 0, a)), L(l, xn(o)), n.set(t, l));
			else {
				u = l.v !== ke;
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
				return t === void 0 || t.v !== ke;
			});
			for (var [r, a] of n) a.v !== ke && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			we();
		}
	});
}
var Sn = e((() => {
	r(), J(), y(), bn(), D(), je(), De(), Xe(), Ze(), Je(), new Set([
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
	Pe(), Sn();
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
	if (!k) return /* @__PURE__ */ En(e);
	var n = /* @__PURE__ */ En(A);
	if (n === null) n = A.appendChild(Tn());
	else if (t && n.nodeType !== 3) {
		var r = Tn();
		return n?.before(r), Ie(r), r;
	}
	return t && Mn(n), Ie(n), n;
}
function On(e, t = !1) {
	if (!k) {
		var n = /* @__PURE__ */ En(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Dn(n) : n;
	}
	if (t) {
		if (A?.nodeType !== 3) {
			var r = Tn();
			return A?.before(r), Ie(r), r;
		}
		Mn(A);
	}
	return A;
}
function z(e, t = 1, n = !1) {
	let r = k ? A : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Dn(r);
	if (!k) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Tn();
			return r === null ? i?.after(a) : r.before(a), Ie(a), a;
		}
		Mn(r);
	}
	return Ie(r), r;
}
function kn(e) {
	e.textContent = "";
}
function An() {
	return !Ke || Vt !== null ? !1 : (q.f & w) !== 0;
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
	j(), r(), Cn(), y(), J(), Je(), D(), Ht(), je();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Rn(e) {
	k && /* @__PURE__ */ En(e) !== null && kn(e);
}
function zn() {
	Bn || (Bn = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t.__on_r?.();
		});
	}, { capture: !0 }));
}
var Bn, Vn = e((() => {
	j(), B(), ot(), Bn = !1;
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
		ctx: M,
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
			Mr(r);
		} catch (e) {
			throw ur(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= te));
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
	return P(t, b), t.teardown = e, t;
}
function Yn(e) {
	Wn("$effect");
	var t = q.f;
	if (!K && t & 32 && !(t & 32768)) {
		var n = M;
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
	Bt.ensure();
	let t = Kn(64 | E, e);
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
	var n = M, r = {
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
	var e = M;
	rr(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && P(n, S), Dr(n) && Mr(n), t.ran = !1;
		}
	});
}
function nr(e) {
	return Kn(se | E, e);
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
	return Kn(32 | E, e);
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
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (dr(e.nodes.start, e.nodes.end), n = !0), P(e, T), cr(e, t && !n), jr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	sr(e), e.f ^= T, e.f |= C;
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
		e.f ^= ee, e.f & 1024 || (P(e, x), Bt.ensure().schedule(e));
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
	J(), D(), De(), r(), y(), B(), N(), Ht(), $t(), Un(), ft();
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
	K !== null && (!Ke || K.f & 2) && (Br === null ? Br = [e] : Br.push(e));
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
			if (Dr(a) && sn(a), a.wv > e.wv) return !0;
		}
		t & 512 && Mt === null && P(e, b);
	}
	return !1;
}
function Or(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!Ke && Br !== null && l.call(Br, e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Or(a, t, !1) : t === a && (n ? P(a, x) : a.f & 1024 && P(a, S), Ot(a));
	}
}
function kr(e) {
	var t = Vr, n = Hr, r = Ur, i = K, a = Br, o = M, s = zr, c = Kr, l = e.f;
	Vr = null, Hr = 0, Ur = null, K = l & 96 ? null : e, Br = null, Qe(e.ctx), zr = !1, Kr = ++Gr, e.ac !== null && (Hn(() => {
		e.ac.abort(fe);
	}), e.ac = null);
	try {
		e.f |= oe;
		var u = e.fn, d = u();
		e.f |= w;
		var f = e.deps, p = F?.is_fork;
		if (Vr !== null) {
			var m;
			if (p || jr(e, Hr), f !== null && Hr > 0) for (f.length = Hr + Vr.length, m = 0; m < Vr.length; m++) f[Hr + m] = Vr[m];
			else e.deps = f = Vr;
			if (qn() && e.f & 512) for (m = Hr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Hr < f.length && (jr(e, Hr), f.length = Hr);
		if (tt() && Ur !== null && !zr && f !== null && !(e.f & 6146)) for (m = 0; m < Ur.length; m++) Or(Ur[m], e);
		if (i !== null && i !== e) {
			if (Gr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Gr;
			if (t !== null) for (let e of t) e.rv = Gr;
			Ur !== null && (r === null ? r = Ur : r.push(...Ur));
		}
		return e.f & 8388608 && (e.f ^= ce), d;
	} catch (e) {
		return st(e);
	} finally {
		e.f ^= oe, Vr = t, Hr = n, Ur = r, K = i, Br = a, Qe(o), zr = s, Kr = c;
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
		a.f & 512 && (a.f ^= 512, a.f &= ~ae), ut(a), cn(a), jr(a, 0);
	}
}
function jr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Ar(e, n[r]);
}
function Mr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		P(e, b);
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
	if (Ke) return new Promise((e) => {
		requestAnimationFrame(() => e()), setTimeout(() => e());
	});
	await Promise.resolve(), Ct();
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
		var o = (i.f & 512) == 0 && !zr && K !== null && (Lr || (K.f & 512) != 0), s = (i.f & w) === 0;
		Dr(i) && (o && (i.f |= 512), sn(i)), o && !s && (ln(i), Pr(i));
	}
	if (Mt?.has(e)) return Mt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Pr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ln(t), Pr(t));
}
function Fr(e) {
	if (e.v === ke) return !0;
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
	r(), y(), H(), D(), bn(), un(), Je(), Xe(), Ze(), N(), Ht(), lt(), je(), yr(), Un(), ft(), Pe(), Lr = !1, Rr = !1, K = null, zr = !1, q = null, Br = null, Vr = null, Hr = 0, Ur = null, Wr = 1, Gr = 0, Kr = Gr;
})), qr = e((() => {
	qa(), Qa(), H();
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
	D(), j(), N();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
function ti(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ni.call(t, e), !e.cancelBubble) return Hn(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rt(() => {
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
	H(), y(), j(), ot(), J(), Un(), ri = Symbol("events"), ii = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), oi = null;
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
		if (k) return fi(A, null), A;
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
	if (!k) {
		var t = Tn(e + "");
		return fi(t, t), t;
	}
	var n = A;
	return n.nodeType === 3 ? Mn(n) : (n.before(n = Tn()), Ie(n)), fi(n, n), n;
}
function mi() {
	if (k) return fi(A, null), A;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Tn();
	return e.append(t, n), fi(t, n), e;
}
function Z(e, t) {
	if (k) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = A), Le();
		return;
	}
	e !== null && e.before(t);
}
var hi = e((() => {
	j(), B(), di(), J(), je(), D();
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
			$e({});
			var n = M;
			if (a && (n.c = a), i && (r.$$events = i), k && fi(t, null), vi = o, c = e(t, r) || {}, vi = !0, k && (q.nodes.end = A, A === null || A.nodeType !== 8 || A.data !== "]")) throw Me(), Oe;
			et();
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
	r(), B(), je(), J(), N(), H(), j(), y(), si(), Pe(), De(), hi(), Qr(), D(), Jt(), yi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new WeakMap();
})), Si = e((() => {
	D(), j(), H(), bn(), xi(), J();
})), Ci = e((() => {
	y(), D(), N(), Qr();
})), wi = e((() => {
	De(), N();
})), Ti = e((() => {
	Ye(), H(), J(), Ze();
})), Ei = e((() => {
	$t(), J(), j();
})), Di = e((() => {
	De();
})), Oi, ki = e((() => {
	Ht(), H(), j(), B(), Oi = class {
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
			var n = F, r = An();
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
			} else k && (this.anchor = A), this.#a(n);
		}
	};
})), Ai = e((() => {
	y(), H(), bn(), j(), ot(), N(), Ht(), ki(), $t();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function ji(e, t, n = !1) {
	var r;
	k && (r = A, Le());
	var i = new Oi(e), a = n ? te : 0;
	function o(e, t) {
		if (k) {
			var n = Be(r);
			if (e !== parseInt(n.substring(1))) {
				var a = ze();
				Ie(a), i.anchor = a, Fe(!1), i.ensure(e, t), Fe(!0);
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
	D(), j(), H(), ki();
})), Ni = e((() => {
	N(), H(), j(), ki();
})), Pi = e((() => {
	H(), j(), B();
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
		r?.has(a) ? (a.f |= ie, _r(a, document.createDocumentFragment())) : ur(t[i], n);
	}
}
function Ri(e, t, n, r, i, a = null) {
	var o = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var l = e;
		o = k ? Ie(/* @__PURE__ */ En(l)) : l.appendChild(Tn());
	}
	k && Le();
	var d = null, f = /* @__PURE__ */ nn(() => {
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
			k && Be(o) === "[!" != (e === 0) && (o = ze(), Ie(o), Fe(!1), s = !0);
			for (var l = /* @__PURE__ */ new Set(), u = F, v = An(), y = 0; y < e; y += 1) {
				k && A.nodeType === 8 && A.data === "]" && (o = A, s = !0, Fe(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && pn(S.v, b), S.i && pn(S.i, y), v && u.unskip_effect(S.e)) : (S = Vi(c, h ? o : Wi ??= Tn(), b, x, y, i, t, n), h || (S.e.f |= ie), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = or(() => a(o)) : (d = or(() => a(Wi ??= Tn())), d.f |= ie)), e > l.size && _e("", "", ""), k && e > 0 && Ie(ze()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			s && Fe(!0), U(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, k && (o = A);
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
	a && rt(() => {
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
	je(), j(), B(), H(), bn(), y(), D(), ot(), J(), r(), un(), Ht(), De();
})), Ki = e((() => {
	H(), j(), hi(), Qr(), N(), B(), J(), D();
})), qi = e((() => {
	j();
})), Ji = e((() => {
	Qr();
})), Yi = e((() => {
	D(), H(), N(), j(), di(), hi(), De(), B(), Ji(), ki();
})), Xi = e((() => {
	D(), H(), j(), ki();
})), Zi = e((() => {
	y();
})), Qi = e((() => {
	Zi();
})), $i = e((() => {
	y(), H(), J(), Qi(), xi(), D(), ot(), Un();
})), ea = e((() => {
	j(), B(), H(), xi(), J(), N(), D(), hi(), Qr(), ki(), $i();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function ta(e, t) {
	let n = null, r = k;
	var i;
	if (k) {
		n = A;
		for (var a = /* @__PURE__ */ En(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Dn(a);
		if (a === null) Fe(!1);
		else {
			var o = /* @__PURE__ */ Dn(a);
			a.remove(), Ie(o);
		}
	}
	k || (i = document.head.appendChild(Tn()));
	try {
		ar(() => t(i), ne | E);
	} finally {
		r && (Fe(!0), Ie(n));
	}
}
var na = e((() => {
	j(), B(), H(), D();
})), ra = e((() => {
	H(), B();
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
	if (k || o !== n || o === void 0) {
		var s = oa(n, r, a);
		(!k || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
var ua = e((() => {
	ca(), j();
})), da = e((() => {
	ca(), j();
})), fa = e((() => {
	H(), Un(), Sn(), y(), Ht();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
function pa(e) {
	if (k) {
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
		e.__on_r = n, rt(n), zn();
	}
}
function ma(e, t) {
	var n = ga(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== xa) || (e.value = t ?? "");
}
function ha(e, t, n, r) {
	var i = ga(e);
	k && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ba) || i[t] !== (i[t] = n) && (t === "loading" && (e[de] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _a(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ga(e) {
	return e.__attributes ??= {
		[va]: e.nodeName.includes("-"),
		[ya]: e.namespaceURI === Ae
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
	r(), j(), y(), si(), Vn(), Pe(), D(), ot(), Qr(), J(), aa(), ca(), ua(), da(), je(), H(), fa(), $t(), va = Symbol("is custom element"), ya = Symbol("is html"), ba = pe ? "link" : "LINK", xa = pe ? "progress" : "PROGRESS", Sa = /* @__PURE__ */ new Map();
})), wa = e((() => {
	j(), B(), di(), aa();
})), Ta = e((() => {
	Un();
})), Ea = e((() => {
	H(), Un(), De(), Sn(), ot(), j(), J(), N(), Ht();
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
	var i = M.r, a = q;
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
	D(), N(), H(), J();
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
	let t = M, n = t.l.u;
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
	y(), N(), un(), H(), J();
})), Va = e((() => {
	bn(), J(), y();
}));
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !qe || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = () => (c && (c = !1, s = o ? W(r) : r), s);
	let u;
	if (a) {
		var d = le in e || ue in e;
		u = f(e, t)?.set ?? (d && t in e ? (n) => e[t] = n : void 0);
	}
	var p, m = !1;
	a ? [p, m] = vt(() => e[t]) : p = e[t], p === void 0 && r !== void 0 && (p = l(), u && (i && Se(t), u(p)));
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
var Ha = e((() => {
	r(), je(), y(), bn(), un(), J(), De(), D(), Sn(), xt(), Je(), H();
})), Ua = e((() => {
	N(), H(), xt(), $t();
})), Wa = e((() => {
	D(), H(), bn(), xi(), J(), Ht(), y(), De(), N(), Je(), ft(), La();
})), Ga = e((() => {
	Wa(), H(), hi(), y(), B();
})), Ka = e((() => {
	D(), Ye(), J();
})), qa = e((() => {
	qr(), N(), $r(), ei(), Si(), Ci(), wi(), Xe(), Ti(), Ei(), Di(), Ai(), Mi(), Ni(), Pi(), Gi(), Ki(), qi(), Yi(), Xi(), ea(), na(), ra(), ia(), aa(), Ca(), ua(), si(), Vn(), wa(), da(), $i(), Ta(), Ea(), Da(), Oa(), ka(), fa(), Aa(), Na(), Pa(), Fa(), j(), La(), Ba(), Va(), hi(), $t(), Ht(), un(), H(), bn(), Ha(), xt(), Jt(), yr(), xi(), J(), Ua(), Zi(), Sn(), Ga(), B(), ca(), Ye(), y(), Ji(), Cn(), Ka(), lt();
})), Ja = e((() => {
	j(), De();
}));
//#endregion
//#region node_modules/svelte/src/index-client.js
function Ya(e) {
	M === null && me("onMount"), qe && M.l !== null ? Za(M).m.push(e) : Yn(() => {
		let t = W(e);
		if (typeof t == "function") return t;
	});
}
function Xa(e) {
	M === null && me("onDestroy"), Ya(() => () => W(e));
}
function Za(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
var Qa = e((() => {
	J(), y(), qa(), De(), Je(), N(), r(), Ht(), Ja(), xi(), Yi();
})), $a = e((() => {})), eo = e((() => {
	$a(), typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
})), to = e((() => {
	Je(), Ge();
}));
//#endregion
//#region frontend/src/lib/app-shell.js
function no() {
	return typeof window > "u" ? "/buyer/home" : window.location.pathname;
}
function ro() {
	let e = no().match(/\/buyer\/products\/(\d+)/);
	return e ? Number(e[1]) : null;
}
function io() {
	let e = no().match(/\/buyer\/orders\/(\d+)\/confirmation/);
	return e ? Number(e[1]) : null;
}
function ao(e = no()) {
	return e.startsWith("/admin") ? "admin" : e.startsWith("/seller") ? "seller" : "buyer";
}
function oo(e = no()) {
	return e === "/admin" ? "admin-home" : e === "/admin/sub" ? "admin-moderation" : e === "/admin/audit" ? "admin-audit" : e === "/seller/home" ? "seller-home" : e === "/seller/inventory" ? "seller-inventory" : e === "/buyer/cart" ? "cart" : e === "/buyer/checkout" ? "checkout" : e === "/buyer/compare" ? "compare" : /\/buyer\/orders\/\d+\/confirmation$/.test(e) ? "confirmation" : /\/buyer\/products\/\d+$/.test(e) ? "product" : "storefront";
}
function so(e) {
	return yo[e] || yo.storefront;
}
function co(e) {
	return so(e).title;
}
function lo(e) {
	return e === "admin-moderation" ? "/admin/classic/sub" : e === "admin-audit" ? "/admin/classic/audit" : "/admin/classic";
}
function uo(e, t) {
	return e === "admin" ? lo(t) : e === "seller" ? "/seller/classic/home" : "/buyer/classic/home";
}
function fo(e) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(e);
}
function po(e) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(new Date(e));
}
function mo(e) {
	return e === "demo_card" ? "Demo Credit Card" : e;
}
function ho(e, t) {
	return e ? e.length > t ? `${e.slice(0, t)}...` : e : "";
}
function go(e) {
	return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
}
function _o(e) {
	return e.banned ? "Banned" : e.blocked ? "Blocked" : e.approved ? "Approved" : "Pending";
}
function vo(e) {
	return e ? e.split("_").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "";
}
var yo, bo, xo = e((() => {
	yo = {
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
	}, bo = {
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
function So(e, t) {
	$e(t, !1);
	let n = /* @__PURE__ */ I(), r = /* @__PURE__ */ I(), i = $(t, "appMode", 8), a = $(t, "currentPage", 8), o = $(t, "onLogout", 8), s = {
		admin: "Admin Workspace",
		seller: "Seller Workspace",
		buyer: "Buyer Workspace"
	};
	er(() => G(i()), () => {
		L(n, bo[i()] || bo.buyer);
	}), er(() => (G(i()), G(a())), () => {
		L(r, uo(i(), a()));
	}), tr(), Ra();
	var c = wo(), l = R(c), u = R(l), d = R(u, !0);
	O(u), Re(2), O(l);
	var f = z(l, 2), p = R(f);
	Ri(p, 1, () => U(n), Fi, (e, t) => {
		var n = Co(), r = R(n, !0);
		O(n), V(() => {
			ha(n, "href", (U(t), W(() => U(t).href))), Q(r, (U(t), W(() => U(t).label)));
		}), Z(e, n);
	});
	var m = z(p, 2), h = z(m, 2);
	O(f), O(c), V(() => {
		Q(d, (G(i()), W(() => s[i()] || s.buyer))), ha(m, "href", U(r));
	}), Y("click", h, function(...e) {
		o()?.apply(this, e);
	}), Z(e, c), et();
}
var Co, wo, To = e((() => {
	eo(), to(), qa(), xo(), Co = /* @__PURE__ */ X("<a class=\"action-link\"> </a>"), wo = /* @__PURE__ */ X("<section class=\"hero\"><div><p class=\"eyebrow\"> </p> <h1>Random Access Market</h1></div> <div class=\"hero-actions\"><!> <a class=\"action-link secondary\">Classic UI</a> <button class=\"action-link logout-button\">Log Out</button></div></section>");
}));
//#endregion
//#region frontend/src/components/CatalogHeader.svelte
function Eo(e, t) {
	let n = $(t, "kicker", 8), r = $(t, "heading", 8), i = $(t, "onRefresh", 8);
	var a = Do(), o = R(a), s = R(o), c = R(s, !0);
	O(s);
	var l = z(s, 2), u = R(l, !0);
	O(l), O(o);
	var d = z(o, 2);
	O(a), V(() => {
		Q(c, n()), Q(u, r());
	}), Y("click", d, function(...e) {
		i()?.apply(this, e);
	}), Z(e, a);
}
var Do, Oo = e((() => {
	eo(), to(), qa(), Do = /* @__PURE__ */ X("<div class=\"catalog-header\"><div><p class=\"section-kicker\"> </p> <h2> </h2></div> <button class=\"refresh-button\">Refresh</button></div>");
}));
//#endregion
//#region frontend/src/components/AdminAuditView.svelte
function ko(e, t) {
	$e(t, !1);
	let n = $(t, "adminAuditLogs", 24, () => []), r = $(t, "formatActionType", 8), i = $(t, "formatDate", 8);
	Ra();
	var a = mi(), o = On(a), s = (e) => {
		Z(e, Ao());
	}, c = (e) => {
		var t = Mo(), a = z(R(t), 2);
		Ri(a, 5, n, Fi, (e, t) => {
			var n = jo(), a = R(n), o = R(a, !0);
			O(a);
			var s = z(a, 2), c = R(s, !0);
			O(s);
			var l = z(s, 2), u = R(l, !0);
			O(l);
			var d = z(l, 2), f = R(d, !0);
			O(d), O(n), V((e, n) => {
				Q(o, e), Q(c, (U(t), W(() => U(t).username))), Q(u, n), Q(f, (U(t), W(() => U(t).details)));
			}, [() => (G(i()), U(t), W(() => i()(U(t).createdAt))), () => (G(r()), U(t), W(() => r()(U(t).actionType)))]), Z(e, n);
		}), O(a), O(t), Z(e, t);
	};
	ji(o, (e) => {
		G(n()), W(() => n().length === 0) ? e(s) : e(c, -1);
	}), Z(e, a), et();
}
var Ao, jo, Mo, No = e((() => {
	eo(), to(), qa(), Ao = /* @__PURE__ */ X("<div class=\"state-card\">No audit log entries yet.</div>"), jo = /* @__PURE__ */ X("<article class=\"admin-audit-row\"><p class=\"seller admin-audit-when\"> </p> <p class=\"admin-audit-user\"> </p> <p class=\"admin-audit-action\"> </p> <p class=\"admin-audit-details\"> </p></article>"), Mo = /* @__PURE__ */ X("<div class=\"panel admin-box\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent actions</p> <h3>Recorded system activity</h3></div></div> <div class=\"admin-audit-list\"></div></div>");
}));
//#endregion
//#region frontend/src/components/AdminHomeView.svelte
function Po(e) {
	Z(e, Fo());
}
var Fo, Io = e((() => {
	eo(), to(), qa(), Fo = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--two\"><article class=\"admin-region admin-region--products\"><p class=\"section-kicker\">Moderation</p> <h3>User and listing review</h3> <p class=\"detail-description\">Review pending registrations, approve or reject seller listings, and handle active account status changes.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/sub\">User management</a></div></article> <article class=\"admin-region\"><p class=\"section-kicker\">Audit</p> <h3>Recent platform activity</h3> <p class=\"detail-description\">Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/admin/audit\">Open audit log</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/AdminModerationView.svelte
function Lo(e, t) {
	$e(t, !1);
	let n = $(t, "adminPendingUsers", 24, () => []), r = $(t, "adminProducts", 24, () => []), i = $(t, "adminUsers", 24, () => []), a = $(t, "adminUsersPageInfo", 8), o = $(t, "adminUserSearch", 8, ""), s = $(t, "onAdminUserSearchInput", 8), c = $(t, "approveUser", 8), l = $(t, "blockUser", 8), u = $(t, "banUser", 8), d = $(t, "approveProduct", 8), f = $(t, "rejectProduct", 8), p = $(t, "delistProduct", 8), m = $(t, "searchAdminUsers", 8), h = $(t, "clearAdminUserSearch", 8), g = $(t, "goToAdminUsersPage", 8), _ = $(t, "capitalizeRole", 8), v = $(t, "formatCurrency", 8), y = $(t, "formatDate", 8), b = $(t, "getUserStatus", 8);
	Ra();
	var x = Xo(), S = R(x), ee = R(S), C = z(R(ee), 2), w = R(C, !0);
	O(C), O(ee);
	var T = z(ee, 2), te = (e) => {
		Z(e, Ro());
	}, ne = (e) => {
		var t = Bo(), r = R(t), i = z(R(r));
		Ri(i, 5, n, Fi, (e, t) => {
			var n = zo(), r = R(n), i = R(r, !0);
			O(r);
			var a = z(r), o = R(a, !0);
			O(a);
			var s = z(a), u = R(s, !0);
			O(s);
			var d = z(s), f = R(d, !0);
			O(d);
			var p = z(d), m = R(p), h = R(m), g = z(h, 2);
			O(m), O(p), O(n), V((e, n) => {
				Q(i, (U(t), W(() => U(t).username))), Q(o, e), Q(u, (U(t), W(() => U(t).email))), Q(f, n);
			}, [() => (G(_()), U(t), W(() => _()(U(t).role))), () => (G(y()), U(t), W(() => y()(U(t).createdAt)))]), Y("click", h, () => c()(U(t).id)), Y("click", g, () => l()(U(t).id)), Z(e, n);
		}), O(i), O(r), O(t), Z(e, t);
	};
	ji(T, (e) => {
		G(n()), W(() => n().length === 0) ? e(te) : e(ne, -1);
	}), O(S);
	var E = z(S, 2), re = R(E), ie = z(R(re), 2), ae = R(ie, !0);
	O(ie), O(re);
	var oe = z(re, 2), se = (e) => {
		Z(e, Vo());
	}, ce = (e) => {
		var t = Ko(), n = R(t), i = z(R(n));
		Ri(i, 5, r, Fi, (e, t) => {
			var n = Go(), r = R(n), i = R(r, !0);
			O(r);
			var a = z(r), o = R(a, !0);
			O(a);
			var s = z(a), c = R(s, !0);
			O(s);
			var l = z(s), u = R(l, !0);
			O(l);
			var m = z(l), h = R(m, !0);
			O(m);
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
			}), O(g);
			var ee = z(g), C = R(ee), w = (e) => {
				var n = Ho(), r = R(n), i = z(r, 2);
				O(n), Y("click", r, () => d()(U(t).id)), Y("click", i, () => f()(U(t).id)), Z(e, n);
			}, T = (e) => {
				var n = Uo();
				Y("click", n, () => p()(U(t).id)), Z(e, n);
			}, te = (e) => {
				Z(e, Wo());
			};
			ji(C, (e) => {
				U(t), W(() => U(t).listingStatus === "pending") ? e(w) : (U(t), W(() => U(t).isListed) ? e(T, 1) : e(te, -1));
			}), O(ee), O(n), V((e) => {
				Q(i, (U(t), W(() => U(t).name))), Q(o, (U(t), W(() => U(t).seller?.username || "Unknown seller"))), Q(c, (U(t), W(() => U(t).description || "No description provided."))), Q(u, e), Q(h, (U(t), W(() => U(t).stock)));
			}, [() => (G(v()), U(t), W(() => v()(U(t).price)))]), Z(e, n);
		}), O(i), O(n), O(t), Z(e, t);
	};
	ji(oe, (e) => {
		G(r()), W(() => r().length === 0) ? e(se) : e(ce, -1);
	}), O(E);
	var le = z(E, 2), ue = R(le), de = z(R(ue), 2), fe = R(de);
	O(de), O(ue);
	var pe = z(ue, 2), D = R(pe);
	pa(D);
	var me = z(D, 4);
	O(pe);
	var he = z(pe, 2), ge = (e) => {
		Z(e, qo());
	}, _e = (e) => {
		var t = Yo(), n = R(t), r = z(R(n));
		Ri(r, 5, i, Fi, (e, t) => {
			var n = Jo(), r = R(n), i = R(r, !0);
			O(r);
			var a = z(r), o = R(a, !0);
			O(a);
			var s = z(a), d = R(s, !0);
			O(s);
			var f = z(s), p = R(f, !0);
			O(f);
			var m = z(f), h = R(m), g = R(h), v = z(g, 2), x = z(v, 2);
			O(h), O(m), O(n), V((e, n, r) => {
				Q(i, (U(t), W(() => U(t).username))), Q(o, e), Q(d, n), Q(p, r);
			}, [
				() => (G(_()), U(t), W(() => _()(U(t).role))),
				() => (G(b()), U(t), W(() => b()(U(t)))),
				() => (G(y()), U(t), W(() => y()(U(t).createdAt)))
			]), Y("click", g, () => c()(U(t).id)), Y("click", v, () => l()(U(t).id)), Y("click", x, () => u()(U(t).id)), Z(e, n);
		}), O(r), O(n), O(t), Z(e, t);
	};
	ji(he, (e) => {
		G(i()), W(() => i().length === 0) ? e(ge) : e(_e, -1);
	});
	var ve = z(he, 2), ye = R(ve), be = z(ye, 2), xe = R(be);
	O(be);
	var Se = z(be, 2);
	O(ve), O(le), O(x), V(() => {
		Q(w, (G(n()), W(() => n().length))), Q(ae, (G(r()), W(() => r().length))), Q(fe, `${(G(a()), W(() => a().totalPages)) ?? ""} page${(G(a()), W(() => a().totalPages === 1 ? "" : "s")) ?? ""}`), ma(D, o()), ye.disabled = (G(a()), W(() => !a().hasPreviousPage)), Q(xe, `Page ${(G(a()), W(() => a().page)) ?? ""} of ${(G(a()), W(() => a().totalPages)) ?? ""}`), Se.disabled = (G(a()), W(() => !a().hasNextPage));
	}), Y("input", D, function(...e) {
		s()?.apply(this, e);
	}), Y("click", me, function(...e) {
		h()?.apply(this, e);
	}), Y("submit", pe, Ia(function(...e) {
		m()?.apply(this, e);
	})), Y("click", ye, () => g()(a().page - 1)), Y("click", Se, () => g()(a().page + 1)), Z(e, x), et();
}
var Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo = e((() => {
	eo(), to(), qa(), Ro = /* @__PURE__ */ X("<div class=\"state-card\">No pending users right now.</div>"), zo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Block</button></div></td></tr>"), Bo = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Email</th><th>Requested</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Vo = /* @__PURE__ */ X("<div class=\"state-card\">No seller listings are available for review.</div>"), Ho = /* @__PURE__ */ X("<div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button admin-button-danger\">Reject</button></div>"), Uo = /* @__PURE__ */ X("<button class=\"admin-button admin-button-danger\">Delist</button>"), Wo = /* @__PURE__ */ X("<span class=\"seller\">No further action</span>"), Go = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), Ko = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid admin-grid--products\"><thead><tr><th>Product</th><th>Seller</th><th>Description</th><th>Price</th><th>Stock</th><th>Status</th><th>Action</th></tr></thead><tbody></tbody></table></div>"), qo = /* @__PURE__ */ X("<div class=\"state-card\">No users matched that search.</div>"), Jo = /* @__PURE__ */ X("<tr><td> </td><td> </td><td> </td><td> </td><td><div class=\"admin-action-group\"><button class=\"admin-button\">Approve</button> <button class=\"admin-button\">Block</button> <button class=\"admin-button admin-button-danger\">Ban</button></div></td></tr>"), Yo = /* @__PURE__ */ X("<div class=\"admin-table-wrap\"><table class=\"admin-grid\"><thead><tr><th>Username</th><th>Role</th><th>Status</th><th>Registered</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Xo = /* @__PURE__ */ X("<div class=\"admin-columns admin-columns--three\"><article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Pending registration requests</p> <h3>Users awaiting approval</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region admin-region--products\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Seller listings</p> <h3>Listing moderation</h3></div> <p class=\"admin-count\"> </p></div> <!></article> <article class=\"admin-region\"><div class=\"admin-panel-header\"><div><p class=\"section-kicker\">Recent users</p> <h3>Browse and filter accounts</h3></div> <p class=\"admin-count\"> </p></div> <form class=\"admin-search\"><input type=\"search\" placeholder=\"Search username\"/> <button class=\"admin-button\" type=\"submit\">Search</button> <button type=\"button\" class=\"admin-button\">Clear</button></form> <!> <div class=\"admin-pagination\"><button class=\"admin-button\">Previous</button> <p class=\"seller\"> </p> <button class=\"admin-button\">Next</button></div></article></div>");
}));
//#endregion
//#region frontend/src/components/CartView.svelte
function Qo(e, t) {
	$e(t, !1);
	let n = $(t, "cart", 8), r = $(t, "removeFromCart", 8), i = $(t, "formatCurrency", 8);
	Ra();
	var a = ns(), o = R(a), s = R(o), c = (e) => {
		Z(e, $o());
	}, l = (e) => {
		var t = ts();
		Ri(t, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
			var n = es(), a = R(n), o = R(a), s = R(o, !0);
			O(o);
			var c = z(o, 2), l = R(c, !0);
			O(c);
			var u = z(c, 2), d = R(u);
			O(u), O(a);
			var f = z(a, 2), p = R(f), m = R(p, !0);
			O(p);
			var h = z(p, 2);
			O(f), O(n), V((e, n) => {
				Q(s, (U(t), W(() => U(t).product.seller.username))), Q(l, (U(t), W(() => U(t).product.name))), Q(d, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(m, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Y("click", h, () => r()(U(t).id)), Z(e, n);
		}), O(t), Z(e, t);
	};
	ji(s, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(c) : e(l, -1);
	}), O(o);
	var u = z(o, 2), d = z(R(u), 2), f = R(d, !0);
	O(d);
	var p = z(d, 4), m = R(p, !0);
	O(p);
	var h = z(p, 4), g = R(h, !0);
	O(h), Re(2), O(u), O(a), V((e, t, n) => {
		Q(f, e), Q(m, t), Q(g, n);
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Z(e, a), et();
}
var $o, es, ts, ns, rs = e((() => {
	eo(), to(), qa(), $o = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty.</div>"), es = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p> <button class=\"secondary\">Remove</button></div></article>"), ts = /* @__PURE__ */ X("<div class=\"list-grid\"></div>"), ns = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <a class=\"checkout-link\" href=\"/buyer/checkout\">Checkout</a></aside></div>");
}));
//#endregion
//#region frontend/src/components/CheckoutView.svelte
function is(e, t) {
	$e(t, !1);
	let n = $(t, "cart", 8), r = $(t, "placeOrder", 8), i = $(t, "formatCurrency", 8), a = $(t, "shippingAddress", 8), o = $(t, "onShippingInput", 8);
	Ra();
	var s = cs(), c = R(s), l = R(c), u = (e) => {
		Z(e, as());
	}, d = (e) => {
		var t = ss(), r = R(t), s = z(R(r), 2), c = z(R(s), 2);
		pa(c);
		var l = z(c, 4);
		pa(l);
		var u = z(l, 4);
		pa(u);
		var d = z(u, 4);
		pa(d);
		var f = z(d, 4);
		pa(f);
		var p = z(f, 4);
		pa(p);
		var m = z(p, 4);
		pa(m), O(s), O(r);
		var h = z(r, 2);
		Ri(h, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
			var n = os(), r = R(n), a = R(r), o = R(a, !0);
			O(a);
			var s = z(a, 2), c = R(s, !0);
			O(s);
			var l = z(s, 2), u = R(l);
			O(l), O(r);
			var d = z(r, 2), f = R(d), p = R(f, !0);
			O(f), O(d), O(n), V((e, n) => {
				Q(o, (U(t), W(() => U(t).product.seller.username))), Q(c, (U(t), W(() => U(t).product.name))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
			}, [() => (G(i()), U(t), W(() => i()(U(t).product.price))), () => (G(i()), U(t), W(() => i()(U(t).product.price * U(t).quantity)))]), Z(e, n);
		}), O(h), O(t), V(() => {
			ma(c, (G(a()), W(() => a().name))), ma(l, (G(a()), W(() => a().line1))), ma(u, (G(a()), W(() => a().line2))), ma(d, (G(a()), W(() => a().city))), ma(f, (G(a()), W(() => a().state))), ma(p, (G(a()), W(() => a().postalCode))), ma(m, (G(a()), W(() => a().country)));
		}), Y("input", c, (e) => o()("name", e)), Y("input", l, (e) => o()("line1", e)), Y("input", u, (e) => o()("line2", e)), Y("input", d, (e) => o()("city", e)), Y("input", f, (e) => o()("state", e)), Y("input", p, (e) => o()("postalCode", e)), Y("input", m, (e) => o()("country", e)), Z(e, t);
	};
	ji(l, (e) => {
		G(n()), W(() => n().items.length === 0) ? e(u) : e(d, -1);
	}), O(c);
	var f = z(c, 2), p = z(R(f), 2), m = R(p, !0);
	O(p);
	var h = z(p, 4), g = R(h, !0);
	O(h);
	var _ = z(h, 4), v = R(_, !0);
	O(_);
	var y = z(_, 4), b = R(y);
	Re(2), O(y), O(f), O(s), V((e, t, r) => {
		Q(m, e), Q(g, t), Q(v, r), b.disabled = (G(n()), W(() => n().items.length === 0));
	}, [
		() => (G(i()), G(n()), W(() => i()(n().subtotal))),
		() => (G(i()), G(n()), W(() => i()(n().tax))),
		() => (G(i()), G(n()), W(() => i()(n().total)))
	]), Y("click", b, function(...e) {
		r()?.apply(this, e);
	}), Z(e, s), et();
}
var as, os, ss, cs, ls = e((() => {
	eo(), to(), qa(), as = /* @__PURE__ */ X("<div class=\"state-card\">Your cart is empty. Return to the storefront before checking out.</div>"), os = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), ss = /* @__PURE__ */ X("<div class=\"checkout-stack\"><div class=\"shipping-panel\"><p class=\"section-kicker\">Shipping address</p> <div class=\"stack-form\"><label for=\"ship-name\">Full name</label> <input id=\"ship-name\" type=\"text\" required=\"\"/> <label for=\"ship-line1\">Address line 1</label> <input id=\"ship-line1\" type=\"text\" required=\"\"/> <label for=\"ship-line2\">Address line 2</label> <input id=\"ship-line2\" type=\"text\"/> <label for=\"ship-city\">City</label> <input id=\"ship-city\" type=\"text\" required=\"\"/> <label for=\"ship-state\">State / region</label> <input id=\"ship-state\" type=\"text\" required=\"\"/> <label for=\"ship-postal\">Postal code</label> <input id=\"ship-postal\" type=\"text\" required=\"\"/> <label for=\"ship-country\">Country</label> <input id=\"ship-country\" type=\"text\" required=\"\"/></div></div> <div class=\"list-grid\"></div></div>"), cs = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><!></div> <aside class=\"summary-panel\"><p>Subtotal</p> <strong> </strong> <p>Estimated tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"payment-box\"><p class=\"payment-label\">Payment method</p> <div class=\"payment-choice selected\"><div><p class=\"payment-title\">Demo credit card ending in 4242</p></div></div> <div class=\"payment-choice payment-placeholder\" aria-disabled=\"true\"><span class=\"payment-plus\">+</span> <div><p class=\"payment-title\">Add another method</p> <p class=\"payment-copy\">Reserved for future cards and other payment options.</p></div></div></div> <div class=\"checkout-actions\"><button class=\"checkout-link place-order-button\">Place order</button> <a class=\"checkout-link secondary-link\" href=\"/buyer/cart\">Back to cart</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/CompareView.svelte
function us(e, t) {
	$e(t, !1);
	let n = $(t, "compareItems", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "removeFromCompare", 8), a = $(t, "formatCurrency", 8), o = $(t, "truncate", 8);
	Ra();
	var s = mi(), c = On(s), l = (e) => {
		Z(e, ds());
	}, u = (e) => {
		var t = ps();
		Ri(t, 5, n, Fi, (e, t) => {
			var n = fs(), s = R(n), c = z(R(s), 2), l = R(c, !0);
			O(c), O(s);
			var u = z(s, 2), d = R(u, !0);
			O(u);
			var f = z(u, 2), p = R(f, !0);
			O(f);
			var m = z(f, 2), h = R(m), g = R(h);
			O(h);
			var _ = z(h, 2), v = R(_), y = z(v, 2);
			O(_), O(m), O(n), V((e, n) => {
				Q(l, e), Q(d, (U(t), W(() => U(t).name))), Q(p, n), ha(g, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(a()), U(t), W(() => a()(U(t).price))), () => (G(o()), U(t), W(() => o()(U(t).description || "", 160)))]), Y("click", v, () => r()(U(t).id)), Y("click", y, () => i()(U(t).id)), Z(e, n);
		}), O(t), Z(e, t);
	};
	ji(c, (e) => {
		G(n()), W(() => n().length === 0) ? e(l) : e(u, -1);
	}), Z(e, s), et();
}
var ds, fs, ps, ms = e((() => {
	eo(), to(), qa(), ds = /* @__PURE__ */ X("<div class=\"state-card\">No products marked for comparison.</div>"), fs = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\">Comparison item</span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Remove</button></div></div></article>"), ps = /* @__PURE__ */ X("<div class=\"product-grid compare-grid\"></div>");
}));
//#endregion
//#region frontend/src/components/OrderConfirmationView.svelte
function hs(e, t) {
	$e(t, !1);
	let n = $(t, "order", 8), r = $(t, "formatCurrency", 8), i = $(t, "formatDate", 8), a = $(t, "formatPaymentMethod", 8);
	Ra();
	var o = vs(), s = R(o), c = R(s);
	Ri(c, 5, () => (G(n()), W(() => n().items)), Fi, (e, t) => {
		var n = gs(), i = R(n), a = R(i), o = R(a);
		O(a);
		var s = z(a, 2), c = R(s, !0);
		O(s);
		var l = z(s, 2), u = R(l);
		O(l), O(i);
		var d = z(i, 2), f = R(d), p = R(f, !0);
		O(f), O(d), O(n), V((e, n) => {
			Q(o, `Seller ID ${(U(t), W(() => U(t).sellerId)) ?? ""}`), Q(c, (U(t), W(() => U(t).productName))), Q(u, `Quantity ${(U(t), W(() => U(t).quantity)) ?? ""} at ${e ?? ""} each`), Q(p, n);
		}, [() => (G(r()), U(t), W(() => r()(U(t).unitPrice))), () => (G(r()), U(t), W(() => r()(U(t).lineTotal)))]), Z(e, n);
	}), O(c), O(s);
	var l = z(s, 2), u = z(R(l), 2), d = R(u);
	O(u);
	var f = z(u, 4), p = R(f, !0);
	O(f);
	var m = z(f, 4), h = R(m, !0);
	O(m);
	var g = z(m, 4), _ = R(g, !0);
	O(g);
	var v = z(g, 4), y = R(v, !0);
	O(v);
	var b = z(v, 2), x = R(b, !0);
	O(b);
	var S = z(b, 2), ee = (e) => {
		var t = _s(), r = R(t, !0);
		O(t), V(() => Q(r, (G(n()), W(() => n().shipToLine2)))), Z(e, t);
	};
	ji(S, (e) => {
		G(n()), W(() => n().shipToLine2) && e(ee);
	});
	var C = z(S, 2), w = R(C);
	O(C);
	var T = z(C, 2), te = R(T, !0);
	O(T);
	var ne = z(T, 4), E = R(ne, !0);
	O(ne);
	var re = z(ne, 4), ie = R(re, !0);
	O(re);
	var ae = z(re, 4), oe = R(ae, !0);
	O(ae), Re(2), O(l), O(o), V((e, t, r, i, a) => {
		Q(d, `#${(G(n()), W(() => n().id)) ?? ""}`), Q(p, (G(n()), W(() => n().status))), Q(h, e), Q(_, t), Q(y, (G(n()), W(() => n().shipToName))), Q(x, (G(n()), W(() => n().shipToLine1))), Q(w, `${(G(n()), W(() => n().shipToCity)) ?? ""}, ${(G(n()), W(() => n().shipToState)) ?? ""} ${(G(n()), W(() => n().shipToPostalCode)) ?? ""}`), Q(te, (G(n()), W(() => n().shipToCountry))), Q(E, r), Q(ie, i), Q(oe, a);
	}, [
		() => (G(a()), G(n()), W(() => a()(n().paymentMethod))),
		() => (G(i()), G(n()), W(() => i()(n().createdAt))),
		() => (G(r()), G(n()), W(() => r()(n().subtotal))),
		() => (G(r()), G(n()), W(() => r()(n().taxAmount))),
		() => (G(r()), G(n()), W(() => r()(n().total)))
	]), Z(e, o), et();
}
var gs, _s, vs, ys = e((() => {
	eo(), to(), qa(), gs = /* @__PURE__ */ X("<article class=\"line-card\"><div><p class=\"seller\"> </p> <h3> </h3> <p class=\"description\"> </p></div> <div class=\"line-actions\"><p class=\"price\"> </p></div></article>"), _s = /* @__PURE__ */ X("<strong> </strong>"), vs = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><div class=\"list-grid\"></div></div> <aside class=\"summary-panel\"><p>Order number</p> <strong> </strong> <p>Status</p> <strong> </strong> <p>Payment method</p> <strong> </strong> <p>Placed at</p> <strong> </strong> <p>Ship to</p> <strong> </strong> <strong> </strong> <!> <strong> </strong> <strong> </strong> <p>Subtotal</p> <strong> </strong> <p>Tax</p> <strong> </strong> <p>Total</p> <strong> </strong> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/buyer/home\">Continue shopping</a></div></aside></div>");
}));
//#endregion
//#region frontend/src/components/ProductDetailView.svelte
function bs(e, t) {
	$e(t, !1);
	let n = $(t, "product", 8), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "formatCurrency", 8);
	Ra();
	var o = xs(), s = R(o), c = R(s), l = R(c, !0);
	O(c);
	var u = z(c, 2), d = R(u);
	O(u), O(s);
	var f = z(s, 2), p = R(f), m = R(p), h = R(m, !0);
	O(m);
	var g = z(m, 2), _ = R(g, !0);
	O(g), O(p);
	var v = z(p, 2), y = R(v), b = z(y, 2);
	O(v), O(f);
	var x = z(f, 2), S = R(x, !0);
	O(x), Re(2), O(o), V((e) => {
		Q(l, (G(n()), W(() => n().seller.username))), Q(d, `${(G(n()), W(() => n().stock)) ?? ""} in stock`), Q(h, (G(n()), W(() => n().name))), Q(_, e), Q(S, (G(n()), W(() => n().description || "No description provided.")));
	}, [() => (G(a()), G(n()), W(() => a()(n().price)))]), Y("click", y, () => r()(n().id)), Y("click", b, () => i()(n().id)), Z(e, o), et();
}
var xs, Ss = e((() => {
	eo(), to(), qa(), xs = /* @__PURE__ */ X("<article class=\"detail-card\"><div class=\"detail-meta\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <div class=\"detail-layout\"><div><h3> </h3> <p class=\"detail-price\"> </p></div> <div class=\"detail-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div> <p class=\"detail-description\"> </p> <a class=\"detail-link\" href=\"/buyer/home\">Back to storefront</a></article>");
}));
//#endregion
//#region frontend/src/components/SellerHomeView.svelte
function Cs(e) {
	Z(e, ws());
}
var ws, Ts = e((() => {
	eo(), to(), qa(), ws = /* @__PURE__ */ X("<div class=\"seller-home-grid\"><article class=\"detail-card\"><p class=\"section-kicker\">Modern seller mode</p> <h3>Manage your storefront</h3> <p class=\"detail-description\">Use the inventory workspace to create new listings, review approval status, and keep track of stock.</p> <div class=\"checkout-actions\"><a class=\"checkout-link\" href=\"/seller/inventory\">Open inventory</a></div></article></div>");
}));
//#endregion
//#region frontend/src/components/SellerInventoryView.svelte
function Es(e, t) {
	$e(t, !1);
	let n = $(t, "sellerForm", 8), r = $(t, "sellerProducts", 24, () => []), i = $(t, "sellerListingForm", 12), a = $(t, "createSellerListing", 8), o = $(t, "onSellerFormInput", 8), s = $(t, "formatCurrency", 8);
	Ra();
	var c = As(), l = On(c), u = R(l), d = R(u), f = z(R(d), 2);
	pa(f);
	var p = z(f, 4);
	Rn(p);
	var m = z(p, 4);
	pa(m);
	var h = z(m, 4);
	pa(h), Re(2), O(d), Ma(d, (e) => i(e), () => i()), O(u);
	var g = z(u, 2), _ = z(R(g), 2), v = R(_, !0);
	O(_), O(g), O(l);
	var y = z(l, 2), b = (e) => {
		Z(e, Ds());
	}, x = (e) => {
		var t = ks();
		Ri(t, 5, r, Fi, (e, t) => {
			var n = Os(), r = R(n), i = R(r), a = R(i), o = (e) => {
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
			}), O(i);
			var d = z(i, 2), f = R(d);
			O(d), O(r);
			var p = z(r, 2), m = R(p, !0);
			O(p);
			var h = z(p, 2), g = R(h, !0);
			O(h);
			var _ = z(h, 2), v = R(_), y = R(v), b = R(y, !0);
			O(y);
			var x = z(y, 2), S = R(x);
			O(x), O(v), O(_), O(n), V((e, n) => {
				Q(f, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(m, (U(t), W(() => U(t).name))), Q(g, (U(t), W(() => U(t).description || "No description provided."))), Q(b, e), Q(S, `Created ${n ?? ""}`);
			}, [() => (G(s()), U(t), W(() => s()(U(t).price))), () => (U(t), W(() => new Date(U(t).createdAt).toLocaleDateString()))]), Z(e, n);
		}), O(t), Z(e, t);
	};
	ji(y, (e) => {
		G(r()), W(() => r().length === 0) ? e(b) : e(x, -1);
	}), V(() => {
		ma(f, (G(n()), W(() => n().name))), ma(p, (G(n()), W(() => n().description))), ma(m, (G(n()), W(() => n().price))), ma(h, (G(n()), W(() => n().stock))), Q(v, (G(r()), W(() => r().length)));
	}), Y("input", f, (e) => o()("name", e)), Y("input", p, (e) => o()("description", e)), Y("input", m, (e) => o()("price", e)), Y("input", h, (e) => o()("stock", e)), Y("submit", d, Ia(function(...e) {
		a()?.apply(this, e);
	})), Z(e, c), et();
}
var Ds, Os, ks, As, js = e((() => {
	eo(), to(), qa(), Ds = /* @__PURE__ */ X("<div class=\"state-card\">No listings yet.</div>"), Os = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"><!></span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <p class=\"seller\"> </p></div></div></article>"), ks = /* @__PURE__ */ X("<div class=\"product-grid inventory-grid\"></div>"), As = /* @__PURE__ */ X("<div class=\"cart-layout\"><div class=\"panel\"><form class=\"stack-form\"><label for=\"seller-name\">Product name</label> <input id=\"seller-name\" type=\"text\" required=\"\"/> <label for=\"seller-description\">Description</label> <textarea id=\"seller-description\" rows=\"4\"></textarea> <label for=\"seller-price\">Price</label> <input id=\"seller-price\" type=\"number\" min=\"0\" step=\"0.01\" required=\"\"/> <label for=\"seller-stock\">Stock</label> <input id=\"seller-stock\" type=\"number\" min=\"0\" step=\"1\" required=\"\"/> <button class=\"checkout-link place-order-button\" type=\"submit\">Create listing</button></form></div> <aside class=\"summary-panel inventory-panel\"><p>Active records</p> <strong> </strong></aside></div> <!>", 1);
}));
//#endregion
//#region frontend/src/components/StorefrontView.svelte
function Ms(e, t) {
	$e(t, !1);
	let n = $(t, "products", 24, () => []), r = $(t, "addToCart", 8), i = $(t, "addToComparison", 8), a = $(t, "openRandomProduct", 8), o = $(t, "formatCurrency", 8);
	Ra();
	var s = Is(), c = On(s), l = R(c);
	O(c);
	var u = z(c, 2), d = (e) => {
		Z(e, Ns());
	}, f = (e) => {
		var t = Fs();
		Ri(t, 5, n, Fi, (e, t) => {
			var n = Ps(), a = R(n), s = R(a), c = R(s, !0);
			O(s);
			var l = z(s, 2), u = R(l);
			O(l), O(a);
			var d = z(a, 2), f = R(d, !0);
			O(d);
			var p = z(d, 2), m = R(p, !0);
			O(p);
			var h = z(p, 2), g = R(h), _ = R(g), v = R(_, !0);
			O(_);
			var y = z(_, 2);
			O(g);
			var b = z(g, 2), x = R(b), S = z(x, 2);
			O(b), O(h), O(n), V((e) => {
				Q(c, (U(t), W(() => U(t).seller.username))), Q(u, `${(U(t), W(() => U(t).stock)) ?? ""} in stock`), Q(f, (U(t), W(() => U(t).name))), Q(m, (U(t), W(() => U(t).description || "No description provided."))), Q(v, e), ha(y, "href", (U(t), W(() => `/buyer/products/${U(t).id}`)));
			}, [() => (G(o()), U(t), W(() => o()(U(t).price)))]), Y("click", x, () => r()(U(t).id)), Y("click", S, () => i()(U(t).id)), Z(e, n);
		}), O(t), Z(e, t);
	};
	ji(u, (e) => {
		G(n()), W(() => n().length === 0) ? e(d) : e(f, -1);
	}), Y("click", l, function(...e) {
		a()?.apply(this, e);
	}), Z(e, s), et();
}
var Ns, Ps, Fs, Is, Ls = e((() => {
	eo(), to(), qa(), Ns = /* @__PURE__ */ X("<div class=\"state-card\">No listed products are available right now.</div>"), Ps = /* @__PURE__ */ X("<article class=\"product-card\"><div class=\"card-topline\"><span class=\"seller\"> </span> <span class=\"stock\"> </span></div> <h3> </h3> <p class=\"description\"> </p> <div class=\"card-footer\"><div><p class=\"price\"> </p> <a class=\"detail-link\">View details</a></div> <div class=\"card-actions\"><button>Add to cart</button> <button class=\"secondary\">Compare</button></div></div></article>"), Fs = /* @__PURE__ */ X("<div class=\"product-grid\"></div>"), Is = /* @__PURE__ */ X("<div class=\"storefront-actions\"><button class=\"checkout-link random-product-button\" type=\"button\">Random product</button></div> <!>", 1);
}));
//#endregion
//#region frontend/src/App.svelte
function Rs(e, t) {
	$e(t, !1);
	let n = /* @__PURE__ */ I(), r = [
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
	], i = new Set(r.map((e) => e.value)), a = /* @__PURE__ */ I("buyer"), o = /* @__PURE__ */ I("storefront"), s = /* @__PURE__ */ I([]), c = /* @__PURE__ */ I(null), l = /* @__PURE__ */ I([]), u = /* @__PURE__ */ I({
		items: [],
		subtotal: 0,
		tax: 0,
		total: 0
	}), d = /* @__PURE__ */ I(null), f = /* @__PURE__ */ I([]), p = /* @__PURE__ */ I({
		name: "",
		description: "",
		price: "",
		stock: ""
	}), m = /* @__PURE__ */ I(), h = /* @__PURE__ */ I([]), g = /* @__PURE__ */ I([]), _ = /* @__PURE__ */ I([]), v = /* @__PURE__ */ I([]), y = /* @__PURE__ */ I({
		page: 1,
		totalPages: 1,
		hasPreviousPage: !1,
		hasNextPage: !1,
		search: ""
	}), b = /* @__PURE__ */ I(""), x = /* @__PURE__ */ I({
		name: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		postalCode: "",
		country: "US"
	}), S = /* @__PURE__ */ I("accessible"), ee = /* @__PURE__ */ I(!1), C = /* @__PURE__ */ I(!0), w = /* @__PURE__ */ I(""), T = /* @__PURE__ */ I(""), te = /* @__PURE__ */ I([]), ne = /* @__PURE__ */ new Map();
	async function E(e, t = {}) {
		let n = await fetch(e, t), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) throw Error(r?.error || "Request failed");
		return r;
	}
	function re(e) {
		L(S, i.has(e) ? e : "accessible"), typeof document < "u" && (document.documentElement.dataset.theme = U(S)), typeof localStorage < "u" && localStorage.setItem("ram-theme", U(S));
	}
	function ie() {
		L(ee, !U(ee));
	}
	function ae(e) {
		re(e), L(ee, !1);
	}
	function oe(e, t) {
		return {
			...e,
			...t
		};
	}
	function se(e) {
		L(h, U(h).filter((t) => t.id !== e.id)), L(_, U(_).map((t) => t.id === e.id ? oe(t, e) : t));
	}
	function ce(e) {
		L(g, U(g).map((t) => t.id === e.id ? {
			...t,
			...e
		} : t));
	}
	async function le(e = !1) {
		L(C, !0), L(w, ""), e && L(T, "");
		try {
			L(s, await E("/api/buyer/products"));
		} catch (e) {
			L(w, e.message || "Could not load products.");
		} finally {
			L(C, !1);
		}
	}
	async function ue() {
		L(C, !0), L(w, ""), L(T, "");
		try {
			L(c, await E(`/api/buyer/products/${ro()}`));
		} catch (e) {
			L(w, e.message || "Could not load product.");
		} finally {
			L(C, !1);
		}
	}
	async function de() {
		L(C, !0), L(w, ""), L(T, "");
		try {
			L(u, await E("/api/buyer/cart"));
		} catch (e) {
			L(w, e.message || "Could not load cart.");
		} finally {
			L(C, !1);
		}
	}
	async function fe() {
		L(C, !0), L(w, ""), L(T, "");
		try {
			L(l, (await E("/api/buyer/compare")).items || []);
		} catch (e) {
			L(w, e.message || "Could not load comparison list.");
		} finally {
			L(C, !1);
		}
	}
	async function pe() {
		L(C, !0), L(w, "");
		try {
			L(f, await E("/api/seller/products"));
		} catch (e) {
			L(w, e.message || "Could not load seller inventory.");
		} finally {
			L(C, !1);
		}
	}
	async function D() {
		L(C, !0), L(w, "");
		try {
			L(v, await E("/api/admin/audit-logs"));
		} catch (e) {
			L(w, e.message || "Could not load audit logs.");
		} finally {
			L(C, !1);
		}
	}
	async function me(e = 1, t = U(b)) {
		L(C, !0), L(w, "");
		try {
			let [n, r, i] = await Promise.all([
				E("/api/admin/pending-users"),
				E("/api/admin/products"),
				E(`/api/admin/users?page=${e}&search=${encodeURIComponent(t)}`)
			]);
			L(h, n), L(g, r), L(_, i.users), L(y, {
				page: i.page,
				totalPages: i.totalPages,
				hasPreviousPage: i.hasPreviousPage,
				hasNextPage: i.hasNextPage,
				search: i.search
			}), L(b, i.search || "");
		} catch (e) {
			L(w, e.message || "Could not load moderation data.");
		} finally {
			L(C, !1);
		}
	}
	async function he() {
		L(C, !0), L(w, ""), L(T, "");
		try {
			L(d, await E(`/api/buyer/orders/${io()}`)), L(T, "Your order has been placed successfully.");
		} catch (e) {
			L(w, e.message || "Could not load order confirmation.");
		} finally {
			L(C, !1);
		}
	}
	async function ge() {
		if (L(a, ao()), L(o, oo()), U(o) === "admin-home" || U(o) === "seller-home") {
			L(C, !1), L(w, "");
			return;
		}
		if (U(o) === "admin-moderation") {
			await me();
			return;
		}
		if (U(o) === "admin-audit") {
			await D();
			return;
		}
		if (U(o) === "seller-inventory") {
			await pe();
			return;
		}
		if (U(o) === "cart" || U(o) === "checkout") {
			await de();
			return;
		}
		if (U(o) === "compare") {
			await fe();
			return;
		}
		if (U(o) === "confirmation") {
			await he();
			return;
		}
		if (U(o) === "product") {
			await ue();
			return;
		}
		await le();
	}
	async function _e(e) {
		let t = typeof window > "u" ? 0 : window.scrollY;
		await e(), await Nr(), typeof window < "u" && window.scrollTo({ top: t });
	}
	function ve(e, t) {
		L(p, {
			...U(p),
			[e]: t.currentTarget.value
		});
	}
	function ye(e, t) {
		L(x, {
			...U(x),
			[e]: t.currentTarget.value
		});
	}
	function be(e) {
		L(b, e.currentTarget.value);
	}
	async function xe() {
		L(T, "");
		let e = String(U(p).price).trim(), t = String(U(p).stock).trim(), n = Number(e), r = Number(t);
		if (U(m)?.reportValidity()) {
			if (e === "" || !Number.isFinite(n)) {
				L(T, "Enter a valid number for price.");
				return;
			}
			if (t === "" || !Number.isInteger(r)) {
				L(T, "Enter a whole number for stock.");
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
				}), L(p, {
					name: "",
					description: "",
					price: "",
					stock: ""
				}), L(T, "Listing submitted for admin approval."), await pe();
			} catch (e) {
				L(T, e.message || "Could not create listing.");
			}
		}
	}
	async function Se(e) {
		L(T, "");
		try {
			let t = await E(`/api/admin/approve-user/${e}`, { method: "POST" });
			L(T, "User approved."), se(t);
		} catch (e) {
			L(T, e.message || "Could not approve user.");
		}
	}
	async function Ce(e) {
		L(T, "");
		try {
			let t = await E(`/api/admin/block-user/${e}`, { method: "POST" });
			L(T, "User blocked."), se(t);
		} catch (e) {
			L(T, e.message || "Could not block user.");
		}
	}
	async function we(e) {
		L(T, "");
		try {
			let t = await E(`/api/admin/ban-user/${e}`, { method: "POST" });
			L(T, "User banned."), se(t);
		} catch (e) {
			L(T, e.message || "Could not ban user.");
		}
	}
	async function Te(e) {
		L(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/approve`, { method: "POST" });
			L(T, "Product approved."), ce(t);
		} catch (e) {
			L(T, e.message || "Could not approve product.");
		}
	}
	async function Ee(e) {
		L(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/reject`, { method: "POST" });
			L(T, "Product rejected."), ce(t);
		} catch (e) {
			L(T, e.message || "Could not reject product.");
		}
	}
	async function De(e) {
		L(T, "");
		try {
			let t = await E(`/api/admin/products/${e}/delist`, { method: "POST" });
			L(T, "Product delisted."), ce(t);
		} catch (e) {
			L(T, e.message || "Could not delist product.");
		}
	}
	async function Oe() {
		await _e(() => me(1, U(b)));
	}
	async function ke() {
		L(b, ""), await _e(() => me(1, ""));
	}
	async function Ae(e) {
		e < 1 || e > U(y).totalPages || await _e(() => me(e, U(y).search));
	}
	function je(e, t = "success") {
		let n = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
		L(te, [...U(te), {
			id: n,
			message: e,
			type: t
		}]);
		let r = setTimeout(() => {
			L(te, U(te).filter((e) => e.id !== n)), ne.delete(n);
		}, 3200);
		ne.set(n, r);
	}
	async function Me(e) {
		L(T, "");
		try {
			await E("/api/buyer/cart", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					productId: e,
					quantity: 1
				})
			}), L(T, "Item added to cart."), je("Item added to cart.");
		} catch (e) {
			L(T, e.message || "Could not add item to cart."), je(U(T), "error");
		}
	}
	async function Ne() {
		L(T, "");
		try {
			let e = await E("/api/buyer/random_access");
			typeof window < "u" && (window.location.href = `/buyer/products/${e.id}`);
		} catch (e) {
			L(T, e.message || "Could not load a random product.");
		}
	}
	async function Pe(e) {
		L(T, "");
		try {
			await E("/api/buyer/compare", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId: e })
			}), L(T, "Item added to comparison list.");
		} catch (e) {
			L(T, e.message || "Could not add item to list.");
		}
	}
	async function Fe(e) {
		L(T, "");
		try {
			await E(`/api/buyer/cart/${e}/remove`, { method: "POST" }), L(T, "Item removed from cart."), await de();
		} catch (e) {
			L(T, e.message || "Could not remove item.");
		}
	}
	async function Ie(e) {
		L(T, "");
		try {
			await E(`/api/buyer/compare/${e}/remove`, { method: "POST" }), L(T, "Item removed from comparison list."), await fe();
		} catch (e) {
			L(T, e.message || "Could not remove item.");
		}
	}
	async function Le() {
		L(T, "");
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
			L(T, e.message || "Checkout failed."), await de();
		}
	}
	async function Re() {
		L(T, "");
		try {
			await E("/api/logout", { method: "POST" }), window.location.href = "/login";
		} catch (e) {
			L(T, e.message || "Could not log out.");
		}
	}
	Ya(async () => {
		re((typeof localStorage > "u" ? null : localStorage.getItem("ram-theme")) || "accessible"), await ge();
	}), Xa(() => {
		ne.forEach((e) => clearTimeout(e)), ne.clear();
	}), er(() => U(o), () => {
		L(n, so(U(o)));
	}), tr(), Ra();
	var ze = qs();
	ta("13zv0lp", (e) => {
		ir((e) => {
			Pn.title = e ?? "";
		}, [() => (G(co), U(o), W(() => co(U(o))))]);
	});
	var Be = R(ze);
	So(Be, {
		get appMode() {
			return U(a);
		},
		get currentPage() {
			return U(o);
		},
		onLogout: Re
	});
	var k = z(Be, 2), A = R(k);
	Eo(A, {
		get kicker() {
			return U(n), W(() => U(n).kicker);
		},
		get heading() {
			return U(n), W(() => U(n).heading);
		},
		onRefresh: ge
	});
	var j = z(A, 2), Ve = (e) => {
		Z(e, zs());
	}, He = (e) => {
		var t = Bs(), n = R(t, !0);
		O(t), V(() => Q(n, U(w))), Z(e, t);
	}, Ue = (e) => {
		Po(e, {});
	}, We = (e) => {
		Lo(e, {
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
			onAdminUserSearchInput: be,
			approveUser: Se,
			blockUser: Ce,
			banUser: we,
			approveProduct: Te,
			rejectProduct: Ee,
			delistProduct: De,
			searchAdminUsers: Oe,
			clearAdminUserSearch: ke,
			goToAdminUsersPage: Ae,
			get capitalizeRole() {
				return go;
			},
			get formatCurrency() {
				return fo;
			},
			get formatDate() {
				return po;
			},
			get getUserStatus() {
				return _o;
			}
		});
	}, Ge = (e) => {
		ko(e, {
			get adminAuditLogs() {
				return U(v);
			},
			get formatActionType() {
				return vo;
			},
			get formatDate() {
				return po;
			}
		});
	}, Ke = (e) => {
		Cs(e, {});
	}, qe = (e) => {
		Es(e, {
			get sellerForm() {
				return U(p);
			},
			get sellerProducts() {
				return U(f);
			},
			createSellerListing: xe,
			onSellerFormInput: ve,
			get formatCurrency() {
				return fo;
			},
			get sellerListingForm() {
				return U(m);
			},
			set sellerListingForm(e) {
				L(m, e);
			},
			$$legacy: !0
		});
	}, Je = (e) => {
		bs(e, {
			get product() {
				return U(c);
			},
			addToCart: Me,
			addToComparison: Pe,
			get formatCurrency() {
				return fo;
			}
		});
	}, Ye = (e) => {
		Qo(e, {
			get cart() {
				return U(u);
			},
			removeFromCart: Fe,
			get formatCurrency() {
				return fo;
			}
		});
	}, Xe = (e) => {
		is(e, {
			get cart() {
				return U(u);
			},
			placeOrder: Le,
			get formatCurrency() {
				return fo;
			},
			get shippingAddress() {
				return U(x);
			},
			onShippingInput: ye
		});
	}, Ze = (e) => {
		hs(e, {
			get order() {
				return U(d);
			},
			get formatCurrency() {
				return fo;
			},
			get formatDate() {
				return po;
			},
			get formatPaymentMethod() {
				return mo;
			}
		});
	}, Qe = (e) => {
		us(e, {
			get compareItems() {
				return U(l);
			},
			addToCart: Me,
			removeFromCompare: Ie,
			get formatCurrency() {
				return fo;
			},
			get truncate() {
				return ho;
			}
		});
	}, tt = (e) => {
		Ms(e, {
			get products() {
				return U(s);
			},
			addToCart: Me,
			addToComparison: Pe,
			openRandomProduct: Ne,
			get formatCurrency() {
				return fo;
			}
		});
	};
	ji(j, (e) => {
		U(C) ? e(Ve) : U(w) ? e(He, 1) : U(o) === "admin-home" ? e(Ue, 2) : U(o) === "admin-moderation" ? e(We, 3) : U(o) === "admin-audit" ? e(Ge, 4) : U(o) === "seller-home" ? e(Ke, 5) : U(o) === "seller-inventory" ? e(qe, 6) : U(o) === "product" && U(c) ? e(Je, 7) : U(o) === "cart" ? e(Ye, 8) : U(o) === "checkout" ? e(Xe, 9) : U(o) === "confirmation" && U(d) ? e(Ze, 10) : U(o) === "compare" ? e(Qe, 11) : e(tt, -1);
	});
	var M = z(j, 2), N = (e) => {
		var t = Vs(), n = R(t, !0);
		O(t), V(() => Q(n, U(T))), Z(e, t);
	};
	ji(M, (e) => {
		U(T) && e(N);
	}), O(k);
	var nt = z(k, 2), rt = (e) => {
		var t = Us();
		Ri(t, 5, () => U(te), (e) => e.id, (e, t) => {
			var n = Hs();
			let r;
			var i = R(n, !0);
			O(n), V(() => {
				r = la(n, 1, "cart-toast", null, r, { error: U(t).type === "error" }), Q(i, (U(t), W(() => U(t).message)));
			}), Z(e, n);
		}), O(t), Z(e, t);
	};
	ji(nt, (e) => {
		U(te), W(() => U(te).length > 0) && e(rt);
	});
	var it = z(nt, 2), at = R(it), ot = (e) => {
		var t = Ks();
		Ri(t, 5, () => r, Fi, (e, t) => {
			var n = Gs();
			let r;
			var i = R(n), a = R(i, !0);
			O(i);
			var o = z(i, 2), s = (e) => {
				Z(e, Ws());
			};
			ji(o, (e) => {
				U(S), U(t), W(() => U(S) === U(t).value) && e(s);
			}), O(n), V(() => {
				r = la(n, 1, "theme-dock-option", null, r, { "active-theme": U(S) === U(t).value }), ha(n, "aria-checked", (U(S), U(t), W(() => U(S) === U(t).value))), Q(a, (U(t), W(() => U(t).label)));
			}), Y("click", n, () => ae(U(t).value)), Z(e, n);
		}), O(t), Z(e, t);
	};
	ji(at, (e) => {
		U(ee) && e(ot);
	});
	var st = z(at, 2);
	O(it), O(ze), V(() => {
		ha(ze, "data-page", U(o)), ha(st, "aria-expanded", U(ee));
	}), Y("click", st, ie), Z(e, ze), et();
}
var zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js = e((() => {
	eo(), to(), qa(), Qa(), To(), Oo(), No(), Io(), Zo(), rs(), ls(), ms(), ys(), Ss(), Ts(), js(), Ls(), xo(), zs = /* @__PURE__ */ X("<div class=\"state-card\">Loading...</div>"), Bs = /* @__PURE__ */ X("<div class=\"state-card error\"> </div>"), Vs = /* @__PURE__ */ X("<p class=\"status-banner\"> </p>"), Hs = /* @__PURE__ */ X("<div role=\"status\"> </div>"), Us = /* @__PURE__ */ X("<div class=\"cart-toast-stack\" aria-live=\"polite\" aria-label=\"Cart notifications\"></div>"), Ws = /* @__PURE__ */ X("<span class=\"theme-dock-check\">Current</span>"), Gs = /* @__PURE__ */ X("<button type=\"button\" role=\"menuitemradio\"><span> </span> <!></button>"), Ks = /* @__PURE__ */ X("<div class=\"theme-dock-menu\" role=\"menu\" aria-label=\"Theme picker\"></div>"), qs = /* @__PURE__ */ X("<div class=\"page-shell\"><!> <section class=\"catalog\"><!> <!> <!></section> <!> <div class=\"theme-dock\"><!> <button class=\"theme-dock-toggle\" type=\"button\" aria-haspopup=\"menu\">Theme</button></div></div>");
})), Ys = e((() => {})), Xs = /* @__PURE__ */ t((() => {
	Qa(), Js(), Ys(), gi(Rs, { target: document.getElementById("buyer-app") });
}));
//#endregion
export default Xs();
