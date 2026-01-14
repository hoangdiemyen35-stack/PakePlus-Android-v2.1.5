window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
    // 合并【所有a链接】的拦截逻辑：普通链接+_blank链接+全局默认blank链接 全部拦截
    if (origin && origin.href) {
        e.preventDefault() // 彻底阻止「跳浏览器」的默认行为
        location.href = origin.href // 强制在APP内置WebView打开
    }
}

// 重写JS的window.open方法，拦截所有JS代码触发的跳转
window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

// 【最关键的这一行！你漏掉的总开关，必须加上】
document.addEventListener('click', hookClick, { capture: true })