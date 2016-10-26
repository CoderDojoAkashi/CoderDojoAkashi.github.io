var baseConfig = {
  ejs: {
      dest: './'
  }
};

module.exports = {
    simple: baseConfig,

    copy: {
        base: baseConfig

      , uglify: {}
      , minifyCss: {}
      , minifyHTML: {
            quotes: true
          , loose: true
      , }
      , imagemin: {
            optimizationLevel: 5
          , progressive: true
          , interlaced: true
        }
    }
};
