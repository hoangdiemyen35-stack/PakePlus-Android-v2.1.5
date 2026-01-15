window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
    console.log('origin', origin, isBaseTargetBlank)
    if (
        origin && 
        origin.href && 
        (origin.href.startsWith('http://') || origin.href.startsWith('https://')) &&
        ((origin.target === '_blank') || isBaseTargetBlank)
    ) {
        e.preventDefault()
        e.stopPropagation()
        console.log('handle origin 拦截外部跳转:', origin.href)
    } else {
        console.log('not handle origin', origin)
    }
}
// 全局绑定点击事件，捕获阶段执行，优先级最高，必须加！
document.addEventListener('click', hookClick, true);