import {storeConfig} from "../configs/store-config";
import listConfig from "../configs/list-config";

let store = {
    render: () => {},

    data: {
       panel: false,
        list: listConfig
    },

    dispatch(action) {
        switch (action.type) {
            case storeConfig.getPanel:
                return this.data.panel;

            case storeConfig.getList:
                return this.data.list;

            case storeConfig.showProj:
                this.data.panel = {
                    id: action.id,
                    data: this.data.list[action.id],
                }
                this.render();
                break;

            case storeConfig.closePanel:
                this.data.panel = false;
                this.render();
                break;

            default:
                break;
        }
    },

    observer(subscriber) {
        this.render = subscriber;
        this.render();
    }
};

export default store