import { ActionParams } from "../support/interfaces";
import Action from "./action";
/**
 * Destroy action for sending a delete mutation. Will be used for record.$destroy().
 */
export default class Destroy extends Action {
    /**
     * Registers the record.$destroy() and record.$deleteAndDestroy() methods and
     * the destroy Vuex Action.
     */
    static setup(): void;
    /**
     * @param {State} state The Vuex state
     * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
     * @param {number} id ID of the record to delete
     * @returns {Promise<any>} true
     */
    static call({ state, dispatch }: ActionParams, { id, args }: ActionParams): Promise<boolean>;
}
