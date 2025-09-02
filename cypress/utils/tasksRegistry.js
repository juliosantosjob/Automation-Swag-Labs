const fs = require("fs-extra");
const path = require("path");
const projectRoot = path.resolve();

function tasksRegistry(on) {
    on("task", {
        deleteFolder(folderName) {
            const pathFolder = path.join(projectRoot, folderName);

            if (fs.accessSync(pathFolder)) {
                fs.removeSync(pathFolder);
                console.log(`Pasta ${folderName} deletada com sucesso!`);
            } else {
                console.log(`Pasta ${folderName} não encontrada!`);
            }

            return null;
        }
    });
};

module.exports = {
    tasksRegistry
};