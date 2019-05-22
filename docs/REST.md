# Test API Documentation
## Version: 0.0.1

### /v1/MyModels/{id}

#### GET
##### Summary:

Get the MyModel that has the supplied id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | ID of the example model | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successful | [Model1](#model1) |

### Models


#### Model1

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer | ID of the example model | No |
| description | string | Description of the example model | No |