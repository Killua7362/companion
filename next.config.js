/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents:true
    },
    experimental:{serverActions:true},
    images:{
        domains:[
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig
