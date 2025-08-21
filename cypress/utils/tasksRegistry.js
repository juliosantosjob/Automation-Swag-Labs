const fs = require("fs-extra");

function tasksRegistry(on) {
    on("before:run", async () => {
        const pathScreenshot = "cypress/screenshots";

        if (fs.existsSync(pathScreenshot)) {
            try {
                await fs.remove(pathScreenshot);
                console.log("Apagando a pasta screenshots!");
            } catch (error) {
                console.log(error);
            }
        }
    });
};

module.exports = {
    tasksRegistry
}