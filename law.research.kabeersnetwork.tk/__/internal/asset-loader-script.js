/** Depends On Asset URLS **/
!(async () => {
    const assets = window["__kn.website.static.research.blog:renderer.assetURLS"];
    if (! assets) return console.error("Asset Loader Failed, Asset URLs Not Set: ")
    const objectToProps = (object) => Object.entries(object).map((key, value) => `${key}="${value}"`).join(" ")
    const setAttributes = (el, attrs) => Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));

    for (const asset of assets) {
        const isHTML = asset.type !== "html";
        const element = document.createElement(isHTML ? asset.type : "div");
        setAttributes(element, asset.optionalProps || {});
        if (isHTML) {
            const script = document.createElement("script")
            script.setAttribute("type", "module");
            const jsFileId = Math.random();
            const containerId = Math.random();
            script.setAttribute("id", jsFileId);
            script.setAttribute("src", "/__/internal/html-asset-loader.js?file=" + asset.source + "&id=" + jsFileId + "&containerId=" + containerId);
            document.body.append(script);
        } 
        document[asset.attach === "head" ? "head" : "body"][asset.position === "top" ? "prepend" : "append"](element);
    }
})();
