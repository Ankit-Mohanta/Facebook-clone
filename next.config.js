/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "platform-lookaside.fbsbx.com",
      "https://wallpapercave.com",
      "links.papareact.com"
    ]
  }
}

module.exports = nextConfig
// module.exports = {
//   images: {
//     domains: [
//       "links.papareact.com",
//       "platform-lookaside.fbsbx.com",
//       "firebasestorage.googleapis.com",
//     ],
//   },
// };