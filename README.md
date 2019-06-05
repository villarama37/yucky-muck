# Hapi Starter Kit

**Hapi Starter Kit** is a **reference service** to be used as a template for 
building all node.js services with [hapi.js](https://hapijs.com/). The reference contains 
the foundations and plumbing for everything that is needed to successfully develop, test and 
deploy a production-ready service so that developers can focus on delivering business value.

## Steps for creating a new service

### Provision github repo and development environment
Once you are ready to break ground on a new service, you will need to contact 
DevOps and provide them with the following:

- Name of service
- JIRA ticket for the new service
- Port number that the service will run on
- Target release-to-production date (if applicable)

DevOps will provision a new github repo using a carbon copy of hapi-starter-kit and 
make the necessary configurations to [harmony-cloud9](https://github.com/Science37/harmony-cloud9)
so that the service can be developed in the Cloud9 development environment. Once these steps are done, you 
can begin development on the new service.

### Expose route(s) on API Gateway
If the services will have an API, the routes will need to be added to the API Gateway, and
any required or applicable middleware (such as auth) for the routes will need to be configured. 
For further instructions, refer to [Express API Gateway](https://github.com/Science37/nora-api-gateway)


## Contribution Guidelines

If common features are developed or there are architectural improvements that all services will benefit from,
these should be added to the hapi-starter-kit. While there are no fast and hard rules on what these are,
a general guideline should be that all services use them. For other cases, developing a 
[https://hapijs.com/tutorials/plugins](hapi plugin) would be a better way to go. If the plugin contains 
very common / shared features, such as authorization, this would be a good place to add an example for 
using the plugin.

To make a change to the repo, make sure the VIP process is followed and that there is a PR opened targeting master 
and referencing the IS / FS documenting the changes. The PR will be approved by the codeowners of the repo.

Any changes to the package.js file will require review and approval by a security architect.


## Development Guidelines

* Before making a pull request:
  * Pass ESLint
  * Write API and/or Unit tests (>XX% coverage)
  * Pass API and Unit tests
* Only access notification-service-specific tables
* Use async/await when possible
* Write mocks for DAO methods
