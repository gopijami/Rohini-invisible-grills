export function generateSitemap(services:any[]){

return services.map(page=>({

url:"https://rohiniinvisiblegrills.com/"+page.slug,

lastModified:new Date(),

priority:0.8

}))

}