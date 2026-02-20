export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17958244663'
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', 'AW-17958244663')
    gtag('config', 'AW-17958244663/Hyj2CIeI4vsbELeilPNC', {
      'phone_conversion_number': '+36 30 549 0689'
    })
  }
})




