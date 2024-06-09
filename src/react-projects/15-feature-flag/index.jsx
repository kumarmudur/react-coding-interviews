import { useContext } from "react";

import Accordian from "../01-accordion";
import LightDarkMode from "../08-light-dark-mode";
import RandomColor from "../02-random-color";
import TicTacToe from "../14-tic-tac-toe";
import TreeView from "../06-tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../06-tree-view/data";
import TabTest from "../10-custom-tabs/tabs-test";

const FeatureFlags = () => {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
          key: "showLightAndDarkMode",
          component: <LightDarkMode />,
        },
        {
          key: "showTicTacToeBoard",
          component: <TicTacToe />,
        },
        {
          key: "showRandomColorGenerator",
          component: <RandomColor />,
        },
        {
          key: "showAccordian",
          component: <Accordian />,
        },
        {
          key: "showTreeView",
          component: <TreeView  menus={menus} />,
        },
        {
            key : 'showTabs',
            component : <TabTest/>
        }
      ];

    const checkEnabledFlags = (currentKey) => {
        return enabledFlags[currentKey];
    }

    if (loading) return <h1>Loading data! Please wait</h1>

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map((componentItem) => {
                   return checkEnabledFlags(componentItem.key) ? componentItem.component : null
                })
            }
        </div>
    );
};

export default FeatureFlags;