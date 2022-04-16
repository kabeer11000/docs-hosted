document.addEventListener("DOMContentLoaded", async () => {
    const url = "./markdown.md";
    document.querySelector("content").innerHTML = marked.parse(await (await fetch(url)).text());
    await window.__kn___internal_renderComplete();
});
