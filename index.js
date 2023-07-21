// Async or Q
function register(name, password, cb) {
  checkIfNameExists(name, function (err, result) {
    if (err) {
      return cb('error');
    }
    checkIfPasswordGood(password, function (err, result) {
      if (err) {
        return cb('error');
      }

      createAccount(name, password, function (err, result) {
        if (err) {
          return cb('error');
        }
        createBlog(name, function (err, result) {
          sendEmail(name, function (err, result) {
            callback(result);
          });
        });
      });
    });
  });
}
