module.exports = {
  // Port, default 3000
  port: 3002,
  // REST api root, default "/"
  root: '/',
  // hostname
  host: 'http://localhost:3002',
  // mongodb url default: "mongodb://localhost:27088"
  mongo: 'mongodb://root:root@localhost:27017',
  // database name
  db: 'dbName',
  // mongoDb client options
  // http://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#.connect
  mongoOptions: {},

  // enable cors using the cors module https://www.npmjs.com/package/cors
  cors: { origin: true },
  // enable gzip compression using the compression module https://www.npmjs.com/package/compression
  compress: {},
  // enable helmet module https://www.npmjs.com/package/helmet
  helmet: {},
  // static file server, by default is "public" in the execution dir
  static: 'public',
  // root path for static file serving, by default "/"
  staticRoot: '/',
  // personalized middleware, executed before REST api
  // middleware: [myFunction],
  // Plugins, executed before REST api
  // plugins are functions that receives 3 arguments and returns express middleware
  // (config: MoserConfig, db: MongodbInstance, Client: MongodbClient)=> ExpressMiddleware || ExpressMiddleware[]
  // plugins: [myPluginFunction],
  // default pagination limit
  pagination: 10,
  // set as true to enable trust proxy on express
  trustProxy: false,
  // custom error handler
  // errorHandler: (req.res,next,err)=>{/* custom error handler */},

  // shutdown function, to gracefully stop the server
  // notice that this function returns another function
  // shutdown: (config, ExpressServer, mongodbClient)=>()=>{/*custom shutdown function here  */}

  // extra settings
  // settings:{
  //   // avoid $where queries (To Avoid noSQL attacks), is enabled by default
  //   restrictWhereQuery: true
  // }

  resources: {
    users: {
      auth: {
        local: ['email', 'password'],
      },
    },
  },
  jwtSecret: 'secret', // by default is "secret", used to sign token
  bcryptRounds: 1, //used to hash passwords by default is 1
};
