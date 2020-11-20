const previewVue = document.querySelector("#preview-vue")
const qrcode_vue = document.querySelector(".account_vue")
const doraemon = document.querySelector("#doraemon")
const qrcode_doraemon = document.querySelector(".doraemon")
const canvas = document.querySelector("#canvas")
const qrcode_canvas = document.querySelector(".canvas")
const dingdangUi = document.querySelector("#dingdangUI")
const qrcode_dingdang = document.querySelector(".dingdang_vue")
const width = document.documentElement.clientWidth
function previewQrCode(target, show) {
    target.addEventListener("mouseenter", () => {
        show.classList.add("show")
    })
    target.addEventListener("mouseleave", () => {
        if (Array.from(show.classList).indexOf("show") >= 0) {
            show.classList.remove("show");
        }
    })
}
if (width > 500) {
    previewQrCode(previewVue, qrcode_vue)
    previewQrCode(doraemon, qrcode_doraemon)
    previewQrCode(canvas, qrcode_canvas)
    previewQrCode(dingdangUi, qrcode_dingdang)

}