# Writing a Base85 encoder/decoder written in pure javascript.

Where base64 adds approximately 1/3, base85 only adds about 1/4. Of course there's a tradeoff. The Base85 alphabet includes characters that might not be as friendly as the base64 alphabet. While it's still only printable characters, the Ascii85 specification contains quotes (' and ") which needs escaping in many programming languages, and the ZeroMQ specification contains < and > which need escaping in most (all?) SGML languages.

IPv6 encoding should only be used for encoding IPv6 addresses. When using IPv6, input for encoding must always be 16 bytes, and input for decoding must always be 20 bytes.

ZeroMQ's version (z85) require according to the specification) string input to be divisible by 5, and binary input to be divisible by 4.

```js
function encode_ascii85(a) {
  var b, c, d, e, f, g, h, i, j, k;
  for (!/[^\x00-\xFF]/.test(a), b = "\x00\x00\x00\x00".slice(a.length % 4 || 4), a += b, 
  c = [], d = 0, e = a.length; e > d; d += 4) f = (a.charCodeAt(d) << 24) + (a.charCodeAt(d + 1) << 16) + (a.charCodeAt(d + 2) << 8) + a.charCodeAt(d + 3), 
  0 !== f ? (k = f % 85, f = (f - k) / 85, j = f % 85, f = (f - j) / 85, i = f % 85, 
  f = (f - i) / 85, h = f % 85, f = (f - h) / 85, g = f % 85, c.push(g + 33, h + 33, i + 33, j + 33, k + 33)) :c.push(122);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(c, b.length), "<~" + String.fromCharCode.apply(String, c) + "~>";
}
```
Function converts `String` to an ASCII85 encoding, however escaping is required to further convert it to the Base85 format.

```js
function decode_ascii85(a) {
  var c, d, e, f, g, h = String, l = "length", w = 255, x = "charCodeAt", y = "slice", z = "replace";
  for ("<~" === a[y](0, 2) && "~>" === a[y](-2), a = a[y](2, -2)[z](/\s/g, "")[z]("z", "!!!!!"), 
  c = "uuuuu"[y](a[l] % 5 || 5), a += c, e = [], f = 0, g = a[l]; g > f; f += 5) d = 52200625 * (a[x](f) - 33) + 614125 * (a[x](f + 1) - 33) + 7225 * (a[x](f + 2) - 33) + 85 * (a[x](f + 3) - 33) + (a[x](f + 4) - 33), 
  e.push(w & d >> 24, w & d >> 16, w & d >> 8, w & d);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(e, c[l]), h.fromCharCode.apply(h, e);
}
```

Converting IPV6 Addresses requires further changes according to the [RFC1924](http://tools.ietf.org/html/rfc1924)

## Potential Bugs
IPv6 encoding specification (RFC1924) requires 128-bit arithmetic, which is rather problematic. I'm thrilled to see that the author of the RFC took this in consideration, specifically - quote from the RFC: "This is not considered a serious drawback in the representation, but a flaw of the processor designs." Silly processor designers. Currently, this is implemented using an arbitrary precision algorithm, it's slow but it does the job. Now let's poke those processor designers for 128-bit processors.
