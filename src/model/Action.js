/**
 * DaDaPush Public API
 * DaDaPush: Real-time Notifications App Send real-time notifications through our API without coding and maintaining your own app for iOS or Android devices.
 *
 * The version of the OpenAPI document: v1
 * Contact: contacts@dadapush.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Action model module.
 * @module model/Action
 * @version 1.0.0
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * @alias module:model/Action
     * @param name {String} action button name
     * @param type {module:model/Action.TypeEnum} fix value: link
     * @param url {String} action url
     */
    constructor(name, type, url) { 
        
        Action.initialize(this, name, type, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, url) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Action} obj Optional instance to populate.
     * @return {module:model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * action button name
 * @member {String} name
 */
Action.prototype['name'] = undefined;

/**
 * fix value: link
 * @member {module:model/Action.TypeEnum} type
 */
Action.prototype['type'] = undefined;

/**
 * action url
 * @member {String} url
 */
Action.prototype['url'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Action['TypeEnum'] = {

    /**
     * value: "link"
     * @const
     */
    "link": "link"
};



export default Action;
