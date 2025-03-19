// Remove div's and blockquote's from the MD files in src/

const fs = require("fs");
const path = require("path");

const summaryFile = "SUMMARY.md";

const tocMarker = "<!-- TOC PLACEHOLDER -->";

function readDirectory(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((item) => {
        if (item.isDirectory()) {
            readDirectory(path.join(dir, item.name));
        } else if (item.isFile()) {
            processFile(path.join(dir, item.name));
        } else {
            console.log("Something wrong: {}", item.name);
        }
    });
}

function processFile(file) {
    if (!path.basename(file).startsWith("00-")) return;
    if (path.extname(file) != ".md") {
        return "";
    }
    contents = fs.readFileSync(file, 'utf8');
    let index = contents.indexOf(tocMarker);
    if (index == -1) return;
    let result = contents.substring(0, index + tocMarker.length) + '\n';
    fs.writeFileSync(file, result);
    process.stdout.write("Removing from: " + file + '\n');
}

if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.resolve(process.argv[2]);

removeTOC();


function removeTOC() {
    readDirectory(sourceDir);
    let summaryPath = path.join(sourceDir, summaryFile);
    fs.rmSync(summaryPath, { force: true });
    
    process.stdout.write("Deleting: " + summaryPath + '\n');
    
        console.log(`\nProcess complete.\nAll TOC were removed.`);
}
