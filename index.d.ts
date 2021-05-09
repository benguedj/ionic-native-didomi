import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Didomi
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Didomi } from '@ionic-native/didomi';
 *
 *
 * constructor(private didomi: Didomi) { }
 *
 * ...
 *
 *
 * this.didomi.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class DidomiOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @return {Promise<string>} Returns a promise that resolves when something happens
     */
    shareConsent(): Promise<string>;
}

export declare const Didomi: DidomiOriginal;