This API is part of professor Rodrigo Manguinho's (Mango) training at Udemy.

The objective of the training is to show how to create an API with a well-defined and decoupled architecture, using TDD (test-oriented programming) as a working methodology, Clean Architecture to distribute responsibilities in layers, always following the principles of SOLID and, whenever possible, applying Design Patterns to solve some common problems.
<br /><br />

> ## Authentication with Facebook

> ## Primary flow
1. Get data (name, email and Facebook ID) from Facebook API
2. Check if there is a user with the email received above
3. Create an account for the user with the data received from Facebook
4. Create an access token, from the user ID, with an expiration of 30 minutes
5. Return the generated access token

> ## Alternative flow: User already exists
3. Update the user account with the data received from Facebook (Facebook ID and name - just update the name if the user account does not have a name)

> ## Exception flow: Invalid or expired token
1. Return an authentication error

> ## Principles

* Single Responsibility
* Open Closed
* Liskov Substitution
* Interface Segregation
* Dependency Inversion
* Separation of Concerns
* Don't Repeat Yourself
* You Aren't Gonna Need It
* Keep It Simple
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory
* Adapter
* Composite
* Decorator
* Command
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Template Method
* Singleton
* Chain of Responsibility
* Proxy

> ## Code Smells (Anti-Patterns)

* Blank Lines
* Comments
* Data Clumps
* Divergent Change
* Duplicate Code
* Inappropriate Intimacy
* Feature Envy
* Large Class
* Long Method
* Long Parameter List
* Middle Man
* Primitive Obsession
* Refused Bequest
* Shotgun Surgery
* Speculative Generality

> ## Methodologies and Designs

* TDD
* Clean Architecture
* DDD
* Refactoring
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases
* Spike (Agile)

> ## Libraries and Tools

* NPM
* Typescript
* Git
* Jest
* Ts-Jest
* Jest-Mock-Extended
* TypeORM
* AWS-SDK
* Multer
* UUID
* Axios
* Postgres
* JsonWebToken
* Express
* Cors
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Rimraf
* In-Memory Postgres Server
* Module-Alias
* Npm Check
* Travis CI
* Coverals
* DotEnv
* Ts-Node-Dev

> ## Features do Typescript

* POO advanced
* Strict Mode
* Interface
* TypeAlias
* Namespace
* Utility Types
* Modularization of Paths
* Settings
* Build

> ## Features de Testes

* Unitary tests
* Integration Tests
* Test Coverage
* Test Doubles
* Mocks
* Stubs
* Spies
* Fakes
