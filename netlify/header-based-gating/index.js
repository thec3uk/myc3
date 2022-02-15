module.exports = {
  onPreBuild: ({
    utils: { build },
    inputs: { http_header_name },
    netlifyConfig,
  }) => {
    console.log(http_header_name);
    console.log(netlifyConfig.build.environment.INCOMING_HOOK_BODY);
  },
};
