module.exports = {
    mount: {
        dist: "/",
        src: "/",
    },
    plugins: [
        ["@snowpack/plugin-postcss"]
    ],
    devOptions: {
        open: "none"
    },
    optimize: {
        minify: true
    }
}