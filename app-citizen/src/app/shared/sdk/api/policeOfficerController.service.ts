/**
 * coronavirus-server - coronavirus-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { LoopbackCount } from '../model/loopbackCount';
import { PoliceOfficer } from '../model/policeOfficer';
import { PoliceOfficerWithRelations } from '../model/policeOfficerWithRelations';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class PoliceOfficerControllerService {

    protected basePath = 'http://localhost:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * @param where 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerCount(where?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<LoopbackCount>;
    public policeOfficerControllerCount(where?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoopbackCount>>;
    public policeOfficerControllerCount(where?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoopbackCount>>;
    public policeOfficerControllerCount(where?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<LoopbackCount>(`${this.configuration.basePath}/police-officers/count`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<PoliceOfficer>;
    public policeOfficerControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PoliceOfficer>>;
    public policeOfficerControllerCreate(requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PoliceOfficer>>;
    public policeOfficerControllerCreate(requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PoliceOfficer>(`${this.configuration.basePath}/police-officers`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerDeleteById(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public policeOfficerControllerDeleteById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public policeOfficerControllerDeleteById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public policeOfficerControllerDeleteById(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling policeOfficerControllerDeleteById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/police-officers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerFind(filter?: object, observe?: 'body', reportProgress?: boolean): Observable<Array<PoliceOfficerWithRelations>>;
    public policeOfficerControllerFind(filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PoliceOfficerWithRelations>>>;
    public policeOfficerControllerFind(filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PoliceOfficerWithRelations>>>;
    public policeOfficerControllerFind(filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<PoliceOfficerWithRelations>>(`${this.configuration.basePath}/police-officers`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerFindById(id: string, filter?: object, observe?: 'body', reportProgress?: boolean): Observable<PoliceOfficerWithRelations>;
    public policeOfficerControllerFindById(id: string, filter?: object, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PoliceOfficerWithRelations>>;
    public policeOfficerControllerFindById(id: string, filter?: object, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PoliceOfficerWithRelations>>;
    public policeOfficerControllerFindById(id: string, filter?: object, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling policeOfficerControllerFindById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (filter !== undefined && filter !== null) {
            queryParameters = queryParameters.set('filter', <any>filter);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<PoliceOfficerWithRelations>(`${this.configuration.basePath}/police-officers/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public policeOfficerControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public policeOfficerControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public policeOfficerControllerReplaceById(id: string, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling policeOfficerControllerReplaceById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/police-officers/${encodeURIComponent(String(id))}`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param where 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<LoopbackCount>;
    public policeOfficerControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoopbackCount>>;
    public policeOfficerControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoopbackCount>>;
    public policeOfficerControllerUpdateAll(where?: { [key: string]: object; }, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<LoopbackCount>(`${this.configuration.basePath}/police-officers`,
            requestBody,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param id 
     * @param requestBody 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policeOfficerControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public policeOfficerControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public policeOfficerControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public policeOfficerControllerUpdateById(id: string, requestBody?: { [key: string]: object; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling policeOfficerControllerUpdateById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<any>(`${this.configuration.basePath}/police-officers/${encodeURIComponent(String(id))}`,
            requestBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}