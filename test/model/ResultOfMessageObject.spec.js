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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DadapushClient);
  }
}(this, function(expect, DadapushClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DadapushClient.ResultOfMessageObject();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResultOfMessageObject', function() {
    it('should create an instance of ResultOfMessageObject', function() {
      // uncomment below and update the code to test ResultOfMessageObject
      //var instane = new DadapushClient.ResultOfMessageObject();
      //expect(instance).to.be.a(DadapushClient.ResultOfMessageObject);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new DadapushClient.ResultOfMessageObject();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new DadapushClient.ResultOfMessageObject();
      //expect(instance).to.be();
    });

    it('should have the property errmsg (base name: "errmsg")', function() {
      // uncomment below and update the code to test the property errmsg
      //var instane = new DadapushClient.ResultOfMessageObject();
      //expect(instance).to.be();
    });

  });

}));
