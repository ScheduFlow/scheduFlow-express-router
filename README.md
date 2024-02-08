# scheduFlow-express-router

### Why Use
- express 서버의 Router를 효율적으로 관리하기 위한 목적이다.
- fly.io 배포 환경에서 모듈화한 Router가 함께 정상적으로 배포되지 않는다.

### USE
```sh
$ npm install scheduflow-express-router-npm
```
### PUBLISH
```sh
$ npm login
$ npm publish
```

### CONSTRAINT
- 이 npm 모듈은 [scheduFlow-express](https://www.npmjs.com/package/replica3179) 배포 시 Router 사용을 목적으로 하고 있으므로 타 프로그램에서는 정상적으로 동작하지 않을 수 있다.
- WSL 개발 환경을 사용했으므로 다른 OS 환경에서는 정상적으로 동작하지 않을 수 있다.
