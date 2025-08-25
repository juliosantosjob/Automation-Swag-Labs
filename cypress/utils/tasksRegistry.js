const fs = require("fs-extra");
const pathScreenshot = "cypress/screenshots";

function tasksRegistry(on) {
    on("before:run", async () => {
        if (fs.existsSync(pathScreenshot)) {
            try {
                fs.remove(pathScreenshot);
                console.log("Apagando a pasta screenshots!");
            } catch (error) {
                console.log(error);
            }
        }
    });
};

module.exports = {
    tasksRegistry
};