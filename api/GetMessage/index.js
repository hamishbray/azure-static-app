module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function GetMessage processed a request.');

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      text: 'Hello from the API',
    },
  };
};
