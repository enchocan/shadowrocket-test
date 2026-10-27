// Non-invasive browse request diagnostic. Never modifies request/response.
try {
 const h=$request.headers||{};
 const keys=Object.keys(h);
 const pick=(k)=>{const found=keys.find(x=>x.toLowerCase()===k);return found?String(h[found]).slice(0,100):"missing";};
 console.log("[YT-BROWSE-V3] request="+$request.url+" content-type="+pick("content-type")+" client="+pick("x-youtube-client-name")+" version="+pick("x-youtube-client-version"));
} catch(e){console.log("[YT-BROWSE-V3] error="+String(e));}
$done({});
