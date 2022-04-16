/** Depends On Asset URLS **/
!(async () => {
    const assets = window["__kn.website.static.research.blog:renderer.assetURLS"];
    if (! assets) return console.error("Asset Loader Failed, Asset URLs Not Set: ")
    const objectToProps = (object) => Object.entries(object).map((key, value) => `${key}="${value}"`).join(" ")
    const setAttributes = (el, attrs) => Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));

    for (const asset of assets) {
        const element = document.createElement(asset.type);
        setAttributes(element, asset.optionalProps || {});
        document[asset.attach === "head" ? "head" : "body"][asset.position === "top" ? "prepend" : "append"](element);
    }
})();
