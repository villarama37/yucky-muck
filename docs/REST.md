# Test API Documentation
## Version: 0.0.1

### /v1/MyModels/{id}

#### GET
##### Summary:

Get the MyModel that has the supplied id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | example model definition | [MyModel](#mymodel) |
| 403 | Forbidden | string |

### Models


#### MyModel

example model definition

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer | ID of the example model | Yes |
| description | string | Description of the example model | No |