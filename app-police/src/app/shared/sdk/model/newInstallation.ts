/**
 * coronavirus-server
 * coronavirus-server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (Schema options: { title: \'NewInstallation\', exclude: [ \'id\' ] })
 */
export interface NewInstallation { 
  [key: string]: object | any;


    deviceId: string;
    pushRegistrationId?: string;
    patientId: string;
    created?: string;
}
