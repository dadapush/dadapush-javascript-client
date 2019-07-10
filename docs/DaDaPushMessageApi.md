# DadapushClient.DaDaPushMessageApi

All URIs are relative to *https://www.dadapush.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](DaDaPushMessageApi.md#createMessage) | **POST** /api/v1/message | push Message to a Channel
[**deleteMessage**](DaDaPushMessageApi.md#deleteMessage) | **DELETE** /api/v1/message/{messageId} | delete a Channel Message
[**getMessage**](DaDaPushMessageApi.md#getMessage) | **GET** /api/v1/message/{messageId} | get a Channel Message
[**getMessages**](DaDaPushMessageApi.md#getMessages) | **GET** /api/v1/messages | get Message List



## createMessage

> ResultOfMessagePushResponse createMessage(body, opts)

push Message to a Channel

&lt;h2&gt;Rate Limit:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;1 request per 1s&lt;/li&gt;&lt;li&gt;30 request per 1m&lt;/li&gt;&lt;li&gt;500 request per 1h&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Result code/errmsg List:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;0: ok&lt;/li&gt;&lt;li&gt;1: server error&lt;/li&gt;&lt;li&gt;101: channel is exists&lt;/li&gt;&lt;li&gt;102: channel is not exists&lt;/li&gt;&lt;li&gt;103: channel token error&lt;/li&gt;&lt;li&gt;104: channel is not exists&lt;/li&gt;&lt;li&gt;105: message is not exists&lt;/li&gt;&lt;li&gt;204: bad request&lt;/li&gt;&lt;li&gt;205: permission deny&lt;/li&gt;&lt;li&gt;206: too many request, please after 5 minutes to try!&lt;/li&gt;&lt;li&gt;301: duplicate username/email&lt;/li&gt;&lt;li&gt;302: user is not exists&lt;/li&gt;&lt;li&gt;303: user password is error&lt;/li&gt;&lt;li&gt;304: client push token is error&lt;/li&gt;&lt;li&gt;305: user is disabled&lt;/li&gt;&lt;li&gt;306: your subscription is expired&lt;/li&gt;&lt;li&gt;307: user not subscribe channel&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import DadapushClient from 'dadapush-client';

let apiInstance = new DadapushClient.DaDaPushMessageApi();
let body = new DadapushClient.MessagePushRequest(); // MessagePushRequest | body
let opts = {
  'xChannelToken': "xChannelToken_example" // String | see: https://www.dadapush.com/channel/list
};
apiInstance.createMessage(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MessagePushRequest**](MessagePushRequest.md)| body | 
 **xChannelToken** | **String**| see: https://www.dadapush.com/channel/list | [optional] 

### Return type

[**ResultOfMessagePushResponse**](ResultOfMessagePushResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMessage

> Result deleteMessage(messageId, opts)

delete a Channel Message

&lt;h2&gt;Rate Limit:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;10 request per 1s&lt;/li&gt;&lt;li&gt;100 request per 1m&lt;/li&gt;&lt;li&gt;1000 request per 1h&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Result code/errmsg List:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;0: ok&lt;/li&gt;&lt;li&gt;1: server error&lt;/li&gt;&lt;li&gt;101: channel is exists&lt;/li&gt;&lt;li&gt;102: channel is not exists&lt;/li&gt;&lt;li&gt;103: channel token error&lt;/li&gt;&lt;li&gt;104: channel is not exists&lt;/li&gt;&lt;li&gt;105: message is not exists&lt;/li&gt;&lt;li&gt;204: bad request&lt;/li&gt;&lt;li&gt;205: permission deny&lt;/li&gt;&lt;li&gt;206: too many request, please after 5 minutes to try!&lt;/li&gt;&lt;li&gt;301: duplicate username/email&lt;/li&gt;&lt;li&gt;302: user is not exists&lt;/li&gt;&lt;li&gt;303: user password is error&lt;/li&gt;&lt;li&gt;304: client push token is error&lt;/li&gt;&lt;li&gt;305: user is disabled&lt;/li&gt;&lt;li&gt;306: your subscription is expired&lt;/li&gt;&lt;li&gt;307: user not subscribe channel&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import DadapushClient from 'dadapush-client';

let apiInstance = new DadapushClient.DaDaPushMessageApi();
let messageId = 789; // Number | messageId
let opts = {
  'xChannelToken': "xChannelToken_example" // String | see: https://www.dadapush.com/channel/list
};
apiInstance.deleteMessage(messageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **Number**| messageId | 
 **xChannelToken** | **String**| see: https://www.dadapush.com/channel/list | [optional] 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessage

> ResultOfMessageObject getMessage(messageId, opts)

get a Channel Message

&lt;h2&gt;Rate Limit:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;10 request per 1s&lt;/li&gt;&lt;li&gt;100 request per 1m&lt;/li&gt;&lt;li&gt;1000 request per 1h&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Result code/errmsg List:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;0: ok&lt;/li&gt;&lt;li&gt;1: server error&lt;/li&gt;&lt;li&gt;101: channel is exists&lt;/li&gt;&lt;li&gt;102: channel is not exists&lt;/li&gt;&lt;li&gt;103: channel token error&lt;/li&gt;&lt;li&gt;104: channel is not exists&lt;/li&gt;&lt;li&gt;105: message is not exists&lt;/li&gt;&lt;li&gt;204: bad request&lt;/li&gt;&lt;li&gt;205: permission deny&lt;/li&gt;&lt;li&gt;206: too many request, please after 5 minutes to try!&lt;/li&gt;&lt;li&gt;301: duplicate username/email&lt;/li&gt;&lt;li&gt;302: user is not exists&lt;/li&gt;&lt;li&gt;303: user password is error&lt;/li&gt;&lt;li&gt;304: client push token is error&lt;/li&gt;&lt;li&gt;305: user is disabled&lt;/li&gt;&lt;li&gt;306: your subscription is expired&lt;/li&gt;&lt;li&gt;307: user not subscribe channel&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import DadapushClient from 'dadapush-client';

let apiInstance = new DadapushClient.DaDaPushMessageApi();
let messageId = 789; // Number | messageId
let opts = {
  'xChannelToken': "xChannelToken_example" // String | see: https://www.dadapush.com/channel/list
};
apiInstance.getMessage(messageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **Number**| messageId | 
 **xChannelToken** | **String**| see: https://www.dadapush.com/channel/list | [optional] 

### Return type

[**ResultOfMessageObject**](ResultOfMessageObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessages

> ResultOfPageResponseOfMessageObject getMessages(page, pageSize, opts)

get Message List

&lt;h2&gt;Rate Limit:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;1 request per 1s&lt;/li&gt;&lt;li&gt;45 request per 1m&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Result code/errmsg List:&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;0: ok&lt;/li&gt;&lt;li&gt;1: server error&lt;/li&gt;&lt;li&gt;101: channel is exists&lt;/li&gt;&lt;li&gt;102: channel is not exists&lt;/li&gt;&lt;li&gt;103: channel token error&lt;/li&gt;&lt;li&gt;104: channel is not exists&lt;/li&gt;&lt;li&gt;105: message is not exists&lt;/li&gt;&lt;li&gt;204: bad request&lt;/li&gt;&lt;li&gt;205: permission deny&lt;/li&gt;&lt;li&gt;206: too many request, please after 5 minutes to try!&lt;/li&gt;&lt;li&gt;301: duplicate username/email&lt;/li&gt;&lt;li&gt;302: user is not exists&lt;/li&gt;&lt;li&gt;303: user password is error&lt;/li&gt;&lt;li&gt;304: client push token is error&lt;/li&gt;&lt;li&gt;305: user is disabled&lt;/li&gt;&lt;li&gt;306: your subscription is expired&lt;/li&gt;&lt;li&gt;307: user not subscribe channel&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import DadapushClient from 'dadapush-client';

let apiInstance = new DadapushClient.DaDaPushMessageApi();
let page = 1; // Number | greater than 1
let pageSize = 10; // Number | range is 1,50
let opts = {
  'xChannelToken': "xChannelToken_example" // String | see: https://www.dadapush.com/channel/list
};
apiInstance.getMessages(page, pageSize, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| greater than 1 | [default to 1]
 **pageSize** | **Number**| range is 1,50 | [default to 10]
 **xChannelToken** | **String**| see: https://www.dadapush.com/channel/list | [optional] 

### Return type

[**ResultOfPageResponseOfMessageObject**](ResultOfPageResponseOfMessageObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

