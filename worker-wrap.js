// Laadt de Tesseract-worker. De taaldata heet nld-taal.wasm zodat elke host het bestand serveert.
var _f = self.fetch.bind(self);
self.fetch = function (u, o) { if (typeof u === 'string' && /\.traineddata(\.gz)?$/.test(u)) u = u.replace(/[^\/]*\.traineddata(\.gz)?$/, 'nld-taal.wasm'); return _f(u, o); };
importScripts('worker.min.js');
