(this.webpackJsonpcookbiryani=this.webpackJsonpcookbiryani||[]).push([[15],{1400:function(r,n){},1623:function(r,n,t){"use strict";t.r(n),function(r){t.d(n,"getED25519Key",(function(){return o}));var a=t(35),e=t(1455),i=t.n(e).a.lowlevel;function o(n){var t;t="string"===typeof n?r.from(n,"hex"):n;var e=new Uint8Array(64),o=[i.gf(),i.gf(),i.gf(),i.gf()],c=new Uint8Array([].concat(Object(a.a)(new Uint8Array(t)),Object(a.a)(new Uint8Array(32)))),f=new Uint8Array(32);i.crypto_hash(e,c,32),e[0]&=248,e[31]&=127,e[31]|=64,i.scalarbase(o,e),i.pack(f,o);for(var s=0;s<32;s+=1)c[s+32]=f[s];return{sk:r.from(c),pk:r.from(f)}}}.call(this,t(24).Buffer)}}]);
//# sourceMappingURL=15.db812e83.chunk.js.map