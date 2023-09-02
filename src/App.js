import React from "react";
import Background from "./assets/Components/Background/Background";
import {storeConfig} from "./assets/configs/store-config";
import List from "./assets/Components/List/List";
import Panel from './assets/Components/Panel/Panel';
import theme from "./App.module.css"

const App = (props) => {
    const panel = props.dispatch({type: storeConfig.getPanel});
    const list = props.dispatch({type: storeConfig.getList});

    return (
        <div className={theme.app}>
            <Background />
            <List
                list={list}
                onClick={(id) => props.dispatch(
                    {
                        type: storeConfig.showProj,
                        id: id,
                    })
                }
            />
            <Panel
                status={panel}
                close={() => props.dispatch({
                    type: storeConfig.closePanel
                })}
            />

        </div>
    );
}

export default App;
