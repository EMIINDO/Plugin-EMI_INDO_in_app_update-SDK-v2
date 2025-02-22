"use strict";
{


    globalThis.C3.Plugins.EMI_INDO_in_app_update.Instance = class in_app_updateInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }

            if (typeof cordova === 'undefined') {
                return;
            }

            this.ins = globalThis.C3.Plugins.EMI_INDO_in_app_update.Cnds;
            this.cd = cordova.plugins.inappupdate;
            this.res = "";

        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


    };
}