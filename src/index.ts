import {
    JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';
import {ICommandPalette} from "@jupyterlab/apputils";
import {IMainMenu} from "@jupyterlab/mainmenu";
import {DataCollect} from "./datacollect";
import {Docs} from "./docs";
import {Menu} from "@phosphor/widgets";
import {Link} from "./link";
import {Supervise} from "./supervise";


/**
 * Initialization data for the JumpUrl extension.
 */

export namespace CommandIDS {
    export const cron_job: string = "DataCollect:cron_job";

    export const bi_core: string = "DataCollect:bi_core";

    export const link: string = "Link";

    export const docs: string = "Docs";

    export const supervise: string = "Supervise"
}


function activateJumpUrl(app: JupyterLab, palette: ICommandPalette, mainMenu: IMainMenu) {
    console.log('JupyterLab extension JumpUrl is activated!');

    let dataCollect = new DataCollect();
    let linkModel = new Link();
    let docsModel = new Docs();
    let superviseModel = new Supervise();

    // 添加menu
    const category = "SubServer";
    const {commands} = app;
    commands.addCommand(CommandIDS.cron_job, {
        label: "CronJob",
        caption: "open cron_job index.html",
        execute: () => {
            console.log('redirect cron_job index.html');
            dataCollect.cron_job()
        }
    });
    commands.addCommand(CommandIDS.bi_core, {
        label: "BiCore",
        caption: "open bi_core index.html ",
        execute: () => {
            console.log('redirect bi_core index.html');
            dataCollect.bi_core();
        }
    });

    commands.addCommand(CommandIDS.link, {
        label: "Links",
        caption: "open links index html",
        execute: () => {
            console.log("jump to links index")
            linkModel.jump();
        }
    });

    commands.addCommand(CommandIDS.docs, {
        label: "Docs",
        caption: "open docs index html",
        execute: () => {
            console.log("jump to docs index")
            docsModel.docs();
        }
    });

    commands.addCommand(CommandIDS.supervise, {
        label: "Supervise",
        caption: "open supervise index html",
        execute: () => {
            console.log("jump to supervise index")
            superviseModel.supervise();
        }
    });


    let menu = new Menu({commands});
    menu.title.label = category;
    [
        CommandIDS.cron_job,
        CommandIDS.bi_core,
        CommandIDS.link,
        CommandIDS.docs,
        CommandIDS.supervise,
    ].forEach(command => {
        palette.addItem({command, category});
        menu.addItem({command});
    });

    mainMenu.addMenu(menu, {rank: 100})
}

const extension: JupyterLabPlugin<void> = {
    id: 'JumpUrl',
    autoStart: true,
    requires: [
        ICommandPalette,
        IMainMenu
    ],
    activate: activateJumpUrl
};

export default extension;
