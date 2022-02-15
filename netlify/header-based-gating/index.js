module.exports = {
  onPreBuild: ({
    utils: { build },
    inputs: { http_header_name },
    netlifyConfig,
  }) => {
    const webhook_value =
      netlifyConfig.build.environment.INCOMING_HOOK_BODY &&
      JSON.parse(netlifyConfig.build.environment.INCOMING_HOOK_BODY)[
        http_header_name
      ];
    console.log(webhook_value);
    if (
      webhook_value &&
      !netlifyConfig.build.environment.URL.endsWith(webhook_value)
    ) {
      build.cancelBuild("URL doesn't provided value");
    }
  },
};
