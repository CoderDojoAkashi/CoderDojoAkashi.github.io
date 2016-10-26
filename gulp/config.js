var baseConfig = {
  ejs: {
      dest: 'public/'
  }
};

module.exports = {
    /* 特別な定義が不要なタスクの設定 */
    simple: baseConfig,

    /* copyタスクの設定 */
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
