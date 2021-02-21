
import { setupSampleReactProject } from "./setupSampleReactProject";
import * as st from "scripting-tools";
import { join as pathJoin } from "path";

const { sampleReactProjectDirPath } = setupSampleReactProject();

console.log(`Running main in ${sampleReactProjectDirPath}`);

st.execSync(
    `node ${pathJoin(__dirname, "../bin/build-keycloak-theme")}`,
    { "cwd": sampleReactProjectDirPath }
);

