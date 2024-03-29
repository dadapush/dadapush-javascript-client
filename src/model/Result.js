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
 * The Result model module.
 * @module model/Result
 * @version 1.0.0
 */
class Result {
    /**
     * Constructs a new <code>Result</code>.
     * @alias module:model/Result
     * @param code {Number} 
     * @param errmsg {String} 
     */
    constructor(code, errmsg) { 
        
        Result.initialize(this, code, errmsg);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, errmsg) { 
        obj['code'] = code;
        obj['errmsg'] = errmsg;
    }

    /**
     * Constructs a <code>Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Result} obj Optional instance to populate.
     * @return {module:model/Result} The populated <code>Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Result();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('errmsg')) {
                obj['errmsg'] = ApiClient.convertToType(data['errmsg'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} code
 */
Result.prototype['code'] = undefined;

/**
 * @member {Object} data
 */
Result.prototype['data'] = undefined;

/**
 * @member {String} errmsg
 */
Result.prototype['errmsg'] = undefined;






export default Result;

