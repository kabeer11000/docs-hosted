const params = new URL(import.meta.url).searchParams;
const containerId = params.get("containerId");
const content = await window.fetch(params.get("file")).then(res => res.text());
document.getElementById(containerId).innerHTML = content;
document.getElementById(params.get("id")).remove();
