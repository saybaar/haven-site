const { DateTime } = require("luxon");
let markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {

    let mdOptions = {
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
      };
    let markdownLibrary = markdownIt(mdOptions).use(markdownItFootnote);
    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        },
        htmlTemplateEngine: "njk",
        pathPrefix: "/haven-site/"
    }
};