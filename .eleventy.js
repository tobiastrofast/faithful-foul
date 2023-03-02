// .eleventy.js
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.setServerOptions({
        port: 8090
    })
    return {
        // markdownTemplateEngine: 'njk',
        // dataTemplateEngine: 'njk',
        // htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "docs"
        }
    }
};