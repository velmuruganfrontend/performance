// ==============================================
// start : Factors Code - Anirudh
// ==============================================
(function(c){var s=document.createElement("script");s.type="text/javascript";if(s.readyState){s.onreadystatechange=function(){if(s.readyState=="loaded"||s.readyState=="complete"){s.onreadystatechange=null;c()}}}else{s.onload=function(){c()}}s.src="https://app.factors.ai/assets/factors.js";s.async=true;d=!!document.body?document.body:document.head;d.appendChild(s)})(function(){factors.init("9ioeac5n0wgsnsj9nu7inhh6ly9nue3r")});
// ==============================================
// End : Factors Code
// ==============================================

// ==============================================
// start : Customfit Code - Anirudh
// ==============================================
(function (c, f, i, t, a, b, e) {
    if(c.customFit) return;
    c.customFit = {e : [], track: function(t) {c.customFit.e.push(t)}}
    console.log("CustomFit.ai init started!");
    document.getElementsByTagName("HTML")[0].style.visibility = "hidden";
    setTimeout(function(){if(document.getElementsByTagName("HTML")[0].style.visibility === "hidden")document.getElementsByTagName("HTML")[0].style.visibility = "visible";},3000);
    a = f.getElementsByTagName('script')[0];
    b = f.createElement('script');
    b.async = false;
    b.id = 'cfjs';
    b.setAttribute('crossorigin','*');
    b.deferred = false;
    var icff = function () {
    var customFit = new CustomFit.default();
    var key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoiNjhhMDAxNTAtNDc0YS0xMWVhLWEyNjUtZDlkNDQwN2MyZDQwIiwicHJvamVjdF9pZCI6IjdhNzI4OTIwLTQ3NGEtMTFlYS1hMjY1LWQ5ZDQ0MDdjMmQ0MCIsImVudmlyb25tZW50X2lkIjoiN2E3ZjVhNjAtNDc0YS0xMWVhLWEyNjUtZDlkNDQwN2MyZDQwIiwiZGltZW5zaW9uX2lkIjoiN2E4MGUxMDAtNDc0YS0xMWVhLWEyNjUtZDlkNDQwN2MyZDQwIiwiYXBpX2FjY2Vzc19sZXZlbCI6IkNMSUVOVCIsImtleV9pZCI6IjdhODliYWEwLTQ3NGEtMTFlYS1hMjY1LWQ5ZDQ0MDdjMmQ0MCIsImlzcyI6IjVyWDdCN0l4OHA4TG5NRUx5UHpXQXRqRFFzbFg3aVdjIiwiaWF0IjoxNTgwODE5NTc5fQ.0ydbsAS7mSaNBu8K_rYUIB3Sn6yiTmL_bAjwp2Tz6Ok";
    var cfUserBuilder = new CustomFit.CFUser.Builder();
    var cfg = {personalize:true,maintainSession:false,sendPageTrack:true}
    customFit.init(cfUserBuilder.build(), key, cfg).then(function (value) {
    console.log("CustomFit.ai is at your service")
    }).catch(function (err) {
    console.log("Error CustomFit.ai",err);
    });
    c.customFit = customFit
    }
    if (b.readyState) { // only required for IE <9
    b.onreadystatechange = icff;
    } else { //Others
    b.onload = icff;
    };
    b.src = i;
    b.type = 'text/javascript';
    a.parentNode.insertBefore(b,a);
})(window, document, 'https://sdk.customfit.ai/cf-js-sdk-min.js');
// ==============================================
// End : Customfit Code
// ==============================================

// ==============================================
// Start : Zoominfo
// ==============================================
(function () {
    var zi = document.createElement('script');
    zi.type = 'text/javascript';
    zi.async = true;
    zi.src = 'https://ws.zoominfo.com/pixel/Sdc26EFTsZJpKg8iQEAE';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(zi, s);
})();
// ==============================================
// End : Zoominfo
// ==============================================