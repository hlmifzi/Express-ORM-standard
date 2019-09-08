export default {
    port: 3002,
    secretKey: 'sAw3d@Qqqq',
    payLoad: {
        iss: 'http://localhost/',
        aud: 'http://localhost',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }
}