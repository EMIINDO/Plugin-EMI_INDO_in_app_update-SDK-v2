"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_in_app_update.Acts = {
        Isupdateavailable()
        {
            if (typeof cordova === 'undefined')
            {
                return;
            }
    
            const self = this;
            this.cd.isUpdateAvailable(success, fail);

            function success(result)
            {
                if (JSON.parse(result))
                {
                    self.res = ("App update available");
                    self._trigger(self.ins.Available)
                }
                else
                {
                    self.res = ("No app update available");
                    self._trigger(self.ins.Noavailable)
                }
            }

            function fail(result)
            {
                self.res = (result);
            }
        }
    };
}