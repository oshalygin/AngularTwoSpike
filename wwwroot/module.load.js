System.config({
    packages: {
        app: {
            format: "register",
            defaultExtension: "js"
        }
    }
});
System.import("application/application.component.js")
    .then(null, console.error.bind(console));
System.import("application/jedis.component.js")
    .then(null, console.error.bind(console));
System.import("application/article.component.js")
    .then(null, console.error.bind(console));